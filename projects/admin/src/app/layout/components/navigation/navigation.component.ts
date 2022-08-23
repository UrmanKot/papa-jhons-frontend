import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationLink} from '#shared/classes/navigation';

@Component({
  selector: 'admin-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  navigationLinks: NavigationLink[] = [
    {label: 'Статистика', command: '/'},
    {label: 'Продукты', command: '/products'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
