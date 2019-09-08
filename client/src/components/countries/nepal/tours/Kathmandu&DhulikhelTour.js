import React, { Component } from "react";
import OneDestination from "../../../common/OneDestination/OneDestination";

export default class KathmanduDhulikhelTour extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <OneDestination
          title="Kathmandu & Dhulikhel Tour – 4 Days"
          url="https://www.caravanoutdoors.com/wp-content/uploads/2016/08/dhulikhel-view-from-bhati-danda.jpg"
          para1="Kathmandu may be the only place in the entire nation which is home to people from different regions of Nepal. A rich and vibrant city, you can find Hindu temples, palaces, Buddhist monasteries, Mosque, Church and Gurudwaras. The native tribes of the city, Newars, mostly comprise of Hindus, while, some practice Buddhism. You can find multitude of places which resemble ancient as well as contemporary cultures."
          para2=" This tour covers Kathmandu and the surrounding cities.Dhulikhel is a small hill-station located 30 km northeast of Kathmandu. It is rich in natural landscapes"
          para3=" Most tourists prefer visiting Dhulikhel to relax and have time free from the combustion of the city. The region is mostly Hindu. If you wish to explore the old Newari lifestyle, you can prefer visiting this place.Kathmandu city is a part of the larger Kathmandu valley, and it was inscribed in UNSECO Heritage Site in 2006. Dhulikhel is a popular hill-station and getaway for most of local and foreign tourists."
          itineraryes={[
            [
              ["Arrival in Kathmandu"],
              [
                "\nAt your arrival in Kathmandu, a member of our team will greet and receive you at the airport. You will be transferred to your hotel. Our representative will brief on your arrival about the trip. The rest of the day is yours. The evening we be spent enjoying complimentary local dinner one of the finest local diner with cultural program."
              ]
            ],
            [
              [
                "Sightseeing tour of Kathmandu and Lalitpur/ Transfer to Dhulikhel"
              ],
              [
                "\nThe first day of the tour includes a visit to the Pashupatinath temple and Boudhanath, two most revered religious places in Kathmandu. Pashupatinath temple is dedicated to the Lord Shiva and is one of the most regarded Hindu shrines in the entire South Asia. The second visit will take you to the Buddhist stupa of Boudhanath. A fairly populated area, you will witness many local Tibetan inhabitants encircling the stupa. Then you’ll head to Patan Darbar Square at Lalitpur city. Alike Kathmandu city, Lalitpur was once inhabited by the Malla Kings, therefore, you will get to see similar architectural and cultural monuments both the city. The first day tour ends at the Dhulikhel."
              ]
            ],
            [
              ["Sightseeing Tour of Dhulikhel / Transfer to Kathmandu"],
              [
                "\nThe second day of the tour will take you around the picturesque villages of Dhulikhel. A Newari settlement is very popular among the incoming tourists. After a brief tour of the places and lunch, you will be transferred back to Kathmandu city."
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
            "Arrival airport pick and drop",
            "Entire Transportation during the tour.",
            "Entire Meals ( B, L, D)",
            "Certified, Experienced & Language versed Tour Guide",
            "★★★ Standard Accommodation",
            "Heritage Sites/National park Entrance Permits"
          ]}
          excludedListData={[
            "Visa & Processing Fee",
            "International flight fares",
            "Evacuation Charges( In case Of Emergency)",
            "Visa fees/Air fare and Airport taxes",
            "Travel Insurance",
            "Bar bills"
          ]}
          departureDates={[
            ["Kathmandu & Dhulikhel Tour", "$ 420", "Sep 09, 19 - Sep 12, 19"],
            ["Kathmandu & Dhulikhel Tour", "$ 420", "Sep 16, 19 - Sep 19, 19"],
            ["Kathmandu & Dhulikhel Tour", "$ 420", "Oct 07, 19 - Oct 11, 19"]
          ]}
          promoOffer={["Kathmandu & Dhulikhel Tour – 4 Days", "$ 420USD"]}
          details={[
            "4 days",
            "Full board on Tour",
            "Transportation",
            "2-10 Persons",
            null,
            "None",
            "1-10 per Group"
          ]}
          folderName="tour"
        />
      </div>
    );
  }
}
