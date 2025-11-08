import { useEffect, useState } from "react"

export function Arrays(){

    const [categories] = useState(['All', 'Electronics','fashion','jewelery']);

    useEffect(()=>{
        
    },[]);

    return(
        <div className="container-fluid">
            <header className="mt-4 p-4 d-flex justify-content-between border border-2">
                <div className="h3">Amazon</div>
                <nav>
                    {
                        categories.map((category,i)=>
                        <span key={i} className="mx-4"><a href="#">{category}</a></span>)
                    }
                </nav>
                <div>
                    <span className="bi bi-heart"></span>
                    <span className="bi bi-cart3 mx-2"></span>
                </div>
            </header>
            <ol>
                {categories.map((category,index)=><li key={index}>{category}</li>)}
            </ol>

            <h2>Select Category</h2>
            <select>
                {categories.map((category, index)=><option key={index}>{category}</option>)}
            </select>

            <h2>Select Categories</h2>
            <ul className="list-unstyled">
                {
                    categories.map((category=><li><input type="checkbox" value={category}/><label>{category}</label></li>))
                }
            </ul>
        </div>
    )
}