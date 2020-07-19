import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LessonsFacade } from '@thirty/core-state'
import { Lesson } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  lessons$: Observable<Lesson[]> = this.lessonsFacade.allLessons$;
  lesson$: Observable<Lesson> = this.lessonsFacade.selectedLesson$;

  constructor(private lessonsFacade: LessonsFacade) { }

  ngOnInit(): void {
    this.lessonsFacade.loadLessons();
  }

  select(lesson: Lesson): void{
    this.lessonsFacade.selectLesson(lesson.id);
  }

  delete(lesson: Lesson): void{
    this.lessonsFacade.deleteLesson(lesson);

    this.lessonsFacade.loadLessons();
  }

  save(lesson: Lesson): void{
    if(lesson.id !== null){
      this.lessonsFacade.updateLesson(lesson);
    }else {
      this.lessonsFacade.createLesson(lesson);
    }

    this.lessonsFacade.loadLessons();
  }

  cancel(): void{
    this.lessonsFacade.resetSelectedLesson();
  }

}
