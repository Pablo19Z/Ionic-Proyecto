import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MisCitasTatuadorModalComponent } from './mis-citas-tatuador-modal.component';

describe('MisCitasTatuadorModalComponent', () => {
  let component: MisCitasTatuadorModalComponent;
  let fixture: ComponentFixture<MisCitasTatuadorModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MisCitasTatuadorModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MisCitasTatuadorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
