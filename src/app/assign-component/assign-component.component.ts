import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-assign-component',
  templateUrl: './assign-component.component.html',
  styleUrls: ['./assign-component.component.css']
})
export class AssignComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

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

    this.http.post("https://node-angular-one.herokuapp.com/addRel", { "studentName": this.studentName.value, "mentorName": this.mentorName.value }, { responseType: 'text' }).subscribe((data: any) => {
      console.log(data);
    }, (err) => { console.log(err.error) });

    this.updateList();
  }

}
