import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserType, AuthService } from 'src/app/modules/auth';

@Component({
  selector: 'app-engage-widget10',
  templateUrl: './engage-widget10.component.html',
  styleUrls: ['./engage-widget10.component.scss']
})
export class EngageWidget10Component implements OnInit {
  @Input() cssClass: string = ''
  user$: Observable<UserType>;
  constructor(private auth: AuthService,) { }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

}
