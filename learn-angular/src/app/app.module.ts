import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { FormsModule } from '@angular/forms';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { LoginComponent } from './login/login.component';
import { AppNavComponent } from './app-nav/app-nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InitService } from './init.service';
import { HoverDirective } from './hover.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { RequestInterceptor } from './request.interceptor';

function initFactory(InitService: InitService) {
  return () => InitService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    RoomsListComponent,
    PageNotfoundComponent,
    LoginComponent,
    AppNavComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,

    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
