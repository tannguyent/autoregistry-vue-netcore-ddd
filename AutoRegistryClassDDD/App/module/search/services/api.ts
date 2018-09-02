import axios, { AxiosInstance } from 'axios'
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const get = (http: AxiosInstance, url, config) => from(http.get(url, config))
    .pipe(
        map((resp) => resp.data)
    )
export const search = (http: AxiosInstance, q, page) => get(http, '/search/repositories', { params: { q, sort: 'stars', page } })