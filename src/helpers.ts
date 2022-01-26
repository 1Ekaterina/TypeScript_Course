import { Product } from './product.js'
import { Ratingable } from './ratingable.js'
import { Genre } from './types.js'

export function getGenreName(genre: Genre) {
  const genreMapping = {
    [Genre.Adventure]: 'adventure',
    [Genre.Fantasy]: 'fantasy',
    [Genre.Horror]: 'horror'
  }

  return genreMapping[genre]
}

export function showRating(entity: Ratingable) {
  if (entity.rating == null) {
    return 'not rated yet'
  }

  const roundedRating = Math.round(entity.rating)
  let rating = ''

  for (let i = 0; i < roundedRating; i++) {
    rating += '⭐'
  }

  return rating + ` (${entity.rating.toFixed(2)})`
}


export function showCart(products: Product[]) {
  let totalPrice = 0
  products.forEach((product) => {
    totalPrice += product.price
    console.log(`${product.getProductDescription()} x ${product.price} rub.`)
  })

  console.log(`\nTotal items: ${products.length}, total cost: ${totalPrice}`)
}
