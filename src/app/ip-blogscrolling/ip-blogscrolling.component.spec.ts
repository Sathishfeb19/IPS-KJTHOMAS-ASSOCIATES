import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpBlogscrollingComponent } from './ip-blogscrolling.component';

describe('IpBlogscrollingComponent', () => {
  let component: IpBlogscrollingComponent;
  let fixture: ComponentFixture<IpBlogscrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpBlogscrollingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpBlogscrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
