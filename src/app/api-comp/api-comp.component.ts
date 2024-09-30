import { UserListResponse } from '../Shared/models/UserListResponse';
import { ApiCallService } from './../Shared/services/api-call.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-api-comp',
  standalone: true,
  imports: [],
  templateUrl: './api-comp.component.html',
  styleUrl: './api-comp.component.css',
})
export class ApiCompComponent {
  apiCallService = inject(ApiCallService);

  userList: UserListResponse[] = [];
  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    let payLoad = {
      name: '',
      id: 123,
    };

    this.apiCallService.getUserList().subscribe({
      next: (value) => {
        console.log(value);
        this.userList = value;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
