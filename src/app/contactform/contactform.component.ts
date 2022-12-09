import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmailService} from "../services/email.service";

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

  contactForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.emailService.sendContactMail(this.contactForm.value).subscribe();
  }

}
