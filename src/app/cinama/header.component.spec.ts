import {HeaderComponent} from "./header.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('Header Component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should render the correct title', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('h1'));
    let el: HTMLElement = de.nativeElement;

    fixture.detectChanges();

    expect(el.textContent).toEqual('Welcome to the cinema');
  });
});
