import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpFooterComponent } from './ip-footer.component';

describe('IpFooterComponent', () => {
  let component: IpFooterComponent;
  let fixture: ComponentFixture<IpFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
