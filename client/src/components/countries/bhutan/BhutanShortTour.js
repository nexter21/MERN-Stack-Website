import React, { Component } from "react";
import OneDestination from "../../common/OneDestination/OneDestination";

export default class BhutanShortTour extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <OneDestination
          title="Bhutan Short Tour – 5 Days"
          url="https://www.caravanoutdoors.com/wp-content/uploads/2016/09/baile-de-mascaras-de-bhutan.jpg"
          para1="Bhutan is popularly known as the Land of Thunder Dragon. Also known as The Last Shangrila, it is a discreet nation located deep inside the Himalayas of South Asia. It is also one of the few nations in the world to have preserved the practice of monarchy. It boasts rich Buddhist architecture, pristine lakes, scenic forested valleys and admirable lifestyle."
          para2="The short tour of Bhutan primarily focuses on bringing out the best of both the geographical and cultural riches of the nation. Paro, Punakha and Thimpu are the major tourist destinations in Bhutan. These places are rich in architectural relics, ethnic lifestyle, authentic diners and scenic destinations"
          para3="This trip facilitates briefly touring the three major cities of Bhutan. You will drive around most of the destinations. Masked dances and dance dramas are common traditional features at festivals, usually accompanied by traditional music. If you are lucky, you may get to witness the iconic Chaam dance, where the performer dons a hugemask depicting the God and dance in the traditional music."
          itineraryes={[
            [
              ["Drive from Paro to Thimpu"],
              [
                "\nUpon arrival you would be escorted to the capital of Bhutan, Thimpu. The drive may last around 1.5 hours. En route, you’ll pass by the Tamchog Lhakang iron bridge.The full day sightseeing includes visiting the Memorial Chorten, a beautiful Stupa built in the memory of Bhutan’s 3rd King. After the Memorial Chorte, you can visit the Trashichhodzong, a fortress like monastery which also acts as the Secretariat building, King’s Throne room and the governmental office,After the lunch, you can take a scenic drive up to Buddha Point in the Kuenselphodrang Nature Park to see the 169-foot-tall bronze statue of the seated Buddha Dordenma, one of the largest sitting Buddha statues in the world. The night will be spent at a hotel in Thimphu\nDinner and Overnight stay at the Hotel Thimphu.\n"
              ]
            ],
            [
              ["Drive from Thimpu to Punakha"],
              [
                "\nOn the way to Punakha, you stop at Dochula Pass to have a coffee and witness the Grand 108 Stupas. Once reached at Punakha, you can visit the Divine Madman’s Monastery-Chhimi Lhakhang, famously known for its fertility shrine, where one can receive a special fertility blessing.After the lunch, you can visit the Punakha Dzong, a fortress built by Zhabdrung Ngawang Namgyal to serve as the religious and administrative seat of the region in 1637. It is situated on the island of the Pho Chu and Mo chu rivers. In the evening, you can visit the local markets in Punakha .\nDinner and Overnight at the hotel in Punakha.\n"
              ]
            ],
            [
              ["Drive from Punakha to Thimpu"],
              [
                "\nAfter reaching Thimpu, the sightseeing beings with a visit to the National Folk Heritage Museum, dedicated to preserving Bhutanese folk arts. The renovated 19th century estate is filled with traditional art, cultural relics and artifacts.Afterwards, you can visit the National Library which has a vast collection of ancient Buddhist texts, manuscripts, modern academic books and printing blocks for prayer flags and the Thimpu Painting School, famous for traditional thangkha paintings.We then take a drive to Motithang Takin Preserve, a home to one of the strangest looking creatures on earth and also Bhutan’s national animal taken care of by royal decree.\nDinner and Overnight stay at the hotel in Thimpu.\n"
              ]
            ],
            [
              ["Drive from Thimpu to Paro"],
              [
                "\nThe day will follow with an early morning drive to Paro and hike to the ParoTaktsang (Tiger’s Nest). Tiger’s Nest is the landmark of Bhutan. A monastery situated at the rocky cliff hanging atop the hill. The hike may last 1.5 hours. You can take a brief stop for refreshment at the View Point Cafeteria, and ascend up further.On the way, you can visit Kichu temple, one of the 108 temples built in the 7th century by the Tibetan King Songsten Gampo. You can take a stroll through Paro town and the market in the evening.\nDinner and Overnight stay at the Hotel in Paro\n"
              ]
            ],
            [["Depart Paro"], [""]]
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
          departureDates={[
            ["Bhutan Short Tour - 5 Days", "$ 1,250", "Feb 18, 19 - Feb 18, 19"]
          ]}
          promoOffer={["Bhutan Short Tour – 5 Days", "$ 1,290USD"]}
          details={[
            "5 days",
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
