import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpGridNewsComponent } from './ip-grid-news.component';

describe('IpGridNewsComponent', () => {
  let component: IpGridNewsComponent;
  let fixture: ComponentFixture<IpGridNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpGridNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpGridNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
