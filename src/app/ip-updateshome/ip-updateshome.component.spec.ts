import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpUpdateshomeComponent } from './ip-updateshome.component';

describe('IpUpdateshomeComponent', () => {
  let component: IpUpdateshomeComponent;
  let fixture: ComponentFixture<IpUpdateshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpUpdateshomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpUpdateshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
