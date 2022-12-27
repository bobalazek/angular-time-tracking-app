import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TimeTrackingService } from '../time-tracking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private timeTrackingService: TimeTrackingService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.timeTrackingService.stopTracking();
    this.router.navigate(['/login']);
  }
}
