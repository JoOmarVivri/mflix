import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPosterUrl]'
})
export class PosterUrlDirective implements OnInit {
  @Input()poster;
  private noImage = '';
  constructor(private ref:ElementRef) { }
  
  ngOnInit(){
    let imageUrl =  this.poster || this.noImage;
    this.ref.nativeElement.setAttribute('src',imageUrl);
  }
}
