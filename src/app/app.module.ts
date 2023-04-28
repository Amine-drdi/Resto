import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { PopularDishesComponent } from './popular-dishes/popular-dishes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { VideoComponent } from './video/video.component';
import { PopularMenuComponent } from './popular-menu/popular-menu.component';
import { TeamComponent } from './team/team.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RecentNewsComponent } from './recent-news/recent-news.component';
import { FooterComponent } from './footer/footer.component';
import { IndianBurgerComponent } from './popular-dishes/indian-burger/indian-burger.component';
import { CremyNoodlesComponent } from './popular-dishes/cremy-noodles/cremy-noodles.component';
import { HoneyMeatComponent } from './popular-dishes/honey-meat/honey-meat.component';
import { PorkSandwichComponent } from './popular-menu/pork-sandwich/pork-sandwich.component';
import { EasterDelightComponent } from './popular-menu/easter-delight/easter-delight.component';
import { RoastedMarrowComponent } from './popular-menu/roasted-marrow/roasted-marrow.component';
import { TienerSchnitzeComponent } from './popular-menu/tiener-schnitze/tiener-schnitze.component';
import { SummerCookingComponent } from './popular-menu/summer-cooking/summer-cooking.component';
import { ChickenRoastComponent } from './popular-menu/chicken-roast/chicken-roast.component';
import { AdamBilliardComponent } from './team/adam-billiard/adam-billiard.component';
import { FredMacyardComponent } from './team/fred-macyard/fred-macyard.component';
import { JustinStuardComponent } from './team/justin-stuard/justin-stuard.component';
import { SignupComponent } from './signup/signup.component';
import { AddChefComponent } from './add-chef/add-chef.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    PopularDishesComponent,
    NavBarComponent,
    OurHistoryComponent,
    VideoComponent,
    PopularMenuComponent,
    TeamComponent,
    ReservationComponent,
    FeedbackComponent,
    RecentNewsComponent,
    FooterComponent,
    IndianBurgerComponent,
    CremyNoodlesComponent,
    HoneyMeatComponent,
    PorkSandwichComponent,
    EasterDelightComponent,
    RoastedMarrowComponent,
    TienerSchnitzeComponent,
    SummerCookingComponent,
    ChickenRoastComponent,
    AdamBilliardComponent,
    FredMacyardComponent,
    JustinStuardComponent,
    SignupComponent,
    AddChefComponent,
    AddPlatComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
