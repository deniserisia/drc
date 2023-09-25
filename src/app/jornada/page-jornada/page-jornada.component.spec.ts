import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJornadaComponent } from './page-jornada.component';

describe('PageJornadaComponent', () => {
  let component: PageJornadaComponent;
  let fixture: ComponentFixture<PageJornadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageJornadaComponent]
    });
    fixture = TestBed.createComponent(PageJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
