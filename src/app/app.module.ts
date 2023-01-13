import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessagesModule } from './messages/messages.module';
import { metaReducers, reducers } from './reducers';
import { FirebaseMessageService } from './Services/firebase-message.service';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    MaterialModule,
    MessagesModule,
    StoreDevtoolsModule.instrument({}),
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(reducers, { metaReducers }),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [FirebaseMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
