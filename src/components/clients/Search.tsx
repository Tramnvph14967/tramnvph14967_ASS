import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className='search'>
      <form className="w-100 me-3">
        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
      </form>
    </div>
  )
}

export default Search