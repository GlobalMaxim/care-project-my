import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingService } from '../routing/routing-service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.less']
})
export class NavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
