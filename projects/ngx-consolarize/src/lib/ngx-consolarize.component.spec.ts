import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxConsolarizeComponent } from './ngx-consolarize.component';

describe('NgxConsolarizeComponent', () => {
  let component: NgxConsolarizeComponent;
  let fixture: ComponentFixture<NgxConsolarizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxConsolarizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxConsolarizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
