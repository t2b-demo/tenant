import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwttokenComponent } from './jwttoken.component';

describe('JwttokenComponent', () => {
  let component: JwttokenComponent;
  let fixture: ComponentFixture<JwttokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwttokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwttokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
