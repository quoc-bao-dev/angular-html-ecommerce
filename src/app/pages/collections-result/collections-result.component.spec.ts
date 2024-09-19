import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsResultComponent } from './collections-result.component';

describe('CollectionsResultComponent', () => {
  let component: CollectionsResultComponent;
  let fixture: ComponentFixture<CollectionsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
