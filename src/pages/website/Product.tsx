import React from 'react'
import { ProductType } from '../types/product'

type ProductProps = {
  products: ProductType[],
}

const Product = (products: ProductProps) => {
  // console.log(products);

  return (
    <div className="row p-5">
      <h2 className='text-center p-2'>Trending Now</h2>
      {products.products?.map((item) => {
        return (
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <span>Giá: {item.price} VNĐ</span>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
        )
      })}

    </div>
  )
}

export default Product