import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAttorneyshomeComponent } from './ip-attorneyshome.component';

describe('IpAttorneyshomeComponent', () => {
  let component: IpAttorneyshomeComponent;
  let fixture: ComponentFixture<IpAttorneyshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpAttorneyshomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpAttorneyshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
