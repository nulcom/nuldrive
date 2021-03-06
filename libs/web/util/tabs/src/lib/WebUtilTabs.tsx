import { Plus, EllipsisH, File } from '@nuldrive/web/util/icons';

import styles from './WebUtilTabs.module.css';

/* eslint-disable-next-line */
export interface WebUtilTabsProps {}

export function WebUtilTabs(props: WebUtilTabsProps) {
  return (
    <div className="grow overflow-scroll tabs_component">
      <div className="overflow-scroll bg-[#ED7547] z-100">
        <div className="flex h-full">
          <div className="flex items-center bg-cyan-300">
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">eriasglobe.min.js</p>
            </button>
            <button className="flex h-menu sticky left-0 right-[75px] w-max bg-white items-center gap-[9px] px-[21px] border-l-[1px] border-l-borderColor border-r-borderColor border-b-[1px] border-white border-t-[2px] border-t-[#ED7547] border">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">work</p>
            </button>
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">Quick Access</p>
            </button>
            <button className="flex h-menu bg-white items-center w-max gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">eriasvideo.min.js</p>
            </button>
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">eriasglobe.min.js</p>
            </button>
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">Quick Access</p>
            </button>
            <button className="flex h-menu bg-white items-center w-max gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">eriasvideo.min.js</p>
            </button>
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">school</p>
            </button>
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">eriasglobe.min.js</p>
            </button>
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">Quick Access</p>
            </button>
            <button className="flex h-menu bg-white items-center w-max gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">eriasvideo.min.js</p>
            </button>
            <button className="flex h-menu bg-white  items-center w-max gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">eriasglider.min.js</p>
            </button>
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">nuldrive.min.js</p>
            </button>
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">work related</p>
            </button>
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">boom</p>
            </button>
            <button className="flex h-menu bg-white w-max items-center gap-[9px] px-[21px] border-r-[1px] border-r-borderColor border-b-[1px] border-white border-t-[2px] ">
              <File fill="#7AC780" width={18} />
              <p className="text-[11px] ">katusch</p>
            </button>
          </div>

          <div className="hidden md:flex gap-[11px] w-[76px] items-centers sticky right-0 z-50 bg-white px-[12px] border-l-border border-borderColor">
            <Plus fill="#6B6B6B" width={20} className="cursor-pointer" />
            <EllipsisH fill="#6B6B6B" width={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebUtilTabs;
