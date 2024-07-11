// src/queries.js
import { gql } from '@apollo/client';

export const GET_UPCOMING_DATA = gql`
  query Upcoming_Launch{
  u_launches(stage: PUBLISHED,orderBy: launchdatetime_ASC) {
    missionName
    launchdatetime
    stats1
    stats2
    launchorbit
    launchpad
    launchvehicle
    liftoff
    coverimage {
      url
    }
    createdBy {
      name
      publishedAt
    }
  }
}
`
;