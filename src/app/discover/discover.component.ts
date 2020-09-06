import { Component, OnInit } from '@angular/core';
import { DiscoverDataService } from '../shared/discover-data.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  topicList:any;
  show=true;
  showArticle=false;
  selectedArticle:any;
  constructor(private discoverDataService:DiscoverDataService) { }

  ngOnInit(): void {
    this.discoverDataService.selectedArticle.subscribe(
      (article:any)=>{
        console.log("aaaaaaaaaa"+article);
        this.selectedArticle=article;
      })
  } 


  addList(topic:any){
    this.topicList=topic;
  }
  showFullArticle(showArt:any){
    console.log(showArt);
    this.show=showArt;
    this.showArticle=!showArt;
  }

}
