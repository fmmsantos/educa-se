import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable()
export class FornecedoresService {
    fornecedoresUrl = 'http://localhost:8081/fornecedores';

  constructor(private http: HttpClient) { }
  pesquisar(): Promise<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.fornecedoresUrl}/buscar`, { headers })
      .toPromise().then(response => response);
  }
}
