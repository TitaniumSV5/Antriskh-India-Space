import React from 'react';
import './CSS/LaunchCard.css';

const BannerCard = (props) =>{

    const missionName = props.missionName
    const time = props.launchdatetime
    const pad = props.launchpad


    return(
        <button className="button-89" role="button">
            <div className="launchName">{missionName}</div>
            <div className="launchDescription">{`${time} and ${pad}`}</div>
        </button>
    );

}

export default BannerCard;