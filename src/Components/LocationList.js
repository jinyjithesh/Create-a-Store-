
import classes from './LocationList.module.css';
import React, { useEffect, useState } from 'react'
import { MenuItem, MenuList } from '@material-ui/core';
import axios from 'axios'
const LocationList=(props)=>{
  const [state, setState] = useState([]);
  
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredLocation, setFilteredLocation] = useState([1,2,3,4,5]);
  
    useEffect(() => {
    axios.get(' http://54.253.29.55/api/stores').then((response) => {
    console.log(response.data)
    setState(response.data.data);
    setLoading(false);
    
       })
       .catch((err) => {
        console.log(err);
      });
   }, []);
   useEffect(() => {
    setFilteredLocation(
      state.filter((p) =>
        p.city_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, state]);

  if (loading) {
    return <p>Loading data...</p>;
  }

   console.log(state)
    return(
       <div  className={classes.container} >
          <div  className={classes.menu}>
              <MenuList >
              <MenuItem  onChange={(e) => setSearch(e.target.value)}>New South Wales</MenuItem>
              <MenuItem>Queensland</MenuItem>
              <MenuItem>South Australia</MenuItem>
              <MenuItem>Tasmania</MenuItem>
              <MenuItem>Victoria</MenuItem>
              </MenuList>
       
          </div>
          {/* {filteredLocation.map((p, idx) => (
    <div>
         <h2>{p.name}</h2>
          <h5>{p.address}</h5>
          <h6>{p.hours}</h6>
          {p.city_id}
          <button className={classes.btn}>{p.name} Menu</button>
          <button className={classes.btn}>Platers Menu</button>
    </div>
         
      ))} */}

</div>
    );
};
export default LocationList;