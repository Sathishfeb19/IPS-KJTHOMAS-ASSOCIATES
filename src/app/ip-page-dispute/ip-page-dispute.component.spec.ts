import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPageDisputeComponent } from './ip-page-dispute.component';

describe('IpPageDisputeComponent', () => {
  let component: IpPageDisputeComponent;
  let fixture: ComponentFixture<IpPageDisputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpPageDisputeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpPageDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
