import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../dto/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-persoenliche-angaben',
  templateUrl: './persoenliche-angaben.component.html',
  styleUrls: ['./persoenliche-angaben.component.css']
})
export class PersoenlicheAngabenComponent implements OnInit {

  @Input() user: User;
  @Output() initialisedForm = new EventEmitter<FormGroup>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      lastName: fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
    });
  }

  ngOnInit(): void {
    this.form.setValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName
    });
    this.initialisedForm.emit(this.form);
  }

}

