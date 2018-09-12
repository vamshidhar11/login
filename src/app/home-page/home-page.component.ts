import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  username: string;

  constructor(private authService: AuthService) {
    this.username = this.authService.getUser();
  }

  ngOnInit() {
    this.authService.homePage();
    console.log(this.username);
  }
}
