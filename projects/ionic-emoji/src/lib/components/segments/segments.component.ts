import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'lib-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SegmentsComponent implements OnInit {

  @Output() changeSegment = new EventEmitter<string>();
  @Input() valueSegment: string = 'recent';
  @Input() isSearching = false;

  @Input()
  set setSegment(segment: number) {
    if (segment) {
      // FIXME: no corresponde al scroll, deberia recibir el nombre de una vez para evitar errores de indice
      this.valueSegment = this.segments[segment].value;
      this.changeDetectorRef.markForCheck();
    }
  }


  segments = [
    {
      value: 'recent',
      icon: 'time-outline',
      disabled: false
    },
    {
      value: 'Smileys & Emotion',
      icon: 'happy-outline',
      disabled: false
    },
    {
      value: 'People & Body',
      icon: 'body-outline',
      disabled: false
    },
    {
      value: 'Animals & Nature',
      icon: 'paw-outline',
      disabled: false
    },
    {
      value: 'Food & Drink',
      icon: 'restaurant-outline',
      disabled: false
    },
    {
      value: 'Travel & places',
      icon: 'airplane-outline',
      disabled: false
    },
    {
      value: 'activities',
      icon: 'bicycle-outline',
      disabled: true
    },
    {
      value: 'objects',
      icon: 'shirt-outline',
      disabled: true
    },
    {
      value: 'symbols',
      icon: 'git-branch-outline',
      disabled: true
    },
    {
      value: 'flags',
      icon: 'flag-outline',
      disabled: true
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
