import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-test-append',
  templateUrl: './test-append.component.html',
  styleUrls: ['./test-append.component.css']
})
export class TestAppendComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      items: this.fb.array([this.createItem()])
    })
  }

  createItem() {
    return this.fb.group({
      name: ['Jon'],
      surname: ['Doe']
    })
  }

  addNext() {
    (this.form.controls['items'] as FormArray).push(this.createItem())
  }

  submit() {
    console.log(this.form.value);
  }

}
