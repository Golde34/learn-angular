import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appHover]'
})
export class HoverDirective implements OnInit {

    color:string = 'red';

    constructor(private element:ElementRef) {
        console.log(this.element.nativeElement);
    }

    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = this.color;
        this.element.nativeElement.style.color = 'pink';
    }
}