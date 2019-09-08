import React, { Component } from "react";
import OneDestination from "../../../common/OneDestination/OneDestination";

export default class MtCHOOYUEXPEDITION extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <OneDestination
          title="Mt CHO OYU EXPEDITION – 40 Days"
          url="https://www.caravanoutdoors.com/wp-content/uploads/2018/09/cho-oyu.jpg"
          para1=""
          para2=""
          para3=""
          itineraryes={[]}
          includedListData={[
            " Royalty of peak, peak registration",
            "Chinese visa fee for complete team members",
            "Chinese custom clearances at the Nepal/China border",
            "05 nights hotel accommodation in Katmandu with breakfast",
            "Private transport from Katmandu to and from Kodari border",
            "land cruiser jeep transport from the China Border to and from BC (base camp)",
            "Chinese truck to carry expedition loads to and from BC",
            " Full board accommodation en-route to/from BC",
            " Chinese Liaison officer & interpreter",
            " Head Climbing guide/Sardar to look after all the matters",
            " Experienced Cook & kitchen boys as per group size",
            "Professional & Experienced High Altitude Climbing Sherpa (One Sherpa between 2 clients)",
            "3 Meals per day at BC & ABC with hot drinks",
            "Best quality high altitude tents for the higher camps",
            " Imported High foods for higher camps above ABC (advance base camp)",
            "Best quality tent at BC and ABC either single or twin sharing",
            " All necessary kitchen equipments",
            " Dinning tent with gas heater at BC",
            " Comfortable toilet & shower tents at BC",
            " Yaks for BC-ABC-BC to carry loads",
            " Necessary climbing hardware gears with fixed ropes, snow bars etc",
            " EPI gas with burners to use above ABC for cooking purpose",
            " Oxygen with mask regulator set for medical purpose at BC/ABC",
            " Satellite phone for emergency purpose (personal call $ 4 per minute)",
            " Generator/Solar panel with accessories for recharging & power supply purpose at BC",
            " Storage & communication tents  Down jackets/sleeping bags for BC/ABC purpose",
            "Gamow/PAC bag at BC/ABC for medical purpose",
            "Insurance of all local team members",
            "All airport/hotel transfers.",
            "Celebration meal & pre-briefing."
          ]}
          excludedListData={[
            "Visa & Processing Fee",
            "International flight fares",
            "Meals other than during the trek and dinners in Kathmandu",
            "Mineral water and refreshments during the trek",
            "Personal gears and equipment",
            "Travel insurance (Cover Helicopter evacuation and Trip Cancellation charges)",
            "Guide/Porter Tipping"
          ]}
          departureDates={[
            [
              "Flexible for private expedition team",
              "$ 18,499",
              "Sep 02, 19 - Oct 12, 19"
            ],
            [
              "Mt. Cho You Expedition -40 Days",
              "$ 18,499",
              "Apr 03, 19 - May 11, 19"
            ],
            [
              "Mt. Cho You Expedition -40 Days",
              "$ 18,999",
              "Apr 04, 19 - May 12, 19"
            ],
            [
              "Mt. Cho You Expedition -40 Days",
              "$ 18,999",
              "Sep 04, 19 - Oct 14, 19"
            ]
          ]}
          promoOffer={["Mt CHO OYU EXPEDITION – 40 Days", "$ 18,500USD"]}
          details={[
            "5D",
            "Trekking, Climbing/Expedition",
            "Tea-house (Lodges), Camping",
            "★★★ Hotel ( Kathmandu)\nStandard Tea-House/Camping",
            "Private Vehicle, Domestic Flight",
            "Challenging",
            "1-10 per Group"
          ]}
          folderName="expedition"
          oldDate="1"
        />
      </div>
    );
  }
}
