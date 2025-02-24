import { Injectable } from '@angular/core';
import { addDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {
  allusers: number = 0;


  constructor(private db: Firestore) {

  }
  ngOnInit(): void {
   
 

  }
  create(user: User) {
    const dbInsatnce = collection(this.db, "sensor")
    return addDoc(dbInsatnce, { ...user });
    //setDoc(doc(dbInsatnce, "4"), { ...user });
    //this.allusers.toString()


  }
  getall() {
    return collection(this.db, "sensor");
  }
}
