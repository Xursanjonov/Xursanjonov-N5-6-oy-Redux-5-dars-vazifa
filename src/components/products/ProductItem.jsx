import React, { Fragment, memo, useState } from 'react'
import { useDeleteProductMutation } from '../../context/api/productApi'
import { FaPenToSquare, FaRegHeart, FaTrashCan } from "react-icons/fa6";
import { FaShoppingCart } from 'react-icons/fa';
import EditProductModal from '../modals/EditProductModal'

const ProductItem = ({ product, admin }) => {
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(null)
    const [deleteProduct, { isLoading: detetedLoading }] = useDeleteProductMutation()

    const editBtn = (e) => {
        e.preventDefault();
        setShow(true)
        setEdit(product)
    }

    return (
        <Fragment>
            <div key={product.id} className='product-item w-[280px] h-[420px] flex flex-col items-start justify-start gap-8 rounded-xl bg-gray-200'>
                <img className='product-item-img w-[280px] h-[280px] object-cover rounded-lg' src={product.img} alt={product.title} />
                <div className="product-item-info ps-3 flex flex-col gap-2 text-black">
                    <p className='text-lg font-semibold text-blue-600'>{product.title}</p>
                    <p className='italic font-semibold text-black'>${(product.price)}</p>
                    {
                        admin ? (
                            <div className="flex items-center justify-start gap-4">
                                <button disabled={detetedLoading}
                                    onClick={() => confirm('Product o`chirilsinmi ?') ? deleteProduct(product.id) : <></>}
                                    className='p-2 rounded-md text-white bg-red-600'> <FaTrashCan /> </button>
                                <button onClick={editBtn}
                                    className='p-2 rounded-md text-black bg-orange-500'> <FaPenToSquare /> </button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-start gap-2">
                                <button disabled={detetedLoading}
                                    onClick={() => (e.target)}
                                    className='product-item-info-del'> <FaRegHeart /> </button>
                                <button className='product-item-info-edit'> <FaShoppingCart /> </button>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                show ? <EditProductModal setShow={setShow} product={edit} /> : <></>
            }
        </Fragment>
    )
}

export default memo(ProductItem)