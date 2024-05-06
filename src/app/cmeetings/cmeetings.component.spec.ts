import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmeetingsComponent } from './cmeetings.component';

describe('CmeetingsComponent', () => {
  let component: CmeetingsComponent;
  let fixture: ComponentFixture<CmeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmeetingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
