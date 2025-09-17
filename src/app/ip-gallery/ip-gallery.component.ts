import { Component } from '@angular/core';
import { IpHeaderComponent } from "../ip-header/ip-header.component";
import { IpFooterComponent } from "../ip-footer/ip-footer.component";

@Component({
  selector: 'app-ip-gallery',
  standalone: true,
  imports: [IpHeaderComponent, IpFooterComponent],
  templateUrl: './ip-gallery.component.html',
  styleUrl: './ip-gallery.component.scss'
})
export class IpGalleryComponent {

}
