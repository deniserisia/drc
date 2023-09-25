import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTecnologiasComponent } from './page-tecnologias.component';

describe('PageTecnologiasComponent', () => {
  let component: PageTecnologiasComponent;
  let fixture: ComponentFixture<PageTecnologiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTecnologiasComponent]
    });
    fixture = TestBed.createComponent(PageTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
