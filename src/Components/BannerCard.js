import React from 'react';
import './CSS/LaunchCard.css';

const BannerCard = (props) =>{

    const missionName = props.missionName
    const time = props.launchdatetime
    const pad = props.launchpad
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
                <p>{time}<br></br>
                {pad}</p>
              </div>
              <div class="launch-caption">
                <p><strong>Created By: </strong>{createdBy.name}<br></br>
                <strong>PublishedAt: </strong> {createdBy.publishedAt || null} </p>
              </div>
            </div>
        </a>
    );

}

export default BannerCard;