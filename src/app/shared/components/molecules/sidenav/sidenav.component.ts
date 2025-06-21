import { Component } from '@angular/core';
import { SideNavMenu } from '../../../interfaces/sidenav.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  protected menuItems: SideNavMenu[] = [
    {
      label: 'Dashboards',
      route: 'dashboards',
      select: false
    },
    {
      label: 'Usuarios',
      route: 'usuarios',
      select: false
    }
  ]
}
