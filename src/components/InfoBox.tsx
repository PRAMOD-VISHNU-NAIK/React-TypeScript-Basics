import { type ReactNode } from "react";

type HintBoxProps = {
    mode: 'hint';
    children: ReactNode;
}

type WarningBoxProps = {
    mode: 'warning';
    severity?: 'low' | 'medium' | 'high'
    children: ReactNode;
}

type InfoBoxType = HintBoxProps | WarningBoxProps           // This is called Union Discrimination.

function InfoBox(props: InfoBoxType) {
  const {mode, children} = props;

    if (mode === 'hint'){
        return (
            <aside className="infobox infobox-hint">
                <h2>{children}</h2>
                {/* <p>{mode}</p> */}
            </aside>
          )
    }

    const {severity} = props;
    
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>{children}</h2>
            <p>{mode}</p>
        </aside>
      )
}

export default InfoBox