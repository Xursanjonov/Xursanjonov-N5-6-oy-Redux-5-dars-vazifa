import React, { memo, useEffect, useState } from 'react'
import { usePostProductMutation } from '../../../context/api/productApi'
import { useNavigate } from 'react-router-dom'

const initialState = {
    title: "BMW 7 series xDrive",
    img: "https://i.ytimg.com/vi/TAZq5Y-6otI/maxresdefault.jpg",
    info: "BMW 7 Series 740d xDrive",
    price: "118000",
    category: "cars"
}

const Create = () => {
    const [postNewProduct, { isLoading, isSuccess }] = usePostProductMutation()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)
    const handleCreateProduct = e => {
        e.preventDefault();
        postNewProduct(formData);
    }

    useEffect(() => {
        if (isSuccess) {
            navigate('/admin/manage')
        }
    }, [isSuccess])

    return (
        <section className='mt-20 text-black'>
            <form onSubmit={handleCreateProduct} className="w-[540px] py-10 p-4 gap-4 flex flex-col">
                <h1 className='font-bold text-3xl mb-4'>Create Product</h1>
                <input required value={formData.title} onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
                    className='input input-primary w-[400px] font-semibold text-black bg-white'
                    type="text" name="title" id="" placeholder='Title' />
                <input required value={formData.price} onChange={(e) => setFormData(p => ({ ...p, price: e.target.value }))}
                    className='input input-primary w-[400px] font-semibold text-black bg-white'
                    type="text" name="price" id="" placeholder='Price' />
                <input required value={formData.category} onChange={(e) => setFormData(p => ({ ...p, category: e.target.value }))}
                    className='input input-primary w-[400px] font-semibold text-black bg-white'
                    type="text" name="category" id="" placeholder='Category' />
                <input required value={formData.info} onChange={(e) => setFormData(p => ({ ...p, info: e.target.value }))}
                    className='input input-primary w-[400px] font-semibold text-black bg-white'
                    type="text" name="info" id="" placeholder='Info' />
                <input required value={formData.img} onChange={(e) => setFormData(p => ({ ...p, img: e.target.value }))}
                    className='input input-primary w-[400px] font-semibold text-black bg-white'
                    type="text" name="image" id="" placeholder='Image' />
                <button type='submit' className='w-[400px] btn btn-success'>Create</button>
            </form>
        </section>
    )
}

export default memo(Create)