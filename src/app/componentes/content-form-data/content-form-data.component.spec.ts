import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFormDataComponent } from './content-form-data.component';

describe('ContentFormDataComponent', () => {
  let component: ContentFormDataComponent;
  let fixture: ComponentFixture<ContentFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentFormDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
