import React, { Component } from "react";
        import OneDestination from "../../../common/OneDestination/OneDestination";

        export default class KathmanduHeliSightseeingTour extends Component {
            componentDidMount() {
    window.scrollTo(0, 0);
  }
          render() {
            return (
              <div>
                <OneDestination
                  title="Kathmandu Heli Sightseeing Tour – 01 Day"
                  url="https://www.caravanoutdoors.com/wp-content/uploads/2018/03/ktm-aerial.jpg"
                  para1="Kathmandu is the historical city of Nepal. A vibrant and culturally rich city, Kathmandu boasts the most amounts of temples, palaces and historical relics in the country, therefore, every tourist visit the city during their trip to Nepal.A helicopter day tour of Kathmandu city is a brief trip and can give an overview of the city’s history and lifestyle. More days are required to explore the nooks and corner of this historic place, however, a day tour is enough to summarize everything there is to know about it."
                  para2=" You can also opt for this tour after arriving in Nepal or a day before departing. The tour will focus on everything you can lay your eyes on; historical, cultural and religious sites.Kathmandu city is a part of the larger Kathmandu valley"
                  para3=" Along with Bhaktapur, Lalitpur and Kirtipur, it makes a grand city. It was inscribed in UNSECO Heritage Site in 2006. A popular hub among the incoming tourists since the ages, it has attracted the flow of Hippies during the 70s. Today, Jhonche and Thamel are the popular places in Kathmandu which still resemble the milieu of Hippie generation."
                  itineraryes={[]}
                  includedListData={["Entire Transportation during the tour.","Certified, Experienced & Language versed Tour Guide","Helicopter Charter, tax and airport transfer","Permits/fees","Airport picks and drops."]}
                  excludedListData={["Visa & Processing Fee","International flight fares","Evacuation Charges( In case Of Emergency)","Visa fees/Air fare and Airport taxes","Travel Insurance","Bar bills"]}
                  departureDates={[["Kathmandu Heli Sightseeing Tour","$ ","Feb 26, 19 - Feb 26, 19"]]}
                  promoOffer={["Kathmandu Heli Sightseeing Tour – 01 Day","$ 1,100USD"]}
                  details={["1-2 hours","N/A","Chartered Helicopter",null,null,"None","1-10 per Group"]}
                  folderName = 'heli'
                />
              </div>
            );
          }
        }
        