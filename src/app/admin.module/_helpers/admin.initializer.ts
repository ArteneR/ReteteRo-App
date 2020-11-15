import { AdminAuthService } from '@app/admin.module/_auth/admin-auth.service';


export function adminInitializer(adminAuthService: AdminAuthService) {
        return () => new Promise(resolve => {
                // Attempt to refresh token on Admin startup in order to auto authenticate
                adminAuthService.refreshToken()
                    .subscribe()
                    .add(resolve);
        });
}