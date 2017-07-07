import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format;

  // ElementRef -> service defined in Angular, that gives access to DOM object
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    // nativeElement -> gives us access to actual DOM object
    let value: string = this.el.nativeElement.value;

    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLocaleLowerCase();
    else
      this.el.nativeElement.value = value.toLocaleUpperCase();

  }
  @HostListener('focus') onFocus() {
    console.log('Get focus.');
  }
  @HostListener('onmouseover') onHover() {
    console.log('Get onmouseover.');
  }

}
