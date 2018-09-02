import axios, { AxiosInstance, CancelTokenSource } from "axios"
import logger from "js-logger"
import Dictionary from '../../utils/dictionary-helper';

// TODO:
// manager to management cancel token source by key and request
// so we can cancel by key or cancel by group 
// the group will have same cancel token source for all request in it self
class CancelTokenManager {
    private tokenSources: Dictionary<CancelTokenSource>
    constructor() {
        // init global cancel token
        this.tokenSources = new Dictionary([{ key: 'global', value: this.newTokenSource }]);
    }

    private get newTokenSource(): CancelTokenSource {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        return source;
    }

    getTokenSource(key: string): CancelTokenSource {
        if (this.tokenSources.keys().indexOf(key) >= 0)
            return this.tokenSources[key];

        const newToken = this.newTokenSource;
        this.tokenSources.add('global', newToken);
        return newToken;
    }

    removeTokenSource(key: string): CancelTokenSource | null {
        if (key == null) return null;
        if (this.tokenSources.keys().indexOf(key) < 0) return null;
        const tokenSource = this.tokenSources[key];
        this.tokenSources.remove(key);
        return tokenSource;
    }
}

export default class AxiosManager {
    // TODO: test
    private baseUrl: string = "https://api.github.com";
    private cancelTokenManager: CancelTokenManager;

    constructor() {
        this.registerInterceptHandler();
        this.cancelTokenManager = new CancelTokenManager();
    }

    /** register all intercep handler for axios */
    registerInterceptHandler() {
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            // bester i think we need store authorization token in vuex
            // and past it to axios request config
            return config;
        }, function (error) {
            // Do something with request error
            logger.error(error);
            return Promise.reject(error);
        });

        // Add a response interceptor
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            // Do something with response error
            if (axios.isCancel(error)) {
                logger.debug(error);
            } else {
                switch (error.response.status) {
                    case 401:
                        this.redirectTo(document, '/')
                        break;
                    case 404:
                        this.redirectTo(document, '/404')
                        break;
                    default:
                        logger.error(error);
                        this.redirectTo(document, '/500')
                        break;
                }
            }
            return Promise.reject(error)
        });
    }

    redirectTo = (document, path) => {
        document.location = path
    }

    /** create request instance */
    createRequest(requestId: string = 'global'): AxiosInstance {
        return axios.create({
            baseURL: this.baseUrl,
            timeout: 10000,
            cancelToken: this.cancelTokenManager.getTokenSource(requestId).token
        });
    }

    /** cancel by request id */
    cancelRequest(requestId: string) {
        if (requestId == null) return;
        const cancelTokenSource = this.cancelTokenManager.removeTokenSource(requestId);
        if (cancelTokenSource == null) return;
        cancelTokenSource.cancel();
    }

    /** cancel all request */
    cancelAllRequest() {
        this.cancelRequest('global')
    }
}

