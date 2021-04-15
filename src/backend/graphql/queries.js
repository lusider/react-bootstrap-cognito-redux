/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      customerOwnerId
      first_name
      last_name
      phone
      address {
        id
        addressOwnerId
        address_one
        address_two
        city
        state
        zip
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerOwnerId
        first_name
        last_name
        phone
        address {
          id
          addressOwnerId
          address_one
          address_two
          city
          state
          zip
          createdAt
          updatedAt
          owner
        }
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
      address_one
      address_two
      city
      state
      zip
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
        address_one
        address_two
        city
        state
        zip
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      ProductOwnerId
      picture
      title
      filter
      pendant
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProductss = /* GraphQL */ `
  query ListProductss(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ProductOwnerId
        picture
        title
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
export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
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
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        id
        addressOwnerId
        address_one
        address_two
        city
        state
        zip
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
export const listOrderss = /* GraphQL */ `
  query ListOrderss(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          createdAt
          updatedAt
          owner
        }
        shippingAddress {
          id
          addressOwnerId
          address_one
          address_two
          city
          state
          zip
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
