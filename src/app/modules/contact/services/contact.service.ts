import {Injectable} from '@angular/core';
import {addDoc, collection, CollectionReference, Firestore} from "@angular/fire/firestore";
import {Contact} from "../interfaces/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactsCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.contactsCollection = collection(this.firestore, 'contacts');
  }

  addContact(contact: Contact) {
    return addDoc(this.contactsCollection, contact);
  }
}
