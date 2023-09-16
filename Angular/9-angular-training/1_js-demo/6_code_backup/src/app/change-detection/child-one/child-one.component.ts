import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
})
export class ChildOneComponent implements OnInit {
  @Input() numberArr!: number[];
  @Input() user!: any;
  @Input() soccer!: number;
  @Input() todos!: any[];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.warn('ngOnChanges', JSON.stringify(changes));
  }

  ngOnInit() {}
}
