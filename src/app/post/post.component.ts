import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnChanges, DoCheck {
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('App is Up Constructor is RUNNING', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit() called...', this.postImg);
  }

  ngDoCheck() {
    console.log('ngDoCheck() called.....');
  }

  ngOnChanges() {
    console.log('ngOnChanges() called.....');
  }
}

// 5:39 11 (04)
