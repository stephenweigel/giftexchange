import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PairsResponse {
    pairs: string[];
    list: string[];
    id: string;
}


@Injectable({
    providedIn: 'root'
})
export class GiftExchangeService {
    private url = 'http://localhost:3000/api/v1/list';

    constructor(private http: HttpClient) { }

    createPairs(names: string[]): Promise<PairsResponse> {
        return new Promise((resolve, reject) => {
            const body = { names };

            this.http.post(this.url, JSON.stringify(body), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).subscribe(response  => {
                const res = response as PairsResponse;
                resolve(res);
            }, error => reject(error));
        });
    }

    getPairs(id: string): Promise<PairsResponse> {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}?listId=${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).subscribe(response =>
                resolve(response as PairsResponse),
                error => reject(error)
            );
        });
    }
}
