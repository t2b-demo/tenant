import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoaComponent } from './soa.component';

describe('UseractivityComponent', () => {
  let component: SoaComponent;
  let fixture: ComponentFixture<SoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
