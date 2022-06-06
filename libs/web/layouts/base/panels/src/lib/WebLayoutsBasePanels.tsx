import { useEffect, useState, useRef, Fragment, ReactChild } from 'react';
import { Allotment } from 'allotment';
import 'allotment/dist/style.css';

import styles from './WebLayoutsBasePanels.module.css';

/* eslint-disable-next-line */
export interface WebLayoutsBasePanelsProps {
  children: ReactChild;
}

export function WebLayoutsBasePanels(props: WebLayoutsBasePanelsProps) {
  const { children } = props;
  const [panelSizes, setPanelSizes] = useState<any>();
  const allotmentRef = useRef<any>();

  useEffect(() => {
    const localPanelSizes = localStorage.getItem('panelSizes')!;
    setPanelSizes(JSON.parse(localPanelSizes));
  }, []);
  return (
    <Fragment>
      {panelSizes && (
        <div className="h-full">
          <Allotment
            onChange={(event) => {
              localStorage.setItem('panelSizes', JSON.stringify(event));
            }}
            ref={allotmentRef}
            defaultSizes={panelSizes}
            proportionalLayout={false}
          >
            <Allotment.Pane minSize={71} maxSize={380}>
              <div>Pane 1</div>
            </Allotment.Pane>
            <Allotment.Pane>{children}</Allotment.Pane>
            <Allotment.Pane minSize={48} maxSize={380} preferredSize={'50px'}>
              <div>Pane 1</div>
            </Allotment.Pane>
          </Allotment>
        </div>
      )}
    </Fragment>
  );
}

export default WebLayoutsBasePanels;