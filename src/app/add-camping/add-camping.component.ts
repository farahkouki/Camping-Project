import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators }from '@angular/forms';
import { Router } from '@angular/router';
import { CampingService } from '../services/camping.service';

@Component({
  selector: 'app-add-camping',
  templateUrl: './add-camping.component.html',
  styleUrls: ['./add-camping.component.css']
})
export class AddCampingComponent {
  constructor(private cs :CampingService, private router:Router) { }
  campings = [
    {id:1 , description : 'good' , nbPlace : 1 , dateDebut : "10-2-2002", dateFin : "12-2-2002",etat : true , image:"../../assets/images/1.jpg"},
    {id:2 , description : 'good' , nbPlace : 1 , dateDebut : "10-2-2002", dateFin : "12-2-2002",etat : true , image:"../../assets/images/1.jpg"},
    {id:3 , description : 'good' , nbPlace : 1 , dateDebut : "10-2-2002", dateFin : "12-2-2002",etat : true , image:"../../assets/images/1.jpg"},
  ]
  
formLogin = new FormGroup({
  id: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]), // ID doit être un nombre
  nbPlace: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]), // ID doit être un nombre
  dateDebut: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/) ]), // date
  dateFin: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/) ]), // date
  description: new FormControl('', [Validators.required, Validators.minLength(10)]), // Minimum 10 caractères
  etat :new FormControl(false, [Validators.requiredTrue]),
  

 // description: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]), // Nombre ou nombre avec 2 décimales
 // reservationDate: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/) ]), // date
  

  })


  add(){
   this.cs.campings.push(this.formLogin.value as any)
   this.router.navigate(['/camping'])
  }
}
