import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaListarComponent } from './linha-listar.component';

describe('LinhaListarComponent', () => {
  let component: LinhaListarComponent;
  let fixture: ComponentFixture<LinhaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinhaListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinhaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
