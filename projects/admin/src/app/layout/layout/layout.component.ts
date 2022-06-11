import { Component, OnInit } from '@angular/core';
import {AuthService} from '#shared/auth/auth.service';

@Component({
  selector: 'admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public readonly auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
