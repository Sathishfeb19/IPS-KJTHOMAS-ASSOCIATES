import { Routes } from '@angular/router';
import { IpHomepageComponent } from './ip-homepage/ip-homepage.component';

import { IpPageservicesComponent } from './ip-pageservices/ip-pageservices.component';
import { IpGridBlogsComponent } from './ip-grid-blogs/ip-grid-blogs.component';
import { IpGridNewsComponent } from './ip-grid-news/ip-grid-news.component';
import { IpPageAboutComponent } from './ip-page-about/ip-page-about.component';
import { IpPageContactComponent } from './ip-page-contact/ip-page-contact.component';
import { IpMemberdetailedComponent } from './ip-memberdetailed/ip-memberdetailed.component';

export const routes: Routes = [
    {path:'',component:IpHomepageComponent,title:'Home | K.J. Thomas Associates'},
    {path:'about',component:IpPageAboutComponent,title:'About | K.J. Thomas Associates'},
    {path:'contact',component:IpPageContactComponent,title:'Contact | K.J. Thomas Associates'},
    {path:'service',component:IpPageservicesComponent,title:'Services | K.J. Thomas Associates'},
    {path:'blog',component:IpGridBlogsComponent,title:'Blogs | K.J. Thomas Associates'},
    {path:'news',component:IpGridNewsComponent,title:'News | K.J. Thomas Associates'},
      {path:'our-team',component:IpMemberdetailedComponent,title:'Our Team | K.J. Thomas Associates'},
    { path: '**', redirectTo: '' },
];
