import { StudentService } from "./../student.service";
import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-data",
  templateUrl: "./create-data.component.html",
  styleUrls: ["./create-data.component.css"]
})
export class CreateDataComponent implements OnInit {
  isLoading = false;
  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.studentService.postData(
      form.value.name,
      form.value.fname,
      form.value.cnumber
    );
    this.router.navigate(['/show-details']);
    // setTimeout(()=>{
    //   this.router.navigate(['/show-details']);
    // }, 1000);
  }
}
