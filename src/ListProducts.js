import React, { Component } from 'react';
// import data from './01-change_log.json';
function ListProducts(props) {
  console.log(props.color);
  return (
      <ul className=''>
        {props.items.map((item) => (

          <li key={item.id} className={(props.color)}>
            <div className='change-log-item'>
              <p>{item.date}</p>
              <p>{item.sku}</p>
              <p>{item.name}</p>
              <a className='magento-link' href={'https://www.mr-s-leather.com/mslpanel/catalog/product/edit/id/'+ item.id +'/key/b44ab2d7422184f5cf18e0f393136f027ea29e5b3c32c95e3f292e8fce0abe47/'} target='_blank'>{props.editlink}</a>
            </div>
          </li>

        ))}
      </ul>
  );
}

export default ListProducts;
