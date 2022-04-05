import React, { useEffect, useState} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/admins/Navbar'
import { categoryType } from "../../types/categoryType"
import { listcategory } from '../../../api/category';


type CategoryAddProps = {
  onAdd: (category: categoryType) => void
}
type FormInputs = {
  name: String
}

const CategoryAdd = (props: CategoryAddProps) => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onAdd(data);
    navigate('/admin/category')
  }
  
  return (
    <div className="container-fluid">
      <div className="row">

        <Nav />
        <form className="col-md-9 ms-sm-auto col-lg-10 px-md-4 my-4" action="" onSubmit={handleSubmit(onSubmit)}>
          <h1 className='py-4'>Add_Category</h1>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" {...register('name', { required: true })} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          
          <button>Add</button>
        </form>



      </div>
    </div>
  )
}

export default CategoryAdd