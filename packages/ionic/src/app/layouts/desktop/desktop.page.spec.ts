import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { DesktopPage } from "./desktop.page";

describe("DesktopPage", () => {
  let component: DesktopPage;
  let fixture: ComponentFixture<DesktopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
