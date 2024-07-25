import React from 'react';
import '../CSS/loader.css';
import BannerCard from '../util/BannerCard.js';

function UpLaunchData({ launches }) {
  if (!launches || launches.length === 0) {
    return <p>No launches found.</p>;
  }

  return (
    <div>
      {launches.map(launch => (
        <BannerCard key={launch.id} 
          missionName={launch.missionName}
          launchdatetime={launch.launchdatetime}
          launchpad={launch.launchpad}
          stats1={launch.stats1}
          stats2={launch.stats2}
          coverimage={launch.coverimage}
          createdBy={launch.createdBy}></BannerCard>
      ))}
    </div>
  );
}

export default UpLaunchData;
