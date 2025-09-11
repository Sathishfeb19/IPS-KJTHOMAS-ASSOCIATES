import { Component } from '@angular/core';
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpHeaderComponent } from "../ip-header/ip-header.component";

@Component({
  selector: 'app-ip-page-jurisdictions',
  standalone: true,
  imports: [IpFooterComponent, IpHeaderComponent],
  templateUrl: './ip-page-jurisdictions.component.html',
  styleUrl: './ip-page-jurisdictions.component.scss'
})
export class IpPageJurisdictionsComponent {

}
