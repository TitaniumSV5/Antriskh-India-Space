// src/queries.js
import { gql } from '@apollo/client';

export const GET_DATA = gql`
  query Launches{
  u_launches(stage: PUBLISHED) {
    missionName
    missiondesc
    launchpayload
    payloadmass
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