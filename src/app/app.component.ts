import { Component ,Inject} from '@angular/core';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm: FormGroup;
   post:any;
  commentaires=[];
  constructor(@Inject(FormBuilder) fb: FormBuilder)
  {
  this.rForm = fb.group({
     'Login' : [null, Validators.required],
     'commentaire' : [null, Validators.required]
   });
  }
  addPost(post)
  {
  var a:string=post.Login;
   var b:string=post.commentaire;
  this.commentaires.push({Login :a , commentaire: b});
  }

}
