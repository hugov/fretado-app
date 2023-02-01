import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristasCadastradosComponent } from './motoristas-cadastrados.component';

describe('MotoristasCadastradosComponent', () => {
  let component: MotoristasCadastradosComponent;
  let fixture: ComponentFixture<MotoristasCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristasCadastradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoristasCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
