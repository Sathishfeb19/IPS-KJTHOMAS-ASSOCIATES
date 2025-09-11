import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpHomecontactComponent } from './ip-homecontact.component';

describe('IpHomecontactComponent', () => {
  let component: IpHomecontactComponent;
  let fixture: ComponentFixture<IpHomecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpHomecontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpHomecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
