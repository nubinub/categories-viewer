import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GroupColor } from '../../models/categories';

@Component({
  selector: 'cvw-pill',
  imports: [CommonModule],
  templateUrl: './pill.html',
})
export class PillComponent {
  public label = input.required<string>();

  public color = input<GroupColor>();
}
