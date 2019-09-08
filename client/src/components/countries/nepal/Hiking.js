import React, { Component } from "react";
import AllTrips from "../../common/AllTrips";

export default class Hiking extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <AllTrips
          imgSrc={require("../../../img/hiking-in-nepal.jpg")}
          imgAlt="Hiking in Nepal"
          heading="Hiking in Nepal"
          paragraph="Along with trekking, Nepal also provides some great places to Hike for a day or two. These hikes will give a small glimpse of what this country has to offer, and and might as well prepare you for other treks and climbing. Below is the list of hiking packages we provide."
          destinations={[
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2018/02/bhaleshwor-mahadev.jpg",
              "Chandragiri Hiking – 01 Day",
              "Chandragiri is a popular hill located at the South West of Kathmandu. Measuring 2,551 meters above sea-level, it lies 7 km from Thankot, on the outskirts of Kathmandu city. The temple of Bhaleshwor Mahadev atop the hill is a major tourist attraction.The historians suggest that King Prithvi Narayan of the Shah dynasty worshiped at the temple before attacking and conquering the Kathmandu valley.",
              "$ 75USD",
              "01 day",
              "Chandragiri-Hiking/",
              "hiking"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2018/02/dahachok.jpg",
              "Dahachok Hiking – 01 Day",
              "Dahachok is a small village located in the outskirts of Kathmandu. The village has a meager population of just over 4,000 inhabitants. The tiny hamlet is home to local culture, natural beauty and local cuisines.It lies 10 km west of Kathmandu city.",
              "$ 75USD",
              "01 day",
              "Dahachok-Hiking/",
              "hiking"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2018/02/dahachok-homestay.jpg",
              "Dahachok Hiking – 02 Days",
              "Dahachok is a small village located in the outskirts of Kathmandu. The village has a meager population of just over 4,000 inhabitants. The tiny hamlet is home to local culture, natural beauty and local cuisines.It lies 10 km west of Kathmandu city.",
              "$ 116USD",
              "02 day",
              "Dahachok-Hiking/",
              "hiking"
            ]
          ]}
        />
      </div>
    );
  }
}
