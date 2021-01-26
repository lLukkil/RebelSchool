import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnderaddPage } from './underadd.page';

describe('UnderaddPage', () => {
  let component: UnderaddPage;
  let fixture: ComponentFixture<UnderaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnderaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
