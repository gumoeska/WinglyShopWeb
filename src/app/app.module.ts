import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationInterceptor } from './core/interceptors/Interceptor';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './pages/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PromotionSliderComponent } from './shared/promotion-slider/promotion-slider.component';
import { TopProductsComponent } from './shared/top-products/top-products.component';
import { LatestProductsComponent } from './shared/latest-products/latest-products.component';
import { BestsellersComponent } from './shared/bestsellers/bestsellers.component';
import { MostWantedComponent } from './shared/most-wanted/most-wanted.component';
import { NewArrivalsComponent } from './shared/new-arrivals/new-arrivals.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    DefaultComponent,
    MasterComponent,
    RegisterComponent,
    FooterComponent,
    PromotionSliderComponent,
    TopProductsComponent,
    LatestProductsComponent,
    BestsellersComponent,
    MostWantedComponent,
    NewArrivalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FontAwesomeModule,
    MatCardModule,
    ModalModule.forRoot(),
    SlickCarouselModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
