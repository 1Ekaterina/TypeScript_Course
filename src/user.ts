import { renderBlock } from './lib.js'

export function renderUserBlock (name:string, avatarUrl:string, favoriteItemsAmount:number): void {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false
  const userName = name
  const avatar = avatarUrl


  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? 'active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
