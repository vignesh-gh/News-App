import { Component, OnInit, Input } from '@angular/core';
import { DiscoverDataService } from 'src/app/shared/discover-data.service';
import { MylistDataService } from 'src/app/shared/mylist.data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input('fullArticle')selectedArticle:any;
  constructor(private discoverDataService:DiscoverDataService,private myListService:MylistDataService) { }

  ngOnInit(): void {
    this.myListService.newArt.subscribe((article:any)=>{
      console.log("ppppppp"+article);
    })
  }
}
