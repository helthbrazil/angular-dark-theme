import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatGptService {
  private apiUrl = environment.gptUrl;

  constructor(private http: HttpClient) { }

  getChatResponse(prompt: string): Observable<string> {
    return this.http.get(this.apiUrl.replace(':TEXT', prompt), { responseType: 'text' }).pipe(
      map((response) => response as string),
      catchError((error: HttpErrorResponse) => {
        if (error.error && error.error.code === 'insufficient_quota') {
          console.error('Quota exceeded:', error.error.message);
          return of('Quota exceeded. Please check your plan and billing details.');
        }
        console.error('Error getting chat response:', error);
        return of('An error occurred while fetching the response.');
      })
    );
  }
}

