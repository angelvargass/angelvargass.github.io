import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onLanguageChange = new EventEmitter<string>();
  translate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeAppLanguage() {
    this.translate = !this.translate;
    this.onLanguageChange.emit(this.translate? 'es' : 'en');
  }

}
