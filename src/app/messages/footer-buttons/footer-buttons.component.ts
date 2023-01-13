import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Button } from 'src/models';
@Component({
  selector: 'app-footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.scss']
})
export class FooterButtonsComponent implements OnChanges {
  @Input() buttons: Button[] | any;
  @Output() buttonClick = new EventEmitter<string>();

  constructor(private ref: ChangeDetectorRef) {}
  onButtonClick(event:any): void {
    this.buttonClick.emit(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
if (changes['buttons'].currentValue) this.buttons = changes['buttons'].currentValue;
  }

  setProperty(buttonName:string, property:any, value:any): void {
    this.buttons?.map((current:any) => {
      if (current.name === buttonName) {
        current[property] = value;
      }
    });
    this.ref.detectChanges();
  }
}
