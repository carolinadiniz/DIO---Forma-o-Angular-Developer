import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaPageComponent } from './diretiva-page.component';

describe('DiretivaPageComponent', () => {
  let component: DiretivaPageComponent;
  let fixture: ComponentFixture<DiretivaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiretivaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretivaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
