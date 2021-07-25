import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// import {sha512} from 'js-sha512';

@Injectable()
export class TokenizerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const timestamp: any = Date.now().toString();

    const channel = 'web';
    let apiKey = 'eyJ1c2VyIjoie1wibW9iaWxlTnVtYmVyXCI6XCIwODE4MjQ0Nz';
    const text = `${apiKey}|${channel}|${timestamp}`;

    // const hash = sha512(text);

    const modifiedRequestHeaders = req.clone({
      headers: req.headers
      .set('x-timestamp', timestamp)
      .set('api-key', 'hash')
    });

    return next.handle(modifiedRequestHeaders);

  }
}
