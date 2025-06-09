import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { AiAssistantService, ApiChatMessage } from '../../services/ai-assistant.service';
import { Recipe } from '../../models/recipe.model';
import { Subscription } from 'rxjs';

interface AiDisplayMessage extends ApiChatMessage {
  role: 'assistant';
  isLoading?: boolean;
  thought?: string;
  isThoughtVisible?: boolean;
}

interface UserDisplayMessage extends ApiChatMessage {
  role: 'user';
}

type DisplayMessage = AiDisplayMessage | UserDisplayMessage;

@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.css']
})
export class AiAssistantComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  
  recipe: Recipe | undefined;
  userInput: string = '';
  
  apiMessages: ApiChatMessage[] = [];
  displayMessages: DisplayMessage[] = [];

  isLoading: boolean = false;
  private apiSubscription: Subscription | undefined;
  
  userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC79rmCvMo2iLyllYr9FQQ7C_l1OXSktROO7wgwDRSH6kWV3eTKCOmP8jzzwiajlRELOVhCj14DrN-aq9KrkmXscDK469iQK6ysIaHGCloQA9sHaOHqIhOykKmQQ4vc230wq_B6F853usaeM-c7KTXvEYTvicFex2kj6lmHD3ureFs8R5xUl-hbWZlueaAw1eVXgcTZSsA-BbTkADdzFfDWLjJVei715pt227qYPunizSlHnTuXh8P4hAah4Pm7u7uZwkcQ5wazGGw';
  aiAvatar = 'assets/images/imagen_chef.webp';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private aiAssistantService: AiAssistantService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('id');
    if (slug) {
      this.recipe = this.recipeService.getRecipeBySlug(slug);
    }
    this.initializeChat();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    this.apiSubscription?.unsubscribe();
  }

  toggleThought(message: AiDisplayMessage): void {
    message.isThoughtVisible = !message.isThoughtVisible;
  }

  private parseAiResponse(fullContent: string): { thought?: string; content: string } {
    const thinkStartTag = '<think>';
    const thinkEndTag = '</think>';

    const start = fullContent.indexOf(thinkStartTag);
    const end = fullContent.indexOf(thinkEndTag);

    if (start !== -1 && end > start) {
      const thought = fullContent.substring(start + thinkStartTag.length, end).trim();
      const content = fullContent.substring(end + thinkEndTag.length).trim();
      return { thought, content };
    }

    return { content: fullContent.trim() };
  }

  sendMessage(): void {
    if (this.isLoading || !this.userInput.trim()) {
      return;
    }

    const userMessage: UserDisplayMessage = { role: 'user', content: this.userInput.trim() };
    this.apiMessages.push(userMessage);
    this.displayMessages.push(userMessage);
    this.userInput = '';
    this.scrollToBottom();

    const aiResponsePlaceholder: AiDisplayMessage = { 
      role: 'assistant', 
      content: '', 
      isLoading: true,
      isThoughtVisible: false
    };
    this.displayMessages.push(aiResponsePlaceholder);
    
    this.isLoading = true;
    let fullResponse = '';

    this.apiSubscription = this.aiAssistantService.getCompletion(this.apiMessages).subscribe({
      next: (token: string) => {
        fullResponse += token;
      },
      error: (error) => {
        console.error('Error en la API de IA:', error);
        aiResponsePlaceholder.isLoading = false;
        aiResponsePlaceholder.content = 'Lo siento, ha ocurrido un error al conectar con el asistente. Por favor, intenta de nuevo más tarde.';
        this.isLoading = false;
      },
      complete: () => {
        const parsed = this.parseAiResponse(fullResponse);
        
        aiResponsePlaceholder.isLoading = false;
        aiResponsePlaceholder.thought = parsed.thought;
        aiResponsePlaceholder.content = parsed.content;
        
        if (fullResponse) {
          this.apiMessages.push({
            role: 'assistant',
            content: fullResponse
          });
        }
        
        this.isLoading = false;
        this.scrollToBottom();
      }
    });
  }

  private initializeChat(): void {
    if (!this.recipe) {
      const errorMessage: AiDisplayMessage = {
        role: 'assistant',
        content: 'No se pudo cargar la receta. Por favor, vuelve a intentarlo.',
        isLoading: false
      };
      this.displayMessages.push(errorMessage);
      return;
    }

    const systemPrompt = this.generateSystemPrompt(this.recipe);
    this.apiMessages.push({ role: 'system', content: systemPrompt });

    const welcomeMessage: AiDisplayMessage = {
      role: 'assistant',
      content: `¡Hola! Soy tu asistente de IA. Estoy aquí para ayudarte con la receta "${this.recipe.name}". ¿Qué te gustaría saber?`,
      isLoading: false
    };
    this.displayMessages.push(welcomeMessage);
  }

  private generateSystemPrompt(recipe: Recipe): string {
    const ingredientsText = recipe.ingredients
      .map(section => `* ${section.section}:\n  - ${section.items.join('\n  - ')}`)
      .join('\n\n');
      
    const instructionsText = recipe.instructions
      .map((step, index) => `${index + 1}. ${step}`)
      .join('\n');

    return `Eres un asistente de cocina experto, amigable y servicial llamado Chefsito. Tu único propósito es responder preguntas sobre la receta que te proporciono a continuación. Basa todas tus respuestas en esta información. Si te preguntan algo no relacionado con la receta, amablemente redirige la conversación de vuelta a la cocina.

IMPORTANTE: Antes de tu respuesta final, debes incluir un bloque de "pensamiento" rodeado por las etiquetas <think> y </think>. Dentro de este bloque, explica tu razonamiento paso a paso sobre cómo llegarás a la respuesta. Luego, fuera de las etiquetas, escribe la respuesta final para el usuario de forma clara y bien formateada, usando sintaxis Markdown para negritas (**texto**) si es necesario.

---
**CONTEXTO DE LA RECETA**

**Nombre:** ${recipe.name}
**Descripción:** ${recipe.description}

**Ingredientes:**
${ingredientsText}

**Instrucciones:**
${instructionsText}
---

Ahora, responde la pregunta del usuario.`;
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}