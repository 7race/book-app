import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../base';

export type LoginRequest = {
  readonly email: string;
  readonly password: string;
};

export class AuthService {
  async login(loginRequest: LoginRequest) {
    try {
      const { email, password } = loginRequest;
      const res = await signInWithEmailAndPassword(auth, email, password);
      const token = await res.user.getIdToken();

      return token;
    } catch (e) {
      throw e;
    }
  }
}
