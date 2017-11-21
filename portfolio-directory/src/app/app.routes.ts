import { RouterModule, Routes }   from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { MenuComponent} from "./menu/menu.component";
import { AboutComponent} from "./about/about.component";
import { WorksComponent} from "./works/works.component";
import { ContactComponent} from "./contact/contact.component";

const APP_ROUTES = [
    {path:'home', component: HomeComponent},
    //{path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'', component: HomeComponent},
    
    {path:'menu', component: MenuComponent},
    {path:'about', component: AboutComponent},
    {path:'works', component: WorksComponent},
    {path:'contact', component: ContactComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);