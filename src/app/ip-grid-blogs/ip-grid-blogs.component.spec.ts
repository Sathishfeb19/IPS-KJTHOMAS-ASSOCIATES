import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpGridBlogsComponent } from './ip-grid-blogs.component';

describe('IpGridBlogsComponent', () => {
  let component: IpGridBlogsComponent;
  let fixture: ComponentFixture<IpGridBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpGridBlogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpGridBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
