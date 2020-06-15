import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularNodeApi';

  createStudent = new FormGroup({
    name: new FormControl("studentName")
  });


  createMentor = new FormGroup({
    name: new FormControl("mentorName")
  });

  createStudentFn() {
    console.log(this.createStudent.value);
  }

  createMentorFn() {
    console.log(this.createMentor.value);
  }

}
