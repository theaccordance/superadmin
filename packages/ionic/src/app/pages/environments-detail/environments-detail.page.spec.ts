import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { EnvironmentsDetailPage } from "./environments-detail.page";

describe("EnvironmentsDetailPage", () => {
  let component: EnvironmentsDetailPage;
  let fixture: ComponentFixture<EnvironmentsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentsDetailPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(EnvironmentsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
