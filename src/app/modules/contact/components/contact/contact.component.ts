import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../interfaces/contact";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  /** VARIABLES **/
  newContactForm: FormGroup;
  messageAlert: string = '';

  constructor(private contactService: ContactService, private fb: FormBuilder) {
    this.newContactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  async onSubmit() {
    let newContact: Contact;
    if (this.newContactForm.valid) {
      newContact = this.newContactForm.value;
      newContact.createdAt = Timestamp.fromDate(new Date());

      try {
        await this.contactService.addContact(newContact);
        this.newContactForm.reset();
        this.messageAlert = 'Mensaje enviado!!!';
      } catch (e) {
        console.log(e);
      }

    }
  }

}
