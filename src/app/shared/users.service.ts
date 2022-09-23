import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore, query, setDoc, updateDoc} from '@angular/fire/firestore'
import { from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
}
