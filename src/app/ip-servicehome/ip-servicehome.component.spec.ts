import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpServicehomeComponent } from './ip-servicehome.component';

describe('IpServicehomeComponent', () => {
  let component: IpServicehomeComponent;
  let fixture: ComponentFixture<IpServicehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpServicehomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpServicehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
