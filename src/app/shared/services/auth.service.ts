import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  login(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/login`, request);
  }

  forgotPassword(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/forgot-password`, request);
  }

  getRepresentativeDetails(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}users/rep-details`, request);
  }

  sendOtpToRepresentative(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}users/rep-otp`, request);
  }

  validateOtp(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}users/validate-otp`, request);
  }

  getSecurityQuestions(): Observable<any> {
    return this.http.get(`${this.baseUrl}auth/security-questions`);
  }

  getRepresentativeSecurityQuestion(representativeEmail: string): Observable<any> {
    return this.http.get(`${this.baseUrl}auth/security-question/${representativeEmail}`);
  }
  completeOnboardingForRepresentative(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}users/rep-onboarding`, request);
  }

  isAuthenticated(): boolean {
    const auth = JSON.parse(localStorage.getItem('authorized-details') || '{}');

    if (auth?.repDetails?.auth?.accessToken) {
      return true;
    }
    return false;
  }
}
