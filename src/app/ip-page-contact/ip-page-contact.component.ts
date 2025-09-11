import { Component } from '@angular/core';
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpHeaderComponent } from "../ip-header/ip-header.component";

@Component({
  selector: 'app-ip-page-contact',
  standalone: true,
  imports: [IpFooterComponent, IpHeaderComponent],
  templateUrl: './ip-page-contact.component.html',
  styleUrl: './ip-page-contact.component.scss'
})
export class IpPageContactComponent {

}
