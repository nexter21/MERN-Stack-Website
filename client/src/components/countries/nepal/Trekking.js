import React, { Component } from "react";
import AllTrips from "../../common/AllTrips";

export default class Trekking extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <AllTrips
          imgSrc="http://www.trekkingpartners.com/resources/images/blog/top-treks/manaslu-circuit-trek-by-alex-treadway.jpg"
          imgAlt="Trekking in Nepal"
          heading="Trekking in Nepal"
          paragraph="Nepal is known as the trekkers’ haven. Everest Base Camp &
              Annapurna Circuit are rated among the Top Ten Trek Trails in the
              World. The mountains and hills are the USPs of Nepal. They cover
              more than 60% of the country’s landmass, hence offering more
              options for the trekking. The uneven terrains and mountainous
              landscape offers some unique trails. Everest, Annapurna and
              Manaslu comprise of high altitude trekking, whereas. Dolpo and
              Mustang regions are “Rain-shadow” areas which are suitable for
              monsoon trekking due to their geographical alienation. The treks
              can last from few days to a month. Ghorepani-Poon Hill is one of
              the shortest treks, whereas, Makalu Base Camp and Annapurna
              Circuit are the longest treks, in Nepal. We organize full-board
              trek activities in almost every region for travelers of any age or
              preference. You can choose to go solo, couple, family or in a
              larger group; and spend time at tea-houses or camps as well."
          destinations={[
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/annapurna-I-visto-en-el-fondo.jpg",
              "Annapurna Base Camp(Abc) Short Trek – 6 Days",
              "",
              "$  US $ 695 USD",
              "05 days",
              "Annapurna-Base-Camp-Customized-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/annapurna-I-visto-en-el-fondo.jpg",
              "Annapurna Base Camp(Abc) Budget Trek – 11 Days",
              "Annapurna is one of the richest cultural and geographical regions in Nepal. Annapurna Base Camp, located at the foot of Annapurna I, boasts ethnic lifestyle, comfortable tea-houses and magnificent scenery. Annapurna I is the 10th highest mountain in the world.The trek begins from Nayapul, at the outskirts of Pokhara.",
              "$ 569USD",
              "11 days",
              "Annapurna-Base-Camp-Budget-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/Machhapuchhre-en-la-esquina-derecha.jpg",
              "Annapurna Base Camp(Abc) Trek – 11 Days",
              "Annapurna is one of the richest cultural and geographical regions in Nepal. Annapurna Base Camp, located at the foot of Annapurna I, boasts ethnic lifestyle, comfortable tea-houses and magnificent scenery. Annapurna I is the 10th highest mountain in the world.The trek begins from Nayapul, at the outskirts of Pokhara.",
              "$ 849USD",
              "11 days",
              "Annapurna-Base-Camp-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/one-horned-rhino-chitwan-e1479186572470.jpg",
              "Annapurna Base Camp Trek+Chitwan Tour – 13 Days",
              "Annapurna is one of the richest cultural and geographical regions in Nepal. Annapurna Base Camp, located at the foot of Annapurna I, boasts ethnic lifestyle, comfortable tea-houses and magnificent sceneries. Annapurna I is the 10th highest mountain in the world.Chitwan National Park is a UNESCO World Heritage Site located in Southern Nepal.",
              "$ 915USD",
              "13 days",
              "Annapurna-Base-Camp-Trek+Chitwan-Tour/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2017/06/muktinath-temple.jpg",
              "Annapurna Circuit Short Trek– 14 Days",
              "Voted one of the best long treks in the world, Annapurna Circuit caters tourists with desire for adventure, wilderness and sightseeing. The trail makes a complete round of Annapurna mountain range; therefore, you can get the iconic view of the Annapurna from almost every corner. You must pass through four different regions during the trek; Lamjung, Manang, Mustang and Myagdi. Lamjung and Myagdi of the lower elevations are both predominantly Hindu region, whereas, Manang and Mustang are Buddhist regions.",
              "$ 1049USD",
              "13 days",
              "Annapurna-Circuit/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/07/Kicho-lgao-en-Annapurna-e1479117967671.jpg",
              "Annapurna Circuit Trek – 21 Days",
              "Voted one of the best long treks in the world, Annapurna Circuit caters tourists with desire for adventure, wilderness and sightseeing. The trail makes a complete round of Annapurna mountain range; therefore, you can get the iconic view of the Annapurna from almost every corner. You must pass through four different regions during the trek; Lamjung, Manang, Mustang and Myagdi. Lamjung and Myagdi of the lower elevations are both predominantly Hindu region, whereas, Manang and Mustang are Buddhist regions.",
              "$ 1,349USD",
              "21 days",
              "Annapurna-Circuit-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2017/06/Tilicho_Lake.jpg",
              "Annapurna Circuit with Tilicho  Lake- 13 Days",
              "Voted one of the best long treks in the world, Annapurna Circuit caters tourists with desire for adventure, wilderness and sightseeing. The trail makes a complete round of Annapurna mountain range; therefore, you can get the iconic view of the Annapurna from almost every corner. You must pass through four different regions during the trek; Lamjung, Manang, Mustang and Myagdi. Lamjung and Myagdi of the lower elevations are both predominantly Hindu region, whereas, Manang and Mustang are Buddhist regions.",
              "$ 1149USD",
              "13 days",
              "Annapurna-Circuit-with-Tilicho--Lake--13-Day/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/ghandruk.jpg",
              "Annapurna Sanctuary Trek – 16 Days",
              "Annapurna is one of the richest cultural and geographical regions in Nepal. ACAP (Annapurna Conservation Area Project) located amidst Annapurna massif boasts ethnic lifestyle, exquisite wildlife, vegetation, comfortable tea-houses and magnificent scenery. Annapurna I is the 10th highest mountain in the world.The trek begins from Phedi, at the outskirts of Pokhara.",
              "$ 1,190USD",
              "16 days",
              "Annapurna-Sanctuary-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2018/05/api-mountain.jpeg",
              "Api Nampa Base Camp Trek – 15 Days",
              "Api is the highest mountain in the Far-Western region of Nepal. Measuring 7,130 meters, it can well be seen from both India and China. The peak lies inside the Api Nampa Conservation Area. It’s a critical geographical region because it shares its border with both India and China, hence, the tourists are restricted from visiting the place.",
              "$ 3,749USD",
              "15 days",
              "Api-Nampa-Base-Camp-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2017/06/nagarkot-2.jpg",
              "Chisapani Nagarkot Trek – 5 Days",
              "Nagarkot is a popular hill-station and the tourist site located at the outskirts of Kathmandu. A secluded place, Nagarkot is covered with ethnic Newari houses and lush green forests, which makes it a wonderful getaway. You can easily catch the scenic views of the surrounding mountains, including; Mount Everest, from the top of Nagarkot.The trek combines a short hike in the outskirts of Kathmandu with a visit to the revered site of Changunarayan.",
              "$ 399USD",
              "05 days",
              "Chisapani-Nagarkot-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/07/P1100270-e1479117789117.jpg",
              "Everest Base Camp Trek – 16 Days",
              "The trek to Everest is the eye-candy for most of the trekkers around the world. An opportunity to view some of the greatest mountains on Earth is offered by this trek. Mount Everest, Lhotse, Ama Dablam and Makalu are few of the great mountains. The 16 days trek offers enough time to explore the Khumbu region with ease.",
              "$ 1,349USD",
              "16 days",
              "Everest-Base-Camp-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/07/everest-base-camp.jpg",
              "Everest Base Camp Trek (Budget) – 14 Days",
              "The trek to Everest is the eye-candy for most of the trekkers around the world. An opportunity to view some of the greatest mountains on Earth is offered by the Everest Base Camp trek. Mount Everest, Lhotse, Ama Dablam and Makalu are few of the great mountains you will see on this trek. The GAP Everest trekking manages to provide you a quality guide and porter, along with other essential logistics.",
              "$ 949USD",
              "14 days",
              "Everest-Base-Camp-Trek-Budget/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/07/P1100270-e1479117789117.jpg",
              "Everest Base Camp Trek+Chitwan Tour  – 17 Days",
              "The trek to Everest is the eye-candy for most of the trekkers around the world. An opportunity to view some of the greatest mountains on Earth is offered by this trek. Mount Everest, Lhotse, Ama Dablam and Makalu are few of the great mountains you will see on this trek. The 14 Days Everest trekking assures you complete fun and adventure.",
              "$ 1,280USD",
              "17 days",
              "Everest-Base-Camp-Trek+Chitwan-Tour-/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/helicoptero-a-everest-e1479118729481.jpg",
              "Everest Heli Luxury Trek – 6 Days",
              "Everest Heli Trek is an elite adventure designed for the trekking enthusiasts who wish to walk into Everest and fly out in style! It’s a perfect trip those with time-crunch, yet wish to enjoy trekking in the Everest. It offers a unique holidaying experience in Nepal!The trek will begin from Lukla and will ascend up to the Syangboche village, as usual. From here, a chartered helicopter service will take you on a tour of Everest region and take you back to Kathmandu.You’ll get to see some of the most mesmerizing Himalaya peak en route, namely; Ama Dablam, Thamserku, Kantega, Lhotse and Nuptse.",
              "$ 3,199USD",
              "06 days",
              "Everest-Heli-Luxury-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/Cho-la-pass-e1479186385484.jpg",
              "Everest High Passes Trek – 19 Days",
              "Everest High Passes Trek is the most challenging trek in Nepal. A comparatively lengthier trek, you will be required to map the vast expanse and cross 3 individual high passes over 5,000 m in height. Kongma La (5,535 m), Renjo La (5,360 m) and Cho La (5,368 m) are the 3 high passes in Everest region.Everest High Passes Trek is suited for the experienced trekkers.",
              "$ 1,549USD",
              "19 days",
              "Everest-High-Passes-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/Monasterio-de-Tengboche-en-1974.jpg",
              "Everest Short Trek – 11 Days",
              "This basically is a short trek to Everest. Unlike most other treks, this trip offers an entire insight into the Khumbu region at shorter time. You will get an opportunity to view some of the most popular mountains in the region, namely; Mount Everest, Lhotse, Ama Dablam and Makalu. The 11 Days guarantees best time ever.",
              "$ 999USD",
              "11 days",
              "Everest-Short-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/07/P1100270-e1479117789117.jpg",
              "Everest Rapid Trek – 10 Days",
              "The trek to Everest is the eye-candy for most of the trekkers around the world. An opportunity to view some of the greatest mountains is offered by this trek, namely; Mount Everest, Lhotse, Ama Dablam and Makalu. The rapid trek ensures you get to the top and back at no time. It’s suitable for trekkers who have previous experience and are fit and agile.",
              "$ 1,199USD",
              "10 days",
              "Everest-Rapid-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/dudh-pokhari.jpg",
              "Everest via Gokyo Trek – 18 Days",
              "Gokyo is a small Sherpa village located at the foot of Gokyo Ri and on the banks of Dudh Pokhari (Gokyo Cho). Everest via Gokyo valley accounts for one of the best off-beat treks in the Everest region and offers some peaceful yet great time away from the crowd on the usual trail to the base camp.The trek begins at Lukla, a small airport town in Khumbu. The trail ascends to Namche Bazaar through Phakding and turns leftwards to Phortse village.",
              "$ 1,449USD",
              "18 days",
              "Everest-via-Gokyo-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/Poon-colina.jpg",
              "Ghorepani-Poon Hill Trek – 9 Days",
              "Ghorepani is a small village located at the periphery of Annapurna Conservation Area (ACAP). A fairly easier and short trek, Ghorepani makes a great trekking experience. You can also opt. to visit Ghorepani along with the Annapurna Base Camp (ABC) trek.",
              "$ 669USD",
              "09 days",
              "Ghorepani-Poon-Hill-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/paul-watner-e1479186156729.jpg",
              "Honeymoon Trek in Nepal – 14 Days",
              "Nepal is an exotic destination in South Asia. The mountainous nation offers unique destinations for holidaying activities. If you are thinking about honeymooning or a romantic getaway, Nepal can be one of the finest destinations in the world.The honeymoon trek explores the trekking routes of Myagdi and Mustang districts of Nepal.",
              "$ 1,220USD",
              "14 days",
              "Honeymoon-Trek-in-Nepal/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/Langtang-montana-escenica-e1479186219576.jpg",
              "Langtang Valley Trek – 11 Days",
              "Langtang valley is located in a close proximity to Tibet in the north. A discreet region just 19 km north of Kathmandu, it offers one of the best trekking experiences in Nepal.Langtang Lirung (7,227 meters) and Yala Peak (5,520 meters) dominates the scenery. The entire trek trail lies inside Langtang National Park and the meager population of the region tends to cater the tourists themselves.",
              "$ 680USD",
              "11 days",
              "Langtang-Valley-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/Tamang-children-seen-during-tamang-heritage-trek-e1479119038256.jpg",
              "Langtang Tamang Heritage Trek – 15 Days",
              "The Langtang valley is located in a close proximity to Tibet in the north. A discreet region just 19 km north of Kathmandu offers one of the best trekking experiences in Nepal.Tamang Heritage Trail is an extension of the greater Langtang trail. The trek leads you through the Tamang settlements of the central northern Nepal.",
              "$ 1,070USD",
              "15 days",
              "Langtang-Tamang-Heritage-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/ethnic-tamang-village-manaslu-e1479118438244.jpg",
              "Manaslu Circuit Trek – 17 Days",
              "Manaslu Circuit Trek can be the best alternative for the Annapurna trekking. Located inside the Manaslu Conservation Area, the circuit trail passes through the base of the 8th highest mountain, Manaslu. The circuit accounts for a lengthy and arduous trek. Formerly, a camping trip, it can now be completed through tea-houses en route.",
              "$ 1,549USD",
              "17 days",
              "Manaslu-Circuit-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/muktinath-temple-during-winter.jpg",
              "Muktinath Holy Trek – 14 Days",
              "Muktinath is a revered site located at the foot of Thorong La Pass in the Mustang district of Nepal. A fervently visited site by both the Hindu and Buddhist pilgrims, it also makes up for a great outdoor destination for the trekkers. The shorter trail starting from the outskirts of Pokhara is well gifted with some great scenery, villages and tourist sites, like; Ghorepani, Kagbeni and Jomsom.The ancient temple of Muktinath is dedicated to God Vishnu (One of the Hindu-Trinity) and this temple is considered to be the 105th among the available Divya Desam (108 Vishnu temples that are mentioned in the works of the Tamil Azhvars [saints]).",
              "$ 959USD",
              "14 days",
              "Muktinath-Holy-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/11/Jiri-Dolakha-distrito-e1479186052963.jpg",
              "Everest via Jiri Trek – 22 Days",
              "The trek to Everest is the eye-candy for most of the trekkers around the world. An opportunity to view some of the greatest mountains on Earth is offered by the Everest Base Camp trek. Mount Everest, Lhotse, Ama Dablam and Makalu are few of the great mountains you will see on this trek.Jiri is a small town located 188 km east of Kathmandu.",
              "$ 1,549USD",
              "22 days",
              "Everest-via-Jiri-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2017/06/Nar-Phu-2.jpg",
              "Nar Phu Valley Trek – 18 Days",
              "Nar Phu is a restricted region located in the mid-western region of Nepal. It was closed until 2002 when the government decided to open the region for trekking. The valley is entirely culturally Tibetan, and the lifestyle and landscape resembles that of Tibet.Tucked between the popular Annapurna and Manaslu regions, Nar Phu valley is considered a hidden gem that offers trekkers a rare opportunity to explore the exquisite and discreet parts of Nepal.",
              "$ 1,649USD",
              "18 days",
              "Nar-Phu-Valley-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2017/07/honey-hunt.jpg",
              "Honey Hunting Trek – 10 Days",
              "Honey hunting is the ancestral practice of collecting honey from wild bees in the mid-western Nepal. The practice is strongly upheld by the indigenous Gurung and Magar tribes of Bhujung and Pasgaon villages. The practice has continued for hundreds of years.The remote village of Bhujung and Pasgaon depends entirely on local employment.",
              "$ 1,099USD",
              "10 days",
              "Honey-Hunting-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2017/03/rara-lake.jpg",
              "Rara Lake Trek – 16 Days",
              "Rara Lake is popular for being the largest lake in Nepal. Known as the ‘Queen of Lakes’ and later rechristened by the late King Mahendra Shah of Nepal as ‘Mahendra Daha’, the lake is situated at the altitude of 2,980 meters (9,837 ft). The lack of access and lesser crowd makes the site a clean, pristine and solitary place for the visit.It is a UNESCO World Heritage Site located at the far west region of Nepal.",
              "$ 2,049USD",
              "17 days",
              "Rara-Lake-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2017/07/panchase-village-trek.jpg",
              "Panchase Trek – 09 Days",
              "Panchase lies to the west of Pokhara. The small village is predominantly inhabited by Gurung, Brahmin, Chhetri and Dalit tribes. The amalgamation of various culture and lifestyles adds charm to this small settlement.The highest point you may reach during the trek is at 2,500 meters at Panchase Danda.",
              "$ 599USD",
              "09 days",
              "Panchase-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2017/05/royal-trek.jpg",
              "The Royal Trek – 9 Days",
              "The Royal Trek is one of the shortest treks in the mid-western region of Nepal. It was called the royal trek because it was first undertaken by the Prince Charles of England and his 90 person party back in the 1980s.The short trek follows the shrub paths north to the Pokhara. The highest you may reach during the trek is only 1,730 meters, hence anyone with good health do this trek.",
              "$ 749USD",
              "09 days",
              "The-Royal-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/bhutan-cultural-dance-e1479186170547.jpg",
              "The Druk Path Trek – 10 Days",
              "Bhutan is a small nation nestled in the Himalayas. It offers some of the most unique destination for outdoor activities. Druk Path Trek is one of the most popular trekkings in Bhutan. A shorter trek compared to the lengthy treks of Nepal, Druk Path trek takes you around the ancient pilgrimage route of Bhutan.",
              "$ 2,190USD",
              "10 days",
              "The-Druk-Path-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/Makalu-base-camp-post-monsoon-e1479118893263.jpg",
              "Makalu Base Camp Trek – 23 Days",
              "Located at the base of the 5th highest mountain in the world, Makalu Base Camp offers a pleasant yet rugged trail for trekking in Nepal. The trail lies inside Makalu-Barun National Park, hence offering a rare glimpse of the Eastern Nepal’s rich biodiversity.It’s a longer than usual trek starting with a short flight to the remote region of eastern Nepal. A short flight from Kathmandu will take you to Tumlingtar.",
              "$ 2,168USD",
              "23 days",
              "Makalu-Base-Camp-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2017/06/Tilicho_Lake.jpg",
              "Manang Tilicho Trek – 13 Days",
              "Manang is a city located inside the Manang district of mid-western Nepal. It lies to the north of Annapurna mountain range and around Marshyangdi River. It also forms a part of the greater Annapurna circuit trail.Gangapurna, and Annapurna I,II and III peaks are clearly visible from Manang.",
              "$ 1,599USD",
              "13 days",
              "Manang-Tilicho-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/08/IMG_8553-e1479118620497.jpg",
              "Upper Mustang Trek – 17 Days",
              "A former kingdom of Lo, Mustang is a discreet region located in the western Nepal and bordering with the Tibet in the North. It is one of the rain-shadow areas, therefore, tourists can visit the region throughout the year.The trek begins from Jomsom, after a brief flight from Pokhara. The first stop is made at the iconic Kagbeni.",
              "$ 1,849USD",
              "17 days",
              "Upper-Mustang-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/10/himalayan-tahr.jpg",
              "Upper Dolpo Trek – 27 Days",
              "Upper Dolpo is a high-altitude region located at western Nepal. A rain-shadow area, Upper Dolpo receives least rainfall; therefore, most of the terrain resembles a desert like landscape and can be trekked throughout the year. It lays close to Tibet in the North, therefore, the inhabitants, local culture, dialect and architecture resembles its northern counterpart.The Dolpo people have practiced trading salt through caravans for ages.",
              "$ 3,499USD",
              "27 days",
              "Upper-Dolpo-Trek/"
            ],
            [
              "https://www.caravanoutdoors.com/wp-content/uploads/2016/09/inside-mu-gompa.jpg",
              "Tsum Valley Trek – 19 Days",
              "Tsum Valley is one of Nepal’s remotest valleys located amidst the mountains. The access to the region was recently provided, however, it is still considered one of the restricted regions. The trek takes around the majestic Ganesh Himal, Sringi Himal, and Boudha Himal ranges. Predominantly Tibetan, the region is closer to Tibet in terms of culture and lifestyle.",
              "$ 1,540USD",
              "19 days",
              "Tsum-Valley-Trek/"
            ]
          ]}
        />
      </div>
    );
  }
}
