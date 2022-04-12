import React from 'react'

type Props = {}

const CheckOut = (props: Props) => {
  return (
  
<div className="container">
  <main>
    <div className="row g-5">
      <div className="col-md-5 col-lg-6 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">4</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
           <div>
           <span className="text-muted mx-4">$12</span>
            <button>Delete</button>
           </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
           <div>
           <span className="text-muted mx-4">$12</span>
            <button>Delete</button>
           </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
           <div>
           <span className="text-muted mx-4">$12</span>
            <button>Delete</button>
           </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
           <div>
           <span className="text-muted mx-4">$12</span>
            <button>Delete</button>
           </div>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>
        
      </div>
      <div className="col-md-7 col-lg-6">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">Username</label>
              <input type="text" className="form-control" id="firstName"   required />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Name</label>
              <input type="text" className="form-control" id="lastName"   required />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="username" className="form-label">Phone</label>
              <div className="input-group has-validation">
                <input type="number" className="form-control" id="phone" placeholder="phone" required />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
          </div>

          <hr className="my-4" />
          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
  </main>
</div>

    
  )
}

export default CheckOut