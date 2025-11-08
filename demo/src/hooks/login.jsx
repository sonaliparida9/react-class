import { useCaptcha } from "./use-captcha";
import { useFetch } from "./use-fetch";

export function Login(){
    const code = useCaptcha();

    const categories = useFetch("https://fakestoreapi.com/products/categories");
    
    return (
        <>
        <div className="d-flex justify-content-center">
            <form className="login-form mt-4 rounded rounded-2">
                <h2 className="bi bi-person-circle">User login</h2>
                <dl>
                    <dt><label htmlFor="username">Username:</label></dt>
                    <dd><input type="text" name="username" id="username" className="form-control" required/></dd>
                    <dt><label htmlFor="password">Password:</label></dt>
                    <dd><input type="password" name="password" id="password" className="form-control" required/></dd>
                    <dt><label htmlFor="captcha">Verify Code:</label><button className="btn bi bi-arrow-clockwise"></button></dt>
                    <dd>{code}</dd>
                </dl>
                <button className="btn btn-warning">Login</button>
                <ul>
                    {categories.map(category=> <li key ={category}>{category}</li>)}
                </ul>
            </form>
        </div>
        </>
    )
}