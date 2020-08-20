import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import {auth} from "../../firebase/firebase.utils"
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {connect} from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
 

const Header = ({currentUser,hidden}) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">Shop</Link>
      <Link to="/shop" className="option">Contact</Link>
      {currentUser ? <div className="option" onClick={()=> auth.signOut()}>SIGN OUT </div> : <Link className="option" to="/signin">SIGN IN</Link>}
      <CartIcon/>
    </div> {
      hidden? null :<CartDropDown/>
    }
    
  </div>
);

const mapStateToProps = ({user:{currentUser},cart:{hidden}})=>({
  currentUser,hidden
})
export default connect(mapStateToProps) (Header);
