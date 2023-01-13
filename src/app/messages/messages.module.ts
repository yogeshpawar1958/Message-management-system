import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorCatchingInterceptor } from '../interceptors/error-catching.interceptor';
import { FirebaseMessageService } from '../Services/firebase-message.service';
import { MaterialModule } from '../shared/material/material.module';
import { AddMessageComponent } from './add-message/add-message.component';
import { FooterButtonsComponent } from './footer-buttons/footer-buttons.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesTableComponent } from './messages-table/messages-table.component';
import { MessagesComponent } from './messages/messages.component';
import { messageEffects } from './store/effects/message.effects';
import { messageFeatureKey, reducer } from './store/reducer/message.reducer';
@NgModule({
  declarations: [
    MessagesComponent,
    AddMessageComponent,
    FooterButtonsComponent,
    MessagesTableComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    MaterialModule,
    EffectsModule.forFeature([messageEffects]),
    StoreModule.forFeature(messageFeatureKey, reducer),
    ReactiveFormsModule,
    FormsModule,
    MessagesRoutingModule
  ],
  providers:[FirebaseMessageService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorCatchingInterceptor,
    multi: true
}],
exports:[
  MessagesTableComponent,
  AddMessageComponent,
]

})
export class MessagesModule { }
