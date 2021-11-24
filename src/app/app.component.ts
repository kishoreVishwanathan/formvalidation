import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  validateForm: FormGroup;
showAge=false;
specialchars= false;
  ngOnInit() {
  this.validateForm = new FormGroup({
    name : new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    gender:  new FormControl(null,Validators.required),
    country : new FormControl(null, Validators.required),
    city : new FormControl(null, Validators.required),    
    age : new FormControl(null, Validators.required),
    
  });
  }
  clicksub() {
    alert("blue")
    this.validateForm.reset();
  }
  get name() {
    this.specialchars =  true;
    return this.validateForm.get('name');    
  }
 
  get country() {
    console.log("country",this.validateForm.get('country').value)
    if(this.validateForm.get('country').value =='USA' || this.validateForm.get('country').value =='India'|| this.validateForm.get('country').value =='Canada'){
      this.showAge = true;
      console.log("true")
    }
    return this.validateForm.get('country');
  }
  get city() {
    return this.validateForm.get('city');
  }
  get age() {
    return this.validateForm.get('age');
  }
  get gender() {
    return this.validateForm.get('gender');
  }
}