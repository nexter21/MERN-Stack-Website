import React, { Component } from "react";
import AllTrips from "../../common/AllTrips";

export default class Expedition extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <AllTrips
          imgSrc={require("../../../img/expedition/AmaDablamExpedition–31Days.jpg")}
          imgAlt="Expedition in Nepal"
          heading="Expedition in Nepal"
          paragraph="
It’s a wider known fact that Nepal hosts the world’s highest mountain Mount Everest with the height of 8,848 m. It’s also interesting that more than 35 percent of its total land surface is covered with mountain region. Nepal Hosts 8 Mountain Peaks over 8,000 meters. The mountains are: Mount Everest (8,848 m),  Kangchenjunga (8,586 m),  Lhotse (8,516 m),  Makalu (8,462 m),  Cho Oyu (8,201 m),  Dhaulagiri(8,167 m),  Manaslu (8,156 m),  Annapurna(8,091 m)
Nepal also flaunts more than 1300 peak higher than 6000 m. We have made a list of mountain expedition you can explore to make  best experience of Nepalese Mountains and its stunning beauty."
          destinations={[
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2018/02/ama-dablam.jpg",
              "Ama Dablam Expedition – 31 Days",
              "",
              "$ 6,499USD",
              "5D",
              "Ama-Dablam-Expedition/",
              "expedition"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2018/09/baruntse.jpg",
              "Mt Baruntse Expedition – 30 Days",
              "",
              "$ 7,799USD",
              "5D",
              "Mt-Baruntse-Expedition/",
              "expedition"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2018/09/cho-oyu.jpg",
              "Mt CHO OYU EXPEDITION – 40 Days",
              "",
              "$ 18,500USD",
              "5D",
              "Mt-CHO-OYU-EXPEDITION/",
              "expedition"
            ],
            [
              "",
              "Himlung Expedition – 32 Days",
              "",
              "$ 7,800USD",
              "5D",
              "Himlung-Expedition/",
              "expedition"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2018/09/3031485242_bd94bda944_o.jpg",
              "Mt. EVEREST EXPEDITION – 65 Days",
              "",
              "$ 34,999USD",
              undefined,
              "Mt.-EVEREST-EXPEDITION/",
              "expedition"
            ]
          ]}
        />
      </div>
    );
  }
}
