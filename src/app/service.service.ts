import { Injectable } from '@angular/core';

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from './post';

@Injectable()
export class ServiceService {
  
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:Http) { }

  getPosts():Observable<Post[]>{
    return this.http.get(this.url).map(this.extractData).catch(this.handleError);
  }

  extractData(res: Response){
    let body = res.json();
    return body;
  }

  handleError(error: Response | any){
  	console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
