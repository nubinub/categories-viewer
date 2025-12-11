import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillComponent } from './pill';

describe('Pill', () => {
  let component: PillComponent;
  let fixture: ComponentFixture<PillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PillComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('label', 'Awesome test');
  });

  describe('@Input: label', () => {
    it('should render label', async () => {
      await fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('div.cvw-pill').textContent).toEqual(
        'Awesome test',
      );
    });
  });

  describe('@Input: color', () => {
    it('should set class according to color', async () => {
      fixture.componentRef.setInput('color', 'm-yellow');

      await fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.cvw-pill--m-yellow')).not.toBeNull();
    });
  });
});
