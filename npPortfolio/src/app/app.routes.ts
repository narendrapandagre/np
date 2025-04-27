import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(c => c.AboutComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skills/skills.component').then(c => c.SkillsComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects.component').then(c => c.ProjectsComponent)
  },
  {
    path: 'resume',
    loadComponent: () => import('./features/resume/resume.component').then(c => c.ResumeComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(c => c.ContactComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];