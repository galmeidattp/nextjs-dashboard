import type { User as BaseUser } from '@auth/core/types';

declare module '@auth/core/types' {
  interface User extends BaseUser {
    role?: 'admin' | 'user';
  }
}
