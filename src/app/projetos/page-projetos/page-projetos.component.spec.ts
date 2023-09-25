import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjetosComponent } from './page-projetos.component';

describe('PageProjetosComponent', () => {
  let component: PageProjetosComponent;
  let fixture: ComponentFixture<PageProjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageProjetosComponent]
    });
    fixture = TestBed.createComponent(PageProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
