import { Component, input } from '@angular/core';

@Component({
  selector: 'cvw-tab',
  imports: [],
  templateUrl: './tab.html',
})
export class TabComponent {
  public active = input(false);

  public label = input.required();

  public icon = input.required<'alphabetical' | 'group'>();
}
