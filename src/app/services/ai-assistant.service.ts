import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ApiChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiAssistantService {
  private apiUrl = 'https://api.cerebras.ai/v1/chat/completions';
  private apiKey = environment.cerebrasApiKey;

  constructor() { }

  getCompletion(messages: ApiChatMessage[]): Observable<string> {
    return new Observable<string>(observer => {
      
      const processStream = async () => {
        try {
          const body = {
            model: "qwen-3-32b",
            stream: true,
            max_tokens: 4096,
            temperature: 0.7,
            top_p: 0.95,
            messages: messages
          };

          const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify(body)
          });

          if (!response.ok) {
            const errorBody = await response.json().catch(() => ({}));
            const errorMessage = errorBody.error?.message || `Error HTTP: ${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
          }
          
          if (!response.body) {
            throw new Error('La respuesta de la API no contiene un cuerpo (stream).');
          }

          const reader = response.body.getReader();
          const decoder = new TextDecoder('utf-8');
          
          let buffer = '';

          while (true) {
            const { done, value } = await reader.read();

            if (done) {
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            
            let boundary = buffer.indexOf('\n\n');
            
            while (boundary !== -1) {
              const message = buffer.substring(0, boundary).trim();
              
              buffer = buffer.substring(boundary + 2);
              
              if (message.startsWith('data: ')) {
                const jsonStr = message.substring('data: '.length);

                if (jsonStr.trim() === '[DONE]') {
                  observer.complete();
                  return;
                }
                
                try {
                  const parsed = JSON.parse(jsonStr);
                  const content = parsed.choices[0]?.delta?.content;
                  if (content) {
                    observer.next(content);
                  }
                } catch (e) {
                  console.warn('Se ignoró un fragmento JSON malformado del stream:', jsonStr);
                }
              }
              boundary = buffer.indexOf('\n\n');
            }
          }

          observer.complete();

        } catch (error) {
          observer.error(error);
        }
      };

      processStream();

      return () => {
      };
    });
  }
}