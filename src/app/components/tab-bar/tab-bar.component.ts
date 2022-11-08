import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy, Inject} from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';
import {ActivatedRoute,Event as NavigationEvent, NavigationStart, Router, RouterEvent} from '@angular/router';
import { event } from 'cypress/types/jquery';
@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarComponent implements OnInit { activeItemIndex = 0;
path ="";

  constructor(
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService,
    private router: Router
) { }

  ngOnInit(): void {
    this.path = '/';
    this.router.events.subscribe(
    (event: NavigationEvent) => {
      if(event instanceof NavigationStart){
        this.path=event.url;
        console.log(this.path)
      }
    })
  }




  onClick(item: string): void {
    this.alertService.open(item).subscribe();
}

}
