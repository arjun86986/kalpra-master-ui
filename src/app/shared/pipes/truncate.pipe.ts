import { Pipe, PipeTransform } from '@angular/core';

/**
 * Truncate Text Pipe
 * Usage: {{ longText | truncate:50 }}
 * SOLID: Single Responsibility - Only handles text truncation
 */
@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 50, ellipsis: string = '...'): string {
    if (!value) return '';
    if (value.length <= limit) return value;
    return value.substring(0, limit) + ellipsis;
  }
}
