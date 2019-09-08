import React, { Component } from "react";
import OneDestination from "../../../common/OneDestination/OneDestination";

export default class IslandPeakClimb extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <OneDestination
          title="Island Peak Climb – 16 Days"
          url="https://www.caravanoutdoors.com/wp-content/uploads/2016/09/escalada-island-peak-e1479186335869.jpg"
          para1="Island peak is considered as one of the best 6000+ meter Expedition for Starters, you can easily get Acclimated to the Altitude simply by completing Everest Base Camp or any other trek in the region."
          para2="Island peak, called Imja Tse in Nepali, got its name because its position in between the Chhukung Valley is similar to that of an island in a sea of ice."
          para3="You will get a Full Board Package which includes the climbing permit from NMA(Nepal Mountaineering Association). You can fully customize the trip, and Don’t feel hesitant to ask for any sort of Advice or Suggestion prior to your Journey"
          reviewPhoto="mera-review"
          reviewText="Amazing Trip!"
          reviewName="Leah T"
          reviewTripLink="https://www.tripadvisor.com/Profile/leaht519"
          review={[
            "Island_review1",
            "Great experience!!",
            "Olivia H",
            "https://www.tripadvisor.com/ShowUserReviews-g293890-d10758852-r478403152-Caravan_Outdoors-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
          ]}
          itineraryes={[
            [
              ["Arrival in Kathmandu"],
              [
                "\nAt your arrival in Kathmandu, a member of our team will greet and receive you at the airport. You will be transferred to your hotel. Our representative will brief on your arrival about the trip. The rest of the day is yours. The evening we be spent enjoying complimentary local dinner one of the finest local diner with cultural program."
              ]
            ],
            [
              ["Fly to Lukla & Trek to Phakding"],
              [
                "\nLukla is the gateway to Everest Base Camp. After a scenic half an hour flight to Lukla Airport, the journey will begin. The first day of the trek will be more like a warm up. It will take you to Phakding village, just above Lukla. You can spend the rest of the day enjoying the local scenery."
              ]
            ],
            [
              ["Trek to Namche Bazaar"],
              [
                "\nThe trek will ascend up to the Dudh Koshi Valley. After a few hours of hike, you will arrive at entrance of Sagarmatha National Park in Monjo. The next and the final stop will be at Namche Bazaar. Namche is the highlight of the trek. The village bustling with people and lodges feels more like a city."
              ]
            ],
            [
              ["Acclimatization Day"],
              [
                "\nHigher the altitude, thinner the air! You need to gain altitude slowly and steadily so that we get enough time to acclimatize en route. Today, you hike to Syangboche village, just above Namche and return back to Namche to spend the rest of the day."
              ]
            ],
            [
              ["Trek to Tengboche"],
              [
                "\nThe trek follows the gradual trail with few short up and downs overlooking magnificent view of the great giant snow peaks; Everest, Nuptse, Lhotse, Ama Dablam and Thamserku. After few hours of steady uphill hike, you’ll reach the most anticipated destination, Tengboche. The monastery located at Tengboche s the highest in Nepal, and is holds a special place for the Sherpas living in the Khumbu region. If you arrive here in Autumn, you may even get to witness the Mani Rimdu festival."
              ]
            ],
            [
              ["Trek to Dingboche"],
              [
                "\nDingboche is a next village from Tengboche. Passing through the typical Sherpa villages like Pangboche and Shomare, you reach Dingboche in a matter of few hours."
              ]
            ],
            [
              ["Acclimatization at Dingboche"],
              [
                "\nIt is acclimatization and an important day. You’ll get used to the thin air of above 4,000 meters. It is essential to spend some time here to prepare yourself for the further trek. You can also take some couple of hours to hike up to the nearby Chhukung village and return."
              ]
            ],
            [
              ["Trek to Chhukung valley"],
              [
                "\nToday, you have a shorter day. After breakfast, you head further east and walk 2-3 hrs uphill to reach the Chhukung village. You can spend the rest of the day here and prepare for the climb next day. It’s important that you acclimatize and grasp much knowledge about the weather, snow and climbing skills."
              ]
            ],
            [
              ["Trek to Island Peak Base Camp"],
              [
                "\nToday, you head upwards, passing besides the Lhotse Glacier. A zig-zag route through the Imja and Lhotse glacier moraines leads to a wide valley flanking the south western side of the Island peak. You’ll reach the Island peak base camp and rest overnight."
              ]
            ],
            [
              ["Island Peak Summit/Trek back to Chhukung"],
              [
                "\nIt’s a Big Day. Summit days are always overwhelming. You start early, probably around 2 am and start climbing up. This is not difficult but there are several short rock steps to climb before you emerge on the right side of the gully. The route then follows a ridgeline, which leads to an exhilarating and exposed traverse onto the snout of the summit glacier. A guide will fix the rope and assist your for climbing. The final ascent isn’t much difficut and provides an exciting feeling. You can spend some time at the top a return back the same way. The day ends at Chhukung village."
              ]
            ],
            [
              ["Spare Summit Day"],
              [
                "\nAn extra day is kept to ensure you summit the peak if you are unable to do so the first day."
              ]
            ],
            [
              ["Trek to Tengboche"],
              [
                "\nThe trek will be comparativley easier than before. You’ll be heading down to Tengboche village. The trail leads through the vast forest of pine and rhododendron, before arriving at Tengboche. The Tengboche monastery is the highlight of this trek. Built more than 100 years ago, locals consider it an important place for homage. You can enter the premise and witness the monks and their lifestyle in person. If you visit the place in autumn, you might even get to celebrate the local festival of Mani Rimdu."
              ]
            ],
            [
              ["Trek to Namche Bazaar"],
              [
                "\nFrom Tengboche, you head back down the same trail towards Namche Bazaar. Even though, you don’t reach the base camp, the magnificent view of Everest will be visible through the journey. You spend the night at the Namche along with other trekkers."
              ]
            ],
            [
              ["Trek to Lukla"],
              [
                "\nLukla will be the final stop of your trek. A final leg of the trip, you might overcome with mixed feelings. It’s a day to throw a small party. The evening and the night will be marked with celebrations that will include a lot of singing and dancing. You will spend the night at Lukla and fly out early morning."
              ]
            ],
            [
              ["Fly back to Kathmandu"],
              [
                "\nYou can take the earliest possible flight back to Kathmandu. One of our representative will transfer you to your hotel. Later the evening, we will treat you with a complimentary dinner, a set of exquisite Nepalese cuisines."
              ]
            ],
            [
              ["Departure from Kathmandu"],
              [
                "\nYou will be transferred to the Airport to catch your flight back home."
              ]
            ]
          ]}
          includedListData={[
            "Arrival airport pick and drop.",
            "Dinner in one of the finest diners in Kathmandu before and after the trek.",
            "2 Nights at ★★★ hotel in Kathmandu.",
            "Entire land commute during the trip",
            "Domestic flight fare, airport tax and domestic transfer.",
            "Standard Tea-house/ Lodge during the trek.",
            "(B,L,D) Meals during the trek.",
            "1 Climbing Guide (Licensed & First Aid Trained) and Porters",
            "Mountain climbing and other related permits",
            "Private High-Altitude Tents",
            "Kitchen cookware and staffs",
            "Duffel Bag",
            "Climbers’ Certificate (Issued by Government)",
            "Arrangement of Rescue/Medical Helicopter service; covered by your Insurance agency."
          ]}
          excludedListData={[
            "Meals other than during the trek and dinners in Kathmandu",
            "Mineral water and refreshments during the trek",
            "Personal gears and equipment",
            "Travel insurance (Cover Helicopter evacuation and Trip Cancellation charges)",
            "Guide/Porter Tipping"
          ]}
          departureDates={[
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Sep 28, 19 - Oct 11, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Oct 10, 19 - Oct 25, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Oct 22, 19 - Nov 06, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Nov 05, 19 - Nov 20, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Nov 15, 19 - Nov 30, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Mar 20, 19 - Apr 04, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Apr 07, 19 - Apr 22, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Apr 24, 19 - May 09, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "May 03, 19 - May 18, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Sep 26, 19 - Oct 11, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Oct 07, 19 - Oct 22, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Oct 18, 19 - Nov 02, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Oct 27, 19 - Nov 11, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Nov 08, 19 - Nov 23, 19"
            ],
            [
              "Island Peak Climb - 16 Days",
              "$ 1,949",
              "Nov 16, 19 - Dec 01, 19"
            ]
          ]}
          promoOffer={["Island Peak Climb – 16 Days", "$ 1,999USD"]}
          details={[
            "16 days",
            "6,189 meters (20,305 ft)",
            "Full board on trip",
            "Private Vehicle, Domestic Flight",
            "February, March, April, May, September, October, November",
            "Challenging",
            "2-10 per Group"
          ]}
          folderName="climbs"
          oldDate="1"
        />
      </div>
    );
  }
}
