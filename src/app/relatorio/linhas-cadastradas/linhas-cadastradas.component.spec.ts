import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhasCadastradasComponent } from './linhas-cadastradas.component';

describe('LinhasCadastradasComponent', () => {
  let component: LinhasCadastradasComponent;
  let fixture: ComponentFixture<LinhasCadastradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinhasCadastradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinhasCadastradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
