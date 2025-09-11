import { Component } from '@angular/core';
import { IpHeaderComponent } from "../ip-header/ip-header.component";
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpFeedbackhomeComponent } from "../ip-feedbackhome/ip-feedbackhome.component";
import { IpUpdateshomeComponent } from "../ip-updateshome/ip-updateshome.component";
import { IpHomecontactComponent } from "../ip-homecontact/ip-homecontact.component";
import { IpAttorneyshomeComponent } from "../ip-attorneyshome/ip-attorneyshome.component";
import { IpHeadsliderComponent } from "../ip-headslider/ip-headslider.component";
import { IpAbouthomeComponent } from "../ip-abouthome/ip-abouthome.component";
import { IpServicehomeComponent } from "../ip-servicehome/ip-servicehome.component";

@Component({
  selector: 'app-ip-homepage',
  standalone: true,
  imports: [IpHeaderComponent, IpFooterComponent, IpFeedbackhomeComponent, IpUpdateshomeComponent, IpHomecontactComponent, IpAttorneyshomeComponent, IpHeadsliderComponent, IpAbouthomeComponent, IpServicehomeComponent],
  templateUrl: './ip-homepage.component.html',
  styleUrl: './ip-homepage.component.scss'
})
export class IpHomepageComponent {

}
