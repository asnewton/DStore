import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
  authStatusListenerSub: Subscription;
  userIsAuthenticated = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authStatusListenerSub = this.authService.getAuthStatusListener().subscribe(result => {
      this.userIsAuthenticated = result;
    })
  }

  onClose(){
    this.closeSidenav.emit();
  }

  onLogout(){
    this.authService.logout();
    this.closeSidenav.emit();
  }

  ngOnDestroy() {
    this.authStatusListenerSub.unsubscribe();
  }  

}
