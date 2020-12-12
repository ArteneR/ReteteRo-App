import { AuthService }    from '@app/_auth/auth.service';


export function appInitializer(authService: AuthService) {
        return () => new Promise(resolve => {
                // Attempt to refresh token on App startup in order to auto authenticate
                authService.refreshToken()
                    .subscribe()
                    .add(resolve);
        });
}