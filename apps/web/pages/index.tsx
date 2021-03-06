import type { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingHero } from '@nuldrive/web-layouts-landing-sections-hero';
import { WebLayoutsLandingSectionsProcess } from '@nuldrive/web/layouts/landing/sections/process';
import { WebLayoutsLandingSectionsFeaturesHome } from '@nuldrive/web/layouts/landing/sections/features-home';
import { WebLayoutsLandingSectionsTabs } from '@nuldrive/web/layouts/landing/sections/tabs';
import { WebLayoutsLandingSectionsTarget } from '@nuldrive/web/layouts/landing/sections/target';
import { WebLayoutsLandingSectionsNews } from '@nuldrive/web/layouts/landing/sections/news';
import { WebLayoutsLandingSectionsNewsletter } from '@nuldrive/web/layouts/landing/sections//newsletter';
import { WebLayoutsLandingSectionsFeaturesExplore } from '@nuldrive/web/layouts/landing/sections/features-explore';
import { WebLayoutsLandingSectionsFeaturesWorld } from '@nuldrive/web/layouts/landing/sections/features-world';

import styles from './index.module.css';

export interface IndexProps {}

export function Index(props: IndexProps) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingHero />
      <WebLayoutsLandingSectionsFeaturesExplore />
      <WebLayoutsLandingSectionsProcess />
      <WebLayoutsLandingSectionsFeaturesHome />
      <WebLayoutsLandingSectionsFeaturesWorld />
      <WebLayoutsLandingSectionsTabs />
      <WebLayoutsLandingSectionsTarget />
      <WebLayoutsLandingSectionsNews />
      <WebLayoutsLandingSectionsNewsletter />
    </main>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default Index;
