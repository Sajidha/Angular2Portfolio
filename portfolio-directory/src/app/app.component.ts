import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent} from "./about/about.component";
import { WorksComponent} from "./works/works.component";
import { ContactComponent} from "./contact/contact.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
}
