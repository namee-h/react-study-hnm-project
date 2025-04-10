import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({loading, setLoading, authenticate}) => {
  return (
    authenticate===true? <ProductDetail loading={loading} setLoading={setLoading} />:<Navigate to='/login'/>
  )
}

export default PrivateRoute
