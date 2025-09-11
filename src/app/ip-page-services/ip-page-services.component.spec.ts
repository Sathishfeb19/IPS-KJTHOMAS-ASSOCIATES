import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPageServicesComponent } from './ip-page-services.component';

describe('IpPageServicesComponent', () => {
  let component: IpPageServicesComponent;
  let fixture: ComponentFixture<IpPageServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpPageServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpPageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
