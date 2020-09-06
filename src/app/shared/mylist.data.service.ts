import { EventEmitter } from '@angular/core';

export class MylistDataService{
    myFullArticle=new EventEmitter<any>();
    newArt= new EventEmitter<any>();
    myTopicList=[
        {
            img:'https://image.shutterstock.com/image-photo/bangalore-india-may-7-2016-260nw-416653915.jpg',
            content:'The number of pieces of Rs 2,000 denomination notes constituted 2.4 per cent of the total volume of notes at end-March 2020, down from 3 per cent at end-March 2019 and 3.3 per cent at end-March 2018.',
            link:'https://www.hindustantimes.com/business-news/rs-2-000-notes-were-not-printed-in-2019-20-rbi-report/story-DIja6PzXlwbO3LT0myGDlK.html'
        },
        {
            img:'https://img.etimg.com/thumb/msid-77741734,width-160,height-120,imgsize-507557/wfh-jobs-jump-three-times-vs-pre-covid-19-levels-according-to-naukri-com-survey.jpg',
            content:'WFH jobs jump three times vs pre-COVID-19 levels, according to Naukri.com survey',
            link:'https://economictimes.indiatimes.com/jobs/wfh-jobs-jump-three-times-vs-pre-covid-19-levels-according-to-naukri-com-survey/articleshow/77741734.cms'
        }
    ];

    getMyTopicList(){
        return this.myTopicList.slice();
    }

    addToMylist(article:any){
        this.myTopicList.push(article)
    }
}