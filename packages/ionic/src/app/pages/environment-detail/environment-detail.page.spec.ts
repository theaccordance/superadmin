import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { EnvironmentDetailPage } from "./environment-detail.page";

describe("EnvironmentDetailPage", () => {
  let component: EnvironmentDetailPage;
  let fixture: ComponentFixture<EnvironmentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentDetailPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(EnvironmentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
