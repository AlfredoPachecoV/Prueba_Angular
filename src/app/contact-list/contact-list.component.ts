import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export default class ContactListComponent implements OnInit {
  private contactService = inject(ContactService)
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.contactService.list()
    .subscribe(contacts =>{
        console.log(contacts);
    })
  }
}
