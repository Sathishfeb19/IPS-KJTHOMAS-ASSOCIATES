import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IpFooterComponent } from '../ip-footer/ip-footer.component';
import { IpromiseService } from '../ipromise.service';
// REMOVE self import: import { IpHeaderComponent } from './ip-header.component';

@Component({
  selector: 'app-ip-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  templateUrl: './ip-header.component.html',
  styleUrls: ['./ip-header.component.scss'] // FIXED: plural
})
export class IpHeaderComponent implements OnInit { // FIXED: implements OnInit
  ContactFrm!: FormGroup;
  showModal = false;

  constructor(
    private manas: IpromiseService,
    private router: Router
  ) { }

  ngOnInit(): void {  // FIXED: implements OnInit lifecycle method
    this.ContactFrm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      phone_number: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      msg_subject: new FormControl(''),
      message: new FormControl('')
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.ContactFrm.reset();
  }

  feedback() {
    this.ContactFrm.markAllAsTouched();

    if (this.ContactFrm.get('name')?.invalid) {
      Swal.fire({ title: 'Enter Name', icon: 'warning' });
      return;
    }

    if (this.ContactFrm.get('phone_number')?.invalid) {
      Swal.fire({ title: 'Enter Mobile Number', icon: 'warning' });
      return;
    }

    if (this.ContactFrm.valid) {
      this.manas.ContactFrm(
        this.ContactFrm.value.name,
        this.ContactFrm.value.email,
        this.ContactFrm.value.phone_number,
        this.ContactFrm.value.msg_subject,
        this.ContactFrm.value.message
      ).subscribe((data: any) => {
        if (data.status === 'Success') {
          Swal.fire({
            title: 'Our Team Will Contact You Soon!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.closeModal(); // Close popup after success
            // Optionally redirect: this.router.navigate(['/thank-you']);
          });
        } else if (data.status === 'error') {
          Swal.fire({
            title: 'Contact Number Already Entered!',
            icon: 'warning'
          });
        }
      });
    }
  }
}
