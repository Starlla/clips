import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.minLength(3)])
  email = new FormControl('', [Validators.required, Validators.email])
  age = new FormControl('', [Validators.required, Validators.min(18), Validators.max(150)])
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  confirm_password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  phoneNumber = new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)])

  showAlert = false
  alertMsg = 'Please wait! Your account is being created.'
  alertColor='blue'

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  })

  constructor(private auth:AngularFireAuth) { }

  ngOnInit(): void {
  }

  async register() {
  this.showAlert=true
  this.alertMsg = 'Please wait! Your account is being created.'
  this.alertColor='blue'

  const {email,password} = this.registerForm.value

  try{
    const userCred=await this.auth.createUserWithEmailAndPassword(email as string,password as string)
  }catch(e){
    this.alertMsg = 'Error! Please try again later!'
    this.alertColor='red'
    return

  }
  this.alertMsg = 'Success! Account created!'
  this.alertColor='green'
  
  }

}
