import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Subscription, Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public serviceText: string;
    public serviceText$: Observable<string>;
    public formEx: FormControl;
    public captureInput: string;

    private titleSubscription: Subscription;
    private formSubscription: Subscription;

    constructor(
        private appService: AppService
    ) {}

    public ngOnInit(): void {
        this.serviceText = 'Loading Data';
        // promise example
        this.appService.getNewTitlePromise()
            .then(data => this.serviceText = data)
            .catch(err => console.log(err));

        // simple observable example
        // this.titleSubscription = this.appService.getNewTitleObservable()
        //     .subscribe(data => {
        //         this.serviceText = data;
        //     },
        //     err => {
        //         console.log(err);
        //     },
        //     () => {
        //         this.serviceText = 'Observable Complete';
        //     });

        // async example
        // this.serviceText$ = this.appService.getNewTitleObservable();

        // reactive form example
        // this.formEx = new FormControl('');
        // this.formSubscription = this.formEx.valueChanges.subscribe(val => this.captureInput = val);

        // subject examples uncomment the function call and the function definition
        // this.demonstrateUnicast();
        // this.demonstrateMulticast();
        // this.demonstrateSubject();
        // this.demonstrateBehaviorSubject();
        // this.demonstrateReplaySubject();
        // this.demonstrateAsyncSubject();

        // using a behavior subject to safley control a service's state
        // this.serviceText$ = this.appService.title$;
        // setInterval(() => {
        //     this.appService.updateTitle();
        // }, 3000);
    }

    public ngOnDestroy(): void {
        // don't forget to unsubscribe!
        // this.titleSubscription.unsubscribe();
        // this.formSubscription.unsubscribe();
    }

    // public demonstrateUnicast(): void {
    //     const unicastObservable: Observable<number> = new Observable(observer => {
    //         observer.next(Math.random());
    //         observer.complete();
    //     });
    //     unicastObservable.subscribe(data => console.log(data));
    //     unicastObservable.subscribe(data => console.log(data));
    // }

    // public demonstrateMulticast(): void {
    //     const multicastSubject: Subject<number> = new Subject();
    //     multicastSubject.subscribe(data => console.log(data));
    //     multicastSubject.subscribe(data => console.log(data));
    //     multicastSubject.next(Math.random());
    //     multicastSubject.complete();
    // }

    // public demonstrateSubject(): void {
    //     const regularSubject: Subject<number> = new Subject();
    //     regularSubject.next(Math.random());
    //     regularSubject.subscribe(data => console.log(data));
    //     // regularSubject.next(Math.random());
    //     regularSubject.complete();
    // }

    // public demonstrateBehaviorSubject(): void {
    //     const behaviorSubjectEx = new BehaviorSubject(Math.random());
    //     behaviorSubjectEx.subscribe(data => console.log(`subscripton A: ${data}`));
    //     behaviorSubjectEx.next(Math.random());
    //     behaviorSubjectEx.subscribe(data => console.log(`subscripton B: ${data}`));
    //     behaviorSubjectEx.complete();
    // }

    // public demonstrateReplaySubject(): void {
    //     const replaySubjectEx: ReplaySubject<number> = new ReplaySubject(2);
    //     replaySubjectEx.subscribe(data => console.log(`subscripton A: ${data}`));
    //     replaySubjectEx.next(Math.random());
    //     replaySubjectEx.next(Math.random());
    //     replaySubjectEx.next(Math.random());
    //     replaySubjectEx.subscribe(data => console.log(`subscripton B: ${data}`));
    //     replaySubjectEx.complete();
    // }

    // public demonstrateAsyncSubject(): void {
    //     const asyncSubjectEx: AsyncSubject<number> = new AsyncSubject();
    //     asyncSubjectEx.subscribe(data => console.log(`subscripton A: ${data}`));
    //     asyncSubjectEx.next(Math.random());
    //     asyncSubjectEx.next(Math.random());
    //     asyncSubjectEx.next(Math.random());
    //     asyncSubjectEx.subscribe(data => console.log(`subscripton B: ${data}`));
    //     asyncSubjectEx.complete();
    // }
}
