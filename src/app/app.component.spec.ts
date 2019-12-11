import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'ng-jest-wallaby-sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const test = 'test';
    expect(app.title).toEqual('ng-jest-wallaby-sample');
  });

  test('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ng-jest-wallaby-sample app is running!');
  });

  test('should be dumb', () => {
    const fixture = TestBed.createComponent(AppComponent);
    var dumbString = fixture.componentInstance.beDumb();
    expect(dumbString).toBe('ich bin dumb as fuck');
  });
});
