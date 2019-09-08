import React, { Component } from "react";
import OneDestination from "../../common/OneDestination/OneDestination";

export default class BhutanOverviewTour extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <OneDestination
          title="Bhutan Overview Tour – 8 Days"
          url="https://www.caravanoutdoors.com/wp-content/uploads/2016/09/Rinpung_Dzong_Paro.jpg"
          para1="Bhutan is popularly known as the land of Thunder Dragon worldwide for its symbolic representation of mythical creature -Dragon. Also known as The Last Shangrila, it is a discreet and smaller nation located deep inside the Himalaya. It is also one of the few nations in the world to have preserved the practice of monarchy, and boasts rich Buddhist architecture, pristine lakes, scenic forested valleys and admirable lifestyle.The tour of Bhutan primarily focuses on bringing out the best of geographical and cultural elements of the nation."
          para2=" Paro, Punakha, Thimpu and Gangtey are the major tourist getaways; these places are rich in architectural relics, ethnic lifestyle, authentic diners and scenic destinations. Essentially a nation with 90% of the people engaged in agriculture, Bhutan is predominantly Buddhist, practicing the tantric form of Mahayana Buddhism.This trip facilitates touring and trekking opportunities"
          para3=" You can drive around most of the destinations, and choose to trek to Tiger’s Nest –atop the tall rock. The tallest Gangkar Puensum peak, Jigme Dorje National Park and Haa valley are the landmarks and the must visit places in Bhutan.Masked dances and dance dramas are common traditional features at festivals, usually accompanied by traditional music. If you are lucky, you may get to witness the iconic Chaam dance, where the performer dons a hugemask depicting the God and dance in the traditional music."
          itineraryes={[
            [
              ["Fly to Paro"],
              [
                "\nYou will land at the only airport in Bhutan, Paro International Airport. The limited runway and petite structure makes it a fun ride. Paro retains its bucolic nature in spite of the existence of modern developments in the region. On arrival, your visa is processed at the airport.From here, you’ll drive towards the capital city, Thimphu, in an hour long journey.You can spend the evening roaming around the city and admiring its tidiness. Thimpu is a colorful place. Beautiful residences, markets, town square and monasteries dominate the local landscape.\nDinner and Overnight stay at the Hotel Thimphu.\n"
              ]
            ],
            [
              ["Thimpu – Hike to Cheri Monastery"],
              [
                "\nAfter breakfast, you will drive about 30 minutes towards the Cheri Monastery, followed by a quick hike to the top. The walk up to the Monastery is through the forest filled with Rhododendron flower trees which will be in full bloom during April. You might even witness Buddhist monks meditating in these forests. The meditation may last for 3 to 4 months. The peaceful and serene surrounding can be quite an overwhelming experience.The view from Cheri Monastery is breathtaking. After descending, you can drive back to the town for lunch, or, you can choose to have a pre-packed lunch (Pre inform your guide for the packed lunch). In the noon, you will have ample time to roam the streets of Thimphu City, and absorb the local lifestyle.Next, we will visit the weekend market where the locals come to do their weekly shopping. This will be one of the highlights of the trip. Later, you can make a stop at the Centenary Park where the walking Buddha resides; the entire statue was built by Thai workers who specifically came to Bhutan to build the statue. It stands at 45 feet tall.The next visit is at Kuensel Phodrang, where the Buddha Dordena resides, it is said to be one of the largest statue of Buddha in the world, standing at 169 ft or 51.5 meters. In the evening, you will visit Trashichhodzong, the beautiful medieval fortress /monastery is Bhutan’s administrative and religious centre which houses most of the Government’s office and the King’s Throne Room.\nDinner and Overnight stay at the Hotel Thimphu.\n"
              ]
            ],
            [
              ["Thimpu – Punakha – Gangtey (135 km)"],
              [
                "\nToday, you move to the next destination, the Punakha valley, also known as the winter capital of Bhutan. The drive ascends gradually to the Dochu La Pass.The Dochula Monastery also known as the Druk Wangyal Khangzang Chortens is a tribute to the service and leadership of His Majesty the king. The design inspired by the Queen is a unique cluster of 108 Chortens seen from all directions. After descending from the monastery, you continue towards Gangtey.You make your way towards Phobjikha Valley at Gangtey. It’s a wide glacial valley with a central stream meandering through the open grassland and thickets of dwarf bamboo. The farming and vegetation dominates the place.\nDinner and Overnight at the hotel, Phobjikha valley.\n"
              ]
            ],
            [
              ["Gangtey Sightseeing & Short Hike"],
              [
                "\nToday is the sightseeing day around Gangtey. As an option, you can also choose to trek the Gangtey Nature Trail. The nature trail follows the small hilltop overlooking Gangtey Goemba and the flower meadows of Simchubara Village. After passing a Chorten and Khewa Lhakhang, the trail ends at the Tabiding football ground.Gangtey Goempa, perched on a small hill arising from the valley floor, is the only Nyingmapa monastery on the western side of the Black Mountain Gangtey valley, and is also the biggest Nyingmapa monastery in Bhutan. It is surrounded by a large village inhabited mainly by the families of the 140 Gomchens who take care of the Monastery. Gangtey was founded by Pema Trinley, the Grandson of Pema Lingpa, a famous Nyingmapa saint of Bhutan.The tour will end at the Black Necked Crane Information Centre, situated on the edge of the forest and wetland along the main road of Phobjikha valley. It has an observation deck equipped with high power telescope and spotting scopes for catching the best view of the cranes.\nDinner and Overnight stay at the hotel, Phobjikha valley.\n"
              ]
            ],
            [
              ["Gangtey – Punakha (78 km)"],
              [
                "\nYou will drive back from Gantey to Punakha. Upon arrival, you can visit the historic Punakha Dzong It was built by Shabdrung Nawang in 1637 and serves as the winter residence of the head abbot, Je Khenpo and headquarters of the district administration.After the lunch, you can explore the Punakha countryside. The countryside is mostly dominated by the paddy fields to the Pana Village.\nDinner and Overnight stay at the Hotel,Punakha.\n"
              ]
            ],
            [
              ["Punakha – Paro (143 km)"],
              [
                "\nYou will drive back from Punakha to Paro. After checking in to your hotel, you can either spend the evening at the hotel or visit National Museum, located above the Paro Dzong and housed in the 17th century watchtower if time permits.The national museum is quite popular for its historical artifacts. In the evening, you will have some spare time to visit the high street and buy souvenirs.\nDinner and Overnight stay at the hotel, Paro\n"
              ]
            ],
            [
              ["Paro – Hike Tiger’s Nest"],
              [
                "\nAfter breakfast, you will drive towards the Ramthanka base for a hike to view one of Bhutan’s most revered pilgrimage sites of the Buddhist world, the Taktshang Lhakhang, popularly known as the “Tiger’s Nest” Monastery. The trek offers spectacular views of this sacred monastery perched precariously on a sheer rock face 3,000 ft above the valley floor.Legend has it that Guru Rimpoche, father of Bhutan’s stream of Mahayana Buddhism arrived in the Paro valley more than a millennium ago on a back of a tigress. He meditated for 3 months in a cave which was converted into this monastery.During your return from the monastery, you can stop at the Cafeteria for lunch. En route, we can drive through the ruins of Drukgyel Dzong. The Dzong was built in 1649 by Shabdrung Ngawang Namgyal to commemorate his victory over the Tibetan and Mongolian invaders.\nDinner and Overnight stay at the Hotel, Paro\n"
              ]
            ],
            [
              ["Departure"],
              [
                "\nIn the morning, our representatives will escort you to Paro International Airport."
              ]
            ]
          ]}
          includedListData={[
            "Entire land transportation during the tour.",
            "Flight from Kathmandu – Paro – Kathmandu",
            "Bhutan Permit/Visa",
            "Entire Meals ( B, L, D)",
            "Certified, Experienced & Language versed Tour Guide",
            "Tourist Standard Hotels in Bhutan",
            "Heritage Sites/National park Entrance Permits",
            "All the Gov. and Local taxes as per applicable"
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
          promoOffer={["Bhutan Overview Tour – 8 Days", "$ 1,840USD"]}
          details={[
            "8 days",
            "Full board on Tour",
            "Private Vehicle & Trans-Himalaya Flight",
            null,
            null,
            "None",
            "1-10 per Group"
          ]}
          folderName="bhutan"
        />
      </div>
    );
  }
}
