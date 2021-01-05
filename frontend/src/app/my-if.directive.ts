import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef, ɵstringify as stringify } from '@angular/core';

@Directive({selector: '[myIf]'})
export class MyIf<T = unknown> {
  private _context: NgIfContext<T> = new NgIfContext<T>();
  private _thenTemplateRef: TemplateRef<NgIfContext<T>>|null = null;
  private _elseTemplateRef: TemplateRef<NgIfContext<T>>|null = null;
  private _thenViewRef: EmbeddedViewRef<NgIfContext<T>>|null = null;
  private _elseViewRef: EmbeddedViewRef<NgIfContext<T>>|null = null;

  constructor(private _viewContainer: ViewContainerRef, templateRef: TemplateRef<NgIfContext<T>>) {
    this._thenTemplateRef = templateRef;
  }

  @Input()
  set myIf(condition: T) {
    console.log('myIf', condition);
    this._context.$implicit = this._context.myIf = condition;
    this._updateView();
  }

  @Input()
  set myIfThen(templateRef: TemplateRef<NgIfContext<T>>|null) {
    console.log('myIfThen', templateRef);
    assertTemplate('myIfThen', templateRef);
    this._thenTemplateRef = templateRef;
    this._thenViewRef = null;  // clear previous view if any.
    this._updateView();
  }

  @Input()
  set myIfElse(templateRef: TemplateRef<NgIfContext<T>>|null) {
    console.log('myIfElse', templateRef);
    assertTemplate('myIfElse', templateRef);
    this._elseTemplateRef = templateRef;
    this._elseViewRef = null;  // clear previous view if any.
    this._updateView();
  }

  private _updateView() {
    console.log('_updateView()', this._context);
    if (this._context.$implicit) {
      console.log('A1');
      if (!this._thenViewRef) {
        console.log('A2');
        this._viewContainer.clear();
        this._elseViewRef = null;
        if (this._thenTemplateRef) {
          console.log('A3');
          this._thenViewRef =
            this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
        }
      }
    } else {
      if (!this._elseViewRef) {
        this._viewContainer.clear();
        this._thenViewRef = null;
        if (this._elseTemplateRef) {
          this._elseViewRef =
            this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
        }
      }
    }
  }

  public static myIfUseIfTypeGuard: void;

  static ngTemplateGuard_myIf: 'binding';

  static ngTemplateContextGuard<T>(dir: MyIf<T>, ctx: any):
    ctx is NgIfContext<Exclude<T, false|0|''|null|undefined>> {
    return true;
  }
}

export class NgIfContext<T = unknown> {
  public $implicit: T = null!;
  public myIf: T = null!;
}

function assertTemplate(property: string, templateRef: TemplateRef<any>|null): void {
  const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
  if (!isTemplateRefOrNull) {
    throw new Error(`${property} must be a TemplateRef, but received '${stringify(templateRef)}'.`);
  }
}
