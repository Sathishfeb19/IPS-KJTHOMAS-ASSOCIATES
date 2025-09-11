import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpHeaderComponent } from './ip-header.component';

describe('IpHeaderComponent', () => {
  let component: IpHeaderComponent;
  let fixture: ComponentFixture<IpHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
