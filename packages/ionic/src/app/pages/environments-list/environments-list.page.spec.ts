import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { EnvironmentsListPage } from "./environments-list.page";

describe("EnvironmentsListPage", () => {
  let component: EnvironmentsListPage;
  let fixture: ComponentFixture<EnvironmentsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentsListPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(EnvironmentsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
