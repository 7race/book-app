import { makeAutoObservable } from 'mobx';
import type { LoginRequest, AuthService } from '../services/auth.service';

export class AuthStore {
  private authenticated = false;

  private setAuthenticated(authenticated: boolean) {
    this.authenticated = authenticated;
  }

  constructor(private readonly authService: AuthService) {
    makeAutoObservable(this);
    this.authenticated = !!localStorage.getItem('access_token');
  }

  async login(loginRequest: LoginRequest) {
    try {
      const token = await this.authService.login(loginRequest);

      localStorage.setItem('access_token', token);
      this.setAuthenticated(true);
    } catch (err) {
      this.setAuthenticated(false);
      throw err;
    }
  }

  logOut() {
    this.setAuthenticated(false);
    localStorage.removeItem('access_token');
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  isAuthenticated() {
    return this.authenticated;
  }
}
