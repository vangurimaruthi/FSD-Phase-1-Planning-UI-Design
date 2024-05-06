import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-cmeetings',
  templateUrl: './cmeetings.component.html',
  styleUrl: './cmeetings.component.css'
})
export class CmeetingsComponent implements OnInit {
  
  meetingtopic:string='';
  startime:string='';
  noofppl:string='';
  message:string='';
  mdate:string=''
  constructor(private http:HttpClient) { }
  addMeeting(){
    const meeting={
      meetingtopicd:this.meetingtopic,
      startime:this.startime,
      noofppl:this.noofppl,
      mdate:this.mdate
    };
    this.http.post('http://localhost:4000/addMeeting',meeting)
    .subscribe((response:any)=>{this.message=response.message},
    (error)=>{console.error('error in creating the meeting',error);});


  }
  ngOnInit(): void {
  }


}

