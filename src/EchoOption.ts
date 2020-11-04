export interface EchoOption {
    broadcaster: string;
    host?: string;
    auth?: {
        headers?: {
            Authorization?: string;
        }
    };
    authEndpoint?: string;
    csrfToken?: string|null;
    namespace?: string|null;
    key?: string;
    wsHost?: string;
    wsPort?: number;
    forceTLS?: boolean;
    disableStats?: boolean;
    client?: any;
}
