import { Component } from '@angular/core';
import { initializeApp } from "firebase/app"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi-PortFolio';
  ngOnInit():void{
  
    initializeApp ({
      apiKey: "AIzaSyAPeLfbCebrZPC_XUv-rbkaSJZpI4whCDQ",
      authDomain: "mi-portfolio-66e2b.firebaseapp.com",
     });
   }
}
