/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
