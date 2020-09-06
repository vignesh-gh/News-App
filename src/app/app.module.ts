import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing.module';

import {DiscoverDataService} from './shared/discover-data.service';
import {MylistDataService} from './shared/mylist.data.service';
import { AppComponent } from './app.component';
import { MylistComponent } from './mylist/mylist.component';
import { DiscoverComponent } from './discover/discover.component';
import { DiscoverListComponent } from './discover/discover-list/discover-list.component';
import { ArticleListComponent } from './discover/discover-list/article-list/article-list.component';
import { ArticleComponent } from './discover/discover-list/article-list/article/article.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MylistComponent,
    DiscoverComponent,
    DiscoverListComponent,
    ArticleListComponent,
    ArticleComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DiscoverDataService,MylistDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
