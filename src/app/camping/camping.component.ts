import { Component } from '@angular/core';
import { CampingService } from '../services/camping.service';

@Component({
  selector: 'app-camping',
  templateUrl: './camping.component.html',
  styleUrls: ['./camping.component.css']
})
export class CampingComponent {
  constructor(private cs:CampingService) { }
  campings:any= []

  ngOnInit(){
    this.campings=this.cs.campings
  }

}
