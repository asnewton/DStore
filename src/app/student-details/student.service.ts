import { Router } from '@angular/router';
import { StudentDetails } from "./student.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class StudentService {
  private studentData: StudentDetails[] = [];
  private studentDataUpdated = new Subject<StudentDetails[]>();

  constructor(private http: HttpClient) {}

  getData() {
    this.http
      .get<{ studentData: StudentDetails[] }>(
        "http://localhost:3000/show-details"
      )
      .subscribe(data => {
        this.studentData = data.studentData;
        this.studentDataUpdated.next([...this.studentData]);
      });
  }

  getStudentDataUpdated() {
    return this.studentDataUpdated.asObservable();
  }

  postData(name: string, fname: string, cnumber: number) {
    const studentData = {
      _id: null,
      name: name,
      fname: fname,
      cnumber: cnumber
    };
    this.http
      .post("http://localhost:3000/add-details", studentData)
      .subscribe(() => {
        this.studentData.push(studentData);
        this.studentDataUpdated.next([...this.studentData]);
      });
  }
}
