/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String!) {
    onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String!) {
    onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String!) {
    onDeleteProduct(owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String!) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String!) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String!) {
    onDeleteOrder(owner: $owner) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($owner: String!) {
    onCreateItem(owner: $owner) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($owner: String!) {
    onUpdateItem(owner: $owner) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($owner: String!) {
    onDeleteItem(owner: $owner) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String!) {
    onCreateAddress(owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String!) {
    onUpdateAddress(owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String!) {
    onDeleteAddress(owner: $owner) {
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
