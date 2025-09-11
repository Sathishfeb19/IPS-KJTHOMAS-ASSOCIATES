import { Component } from '@angular/core';
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpHeaderComponent } from "../ip-header/ip-header.component";

@Component({
  selector: 'app-ip-page-legal-consultancy',
  standalone: true,
  imports: [IpFooterComponent, IpHeaderComponent],
  templateUrl: './ip-page-legal-consultancy.component.html',
  styleUrl: './ip-page-legal-consultancy.component.scss'
})
export class IpPageLegalConsultancyComponent {

}
