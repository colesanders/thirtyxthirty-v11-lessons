import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreStateModule } from '@thirty/core-state';
import { CoreDataModule } from '@thirty/core-data';
import { MaterialModule } from '@thirty/material';
import * as fromLessons from '@thirty/core-state';

import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonsOverviewComponent } from './lessons/components/lessons-overview/lessons-overview.component';
import { LessonsDetailComponent } from './lessons/components/lessons-detail/lessons-detail.component';
import { LessonsListComponent } from './lessons/components/lessons-list/lessons-list.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'lessons', component: LessonsComponent},
  { path: 'login', component: LoginComponent},
  { path: '404', component: FourOhFourComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: FourOhFourComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonsOverviewComponent,
    LessonsDetailComponent,
    LessonsListComponent,
    LoginComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    CoreStateModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(fromLessons.lessonsReducer, {}),
    EffectsModule.forRoot([fromLessons.LessonsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


