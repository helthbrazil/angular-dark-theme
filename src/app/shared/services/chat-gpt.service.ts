import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatGptService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getChatResponse(prompt: string): Observable<string> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    });

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map((response) => response.choices[0].message.content),
      catchError((error) => {
        if (error.error && error.error.code === 'insufficient_quota') {
          console.error('Quota exceeded:', error.error.message);
          return of(
            'Quota exceeded. Please check your plan and billing details.'
          );
        }
        console.error('Error getting chat response:', error);
        return of('An error occurred while fetching the response.');
      })
    );
  }
}
