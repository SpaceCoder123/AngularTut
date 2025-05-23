import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RoutingComponent } from './routing/routing.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:"about", component:AboutComponent},
    {path:"routing", component:RoutingComponent},
    {path:"contact", component:ContactComponent},
    {path:"profile", component:ProfileComponent},
    {path:"user/:id/:name", component:UserComponent},
    {path:"", component:HomeComponent},
    {path:"**", component:PagenotfoundComponent} // wild card routing
];
