import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class OurTerms extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="ourTerms">
        <Helmet>
          {" "}
          <title>Terms And Conditions</title>
        </Helmet>
        <h2>Terms And Condition</h2>
        <div className="container">
          <ul className="list-group">
            <li className="list-group-item">
              It is a fundamental condition that you acknowledge that this is an
              adventure trip. This requires some flexibility. The day to day
              itinerary is taken as a guideline only. We cannot be hold
              responsible for any delays caused by International or domestic
              flights, strikes, Government regulations, weather or natural
              casualties etc. In such cases, Caravan Outdoors shall be
              responsible for providing suitable alternatives which could be
              decided upon mutual agreement. If an agreement cannot be made,
              Caravan Outdoors shall be only responsible for refund after
              deducting expenses already incurred.
            </li>
            <li className="list-group-item">
              Caravan Outdoors will not be hold responsible for the injury or
              death of the participant due to unforseen events or circumstances.
              We assure the trips will be safe and operated by the experts,
              however, injury or death caused during the trip, Caravan Outdoors
              won&#8217;t be liable for it.
            </li>
            <li className="list-group-item">
              Your booking will be confirmed by email once we have received the
              deposit and the signed copy of booking form/form submitted via
              website and contract. While booking, you must pay 20% of the trip
              cost, non-refundable, as an advance deposit. The deposit can be
              made by bank transfer or by Credit Card (Visa or MasterCard).
              <br />
              The due must be paid before the trip departure or after you first
              arrive in Kathmandu.
            </li>
            <li className="list-group-item">
              If due payment is made by the Credit card, a 4% surcharge will be
              levied as per the service provider’s (Alpine Travel Service,
              Kathmandu) policy. The surcharge is levied to provide consumer
              protection for services purchased, in accordance with the terms
              and conditions pertaining to the credit card being used.
              <br />
              If you wish to pay in cash, you can exchange yours into local
              currency at Kathmandu.
            </li>
            <li className="list-group-item">
              <strong>Cancellation Fee:</strong> If you wish to cancel your trip
              30 days or before the trip departure, the non-refundable deposit
              will be kept as the cancellation fee.
            </li>
          </ul>

          <div>
            <ul className="list-group">
              <li className="list-group-item">
                You must carry proof of insurance (e.g. your insurance
                certificate) during the entire trip. This should include
                adequate cover for baggage, medical expenses, cancellation,
                helicopter evacuation and emergency repatriation. If you fail to
                provide the proof at the start of the trip, you will be required
                to take out a suitable policy at the time. If not, you must
                carry a credit card with <strong>USD 5,000</strong> limit to
                cover for any personal insurance coverage! The dealings with the
                insurance agency will entirely be on you (claimant).
              </li>
              <li className="list-group-item">
                We personally do not advice to purchase Insurance after arriving
                in Nepal. You must carry a valid passport and have obtained the
                appropriate visas while traveling. Caravan Outdoors do not
                accept responsibility for your lacking to provide necessary
                document at the airport.
              </li>
              <li className="list-group-item">
                You must be in good health and physical condition. It is a
                prerequisite that you inform about your medical condition or
                prior illness in advance. It is also important that you consult
                your doctor for vaccination and other medical requirements for
                your trip before your departure from the home country.
                <br />
                Caravan Outdoors reserves the right to require a medical
                certificate prior to booking your trip or departure.
              </li>
              <li className="list-group-item">
                If you do not show up at the meeting point specified on the
                agreed date, we will assume you have been delayed and will wait
                for you to contact us with your new expected arrival date. If
                you do not contact us within 48 hours we will assume you have
                cancelled the tour. There is no refund of any money paid.
              </li>
              <li className="list-group-item">
                The trip will not be cancelled unless we are forced to do so due
                to unusual or unforeseeable circumstances (force majeure), such
                as; natural disaster, political unrest or war.{" "}
              </li>
              <div>
                If we cancel the tour we will promptly refund all payments made
                to us including the deposit (less the unrecoverable costs such
                as air tickets, hotels cancellation). We shall not be liable to
                refund any additional expenses that you may have incurred (such
                as insurance, visas, vaccinations and other incidental costs).
              </div>
              <li className="list-group-item">
                In case, the trip is halted or omitted due to your early return
                upon your own wish or causes, Caravan Outdoors shall not be
                liable to any refund of the days not utilized. You have to pay
                for the hotel or any extra costs incurred after leaving the
                itinerary.
              </li>
              <li className="list-group-item">
                The information provided in the website, brochure or promotional
                documents are only for informational purpose. Changes made
                during the trip in contrary to the information provided because
                of exceptional weather, flight cancellations, sickness or other
                unforeseeable circumstances, no refunds are offered for any
                unused services.
              </li>
              <li className="list-group-item">
                You agree to abide by the authority of the trip leader during
                the trip. Signing up with Caravan Outdoors implies your
                acceptance for the same. You must consult and seek for the
                leader’s advice during the trip before doing anything not
                prescribed in the itinerary. If you attract any harm or loss
                from your personal choices, neither Caravan Outdoors nor the
                trip leader will be accountable for it.
              </li>
              <li className="list-group-item">
                If you have a complaint that cannot be dealt with immediately
                with the trip leader or if you are not satisfied with the
                response, please notify us in writing within 10 days of the trip
                completion. We shall try to agree on a settlement; this process
                shall be governed by the laws of Nepal.
              </li>
              <li className="list-group-item">
                When making your booking it is implied and accepted that you
                have read and understood all these booking conditions and agree
                to abide by them.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
