import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessegeComponent } from './messege.component';

describe('MessegeComponent', () => {
  let component: MessegeComponent;
  let fixture: ComponentFixture<MessegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
