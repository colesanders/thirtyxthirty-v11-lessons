import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LESSONS_FEATURE_KEY,
  LessonsState,
  LessonsPartialState,
  lessonsAdapter
} from './lessons.reducer';

// Lookup the 'Lessons' feature state managed by NgRx
export const getLessonsState = createFeatureSelector<
  LessonsPartialState,
  LessonsState
>(LESSONS_FEATURE_KEY);

const { selectAll, selectEntities } = lessonsAdapter.getSelectors();

export const getLessonsLoaded = createSelector(
  getLessonsState,
  (state: LessonsState) => state.loaded
);

export const getLessonsError = createSelector(
  getLessonsState,
  (state: LessonsState) => state.error
);

export const getAllLessons = createSelector(
  getLessonsState,
  (state: LessonsState) => selectAll(state)
);

export const getLessonsEntities = createSelector(
  getLessonsState,
  (state: LessonsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getLessonsState,
  (state: LessonsState) => state.selectedId
);

export const getSelectedLesson = createSelector(
  getLessonsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);