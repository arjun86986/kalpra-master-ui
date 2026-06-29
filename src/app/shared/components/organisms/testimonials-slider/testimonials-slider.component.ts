import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  company: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

@Component({
  selector: 'app-testimonials-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-slider.component.html',
  styleUrls: ['./testimonials-slider.component.scss'],
})
export class TestimonialsSliderComponent {
  readonly activeIndex = signal(0);

  readonly testimonials: Testimonial[] = [
    {
      company: 'Linear',
      quote: 'Kalpra gave our engineering leadership real visibility into delivery health and AI-assisted decision making in days.',
      name: 'Maya Chen',
      role: 'VP of Engineering',
      rating: 5,
      avatar: 'MC',
    },
    {
      company: 'Vercel',
      quote: 'The platform transformed how we review architecture, release quality, and strategic tradeoffs across teams.',
      name: 'Daniel Ortiz',
      role: 'Head of Platform',
      rating: 5,
      avatar: 'DO',
    },
    {
      company: 'Datadog',
      quote: 'It feels like a command center for our engineering org — calm, fast, and deeply actionable.',
      name: 'Sophie Alvarez',
      role: 'Director of DevEx',
      rating: 5,
      avatar: 'SA',
    },
  ];

  next(): void {
    this.activeIndex.set((this.activeIndex() + 1) % this.testimonials.length);
  }

  previous(): void {
    this.activeIndex.set((this.activeIndex() - 1 + this.testimonials.length) % this.testimonials.length);
  }
}
