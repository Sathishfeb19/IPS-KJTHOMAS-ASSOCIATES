import { Component } from '@angular/core';
import { IpHeaderComponent } from "../ip-header/ip-header.component";
import { IpFooterComponent } from "../ip-footer/ip-footer.component";

@Component({
  selector: 'app-ip-memberdetailed',
  standalone: true,
  imports: [IpHeaderComponent, IpFooterComponent],
  templateUrl: './ip-memberdetailed.component.html',
  styleUrl: './ip-memberdetailed.component.scss'
})
export class IpMemberdetailedComponent {

}
