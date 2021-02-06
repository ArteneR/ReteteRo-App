import { Component, Input } from '@angular/core';


@Component({
  selector: 'section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.less']
})
export class SectionTitleComponent {
  @Input() title: string;
}
