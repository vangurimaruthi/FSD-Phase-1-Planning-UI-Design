import { HttpClient } from '@angular/common/http';
// import { HttpClientModule, withFetch } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
  
})
export class AddClientComponent implements OnInit {
  name:string='';
email:string='';
password:string='';
address:string='';
message:string='';

  constructor(private http:HttpClient) { }
  addClient(){
    const client={
      name:this.name,
      email:this.email,
      password:this.password,
      address:this.address,
    
    };
    this.http.post('http://localhost:4000/addClient',client)
    .subscribe((response:any)=>{this.message=response.message},
    (error)=>{console.error('error in adding the client',error);});


  }
  ngOnInit(): void {
  }


}
