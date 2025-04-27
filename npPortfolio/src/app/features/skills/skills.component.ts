import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { Skill } from '../../core/models/skill.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillBadgeComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  technicalSkills: Skill[] = [
    { name: 'HTML5', icon: 'fab fa-html5', proficiency: 90 },
    { name: 'CSS3', icon: 'fab fa-css3-alt', proficiency: 85 },
    { name: 'JavaScript', icon: 'fab fa-js', proficiency: 80 },
    { name: 'TypeScript', icon: 'fab fa-js', proficiency: 80 },
    { name: 'Angular 14', icon: 'fab fa-angular', proficiency: 85 },
    { name: 'Angular Material', icon: 'fas fa-cubes', proficiency: 75 },
    { name: 'Bootstrap 4.6', icon: 'fab fa-bootstrap', proficiency: 80 },
    { name: 'Tailwind CSS', icon: 'fas fa-wind', proficiency: 75 },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt', proficiency: 85 },
    { name: 'Figma to HTML', icon: 'fas fa-code', proficiency: 75 },
    { name: 'WordPress', icon: 'fab fa-wordpress', proficiency: 80 },
    { name: 'Figma', icon: 'fab fa-figma', proficiency: 75 },
    { name: 'Photoshop', icon: 'fas fa-image', proficiency: 70 },
    { name: 'CorelDRAW', icon: 'fas fa-pencil-ruler', proficiency: 65 }
  ];
  
  
  softSkills: { name: string; icon: string }[] = [
    { name: 'Communication', icon: 'fas fa-comments' },
    { name: 'Empathy', icon: 'fas fa-heart' },
    { name: 'Detail-Oriented', icon: 'fas fa-search' },
    { name: 'Team Collaboration', icon: 'fas fa-users' }
  ];
  
}