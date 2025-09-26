import { Component } from '@angular/core';
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpHeaderComponent } from "../ip-header/ip-header.component";
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IpromiseService } from '../ipromise.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-ip-page-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,   // ✅ Add this
    IpFooterComponent,
    IpHeaderComponent
  ],
  templateUrl: './ip-page-contact.component.html',
  styleUrls: ['./ip-page-contact.component.scss']
})
export class IpPageContactComponent {

  ContactFrm!: FormGroup;

  constructor(
    private manas: IpromiseService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
          Swal.fire({ title: 'Our Team Contact Soon!', icon: 'success' });
          this.ContactFrm.reset();
        } else if (data.status === 'error') {
          Swal.fire({ title: 'Contact Number Already Entered!', icon: 'warning' });
        }
      });
    }
  }
}
