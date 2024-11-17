import Collections from '@/components/Collections'
import Products from '@/components/Products'
import React from 'react'

const Shop = () => {
  return (
    <div>
        <Collections />
        <Products />
    </div>
  )
}

export default Shop;

export const dynamic = "force-dynamic"