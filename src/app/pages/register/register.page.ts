import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  public messages: any[] = [];

  public typing: boolean;

  public typingClass: string;

  constructor() { }

  ngOnInit() {

    this.step1();

  }

  public step1() {

    this.typing = true;

    this.typingClass = 'typing top';

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left top',
        text: 'Olá! 😊'
      });

      this.typingClass = 'typing';

    }, 1000);

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left',
        text: 'Que bom ver você aqui!'
      });

    }, 3500);

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left',
        text: 'Sua conta será atrelada ao seu CPF.'
      });

    }, 6000);

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left',
        text: 'Por isso, digite o número do seu CPF.'
      });

      this.typing = false;

    }, 9000);

  }


}
