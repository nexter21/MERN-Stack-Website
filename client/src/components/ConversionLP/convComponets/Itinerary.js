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
                      <h6 class="mb-0">
                        <a
                          role="button"
                          href="#collapse1"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          aria-expanded="false"
                          aria-controls="collapse1"
                          class="collapsed"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 1</strong> - Arrival in Kathmandu
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse1" class="collapse">
                      <div class="card-body">
                        At your arrival in Kathmandu, a member of our team will
                        greet and receive you at the airport. You will be
                        transferred to your hotel. Our representative will brief
                        on your arrival about the trip. The rest of the day is
                        yours. The evening we be spent enjoying complimentary
                        local dinner one of the finest local diner with cultural
                        program.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse2"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 2</strong> - Rest Day /&nbsp;Trek
                            Preparation
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse2" class="collapse">
                      <div class="card-body">
                        Kathmandu is the main cultural hub of Nepal and the
                        historical city.&nbsp;You can choose to roam around the
                        city or rest at the hotel preparing for the trek..
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse3"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 3</strong> - Fly to Lukla &amp; Trek to
                            Phakding
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse3" class="collapse">
                      <div class="card-body">
                        Lukla is the gateway to Everest Base Camp. After a
                        scenic half an houyr flight to Lukla Airport, the
                        journey will begin. The first day of the trek will be
                        more like a warm up. It will take you to Phakding
                        village, just above Lukla. You can spend the rest of the
                        day enjoying the local sceneries.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse4"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 4</strong> - Trek to Namche Bazaar
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse4" class="collapse">
                      <div class="card-body">
                        The trek will ascend up to the Dudh Koshi Valley. After
                        a few hours of hike, you will arrive at entrance of
                        Sagarmatha National Park in Monjo. The next and the
                        final stop will be at Namche Bazaar. Namche is the
                        highlight of the trek. The village bustling with people
                        and lodges feels more like a city.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse5"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 5</strong> - Acclimatization Day
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse5" class="collapse">
                      <div class="card-body">
                        Higher the altitude, thinner the air! You need to gain
                        altitude slowly and steadily so that we get enough time
                        to acclimatize en route. Today, you hike to Syangboche
                        village, just above Namche and return back to Namche to
                        spend the rest of the day.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse6"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 6</strong> - Trek to Tengboche
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse6" class="collapse">
                      <div class="card-body">
                        You will hike up to Tengboche village. First one hour of
                        the trek is straight through the hillsidefollowed by a
                        descent. It is known for its monastery. Tengboche
                        monastery is the highest among many monasteries in
                        Nepal. Mt. Ama Dablam will be seen closer from
                        Tengboche. And if you arrive here during Autumn, you
                        might get to witness the grand festival of Mani Rimdu.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse7"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 7</strong> - Trek to&nbsp;Pheriche
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse7" class="collapse">
                      <div class="card-body">
                        You also get to wander up the valley to look at a lake,
                        the Tshola Tsho and the perpendicular walls of Cholatse
                        and Tawache. You can climb up onto the ridge overlooking
                        Dingboche for the view of the Imja Valley and the
                        incredible south face of Mt.Lhotse
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse8"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 8</strong> - Acclimatization Day
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse8" class="collapse">
                      <div class="card-body">
                        It is acclimatization and an important day. You’ll get
                        used to the thin air of above 4,000 meters. It is
                        essential to spend some time here to prepare yourself
                        for the further trek. You can also take some couple of
                        hours to hike up or rest basking in the sun.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse9"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 9</strong> - Trek to Lobuche
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse9" class="collapse">
                      <div class="card-body">
                        There is a lot of vertical inclination even though the
                        trail length does not clock more than 4.5 miles in
                        itself. Lobuche is situated beneath the Lhotse Ridge.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse10"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 10</strong> - Trek to Gorak Shep &amp;
                            Hike to Everest Base Camp
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse10" class="collapse">
                      <div class="card-body">
                        Today is the special day. You’re approaching the base
                        camp, therefore, there are many anxieties and surprises.
                        A tough trek through Gorakshep will take you to Everest
                        Base Camp. The day will be the most challenging. You can
                        spend some time exploring the iconic base camp and the
                        surrounding areas, and return to Gorakshep for the
                        night.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse11"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 11</strong> - Early Morning hike to Kala
                            Patthar &amp; Back to&nbsp;Lobuche
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse11" class="collapse">
                      <div class="card-body">
                        Kala Patthar is the landmark of the Everest. You will
                        start especially early. The reason behind leaving early
                        is to reach Kala Patthar before sunrise. It provides the
                        most wonderful sights of the surrounding along with the
                        Mount Everest. It will take a couple of hours to reach
                        Kala Patthar from Gorak Shep and couple more to reach
                        the Lobuche.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse12"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 12</strong> - Trek to Pangboche
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse12" class="collapse">
                      <div class="card-body">
                        As you retrace our steps to Duglha and descend to
                        Pheriche. After lunch you cross the Khumbu Khola on a
                        wooden suspension bridge and follow the Imja Khola to
                        the village of Pangboche.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse13"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 13</strong> - Trek to Namche Bazaar
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse13" class="collapse">
                      <div class="card-body">
                        Today, you will return the same way to Namche. You climb
                        to Tengboche for lunch and steeply down to Phungi Tenga.
                        Our trek leads up to Sansa and arrives to high ridge
                        above the Douh Koshi River.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse14"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 14</strong> - Trek to Lukla
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse14" class="collapse">
                      <div class="card-body">
                        Lukla will be the final stop of your trek. A final leg
                        of the trip, you might overcome with mixed feelings.
                        It’s a day to throw a small party. The evening and the
                        night will be marked with celebrations that will include
                        a lot of singing and dancing. You will spend the night
                        at Lukla and fly out early morning.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <a
                          href="#collapse15"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <i class="fas fa-arrow-circle-down" />{" "}
                          <span>
                            {" "}
                            <strong>Day 15</strong> - Fly back to Kathmandu
                          </span>
                        </a>
                      </h6>
                    </div>
                    <div id="collapse15" class="collapse">
                      <div class="card-body">
                        You can take the earliest possible flight back to
                        Kathmandu. One of our representative will transfer you
                        to your hotel. Later the evening, we will treat you with
                        a complimentary dinner, a set of exquisite Nepalese
                        cuisines.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6 class="mb-0">
                        <div id="lata">
                          <a
                            href="#collapse16"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            class="collapsed"
                            aria-expanded="false"
                          >
                            <i class="fas fa-arrow-circle-down" />{" "}
                            <span>
                              {" "}
                              <strong>Day 16</strong> - Departure from Kathmandu
                            </span>
                          </a>
                        </div>
                      </h6>
                    </div>
                    <div id="collapse16" class="collapse">
                      <div class="card-body">
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
