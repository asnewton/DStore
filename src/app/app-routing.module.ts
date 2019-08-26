import { AuthGuard } from './auth/auth-guard';
import { ShowDataComponent } from "./student-details/show-data/show-data.component";
import { CreateDataComponent } from "./student-details/create-data/create-data.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "logout", component: LoginComponent },
  { path: "add-details", component: CreateDataComponent, canActivate: [AuthGuard] },
  { path: "show-details", component: ShowDataComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
