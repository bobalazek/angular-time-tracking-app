import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {
  private timeTrackingData: { [page: string]: number } = {};
  private timer: any;

  username: string | null = null;

  startTracking(username: string) {
    this.username = username;
    this.timeTrackingData = {};
    this.timer = setInterval(() => {
      this.timeTrackingData[window.location.pathname] = (this.timeTrackingData[window.location.pathname] || 0) + 1;
    }, 1000);
  }

  stopTracking() {
    this.username = null;
    this.timeTrackingData = {};
    clearInterval(this.timer);
  }

  getTimeTrackingData(): { [page: string]: number } {
    return this.timeTrackingData;
  }
}
