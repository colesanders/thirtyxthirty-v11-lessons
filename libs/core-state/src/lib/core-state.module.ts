import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLessons from './lessons/lessons.reducer';
import { LessonsEffects } from './lessons/lessons.effects';
import { LessonsFacade } from './lessons/lessons.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromLessons.LESSONS_FEATURE_KEY,
      fromLessons.lessonsReducer
    ),
    EffectsModule.forFeature([LessonsEffects]),
  ],
  providers: [LessonsFacade],
})
export class CoreStateModule {}
