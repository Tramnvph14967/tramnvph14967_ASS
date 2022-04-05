import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
  return (
    <div className="container bootdey">
      <div className="col-md-12">
        <section className="panel">
          <div className="panel-body col-md-12 flex" style={{ display: "flex" }}>
            
            <div className="col-md-6">
              <div className="pro-img-details">
                <img src="https://via.placeholder.com/550x380/FFB6C1/000000" alt />
              </div>

            </div>
            <div className="col-md-6">
              <h4 className="pro-d-title">
                <a href="#">
                  Leopard Shirt Dress
                </a>
              </h4>
              <p>
                Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions address your ideal buyer directly and personally. The best product descriptions address your ideal buyer directly and personally.
              </p>
              <div className="product_meta">
                <span className="posted_in"> <strong>Categories:</strong> <a rel="tag" href="#">Jackets</a>, <a rel="tag" href="#">Men</a>, <a rel="tag" href="#">Shirts</a>, <a rel="tag" href="#">T-shirt</a>.</span>
                <br />
                <span><strong>Color: </strong> </span>
              </div>
              <div className="m-bot15"> <strong>Price : </strong>   <span className="pro-price"> $300.00</span></div>
              <div className="form-group">
                <strong>Quantity</strong>
                <input type="quantiy" placeholder={1} className="form-control quantity" />
              </div>
              <p className='py-4'>
                <button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart" /> Add to Cart</button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}

export default ProductDetail