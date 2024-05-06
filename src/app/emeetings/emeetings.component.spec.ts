import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmeetingsComponent } from './emeetings.component';

describe('EmeetingsComponent', () => {
  let component: EmeetingsComponent;
  let fixture: ComponentFixture<EmeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmeetingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
