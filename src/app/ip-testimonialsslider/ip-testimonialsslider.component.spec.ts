import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpTestimonialssliderComponent } from './ip-testimonialsslider.component';

describe('IpTestimonialssliderComponent', () => {
  let component: IpTestimonialssliderComponent;
  let fixture: ComponentFixture<IpTestimonialssliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpTestimonialssliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpTestimonialssliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
