import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { MarkdownToHtmlPipe } from './markdown-to-html.pipe';
import { SecurityContext } from '@angular/core';

describe('MarkdownToHtmlPipe', () => {
  let pipe: MarkdownToHtmlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            sanitize: (context: SecurityContext, value: string) => value,
            bypassSecurityTrustHtml: (value: string) => value,
          },
        },
      ],
    });
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new MarkdownToHtmlPipe(sanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform **bold** text to <strong>bold</strong>', () => {
    const markdown = 'Este es un texto **importante**.';
    const expectedHtml = 'Este es un texto <strong>importante</strong>.';
    expect(pipe.transform(markdown)).toEqual(expectedHtml);
  });

  it('should handle multiple bold sections in one line', () => {
    const markdown = '**Primero** y **Segundo**.';
    const expectedHtml = '<strong>Primero</strong> y <strong>Segundo</strong>.';
    expect(pipe.transform(markdown)).toEqual(expectedHtml);
  });

  it('should return an empty string for null or undefined input', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should not transform text without markdown', () => {
    const text = 'Esto es un texto normal.';
    expect(pipe.transform(text)).toEqual(text);
  });

  it('should call bypassSecurityTrustHtml', () => {
    const bypassSpy = spyOn(sanitizer, 'bypassSecurityTrustHtml').and.callThrough();
    pipe.transform('**test**');
    expect(bypassSpy).toHaveBeenCalledWith('<strong>test</strong>');
  });
});