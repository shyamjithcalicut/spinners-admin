import { Component, OnDestroy, Input } from '@angular/core';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-layout-direction-switcher',
  template: `
    <ngx-switcher
      [firstValue]="directions.RTL"
      [secondValue]="directions.LTR"
      [firstValueLabel]="'عربى'"
      [secondValueLabel]="'EN'"
      [value]="currentDirection"
      (valueChange)="toggleDirection($event)"
      [vertical]="vertical">
    </ngx-switcher>
  `,
})
export class LayoutDirectionSwitcherComponent implements OnDestroy {

  protected destroy$ = new Subject<void>();

  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;

  @Input() vertical: boolean = false;

  constructor(private directionService: NbLayoutDirectionService, private translate: TranslateService) {

    this.currentDirection = this.directionService.getDirection();

    this.directionService.onDirectionChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(newDirection => this.currentDirection = newDirection);
  }

  toggleDirection(newDirection) {
    console.log(newDirection);
    if (newDirection == "rtl") {
      this.translate.use("ar");
    }
    else {
      this.translate.use("en");
    }
    this.directionService.setDirection(newDirection);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
