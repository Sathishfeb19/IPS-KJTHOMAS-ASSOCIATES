import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPageAboutComponent } from './ip-page-about.component';

describe('IpPageAboutComponent', () => {
  let component: IpPageAboutComponent;
  let fixture: ComponentFixture<IpPageAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpPageAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpPageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
