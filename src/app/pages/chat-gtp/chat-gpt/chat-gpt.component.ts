import { Component, HostListener } from '@angular/core';
import { ChatGptService } from '../../../shared/services/chat-gpt.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../components/button/button.component';
import { marked } from 'marked';

export interface IResponse {
  question: string;
  response: string | Promise<string>;
}
@Component({
  selector: 'neo-chat-gpt',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonComponent],
  templateUrl: './chat-gpt.component.html',
  styleUrl: './chat-gpt.component.css',
})
export class ChatGptComponent {
  text: string = '';
  fecthing = false;
  response: string | Promise<string> | undefined;
  responses: IResponse[] = [];

  constructor(private chatGptService: ChatGptService) {}

  containsMarkdown(text: string) {
    const markdownPattern =
      /(\*{1,2}[^*]+\*{1,2})|(_{1,2}[^_]+_{1,2})|(`[^`]+`)|(#+\s)|(\[.*\]\(.*\))/;
    return markdownPattern.test(text);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.find();
    }
  }

  find(event?: any) {
    if (this.text) {
      this.fecthing = true;
      this.chatGptService.getChatResponse(this.text).subscribe({
        next: (res) => {
          this.response = this.containsMarkdown(res) ? marked(res) : res;
          this.responses.unshift({
            question: this.text,
            response: this.response,
          });
          this.text = '';
          const inputText = document.getElementById('input-text');
          if (inputText) {
            inputText.focus();
          }
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          this.fecthing = false;
        },
      });
    }
  }
}
