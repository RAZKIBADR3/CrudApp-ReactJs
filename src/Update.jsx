import React , { useContext , useRef } from 'react'
import { CrudContext } from './App'

export default function Update({obj2,dispatch}) {
    const T = useContext(CrudContext)
    const obj = useRef(obj2)

    function setAtt(att,val){
        obj.current[att] = val
    }

    return(
        <div className='updateC'>
            <div className="inputs">
                <h1>Update Product</h1>
                {T.map((e,i)=>
                    <div key={i} className="form-floating my-2">
                        <input type="text" defaultValue={obj.current[e]} className="form-control" placeholder={e} onChange={(event)=>setAtt(e,event.target.value)}/>
                        <label>{e}</label>
                    </div>
                )}
                <span className="updateP" onClick={()=>{dispatch({type:'update',payload:{e:obj.current,upd:false}})}}>
                    <span className="update2">Update</span>
                </span>
            </div>
        </div>
    )
}
