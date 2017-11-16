import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {Component, DebugElement} from "@angular/core";
import {HeaderComponent} from "./header.component";

describe('Header Component', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should render the correct title', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('h1'));
    let el: HTMLElement = de.nativeElement;
    component.title = 'my title';

    fixture.detectChanges();

    expect(el.textContent).toEqual('my title');
  });
});

describe('Header Component with a host component ', () => {

  @Component({
    template: `<header title="my title"></header>`
  })
  class TestHostComponent {
  }

  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, HeaderComponent],
    });
    fixture = TestBed.createComponent(TestHostComponent);
  });

  it('should have the correct title', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('h1'));
    let el: HTMLElement = de.nativeElement;

    fixture.detectChanges();

    expect(el.textContent).toEqual('my title');
  });
});
