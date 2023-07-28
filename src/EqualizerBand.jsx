import { useEffect, useState } from 'react';
import './EqualizerBand.css';

// For this component, the MAX volume is 40
// the MIN volume is 0.

const randomVolume = () => Math.floor(Math.random() * 40);

const updateVolume = (volume) => {
    const changeAmount = Math.floor(Math.random() * 3);
    if(volume > 38) { // If volume near MAX
        return volume - changeAmount;
    } else if (volume < 3) { // If volume near MIN
        return volume + changeAmount;
    } else if(Math.random() >= 0.5) {  // Volume in the middle somewhere?
        return volume + changeAmount;
    } else {
        return volume - changeAmount;
    }
}

function EqualizerBand(props) {

    const [volume, setVolume] = useState(randomVolume());

    // setInterval(() => { setVolume(updateVolume) }, 1500);
    useEffect(() => {
        const interval = setInterval(() => {
            setVolume(updateVolume)
        }, 250);
        return () => clearInterval(interval);
    }, []);

    let items = [];
    for(let i=0; i < volume; i++) {
        let level = 'l0';

        if(i > 35) {
            level = 'l3';
        } else if(i > 30) {
            level = 'l2';
        } else if(i > 1) {
            level = 'l1';
        }
        items.push(<div className={"item " + level} key={i}></div>);
    } 

    return (
        <div className="band">
            {items}
        </div>
    )
}

export default EqualizerBand;