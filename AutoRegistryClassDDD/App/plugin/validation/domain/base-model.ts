export class BaseModel<T> {
    constructor(options?: T) {
        if (options !== undefined) Object.keys(options).forEach(key => this[key] = options[key]);
    }
}