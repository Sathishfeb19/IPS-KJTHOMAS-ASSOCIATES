import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPageLegalConsultancyComponent } from './ip-page-legal-consultancy.component';

describe('IpPageLegalConsultancyComponent', () => {
  let component: IpPageLegalConsultancyComponent;
  let fixture: ComponentFixture<IpPageLegalConsultancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpPageLegalConsultancyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpPageLegalConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
