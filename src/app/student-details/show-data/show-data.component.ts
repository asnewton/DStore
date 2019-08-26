import { StudentService } from "./../student.service";
import { StudentDetails } from "./../student.model";
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Subscription } from "rxjs";

@Component({
  selector: "app-show-data",
  templateUrl: "./show-data.component.html",
  styleUrls: ["./show-data.component.css"]
})
export class ShowDataComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedCoulmns = ["name", "fname", "cnumber"];
  dataSource = new MatTableDataSource<StudentDetails>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private stSubs: Subscription;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getData();
    this.stSubs = this.studentService
      .getStudentDataUpdated()
      .subscribe((studentData: StudentDetails[]) => {
        this.dataSource.data = studentData;
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.stSubs.unsubscribe();
  }
}
