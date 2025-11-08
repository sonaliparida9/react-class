import { useEffect, useState } from "react";

export function DataBinding(){
    const [price, setPrice] = useState(0);
    const [name, setName] = useState("");
    const [msg, setMsg] = useState('');
    const [stock, setStock] = useState(true);
    

    useEffect(()=>{
        setPrice(2345);
        setName("Apple iPhone 14 Pro Max");
        setMsg("Welcome to React");
        setStock(false);
    },[])

    return (
        <div className="container-fuid">
            <h2 className="text-center text-warning p-3">Data Binding</h2>
            <dl>
                <dt>Product Name</dt>
                <dd>{name}</dd>
                <dt>Product Price</dt>
                <dd>{price.toLocaleString('en-in',{style:`currency`,currency:'INR'})}</dd> //Number
                <dt>Message</dt>
                <dd>{msg.toUpperCase().substring(7,0)}</dd> //string
                <dt>Stock</dt>
                <dd>Stock : {(stock === true) ?"true":"false"} </dd>
            </dl>

        </div>
    )
}