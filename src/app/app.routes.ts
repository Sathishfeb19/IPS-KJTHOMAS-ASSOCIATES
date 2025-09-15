import { Routes } from '@angular/router';
import { IpHomepageComponent } from './ip-homepage/ip-homepage.component';

import { IpPageservicesComponent } from './ip-pageservices/ip-pageservices.component';
import { IpGridBlogsComponent } from './ip-grid-blogs/ip-grid-blogs.component';
import { IpGridNewsComponent } from './ip-grid-news/ip-grid-news.component';
import { IpPageAboutComponent } from './ip-page-about/ip-page-about.component';
import { IpPageContactComponent } from './ip-page-contact/ip-page-contact.component';
import { IpMemberdetailedComponent } from './ip-memberdetailed/ip-memberdetailed.component';
import { IpPageMaritimeComponent } from './ip-page-maritime/ip-page-maritime.component';
import { IpPageCustomsComponent } from './ip-page-customs/ip-page-customs.component';
import { IpPageDisputeComponent } from './ip-page-dispute/ip-page-dispute.component';
import { IpPageJurisdictionsComponent } from './ip-page-jurisdictions/ip-page-jurisdictions.component';
import { IpPageLegalConsultancyComponent } from './ip-page-legal-consultancy/ip-page-legal-consultancy.component';

export const routes: Routes = [
  { path: '', component: IpHomepageComponent },
  { path: 'about', component: IpPageAboutComponent, title: 'About | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: 'contact', component: IpPageContactComponent, title: 'Contact | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: 'expertise', component: IpPageservicesComponent, title: 'Services | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: 'blog', component: IpGridBlogsComponent, title: 'Blogs | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: 'news', component: IpGridNewsComponent, title: 'News | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: 'our-team', component: IpMemberdetailedComponent, title: 'Our Team | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: 'legal-consultancy', component: IpPageLegalConsultancyComponent, title: 'Legal Consultancy | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: 'maritime-and-admiralty-law', component: IpPageMaritimeComponent, title: 'Maritime and Admiralty Law | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: 'international-trade-and-customs-law', component: IpPageCustomsComponent, title: 'International Trade & Customs Law | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: 'dispute-resolution', component: IpPageDisputeComponent, title: 'Dispute Resolution | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: 'court-jurisdictions', component: IpPageJurisdictionsComponent, title: 'Court Jurisdictions | Adv KJ Thomas Kallampally Thiruvananthapuram' },
  { path: '**', redirectTo: '' },
];
