import { Component, OnInit ,EventEmitter} from '@angular/core';
import { MylistDataService } from '../shared/mylist.data.service';


@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  lisofArticles:any;
  showValue=new EventEmitter<any>();
  constructor(private myListService:MylistDataService) { }

  ngOnInit(): void {
    this.lisofArticles=this.myListService.getMyTopicList();
  }

  showFullArticle(article:any){
    this.myListService.myFullArticle.emit(article);
    this.showValue.emit(false);    
  }

}
