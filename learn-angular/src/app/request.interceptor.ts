import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class RequestInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // You have to clone a new request, and add whatever you need to add. 
        const newRequest = request.clone(
            {headers: new HttpHeaders({token: '12345678'})})

        return next.handle(newRequest);
    }
}