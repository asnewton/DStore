import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isLoading = false;

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if(form.invalid){
      return;
    }
    this.isLoading = true;
    this.authService.postData(
      form.value.name,
      form.value.email,
      form.value.password
    );
  }
}
