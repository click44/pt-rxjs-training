import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public title$: Observable<string>;

    private titleSubject: BehaviorSubject<string> = new BehaviorSubject('Loading Title');

    private observableCounter = 0;

    constructor() {
        this.title$ = this.titleSubject.asObservable();
    }

    public getNewTitlePromise(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('The Promise Resolved!');
            }, 5000);
        });
    }

    public getNewTitleObservable(): Observable<string> {
        return new Observable(observer => {
            const intervalTrack = setInterval(() => {
                this.observableCounter++;
                if (this.observableCounter < 4) {
                    observer.next(`The Observable emitted data ${this.observableCounter} times`);
                } else {
                    clearInterval(intervalTrack);
                    observer.complete();
                }
            }, 5000);
        });
    }

    public updateTitle(): void {
        this.titleSubject.next(`Your New Title is: ${Math.random()}`);
    }
}
