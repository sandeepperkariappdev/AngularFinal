import {Component} from '@angular/core';


@Component({
  moduleId:module.id,
  selector:'side-nav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'] 
})
export class SideNavComponent{
    constructor(){}

    title = "side nav component";
}
