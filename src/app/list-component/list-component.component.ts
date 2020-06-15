import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  relList : any = {};

  keys = [];

  ngOnInit(): void {
    this.http.get("https://node-angular-one.herokuapp.com/relList").subscribe((data: any) => {
      console.log(data);
      this.relList = data;
      this.keys = Object.keys(this.relList)
    }, (err) => { console.log(err.error) });

  }

}
