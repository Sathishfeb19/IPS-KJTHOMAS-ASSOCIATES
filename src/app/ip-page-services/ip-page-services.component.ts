import { Component } from '@angular/core';
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpHeaderComponent } from "../ip-header/ip-header.component";

@Component({
  selector: 'app-ip-page-services',
  standalone: true,
  imports: [IpFooterComponent, IpHeaderComponent],
  templateUrl: './ip-page-services.component.html',
  styleUrl: './ip-page-services.component.scss'
})
export class IpPageServicesComponent {

}
