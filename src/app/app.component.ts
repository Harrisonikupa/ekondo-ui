import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoaderService } from './shared/services/loader.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader = false;
  showSidebar = false;
  showFooter = false;
  showLoader = false;

  currentUrl: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      }

      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.showHeader = this.activatedRoute.firstChild?.snapshot.data.showHeader !== false;
        this.showSidebar = this.activatedRoute.firstChild?.snapshot.data.showSidebar !== false;
        this.showFooter = this.activatedRoute.firstChild?.snapshot.data.showFooter !== false;
        this.loaderService.hide();
       this.closeSideBar();
      }
    });
  }

  closeSideBar() {
    $('#sidebar').removeClass('active');
  }
}
