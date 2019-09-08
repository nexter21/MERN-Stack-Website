import React, { Component } from "react";

export default class Itinerary extends Component {
  render() {
    return (
      <section className="landingIti">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Detailed Itinerary of The Trek
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">
                  Detailed Itinerary
                </h6>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div id="accordion">
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <a
                          role="button"
                          href="#collapse1"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 1</strong> - Arrival in Kathmandu
                          </span>
                        </a>
                      </h5>
                    </div>
                    <div id="collapse1" class="collapse show">
                      <div class="card-body">
                        {" "}
                        At your arrival in Kathmandu, a member of our team will
                        greet and receive you at the airport. You will be
                        transferred to your hotel. Our representative will brief
                        on your arrival about the trip. The rest of the day is
                        yours. The evening we be spent enjoying complimentary
                        local dinner one of the finest local diner with cultural
                        program
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <a
                          href="#collapse2"
                          data-toggle="collapse"
                          data-parent="#accordion"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 2</strong> - Drive from Kathmandu to
                            Pokhara
                          </span>
                        </a>
                      </h5>
                    </div>
                    <div id="collapse2" class="collapse">
                      <div class="card-body">
                        {" "}
                        After the early morning breakfast, you will drove from
                        Kathmandu to Pokhara in a tourist coach bus. The 6-7
                        hours ride will be provided with mineral water and
                        enough loo breaks. The noon at the lakeside city of
                        Pokhara will invite you with a great ambiance. You can
                        take a short walk around the city and enjoy your lunch.
                        Pokhara is the most popular getaway in Nepal, therefore,
                        you may find many like-minded tourists strolling around
                        the city..
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <a
                          href="#collapse3"
                          data-toggle="collapse"
                          data-parent="#accordion"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 3</strong> - Drive to Nayapul/Trek to
                            Ghandruk
                          </span>
                        </a>
                      </h5>
                    </div>
                    <div id="collapse3" class="collapse">
                      <div class="card-body">
                        {" "}
                        A short early morning drive through Banglung Highway
                        will lead you to Nayapul. From here, your trek will
                        begin. The first day leg will include a moderate hike up
                        to the culturally rich village of Ghandruk. Ghandruk is
                        one of the most beautiful villages in the region. The
                        ethnic Gurung culture and lifestyle will surely bring a
                        smile to you face. You can rest here the entire day,
                        contemplate on your first day trek and enjoy your meal
                        along with relishing the local lifestyle and scenery.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <a
                          href="#collapse4"
                          data-toggle="collapse"
                          data-parent="#accordion"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 4</strong> - Trek to Chhomrong
                          </span>
                        </a>
                      </h5>
                    </div>
                    <div id="collapse4" class="collapse">
                      <div class="card-body">
                        {" "}
                        After a hefty breakfast, you climb start your trek and
                        advance up to the beautiful village of Chhomrong. The
                        trail encounters some steep descends and ascends,
                        therefore, it might prove challenging for a second day
                        trek. It’s a very lively part of the region. You can
                        interact with the trekkers visiting the region. The
                        local houses are a sight to see with their intricate
                        designs and texture. The village of Chhomrong isn’t
                        lesser amazing. It is considered the best village in the
                        entire region. You can find many modern amenities in
                        here. You can rest the remaining day strolling around
                        the village and enjoying your local meal.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <a
                          href="#collapse5"
                          data-toggle="collapse"
                          data-parent="#accordion"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 5</strong> - Trek to Dovan
                          </span>
                        </a>
                      </h5>
                    </div>
                    <div id="collapse5" class="collapse">
                      <div class="card-body">
                        {" "}
                        The Trek begins with the downhill hike along the stony
                        staircases to Chhomrong Khola and cross the suspension
                        bridge. It will be followed by continuous ascend. The
                        first stop will be made at Sinuwa 2,324 m. The trail
                        beyond it passes through lush vegetation and bamboo
                        forest. A brief 30 minutes downhill hike will bring you
                        to Bamboo village 2,340 m. The end of the day will be
                        made at Dovan.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <a
                          href="#collapse6"
                          data-toggle="collapse"
                          data-parent="#accordion"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 6</strong> - Trek to Machhapuchhre Base
                            Camp
                          </span>
                        </a>
                      </h5>
                    </div>
                    <div id="collapse6" class="collapse">
                      <div class="card-body">
                        {" "}
                        The early morning hike amounting for two and half hours
                        along the bank of the Modi Khola will lead you to
                        Himalaya village. You are likely to encounter continuous
                        uphill ascend. From here, the weather may start
                        changing. Fog is common in this region; therefore, the
                        trail may seem blur. Hinku Cave is the local landmark; a
                        hard-ice cave formed by the falling ice water stream.
                        The trail will pass through Deurli village and to the
                        Machhapuchhre Base Camp. The lodges here are located
                        right below the Machhapuchhre peak, therefore, you will
                        likely get to see a serene mountainous views.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <a
                          href="#collapse7"
                          data-toggle="collapse"
                          data-parent="#accordion"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 7</strong> - Trek to Annapurna Base Camp
                            &amp; Back to Dovan
                          </span>
                        </a>
                      </h5>
                    </div>
                    <div id="collapse7" class="collapse">
                      <div class="card-body">
                        {" "}
                        Day 7 is the greatest day of the trek, as you ascend to
                        the Annapurna Base Camp. You may wake up at the earliest
                        hour if you do not wish to miss seeing the sunlight
                        touch the Annapurna I. An early morning hike will
                        facilitate a plenty of time for yourself and the nature.
                        The base camp in the early morning is less occupied,
                        therefore, you have more time to explore around. After a
                        short hike, you can have your breakfast and start
                        preparing to descend. You will descend the same way you
                        came up, while meeting many trekkers on the way. Dovan
                        is the final stop for the day.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <a
                          href="#collapse8"
                          data-toggle="collapse"
                          data-parent="#accordion"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 8</strong> - Trek to Jhinu Dada
                          </span>
                        </a>
                      </h5>
                    </div>
                    <div id="collapse8" class="collapse">
                      <div class="card-body">
                        {" "}
                        After the breakfast, you’ll start descending towards
                        Jhinu Dada. It takes around6 hours of hike. If you wish,
                        you can rest and enjoy the hot water spring at Jhinu
                        Danda, and let the exhaustion of the trek sweep away.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <a
                          href="#collapse9"
                          data-toggle="collapse"
                          data-parent="#accordion"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 9</strong> - Trek to Nayapul &amp; Back
                            to Pokhara
                          </span>
                        </a>
                      </h5>
                    </div>
                    <div id="collapse9" class="collapse">
                      <div class="card-body">
                        {" "}
                        The final leg of the trek will take you back to Naya Pul
                        and a short ride will take you to Pokhara, where you can
                        relax and sunbath beside the Phewa Lake. Most tourists
                        choose to boat or cycle around the small city.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <a
                          href="#collapse10"
                          data-toggle="collapse"
                          data-parent="#accordion"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 10</strong> - Drive from Pokhara to
                            Kathmandu
                          </span>
                        </a>
                      </h5>
                    </div>
                    <div id="collapse10" class="collapse">
                      <div class="card-body">
                        {" "}
                        A 6-7 hours ride will take you back to Kathmandu. Our
                        representative will transfer you in a Hotel, followed by
                        a humongous farewell dinner.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5 class="mb-0">
                        <div id="lata">
                          <a
                            href="#collapse11"
                            data-toggle="collapse"
                            data-parent="#accordion"
                          >
                            <i class="fas fa-arrow-circle-down" />{" "}
                            <span>
                              {" "}
                              <strong>Day 11</strong> - Depart from Kathmandu
                            </span>
                          </a>
                        </div>
                      </h5>
                    </div>
                    <div id="collapse11" class="collapse">
                      <div class="card-body">
                        {" "}
                        You will be transferred to the Airport to catch your
                        flight back home.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
