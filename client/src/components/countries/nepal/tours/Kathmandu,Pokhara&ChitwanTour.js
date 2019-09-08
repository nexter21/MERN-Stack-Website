import React, { Component } from "react";
import OneDestination from "../../../common/OneDestination/OneDestination";

export default class KathmanduPokharaChitwanTour extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <OneDestination
          title="Kathmandu, Pokhara & Chitwan Tour – 8 Days"
          url="https://www.caravanoutdoors.com/wp-content/uploads/2016/08/kathmandu-durbar-square-1.jpg"
          para1=""
          para2=""
          para3=""
          itineraryes={[
            [
              ["Arrival in Kathmandu"],
              [
                "\nAt your arrival in Kathmandu, a member of our team will greet and receive you at the airport. You will be transferred to your hotel. Our representative will brief on your arrival about the trip. The rest of the day is yours. The evening we be spent enjoying complimentary local dinner one of the finest local diner with cultural program."
              ]
            ],
            [
              [
                "Sightseeing tour of Pashupatinath, Boudhanath & Patan Durbar Square"
              ],
              [
                "\nThe first day of the tour includes a visit to the Pashupatinath temple and Boudhanath, two most revered religious places in Kathmandu. Pashupatinath temple is dedicated to the Lord Shiva and is one of the most regarded Hindu shrines in the entire South Asia.The second visit will take you to the Buddhist stupa of Boudhanath. A fairly populated area, you will witness many local Tibetan inhabitants encircling the stupa. Then you’ll head to Patan Darbar Square at Lalitpur city. Alike Kathmandu city, Lalitpur was once inhabited by the Malla Kings, therefore, you will get to see similar architectural and cultural monuments both the city."
              ]
            ],
            [
              ["Drive to Chitwan and Sightseeing tour"],
              [
                "\nThe second day of the tour will take you to the perfect getaway, Chitwan, which lies at the Terai region of Nepal. Once reached, you will be escorted to the best resort or hotel beside the Rapti river. The evening will follow with the cultural dances and ethnic cuisines."
              ]
            ],
            [
              ["Elephant Safari/Village Tour at Chitwan"],
              [
                "\nA large expanse of forested area, you can catch a glimpse of every exotic South Asian animal. The early morning Elehpant ride will take you into the forest nestled in Chitwan National Park. A group escorted trip, you are less likely to catch a glimpse of the Royal Bengal Tiger, however, you might spot many other wild beasts. One-horned rhinoceros, bear, wild boar, deer, bison, crocodiles etc are common sights. The rest of the day can be spent exploring the ethnic Tharu villages and lifestyle."
              ]
            ],
            [
              ["Drive to Pokhara and Sightseeing"],
              [
                "\nYou will drive from Chitwan to Pokhara. The trip won’t take much time. You’ll reach Pokhara at noon, therefore, you’d have enough time to briefly explore the lakeside city and enjoy your evening."
              ]
            ],
            [
              ["Full Day Sightseeing & Activities at Pokhara"],
              [
                "\nA perfect getaway for both the Nepalese and the foreigners, Pokhara is popular for its sporting activities and outdoor recreations. You can choose from sightseeing, cycling, cave tours, boating at Phewa lake to different sort of adventure sports, such as; Paragliding, Para-hawking, Bungee jump and zip-line.Note: You must place bookings for adventure sports in advance."
              ]
            ],
            [
              ["Drive from Pokhara to Kathmandu"],
              [
                "\nA 6-7 hours ride will take you back to Kathmandu. Our representative will transfer you in a Hotel, followed by a humongous farewell dinner."
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
            "The tour begins from Kathmandu city. A day tour is enough to explore three most desired destinations inside Kathmandu, namely; Pashupatinath, Boudhanath & Patan Durbar Square.",
            "The second leg of the tour will take you to the South, Chitwan, a popular destination for its National park which boasts some of the rare animals; Royal Bengal Tiger and One-horned Rhino. A next day wildlife safari is enough to take you deep inside the forest and enjoy the local Tharu culture and cuisine.",
            "The third leg will take you to Pokhara and end with a brief city tour. You can boat around in the pristine Phewa lake and visit the local temple, along with many adventure sports; Paragliding, Bungee jump, Zip-line etc."
          ]}
          excludedListData={[
            "Arrival airport pick and drop",
            "Entire Transportation during the tour.",
            "Entire Meals ( B, L, D)",
            "Certified, Experienced & Language versed Tour Guide",
            "★★★ Standard Accommodation",
            "Heritage Sites/National park Entrance Permits"
          ]}
          departureDates={[
            ["KTM-Pokhara-Chitwan Tour", "$ 580", "Aug 27, 19 - Aug 30, 19"],
            ["KTM-Pokhara-Chitwan Tour", "$ 580", "Sep 02, 19 - Sep 05, 19"],
            ["KTM-Pokhara-Chitwan Tour", "$ 580", "Sep 16, 19 - Sep 20, 19"],
            ["KTM-Pokhara-Chitwan Tour", "$ 580", "Sep 23, 19 - Sep 26, 19"]
          ]}
          promoOffer={[
            "Kathmandu, Pokhara & Chitwan Tour – 8 Days",
            "$ 630USD"
          ]}
          details={[
            "8 days",
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
