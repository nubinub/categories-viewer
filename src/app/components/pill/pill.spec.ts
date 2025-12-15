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

      expect(fixture.nativeElement.querySelector('div.cvw-pill').textContent).toContain(
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

  describe('@Input: rounded', () => {
    it('should set class cvw-pill--rounded when true', async () => {
      fixture.componentRef.setInput('rounded', true);

      await fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.cvw-pill--rounded')).not.toBeNull();
    });

    it('should not set class cvw-pill--rounded when false', async () => {
      fixture.componentRef.setInput('rounded', false);

      await fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.cvw-pill--rounded')).toBeNull();
    });
  });
});
