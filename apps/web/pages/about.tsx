import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { IllustrationRed } from '@nuldrive/web-layouts-landing-sections-illustration';

export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <IllustrationRed />
      </div>
    </div>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default About;