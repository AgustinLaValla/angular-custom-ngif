import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: '[myCustomIf]'
})
export class MyCustomIfDirective {
  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainerRef:ViewContainerRef
  ) {}

  @Input() set myCustomIf(condition:boolean) {
    if(condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}