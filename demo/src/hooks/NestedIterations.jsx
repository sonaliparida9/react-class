import { useEffect, useState } from "react";


export function ArrayofObject1(){

    const [items] = useState(
        [
            {Category: 'Electronics', Products:['TV','Mobile']},
            {Category:'Footwear', Products:['Casuals','Boots','Sneakers']}
        ]
    )

    useEffect(()=>{

    },[])


    return(
        <div className="container-fluid">
            <h2>Menu</h2>
            <ol>
                {
                    items.map(item=>
                        <li key={item}>{item.Category}
                            <ul>
                                {
                                    item.Products.map(product=>
                                        <li key={product}>{product}</li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>

            <h2>Menu</h2>
            <select>
                {
                    items.map(item=>
                        <optgroup label={item.Category} key={item}>
                            {
                                item.Products.map(product=><option key={product}>{product}</option>)
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
    )
}