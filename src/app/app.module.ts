import { AuthInterceptor } from "./auth/auth-interceptor";
import { AuthService } from "./auth/auth.service";
import { AppRoutingModule } from "./app-routing.module";
import { StudentService } from "./student-details/student.service";
import { MaterialModule } from "./material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { FormsModule } from "@angular/forms";
import { CreateDataComponent } from "./student-details/create-data/create-data.component";
import { ShowDataComponent } from "./student-details/show-data/show-data.component";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    LoginComponent,
    SignupComponent,
    CreateDataComponent,
    ShowDataComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    StudentService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
