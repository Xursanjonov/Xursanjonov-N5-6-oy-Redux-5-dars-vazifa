import React, { memo } from 'react'

const emptyImg = 'https://static.vecteezy.com/system/resources/previews/005/073/073/original/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg'

const Cart = () => {
    return (
        <section className='h-[91.5vh] flex pt-[5rem] items-start justify-center text-black'>
            <div className="flex flex-col items-center">
                <img className='w-[500px]' src={emptyImg} alt="" />
                <h1 className='text-3xl font-bold'>Savatingiz bo`sh</h1>
            </div>
        </section>
    )
}

export default memo(Cart)