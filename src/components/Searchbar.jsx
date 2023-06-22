import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@material-ui/core';
import Swal from "sweetalert2";
import { db } from "../firebaseConfig/Firebase.js";
import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

function Searchbar() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(''); 
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const applyFilters = async () => {
  let filteredQuery;
  
  if(searchKeyword!="" && selectedCategory!="" && selectedSubCategory!="")
  {
    if("Profiles"==selectedCategory)
    {
      const dataRef= collection(db, "RegisterationForms");
      
       filteredQuery = query(dataRef, where('CompanyName', '==', searchKeyword), where('AccountType', '==', selectedSubCategory));  
       
      const filteredDataSnapshot = await getDocs(filteredQuery);

      if(filteredDataSnapshot.size==0)
      {
         Swal.fire("Not Found!")
      }
      else{
        const filteredData = filteredDataSnapshot.docs.map((doc) => doc.data());
        console.log(filteredData); // Display filtered data on the console
      }
    }

    if("Products"==selectedCategory)
    {
      const dataRef= collection(db, "ProductList");
  
       filteredQuery = query(dataRef,  where('ProductName', '==', searchKeyword),where('Category', '==', selectedSubCategory));
      
      const filteredDataSnapshot = await getDocs(filteredQuery);

      if(filteredDataSnapshot.size==0)
      {
         Swal.fire("Not Found!")
      }
      else{
      const filteredData = filteredDataSnapshot.docs.map((doc) => doc.data());
  
      console.log(filteredData); // Display filtered data on the console
    }
  }
  
    if("Ideas"==selectedCategory)
    {
      const dataRef= collection(db, "IdeasList");
  
     
          filteredQuery = query(dataRef,  where('SubCategory', '==', searchKeyword),where('Category', '==', selectedSubCategory));
      
      const filteredDataSnapshot = await getDocs(filteredQuery);
      if(filteredDataSnapshot.size==0)
      {
         Swal.fire("Not Found!")
      }
      else{
      const filteredData = filteredDataSnapshot.docs.map((doc) => doc.data());
  
      console.log(filteredData); // Display filtered data on the console
    }
  }

  }
  else
  {
    Swal.fire("Search Fields are Empty");
  }
  
  if(selectedCategory=="" && selectedSubCategory=="" && searchKeyword=="")
  {
    Swal.fire("Not Found! ");
  }
   
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '8px', marginRight: "5px" }}>
      <h2 style={{ margin: "20px" }}>Filters</h2>
      <form>
        <FormControl fullWidth style={{ margin: '15px', backgroundColor: 'white', borderRadius: '8px' }}>
          {/* <InputLabel htmlFor="search">Search:</InputLabel> */}
          <TextField
            id="search"
            placeholder="Enter search keyword"
            variant="outlined"
            value={searchKeyword}
            onChange={handleSearchKeywordChange}
          />
        </FormControl>

        <FormControl fullWidth style={{ margin: '15px', backgroundColor: 'white', borderRadius: '8px' }}>
          <InputLabel id="category">Category:</InputLabel>
          <Select
            labelId="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="outlined"
            fullWidth
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Profiles">Profiles</MenuItem>
            <MenuItem value="Products">Products</MenuItem>
            <MenuItem value="Ideas">Ideas</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ margin: '15px', backgroundColor: 'white', borderRadius: '8px' }}>
          <InputLabel id="sub-category">Sub-Category:</InputLabel>
          {selectedCategory === 'Profiles' && (
            <Select
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Product Seller">Product Seller</MenuItem>
              <MenuItem value="Decorator">Decorator</MenuItem>
            </Select>
          )}
          {selectedCategory === 'Ideas' && (
            <Select
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Occasion Decoration Ideas">Occasion Decoration Ideas</MenuItem>
              <MenuItem value="Home Decoration Ideas">Home Decoration Ideas</MenuItem>
              {/* Additional sub-category options */}
            </Select>
          )}
          {selectedCategory === 'Products' && (
            <Select
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Fabric Material">Fabric Collection</MenuItem>
              <MenuItem value="Decoration Accessories">Decoration Accessories</MenuItem>
              <MenuItem value="Decorated Coverings">Decorated Coverings</MenuItem>
            </Select>
          )}
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '10px', marginLeft: "12px" }}
          fullWidth
          onClick={applyFilters}
        >
          Apply Filters
        </Button>
      </form>
    </div>
  );
}

export default Searchbar;




