import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecollegeComponent } from './createcollege.component';

describe('CreatecollegeComponent', () => {
  let component: CreatecollegeComponent;
  let fixture: ComponentFixture<CreatecollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});