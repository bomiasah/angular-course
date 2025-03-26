import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarewellMessageComponent } from './farewell-message.component';

describe('FarewellMessageComponent', () => {
  let component: FarewellMessageComponent;
  let fixture: ComponentFixture<FarewellMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarewellMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarewellMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
