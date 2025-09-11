import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPageContactComponent } from './ip-page-contact.component';

describe('IpPageContactComponent', () => {
  let component: IpPageContactComponent;
  let fixture: ComponentFixture<IpPageContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpPageContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpPageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
