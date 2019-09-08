import React, { Component } from "react";
        import OneDestination from "../../../common/OneDestination/OneDestination";

        export default class LangtangHeliTour extends Component {
            componentDidMount() {
    window.scrollTo(0, 0);
  }
          render() {
            return (
              <div>
                <OneDestination
                  title="Langtang Heli Tour – 01 Day"
                  url="https://www.caravanoutdoors.com/wp-content/uploads/2016/09/langtang-lirung-e1479118767672.jpg"
                  para1="Langtang valley is located in a close proximity to Tibet in the north. A discreet region just 19 km north of Kathmandu, it offers one of the best tour experiences in Nepal.Langtang Lirung (7,227 meters) and Yala Peak (5,520 meters) dominates the scenery. The entire trail lies inside Langtang National Park and the meager population of the region tends to cater the tourists themselves."
                  para2=" The region was heavily devastated during the major earthquake of 2015, however, the locals have rebuilt the region, and today it’s is fully operational.This aerial tour of the Langtang will add a new experience in your bucket list. Shortly after you get on board, you’ll get to see spectacular view of the Ganesh Himal and the Dorje Lakpha Himal"
                  para3=" You also get to see the Shishapangma Himal which is also one of a kind peak in the region.Langtang Heli Tour is suitable for all kinds of tourists. You must be accompanied by a guide to enter the region. Langtang National Park is the first Himalayan national park of Nepal. Established in 1976, it is home to Gosainkunda lake and many rare flora and faunas. Himalayan black bear, Himalayan tahr, Rhesus monkey and Red Panda are few of the exotic animals found inside the park."
                  itineraryes={[]}
                  includedListData={["Ground Transportation during the tour.","Certified, Experienced & Language versed Tour Guide","★★★ Standard Accommodation","Heritage Sites/National park Entrance Permits","Helicopter Charter, tax and airport transfer","Permits","Airport picks and drops."]}
                  excludedListData={["Visa & Processing Fee","International flight fares","Evacuation Charges( In case Of Emergency)","Visa fees/Air fare and Airport taxes","Travel Insurance","Bar bills"]}
                  departureDates={[["Langtang Heli Tour - 01 Day","$ 1799","Feb 26, 19 - Feb 26, 19"]]}
                  promoOffer={["Langtang Heli Tour – 01 Day","$ 1,830USD"]}
                  details={[" 4-5 hours","N/A","Transportation","Minimum 2 people",null,"None","1-10 per Group"]}
                  folderName = 'heli'
                />
              </div>
            );
          }
        }
        