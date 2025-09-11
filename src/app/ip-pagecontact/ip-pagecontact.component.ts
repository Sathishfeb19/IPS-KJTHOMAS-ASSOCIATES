import { Component } from '@angular/core';
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpHeaderComponent } from "../ip-header/ip-header.component";

@Component({
  selector: 'app-ip-pagecontact',
  standalone: true,
  imports: [IpFooterComponent, IpHeaderComponent],
  templateUrl: './ip-pagecontact.component.html',
  styleUrl: './ip-pagecontact.component.scss'
})
export class IpPagecontactComponent {

}
