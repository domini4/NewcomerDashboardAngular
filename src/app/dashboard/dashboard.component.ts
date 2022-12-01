import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {


  checkoutForm = this.formBuilder.group({
    user: ''
  });

  user !: FormGroup;
  username = '';

  constructor(
    private formBuilder: FormBuilder,
  ){}
  
  ngOnInit(): void {
  }
  
  onSubmit(): void {
    // console.log(this.checkoutForm.value);
    // console.log(this.checkoutForm.controls['user'].value);
    this.user = this.checkoutForm;
    this.username = this.user.controls['user'].value
    this.checkoutForm.reset();
  }

}
