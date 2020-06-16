import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { FormControl } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assign-component',
  templateUrl: './assign-component.component.html',
  styleUrls: ['./assign-component.component.css']
})
export class AssignComponentComponent implements OnInit {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  studentList = [];

  mentorList = [];

  studentName = new FormControl("");
  mentorName = new FormControl("");

  ngOnInit(): void {
    this.updateList();
  }

  updateList() {
    this.http.get("https://node-angular-one.herokuapp.com/mentorList").subscribe((data: any) => {
      console.log(data);
      this.mentorList = data;
    }, (err) => { console.log(err.error) });

    this.http.get("https://node-angular-one.herokuapp.com/unassignedStudentsList").subscribe((data: any) => {
      console.log(data);
      this.studentList = data;
    }, (err) => { console.log(err.error) });

  }

  assign() {
    let studValue = (<HTMLSelectElement>document.getElementById("selectBox")).value;
    console.log(studValue + " : " + this.mentorName.value);
    this.http.post("https://node-angular-one.herokuapp.com/addRel", { "studentName": studValue, "mentorName": this.mentorName.value }, { responseType: 'text' }).subscribe((data: any) => {
      console.log(data);
      this.toastr.success('Added Relation!');
      this.updateList();
    }, (err) => { console.log(err.error); });


  }

}
