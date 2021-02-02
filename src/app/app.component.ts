import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  advice: any[]; 
  advice2: any[];


  title = 'advice-app';
  constructor( private service: DataService ){
   
  }
  ngOnInit(){
  
  //Generate Random advice
    const API = 'https://api.adviceslip.com/advice';
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const advice = data.slip.advice;
        console.log(advice);
        this.advice = advice;
       
      }, error=>{
         alert('An unexpected error occoured')
      }
      );
    
    }

    //Generate  I'm feeling lucky advice
    getAdvise(): void {
      const API = 'https://api.adviceslip.com/advice';
      fetch(API)
        .then(response => response.json())
        .then(data => {
          const advice2 = data.slip.advice;
          console.log(advice2);
          this.advice2 = advice2;
          var node = document.createElement("P");
          var textnode = document.createTextNode(advice2);
          node.appendChild(textnode);
          document.getElementById("luckyAdvice").appendChild(node);
        });
    };
// Search api on searchbox
    filteredListOptions() {
  alert("item not found");
    }
  }

