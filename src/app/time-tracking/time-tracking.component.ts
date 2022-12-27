import { Component, OnInit } from '@angular/core';
import { interval, startWith, switchMap } from 'rxjs';

import { TimeTrackingService } from '../time-tracking.service';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
})
export class TimeTrackingComponent implements OnInit {
  timeTrackingData$ = interval(1000).pipe(
    startWith(0),
    switchMap(async () => this.timeTrackingService.getTimeTrackingData())
  );

  constructor(private timeTrackingService: TimeTrackingService) { }

  ngOnInit(): void {
  }

}
