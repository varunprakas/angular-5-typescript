import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { Post } from '../post';
import { ServiceService }  from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	age:number;
	address:Address;
	addHobby: any;
	hobbies: string[];
  posts:Post[];

  constructor(private serviceService : ServiceService) { }

  ngOnInit() {
  	this.name = "Varun";
  	this.age = 35;
  	this.address = {
  		street : "Kaveri Nagar",
  		cty:'Bangalore',
  		state:'Karnataka',
  		pincode: 560032
  	};
  	this.hobbies = ["gym", "coding", "Reading", "watching tv"];

    this.getPost()
  }
  getPost(){
    this.serviceService.getPosts().subscribe(data => {
      this.posts = data;
    }) 
  }
  removeHobby(hobby){
  	for(let i = 0; i < this.hobbies.length; i++){
  		if(this.hobbies[i] === hobby){
  			this.hobbies.splice(i, 1);
  		}
  	}
  }
  submitHobby(){
  	if(this.addHobby){
  		this.hobbies.push(this.addHobby);
  		this.addHobby = "";
  	}
  }
}
