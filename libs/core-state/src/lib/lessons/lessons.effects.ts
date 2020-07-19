import { Injectable } from '@angular/core';
import { LessonsService } from '@thirty/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import * as LessonsActions from './lessons.actions';

@Injectable()
export class LessonsEffects {
  @Effect() loadLessons$ = this.actions$.pipe(
    ofType(LessonsActions.loadLessons),
    fetch({
      run: (action) => this.lessonsService.all().pipe(
        map((lessons) => LessonsActions.loadLessonsSuccess({ lessons }))
      ),
      onError: (action, error) => LessonsActions.loadLessonsFailure({ error })
    })
  );

  @Effect() loadLesson$ = this.actions$.pipe(
    ofType(LessonsActions.loadLesson),
    fetch({
      run: (action) => this.lessonsService.byId(action.lessonId).pipe(
        map((lesson) => LessonsActions.loadLessonSuccess({ lesson }))
      ),
      onError: (action, error) => LessonsActions.loadLessonFailure({ error })
    })
  );

  @Effect() createLesson$ = this.actions$.pipe(
    ofType(LessonsActions.createLesson),
    pessimisticUpdate({
      run: (action) => this.lessonsService.create(action.lesson).pipe(
        map((lesson) => LessonsActions.createLessonSuccess({ lesson }))
      ),
      onError: (action, error) => LessonsActions.createLessonFailure({ error })
    })
  );

  @Effect() updateLesson$ = this.actions$.pipe(
    ofType(LessonsActions.updateLesson),
    pessimisticUpdate({
      run: (action) => this.lessonsService.update(action.lesson).pipe(
        map((lesson) => 
          LessonsActions.updateLessonSuccess({ lesson }))
      ),
      onError: (action, error) => LessonsActions.updateLessonFailure({ error })
    })
  );

  @Effect() deleteLesson$ = this.actions$.pipe(
    ofType(LessonsActions.deleteLesson),
    pessimisticUpdate({
      run: (action) => this.lessonsService.delete(action.lesson.id).pipe(
        map((lesson) => LessonsActions.deleteLessonSuccess({ lesson })),
      ),
      onError: (action, error) => LessonsActions.deleteLessonFailure({ error })
    })
  );

  // Effect to refresh the lessons after an async operation changes the database
  // Made in order to reduce risk of timing errors between async and sync operations
  // @Effect() refreshOnSucces = this.actions$.pipe(
  //   ofType(LessonsActions.deleteLessonSuccess, LessonsActions.updateLessonSuccess),
  //   tap(action => {
  //     LessonsActions.loadLessons();
  //   })
  // );

  constructor(
    private actions$: Actions,
    private lessonsService: LessonsService
  ) {}
}