import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { camping } from '../Core Models/Camping';

@Injectable({
  providedIn: 'root'
})
export class CampingService {
  campings = [
    {id:1 , description : 'good' , nbPlace : 1 , dateDebut : "10-2-2002", dateFin : "12-2-2002",etat : true , image:"../../assets/images/1.jpg"},
    {id:2 , description : 'good' , nbPlace : 1 , dateDebut : "10-2-2002", dateFin : "12-2-2002",etat : true , image:"../../assets/images/1.jpg"},
    {id:3 , description : 'good' , nbPlace : 1 , dateDebut : "10-2-2002", dateFin : "12-2-2002",etat : true , image:"../../assets/images/1.jpg"},
  ]

  constructor() { }
 
}
