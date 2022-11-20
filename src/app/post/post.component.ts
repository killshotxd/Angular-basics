import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
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

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called...');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called...');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called...');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called...');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() called...');
  }
}

// 5:39 11 (04)
