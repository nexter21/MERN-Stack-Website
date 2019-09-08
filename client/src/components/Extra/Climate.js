import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class Climate extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="climate">
        <Helmet>
          <title>Climate & Seasons in Nepal</title>
        </Helmet>
        <h2>Climate & Seasons</h2>
        <div className="container">
          <p>
            Nepal resides at the same latitude as the Florida, however, the
            differing altitudes and geography affects the weathers and climates
            of each regions.
          </p>
          <ul className="list-group">
            <li className="list-group-item">
              <i class="fas fa-star" />
              The Southern plains or Terai has a tropical climate. The altitude,
              lesser than 1,000 meters, brings in a tropical weather, therefore,
              it’s lush with vegetation and ever-green forests. It’s popularly
              known as the bread basket of Nepal.
            </li>
            <li className="list-group-item">
              <i class="fas fa-star" />
              As the altitude increases, the weather starts differing. The
              middle hills, which fall between 1,000 meters and 2,000 meters,
              have a sub-tropical weather and occupies about 22% of the entire
              land mass. Kathmandu falls under the sub-tropical altitudinal
              belt.
            </li>
            <li className="list-group-item">
              <i class="fas fa-star" />
              The upper hills account for temperate climate. It occupies 12% of
              Nepal’s land mass and has up to 153 annual days of frost.
            </li>
            <li className="list-group-item">
              <i class="fas fa-star" />
              The higher altitude, up to 4,000 meters accounts for the
              sub-alpine climate. It’s mostly found in the lower Himalaya
              regions. The human settlement and vegetation is scare in this very
              climate. Annapurna Base Camp is a part of sub-alpine altitudinal
              belt.
            </li>
            <li className="list-group-item">
              <i class="fas fa-star" />
              The region above 4,000 meters is known as the alpine zone. Even
              though the human settlement is scare above 4,000 meters, some
              areas tend to have permanent settlers. They mostly depend on
              trading of goods for food, as the altitude cannot support any form
              of vegetation, except few medicinal herbs. Everest Base Camp is a
              part of alpine altitudinal belt.
            </li>
          </ul>
          <div className="precipitation">
            <img src={require("../../img/avg-rainfall-nepal.png")} alt="" />
          </div>
          <div className="season">
            <h3 className="season">Season</h3>
            <p>
              Nepal has four major seasons. The influx of tourists totally
              depends upon the very seasons. Spring and Autumn are regarded as
              the best season for the arrival of tourists. They receive almost
              80% of the total tourists in a year.
            </p>

            <div className="row" id="indiSeason">
              <div className="col-sm-6">
                <h4>Spring</h4>
                <p>
                  It is one of the best times for traveling in Nepal. The
                  rhododendrons are in full blossom, with excellent trails and
                  clear blue sky. Visibility is near to perfect. It brings in
                  second highest number of tourists in a year. It makes some of
                  your favorite trek trails completely accessible. Everest,
                  Annapurna, Manaslu and Langtang are few of them. Spring in
                  nepal lasts from March to June.
                </p>
              </div>
              <div className="col-sm-6">
                <img
                  src={require("../../img/season/Spring-season-visit-Nepal.jpg")}
                  alt="Spring Season in Nepal"
                />
              </div>
            </div>

            <div className="row" id="indiSeason">
              <div className="col-sm-6">
                <h4>Autumn</h4>
                <p>
                  It is another best season of Nepal. A historically important
                  season, the weather remains perfect. Visibility, temperature
                  and weather is likely to make you fall in love with the
                  mountains. It brings in the highest amount of tourists in a
                  year. The popular trek trails, such as; Everest Base Camp,
                  Annapurna circuit and the base camp, remain busier. Annapurna
                  region receives over 100,000 tourists during Autumn, while
                  Everest may receive well over 60,000 tourists. Autumn lasts
                  from September to early November.
                </p>
              </div>
              <div className="col-sm-6">
                <img
                  src={require("../../img/season/mustang-autumn.jpg")}
                  alt="Autumn Season in Nepal"
                />
              </div>
            </div>

            <div className="row" id="indiSeason">
              <div className="col-sm-6">
                <h4>Winter</h4>
                <p>
                  Winter is a fairly good time for traveling in Nepal. The
                  visibility is fine, however, the issue of cold weather
                  persists. The average temperature of Kathmandu may fall well
                  below 9°C (48°F). You can still trek around the Nepal,
                  however, prepare yourself better for the harsh weather at the
                  higher altitudes. Snowfall is common in the mountains. You
                  must carry extra layers or sleeping bags during the winter.
                  Winter lasts from Mid-November to February.
                </p>
              </div>
              <div className="col-sm-6">
                <img
                  src={require("../../img/season/People_Enjoy_Snow_Fall_Chandragiri_24012018012-25012018072711-1000x0.jpg")}
                  alt="Winter Season in Nepal"
                />
              </div>
            </div>

            <div className="row" id="indiSeason">
              <div className="col-sm-6">
                <h4>Monsoon/Summer</h4>
                <p>
                  Monsoon is basically gloomy and dull in Nepal. The incessant
                  rainfall can be a huge problem for the travelers. You can
                  still go around trekking if you can deal with the weather,
                  however, you must be cautious of the likely natural calamities
                  in the hilly and mountain regions. Landslides are quite a
                  common site. The rain-shadow areas, however, remain well away
                  from the monsoon. It is actually the best time to visit the
                  rain-shadow areas in Nepal, such as; Upper Mustang, Dolpo and
                  Muktinath. Monsoon lasts from July to late August.
                </p>
              </div>
              <div className="col-sm-6">
                <img
                  src={require("../../img/season/mustang10-1.jpg")}
                  alt="Monsoon Season in Nepal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
