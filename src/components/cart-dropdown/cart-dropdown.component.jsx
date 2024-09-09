import Button from "../button/button.component";
import "./cart-dropdown.styles.scss"

const CartDropDown = ({setDropDown}) => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button onClick={() => setDropDown((prev) => !prev)}>GO TO CHECKOUT</Button>
    </div>
  )
};

export default CartDropDown;