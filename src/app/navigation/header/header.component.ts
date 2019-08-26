import { Subscription } from "rxjs";
import { AuthService } from "./../../auth/auth.service";
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  authStatusListenerSub: Subscription;
  userIsAuthenticated = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe( result => {
        this.userIsAuthenticated = result;
      });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();

  }

  ngOnDestroy() {
    this.authStatusListenerSub.unsubscribe();
  }
}
