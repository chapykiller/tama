import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response {
    status: number,
    data?: any,
    message: string
}

export abstract class RestService {

    protected baseUrl = 'http://localhost:3000';
    private tokenItem = '';

    constructor(protected http: HttpClient) { }

    protected get token(): string {
        if(!this.tokenItem) {
            this.tokenItem = localStorage.getItem('mean-token');
        }
        return this.tokenItem;
    }

    protected deleteToken(): void {
        this.tokenItem = '';
        window.localStorage.removeItem('mean-token');
    }

    protected saveToken(token: string): void {
        localStorage.setItem('mean-token', token);
        this.tokenItem = token;
    }

    private get headers(): HttpHeaders {
        /*
        * for example, add an authorization token to each request,
        * take it from some CookieService, for example
        * */
        return new HttpHeaders({ Authorization: `Bearer ${this.token}`});
    }

    private getOptions(hasHeader: boolean): Object {
        return hasHeader ? { headers: this.headers } : {};
    }

    protected post(relativeUrl: string, body: any, hasHeader: boolean = false): Observable<any> {
        return this.http.post(this.baseUrl + relativeUrl, body, this.getOptions(hasHeader))
            .pipe(
                map((resp: Response) => {
                    if (resp.data) {
                        return resp.data;
                    }

                    return null;
                })
            );
    }

    protected put(relativeUrl: string, body: any, hasHeader: boolean = false): Observable<any> {
        return this.http.put(this.baseUrl + relativeUrl, body, this.getOptions(hasHeader))
            .pipe(
                map((resp: Response) => {
                    if (resp.data) {
                        return resp.data;
                    }

                    return null;
                })
            );
    }

    protected get(relativeUrl: string, hasHeader: boolean = false): Observable<any> {
        return this.http.get(this.baseUrl + relativeUrl, this.getOptions(hasHeader))
            .pipe(
                map((resp: Response) => {
                    if (resp.data) {
                        return resp.data;
                    }

                    return null;
                })
            );
    }

    protected delete(relativeUrl: string, hasHeader: boolean = false): Observable<any> {
        return this.http.delete(this.baseUrl + relativeUrl, this.getOptions(hasHeader))
            .pipe(
                map((resp: Response) => {
                    if (resp.data) {
                        return resp.data;
                    }

                    return null;
                })
            );
    }
}