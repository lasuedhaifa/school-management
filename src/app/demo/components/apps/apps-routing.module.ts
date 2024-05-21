import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'calendar', data: { breadcrumb: 'Calendar' }, loadChildren: () => import('./calendar/calendar.app.module').then(m => m.CalendarAppModule) },
        { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/tasklist.app.module').then(m => m.TaskListAppModule) },
        { path: 'kanban', data: { breadcrumb: 'Kanban' }, loadChildren: () => import('./kanban/kanban.app.module').then(m => m.KanbanAppModule) },
        { path: 'teacher', data: { breadcrumb: 'Teacher' }, loadChildren: () => import('./teacher/teacher.app.module').then(m => m.TeacherAppModule) },
        { path: 'student', data: { breadcrumb: 'Student' }, loadChildren: () => import('./student/student.app.module').then(m => m.StudentAppModule) },
        { path: 'subject', data: { breadcrumb: 'Subject' }, loadChildren: () => import('./subject/subject.app.module').then(m => m.SubjectAppModule) },
        { path: 'evaluation', data: { breadcrumb: 'Evaluation' }, loadChildren: () => import('./evaluation/evaluation.app.module').then(m => m.EvaluationAppModule) },
        { path: 'module', data: { breadcrumb: 'Module' }, loadChildren: () => import('./module/module.app.module').then(m => m.ModuleAppModule) },
        { path: 'class', data: { breadcrumb: 'Class' }, loadChildren: () => import('./class/class.app.module').then(m => m.ClassAppModule) },
        { path: 'marks', data: { breadcrumb: 'Marks' }, loadChildren: () => import('./marks/mark.app.module').then(m => m.MarkAppModule) },
        { path: 'tutor', data: { breadcrumb: 'Tutor' }, loadChildren: () => import('./tutor/tutor.app.module').then(m => m.TutorAppModule) },





        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
