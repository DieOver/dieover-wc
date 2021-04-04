import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dieover-input',
  templateUrl: './dieover-input.component.html',
  styleUrls: ['./dieover-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom

})
export class DieoverInputComponent implements OnInit {

  constructor(
    private ref: ChangeDetectorRef
  ) {
    ref.detach();
  }

  ngOnInit(): void {
    this.ref.detectChanges();
  }

}
