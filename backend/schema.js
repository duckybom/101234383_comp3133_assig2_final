const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        email: String!
        type: String!
        password: String!
    }
    type Listing{
        id: ID!
        listingId: String!
        listingTitle: String!
        description: String! 
        street: String!
        city: String!
        postalCode: String!
        price: Float!
        email: String!
        username: String!
    }

    type Booking{
        id: ID!
        listingId: String!
        bookingId: String!
        bookingStart: String!
        bookingEnd: String!
        username: String!
    }

    type Auth{
        secret: String
    }

    type Query {
        getUsers: [User]
        getUserByID(id: ID!): User
        getListing: [Listing]
        getListingByUser(username: String!): [Listing]
        getListingByName(listingTitle: String!): [Listing]
        getBooking: [Booking]
        getUserBookings(username: String!): [Booking]
        login(username:String!, password:String!): Auth 
    }

    type Mutation {
        addUser(username: String!
            firstname: String!
            lastname: String!
            email: String!
            type: String!
            password: String!): User
        updateUser(id: String!
            username: String!
            firstname: String!
            lastname: String!
            email: String!
            type: String!
            password: String!): User
        deleteUser(id: String!): User

        addListing(listingId: String!
            listingTitle: String!
            description: String! 
            street: String!
            city: String!
            postalCode: String!
            price: Float!
            email: String!
            username: String!): Listing
        updateListing(id: String!
            listingId: String!
            listingTitle: String!
            description: String! 
            street: String!
            city: String!
            postalCode: String!
            price: Float!
            email: String!
            username: String!): Listing
        deleteListing(id: String!): Listing

        addBooking(listingId: String!
            bookingId: String!
            bookingStart: String!
            bookingEnd: String!
            username: String!) :Booking
        deleteBooking(id: String!): Booking

    }
`