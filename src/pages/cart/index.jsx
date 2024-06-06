import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const emptyImg = 'https://static.vecteezy.com/system/resources/previews/005/073/073/original/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg'

const Cart = () => {
    const cartData = useSelector(state => state.cart.value)
    console.log(cartData);

    return (
        <section className='h-[91.5vh] flex pt-[5rem] items-start justify-center text-black'>
            {
                cartData.length ? <h1>cart</h1> : (
                    <div className="flex flex-col items-center">
                        <img className='w-[500px]' src={emptyImg} alt="" />
                        <h1 className='text-3xl font-bold'>Savatingiz bo`sh</h1>
                    </div>
                )
            }
            {/* {
                likeCarts.length ? (<ProductsWrapper key={nanoid()} data={likeCarts} title={'Wishlist products'} />)
                    : (
                        <>
                            <div className="flex flex-col items-center">
                                <img className='w-[500px]'
                                    src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png" alt="" />
                                <h1 className='text-3xl font-bold'>Sevimlilar bo`sh</h1>
                            </div>
                        </>
                    )
            } */}
        </section>
    )
}

export default memo(Cart)