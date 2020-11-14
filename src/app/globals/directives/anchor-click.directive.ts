import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnchorClick]'
})
export class AnchorClickDirective implements AfterViewInit {

  @Input() click;

  constructor(private ref:ElementRef) { }

  ngAfterViewInit(){
    console.log('achor cargado', this.ref.nativeElement);
    // this.ref.nativeElement.addEventListener('click',(e)={

    // });
    
  }

}
