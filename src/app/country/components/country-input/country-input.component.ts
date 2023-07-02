import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  searchTerm: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(500)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  onSearch() {
    this.onEnter.emit(this.searchTerm);
  }

  pressKey() {
    this.debouncer.next(this.searchTerm);
  }
}
