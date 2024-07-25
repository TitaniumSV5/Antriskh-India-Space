import React from 'react';
import '../CSS/LaunchCard.css';

const BannerCard = (props) =>{

    const missionName = props.missionName
    const time = props.launchdatetime
    const pad = props.launchpad
    const stats1 = props.stats1
    const stats2 = props.stats2
    const coverimage = props.coverimage
    const createdBy = props.createdBy

    const styles = {
        backgroundImage: `url(${coverimage.url || '../Assets/gslv.jpg'})`, // Handle missing image gracefully
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

    return(
        // <button className="button-89" role="button">
        //     <div className="launchName">{missionName}</div>
        //     <div className="launchDescription">{`${time} and ${pad}`}</div>
        // </button>
        <a href="Upcoming Launch Pages/@91_PSLV-C58.html" class="no-underline">
            <div class="launch-card" style={styles}>
              <div class="launch-details">
                <h3>{missionName}</h3>
                <p>{time}</p>
                <p>{pad}</p>
              </div>
              <div class="launch-caption">
                <p>{stats1}<br></br>
                {stats2} </p>
              </div>
            </div>
        </a>
    );

}

export default BannerCard;