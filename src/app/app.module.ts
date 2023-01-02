import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { FoodModalComponent } from './components/food-modal/food-modal.component';
import { GraphQLModule } from './core/modules/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { STORE_STATES } from './store/app.states';
import { APP_EFFECTS } from './store/app.effects';
import { APP_PROVIDERS } from './app.providers';
import { ServiceWorkerModule } from '@angular/service-worker';
import { STORE_CONFIG } from './store.config';
@NgModule({
  declarations: [
    AppComponent,
    FoodModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    GraphQLModule,
    StoreModule.forRoot(STORE_STATES , STORE_CONFIG),
    EffectsModule.forRoot(APP_EFFECTS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately',
      scope: "/",
      
    })
  ],
  providers: APP_PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule { }
