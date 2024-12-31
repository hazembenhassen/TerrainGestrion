import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAdherantComponent } from './ajouter-adherant.component';

describe('AjouterAdherantComponent', () => {
  let component: AjouterAdherantComponent;
  let fixture: ComponentFixture<AjouterAdherantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterAdherantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterAdherantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
