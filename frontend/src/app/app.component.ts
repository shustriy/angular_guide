import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-guide';

  public shown: boolean = true;
  public hidden: boolean = false;

  @ViewChild('showTemplate', null) showTemplateRef: TemplateRef<HTMLElement>;

  constructor(private _viewContainer: ViewContainerRef) {

  }

  ngAfterViewInit() {
    this._viewContainer.createEmbeddedView(this.showTemplateRef);
  }
}
