import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// reducers
import { BackgroundReducer } from "./reducers/background";

// components
import { IndexComponent } from './components/index/index.component';
import { BackgroundMangerComponent } from './components/background-manger/background-manger.component';
import { WorksItemsComponent } from './components/works-items/works-items.component';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BackgroundMangerComponent,
    WorksItemsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({backgroundColor : BackgroundReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
