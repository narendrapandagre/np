import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../core/models/skill.interface';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-badge.component.html',
  styleUrls: ['./skill-badge.component.css']
})
export class SkillBadgeComponent {
  @Input() skill!: Skill;
}