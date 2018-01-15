import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor  ran..')

  }

  ngOnInit() {
    console.log('onInit ran..')
    this.name = 'John Deer';
    this.age = 10;
    this.email = 'yolo@yolo.com';
    this.address = {
      street: '50 main street',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['write code', 'watch movies',
      'listen to music'];

   this.dataService.getPosts().subscribe((posts) =>{
     this.posts = posts;
     //console.log(posts);
   });
  }
  onClick() {
    //coknsole.log('HELLO WORLD');
    //this.name = 'Emil Poulsen';
    //this.hobbies.push('New Hobbie');
  }
  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){

    for(let i = 0; i < this.hobbies.length; i++){
        if(this.hobbies[i] == hobby){
          this.hobbies.splice(i, 1);

      }
    }

    //console.log(hobby);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}
