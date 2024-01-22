import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmblemLogoComponent } from './emblem-logo.component';

describe('EmblemLogoComponent', () => {
  let component: EmblemLogoComponent;
  let fixture: ComponentFixture<EmblemLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmblemLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmblemLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
