import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { Project } from '../../core/models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Xcellen',
      url: 'http://www.xcellen.com',
      description: 'Designed and developed custom websites using HTML, CSS, and JavaScript; created wireframes, mockups, and prototypes.',
      technologies: ['HTML', 'CSS', 'Bootstrap 3.6', 'JavaScript', 'Angular Js', 'Angular 8', 'Node Js'],
      image: 'assets/images/xcellenlogo.jpg',
      liveLink: 'http://www.xcellen.com',
      githubLink: 'https://github.com/example'
    },
    {
      id: 2,
      title: 'Xcellen - Customer Profiling Web Application',
      url: 'https://demopst.xcellen.com',
      description: 'Helping companies to increase productivity of sales and marketing operations through SFE strategies. Features: Customer Targeting, Territory Management, Sales Compensation.',
      technologies: ['HTML', 'CSS', 'Bootstrap 4.6', 'JavaScript', 'Angular Js', 'Angular 14', 'Node Js', 'UI-grid', 'ag-grid', 'Plotly Charts', 'Mapbox'],
      image: 'assets/images/xcellenlogo.jpg',
      liveLink: 'https://demopst.xcellen.com',
      githubLink: 'https://github.com/example'
    },
    {
      id: 3,
      title: 'IGIS MAP - MAP IGIS MAP',
      url: 'http://map.igismap.com',
      description: 'Tool to create interactive web maps with powerful functionality that conveys value and insights.',
      technologies: ['HTML', 'CSS', 'Bootstrap 4.6', 'Angular 14', 'Angular Material'],
      image: 'assets/images/igislogo.jpg',
      liveLink: 'http://map.igismap.com',
      githubLink: 'https://github.com/example'
    },
    {
      id: 4,
      title: 'IGIS MAP',
      url: 'https://www.igismap.com',
      description: 'Developed websites for clients using Angular 8, HTML, CSS, and WordPress.',
      technologies: ['HTML', 'CSS', 'Bootstrap 3.6', 'Angular 8', 'WordPress'],
      image: 'assets/images/igislogo.jpg',
      liveLink: 'https://www.igismap.com',
      githubLink: 'https://github.com/example'
    },
    {
      id: 5,
      title: 'ENGINEER PHILOSOPHY',
      url: 'http://engineerphilosophy.com',
      description: 'Converted PSD to HTML, and Angular 8 & Angular Material.',
      technologies: ['HTML', 'CSS', 'Angular 8', 'Angular Material'],
      image: 'assets/images/eplogo.jpg',
      liveLink: 'http://engineerphilosophy.com',
      githubLink: 'https://github.com/example'
    },
    {
      id: 6,
      title: 'PISARV',
      url: 'http://www.pisarv.com/',
      description: 'Developed websites for clients using Bootstrap 3.36, HTML, and CSS.',
      technologies: ['HTML', 'CSS', 'Bootstrap 3.36'],
      image: 'assets/images/pisarvlogo.jpg',
      liveLink: 'http://www.pisarv.com/',
      githubLink: 'https://github.com/example'
    },
    {
      id: 7,
      title: 'SSV Technologies',
      url: 'https://ssvtechnologies.in/',
      description: 'Developed websites using Bootstrap 3, HTML, and CSS.',
      technologies: ['HTML', 'CSS', 'Bootstrap 3'],
      image: 'assets/images/ssvlogo.jpg',
      liveLink: 'https://ssvtechnologies.in/',
      githubLink: 'https://github.com/example'
    },
    {
      id: 8,
      title: 'Theequaleresearch',
      url: 'http://theequaleresearch.com/#page',
      description: 'Developed websites using Bootstrap 3, HTML, and CSS.',
      technologies: ['HTML', 'CSS', 'Bootstrap 3'],
      image: 'assets/images/terlogo.jpg',
      liveLink: 'http://theequaleresearch.com/#page',
      githubLink: 'https://github.com/example'
    }
  ];
}
