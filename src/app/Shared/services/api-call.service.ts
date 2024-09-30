import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  http = inject(HttpClient);

  constructor() {}

  getUserList(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
