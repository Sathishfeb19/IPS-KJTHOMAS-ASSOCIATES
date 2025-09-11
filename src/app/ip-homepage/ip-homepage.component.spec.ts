import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpHomepageComponent } from './ip-homepage.component';

describe('IpHomepageComponent', () => {
  let component: IpHomepageComponent;
  let fixture: ComponentFixture<IpHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpHomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
