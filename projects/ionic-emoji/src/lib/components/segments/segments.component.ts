import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'lib-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SegmentsComponent implements OnInit {

  @Output() changeSegment = new EventEmitter<string>();
  @Input() valueSegment: string = 'Smileys & Emotion';

  @Input()
  set setSegment(segment: number) {
    if (segment) {
      this.valueSegment = this.segments[segment].value;
      this.changeDetectorRef.markForCheck();
    }
  }


  segments = [
    {
      value: 'recent',
      icon: 'time-outline'
    },
    {
      value: 'Smileys & Emotion',
      icon: 'happy-outline'
    },
    {
      value: 'People & Body',
      icon: 'body-outline'
    },
    {
      value: 'Animals & Nature',
      icon: 'paw-outline'
    },
    {
      value: 'Food & Drink',
      icon: 'restaurant-outline'
    },
    {
      value: 'travel',
      icon: 'airplane-outline'
    },
    {
      value: 'activities',
      icon: 'bicycle-outline'
    },
    {
      value: 'objects',
      icon: 'shirt-outline'
    },
    {
      value: 'symbols',
      icon: 'git-branch-outline'
    },
    {
      value: 'flags',
      icon: 'flag-outline'
    }
  ]

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  goToSegment(value: string) {
    this.changeSegment.emit(value);
  }

}
