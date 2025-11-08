import { Link } from "react-router-dom";

export function ToDoHome(){
    return(
        <div className="text-center mt-5">
            <Link to='/user-reigster' className="btn btn-warning">New User Register </Link>
            <Link to='/user-login' className="btn mx-2 btn-danger">User Login</Link>

        </div>
    )
}