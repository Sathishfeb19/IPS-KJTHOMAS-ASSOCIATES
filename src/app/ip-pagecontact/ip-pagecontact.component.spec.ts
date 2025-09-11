import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPagecontactComponent } from './ip-pagecontact.component';

describe('IpPagecontactComponent', () => {
  let component: IpPagecontactComponent;
  let fixture: ComponentFixture<IpPagecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpPagecontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpPagecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
