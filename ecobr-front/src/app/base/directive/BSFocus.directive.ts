import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({ selector: '[bs-focus]' })
export class BSFocusDirective {
  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
    //this.renderer.invokeElementMethod (this.hostElement.nativeElement, 'focus');
  }
}