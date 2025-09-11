import { Component } from '@angular/core';
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpHeaderComponent } from "../ip-header/ip-header.component";
import { IpAbouthomeComponent } from "../ip-abouthome/ip-abouthome.component";
import { IpMemberdetailedComponent } from "../ip-memberdetailed/ip-memberdetailed.component";

@Component({
  selector: 'app-ip-page-about',
  standalone: true,
  imports: [IpFooterComponent, IpHeaderComponent, IpAbouthomeComponent, IpMemberdetailedComponent],
  templateUrl: './ip-page-about.component.html',
  styleUrl: './ip-page-about.component.scss'
})
export class IpPageAboutComponent {

}
