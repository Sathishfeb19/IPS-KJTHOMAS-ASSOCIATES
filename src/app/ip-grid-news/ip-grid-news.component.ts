import { Component } from '@angular/core';
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpHeaderComponent } from "../ip-header/ip-header.component";

@Component({
  selector: 'app-ip-grid-news',
  standalone: true,
  imports: [IpFooterComponent, IpHeaderComponent],
  templateUrl: './ip-grid-news.component.html',
  styleUrl: './ip-grid-news.component.scss'
})
export class IpGridNewsComponent {

}
