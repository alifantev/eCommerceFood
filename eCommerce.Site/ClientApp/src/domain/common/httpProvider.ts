import 'whatwg-fetch';
import { StorageKey } from './storageKeys';
import config from '../../configs/config.json';

export class HTTPProvider {

    private static keywordApi: string;
    private static usedApiVersion: string;
    private static host: string;
    private static token:string | null;

    public static setKeyWordApi(keywordApi:string){
        HTTPProvider.keywordApi = keywordApi;
    }

    public static setUsedApiVersion(usedApiVersion:string){
        HTTPProvider.usedApiVersion = usedApiVersion;
    }

    public static setToken(token:string){
        HTTPProvider.token = token;
        localStorage.setItem(StorageKey.Token, token);
    }

    public static clearToken(){
        localStorage.removeItem(StorageKey.Token);
        HTTPProvider.token = null;
    }

    public static setHost(host:string){
        HTTPProvider.host = host;
    }

    public static getToken(){

        if(HTTPProvider.token != null){
            return HTTPProvider.token;
        }

        let token: string | null = localStorage.getItem(StorageKey.Token);

        HTTPProvider.token = token;

        return token;
    }

    private static toQueryString(obj:any) {
        return obj
            ? `?${Object.keys(obj)
                .map(k => {
                    return `${k}=${encodeURIComponent(obj[k])}`
                }).join('&')}`
            : '';
    }

    private static getHeaders():Headers {

        const headers = new Headers({
            'KeywordApi': HTTPProvider.keywordApi.toString(),
            'UsedApiVersion':HTTPProvider.usedApiVersion.toString(),
            'PlatformName': 'Site'
        });

        let token = HTTPProvider.getToken();

        if(token != null){
            headers.set(StorageKey.Token, token.toString());
        }

        return headers;
    }

    public static VerifyStatusCode(response:any){
        if(response.status === 401){
            HTTPProvider.clearToken();
            window.location.href = '/';
        }
    }

    public static async getJson(url:string, data?:any): Promise<any>{

        let fullUrl = `${HTTPProvider.host}${url}${HTTPProvider.toQueryString(data)}`;

        const response = await fetch(
            fullUrl,
            {
                method: 'GET',
                headers: HTTPProvider.getHeaders(),
            });

        HTTPProvider.VerifyStatusCode(response);

        return await response.json();
    }

    public static async postJson(url: string, data:any): Promise<any>{
        let fullUrl = `${HTTPProvider.host}${url}`;

        let headers = HTTPProvider.getHeaders();
        headers.set('Content-Type', 'application/json');

        const response = await fetch(fullUrl,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            });

        HTTPProvider.VerifyStatusCode(response);

        return await response.json();
    }
}

HTTPProvider.setHost(process.env.REACT_APP_API_HOST);
HTTPProvider.setKeyWordApi(config.apiKeyWord);
HTTPProvider.setUsedApiVersion(config.apiVersion);