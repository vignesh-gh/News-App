import { EventEmitter } from '@angular/core'

export class DiscoverDataService{
    selectedArticle=new EventEmitter<any>();

    listOfTopics=[
        'Business',
        'Career',
        'Entertainment',
        'Politics',
        'Science',
        'Technology'
    ]
    listOfBusiness=[
        {
        img:'https://image.shutterstock.com/image-photo/bangalore-india-may-7-2016-260nw-416653915.jpg',
        content:'The number of pieces of Rs 2,000 denomination notes constituted 2.4 per cent of the total volume of notes at end-March 2020, down from 3 per cent at end-March 2019 and 3.3 per cent at end-March 2018.',
        link:'https://www.hindustantimes.com/business-news/rs-2-000-notes-were-not-printed-in-2019-20-rbi-report/story-DIja6PzXlwbO3LT0myGDlK.html'
    },
     {
         img:'https://responsive.fxempire.com/cover/1845x1230/webp-lossy-70.q50/_fxempire_/2020/05/Stock-Market-2.jpg',
        content:'RBI announces OMO purchase of govt securities worth Rs 20,000 crore',
        link:'https://www.hindustantimes.com/business-news/rbi-calls-for-wide-ranging-reforms-to-offset-covid-19-losses/story-O1hSsMgzZS9mDH8VGc63wL.html'
    },   
    {
        img:'https://www.hindustantimes.com/rf/image_size_300x169/HT/p2/2020/08/25/Pictures/exchange-building-results-displaying-screen-facade-pictured_566cd786-e689-11ea-afd3-94cd0f514a98.jpg',
        content:'Indian shares hit 6-month high on global cues; banks gain',
        link:'https://www.hindustantimes.com/business-news/indian-shares-hit-6-month-high-on-global-cues-banks-gain/story-QgQtRpIsx4iE53EQfQbvJP.html'
    },
    {
        img:'https://www.hindustantimes.com/rf/image_size_300x169/HT/p2/2020/07/15/Pictures/_96ec6c7a-c665-11ea-a4f1-98cb1f5bcae6.jpg',
        content:'Silver edges higher, spot gold prices drop slightly',
        link:'https://www.hindustantimes.com/business-news/indian-spot-gold-rate-and-silver-price-on-aug-25-2020/story-LkJnsdImhQRH7Aj80DLi1O.html'
    }
    ]
    listOfCareer=[
        {
            img:'https://img.etimg.com/thumb/msid-77741734,width-160,height-120,imgsize-507557/wfh-jobs-jump-three-times-vs-pre-covid-19-levels-according-to-naukri-com-survey.jpg',
            content:'WFH jobs jump three times vs pre-COVID-19 levels, according to Naukri.com survey',
            link:'https://economictimes.indiatimes.com/jobs/wfh-jobs-jump-three-times-vs-pre-covid-19-levels-according-to-naukri-com-survey/articleshow/77741734.cms'
        },
        {
            img:'https://img.etimg.com/thumb/msid-77738199,width-160,height-120,imgsize-457329/hiring-for-work-from-home-jobs-surges-in-india-report.jpg',
            content:'Hiring for work-from-home jobs surges in India: Report',
            link:'https://economictimes.indiatimes.com/jobs/hiring-for-work-from-home-jobs-surges-in-india-report/articleshow/77738199.cms'
        },
        {
            img:'https://img.etimg.com/thumb/msid-77675638,width-160,height-120,imgsize-104559/wfh-creating-trust-issues-between-managers-and-employees.jpg',
            content:'WFH creating trust issues between managers and employees',
            link:'https://economictimes.indiatimes.com/jobs/wfh-creating-trust-issues-between-managers-and-employees/slideshow/77675825.cms'
        },
        {
            img:'https://img.etimg.com/thumb/msid-77724674,width-160,height-120,imgsize-123509/fmcg-shows-highest-discrepancy-in-background-check-during-apr-jun-says-report.jpg',
            content:'FMCG shows highest discrepancy in background check during Apr-Jun, says report',
            link:'https://economictimes.indiatimes.com/jobs/highly-educated-people-are-much-more-likely-to-be-unemployed-in-low-income-countries-ilo/articleshow/77737443.cms'
        }
    ]
    listOfEntertainment=[
        {
            img:'https://images.mid-day.com/images/2020/aug/amitabh-gym_l.jpg',
            content:'When Amitabh Bachchan Had Nothing To Write On Twitter',
            link:'https://www.mid-day.com/articles/when-amitabh-bachchan-had-nothing-to-write-on-twitter/22954228'
        },
        {
            img:'https://images.mid-day.com/images/2020/aug/gaurocket_d.jpg',
            content:'Gauahar Khan: When I Landed My First Role, I Did Five Rounds Of Auditions',
            link:'https://www.mid-day.com/articles/gauahar-khan-when-i-landed-my-first-role-i-did-five-rounds-of-auditions/22952248'
        },
        {
            img:'https://images.mid-day.com/images/2020/aug/celebs-ganpati-cover_d.jpg',
            content:'Ganesh Chaturthi 2020: How actors celebrated Ganpati festival this year',
            link:'https://www.mid-day.com/photos/ganesh-chaturthi-2020-how-actors-celebrated-ganpati-festival-this-year/87745'
        },
        {
            img:'https://images.mid-day.com/images/2020/aug/srk-amraan-a_l.jpg',
            content:'Here is Why Amaal Malik Has Been Facing Heat From Salman Khan Fans',
            link:'https://www.mid-day.com/articles/heres-why-amaal-malik-has-been-facing-heat-from-salman-khan-fans/22953207'
        }
    ]
    listOfPolitics=[
        {
            img:'https://images.news18.com/ibnlive/uploads/2020/07/1595786986_ajay-maken.jpg?impolicy=website&width=281&height=187',
            content:'Ajay Maken to Visit Jaipur to Deal with Congrees Organisational Issues in Rajasthan',
            link:'https://www.news18.com/news/politics/ajay-maken-to-visit-jaipur-to-deal-with-congs-organisational-issues-in-rajasthan-2818255.html'
        },
        {
            img:'https://images.news18.com/ibnlive/uploads/2020/08/1597685012_parliament3.jpg?impolicy=website&width=281&height=187',
            content:'Cabinet Committee on Parliamentary Affairs Recommends Monsoon Session from Sept 14 to Oct 1',
            link:'https://www.news18.com/news/politics/cabinet-committee-on-parliamentary-affairs-recommends-monsoon-session-from-sept-14-to-oct-1-2818119.html'
        },
        {
            img:'https://images.news18.com/ibnlive/uploads/2020/07/1595673015_veerappa-moily.jpg?impolicy=website&width=281&height=187',
            content:'Sorry if We Hurt Sonia Gandhis Feelings, Says Cong Leader Who Signed Letter Seeking Reforms in Party',
            link:'https://www.news18.com/news/india/sorry-if-we-hurt-sonia-gandhis-feelings-says-veerappa-moily-who-signed-letter-seeking-reforms-in-congress-2817827.html'
        }
    ]
    listOfSciences=[
        {
            img:'https://www.sciencenews.org/wp-content/uploads/2020/08/082420_eg_reinfection_feat-680x383.jpg',
            content:'A man in Hong Kong is the first confirmed case of coronavirus reinfection',
            link:'https://www.sciencenews.org/article/coronavirus-covid-19-first-case-reinfection-man-hong-kong'
        },
        {
            img:'https://www.sciencenews.org/wp-content/uploads/2020/08/082020_cw_hyena_feat-330x186.jpg',
            content:'Female hyenas kill off cubs in their own clans',
            link:'https://www.sciencenews.org/article/female-hyena-moms-kill-cubs-own-clans'
        },
        {
            img:'https://www.sciencenews.org/wp-content/uploads/2020/08/081120_sm_covid-fungus_feat-1028x579.jpg',
            content:'How two new fungus species got named after the COVID-19 pandemic',
            link:'https://www.sciencenews.org/article/fungus-species-named-covid-19-pandemic-coronavirus'
        }
    ]
    listOfTechnology=[
        {
            img:'https://i.gadgets360cdn.com/large/jio_wi_fi_mesh_router_image_smart_consumer_small_1598359087231.jpg?downsize=160:120&output-quality=80&output-format=webp',
            content:'Jio Wi-Fi Mesh Router Surfaces Online With Price Details Ahead of Official Launch',
            link:'https://gadgets.ndtv.com/telecom/news/jio-wifi-mesh-router-price-in-india-rs-2499-features-availability-launch-2285095'
        },
        {
            img:'https://i.gadgets360cdn.com/large/samsung_galaxy_tab_s7_plus_image_small_1596632484180.jpg?downsize=160:120&output-quality=80&output-format=webp',
            content:'Samsung Galaxy Tab S7, Samsung Galaxy Tab S7+ Tipped to Go on Sale in India on September 7',
            link:'https://gadgets.ndtv.com/tablets/news/samsung-tab-s7-plus-sale-galaxy-india-september-7-pre-order-begin-soon-leak-2285072'
        },
        {
            img:'https://i.gadgets360cdn.com/large/irobot_roomba_1598356103503.jpg?downsize=950:*&output-quality=80&output-format=webp',
            content:'iRobot Launches New Platform to Make Roomba, Other Robot Cleaners ‘Smarter’',
            link:'https://gadgets.ndtv.com/smart-home/news/irobot-genius-home-intelligence-roomba-robots-vacuum-smarter-cleaning-control-2285055'
        }
    ]
    

    getTopicList(){
        return this.listOfTopics.slice();
    }
    getBusinessList(){
        return this.listOfBusiness.slice();
    }
    getCareerList(){
        return this.listOfCareer.slice();
    }
    getEntertainmentList(){
        return this.listOfEntertainment.slice();
    }
    getPoliticsList(){
        return this.listOfPolitics.slice();
    }
    getScienceList(){
        return this.listOfSciences.slice();
    }
    getTechnologyList(){
        return this.listOfTechnology.slice();
    }



}