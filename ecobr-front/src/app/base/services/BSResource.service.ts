import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BSResponse } from '../domain/BSResponse';
import { BSMessage } from './BSMessage.service';
import { catchError } from 'rxjs/operators';


@Injectable()
export class BSResource {
  path: String;
  response;

  constructor(private http: HttpClient, private bsMessage: BSMessage) {
  }

  setPath(path: String) {
    this.path = 'http://localhost:8080/' + path + '/';
  }

  getBLOB(method) {
    return this.http.get(this.path + method, {
      headers: new HttpHeaders({
      }), responseType: 'blob'
    }).pipe(
      catchError(err => {
        this.bsMessage.errorOnRequest(err)
        return Promise.reject(err);
      })
    );
  }


  get(method, data?: any) {

    if (data != undefined) {
      return this.http.get<BSResponse>(this.path + method + '?' + data).pipe(
        catchError(err => {
          this.bsMessage.errorOnRequest(err)
          return Promise.reject(err);
        })
      );
    } else {
      return this.http.get<BSResponse>(this.path + method).pipe(
        catchError(err => {
          this.bsMessage.errorOnRequest(err)
          return Promise.reject(err);
        })
      );
    }
  }

  post(method, data) {
    return this.http.post<BSResponse>(this.path + method, data).pipe(
      catchError(err => {
        this.bsMessage.errorOnRequest(err)
        return Promise.reject(err);
      })
    );
  }
  delete(method) {
    return this.http.delete<BSResponse>(this.path + method).pipe(
      catchError(err => {
        this.bsMessage.errorOnRequest(err)
        return Promise.reject(err);
      })
    );
  }

  put(method, data) {
    return this.http.put<BSResponse>(this.path + method, data).pipe(
      catchError(err => {
        this.bsMessage.errorOnRequest(err)
        return Promise.reject(err);
      })
    );
  }
}
