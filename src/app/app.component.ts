import { Component, OnInit ,EventEmitter} from '@angular/core';
import { MylistDataService } from './shared/mylist.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pocket';
  article:any;

  constructor(private myListService:MylistDataService){}
  ngOnInit(){

  }
}
