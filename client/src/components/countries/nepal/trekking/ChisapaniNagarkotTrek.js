import React, { Component } from "react";
import OneDestination from "../../../common/OneDestination/OneDestination";

export default class ChisapaniNagarkotTrek extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <OneDestination
          title="Chisapani Nagarkot Trek – 5 Days"
          url="https://www.caravanoutdoors.com/wp-content/uploads/2017/06/nagarkot-2.jpg"
          para1="Nagarkot is a popular hill-station and the tourist site located at the outskirts of Kathmandu. A secluded place, Nagarkot is covered with ethnic Newari houses and lush green forests, which makes it a wonderful getaway. You can easily catch the scenic views of the surrounding mountains, including; Mount Everest, from the top of Nagarkot.The trek combines a short hike in the outskirts of Kathmandu with a visit to the revered site of Changunarayan."
          para2=" It is designed for tourists who have limited schedule or those looking for a minimal yet fun trek in Nepal.The trek starts from Sundarijal, after a brief drive from Kathmandu. The first day hike is easier"
          para3=" The final stop of the day is made at Chisapani, another wonderful hill-station. The next day may encounter tougher hike due to increasing altitude and length of the trail. The final stop will be made at Nagarkot.The next day, you can enjoy a short early morning hike to catch the local scenery. The trek will end at Changunarayan, afterwards, you can catch your drive back to Kathmandu, and prepare to leave.The trail will pass through Shivapuri National Park, hence, you may get to see some exquisite wildlife during the trek."
          itineraryes={[
            [
              ["Arrival in Kathmandu"],
              [
                "\nAt your arrival in Kathmandu, a member of our team will greet and receive you at the airport. You will be transferred to your hotel. Our representative will brief on your arrival about the trip. The rest of the day is yours. The evening we be spent enjoying complimentary local dinner one of the finest local diner with cultural program"
              ]
            ],
            [
              ["Drive to Sundarijal & Hike to Chisapani"],
              [
                "\nAfter an early breakfast, you’ll drive to Sundarijal in a private vehicle. It is a busy picnic spot of the valley-dwellers on public holidays. The site is gifted with lush green forests and springs. From here, you can start your maiden hike towards Chisapanai. You will pass through few villages and forests before arriving to the resting spot. Chisapani is a Sherpa village, which offers an opportunity to explore ethnic lifestyle with some great scenery."
              ]
            ],
            [
              ["Trek to Nagarkot"],
              [
                "\nAfter a hearty breakfast, you can start your hike for the day. The next stop will be at Nagarkot, a popular tourist spot. It may be a demanding trek today due to the length and slowly rising altitude. The trail passes mostly through dense forests. After a brief stop at Chauki Bhanjyang or Jhule for the lunch, you’ll continue walking towards Nagarkot. You will enjoy the local scenery and environment of the place. A hill station, the weather may change abruptly. An early morning hike at Nagarkot will offer a rare chance to see the scenic mountains, including; Mount Everest."
              ]
            ],
            [
              ["Trek to Changu Narayan & Drive back to Kathmandu"],
              [
                "\nThe last day of trek will start early. After a short hike in Nagarkot and the breakfast, you’ll start descending towards the last stop. Changunarayan is a UNESCO world heritage site and a revered place for the Hindus. After a brief stop for the lunch at Telkot, you will continue hiking towards Changunarayan. At the end of the trek,  you can catch your drive back  to Kathmandu."
              ]
            ],
            [
              ["Depart from Kathmandu"],
              [
                "\nYou will be transferred to the Airport to catch your flight back home."
              ]
            ]
          ]}
          includedListData={[
            "Arrival airport pick and drop.",
            "Dinner in one of the finest diners in Kathmandu before and after the trek.",
            "2 Nights at ★★★ hotel in Kathmandu.",
            "Entire land commute during the trip",
            "Standard Tea-house/ Lodge during the trek.",
            "A la Carte (B,L,D) Meals during the trek.",
            "1 Certified Guide (Licensed & First Aid Trained)",
            "TIMS Card/ National Park entry fee/Other Permits",
            "All the Gov. and Local taxes as per applicable",
            "Trekking Map and Group medical kit box (Diamox and First Aid Medicine)",
            "Trip Completion Certificate",
            "Arrangement of Rescue/Medical Helicopter service; covered by your Insurance agency."
          ]}
          excludedListData={[
            "Visa & Processing Fee",
            "International flight fares",
            "Meals other than during the trek and before/after complimentary dinner",
            "Mineral water and refreshments during the trek",
            "Travel insurance (Cover Helicopter evacuation and Trip Cancellation charges)",
            "Guide/Porter Tipping"
          ]}
          departureDates={[
            ["Chisapani Nagarkot Trek", "$ 349", "Feb 24, 19 - Feb 24, 19"]
          ]}
          promoOffer={["Chisapani Nagarkot Trek – 5 Days", "$ 399USD"]}
          details={[
            "05 days",
            "2,195 meters (7,202 ft)",
            "Full board on trek",
            "Private Vehicle, Tourist Bus",
            "February, March, April, May, June, September, October, November",
            "Easy",
            "1-10 per Group"
          ]}
        />
      </div>
    );
  }
}
