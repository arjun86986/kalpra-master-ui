import { Pipe, PipeTransform } from '@angular/core';

/**
 * Safe HTML Pipe
 * Usage: {{ htmlContent | safeHtml }}
 * SOLID: Single Responsibility - Only handles HTML sanitization
 */
@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  transform(value: string): string {
    // Note: In production, use DomSanitizer from @angular/platform-browser
    // This is a simplified version for demonstration
    return value;
  }
}
