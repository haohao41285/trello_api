import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrellosComponent } from './trellos.component';

describe('TrellosComponent', () => {
  let component: TrellosComponent;
  let fixture: ComponentFixture<TrellosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrellosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrellosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
