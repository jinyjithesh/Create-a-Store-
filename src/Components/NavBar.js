import { Fragment } from 'react';
import Badge from '@material-ui/core/Badge';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import classes from './NavBar.module.css'
const Navbar=()=>{
   
    return(
        
           <Fragment>
              <header className={classes.nav}>
              <div>
                  <h1>Store Locations</h1></div>
              <div>
              <div className={classes.cart}> 
                  <span >< PersonOutlineIcon />Sujith</span>

 <span  className={classes.cart2}>
 <Badge badgeContent={4} color="secondary">
  <ShoppingBasketIcon />
</Badge>Cart
 </span>
             

   </div>  
                            
</div>
 
 </header>
              
 
             
           </Fragment> 
      );
};
export default Navbar;