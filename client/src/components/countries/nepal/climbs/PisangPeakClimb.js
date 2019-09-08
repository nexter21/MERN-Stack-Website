import React, { Component } from "react";
import OneDestination from "../../../common/OneDestination/OneDestination";

export default class PisangPeakClimb extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <OneDestination
          title="Pisang Peak Climb – 17 Days"
          oldDate="1"
          url="https://www.caravanoutdoors.com/wp-content/uploads/2017/01/Pisang-peak-closeup.jpg"
          para1="Pisang Peak is a popular short peak located in Manang valley at the mid-western region of Nepal. Surrounded by the great Annapurna, Machhapuchhre, Dhaulagiri, Langtang and Manaslu, the scenery adds to the charm of the trip.At 6,093 meters, the spectacular Pisang Peak offers a challenging climb for both the amateur and experts. With the concoction of rocky ridges and snow, you would require a fixed rope climbing for it."
          para2="Depending on the weather condition, the ascent may take around 8 to 12 hours from Upper Base Camp. The terrain is mixed and exposed in areas, and few sections may involve climbing through rocks.It is a tea-house and camp trip"
          para3=" Camping will be applicable from the base camp to the Upper base camp. Pisang is a small village comprising of handful of inhabitants. Most of the inhabitants belong to Tamangs, one of the hill tribes.
You should be equipped with your own gears and equipment, like; insulatedboots, Jumar, abseil device, climbing helmet, crampons, ice axe and alpine harness. Many of the equipments can be purchased or hired at Kathmandu."
          itineraryes={[
            [
              ["Arrival in Kathmandu"],
              [
                "\nAt your arrival in Kathmandu, a member of our team will greet and receive you at the airport. You will be transferred to your hotel. Our representative will brief on your arrival about the trip. The rest of the day is yours. The evening we be spent enjoying complimentary local dinner one of the finest local diner with cultural program."
              ]
            ],
            [
              ["Drive from Kathmandu to Chame via Besi Sahar"],
              [
                "\nAfter a herty breakfast, you will drive from Kathmandu towards Besisahar. From Besisahar towards Chame, the road can be rough, therefore, the ride could be bumpy.Chame is the administrative Headquarter of Manang district located beside the Marshyangdi river."
              ]
            ],
            [
              ["Trek to Pisang"],
              [
                "\nThe first day of the trek is easier. For the first half an hour, you can walk with esae, After crossing Bhratang, the path may become steeper and narrow. From here, the entire view of Annapurna range can be seen."
              ]
            ],
            [
              ["Trek to Upper Pisang"],
              [
                "\nToday, you can take a small hike to Upper Pisang, It will take around an hour. For the rest of the day you can wander around or explore the surrounding monastery. The climbinjg guide will brief you about the upcoming climb and organize group meeting."
              ]
            ],
            [
              ["Acclimatization Day"],
              [
                "\nYou can acclimatize today or take a shortest hike possible to keep yourself active."
              ]
            ],
            [
              ["Trek to Pisang Base Camp"],
              [
                "\nToday, you will head towards the Pisang Peak Base Camp. From Upper Pisang village, the path ascends through sparse wood to the Kharka. Here, the guide will helpo set up a base camp for overnight. It is in a flat alpine section along the well -worn trail."
              ]
            ],
            [
              ["Trek to Pisang Peak High Camp"],
              [
                "\nYou hike towards a shoulder on the south west ridge of Pisang Peak for 3 to 4 hours to reach high camp. Here, you can setup your overnight camp. There will likely be snowfall at high camp from the end of November till March."
              ]
            ],
            [
              ["Summit Day"],
              [
                "\nToday, you will approach for the summit. From the High Camp, the well defined ridge leads to the final snow slop which is quite steep and more technical to reach. The guide and the staff will fix the rope and lead you to the successful summit of the Pisang Peak. After a Successful summit, return back to Base camp or Upper Pisang."
              ]
            ],
            [
              ["Trek to Manang village"],
              [
                "\nFrom here, you will trek to Manang via Geru. The panoramic views of the mountain peaks, such as Annapurna, Pisang and others will definitely excite you. You can make a brief stop at Barge village for a quick lunch and explore the Barge monastery, the largest Buddhist monastery of Manang village."
              ]
            ],
            [
              ["Rest Day"],
              [
                "\nToday is the rest day. You can also choose to explore the Manang village or hike to Gangapurna Glacier Lake, which may take an hour of uphill hike."
              ]
            ],
            [
              ["Trek to Yak Kharka"],
              [
                "\nToday, you leave Manang and make your way towards Yak Kharka. The trail crosses a stream, climbs to a village of Tenki above Manang then continue through meadows where horses and yaks graze to reach yak Kharka. Overnight at Yak Kharka."
              ]
            ],
            [
              ["Trek to Thorong Phedi"],
              [
                "\nThorong Phedi is a small busy settlement catering to the needs of trekkers who must have to stay overnight before heading towards the Thorong La Pass. You can stay overnight at Thorong Phedi for the safe and sound sleep."
              ]
            ],
            [
              ["Trek to Muktinath via Thorong La Pass"],
              [
                "\nToday, it can be a tough day. You will have to cross the Thorong la Pass at 5,416 meters, one of the highest passes in Nepal. Early start is essential thus we would start our walking in the morning approx. of 4 to 4.30 depending on seasons and weather conditions. It may take about 4 to 5 hours to attempt the top, initial first hour is pretty tough as it is straight up hill till to high camp, then gradual walk onward, however, each minute is hard and memorable. Altitude can be a problem, so slow and continuous walking is required. From here, you can descend all the way down to Muktinath"
              ]
            ],
            [
              ["Trek to Jomsom via Kagbeni"],
              [
                "\nThe view of the Kaligandaki River can be mesmerizing. A short descend bring you to the Jharkot village which is one of the most typical thakali villages in the area. Further descend will bring you to the village of Kegbani where we will stop for lunch. It is a charming, beautiful old city and one of the principal gateways to Upper Mustang."
              ]
            ],
            [
              ["Drive to Pokhara"],
              [
                "\nYou can drive to Pokhara and spend rest of the day exploring the beautiful lakeside city."
              ]
            ],
            [
              ["Drive to Kathmandu"],
              [
                "\nYou can drive from Pokhara to Kathmandu. The ride may take about 6-7 hours,"
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
            "2 Nights at ★★★ hotel in Kathmandu.",
            "1 Nights at ★★★ hotel in Pokhara.",
            "Entire land commute during the trip",
            "Domestic flight fare, airport tax and domestic transfer.",
            "Standard Tea-house/ Lodge during the trek.",
            "(B,L,D) Meals during the trek.",
            "1 Climbing Guide (Licensed & First Aid Trained) and Porters",
            "Mountain climbing and other permit",
            "Tents",
            "Duffel  Bag",
            "Climbers’ Certificate (Issued by Government)",
            "Arrangement of Rescue/Medical Helicopter service; covered by your Insurance agency."
          ]}
          excludedListData={[
            "Meals other than during the trek and dinner in Kathmandu",
            "Mineral water and refreshments during the trek",
            "Travel insurance (Cover Helicopter evacuation and Trip Cancellation charges)",
            "Guide/Porter Tipping"
          ]}
          departureDates={[
            [
              "Pisang Peak Climbing-17 Days",
              "$ 1875",
              "Oct 10, 19 - Oct 26, 19"
            ],
            [
              "Pisang Peak Climbing-17 Days",
              "$ 1875",
              "Aug 24, 19 - Nov 09, 19"
            ],
            [
              "Pisang Peak Climbing-17 Days",
              "$ 1875",
              "Nov 10, 19 - Nov 26, 19"
            ]
          ]}
          promoOffer={["Pisang Peak Climb – 17 Days", "$ 1,970USD"]}
          details={[
            "17 days",
            "6,093 meters (19,990 ft)",
            "Full board on trip",
            "Private Vehicle, Domestic Flight",
            "February, March, April, May, September, October, November",
            "Challenging",
            "2-10 per Group"
          ]}
          folderName="climbs"
        />
      </div>
    );
  }
}
