import { Component } from '@angular/core';
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpHeaderComponent } from "../ip-header/ip-header.component";
import { IpTestimonialssliderComponent } from "../ip-testimonialsslider/ip-testimonialsslider.component";

@Component({
  selector: 'app-ip-page-maritime',
  standalone: true,
  imports: [IpFooterComponent, IpHeaderComponent, IpTestimonialssliderComponent],
  templateUrl: './ip-page-maritime.component.html',
  styleUrl: './ip-page-maritime.component.scss'
})
export class IpPageMaritimeComponent {

}
