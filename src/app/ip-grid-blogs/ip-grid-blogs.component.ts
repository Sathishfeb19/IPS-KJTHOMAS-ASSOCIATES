import { Component } from '@angular/core';
import { IpFooterComponent } from "../ip-footer/ip-footer.component";
import { IpHeaderComponent } from "../ip-header/ip-header.component";

@Component({
  selector: 'app-ip-grid-blogs',
  standalone: true,
  imports: [IpFooterComponent, IpHeaderComponent],
  templateUrl: './ip-grid-blogs.component.html',
  styleUrl: './ip-grid-blogs.component.scss'
})
export class IpGridBlogsComponent {

}
