import React, { Component } from "react";
import OneDestination from "../../../common/OneDestination/OneDestination";

export default class EverestRapidTrek extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <OneDestination
          title="Everest Rapid Trek – 10 Days"
          url="https://www.caravanoutdoors.com/wp-content/uploads/2016/07/P1100270-e1479117789117.jpg"
          para1="The trek to Everest is the eye-candy for most of the trekkers around the world. An opportunity to view some of the greatest mountains is offered by this trek, namely; Mount Everest, Lhotse, Ama Dablam and Makalu. The rapid trek ensures you get to the top and back at no time. It’s suitable for trekkers who have previous experience and are fit and agile."
          para2="The trek begins at Lukla, a small airport town in Khumbu. The trail ascends to Namche Bazaar through Phakding. Namche Bazaar is the highlight of the trek"
          para3=" A most populated Sherpa town is known for its open market, luxurious or budget lodges and ethnic lifestyle. Hiking around the place is most recommended. It ascends further to Tengboche, another highlight of the trek. Tengboche boasts the highest monastery on Earth. The monastery is over 100 years old and the popular Mani Rimdu festival is held every year to commemorate its legacy. Few other Sherpa villages you’ll come across are Pheriche and Lobuche. From here, the trail ascends towards Everest Base Camp through Gorakshep.A day tour is enough to see around the base camp and return to Gorakshep to prepare for the next day hike to the Kala Patthar. Kala Patthar is the only location above 5,000 meters which offers you a close glimpse of the Mount Everest."
          // review={[
          //   "everest-review",
          //   "Best memory for us with Caravan",
          //   "Kobuta from Thailand",
          //   "https://www.tripadvisor.com/ShowUserReviews-g293890-d10758852-r582347820-Caravan_Outdoors-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
          // ]}
          itineraryes={[
            [
              ["Fly to Lukla & Trek to Phakding"],
              [
                "\nLukla is the gateway to Everest Base Camp. After a scenic half an houyr flight to Lukla Airport, the journey will begin. The first day of the trek will be more like a warm up. It will take you to Phakding village, just above Lukla. You can spend the rest of the day enjoying the local sceneries."
              ]
            ],
            [
              ["Trek to Namche Bazaar"],
              [
                "\nThe trek will ascend up to the Dudh Koshi Valley. After a few hours of hike, you will arrive at entrance of Sagarmatha National Park in Monjo. The next and the final stop will be at Namche Bazaar. Namche is the highlight of the trek. The village bustling with people and lodges feels more like a city."
              ]
            ],
            [
              ["Trek to Tengboche"],
              [
                "\nYou will hike up to Tengboche village. First one hour of the trek is straight through the hillsidefollowed by a descent. It is known for its monastery. Tengboche monastery is the highest among many monasteries in Nepal. Mt. Ama Dablam will be seen closer from Tengboche. And if you arrive here during Autumn, you might get to witness the grand festival of Mani Rimdu."
              ]
            ],
            [
              ["Trek to Dingboche"],
              [
                "\nDingboche is a next village from Tengboche. Passing through the typical Sherpa villages like Pangboche and Shomare, you reach Dingboche in a matter of few hours."
              ]
            ],
            [
              ["Trek to Lobuche"],
              [
                "\nThere is a lot of vertical inclination even though the trail length does not clock more than 4.5 miles in itself. Lobuche is situated beneath the Lhotse Ridge."
              ]
            ],
            [
              ["Trek to Gorak Shep & Hike to EBC"],
              [
                "\nToday is the special day. You’re approaching the base camp, therefore, there are many anxieties and surprises. A tough trek through Gorakshep will take you to Everest Base Camp. The day will be the most challenging. You can spend some time exploring the iconic base camp and the surrounding areas, and return to Gorakshep for the night."
              ]
            ],
            [
              ["Early Morning hike to Kala Patthar & Back to Pangboche"],
              [
                "\nKala Patthar is the landmark of the Everest. You will start especially early. The reason behind leaving early is to reach Kala Patthar before sunrise. It provides the most wonderful sights of the surrounding along with the Mount Everest. It will take a couple of hours to reach Kala Patthar from Gorak Shep and couple more to reach the Pangboche."
              ]
            ],
            [
              ["Trek to Monjo\n"],
              [
                "The trail to Monjo is steep. You may encounter birch and rhododendron forest while coming down. Mount Everest, Kwangde, Tawache, Nuptse, Lhotse, Ama Dablam, Kantega and Thamserkhu are few of the moutnains visible from here. You can also observe several monasteries on your walking that represent the High land culture."
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
            ]
          ]}
          includedListData={[
            "Arrival airport pick and drop.",
            "Dinner in one of the finest diners in Kathmandu before and after the trek.",

            "Entire land commute during the trip",
            "Domestic flight fare, airport tax and domestic transfer.",
            "Standard Tea-house/ Lodge during the trek (*Attached Bathroom).",
            "A la Carte (B,L,D) Meals during the trek.",
            "1 Certified Guide (Licensed & First Aid Trained)/1 Porter (For two)",
            "Guide’s insurance, meals and other costs",
            "TIMS Card/ National Park entry fee/Other Permits",
            "All the Gov. and Local taxes as per applicable",
            "Trekking Map and Group medical kit box (Diamox and First Aid Medicine)",
            "Tea/Coffee p.cup basis",
            "Fresh fruits during the trek",
            "Trip Completion Certificate",
            "Arrangement of Rescue/Medical Helicopter service; covered by your Insurance agency."
          ]}
          excludedListData={[
            "Meals other than during the trek and before/after complimentary dinner",
            "Mineral water and refreshments during the trek",
            "Travel insurance (Cover Helicopter evacuation and Trip Cancellation charges)",
            "Guide/Porter Tipping"
          ]}
          departureDates={[
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Sep 12, 19 - Sep 21, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Sep 25, 19 - Oct 04, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Oct 05, 19 - Oct 14, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Oct 15, 19 - Oct 24, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Oct 28, 19 - Nov 07, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Nov 08, 19 - Nov 17, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Nov 15, 19 - Nov 24, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Nov 25, 19 - Dec 04, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Dec 10, 19 - Dec 19, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Dec 24, 19 - Jan 02, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Jan 05, 19 - Jan 14, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Jan 15, 19 - Jan 24, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Feb 03, 19 - Feb 12, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Feb 28, 19 - Mar 09, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Mar 02, 19 - Mar 11, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Mar 11, 19 - Mar 20, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Mar 25, 19 - Apr 03, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Apr 02, 19 - Apr 11, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Apr 15, 19 - Apr 24, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "Apr 24, 19 - May 03, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "May 05, 19 - May 14, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "May 14, 19 - May 23, 19"
            ],
            [
              "Everest Rapid Trek- 10 Days",
              "$ 1149",
              "May 27, 19 - Jun 05, 19"
            ],
            ["Everest Rapid Trek- 10 Days", "$ 1149", "Jun 04, 19 - Jun 13, 19"]
          ]}
          promoOffer={["Everest Rapid Trek – 10 Days", "$ 1,149USD"]}
          details={[
            "10 days",
            "5,643 meters (18,513 ft)",
            "Full board on trek",
            "Private Vehicle, Domestic Flight",
            "February, March, April, May, June, September, October, November",
            "Strenuous",
            "1-10 per Group"
          ]}
        />
      </div>
    );
  }
}
