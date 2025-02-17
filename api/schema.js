const { gql } = require("apollo-server-express");
const _ = require("lodash");

//Int, Float, String, Boolean, ID
const typeDefs = gql`
  scalar JSON

  type Response {
    data: JSON
    curDate: String
  }

  type User {
    id: ID!
    userId: String
    email: String
    name: String
    profileImg: String
    password: String
    activity_mg: Boolean
    aboutme: String
    country: String
    agree: JSON
    sns_info: JSON
    my_follow: JSON
    my_notice: JSON
    addr_1: String
    addr_2: String
    birth: String
    area: String
    age: String
    sex: Int
    rfToken: String
    lastcon_date: String
    updated_at: String
    created_at: String
  }

  type List {
    docs: JSON
    itemsInRank: JSON
    totalDocs: Int
    limit: Int!
    hasPrevPage: Boolean
    hasNextPage: Boolean
    page: Int
    totalPages: Int
    offset: Int
    prevPage: Int
    nextPage: Int
    pagingCounter: Int
    meta: JSON
  }

  # Query, Mutation
  type Query {
    getCount(operation: String!, queryObj: JSON): Response
    getVisitCount(fpId: String): Response
    getVisitUser(_id: String): Response
    getUser(data: JSON): Response
    exploreList(page: Int, limit: Int, excludedId: String): List
    getExplorerById(_id: String): Response
    getDiscoveredArtifactById(_id: String): Response
    getVisitorStat(start_date: String, end_date: String): JSON
  }
  type Mutation {
    updateVisit(
      fpId: String!
      isKiosk: Boolean
      location: String
      deviceType: String
    ): Response
    updateUser(
      _id: ID
      visit_id: ID
      userName: String
      ticketType: String
      character: String
      currentPoint: String
      discoverArtifact: JSON
      isDoneGuide: Boolean
      snsId: String
      snsName: String
      birth: String
      age: String
      gender: String
      lastconDate: String
      withWhom: String
      consent_given: Boolean
    ): Response
    updateExplore(
      id: ID
      user_id: ID
      userName: String
      photoType: String
      durationMSec: Int
      explorerDate: String
      visitCount: Int
      ticketType: String
      photoUrl: String
      character: String
    ): Response
  }
`;

module.exports = typeDefs;
