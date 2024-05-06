import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css'
})


export class EditClientComponent implements OnInit {
  
  name:string='';
  email:string='';
  address:string=''
  password:string=''
  message:string='';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }
  updateClient(){
    const client={
      
      name:this.name,
      email:this.email,
      address:this.address
    };
    this.http.put('http://localhost:4000/updateClient',client)
    .subscribe((response:any)=>{this.message=response.message;this.router.navigate(['/view'])},
    (error)=>{console.error('error in updating the client',error);});


  }
fetchClient(){
  this.http.get('http://localhost:4000/getProduct/'+this.name)
  .subscribe((response:any)=>{
    const client=response[0];
    this.name=client.name;
    this.email=client.email;
    this.address=client.address;
  },
  (error)=>{console.error('error in fetching the client by name',error);});
}




ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const nameParam = params.get('name');
    if (nameParam !== null) {
      this.name = nameParam;
      this.fetchClient();
    } else {
      console.error("name is missing or null");
    }
  });
}
}
