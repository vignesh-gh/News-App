import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DiscoverDataService } from 'src/app/shared/discover-data.service';

@Component({
  selector: 'app-discover-list',
  templateUrl: './discover-list.component.html',
  styleUrls: ['./discover-list.component.css']
})
export class DiscoverListComponent implements OnInit {
  listOfTopics:string[]=[];
  
  @Output('listOfTopics') topicList=new EventEmitter<any>();
  constructor(private disdataService:DiscoverDataService) { }

  ngOnInit(): void {
    this.listOfTopics=this.disdataService.getTopicList();
  }        
  
  getList(topic:string){
    if(topic=='Business'){
     var businessList=this.disdataService.getBusinessList();
     console.log(businessList);
      this.topicList.emit(businessList);
    }
    if(topic=='Career'){
      var careerList=this.disdataService.getCareerList();
       this.topicList.emit(careerList);
    }
    if(topic=='Entertainment'){
      var enterList=this.disdataService.getEntertainmentList();
      this.topicList.emit(enterList);
    }
    if(topic=='Politics'){
      var ploticsList=this.disdataService.getPoliticsList();
      this.topicList.emit(ploticsList);
    }
    if(topic=='Science'){
      var scienceList=this.disdataService.getScienceList();
      this.topicList.emit(scienceList);
    }
    if(topic=='Technology'){
      var techList=this.disdataService.getTechnologyList();
      this.topicList.emit(techList);
    }
    
    
  }

}
