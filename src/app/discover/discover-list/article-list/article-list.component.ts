import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { MylistDataService } from 'src/app/shared/mylist.data.service';
import { DiscoverDataService } from 'src/app/shared/discover-data.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input()lisofArticles:any; 
  constructor(private mydataService:MylistDataService,private discoverService:DiscoverDataService) { }
  @Output() showValue=new EventEmitter<any>();
  ngOnInit(): void {
  }

  addtoMyList(article:any){
    this.mydataService.addToMylist(article);
  }

  showFullArticle(article:any){
    this.discoverService.selectedArticle.emit(article);
    this.showValue.emit(false);
    console.log(article);
  }

}
