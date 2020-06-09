import {Component, forwardRef, Input} from '@angular/core';
import {User} from '../../dto/user';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-persoenliche-angaben',
  templateUrl: './persoenliche-angaben.component.html',
  styleUrls: ['./persoenliche-angaben.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersoenlicheAngabenComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PersoenlicheAngabenComponent),
      multi: true
    }
  ]
})
export class PersoenlicheAngabenComponent implements ControlValueAccessor, Validator {

  @Input() user: User;

  form: FormGroup;
  public onTouched: () => void = () => {
    console.log(`on touched`)
  };

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      lastName: fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
    });
  }

  registerOnValidatorChange(fn: () => void): void {
    console.log('Register on validator change')
  }

  writeValue(val: any): void {
    if (val) {
      this.form.setValue(val);
      // todo how to set it dirty?
    }
  }

  registerOnChange(fn: any): void {
    console.log(`register in change`)
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    // TODO Currently the 'setDirty' Operation is not working correctly, which causes the errors not to show on the
    //  child component, when the submit method is called on the parent form.
    return this.form.valid ? {} : {valid: false, message: "form fields are invalid"};
  }

}

