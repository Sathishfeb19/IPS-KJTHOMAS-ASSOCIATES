import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAbouthomeComponent } from './ip-abouthome.component';

describe('IpAbouthomeComponent', () => {
  let component: IpAbouthomeComponent;
  let fixture: ComponentFixture<IpAbouthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpAbouthomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpAbouthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
