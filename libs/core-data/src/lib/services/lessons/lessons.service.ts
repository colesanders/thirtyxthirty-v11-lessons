import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '@thirty/api-interfaces';
import { Observable } from 'rxjs';

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/lessons';


@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }

  all(): Observable<[Lesson]>{
    return this.http.get<[Lesson]>(BASE_URL);
  }

  byId(id): Observable<Lesson>{
    return this.http.get<Lesson>(BASE_URL + '/' + id);
  }

  create(lesson: Lesson): Observable<Lesson>{
    return this.http.post<Lesson>(BASE_URL, lesson);
  }

  update(lesson: Lesson): Observable<Lesson>{
    return this.http.put<Lesson>(BASE_URL + '/' + lesson.id, lesson);
  }

  delete(id): Observable<Lesson>{
    return this.http.delete<Lesson>(BASE_URL + '/' + id);
  }
}
