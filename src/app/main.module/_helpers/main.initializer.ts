import { MainAuthService } from '@app/main.module/_auth/main-auth.service';


export function mainInitializer(mainAuthService: MainAuthService) {
        return () => new Promise(resolve => {
                // Attempt to refresh token on App startup in order to auto authenticate
                mainAuthService.refreshToken()
                    .subscribe()
                    .add(resolve);
        });
}