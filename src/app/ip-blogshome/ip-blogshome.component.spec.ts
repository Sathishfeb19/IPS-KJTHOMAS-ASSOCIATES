import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpBlogshomeComponent } from './ip-blogshome.component';

describe('IpBlogshomeComponent', () => {
  let component: IpBlogshomeComponent;
  let fixture: ComponentFixture<IpBlogshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpBlogshomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpBlogshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
