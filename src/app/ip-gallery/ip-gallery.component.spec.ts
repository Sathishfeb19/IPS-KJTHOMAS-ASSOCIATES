import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpGalleryComponent } from './ip-gallery.component';

describe('IpGalleryComponent', () => {
  let component: IpGalleryComponent;
  let fixture: ComponentFixture<IpGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
