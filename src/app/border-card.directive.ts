import { Directive , ElementRef, HostListener , Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private InitialColor: string = '#000000';
  private defaultColor: string = '#f5f5f5';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder('##FF0000');
    this.setHeight(180);
    this.el.nativeElement.style.backgroundColor='#009688';
    this.el.nativeElement.style.color='#FFF';
    this.el.nativeElement.style.fontWeight='bolder';
    this.el.nativeElement.style.padding='0.5rem';
    this.el.nativeElement.style.margin='0.5rem';
    this.el.nativeElement.style.borderRadius='0.9rem';
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#FF0000');
   }
   @HostListener('mouseleave') onMouseleave(){
    this.setBorder('#f5f5F5');

   }
@Input('appBorderCard') borderColor: string; // avec alias
@Input() appBorderCard: string; //sans alias
setHeight(height: number){
  this.el.nativeElement.style.height=`$(height)px`;
}
setBorder(color: string) {
  this.el.nativeElement.style.border=`solid 4px ${color}`;
}

}
