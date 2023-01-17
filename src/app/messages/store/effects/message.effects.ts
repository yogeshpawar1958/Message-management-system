import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// import { createEffect, ofType } from '@ngrx/effects/src';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { FirebaseMessageService } from 'src/app/Services/firebase-message.service';
import { loadMessageError, loadMessages, loadMessageSuccess } from '../action/message.actions';
import { selectMessages } from '../selector/message.selectors';

@Injectable()
export class messageEffects {
  constructor(private actions$: Actions, private fbs: FirebaseMessageService, private store: Store<any>) {}
  loadMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMessages),
      withLatestFrom(this.store.select(selectMessages)),
      mergeMap(([action, posts]) => {
        if (!posts.length || posts.length === 1) {
          return this.fbs.getMessages().pipe(
            map((messages) => {
              return loadMessageSuccess({ messages });
            }),
            catchError((error) =>of(loadMessageError({error})) )
          );
        }
        return of();
      })
    );
  });
}

