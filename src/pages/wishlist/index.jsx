import React, { memo } from 'react'

const Wishlist = () => {
    return (
        <section className='h-[91.5vh] flex pt-[5rem] items-start justify-center text-black'>
            <div className="flex flex-col items-center">
                <img className='w-[500px]'
                    src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png" alt="" />
                <h1 className='text-3xl font-bold'>Sevimlilar bo`sh</h1>
            </div>
        </section>
    )
}

export default memo(Wishlist)