import { AlertPopupComponent } from './../../shared/components/alert-popup/alert-popup.component';
import { PlaceholderDirective } from './../../shared/directives/placeholder.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userName!: string;
  password!: string;
  errors!: any;
  onSubuit : boolean = false;
  @ViewChild(PlaceholderDirective, { static: false }) alertHost!: PlaceholderDirective;
  private closeSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  login(){

    if(this.userName == "suranja" && this.password == "1234"){

      localStorage.setItem('userId', '1');
      localStorage.setItem('userName', this.userName);
      this.router.navigate(['/']);
      
    } else {
      this.showAlert('Username or password is incorrect!');
    }
  }

  showAlert(message: string){

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(AlertPopupComponent);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  onHandleError(){
    this.errors = false;
  }

}
