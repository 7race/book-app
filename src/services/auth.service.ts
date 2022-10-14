import { API_URL } from '../utils/url';

export type LoginRequest = {
  readonly email: string;
  readonly password: string;
};

export class AuthService {
  async login(loginRequest: LoginRequest) {
    const response = await fetch(`${API_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginRequest),
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      throw new Error(parsedResponse);
    }

    return parsedResponse;
  }
}
