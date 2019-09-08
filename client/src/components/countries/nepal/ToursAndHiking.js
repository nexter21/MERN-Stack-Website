import React, { Component } from "react";
import AllTrips from "../../common/AllTrips";

export default class ToursAndHiking extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <AllTrips
          imgSrc="https://www.adventureclubtrek.com/uploads/images/nepal-explore-tour-15days.jpg"
          imgAlt="Tours And Hiking in Nepal"
          heading="Tours And Hiking in Nepal"
          paragraph="About the Overland tours. The various regions of Nepal have different settings. Terai is mostly plain and covered with evergreen forests and wild animals. It’s mostly inhabited by the Maithali and Bhojpuris, and the culture and lifestyle tend to remain more or less similar. Hills comprise of uneven landscapes and variety of cultures. The culture and lifestyle may differ every 30 km. Brahmin, Chhetris, Newars, Muslims, Rautes, Tamangs and Gurungs are few hilly tribes. Himalaya inhabits the entire mountain ranges of Nepal, however, the population is scarce. Sherpa, Managi, Tibetans, Lepchas are few of the mountain tribes.

The greater biodiversity and geographical varieties offers a great opportunity of overland tours in Nepal. You can choose to tour the cities or travel South for touring the wildlife. There are countless places to visit and every place may offer a unique taste. Our tours may vary from one day to multiple day tours. Every trip is led by certified and language-versed guides. Wildlife Safari in Chitwan, Rafting and the city tour of Kathmandu are few of the popular overland tours in Nepal."
          destinations={[
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/one-horned-rhino-chitwan-e1479186572470.jpg",
              "Annapurna Base Camp Trek+Chitwan Tour – 13 Days",
              "Annapurna is one of the richest cultural and geographical regions in Nepal. Annapurna Base Camp, located at the foot of Annapurna I, boasts ethnic lifestyle, comfortable tea-houses and magnificent sceneries. Annapurna I is the 10th highest mountain in the world.Chitwan National Park is a UNESCO World Heritage Site located in Southern Nepal.",
              "$ 915USD",
              "13 days",
              "Annapurna-Base-Camp-Trek+Chitwan-Tour/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/07/P1100270-e1479117789117.jpg",
              "Everest Base Camp Trek+Chitwan Tour  – 17 Days",
              "The trek to Everest is the eye-candy for most of the trekkers around the world. An opportunity to view some of the greatest mountains on Earth is offered by this trek. Mount Everest, Lhotse, Ama Dablam and Makalu are few of the great mountains you will see on this trek. The 14 Days Everest trekking assures you complete fun and adventure.",
              "$ 1,280USD",
              "17 days",
              "Everest-Base-Camp-Trek+Chitwan-Tour-/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/tourists-enjoying-at-lakeside-pokhara-e1479118236747.jpg",
              "Honeymoon Tour in Nepal – 9 Days",
              "Nepal is an exotic destination in South Asia. The mountain clad nation offers unique destinations for holidaying. If you are thinking about honeymooning or a romantic getaway, Nepal can be one of the finest destinations in the world.The honeymoon tour takes you for a ride through Kathmandu, Pokhara and Chitwan; along with a scenic mountain flight towards the Everest!The tour ends at Kathmandu.",
              "$ 890USD",
              "9 days",
              "Honeymoon-Tour-in-Nepal/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/Plaza-durbar-de-Patan-junto-con-Mangal-Bazar.jpg",
              "Kathmandu –  Everest Tour – 6 Days",
              "Kathmandu is the capital city of Nepal. A vibrant and historically rich city, Kathmandu boasts the most amounts of temples, palaces and historical relics in the country, therefore, every tourist visit the city during their trip to Nepal.The tour of Kathmandu city offers an overview on the city’s history, culture and lifestyle. The history of the city goes back millennia.",
              "$ 699USD",
              "6 days",
              "Kathmandu/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/10/everest-heli-tour.jpg",
              "Everest-Kala Patthar Heli Tour",
              "Everest is serene destination, and probably one of the top choices for most people’s bucket-list. The sheer altitude of the mountain and the surrounding makes a trip to Everest region a great experience.The helicopter tour to Everest ensures you get there in a matter of few hours but days. For those who don’t wish to trek through the entire trail and take a quick trip, the Heli tour can be an easy experience.",
              "$ 2,400USD",
              " 4-5 hours",
              "Everest-Kala-Patthar-Heli-Tou/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/dhulikhel-view-from-bhati-danda.jpg",
              "Kathmandu & Dhulikhel Tour – 4 Days",
              "Kathmandu may be the only place in the entire nation which is home to people from different regions of Nepal. A rich and vibrant city, you can find Hindu temples, palaces, Buddhist monasteries, Mosque, Church and Gurudwaras. The native tribes of the city, Newars, mostly comprise of Hindus, while, some practice Buddhism. You can find multitude of places which resemble ancient as well as contemporary cultures.",
              "$ 420USD",
              "4 days",
              "Kathmandu-&-Dhulikhel-Tour/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/Five-storeyed-temple-at-Bhaktapur-e1479118173937.jpg",
              "Kathmandu Day Tour",
              "Kathmandu is the capital city of Nepal. A vibrant and historically rich city, Kathmandu boasts the most amounts of temples, palaces and historical relics in the country, therefore, every tourist religiously visit the city during their trip to Nepal.A day tour of Kathmandu city is a brief trip and can give an overview of the city’s history and lifestyle. More days are required to explore the nooks and corner of this historic place, however, a day tour is enough to summarize everything there is to know about it.",
              "$ 119USD",
              "1 Day",
              "Kathmandu-Day-Tou/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/langtang-lirung-e1479118767672.jpg",
              "Langtang Heli Tour – 01 Day",
              "Langtang valley is located in a close proximity to Tibet in the north. A discreet region just 19 km north of Kathmandu, it offers one of the best tour experiences in Nepal.Langtang Lirung (7,227 meters) and Yala Peak (5,520 meters) dominates the scenery. The entire trail lies inside Langtang National Park and the meager population of the region tends to cater the tourists themselves.",
              "$ 1,830USD",
              " 4-5 hours",
              "Langtang-Heli-Tour/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/side-view-of-potala-palace.jpg",
              "Lhasa Overview Tour – 7 Days",
              "Lhasa, also known as the Forbidden City, is the center of Tibet. A former place of Dalai Lama and the highest official seat was once barred from the foreigners. Today, it is a popular tourist getaway in the entire Tibet. Situated above 3,000 meters, Lhasa and the surrounding places are entirely semi-arid.",
              "$ 1,880USD",
              "7 days",
              "Lhasa-Overview-Tour/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/Tibet-overland-e1479118939448.jpg",
              "Tibet Overview Tour – 08 Days",
              "Tibet or Tibet Autonomous Region of China is located on the Tibetan plateau. It’s is also known as the Roof of the World because of its geographic proximity. It is the highest region in the world with an average elevation of 4,900 meters.The desert like landscape and harsh weather condition makes Tibet mostly inhabitable; however, the local tribesmen have survived for millenniums in the same condition, therefore, giving birth to their unique culture, lifestyle and art.",
              "$ 1299USD",
              "8 days",
              "Tibet-Overview-Tour/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/kathmandu-durbar-square-1.jpg",
              "Kathmandu, Pokhara & Chitwan Tour – 8 Days",
              "",
              "$ 630USD",
              "8 days",
              "Kathmandu,-Pokhara-&-Chitwan-Tour/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/riding-on-elephants-back-e1479118115269.jpg",
              "Chitwan Wildlife Tour – 4 Days",
              "Chitwan National Park is a UNESCO World Heritage Site located in Southern Nepal. It is the first national park of Nepal, established in 1973, and also one of the most popular destinations for Eco-tourists and wildlife enthusiasts. It is home to the most endangered species of animal, Royal Bengal tiger, and protected species of One-horned rhinos.The Subtropical forest of Chitwan National Park offers a reliable habitat for variety of flora and fauna.",
              "$ 240USD",
              "4 days",
              "Chitwan-Wildlife-Tour/",
              "tour"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2018/03/ktm-aerial.jpg",
              "Kathmandu Heli Sightseeing Tour – 01 Day",
              "Kathmandu is the historical city of Nepal. A vibrant and culturally rich city, Kathmandu boasts the most amounts of temples, palaces and historical relics in the country, therefore, every tourist visit the city during their trip to Nepal.A helicopter day tour of Kathmandu city is a brief trip and can give an overview of the city’s history and lifestyle. More days are required to explore the nooks and corner of this historic place, however, a day tour is enough to summarize everything there is to know about it.",
              "$ 1,100USD",
              "1-2 hours",
              "Kathmandu-Heli-Sightseeing-Tour/",
              "tour"
            ]
          ]}
        />
      </div>
    );
  }
}
