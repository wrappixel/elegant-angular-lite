import { NgClass } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';
import { NavigationComponent } from 'src/app/shared/header-navigation/navigation.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
declare var $: any;

@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent, SidebarComponent, NavigationComponent, NgScrollbarModule, NgClass],
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  constructor(public router: Router) {}


  topOffset = 55;
  height: any;

  public innerWidth: any;
  public innerHeight: any;
  public lockSidebar = false;
  public showMobileMenu = false;
  public addMiniSidebar = false;
  public hideLogoText = false;

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/starter']);
    }
    this.handleLayout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.handleLayout();
  }

  toggleSidebar() {
    this.showMobileMenu = true;
  }

  handleLayout() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.addMiniSidebar = true;
      this.hideLogoText = true;
    } else {
      this.addMiniSidebar = false;
      this.hideLogoText = false;
    }
    this.innerHeight = window.innerHeight;
    this.height = this.innerHeight - this.topOffset;
    if (this.height < 1) {
      this.height = 1;
    }
    if (this.height > this.topOffset) {
      this.height = this.height + 'px';
    }
  }
}
