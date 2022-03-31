import React from 'react'

type Props = {}

const Signup = (props: Props) => {
  return (
    <div className='container'>

       <h1 className="py-4 mb-3 text-center">Sign up</h1>
      <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputSurname" className="form-label">Surname</label>
        <input type="text" className="form-control" id="inputSurname"  placeholder="Surname"/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="inputName"  placeholder="Name"/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputState" className="form-label">State</label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputFile" className="form-label">Image</label>
        <input type="file" className="form-control" id="inputFile" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4"  placeholder="Email"/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form></div>

  )
}

export default Signup