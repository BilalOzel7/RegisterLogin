
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;
  gosterge:true;
  hide=true;
  check=true;
  error_messages = {
    'fname': [
      { type: 'required', message: 'Adınızı Giriniz.' },
      { type: 'minlength', message: 'Adınız 3 harften kısa olamaz.' },
      { type: 'maxlength', message: 'Adınız 24 harften uzun olamaz.' },
    ],

    'lname': [
      { type: 'required', message: 'Soyadınızı Giriniz' },
      { type: 'minlength', message: 'Soyadınız 3 harften kısa olamaz.' },
      { type: 'maxlength', message: 'Soyadınız 24 harften uzun olamaz.' },
    ],

    'email': [
      { type: 'required', message: 'E Posta Giriniz.' },
      { type: 'pattern', message: 'E Mail Formatında Olmalıdır.' },
      
      
      
    ],
    'mobile': [
      { type: 'required', message: 'Telefon Giriniz' },
      { type: 'pattern', message: 'Telefonunuzu tam giriniz. ' }
    ],

    'password': [
      { type: 'required', message: 'Şifrenizi Giriniz' },
      { type: 'pattern', message: 'Şifre Zayıf' },

    ],
    'confirmpassword': [
      { type: 'required', message: 'Şifrenizi Giriniz.' },
      { type: 'pattern', message: 'Şifre Zayıf' },
    ],
  }

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(24)
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(24)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
        
      ])),
      mobile: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')

      ])),
      check: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    }, { 
      validators: this.password.bind(this)
    });
  }

  ngOnInit() {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : {Uyarı:"Şifreler Uyuşmuyor.Kontrol Ediniz."};
  }

}
