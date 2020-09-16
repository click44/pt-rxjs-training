import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';

import { StoreModel } from './store.model';

@Injectable({
    providedIn: 'root'
})
export class StateStoreExampleService extends ObservableStore<StoreModel> {

    constructor() {
        super({});
        this.setState({ title: 'Title Is Loading' }, storeExampleActions.init );
    }

    public getNewTitle(): void {
        this.setState({ title: `Title is ${Math.random()}` }, storeExampleActions.setData );
    }
}

enum storeExampleActions {
    init = 'INIT',
    setData = 'SET_DATA'
}
