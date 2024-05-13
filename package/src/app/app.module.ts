import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SpinnerComponent } from './shared/spinner.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { FullComponent } from './layouts/full/full.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    SpinnerComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
