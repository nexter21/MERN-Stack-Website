import React, { Component } from "react";
        import OneDestination from "../../../common/OneDestination/OneDestination";

        export default class KathmanduDayTour extends Component {
            componentDidMount() {
    window.scrollTo(0, 0);
  }
          render() {
            return (
              <div>
                <OneDestination
                  title="Kathmandu Day Tour"
                  url="https://www.caravanoutdoors.com/wp-content/uploads/2016/08/Five-storeyed-temple-at-Bhaktapur-e1479118173937.jpg"
                  para1="Kathmandu is the capital city of Nepal. A vibrant and historically rich city, Kathmandu boasts the most amounts of temples, palaces and historical relics in the country, therefore, every tourist religiously visit the city during their trip to Nepal.A day tour of Kathmandu city is a brief trip and can give an overview of the city’s history and lifestyle. More days are required to explore the nooks and corner of this historic place, however, a day tour is enough to summarize everything there is to know about it."
                  para2=" You can also opt for this tour after arriving in Nepal or a day before departing. The tour will focus on history and cultural significance of predominant Hinduism and Buddhism. Therefore, most of the sites you visit will be religious or cultural sites"
                  para3=" You can choose to relish local cuisine, such as; Newari, Thakali and Nepali, or your own choice of international cuisines.Kathmandu city is a part of the larger Kathmandu valley. Along with Bhaktapur, Lalitpur and Kirtipur, it makes a grand city. It was inscribed in UNESCO Heritage Site in 2006. A popular hub among the incoming tourists since the ages, it has attracted the flow of Hippies during the 70s. Today, Jhonche and Thamel are the most popular places in Kathmandu which still resembles the milieu of the Hippie’s generation."
                  itineraryes={[]}
                  includedListData={["Arrival airport pick and drop","Entire Transportation during the tour.","Entire Meals ( B, L, D)","Certified, Experienced & Language versed Tour Guide","Heritage Sites/National park Entrance Permits"]}
                  excludedListData={["Visa & Processing Fee","International flight fares","Evacuation Charges( In case Of Emergency)","Visa fees/Air fare and Airport taxes","Travel Insurance","Bar bills"]}
                  departureDates={[]}
                  promoOffer={["Kathmandu Day Tour","$ 119USD"]}
                  details={["1 Day","Private Vehicle & Tourist Bus","2-10 Persons",null,null,"None","1-10 per Group"]}
                  folderName = 'tour'
                />
              </div>
            );
          }
        }
        