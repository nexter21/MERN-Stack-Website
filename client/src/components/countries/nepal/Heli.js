import React, { Component } from "react";
import AllTrips from "../../common/AllTrips";

export default class Heli extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <AllTrips
          imgSrc={
            "https://www.explorehimalaya.com/wp-content/uploads/heli-tours-in-nepal.jpg"
          }
          imgAlt="Heli Tour in Nepal"
          heading="Heli Tour in Nepal"
          paragraph="Due to wide range of mountains and snow capped hills, Nepal is one of the best places in the world to take a Helicopter Tour. Below is a list of various packages we provide to various destinations in Nepal"
          destinations={[
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/helicoptero-a-everest-e1479118729481.jpg",
              "Everest Heli Luxury Trek – 6 Days",
              "Everest Heli Trek is an elite adventure designed for the trekking enthusiasts who wish to walk into Everest and fly out in style! It’s a perfect trip those with time-crunch, yet wish to enjoy trekking in the Everest. It offers a unique holidaying experience in Nepal!The trek will begin from Lukla and will ascend up to the Syangboche village, as usual. From here, a chartered helicopter service will take you on a tour of Everest region and take you back to Kathmandu.You’ll get to see some of the most mesmerizing Himalaya peak en route, namely; Ama Dablam, Thamserku, Kantega, Lhotse and Nuptse.",
              "$ 3,199USD",
              "06 days",
              "Everest-Heli-Luxury-Trek/",
              "heli"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/10/everest-heli-tour.jpg",
              "Everest-Kala Patthar Heli Tour",
              "Everest is serene destination, and probably one of the top choices for most people’s bucket-list. The sheer altitude of the mountain and the surrounding makes a trip to Everest region a great experience.The helicopter tour to Everest ensures you get there in a matter of few hours but days. For those who don’t wish to trek through the entire trail and take a quick trip, the Heli tour can be an easy experience.",
              "$ 2,400USD",
              " 4-5 hours",
              "Everest-Kala-Patthar-Heli-Tou/",
              "heli"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2018/03/ktm-aerial.jpg",
              "Kathmandu Heli Sightseeing Tour – 01 Day",
              "Kathmandu is the historical city of Nepal. A vibrant and culturally rich city, Kathmandu boasts the most amounts of temples, palaces and historical relics in the country, therefore, every tourist visit the city during their trip to Nepal.A helicopter day tour of Kathmandu city is a brief trip and can give an overview of the city’s history and lifestyle. More days are required to explore the nooks and corner of this historic place, however, a day tour is enough to summarize everything there is to know about it.",
              "$ 1,100USD",
              "1-2 hours",
              "Kathmandu-Heli-Sightseeing-Tour/",
              "heli"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/langtang-lirung-e1479118767672.jpg",
              "Langtang Heli Tour – 01 Day",
              "Langtang valley is located in a close proximity to Tibet in the north. A discreet region just 19 km north of Kathmandu, it offers one of the best tour experiences in Nepal.Langtang Lirung (7,227 meters) and Yala Peak (5,520 meters) dominates the scenery. The entire trail lies inside Langtang National Park and the meager population of the region tends to cater the tourists themselves.",
              "$ 1,830USD",
              " 4-5 hours",
              "Langtang-Heli-Tour/",
              "heli"
            ]
          ]}
        />
      </div>
    );
  }
}
