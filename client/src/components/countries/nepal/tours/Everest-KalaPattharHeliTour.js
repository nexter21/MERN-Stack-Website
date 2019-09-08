import React, { Component } from "react";
import OneDestination from "../../../common/OneDestination/OneDestination";

export default class EverestKalaPattharHeliTour extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <OneDestination
          title="Everest-Kala Patthar Heli Tour"
          url="https://www.caravanoutdoors.com/wp-content/uploads/2016/10/everest-heli-tour.jpg"
          para1="Everest is serene destination, and probably one of the top choices for most people’s bucket-list. The sheer altitude of the mountain and the surrounding makes a trip to Everest region a great experience.The helicopter tour to Everest ensures you get there in a matter of few hours but days. For those who don’t wish to trek through the entire trail and take a quick trip, the Heli tour can be an easy experience."
          para2="The journey begins from the historical city, Kathmandu. You’ll be escorted to the airport in the early morning and embark on the helicopter ready to take off. The short flight leads through the northern sparse towards Solukhumbu"
          para3=" Before heading upwards, you’ll briefly land at Syangboche. A set of Oxygen system consisting of 4 liter cylinder of artificial Oxygen fitted with regulator and hi-tech Top out Mask will be provided. Once equipped, it will directly take you up to Kala Patthar (5,643 meters) and Everest Base Camp. A brief layover will give you enough time to enjoy the surrounding sights and take pictures. The next stop will made at Syangboche for a delicious breakfast at the Everest View Point Hotel. Afterwards, you’ll be brought back to Kathmandu and escorted back to your hotel.You will get to see almost every major peaks in the Eastern section of Nepal during the trip, including; Everest, Lhotse, Makalu and Ama Dablam. When you look down, you might even catch some trekkers walking through the trail up to the base camp."
          itineraryes={[]}
          includedListData={[
            "Entire Transportation during the tour.",
            "Entire Meals ( B, L, D)",
            "Certified, Experienced & Language versed Tour Guide",
            "★★★★ Standard Accommodation",
            "Heritage Sites/National park Entrance Permits",
            "Helicopter Charter, tax and airport transfer",
            "Permits",
            "Airport picks and drops."
          ]}
          excludedListData={[
            "Visa & Processing Fee",
            "International flight fares",
            "Evacuation Charges( In case Of Emergency)",
            "Visa fees/Air fare and Airport taxes",
            "Travel Insurance",
            "Bar bills"
          ]}
          departureDates={[]}
          promoOffer={["Everest-Kala Patthar Heli Tour", "$ 2,400USD"]}
          details={[
            " 4-5 hours",
            "Full board on Tour",
            "Transportation",
            "Minimum 2 people",
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
