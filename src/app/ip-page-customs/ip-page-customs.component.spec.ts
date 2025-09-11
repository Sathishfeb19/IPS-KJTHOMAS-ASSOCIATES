import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPageCustomsComponent } from './ip-page-customs.component';

describe('IpPageCustomsComponent', () => {
  let component: IpPageCustomsComponent;
  let fixture: ComponentFixture<IpPageCustomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpPageCustomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpPageCustomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
