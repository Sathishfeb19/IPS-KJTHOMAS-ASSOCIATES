import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpMemberdetailedComponent } from './ip-memberdetailed.component';

describe('IpMemberdetailedComponent', () => {
  let component: IpMemberdetailedComponent;
  let fixture: ComponentFixture<IpMemberdetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpMemberdetailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpMemberdetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
