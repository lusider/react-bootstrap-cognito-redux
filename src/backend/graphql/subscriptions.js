/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String!) {
    onCreateCustomer(owner: $owner) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String!) {
    onUpdateCustomer(owner: $owner) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String!) {
    onDeleteCustomer(owner: $owner) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String!) {
    onCreateAddress(owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String!) {
    onUpdateAddress(owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String!) {
    onDeleteAddress(owner: $owner) {
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
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts($owner: String!) {
    onCreateProducts(owner: $owner) {
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
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts($owner: String!) {
    onUpdateProducts(owner: $owner) {
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
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts($owner: String!) {
    onDeleteProducts(owner: $owner) {
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
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders($owner: String!) {
    onCreateOrders(owner: $owner) {
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
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders($owner: String!) {
    onUpdateOrders(owner: $owner) {
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
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders($owner: String!) {
    onDeleteOrders(owner: $owner) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($owner: String!) {
    onCreateItem(owner: $owner) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($owner: String!) {
    onUpdateItem(owner: $owner) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($owner: String!) {
    onDeleteItem(owner: $owner) {
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
