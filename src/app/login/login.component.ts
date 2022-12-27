import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TimeTrackingService } from '../time-tracking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required])
  });

  constructor(private timeTrackingService: TimeTrackingService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.timeTrackingService.startTracking(this.loginForm.value.username!);
      this.router.navigate(['/home']);
    }
  }
}
