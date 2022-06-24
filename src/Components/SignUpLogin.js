import { login, logout } from "../services/firebase";

const SignUpLogin = (props) => {

  return (
    <div className="sign-up-login">
      <ul>
        {
          props.user
          ? 
              (
                <>
                  <li className="greeting-list-item">Welcome, {props.user.displayName} </li>
                  <li className="user" onClick={logout}>Logout</li>
                </>
              )
            : <li className="user" onClick={login}>Login</li>
        }
      </ul>
    </div>
  )
}

export default SignUpLogin


{/* <img src={props.user.photoURL}
              style={photoStyles}
             alt={props.user.displayName} className='user-image' */}