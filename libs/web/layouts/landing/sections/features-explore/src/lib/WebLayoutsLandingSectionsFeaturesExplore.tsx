import React, { useState, useRef, useEffect } from 'react';
import { WebUtilTransition } from '@nuldrive/web/util/transition';
import { WebUtilImageLoader } from '@nuldrive/web/util/imageLoader';

import styles from './WebLayoutsLandingSectionsFeaturesExplore.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsLandingSectionsFeaturesExploreProps {}

export function WebLayoutsLandingSectionsFeaturesExplore(
  props: WebLayoutsLandingSectionsFeaturesExploreProps
) {
  const [tab, setTab] = useState(1);

  const tabs = useRef<any>(null);

  const heightFix = () => {
    if (tabs.current.children[tab - 1]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + 'px';
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-slate-700 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 data-aos="fade-up" className="h2 mb-4">
              How Simple works
            </h1>
            <p data-aos="fade-down" className="text-xl text-slate-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          {/* Top image */}
          <div className="pb-12 md:pb-16 opacity-80">
            <WebUtilImageLoader
              src="https://r2.eriascdn.com/features-top-image.png"
              width={1104}
              height={325}
              alt="Features top"
            />
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-slate-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="grid mb-8 md:mb-0 gap-2">
                <div
                  className={`hover:border rounded-lg ${
                    tab == 1
                      ? 'border-gray-600 border'
                      : 'border-transparent border'
                  }`}
                >
                  <button
                    className={`flex items-center text-lg p-5 hover:bg-slate-800 rounded-lg border transition duration-300 ease-in-out ${
                      tab !== 1
                        ? 'bg-slate-900 shadow-md border-gray-600 hover:border-gray-500 hover:shadow-lg'
                        : 'bg-slate-800 border-gray-600'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(1);
                    }}
                  >
                    <div>
                      <div className="font-bold leading-snug tracking-tight mb-1">
                        Building the Simple ecosystem
                      </div>
                      <div className="text-gray-500">
                        Take collaboration to the next level with security and
                        administrative features built for teams.
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-slate-700 text-purple-600 rounded-full shadow shrink-0 ml-3">
                      <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  className={`hover:border  rounded-lg ${
                    tab == 2
                      ? 'border-gray-600 border'
                      : 'border-transparent border'
                  }`}
                >
                  <button
                    className={`flex items-center text-lg p-5 rounded border hover:bg-slate-800 transition duration-300 ease-in-out ${
                      tab !== 2
                        ? 'bg-slate-900 shadow-md  hover:shadow-lg'
                        : 'bg-slate-800'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(2);
                    }}
                  >
                    <div>
                      <div className="font-bold leading-snug tracking-tight mb-1">
                        Building the Simple ecosystem
                      </div>
                      <div className="text-gray-500">
                        Take collaboration to the next level with security and
                        administrative features built for teams.
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-slate-700 text-purple-600 rounded-full shadow shrink-0 ml-3">
                      <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  className={`hover:border rounded-lg ${
                    tab == 3
                      ? 'border-gray-600 border'
                      : 'border-transparent border'
                  }`}
                >
                  <button
                    className={`flex items-center text-lg p-5 hover:bg-slate-800 rounded border transition duration-300 ease-in-out ${
                      tab !== 3
                        ? 'bg-slate-900 shadow-md border-gray-600 hover:border-gray-500 hover:shadow-lg'
                        : 'bg-slate-800 border-gray-600'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(3);
                    }}
                  >
                    <div>
                      <div className="font-bold leading-snug tracking-tight mb-1">
                        Building the Simple ecosystem
                      </div>
                      <div className="text-gray-500">
                        Take collaboration to the next level with security and
                        administrative features built for teams.
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-slate-700 text-purple-600 rounded-full shadow shrink-0 ml-3">
                      <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <WebUtilTransition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <WebUtilImageLoader
                      className="md:max-w-none mx-auto rounded"
                      src="https://r2.eriascdn.com/features-home-bg-01.png"
                      width={500}
                      height={375}
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float top-1/4"
                      src="https://r2.eriascdn.com/features-home-element-01.png"
                      width={500}
                      height={147}
                      alt="Element 01"
                      style={{ top: '22%' }}
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500 top-[39%]"
                      src="https://r2.eriascdn.com/features-home-element-02.png"
                      width={500}
                      height={158}
                      alt="Element 02"
                      style={{ top: '39%' }}
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
                      src="https://r2.eriascdn.com/features-home-element-03.png"
                      width={500}
                      height={167}
                      alt="Element 03"
                      style={{ top: '77%' }}
                    />
                  </div>
                </WebUtilTransition>
                {/* Item 2 */}
                <WebUtilTransition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <WebUtilImageLoader
                      className="md:max-w-none mx-auto rounded"
                      src="https://r2.eriascdn.com/features-home-bg-01.png"
                      width={500}
                      height={375}
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
                      src="https://r2.eriascdn.com/features-home-element-01.png"
                      width="500"
                      height="167"
                      alt="Element 03"
                      style={{ top: '18%' }}
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500"
                      src="https://r2.eriascdn.com/features-home-element-02.png"
                      width="500"
                      height="158"
                      alt="Element 02"
                      style={{ top: '40%' }}
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src="https://r2.eriascdn.com/features-home-element-03.png"
                      width="500"
                      height="147"
                      alt="Element 01"
                      style={{ top: '79%' }}
                    />
                  </div>
                </WebUtilTransition>
                {/* Item 3 */}
                <WebUtilTransition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                 <div className="relative inline-flex flex-col">
                    <WebUtilImageLoader
                      className="md:max-w-none mx-auto rounded"
                      src="https://r2.eriascdn.com/features-home-bg-01.png"
                      width={500}
                      height={375}
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
                      src="https://r2.eriascdn.com/features-home-element-01.png"
                      width="500"
                      height="167"
                      alt="Element 03"
                      style={{ top: '18%' }}
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500"
                      src="https://r2.eriascdn.com/features-home-element-02.png"
                      width="500"
                      height="158"
                      alt="Element 02"
                      style={{ top: '40%' }}
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src="https://r2.eriascdn.com/features-home-element-03.png"
                      width="500"
                      height="147"
                      alt="Element 01"
                      style={{ top: '79%' }}
                    />
                  </div>
                </WebUtilTransition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLayoutsLandingSectionsFeaturesExplore;
