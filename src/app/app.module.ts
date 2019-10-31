import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import {AccordionModule} from 'primeng/accordion';
import {
  MatCardModule, MatFormFieldModule,
  MatGridListModule, MatInputModule,
  MatListModule,
  MatRippleModule,
  MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { NgBootstrapCorouselComponent } from './home/ng-bootstrap-corousel/ng-bootstrap-corousel.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSideNavBarComponent } from './mat-side-nav-bar/mat-side-nav-bar.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './home/footer/footer.component';
import { MapComponent } from './home/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { CounterComponent } from './home/counter/counter.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MenuModule} from 'primeng/menu';
import { Ng2OdometerModule } from 'ng2-odometer';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import {ButtonModule, CardModule, InputTextModule, MessageService, MessagesModule, ToolbarModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/chart';
import {EnquiryContactComponent} from './home/enquiry-contact/enquiry-contact.component';
import { TestEnquiryComponent } from './test-enquiry/test-enquiry.component';
import { AlumniThoughtsComponent } from './home/alumni-thoughts/alumni-thoughts.component';
import {FieldsetModule} from 'primeng/fieldset';
import { AppRoutingModule } from './app-routing.module';
import { NoticeComponent } from './notice/notice.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    EnquiryContactComponent,
    AppComponent,
    HeaderComponent,
    NgBootstrapCorouselComponent,
    MatSideNavBarComponent,
    FooterComponent,
    MapComponent,
    CounterComponent,
    WelcomeComponent,
    ViewEnquiryComponent,
    TestEnquiryComponent,
    AlumniThoughtsComponent,
    NoticeComponent,
    HomeComponent
  ],
  imports: [
    ChartModule,
    AccordionModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlexLayoutModule,
    FormsModule, NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatCardModule, NgbCarouselModule,
    FormsModule, HttpClientModule, MatSidenavModule,
    MatListModule, RouterModule, MatGridListModule, MatRippleModule,
    AgmCoreModule,
    Ng2OdometerModule.forRoot(),
    MatSnackBarModule,
    FieldsetModule,
    AppRoutingModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDj5Ifm1m9m2oe6BCVR6SotJDBud7DcL_I'
    }), MatTabsModule, MenuModule, MatTableModule, MatSortModule,
    MessagesModule, ToolbarModule, InputTextModule, ButtonModule, CardModule, MatFormFieldModule, MatInputModule
  ],
  providers: [AngularFirestore, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
