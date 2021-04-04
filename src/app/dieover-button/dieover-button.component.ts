import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dieover-button',
  templateUrl: './dieover-button.component.html',
  styleUrls: ['./dieover-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DieoverButtonComponent implements OnInit {

  @Input('fn')
  fn = () => {
    console.log('CLICADO!');
    this.returned.emit('qwrqwr');
  };

  @Output('returned') returned: EventEmitter<any> = new EventEmitter();

  constructor(
    private ref: ChangeDetectorRef
  ) {
    ref.detach();
  }

  ngOnInit(): void {
    this.ref.detectChanges();
  }

}
