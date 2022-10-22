import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillItemComponent } from './skill-item.component';

describe('SkillItemComponent', () => {
  let component: SkillItemComponent;
  let fixture: ComponentFixture<SkillItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
