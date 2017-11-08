import {Directive} from '@angular/core';
import {HostBinding} from '@angular/core';
import {HostListener} from "@angular/core";

@Directive({
  selector: '[appHover]'
})

export class HoverDirective{
  @HostBinding('class.h') flag: any = false;
@HostListener('mouseover') mouseover(){this.flag = !this.flag};
@HostListener('mouseout') mouseout(){this.flag = !this.flag};

}
