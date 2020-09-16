export interface StoreInterface {
    title?: string;
}

export class StoreModel implements StoreInterface {
    public title?: string;

    constructor({
        title
    }: {
            title?: string;
        }) {
        this.title = title;
    }
}

