import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatGptComponent } from './chat-gpt/chat-gpt.component';

const routes: Routes = [
  {
    path: '',
    component: ChatGptComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatGtpRoutingModule {}
