
import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
} from '@material-ui/core';


function Searchbar() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory('');
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const renderSubCategoryOptions = () => {
    if (selectedCategory === 'Profiles') {
      return (
        <Select
          value={selectedSubCategory}
          onChange={handleSubCategoryChange}
          variant="outlined"
          fullWidth
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Seller Account">Seller Account</MenuItem>
          <MenuItem value="Decorator Account">Decorator Account</MenuItem>
        </Select>
      );
    } else if (selectedCategory === 'Ideas') {
      return (
        <Select
          value={selectedSubCategory}
          onChange={handleSubCategoryChange}
          variant="outlined"
          fullWidth
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Bedroom">Occasion Ideas</MenuItem>
          <MenuItem value="Study-room">Home Ideas</MenuItem>
          {/* Additional sub-category options */}
        </Select>
      );
    } else if (selectedCategory === 'Products') {
      return (
        <Select
          value={selectedSubCategory}
          onChange={handleSubCategoryChange}
          variant="outlined"
          fullWidth
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Furniture">Furniture</MenuItem>
          <MenuItem value="Fabric Material">Fabric Collection</MenuItem>
          <MenuItem value="Decoration Accessories">Decorated Accessories</MenuItem>
          <MenuItem value="Decoration Covering">Decorated Covering</MenuItem>
        </Select>
      );
    } else {
      return null; // No sub-category options for other categories
    }
  };

  return (
   
            <div style={{ backgroundColor: 'white', borderRadius: '8px', marginRight:"5px"}}>
          <h2 style={{margin:"20px"}}>Filters</h2>
          <form >
            <FormControl  fullWidth style={{ margin:'15px',backgroundColor: 'white', borderRadius: '8px', }}>
              <InputLabel htmlFor="search" ></InputLabel>
              <TextField id="search" placeholder="Enter search keyword" variant="outlined" />
            </FormControl>

            <FormControl  fullWidth style={{ margin:'15px',backgroundColor: 'white', borderRadius: '8px', }}>

              <InputLabel id="category" style={{marginLeft: "12px" }}> Category:</InputLabel>
              
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

            <FormControl fullWidth style={{ margin:'15px',backgroundColor: 'white', borderRadius: '8px', }}>
              <InputLabel id="sub-category" style={{marginLeft: "12px" }}> Sub-Category:</InputLabel>
              {renderSubCategoryOptions()}
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '10px',marginLeft:"12px" }}
              fullWidth
            >
              Apply Filters
            </Button>
          </form>
        </div>
      
  );
}

export default Searchbar;





