import { Component, Input } from '@angular/core'

@Component({
  standalone: true,
  templateUrl: './PromiseData.html'
})
export class WithDataComponent {
  @Input() data!: any;
}