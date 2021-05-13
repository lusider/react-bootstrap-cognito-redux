/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      ProductOwnerId
      picture
      title
      description
      filter
      pendant
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ProductOwnerId
        picture
        title
        description
        filter
        pendant
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      coupon
      couponCode
      orderOwnerId
      items {
        id
        itemOwnerId
        productId
        count
        price
        discountedPrice
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        id
        addressOwnerId
        city
        country
        line1
        line2
        postal_code
        state
        createdAt
        updatedAt
        owner
      }
      couponReduction
      shippingPrice
      tax
      subTotal
      total
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coupon
        couponCode
        orderOwnerId
        items {
          id
          itemOwnerId
          productId
          count
          price
          discountedPrice
          createdAt
          updatedAt
          owner
        }
        shippingAddress {
          id
          addressOwnerId
          city
          country
          line1
          line2
          postal_code
          state
          createdAt
          updatedAt
          owner
        }
        couponReduction
        shippingPrice
        tax
        subTotal
        total
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      itemOwnerId
      productId
      count
      price
      discountedPrice
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemOwnerId
        productId
        count
        price
        discountedPrice
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      addressOwnerId
      city
      country
      line1
      line2
      postal_code
      state
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        addressOwnerId
        city
        country
        line1
        line2
        postal_code
        state
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
