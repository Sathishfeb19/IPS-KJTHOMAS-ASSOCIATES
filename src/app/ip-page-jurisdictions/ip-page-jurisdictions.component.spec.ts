import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPageJurisdictionsComponent } from './ip-page-jurisdictions.component';

describe('IpPageJurisdictionsComponent', () => {
  let component: IpPageJurisdictionsComponent;
  let fixture: ComponentFixture<IpPageJurisdictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpPageJurisdictionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpPageJurisdictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
