import baseService from './base.service';

export function GlobalAuthGuard(to, from, next) {
    const isAuthenticated = !!localStorage.getItem('token');
    
}