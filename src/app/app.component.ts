import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-jest-wallaby-sample';

  public beDumb(): string {
    return 'ich bin dumb as fuck';
  };
}
