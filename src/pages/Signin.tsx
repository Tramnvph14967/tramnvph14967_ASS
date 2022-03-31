import React from 'react'

type Props = {}

const Signin = (props: Props) => {
  return (
    <div className='container col-md-6'>

      <form className='py-4'>
        <h1 className='text-center'>Sign in</h1>
        <br />
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <br />
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <br />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>

    </div>
  )
}

export default Signin