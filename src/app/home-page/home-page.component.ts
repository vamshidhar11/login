import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  username: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.homePage();
    this.username = this.authService.getUser();
    console.log(this.username);
  }
}
