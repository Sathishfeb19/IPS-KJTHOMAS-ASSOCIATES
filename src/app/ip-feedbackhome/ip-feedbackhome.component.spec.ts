import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpFeedbackhomeComponent } from './ip-feedbackhome.component';

describe('IpFeedbackhomeComponent', () => {
  let component: IpFeedbackhomeComponent;
  let fixture: ComponentFixture<IpFeedbackhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpFeedbackhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpFeedbackhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
