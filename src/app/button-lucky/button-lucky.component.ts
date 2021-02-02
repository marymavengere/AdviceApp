import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-lucky',
  templateUrl: './button-lucky.component.html',
  styleUrls: ['./button-lucky.component.scss']
})
export class ButtonLuckyComponent  {
 advice2 : any[];
  constructor() { }

  getAdvise(): void {

    const API = 'https://api.adviceslip.com/advice';
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const advice2 = data.slip.advice;
        console.log(advice2);
        this.advice2 = advice2;
        var node = document.createElement("span");
        var textnode = document.createTextNode(advice2);
        node.appendChild(textnode);
        document.getElementById("luckyAdvice").appendChild(node);
      });
  };
}


