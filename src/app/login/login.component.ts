import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  User: any = [];
  constructor(private restApi:ApiService) { }

  ngOnInit(): void {
  this.loadUsers()

  }
  loadUsers() {
    return this.restApi.getUser().subscribe((data: {}) => {
      this.User = data;
      console.log(data)
    })
  }

}
