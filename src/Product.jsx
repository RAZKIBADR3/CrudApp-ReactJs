import React, { useContext } from 'react'
import {fContext} from './Home'

export default function Product(){
    const [product,dispatch] = useContext(fContext)
    return (
        <div className='product'>
            <p>ref : {product.cmp}</p>
            <p>name : {product.name}</p>
            <p>categorie : {product.categorie}</p>
            <p>prix : {product.prix}</p>
            <p>quanity : {product.quanity}</p>
            <span onClick={()=>dispatch({type:'delete',payload:{e:product}})}>
                <i className="fa-solid fa-trash"></i>
                Delete
            </span>
            <span className="update1" onClick={()=>dispatch({type:'getProduct',payload:{e:product,upd:true}})}>
                <i className="fa-solid fa-pen"></i>
                Update
            </span>
        </div>
    )
}