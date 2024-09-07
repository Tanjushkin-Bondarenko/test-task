import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordfieldemptyComponent } from './passwordfieldempty.component';

describe('PasswordfieldemptyComponent', () => {
  let component: PasswordfieldemptyComponent;
  let fixture: ComponentFixture<PasswordfieldemptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordfieldemptyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordfieldemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
