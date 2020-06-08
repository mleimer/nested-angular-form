import {Component, OnInit} from '@angular/core';
import {User} from '../dto/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  user: User;
  isSubmittedFormValid: boolean;
  submittedData: any;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      address: fb.control('', [Validators.required, Validators.minLength(5)])
    });
  }

  ngOnInit() {
    const portfolio = {
      address: 'Random address',
      user: {
        firstName: 'My first name',
        lastName: 'My way too long invalid last name',
        birthDate: new Date()
      }
    };
    this.form.setValue({
      address: portfolio.address
    });
    this.user = portfolio.user;
  }


  onSubmit() {
    this.isSubmittedFormValid = this.form.valid;
    this.submittedData = this.form.value;
  }

  onInitialisedPersoenlicheAngabenForm(formGroup: FormGroup) {
    this.form.addControl('user', formGroup);
  }
}
