import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  isHidden: boolean = false;
  user = {
    name: "Doe",
    firstName: "John",
    age: 25,
    quote: "",
    photo: "https://randomuser.me/api/portraits/lego/2.jpg"
  };

  toggleAge() {
    this.isHidden = !this.isHidden;
  }
}
