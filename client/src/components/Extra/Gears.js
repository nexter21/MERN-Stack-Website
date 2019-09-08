import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class Gears extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
    return (
      <section className="gears">
        <Helmet>
          <title>Gears And Equipment</title>
        </Helmet>
        <div className="container">
          <h1>Gears and Equipments</h1>
          <h2>Trekking</h2>

          <p style={{ textAlign: "left" }}>
            <br />
            <span style={{ textDecoration: "underline" }}>
              <em>
                <strong>FOOTWEAR</strong>
              </em>
            </span>
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li style={{ textAlign: "left" }}>Snickers</li>
            <li style={{ textAlign: "left" }}>
              Trekking Boots (Comfortable and well-broke in)
            </li>
            <li style={{ textAlign: "left" }}>
              2/3 Pairs of Thin Socks (Cotton, Nylon or Capilene)
            </li>
            <li style={{ textAlign: "left" }}>
              2/3 Pairs of Thick Socks (Wool)
            </li>
          </ul>
          <p style={{ textAlign: "left" }}>
            <strong>
              <span style={{ textDecoration: "underline" }}>
                <em>CLOTHING</em>
              </span>
            </strong>
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li style={{ textAlign: "left" }}>Hiking Shorts</li>
            <li style={{ textAlign: "left" }}>
              Long Waterproof Trousers/Light Nylon Pants
            </li>
            <li style={{ textAlign: "left" }}>
              2/3 pairs of T-Shirt (Light and Breathable)
            </li>
            <li style={{ textAlign: "left" }}>
              Insulated down Jacket (Water/Air proof)
            </li>
            <li style={{ textAlign: "left" }}>
              Hard Shell Jacket with Hood Optional (Water/Air proof)
            </li>
            <li style={{ textAlign: "left" }}>
              Fleece Top (Warm Inner Wear) Pair of GLOVES
            </li>
            <li style={{ textAlign: "left" }}>Headlamp Optional</li>
            <li style={{ textAlign: "left" }}>Sun Hat</li>
            <li style={{ textAlign: "left" }}>Neck Gaiter</li>
            <li style={{ textAlign: "left" }}>Sun Glasses (100% UV/IR)</li>
            <li style={{ textAlign: "left" }}>Suns-cream (SPF 30+)</li>
            <li style={{ textAlign: "left" }}>Equipment</li>
            <li style={{ textAlign: "left" }}>
              Sleeping Bag (0&deg;C &ndash; 10&deg;C)
            </li>
            <li style={{ textAlign: "left" }}>Backpack</li>
            <li style={{ textAlign: "left" }}>Trekking Poles</li>
            <li style={{ textAlign: "left" }}>Water Bottles</li>
            <li style={{ textAlign: "left" }}>
              Hand/Foot Warmers Optional Cell phone Charging 3 Pin/2 Pin Socket
            </li>
            <li style={{ textAlign: "left" }}>Toiletry Items</li>
            <li style={{ textAlign: "left" }}>First Aid/medicines</li>
          </ul>
          <p style={{ textAlign: "center" }}>
            <br />
            <span style={{ fontSize: "14px" }}>
              <strong>
                <span style={{ textDecoration: "underline" }}>
                  <em>Climbing</em>
                </span>
              </strong>
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <br />
            <strong>
              <span style={{ textDecoration: "underline" }}>
                <em>EQUIPMENT</em>
              </span>
            </strong>
            <br />
            <strong>
              <span style={{ textDecoration: "underline" }}>
                Alpine Climbing Harness
              </span>
            </strong>{" "}
            &ndash; A good climbing harness should be light and simple in
            design, easy to put on and take off with gloves on, with positively
            foolproof locking features.
          </p>
          <p style={{ textAlign: "justify" }}>
            <br />
            <span style={{ textDecoration: "underline" }}>
              <strong>Crampons</strong>
            </span>{" "}
            &ndash; Crampons must fit boots perfectly; steel crampons with
            anti-balling and ability to toe point positively and safely into
            ice. The lighter the better &ndash; extra weight on your feet is
            much more strenuous than anywhere else on your body.
          </p>
          <p style={{ textAlign: "justify" }}>
            <br />
            <strong>
              <span style={{ textDecoration: "underline" }}>Ice axe</span>
            </strong>{" "}
            &ndash; Ice axe should be versatile and light. A general purpose
            technical ice axe (T rated) but not too aggressive.
          </p>
          <p style={{ textAlign: "justify" }}>
            Ascender: Ascender or Jamar, a mechanical device used for ascending
            on a rope; must be suitable to be used with gloves or mittens.
            Practice using it with thick gloves on again and again.
          </p>
          <p style={{ textAlign: "justify" }}>
            <br />
            <strong>
              <span style={{ textDecoration: "underline" }}>
                Multi-LED Head Lamp
              </span>
            </strong>{" "}
            &ndash; Multi-LED Head Lamp and spare batteries are essential; we do
            not recommend single bulb lights due to lower reliability.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ textDecoration: "underline" }}>
              <strong> Carabiners</strong>
            </span>{" "}
            &ndash; Minimum 2 locking carabineers, 1 large and 1 small and 4
            regular.
            <br />
            Rappel Device &ndash; Figure 8, ACT or similar; be familiar with
            Munter Hitch as it may save your life if you lose your rappel device
            (which happens a lot)
          </p>
          <p style={{ textAlign: "justify" }}>
            <br />
            <strong>
              <span style={{ textDecoration: "underline" }}>
                Trekking Poles
              </span>
            </strong>{" "}
            &ndash; Very handy for the approach; adjustable types are the best
            (preferably with a simple outside locking mechanism)
            <br />
            <strong>
              <span style={{ textDecoration: "underline" }}>Slings</span>
            </strong>{" "}
            &ndash; One 3m (10ft) and three 2m (6ft)
          </p>
          <p style={{ textAlign: "justify" }}>
            <br />
            <strong>
              <span style={{ textDecoration: "underline" }}>Prusik loops</span>
            </strong>{" "}
            &ndash; Never hurts to carry a few (e.g. 0.6m and 1.2m), they come
            in handy in many situations
            <br />
            Masks, hoses, and regulators &ndash; Good quality for your safety.
          </p>
          <p style={{ textAlign: "justify" }}>
            <br />
            <strong>
              <span style={{ textDecoration: "underline" }}>Altimeter</span>{" "}
            </strong>
            &ndash; ABC watch or more advanced GPS watches will do the trick.
            Watch for battery life
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>
              <span style={{ textDecoration: "underline" }}>
                limbing helmet
              </span>
            </strong>{" "}
            &ndash; Climbing helmet is essential safety gear for crossing areas
            under rocks and ice cliffs; light weight is essential.
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>
              <span style={{ textDecoration: "underline" }}>
                <em>CLOTHING</em>
              </span>
            </strong>
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>
              <span style={{ textDecoration: "underline" }}>Upper Body</span>
            </strong>
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li style={{ textAlign: "justify" }}>
              1-2 (medium insulation) short-sleeve Merino shirt (e.g. Icebreaker
              Merino 150 or lightweight 200, Odlo Revolution medium)
            </li>
            <li style={{ textAlign: "justify" }}>
              2 long-sleeve Merino shirts (e.g. Icebreaker Merino 150 and/or 200
              or Odlo Revolution, one medium and one thick)
            </li>
            <li style={{ textAlign: "justify" }}>
              One fleece pullover, medium weight.
            </li>
            <li style={{ textAlign: "justify" }}>One fleece jacket.</li>
            <li style={{ textAlign: "justify" }}>
              One hard-shell waterproof Gore-Tex jacket with large hood to
              accommodate the climbing helmet. The Arc&rsquo;teryx SV range is
              expensive but offers excellent wind and water protection.
            </li>
            <li style={{ textAlign: "justify" }}>
              Lightweight down jacket for chilly days in base camp or warm layer
              when stopping for short breaks.
            </li>
            <li style={{ textAlign: "justify" }}>
              One very warm expedition grade goose-down (duvet) jacket with hood
              or a down suit if you prefer, for high altitude use (e.g. North
              face, Rab etc.)
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            <strong>
              <span style={{ textDecoration: "underline" }}>Lower Body</span>
            </strong>
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li style={{ textAlign: "justify" }}>
              Merino underwear briefs (Icebreaker, Odlo etc.)
            </li>
            <li style={{ textAlign: "justify" }}>
              One pair walking shorts Optional
            </li>
            <li style={{ textAlign: "justify" }}>
              One pair walking trousers for trekking and around camp
            </li>
            <li style={{ textAlign: "justify" }}>
              Two pair thermal Merino bottoms (Icebreaker 150 or 200 or Odlo
              Revolution)
            </li>
            <li style={{ textAlign: "justify" }}>
              One pair very thick thermal Merino bottoms (Icebreaker 200, Odlo
              Revolution Thick)
            </li>
            <li style={{ textAlign: "justify" }}>
              One pair polar fleece trousers or similar mid layer trousers
            </li>
            <li style={{ textAlign: "justify" }}>
              One pair Gore-Tex (over)trousers or bibs. Waterproof/breathable
              with full side zips
            </li>
            <li style={{ textAlign: "justify" }}>
              One pair of Goose-down trousers or bibs. You may prefer a down
              suit (North face, Rab, etc.)
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            <strong>
              <span style={{ textDecoration: "underline" }}>Head</span>
            </strong>
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li style={{ textAlign: "justify" }}>
              Warm wool or synthetic hat that covers your ears
            </li>
            <li style={{ textAlign: "justify" }}>Balaclava or face mask</li>
            <li style={{ textAlign: "justify" }}>Scarf or neck sleeve</li>
            <li style={{ textAlign: "justify" }}>
              Bandana or head scarf is useful for dusty conditions
            </li>
            <li style={{ textAlign: "justify" }}>
              Ball cap or brimmed sun cap
            </li>
            <li style={{ textAlign: "justify" }}>
              Glacier Sunglass with side shields (2x)
            </li>
            <li style={{ textAlign: "justify" }}>
              One pair of ski goggles (optional with light and dark lens) for
              windy conditions
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            <strong>
              <span style={{ textDecoration: "underline" }}>Hands</span>
            </strong>
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li style={{ textAlign: "justify" }}>
              One pair lightweight liner gloves. These will be worn when tying
              knots etc.
            </li>
            <li style={{ textAlign: "justify" }}>
              Mitten: Goretexovermitts (that block the wind) matched with the
              very warm down mitts, spare mitts might also be useful (For
              instance, Mountain Equipment Redline)
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            <strong>
              <span style={{ textDecoration: "underline" }}>Feet</span>
            </strong>
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li style={{ textAlign: "justify" }}>
              One pair of plastic boots suitable for &gt;8000m. (For instance La
              Sportiva Olympus Mons, Millet or equivalent good quality plastic
            </li>
            <li style={{ textAlign: "justify" }}>
              shells with inner boots; avoid tight fit with heavy socks)
            </li>
            <li style={{ textAlign: "justify" }}>
              One pair sturdy leather or synthetic (Gortex) hiking boots with
              good ankle support for the walk to base camp
            </li>
            <li style={{ textAlign: "justify" }}>
              One pair cross-trainers, running shoes and/or sandals for
              Kathmandu and in camp
            </li>
            <li style={{ textAlign: "justify" }}>
              One pair down booties Optional
            </li>
            <li style={{ textAlign: "justify" }}>
              Two pair med-heavy poly or wool socks
            </li>
            <li style={{ textAlign: "justify" }}>
              Two Pair of liner socks. Polypropylene or wool
            </li>
            <li style={{ textAlign: "justify" }}>
              Vapor barrier liner socks or plastic bread-bags (matter of
              preference)
            </li>
            <li style={{ textAlign: "justify" }}>
              Two pair lightweight trekking socks, poly or wool
            </li>
            <li style={{ textAlign: "justify" }}>
              Light Merino wool or cotton socks for in town
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
