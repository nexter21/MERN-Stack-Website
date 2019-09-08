import React, { Component } from "react";
import AllTrips from "../../common/AllTrips";

export default class Climbing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <AllTrips
          imgSrc="https://highlandexpeditions.com/wp-content/uploads/2015/12/Trekking-banner-home-page-1920x779.jpg"
          imgAlt="Climbing in Nepal"
          heading="Climbing in Nepal"
          paragraph="Climbing is the elite adventure sport popular among climbing enthusiasts. With the advent of technology, climbing has been less harder; and anyone with previous trekking experience can climb a couple of small peaks.

Nepal Mountaineering Association has classified 33 peaks in Nepal as ‘the trekking peaks,’ ranging from 5,650 meter to 6,500 meters. Group A comprises of 15 peaks and Group B comprises of 18 peaks. Check the entire small peaks list.

If you wish to try something new or taste the amateur mountaineering experience, you can sign up for any of the small peak climbs in Nepal. Our certified Sherpa guide, a team of skilled porters, assistants and chefs, and carefully planned logistics can help you get to the top and back in one piece.

Do not mistake small peak climb for expeditions. The latter requires lot more time and money than climbing a small peak."
          destinations={[
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/escalada-island-peak-e1479186335869.jpg",
              "Island Peak Climb – 16 Days",
              "Sagarmatha National Park and Tengboche Monastery are the highlights of this trip. You will get to experience the Sherpa lifestyle, culture and meals along with climbing one of the most popular trekking peaks in Nepal..undefined.",
              "$ 1,999USD",
              "16 days",
              "Island-Peak-Climb/",
              "climbs"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/island-peak.jpg",
              "Island Peak Climb via EBC – 20 Days",
              "Island Peak at the altitude of 6,189 meters is one of the most popular trekking peaks in Nepal. Also known as Imja Tse, the peak lies close to Mount Everest in the Khumbu region. A mountainous area, you get a glimpse of almost every high peaks located at the eastern section of Nepal.Most climbers take on Island peak to prepare themselves for the big league, Eight-Thousander.",
              "$ 2,349USD",
              "20 days",
              "Island-Peak-Climb-via-EBC/",
              "climbs"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/island-peak.jpg",
              "Annapurna Circuit With Chulu East Climb - 22 Days",
              "Island Peak at the altitude of 6,189 meters is one of the most popular trekking peaks in Nepal. Also known as Imja Tse, the peak lies close to Mount Everest in the Khumbu region. A mountainous area, you get a glimpse of almost every high peaks located at the eastern section of Nepal.Most climbers take on Island peak to prepare themselves for the big league, Eight-Thousander.",
              "$ 2,975USD",
              "22 days",
              "Annapurna-Circuit-With-Chulu-East-Climb/",
              "climbs"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/10/Cumbre-de-Kyajo-ri.jpg",
              "Kyajo Ri Peak Climb – 16 Days",
              "Kyajo Ri is a small peak located in the Khumbu region of Nepal. It is surrounded by the counterparts, namely; Island Peak, Lobuche and Mera Peak. A technical peak, it requires a good crampon and ice-axing skills. The climb is a concoction of the mixed terrains, and will feel quite challenging when combined with the sheer altitude.",
              "$ 2,699USD",
              "16 days",
              "Kyajo-Ri-Peak-Climb/",
              "climbs"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/10/vista-desde-Lobuche-cumbre-east.jpg",
              "Lobuche Peak Climb – 22 Days",
              "Lobuche Peak or Lobuje is one of the highest trekking peaks in Nepal. It is known to have two distinct summits, Lobuche East (6,119 m) and Lobuche West. Most climbs are perfomed at the Lobuche East. In order to climb the Lobuche West, you would need an Expedition permit.",
              "$ 2,270USD",
              "22 days",
              "Lobuche-Peak-Climb/",
              "climbs"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/IMG_4731-e1479118700165.jpg",
              "Mera Peak Climb – 17 Days",
              "Mera Peak is the highest trekking peak in Nepal. Located at Hinku Valley, just beside the Khumbu region, the Mera peak climb offers excitement to both the amateur and expert climbers.A technical climb, it’s harder than many other small peaks in Nepal. The trek starts from Lukla and up to Khare.",
              "$ 2,399USD",
              "17 days",
              "Mera-Peak-Climb/",
              "climbs"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2017/01/Pisang-peak-closeup.jpg",
              "Pisang Peak Climb – 17 Days",
              "Pisang Peak is a popular short peak located in Manang valley at the mid-western region of Nepal. Surrounded by the great Annapurna, Machhapuchhre, Dhaulagiri, Langtang and Manaslu, the scenery adds to the charm of the trip.At 6,093 meters, the spectacular Pisang Peak offers a challenging climb for both the amateur and experts. With the concoction of rocky ridges and snow, you would require a fixed rope climbing for it.",
              "$ 1,970USD",
              "17 days",
              "Pisang-Peak-Climb/",
              "climbs"
            ]
          ]}
        />
      </div>
    );
  }
}
