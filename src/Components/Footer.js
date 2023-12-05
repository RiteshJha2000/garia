import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer hide-for-print">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell medium-6 large-3">
            <h3>About</h3>
            <p>
              <a href="/about/">About Garia</a>
            </p>
            <p>
              <a href="/contact/">Contact Us</a>
            </p>
            <p>
              <a href="/find-dealer/">Find Dealer</a>
            </p>
            <p>
              <a href="/terms/">Terms</a>
            </p>
            <p>
              <a href="/privacypolicy/">Privacy Policy</a>
            </p>
            <p>
              <a href="/quality-policy/">Quality Policy</a>
            </p>
            <p>
              <a title="Cookie Declaration" href="/cookie-declaration/">
                Cookie Declaration
              </a>
            </p>
            <p>
              <a href="/careers/">Careers</a>
            </p>
            <p>
              <a href="http://www.gariautility.com">Garia Utility</a>
            </p>
            <p>
              <a href="/fleet/">Fleet</a>
            </p>
          </div>
          <div className="cell medium-6 large-3">
            <h3>Owners</h3>
            <p>
              <a href="/technical-documents/quick-guide/">Quick Guide</a>
            </p>
            <p>
              <a href="/technical-documents/owners-manual/">User's Manuals</a>
              <a href="/technical-documents/quick-guide/"></a>
            </p>
            <p>
              <a href="/warranty-registration/">Warranty Registration</a>
            </p>
            <p>
              <a href="mailto:support@garia.com">After Sales Support</a>
            </p>
            <p>
              <a href="/bulletins/">Bulletins</a>
            </p>
            <p>
              <a href="/safety-recall/">Safety Recall</a>
            </p>
            <p>
              <a href="https://shop.garia.com">Spare Parts</a>
            </p>
          </div>
          <div className="cell medium-6 large-3">
            <h3>Multimedia</h3>
            <p>
              <a href="/download-gallery/">Image Gallery</a>
            </p>
            <p>
              <a href="https://www.youtube.com/user/gariagolf/videos">Videos</a>
            </p>
            <h3>Dealers</h3>
            <p>
              <a href="https://extranet.garia.com/">Dealer Portal</a>
            </p>
          </div>
          <div className="cell medium-6 large-3">
            <h3>Multimedia</h3>
            <p>
              <a href="/download-gallery/">Image Gallery</a>
            </p>
            <p>
              <a href="https://www.youtube.com/user/gariagolf/videos">Videos</a>
            </p>
            <h3>Dealers</h3>
            <p>
              <a href="https://extranet.garia.com/">Dealer Portal</a>
            </p>
          </div>
          <div className="cell medium-6 large-3">
            <h3>Press</h3>
            <p>
              <a href="/press/press-releases/">Press Releases</a>
            </p>
            <p>
              <a href="/press/chosen-by-professionals/">Previous Ambassadors</a>
            </p>
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell medium-6">
            <div className="mailchimp-subscribe-form">
              <h3>Newsletter Sign Up</h3>
              <p>
                Subscribe to our newsletter to get the latest news about
                products, special offers and events straight to your inbox.
              </p>
              <form
                id="MailchimpForm_MailchimpForm"
                action="/home/MailchimpForm"
                method="post"
                enctype="application/x-www-form-urlencoded"
                novalidate="novalidate"
              >
                <p
                  id="MailchimpForm_MailchimpForm_error"
                  className="message "
                ></p>
                <fieldset>
                  <div
                    id="MailchimpForm_MailchimpForm_Email_Holder"
                    className="field text nolabel"
                  >
                    <div className="middleColumn">
                      <input
                        type="text"
                        name="Email"
                        className="text nolabel"
                        id="MailchimpForm_MailchimpForm_Email"
                        required="required"
                        aria-required="true"
                        placeholder="Enter your e-mail..."
                      />
                    </div>
                  </div>
                  <div
                    id="MailchimpForm_MailchimpForm_Consent_Holder"
                    className="field checkbox"
                  >
                    <input
                      type="checkbox"
                      name="Consent"
                      value="1"
                      className="checkbox"
                      id="MailchimpForm_MailchimpForm_Consent"
                    />
                    <label
                      className="right"
                      for="MailchimpForm_MailchimpForm_Consent"
                    >
                      Yes, I want to subscribe to the newsletter
                    </label>
                  </div>
                  <input
                    type="hidden"
                    name="SecurityID"
                    value="9ea1fbb2d3255ee9e188d2ab8f849f0002a8ebcc"
                    className="hidden"
                    id="MailchimpForm_MailchimpForm_SecurityID"
                  />
                </fieldset>
                <div className="Actions">
                  <input
                    type="submit"
                    name="action_mailchimp_subscribe"
                    value="Subscribe"
                    className="action"
                    id="MailchimpForm_MailchimpForm_action_mailchimp_subscribe"
                  />
                </div>
              </form>
              <div className="mailchimp-subscribe-form__small-print">
                <p>
                  When signing up for our newsletter you contemporary accept the
                  terms of consent. Please{" "}
                  <a
                    data-open="newsletter-terms-of-consent-modal"
                    className="modal__open-button"
                  >
                    read our terms of consent
                  </a>
                  .
                </p>
                <p>
                  You can unsubscribe to the newsletter at any time by clicking
                  the unsubscribe link in the bottom of the newsletters you
                  receive from us.
                </p>
              </div>
            </div>
            <div
              id="newsletter-terms-of-consent-modal"
              className="modal__overlay closed"
            >
              <div className="modal closed" id="modal">
                <button
                  className="modal__close-button close-button"
                  type="button"
                >
                  <span aria-hidden="true"></span>
                </button>
                <div className="modal-guts">
                  <h1>Terms of Consent</h1>
                  <p>
                    When signing up for our newsletter you give Garia ApS
                    consent to:
                  </p>
                  <ul>
                    <li>
                      Send you emails with news about products, special offers
                      and events
                    </li>
                    <li>
                      Send you automatically generated emails based on data
                      about you and your behaviour on our websites
                    </li>
                    <li>
                      Use data about you and your behaviour on our websites to
                      show you ads on other websites, social media, text
                      messages and other digital channels
                    </li>
                    <li>
                      Use data about you and your behaviour on our websites to
                      optimise website performance
                    </li>
                    <li>
                      Correlate data about you with data Garia ApS already has
                      or retrieves from other sources
                    </li>
                    <li>
                      Share data about you within the Garia ApS organisation
                    </li>
                    <li>
                      Share data with partners of Garia ApS if you make a
                      purchase from Garia ApS
                    </li>
                    <li>
                      Contact you to ask you to update you consent and/or data.
                      That also concerns orientation and enquiry of update of
                      consent because of new products, new collaborators or new
                      ways and medias to contact you on.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cell medium-5">
            <div className="follow-links">
              <a href="https://www.instagram.com/gariagolfcar/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1536 1536"
                >
                  <path
                    d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279zm108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65zM768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5zm768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/245183" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1.03em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1536 1504"
                >
                  <path
                    d="M349 497v991H19V497h330zm21-306q1 73-50.5 122T184 362h-2q-82 0-132-49T0 191q0-74 51.5-122.5T186 20t133 48.5T370 191zm1166 729v568h-329V958q0-105-40.5-164.5T1040 734q-63 0-105.5 34.5T871 854q-11 30-11 81v553H531q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52t87-43.5T1157 474q171 0 275 113.5T1536 920z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="https://twitter.com/gariagolfcar" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1.25em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1600 1280"
                >
                  <path
                    d="M1588 152q-67 98-162 167q1 14 1 42q0 130-38 259.5T1273.5 869T1089 1079.5t-258 146t-323 54.5q-271 0-496-145q35 4 78 4q225 0 401-138q-105-2-188-64.5T189 777q33 5 61 5q43 0 85-11q-112-23-185.5-111.5T76 454v-4q68 38 146 41q-66-44-105-115T78 222q0-88 44-163q121 149 294.5 238.5T788 397q-8-38-8-74q0-134 94.5-228.5T1103 0q140 0 236 102q109-21 205-78q-37 115-142 178q93-10 186-50z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/gariagolfcar/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="0.54em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 896 1664"
                >
                  <path
                    d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC808pIU--L6HOK-cQ3cDGzw"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="0.86em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1536 1792"
                >
                  <path
                    d="M971 1244v211q0 67-39 67q-23 0-45-22v-301q22-22 45-22q39 0 39 67zm338 1v46h-90v-46q0-68 45-68t45 68zm-966-218h107v-94H138v94h105v569h100v-569zm288 569h89v-494h-89v378q-30 42-57 42q-18 0-21-21q-1-3-1-35v-364h-89v391q0 49 8 73q12 37 58 37q48 0 102-61v54zm429-148v-197q0-73-9-99q-17-56-71-56q-50 0-93 54V933h-89v663h89v-48q45 55 93 55q54 0 71-55q9-27 9-100zm338-10v-13h-91q0 51-2 61q-7 36-40 36q-46 0-46-69v-87h179v-103q0-79-27-116q-39-51-106-51q-68 0-107 51q-28 37-28 116v173q0 79 29 116q39 51 108 51q72 0 108-53q18-27 21-54q2-9 2-58zM790 525V315q0-69-43-69t-43 69v210q0 70 43 70t43-70zm719 751q0 234-26 350q-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46T53 1626q-26-112-26-350q0-234 26-350q14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350zM511 0h102L492 399v271H392V399q-14-74-61-212Q294 84 266 0h106l71 263zm370 333v175q0 81-28 118q-38 51-106 51q-67 0-105-51q-28-38-28-118V333q0-80 28-117q38-51 105-51q68 0 106 51q28 37 28 117zm335-162v499h-91v-55q-53 62-103 62q-46 0-59-37q-8-24-8-75V171h91v367q0 33 1 35q3 22 21 22q27 0 57-43V171h91z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
