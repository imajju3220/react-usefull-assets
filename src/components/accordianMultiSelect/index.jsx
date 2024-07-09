/** @format */

import React, { useState } from "react";
import data from "./data";
import "./styles.css";
export default function AccordionMultiSelect() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    debugger
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if(findIndexOfCurrentId === -1){
      cpyMultiple.push(getCurrentId)
    } else{
      cpyMultiple.splice(findIndexOfCurrentId, 1)
    }
    setMultiple(cpyMultiple)
  }
  // console.log('multiple', multiple);
  return (
    <div>
      <h4>multi select</h4>
      <div className="wrapper">
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            style={{
              margin: "5px auto",
              ...(enableMultiSelect
                ? {
                    backgroundColor: "green",
                    color: "white",
                    fontWeight: "bold",
                  }
                : {})
            }}
            onClick={() => setEnableMultiSelect(!enableMultiSelect)}
          >
            enable multi select
          </button>
        </div>
        <div className="accordionMultiSelect">
          {data && data.length > 0 ? (
            data.map(dataItem => (
              <div className="item" key={dataItem.id}>
                <div
                  className="title"
                  onClick={
                    enableMultiSelect
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {/* both below method are working */}
                {/* {
                  enableMultiSelect ?
                  multiple.indexOf(dataItem.id) !== -1 &&
                  <div className="content">{dataItem.answer}</div> :
                  selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                } */}

                {
                selected === dataItem.id || 
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>no data found</div>
          )}
        </div>
      </div>
    </div>
  );
}
