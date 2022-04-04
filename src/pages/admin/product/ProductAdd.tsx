import React, { useEffect, useState} from 'react'
import { ProductType } from '../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/admins/Navbar'
import { categoryType } from "../../types/categoryType"
import { list } from '../../../api/category';
type ProductAddProps = {
  onAdd: (product: ProductType) => void
}
type FormInputs = {
  name: string,
  image: string,
  price: number,
  description: string,
  detail: string,
  category: string
}


const ProductAdd = (props: ProductAddProps) => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const navigate = useNavigate();
  const [categorys, setCategorys] = useState<categoryType[]>([])


  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onAdd(data);
    navigate('/admin/product')
  }
  useEffect(() => {
    const getCategorys = async () => {
        const { data } = await list();
        console.log(data);
        
        setCategorys(data)
    }
    getCategorys();
}, []);


  return (
    <div className="container-fluid">
      <div className="row">

        <Nav />

        <form className="col-md-9 ms-sm-auto col-lg-10 px-md-4 my-4" action="" onSubmit={handleSubmit(onSubmit)}>
          <h1>Thêm Sản Phẩm</h1>
          <div className="w-full  mb-[10px]">
            <label htmlFor="Category" className="block mb-3 text-sm font-semibold text-gray-500">Category</label>
            <select {...register('category', { required: true })} className="w-full border bg-white rounded px-3 py-2 outline-none">
              <option className="py-1">Categorys</option>
              {categorys && categorys.map((item, index) => {
                return <option key={index} className="py-1">{item.name}</option>
              })}
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" {...register('name', { required: true })} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Image</span>
            <input type="file" {...register('image')} className="form-control" id="basic-url" aria-describedby="basic-addon3" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Price</span>
            <input type="number" {...register('price')} className="form-control" aria-label="Amount (to the nearest dollar)" />

          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Description</span>
            <input type="text" {...register('description')} className="form-control" />
          </div>
          <div className="input-group py-4">
            <span className="input-group-text">Detail</span>
            <textarea className="form-control" {...register('detail')} aria-label="With textarea" defaultValue={""} />
          </div>

          <button>Add</button>
        </form>


      </div>
    </div>

  )
}

export default ProductAdd