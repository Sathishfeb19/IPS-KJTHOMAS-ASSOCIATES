import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPageMaritimeComponent } from './ip-page-maritime.component';

describe('IpPageMaritimeComponent', () => {
  let component: IpPageMaritimeComponent;
  let fixture: ComponentFixture<IpPageMaritimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpPageMaritimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpPageMaritimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
