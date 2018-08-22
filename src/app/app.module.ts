import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgMarqueeModule } from 'ng-marquee';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    BottomNavComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    NgMarqueeModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
