// src/queries.js
import { gql } from '@apollo/client';

export const GET_UPCOMING_DATA = gql`
  query Upcoming_Launch{
  u_launches(stage: PUBLISHED) {
    missionName
    launchdatetime
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