import React from 'react';
import { useQuery } from '@apollo/client';

//react and useQuery Hook from Apollo Client

import BannerCard from '.././BannerCard.js';
import { GET_UPCOMING_DATA } from '../Queries/uLaunch.js';

function UpLaunchData(){
    const { loading, error, data } = useQuery(GET_UPCOMING_DATA); //Getting data as per Query

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;

    return(
        <div>
          {data.u_launches.map(launch => (
            <BannerCard missionName={launch.missionName}
          launchdatetime={launch.launchdatetime}
          launchpad={launch.launchpad}></BannerCard>
           ))}
        </div>
    );
}

export default UpLaunchData;