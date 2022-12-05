export interface User {
    id: string;
    username: string;
    name: string;
    avatar: string;
}
export class GlobalComponent {
    public static apiEndpoint: string = "http://localhost";
}