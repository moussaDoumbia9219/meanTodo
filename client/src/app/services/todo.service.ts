import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  baseUrl:string = 'http://localhost:3000/api/v1';

  constructor(private _http:Http) {  }

  getTodos(){
    return this._http.get(this.baseUrl+'/todos');
  }

  saveTodo(todo){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(this.baseUrl+'/todo', JSON.stringify(todo),{headers: headers})
      .map(res => res.json());
  };

  updateTodo(todo){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put(this.baseUrl+'/todo/'+todo._id, JSON.stringify(todo),{headers: headers});
  };

  deleteTodo(id){
    return this._http.delete(this.baseUrl+'/todo/'+id);
  }

}
