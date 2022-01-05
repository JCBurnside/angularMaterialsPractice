import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

const SMALL_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private obs : BreakpointObserver) { }
  isScreenSmall : boolean = false;
  ngOnInit(): void {
    this.obs.observe(`(max-width:${SMALL_BREAKPOINT}px)`)
      .subscribe(
        state =>
          this.isScreenSmall=state.matches
      )
  }

}
