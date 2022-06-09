import {Navigate, useLocation} from 'react-router-dom';

function ProtectedRoute(props) {

    let loggedin = false; //! temp variable 
    
    const location = useLocation();
    
    if(!loggedin) {
        return <Navigate to={"authenticate"} state={{from: location}} replace />;
    }
    return props.children;

}

export default ProtectedRoute