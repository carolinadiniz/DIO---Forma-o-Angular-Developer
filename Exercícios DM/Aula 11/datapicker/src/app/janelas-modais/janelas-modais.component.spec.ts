import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelasModaisComponent } from './janelas-modais.component';

describe('JanelasModaisComponent', () => {
  let component: JanelasModaisComponent;
  let fixture: ComponentFixture<JanelasModaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JanelasModaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JanelasModaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
