import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpHeadsliderComponent } from './ip-headslider.component';

describe('IpHeadsliderComponent', () => {
  let component: IpHeadsliderComponent;
  let fixture: ComponentFixture<IpHeadsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpHeadsliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpHeadsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
