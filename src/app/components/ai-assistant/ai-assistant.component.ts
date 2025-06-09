import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.css']
})
export class AiAssistantComponent implements OnInit {
  recipe: Recipe | undefined;
  userInput: string = '';
  messages: ChatMessage[] = [];

  userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC79rmCvMo2iLyllYr9FQQ7C_l1OXSktROO7wgwDRSH6kWV3eTKCOmP8jzzwiajlRELOVhCj14DrN-aq9KrkmXscDK469iQK6ysIaHGCloQA9sHaOHqIhOykKmQQ4vc230wq_B6F853usaeM-c7KTXvEYTvicFex2kj6lmHD3ureFs8R5xUl-hbWZlueaAw1eVXgcTZSsA-BbTkADdzFfDWLjJVei715pt227qYPunizSlHnTuXh8P4hAah4Pm7u7uZwkcQ5wazGGw';
  
  aiAvatar = 'assets/images/imagen_chef.webp';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('id');
    if (slug) {
      this.recipe = this.recipeService.getRecipeBySlug(slug);
    }

    this.messages.push({
      sender: 'ai',
      text: `¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte con la receta "${this.recipe?.name || 'actual'}"?`,
      avatar: this.aiAvatar
    });
  }

  sendMessage(): void {
    if (this.userInput.trim() === '') return;

    this.messages.push({
      sender: 'user',
      text: this.userInput,
      avatar: this.userAvatar
    });

    const userMessage = this.userInput;
    this.userInput = '';

    setTimeout(() => {
      const aiResponse = this.getAIResponse(userMessage);
      this.messages.push({
        sender: 'ai',
        text: aiResponse,
        avatar: this.aiAvatar
      });
    }, 1000);
  }

  private getAIResponse(question: string): string {
    question = question.toLowerCase();
    if (question.includes('sustituir') || question.includes('harina')) {
      return "Sí, puedes sustituir la harina de almendras por harina de todo uso. Sin embargo, la harina de almendras es más densa y no contiene gluten, por lo que la textura del producto final será ligeramente diferente. Puede que necesites ajustar la cantidad de líquido.";
    }
    if (question.includes('vegetariano')) {
      return `Para hacer esta receta vegetariana, puedes reemplazar el ${this.recipe?.name.toLowerCase().includes('pollo') ? 'pollo' : 'ingrediente principal'} con tofu firme, seitán o una mezcla de champiñones portobello. ¡Asegúrate de sazonarlos bien!`;
    }
    return "Esa es una excelente pregunta. Aunque soy una simulación, te recomiendo buscar en foros de cocina para obtener una respuesta de chefs experimentados sobre ese tema.";
  }
}