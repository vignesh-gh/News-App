import {Routes, RouterModule} from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { MylistComponent } from './mylist/mylist.component';
import { NgModule, Component } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DiscoverListComponent } from './discover/discover-list/discover-list.component';
import { ArticleListComponent } from './discover/discover-list/article-list/article-list.component';
import { ArticleComponent } from './discover/discover-list/article-list/article/article.component';


const appRoutes:Routes=[
    {path:'',component:DiscoverComponent},
    {path:'mylist',component:MylistComponent},
    {path:'discover',component:DiscoverComponent},   
    {path:'not-found',component:PageNotFoundComponent},
    {path:'**',redirectTo:'not-found'}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}