import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class Peaks extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="trekPeaks">
        <Helmet>
          <title>Trekking Peaks In Nepal</title>
        </Helmet>
        <div className="container">
          <h2>Trekking Peaks In Nepal</h2>
          <p>
            Trekking peaks are the small peaks in Nepal which were opened for
            both the trekking and climbing experience. Nepal Mountaineering
            Association (NMA) has classified 33 such peaks as the trekking
            peaks. Most of the peaks open for climbing during Spring
            (March-June) and Autumn (September-November) seasons. To promote
            climbing, NMA has removed the royalty fee from the peaks which are
            lesser than 5,800 meters in height.
          </p>

          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h2>Group A</h2>
                <table class=" table table-bordered table-striped">
                  <tbody>
                    <tr>
                      <td
                        style={{ background: "#007bff" }}
                        align="center"
                        width="213"
                      >
                        <span style={{ color: "#ffffff" }}>
                          <b>Peaks</b>
                        </span>
                      </td>
                      <td
                        style={{ background: "#007bff" }}
                        align="center"
                        width="213"
                      >
                        <span style={{ color: "#ffffff" }}>
                          <b>Altitude (meters)</b>
                        </span>
                      </td>
                      <td
                        style={{ background: "#007bff" }}
                        align="center"
                        width="213"
                      >
                        <span style={{ color: "#ffffff" }}>
                          <b>Location</b>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="213">Cholatse</td>
                      <td width="213">6,440</td>
                      <td width="213">Khumbu</td>
                    </tr>
                    <tr>
                      <td width="213">Machermo</td>
                      <td width="213">6,273</td>
                      <td width="213">Mahalangur</td>
                    </tr>
                    <tr>
                      <td width="213">
                        <a
                          href="https://caravanoutdoors.com/kyajo-ri-peak-climb-16-days/"
                          target="_blank"
                        >
                          Kyajo Ri
                        </a>
                      </td>
                      <td width="213">6,186</td>
                      <td width="213">Mahalangur</td>
                    </tr>
                    <tr>
                      <td width="213">Phari Lapcha</td>
                      <td width="213">6,017</td>
                      <td width="213">Mahalangur</td>
                    </tr>
                    <tr>
                      <td width="213">Langsisa Ri</td>
                      <td width="213">6,427</td>
                      <td width="213">Jugal</td>
                    </tr>
                    <tr>
                      <td width="213">Ombigaichen</td>
                      <td width="213">6,340</td>
                      <td width="213">Mahalangur</td>
                    </tr>
                    <tr>
                      <td width="213">Bokta</td>
                      <td width="213">6,143</td>
                      <td width="213">Kanchenjunga</td>
                    </tr>
                    <tr>
                      <td width="213">Checkigo</td>
                      <td width="213">6,257</td>
                      <td width="213">Gaurishankar</td>
                    </tr>
                    <tr>
                      <td width="213">
                        <a
                          href="https://caravanoutdoors.com/lobuche-peak-climb-22-days/"
                          target="_blank"
                        >
                          Lobuche West
                        </a>
                      </td>
                      <td width="213">6,145 m</td>
                      <td width="213">Khumbu</td>
                    </tr>
                    <tr>
                      <td width="213">Larkya Peak</td>
                      <td width="213">6,010</td>
                      <td width="213">Manaslu</td>
                    </tr>
                    <tr>
                      <td width="213">ABI</td>
                      <td width="213">6,097</td>
                      <td width="213">Mahalangur</td>
                    </tr>
                    <tr>
                      <td width="213">Yubra Himal</td>
                      <td width="213">6,035</td>
                      <td width="213">Langtang</td>
                    </tr>
                    <tr>
                      <td width="213">Chhukung Ri</td>
                      <td width="213">5,550</td>
                      <td width="213">Khumbu</td>
                    </tr>
                    <tr>
                      <td width="213">Yala Peak</td>
                      <td width="213">5,732</td>
                      <td width="213">Langtang</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-6">
                <h2>Group B</h2>
                <table class=" table table-bordered table-striped">
                  <tbody>
                    <tr>
                      <td
                        style={{ background: "#007bff" }}
                        align="center"
                        width="213"
                      >
                        <span style={{ color: "#ffffff" }}>
                          <b>Peaks</b>
                        </span>
                      </td>
                      <td
                        style={{ background: "#007bff" }}
                        align="center"
                        width="213"
                      >
                        <span style={{ color: "#ffffff" }}>
                          <b>Altitude (meters)</b>
                        </span>
                      </td>
                      <td
                        style={{ background: "#007bff" }}
                        align="center"
                        width="213"
                      >
                        <span style={{ color: "#ffffff" }}>
                          <b>Location</b>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="213">Hiunchuli</td>
                      <td width="213">6,441</td>
                      <td width="213">Annapurna</td>
                    </tr>
                    <tr>
                      <td width="213">Singu Chuli (Flute Peak)</td>
                      <td width="213">6,501</td>
                      <td width="213">Annapurna</td>
                    </tr>
                    <tr>
                      <td width="213">
                        <a
                          href="https://caravanoutdoors.com/mera-peak-climb-17-days/"
                          target="_blank"
                        >
                          Mera Peak
                        </a>
                      </td>
                      <td width="213">6,654</td>
                      <td width="213">Khumbu</td>
                    </tr>
                    <tr>
                      <td width="213">Kusum Kangru</td>
                      <td width="213">6,367</td>
                      <td width="213">Khumbu</td>
                    </tr>
                    <tr>
                      <td width="213">Kwangde</td>
                      <td width="213">6,011</td>
                      <td width="213">Khumbu</td>
                    </tr>
                    <tr>
                      <td width="213">Chulu West</td>
                      <td width="213">6,200</td>
                      <td width="213">Manang</td>
                    </tr>
                    <tr>
                      <td width="213">Chulu East</td>
                      <td width="213">6,200</td>
                      <td width="213">Manang</td>
                    </tr>
                    <tr>
                      <td width="213">
                        <a
                          href="https://caravanoutdoors.com/island-peak-climb-16-days/"
                          target="_blank"
                        >
                          Imja Tse
                        </a>
                      </td>
                      <td width="213">6,160</td>
                      <td width="213">Khumbu</td>
                    </tr>
                    <tr>
                      <td width="213">Parchemuche</td>
                      <td width="213">6,187</td>
                      <td width="213">Rolwaling</td>
                    </tr>
                    <tr>
                      <td width="213">
                        <a
                          href="https://caravanoutdoors.com/lobuche-peak-climb-22-days/"
                          target="_blank"
                        >
                          Lobuche
                        </a>
                      </td>
                      <td width="213">6,119</td>
                      <td width="213">Khumbu</td>
                    </tr>
                    <tr>
                      <td width="213">Ramdung</td>
                      <td width="213">5,925</td>
                      <td width="213">Rolwaling</td>
                    </tr>
                    <tr>
                      <td width="213">
                        <a
                          href="https://caravanoutdoors.com/pisang-peak-climb-17-days/"
                          target="_blank"
                        >
                          Pisang Peak
                        </a>
                      </td>
                      <td width="213">6,019</td>
                      <td width="213">Manang</td>
                    </tr>
                    <tr>
                      <td width="213">Tharpu Chuli (Tent Peak)</td>
                      <td width="213">5,663</td>
                      <td width="213">Annapurna</td>
                    </tr>
                    <tr>
                      <td width="213">Khongma Tse (Mehra Peak)</td>
                      <td width="213">5,849</td>
                      <td width="213">Khumbu</td>
                    </tr>
                    <tr>
                      <td width="213">Ganja La Chuli (Naya Kamga)</td>
                      <td width="213">5,849</td>
                      <td width="213">Langtang</td>
                    </tr>
                    <tr>
                      <td width="213">Pokhalde</td>
                      <td width="213">5,806</td>
                      <td width="213">Khumbu</td>
                    </tr>
                    <tr>
                      <td width="213">Mardi Himal</td>
                      <td width="213">5,587</td>
                      <td width="213">Annapurna</td>
                    </tr>
                    <tr>
                      <td width="213">Paldor Peak</td>
                      <td width="213">5,896</td>
                      <td width="213">Langtang</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
