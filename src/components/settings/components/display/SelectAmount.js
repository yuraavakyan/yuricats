import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setAmount } from "../../../../api/setAmount";
import { setSidebarStatus } from "../../../../api/setSidebarStatus";
import "./selectAmount.scss";

function SelectAmount(props) {
  const handleChange = (event) => {
    setAmount(event.target.value);
    setSidebarStatus(false);
  };

  return (
    <div className={`select ${props.class}`}>
      Display:
      <select onChange={handleChange}>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="12">12</option>
      </select>
    </div>
  );
}

export default SelectAmount;
