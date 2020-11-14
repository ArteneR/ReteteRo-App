import { AccessToken } from '@app/_models/access-token';


export class User {
    id:          number;
    username:    string;
    password:    string;
    email:       string;
    firstName:   string;
    lastName:    string;
    accessToken: AccessToken;
}
