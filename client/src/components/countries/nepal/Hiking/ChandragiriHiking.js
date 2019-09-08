import React, { Component } from "react";
        import OneDestination from "../../../common/OneDestination/OneDestination";

        export default class ChandragiriHiking extends Component {
            componentDidMount() {
    window.scrollTo(0, 0);
  }
          render() {
            return (
              <div>
                <OneDestination
                  title="Chandragiri Hiking – 01 Day"
                  url="https://www.caravanoutdoors.com/wp-content/uploads/2018/02/bhaleshwor-mahadev.jpg"
                  para1="Chandragiri is a popular hill located at the South West of Kathmandu. Measuring 2,551 meters above sea-level, it lies 7 km from Thankot, on the outskirts of Kathmandu city. The temple of Bhaleshwor Mahadev atop the hill is a major tourist attraction.The historians suggest that King Prithvi Narayan of the Shah dynasty worshiped at the temple before attacking and conquering the Kathmandu valley."
                  para2="The temple is accessible through cable car or hiking. A day hiking is enough to reach the top and come back down. Himalayas such as Manaslu, Ganesh Himal, Langtang Ranges, Gaurishankar and Everest are visible from the top"
                  para3=" The overall duration of the hiking is more or less 7 hours. The hill is filled with various kinds of flora and fauna. It becomes a delight for the hikers to witness natural riches at such close distance from Kathmandu.Kathmandu was inscribed in UNSECO World Heritage Site in 2006. A popular hub among the incoming tourists since the ages, it has attracted the flow of Hippies during the 70s. Chandragiri is a local attraction popular among both the locals and foreign tourists.."
                  itineraryes={[]}
                  includedListData={["Transportation from/to Hiking Point","Breakfast, along with Tea/Coffee","Refreshment (Tea/Coffee)","Day pack lunch","1 Certified Guide (Licensed & First Aid Trained)","Site entry fee/Tickets","All the Gov. and Local taxes as per applicable","Trip Completion Certificate"]}
                  excludedListData={["Dinner at Kathmandu","Meals other than specified in the itinerary","Mineral water/Alcohol/Beverage","Guide/Porter Tipping","Unavoidable expenses; personal expenses, medical support etc"]}
                  departureDates={[["Chandragiri Hiking - 1 day","$ 75","Feb 26, 19 - Feb 26, 19"]]}
                  promoOffer={["Chandragiri Hiking – 01 Day","$ 75USD"]}
                  details={["01 day","2,551 meters (8,370 ft)","Private Vehicle, Tourist Bus",null,null,"Easy","1-10 per Group"]}
                  folderName = 'hiking'
                />
              </div>
            );
          }
        }
        