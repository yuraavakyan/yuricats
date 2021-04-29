import React, { useState } from "react";
import settingsLogo from "../../img/settings.png";
import SelectAmount from "./components/display/SelectAmount";
import View from "./components/view/View";
import close from "../../img/icons/cancel.png";
import "./settings.scss";

function Settings(props) {
  const [open, setOpen] = useState(false);
  return open ? (
    <div className={`settings-open ${props.class}`}>
      <div className="close-settings" onClick={() => setOpen(false)}>
        <img src={close} alt="close-settings"></img>
      </div>
      <View />
      <SelectAmount />
    </div>
  ) : (
    <div className={`settings ${props.class}`} onClick={() => setOpen(true)}>
      <div className="settings-logo">
        <img src={settingsLogo} alt="settings-logo"></img>
      </div>
      Settings
    </div>
  );
}

export default Settings;
