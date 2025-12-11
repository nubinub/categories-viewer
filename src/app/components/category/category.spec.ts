import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICategory } from '../../models/categories';
import { CategoryComponent } from './category';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let category: ICategory;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;

    category = {
      id: 47,
      group: {
        id: 5,
        name: 'Impôts & Rémunérations',
        color: 'm-red',
      },
      wording: 'Cotisations sociales facultatives et complémentaires',
      description:
        'Mutuelle complémentaire, cotisations retraites complémentaires, loi Madelin et autres cotisations retraite ou maladie facultatives.',
    };

    fixture.componentRef.setInput('category', category);
    await fixture.whenStable();
  });

  describe('@Input: category', () => {
    it('should display category wording', () => {
      expect(fixture.nativeElement.querySelector('h6').textContent).toEqual(
        'Cotisations sociales facultatives et complémentaires',
      );
    });

    it('should display category description', () => {
      expect(fixture.nativeElement.querySelector('p').textContent).toEqual(
        'Mutuelle complémentaire, cotisations retraites complémentaires, loi Madelin et autres cotisations retraite ou maladie facultatives.',
      );
    });
  });

  describe('@Input: selected', () => {
    it('should mark category as selected when given true', async () => {
      fixture.componentRef.setInput('selected', true);

      await fixture.detectChanges();

      expect(fixture.nativeElement.classList).toContain('cvw-category--selected');
    });

    it('should mark category as not selected when given false', async () => {
      fixture.componentRef.setInput('selected', false);

      await fixture.detectChanges();

      expect(fixture.nativeElement.classList).not.toContain('cvw-category--selected');
    });
  });
});
