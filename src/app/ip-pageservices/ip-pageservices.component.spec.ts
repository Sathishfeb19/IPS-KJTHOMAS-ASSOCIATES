import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPageservicesComponent } from './ip-pageservices.component';

describe('IpPageservicesComponent', () => {
  let component: IpPageservicesComponent;
  let fixture: ComponentFixture<IpPageservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpPageservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpPageservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
