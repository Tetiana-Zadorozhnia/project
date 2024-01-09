import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoVersionComponent } from './demo-version.component';

describe('DemoVersionComponent', () => {
  let component: DemoVersionComponent;
  let fixture: ComponentFixture<DemoVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoVersionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
