import React from 'react';
import { useQuery } from '@apollo/client';
import '../CSS/loader.css'
//react and useQuery Hook from Apollo Client

import BannerCard from '.././BannerCard.js';
import { GET_UPCOMING_DATA } from '../Queries/uLaunch.js';

function UpLaunchData() {
  const { loading, error, data } = useQuery(GET_UPCOMING_DATA); //Getting data as per Query
  const styles = {
    width: "30px",
    height: "20px",
    link: "https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png"
  }
  // if (loading) return <div class="loader"></div>;

  if (loading) return (
    <div class="loader"></div>
    // <div class="moon">
    //   <img src={styles.link} style={styles} class="loader3"></img>
    //   <ul class="">
    //       <li class="insets1 insets"></li>
    //       <li class="insets2 insets"></li>
    //       <li class="insets3 insets"></li>
    //       <li class="insets4 insets"></li>
    //       <li class="insets5 insets"></li>
    //       <li class="insets6 insets"></li>
    //       <li class="insets7 insets"></li>
    //   </ul>
    // </div>
  );

  if (error){
    console.log(error);
    
    return <p>Error</p>
  }

  return (
    <div>
      {data.u_launches.map(launch => (
        <BannerCard missionName={launch.missionName}
          launchdatetime={launch.launchdatetime}
          launchpad={launch.launchpad}
          coverimage={launch.coverimage}
          createdBy={launch.createdBy}></BannerCard>
      ))}
    </div>
  );
}

export default UpLaunchData;