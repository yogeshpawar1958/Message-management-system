import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Button, Message } from 'src/models';
import { FirebaseMessageService } from '../../Services/firebase-message.service';
import { FooterButtonsComponent } from '../footer-buttons/footer-buttons.component';
import { addMessages } from '../store/action/message.actions';
@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss'],
})
export class AddMessageComponent implements OnInit {
  @ViewChild(FooterButtonsComponent) footerButtons!: FooterButtonsComponent;
  form: FormGroup | any;
  IsWait = false;
  buttons: Button[] = [
    {
      title: 'Reset',
      name: 'reset',
      disabled: false,
      class: 'md-text',
      hidden: false,
    },
    {
      title: 'Save & Continue',
      name: 'saveAndContinue',
      class: 'msg-buttons md-text',
      disabled: true,
    },
  ];
  subscription: Subscription[] = [];
  constructor(
    private dialogRef: MatDialogRef<AddMessageComponent>,
    private formBuilder: FormBuilder,
    private store: Store<{ msgReducer: Message[] }>,
    private _snackBar: MatSnackBar,
    public msgService: FirebaseMessageService
  ) {
    this.createControls();
  }

  ngOnInit(): void {}
  formattedDate = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');

  createControls() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required]],
      date: [this.formattedDate],
    });
  }

  submitMessage() {
    this.store.dispatch(addMessages(this.form.value));
    this.openSnackBar('Added new Message Successfully !!');
    this.onClose();
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'Splash', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
  onClose() {
    this.dialogRef.close();
  }

  onEmittedFooterButton(data: any) {
    //if click on submit button form will be submit else cancle and dialog will be close
    data.name === 'saveAndContinue' ? this.submitMessage() : this.form.reset();
  }
  ngDoCheck(): void {
    // if form valid then button will enable else disabled .
    this.footerButtons?.setProperty(
      'saveAndContinue',
      'disabled',
      !this.form.valid
    );
  }

  hasError(fieldName: string, validationName: string) {
    return (
      this.form?.get(fieldName)?.touched &&
      this.form?.get(fieldName)?.hasError(validationName)
    );
  }
}
