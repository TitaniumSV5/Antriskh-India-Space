// src/queries.js
import { gql } from '@apollo/client';

export const GET_UPCOMING_DATA = gql`
  query MyQuery {
    u_launches(stage: PUBLISHED) {
        id
        launchdatetime
        launchpad
        missionName
        publishedAt
        stats1
        stats2
        updatedBy {
            name
        }
        createdBy {
            name
        }
        coverimage {
            url
        }
    }
}
`
  ;