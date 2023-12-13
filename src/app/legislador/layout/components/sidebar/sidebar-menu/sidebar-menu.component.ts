import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  user$: Observable<UserType>;

  constructor(private auth: AuthService,) { }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

}
