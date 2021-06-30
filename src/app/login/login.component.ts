import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  hide=true;
  error_messages = {
    
    'email': [
     
      { type: 'required', message: 'Bu alan boş bırakılamaz.' },
      { type: 'pattern', message: 'E Mail Formatında Olmalıdır.' },
      
    ],
  
    'password': [
      { type: 'required', message: 'Bu alan boş bırakılamaz.' },
      { type: 'pattern', message: 'Şifre Zayıf' },
      
    ],
  }
    constructor(private formBuilder:FormBuilder) {this.loginForm= this.formBuilder.group({
      email:new FormControl("",Validators.compose([Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])),
      password:new FormControl("",Validators.compose([Validators.required,
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])) })
    }
  ngOnInit() {
  }

}
