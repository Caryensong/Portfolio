import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleaguesComponent } from './colleagues.component';

describe('ColleaguesComponent', () => {
  let component: ColleaguesComponent;
  let fixture: ComponentFixture<ColleaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleaguesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
