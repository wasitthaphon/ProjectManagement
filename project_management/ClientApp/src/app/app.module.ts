import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { HomeComponent } from './home/home.component';
import { MainTasksComponent } from './main-tasks/main-tasks.component';
import { from } from 'rxjs';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CreateProjectHeadComponent } from './create-project-head/create-project-head.component';
import { CreateProjectMembersComponent } from './create-project-members/create-project-members.component';
import { CreateProjectTasksComponent } from './create-project-tasks/create-project-tasks.component';
import { CreateProjectProgressComponent } from './create-project-progress/create-project-progress.component';
import { JoinTaskComponent } from './join-task/join-task.component';
import { JoinProjectComponent } from './join-project/join-project.component';
import { MainProjectsComponent } from './main-projects/main-projects.component';
import { CreateTaskComponent } from './create-task/create-task.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavItemComponent,
    HomeComponent,
    MainTasksComponent,
    TaskDetailComponent,
    ProjectDetailComponent,
    CreateProjectHeadComponent,
    CreateProjectMembersComponent,
    CreateProjectTasksComponent,
    CreateProjectProgressComponent,
    JoinTaskComponent,
    JoinProjectComponent,
    MainProjectsComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'home', component: HomeComponent},
      {path: 'tasks', component: MainTasksComponent},
      {path: 'tasks-detail', component: TaskDetailComponent},
      {path: 'project-detail', component: ProjectDetailComponent},
      {path: 'create-project', component: CreateProjectHeadComponent},
      {path: 'create-project-members', component: CreateProjectMembersComponent},
      {path: 'create-project-tasks', component: CreateProjectTasksComponent},
      {path: 'join-task', component: JoinTaskComponent},
      {path: 'join-project', component: JoinProjectComponent},
      {path: 'projects', component: MainProjectsComponent},
      {path: 'create-task', component: CreateTaskComponent},
    ]),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
