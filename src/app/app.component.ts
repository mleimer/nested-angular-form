import {Component, OnInit} from '@angular/core';
import {User} from '../dto/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Portfolio} from '../dto/portfolio';

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
  public portfolio: Portfolio = {
    address: '',
    user: {
      firstName: 'My first name',
      lastName: 'My way too long invalid last name'
    }
  };

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      address: fb.control('', [Validators.required, Validators.minLength(5)]),
      user: fb.control('', [])
    });
  }

  ngOnInit() {
    this.updateValue();
  }


  changeUser() {
    this.portfolio.user.firstName = `Neuer Name: ${Math.random()}`;
    this.updateValue()
  }


  private updateValue() {
    this.form.setValue({
      address: this.portfolio.address,
      user: this.portfolio.user
    });
  }

  onSubmit() {
    console.log(`Form valid=${this.form.valid} tried to submit with data: ${JSON.stringify(this.portfolio)}`);
  }
}
