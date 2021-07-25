import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class NotifyErrorInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(
        event => {
          console.log(event)
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            this.toastService.error('', error.error.message, { closeButton: true });
          }
        }
      ));
  }
}
