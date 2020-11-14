import { AuthService } from '@app/admin.module/_auth/auth.service';


export function adminInitializer(authService: AuthService) {
        return () => new Promise(resolve => {
                // Attempt to refresh token on Admin startup in order to auto authenticate
                authService.refreshToken()
                    .subscribe()
                    .add(resolve);
        });
}