import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';
import axios from 'axios'
import classes from './Container.module.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CallIcon from '@material-ui/icons/Call';
import { MenuItem, MenuList } from '@material-ui/core';

const Container = (props) => {

    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get(' http://54.253.29.55/api/stores').then((response) => {
            console.log(response.data)
            setState(response.data.data)
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
          });
    }, []);
    useEffect(() => {
        setFilteredData(
          state.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
           ),

        );
      }, [search, state]);
    
      if (loading) {
        return <p>Loading data...</p>;
      }
    console.log(state)
    return (
        
          <Fragment>
<div className={classes.container}  >
<div className={classes.section} >
<h1>Our Stores</h1>
<div className={classes.searchbox}>
< SearchIcon/>
<input  
type="text" 

placeholder="search store"    
onChange={(e) => setSearch(e.target.value)}/>
</div>
<table>
{filteredData.map((p, idx) => (
 <tbody>
      <tr>
        <td>
           <h2>{p.name}</h2>
           <h5>{p.address}</h5>
           <h6>{p.hours}</h6>
           <button className={classes.btn}> <ShoppingBasketIcon />{p.name} Menu</button>
           <button className={classes.btn}><LocalShippingIcon/>Platers Menu</button>
        </td>
        <td>
           <img src={p.image} width={200} height={200} alt="IMAGE" />
            <button className={classes.btn}><CallIcon/>CALL</button>
        </td>
    </tr>
 </tbody>
   
 ))}
</table>

</div>
<div >
{/* {state.map((p) => (

)
)} */}
</div>
        <div  className={classes.container1} >
          <div  className={classes.menu}>
              <MenuList >
              <MenuItem >New South Wales</MenuItem>
              <MenuItem  >Queensland</MenuItem>
              <MenuItem  >South Australia</MenuItem>
              <MenuItem  >Tasmania</MenuItem>
              <MenuItem  >Victoria</MenuItem>
              </MenuList>
       
          </div>
        </div>

</div>
</Fragment>
    )
};
export default Container;