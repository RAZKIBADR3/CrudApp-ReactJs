import React ,{useRef , useContext , useReducer} from 'react'
import { CrudContext } from './App';
import Product from './Product';
import Update from './Update';

export const fContext = React.createContext()
function reducer(state, action) {
    switch (action.type) {
        case 'add':
            action.payload.cmp.nb = action.payload.cmp.nb + 1;
            return {products: [...state.products,{cmp:action.payload.cmp.nb,...action.payload.obj}]};
        case 'delete':
            return {products: state.products.filter(ee=>ee!==action.payload.e)};
        case 'getProduct':
            return {products: state.products , obj2: action.payload.e , upd: action.payload.upd}
        case 'update':
            let T = state.products
            let index = T.indexOf(T.find(ee=>ee===action.payload.e))
            T.splice(index,1,{...action.payload.e})
            return {products: T , obj2: {} , upd: action.payload.upd}
        default:
            throw new Error();
    }
}

export default function Home(){
    const T = useContext(CrudContext)
    const [state,dispatch] = useReducer(reducer, {products: [], obj2: {},upd: false});
    const cmp = useRef({nb:-1})
    const obj = useRef({})
    function setAtt(att,val){
        obj.current[att] = val
    }

    return (
        <div className='container-fluid'>
            <div className="inputs">
                <h1>ADD Product</h1>
                {T.map((e,i)=>
                    <div key={i} className="form-floating my-2">
                        <input type="text" className="form-control" placeholder={e} onChange={(event)=>setAtt(e,event.target.value)}/>
                        <label>{e}</label>
                    </div>
                )}
                <div className="addP">
                    <span onClick={()=>dispatch({type:'add',payload:{obj:obj.current,cmp:cmp.current}})} className="add">add</span>
                </div>
            </div>
            
            <div className="products">
                {state.products.map((e,i)=>
                    <fContext.Provider key={i} value={[e,dispatch]}>
                        <Product/>
                    </fContext.Provider>
                )}
            </div>
            {state.upd===true&&<Update obj2={state.obj2} dispatch={dispatch}/>}
        </div>
    )
}