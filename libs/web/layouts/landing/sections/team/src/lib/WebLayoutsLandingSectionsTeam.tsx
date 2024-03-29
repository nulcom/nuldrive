import { WebUtilImageLoader } from '@nuldrive/web/util/imageLoader';

import styles from './WebLayoutsLandingSectionsTeam.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsTeamProps {}

export function WebLayoutsLandingSectionsTeam(
  props: WebLayoutsLandingSectionsTeamProps
) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-700">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 data-aos="fade-up" className="h2 mb-4">
              Our passionate team
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-xl text-slate-300"
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consequat.
            </p>
          </div>

          {/* Team members */}
          <div
            className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3"
            data-aos-id-team
          >
            {/* 1st member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <WebUtilImageLoader
                  className="rounded-full mb-4"
                  src="https://r2.eriascdn.com/team-member-01.jpg"
                  width="120"
                  height="120"
                  alt="Team member 01"
                />
                <h4 className="text-xl font-bold mb-1 mt-4">Mark Lamprecht</h4>
                <div className="text-blue-600 font-medium mb-2">
                  CEO & Co-founder
                </div>
                <p className="text-slate-300 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-slate-300 font-medium">
                  <a className="text-slate-300 hover:underline" href="#0">
                    Twitter
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    GitHub
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="150"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <WebUtilImageLoader
                  className="rounded-full mb-4"
                  src="https://r2.eriascdn.com/team-member-02.jpg"
                  width="120"
                  height="120"
                  alt="Team member 02"
                />
                <h4 className="text-xl font-bold mb-1 mt-4">
                  Jessie Pietrasiak
                </h4>
                <div className="text-blue-600 font-medium mb-2">
                  CTO & Co-founder
                </div>
                <p className="text-slate-300 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-slate-300 font-medium">
                  <a className="text-slate-300 hover:underline" href="#0">
                    Twitter
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    GitHub
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <WebUtilImageLoader
                  className="rounded-full mb-4"
                  src="https://r2.eriascdn.com/team-member-03.jpg"
                  width="120"
                  height="120"
                  alt="Team member 03"
                />
                <h4 className="text-xl font-bold mb-1 mt-4">Marina Hoffman</h4>
                <div className="text-blue-600 font-medium mb-2">
                  Community Manager
                </div>
                <p className="text-slate-300 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-slate-300 font-medium">
                  <a className="text-slate-300 hover:underline" href="#0">
                    Twitter
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    GitHub
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 4th member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="450"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <WebUtilImageLoader
                  className="rounded-full mb-4"
                  src="https://r2.eriascdn.com/team-member-04.jpg"
                  width="120"
                  height="120"
                  alt="Team member 04"
                />
                <h4 className="text-xl font-bold mb-1 mt-4">
                  Anthony McGargle
                </h4>
                <div className="text-blue-600 font-medium mb-2">
                  Lead Front-end Engineer
                </div>
                <p className="text-slate-300 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-slate-300 font-medium">
                  <a className="text-slate-300 hover:underline" href="#0">
                    Twitter
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    GitHub
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 5th member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <WebUtilImageLoader
                  className="rounded-full mb-4"
                  src="https://r2.eriascdn.com/team-member-05.jpg"
                  width="120"
                  height="120"
                  alt="Team member 05"
                />
                <h4 className="text-xl font-bold mb-1 mt-4">
                  Jessie Pietrasiak
                </h4>
                <div className="text-blue-600 font-medium mb-2">
                  Head of Design
                </div>
                <p className="text-slate-300 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-slate-300 font-medium">
                  <a className="text-slate-300 hover:underline" href="#0">
                    Twitter
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    GitHub
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 6th member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="750"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <WebUtilImageLoader
                  className="rounded-full mb-4"
                  src="https://r2.eriascdn.com/team-member-06.jpg"
                  width="120"
                  height="120"
                  alt="Team member 06"
                />
                <h4 className="text-xl font-bold mb-1 mt-4">Marina Hoffman</h4>
                <div className="text-blue-600 font-medium mb-2">
                  Front-end Engineer
                </div>
                <p className="text-slate-300 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-slate-300 font-medium">
                  <a className="text-slate-300 hover:underline" href="#0">
                    Twitter
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    GitHub
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 7th member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="900"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <WebUtilImageLoader
                  className="rounded-full mb-4"
                  src="https://r2.eriascdn.com/team-member-07.jpg"
                  width="120"
                  height="120"
                  alt="Team member 07"
                />
                <h4 className="text-xl font-bold mb-1 mt-4">Tamara Hastings</h4>
                <div className="text-blue-600 font-medium mb-2">
                  Product Developer
                </div>
                <p className="text-slate-300 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-slate-300 font-medium">
                  <a className="text-slate-300 hover:underline" href="#0">
                    Twitter
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    GitHub
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 8th member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="1050"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <WebUtilImageLoader
                  className="rounded-full mb-4"
                  src="https://r2.eriascdn.com/team-member-08.jpg"
                  width="120"
                  height="120"
                  alt="Team member 08"
                />
                <h4 className="text-xl font-bold mb-1 mt-4">Rachel Vervack</h4>
                <div className="text-blue-600 font-medium mb-2">
                  Senior Data Scientist
                </div>
                <p className="text-slate-300 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-slate-300 font-medium">
                  <a className="text-slate-300 hover:underline" href="#0">
                    Twitter
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    GitHub
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 9th member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="1200"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <WebUtilImageLoader
                  className="rounded-full mb-4"
                  src="https://r2.eriascdn.com/team-member-09.jpg"
                  width="120"
                  height="120"
                  alt="Team member 09"
                />
                <h4 className="text-xl font-bold mb-1 mt-4">
                  Andrew Laurencio
                </h4>
                <div className="text-blue-600 font-medium mb-2">
                  Front-end Engineer
                </div>
                <p className="text-slate-300 text-center mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm text-slate-300 font-medium">
                  <a className="text-slate-300 hover:underline" href="#0">
                    Twitter
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    GitHub
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-300 hover:underline" href="#0">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsTeam;
