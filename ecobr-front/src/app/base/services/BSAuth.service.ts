import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { BSResponse } from '../domain/BSResponse';
import { environment } from '../../../environments/environment.prod';
import { BSMessage } from './BSMessage.service';
import { Router } from '@angular/router';

@Injectable()
export class BSAuth {


}
