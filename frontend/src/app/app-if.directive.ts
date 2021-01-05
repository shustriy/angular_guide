import {Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

class AppIfContext<T> {
  $implicit: T = null!;
  appIf: T = null!;
}

@Directive({
  selector: '[appIf]'
})
export class AppIfDirective<T = unknown> {

  private _context: AppIfContext<T> = new AppIfContext<T>();
  private _thenTemplateRef: TemplateRef<AppIfContext<T>> | null = null;
  private _elseTemplateRef: TemplateRef<AppIfContext<T>> | null = null;
  private _thenViewRef: EmbeddedViewRef<AppIfContext<T>> | null = null;
  private _elseViewRef: EmbeddedViewRef<AppIfContext<T>> | null = null;

  @Input() set appIf(condition: T) {
    console.log('set appIf', condition);
    this._context.$implicit = this._context.appIf = condition;
    this._thenViewRef = null;
    this._updateView();
  }

  @Input() set appIfThen(templateRef: TemplateRef<AppIfContext<T>>) {
    console.log('set appIfThen', templateRef);
    this._thenViewRef = null;
    this._thenTemplateRef = templateRef;
    this._updateView();
  }


  @Input() set appIfElse(templateRef: TemplateRef<AppIfContext<T>>) {
    console.log('set appIfElse', templateRef);
    this._elseViewRef = null;
    this._elseTemplateRef = templateRef;
    this._updateView();
  }

  constructor(private templateRef: TemplateRef<AppIfContext<T>>, private _viewContainer: ViewContainerRef) {
    this._thenTemplateRef = templateRef;
    console.log('constructor this._context', this._context, this._thenTemplateRef);
  }

  private _updateView(): void {
    console.log('_updateView()');
    if (this._context.appIf) {
      console.log('B1');
      if (!this._thenViewRef) {
        console.log('B2');
        this._viewContainer.clear();
        this._elseViewRef = null;
        if (this._thenTemplateRef) {
          console.log('B3');
          this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
        }
      }
    } else {
      if (!this._elseViewRef) {
        this._viewContainer.clear();
        this._thenViewRef = null;
        if (this._elseTemplateRef) {
          this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
        }
      }
    }
  }
}
