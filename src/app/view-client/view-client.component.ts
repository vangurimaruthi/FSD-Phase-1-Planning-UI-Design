import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrl: './view-client.component.css'
})
export class ViewClientComponent implements OnInit {
  clients:any[]=[];
  message:string='';
  
  
    constructor(private http:HttpClient) { }
    ngOnInit(): void {
      this.fetchClients();
    }
  
    fetchClients(){
      this.http.get('http://localhost:4000/getClients')
      .subscribe((response:any)=>{this.clients=response},
      (error)=>{console.error('error in fetching the client',error);});
    }
  
  
    deleteClient(id:number){
      console.log("id value is "+id)
      if(confirm('Are you sure you want to delete this client?')){
        this.http.delete('http://localhost:4000/deleteClient/'+id)
      .subscribe((response:any)=>{this.message=response.message;this.fetchClients();},
      (error)=>{console.error('error in deleting the product',error);});
      }
    }
  
  
  }
  