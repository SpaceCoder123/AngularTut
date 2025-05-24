import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BasicformsComponent } from './basicforms/basicforms.component';
import { FormgroupingComponent } from './formgrouping/formgrouping.component';
import { TemplatedriveformsComponent } from "./templatedriveforms/templatedriveforms.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TemplatedriveformsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
