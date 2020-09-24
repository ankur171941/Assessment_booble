import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assessmentbooble';
  username;
  email;
  password;
  conform;
  constructor( private client: HttpClient, private route: Router) { }

  ngOnInit() {
  }
  signup() {
    const user = {

      // tslint:disable-next-line:label-position
      email: this.email,
      password : this.password,
      authorization: 'customer'
    };

    if (this.password === this.conform) {
      this.client.post('http://www.reqres.in/api/register', user).subscribe(data => {

        // this.route.navigate(['/login']);
        console.log('signup');
        console.log(user)
      });
    } else {
      alert('password does not match');
    }


  }


}
