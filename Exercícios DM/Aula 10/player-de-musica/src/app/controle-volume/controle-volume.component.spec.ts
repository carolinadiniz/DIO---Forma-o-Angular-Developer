import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVolumeComponent } from './controle-volume.component';

describe('ControleVolumeComponent', () => {
  let component: ControleVolumeComponent;
  let fixture: ComponentFixture<ControleVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControleVolumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControleVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
