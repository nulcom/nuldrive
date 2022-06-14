import { ReactElement } from 'react';
import { WebLayoutsLandingUi } from '@nuldrive/web/layouts/landing/ui';
import { WebLayoutsLandingIllustration } from '@nuldrive/web-layouts-landing-sections-illustration';
import { WebLayoutsLandingSectionsSignUp } from 'libs/web/layouts/landing/sections/sign-up/src';

export interface SignUpProps {}
export function SignUp(props: SignUpProps) {
  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <WebLayoutsLandingIllustration />
      </div>
      <WebLayoutsLandingSectionsSignUp />
    </main>
  );
}

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsLandingUi>{page}</WebLayoutsLandingUi>;
};

export default SignUp;