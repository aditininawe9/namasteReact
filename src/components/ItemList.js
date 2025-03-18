import React from 'react'

const ItemList = ({items}) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
            <div>
                <span>{item.card.info.name}</span>
                <span> - {item.card.info.price}</span>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
