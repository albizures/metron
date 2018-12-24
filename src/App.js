import React, { useEffect, useState } from 'react';
import './App.css';
import Circle from './components/Circle'

const onChange = (setValue) => (evt) => {
  setValue(evt.target.value)
}

export default () => {
  const [beatsPerBar, setBeatsPerBar] = useState(4);
  const [clicksPerBeat, setClicksPerBeat] = useState(1);
  const [BPM, setBPM] = useState(80);
  const [bar, setBar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBar(bar + 1);
    }, (60 / BPM) * 1000);
    return () => {
      clearInterval(interval)
    }
  });

  return (
    <div className="App">
      <label htmlFor="beatsPerBar">Beats per bar</label>
      <input name="beatsPerBar" type="number" value={beatsPerBar} onChange={onChange(setBeatsPerBar)} id="beatsPerBar" />
      <label htmlFor="clicksPerBeat">Clicks per beat</label>
      <input id="clicksPerBeat" type="number" value={clicksPerBeat} onChange={onChange(setClicksPerBeat)} name="clicksPerBeat"/>
      <label htmlFor="BPM">BPM</label>
      <input id="BPM" type="number" value={BPM} onChange={onChange(setBPM)} name="BPM"/>
      {bar}
      <div>
        <Circle bar={bar} />
      </div>
    </div>
  );
};
