import { WebUtilAccordion } from 'libs/web/util/accordion/src';

import styles from './WebLayoutsLandingSectionsFaq.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsFaqProps {}

export function WebLayoutsLandingSectionsFaq(
  props: WebLayoutsLandingSectionsFaqProps
) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-700">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-20">
            <h2 data-aos="fade-up" className="h2">
              Questions & Answers
            </h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto pl-12">
            <WebUtilAccordion title="Do I need coding knowledge to use this product?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </WebUtilAccordion>
            <WebUtilAccordion title="Do you have student or non-profit discounts?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </WebUtilAccordion>
            <WebUtilAccordion title="Is there a way to become an Affiliate reseller of this product?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </WebUtilAccordion>
            <WebUtilAccordion
              title="What is the difference between the Free and Paid versions?"
              active
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </WebUtilAccordion>
            <WebUtilAccordion title="How can I change the owner of a workspace?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </WebUtilAccordion>
            <span
              className="block border-t border-slate-700"
              aria-hidden="true"
            ></span>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsFaq;
