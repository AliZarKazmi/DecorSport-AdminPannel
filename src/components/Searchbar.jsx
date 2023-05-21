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











// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Form } from 'react-bootstrap';



// function Searchbar() {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedSubCategory, setSelectedSubCategory] = useState("");

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//     setSelectedSubCategory("");
//   };
  
//   const handleSubCategoryChange = (e) => {
//     setSelectedSubCategory(e.target.value);
//   };
  
//   const renderSubCategoryOptions = () => {
//     if (selectedCategory === "Profiles") {
//       return (
//         <select value={selectedSubCategory} class="form-control" id="category" onChange={handleSubCategoryChange}>
//           <option value="All">All</option>
//           <option value="Seller Account">Seller Account</option>
//           <option value="Decorator Account">Decorator Account</option>
//         </select>
//       );
//     } else if (selectedCategory === "Ideas") {
//       return (
//         <select value={selectedSubCategory} class="form-control" id="category" onChange={handleSubCategoryChange}>
//           <option value="All">All</option>
//           <option value="Bedroom">Occasion Ideas</option>
//           <option value="Study-room"> Home Ideas</option>
//           {/* <option value="Bridal-room">Bridal-room</option>
//           <option value="Gaming-room">Gaming-room</option>
//           <option value="Storage-room">Storage-room</option>
//           <option value="Kid-room">Kid-room</option>
//           <option value="Dinning-room">Dinning-room</option>
//           <option value="Living-room">Living-room</option>
//           <option value="Guest-room">Guest-room</option>
//           <option value="Laundry-room">Laundry-room</option>
//           <option value="Birthday-Part">Birthday-Part</option> */}
//         </select>
//       );
//     } else if (selectedCategory === "Products") {
//       return (
//         <select value={selectedSubCategory} class="form-control" id="category" onChange={handleSubCategoryChange}>
//           <option value="All">All</option>
//           <option value="Furniture">Furniture</option>
//           <option value="Fabric Material">Fabric Collection</option>
//           <option value="Decoration Acessories">Decorated Acessories</option>
//           <option value="Decoration Cobering">Decorated Covering</option>
//         </select>
//       );
//     } else {
//       return null; // No sub-category options for other categories
//     }
//   };

//   return (
//   <div>
//     <h4>Filters</h4>
//     <form>
//               <div class="form-group">
//                 <label for="search">Search:</label>
                
//                 <input type="text" class="form-control" id="search" placeholder="Enter search keyword"/>
//               </div>
//               <div class="form-group">
//                 <label for="category">Category:</label>
//                 <select class="form-control" id="category" onChange={handleCategoryChange}>
//                   <option value="">All</option>
//                   <option value="Profiles">Profiles</option>
//                   <option value="Products">Products</option>
//                   <option value="Ideas">Ideas</option>
//                   {/* <option value="Queries">Queries</option> */}
//                 </select>
//               </div>
                      
                      
//               <div class="form-group">
//                 <label for="sub-category">Sub-Category:</label>
//                 {/* <select class="form-control" id="status">
//                   <option value="">All</option>
//                   <option value="active">Home Decoration</option>
//                   <option value="inactive">Occassion Decoration</option>
//                 </select> */}
//                 {renderSubCategoryOptions()}





// {/* 
//                 {selectedCategory === "Profiles" && (
//         <select value={selectedSubCategory} class='form-control' id='status' onChange={handleSubCategoryChange}>
//           <option value="">Select Sub-Category</option>
//           <option value="Seller Account">Seller Account</option>
//           <option value="Decorator Account">Decorator Account</option>
//         </select>
//       )}

// {selectedCategory === "Products" && (
//         <select value={selectedSubCategory} onChange={handleSubCategoryChange}>
//           <option value="">Select Sub-Category</option>
//           <option value="Table">Table</option>
//           <option value="Chair">Chair</option>
//           <option value="Lamp">Lamp</option>
//           <option value="Sofa">Sofa</option>
//         </select>
//       )} */}

//               </div>
//               <button type="submit" class="btn btn-primary">Apply Filters</button>
//             </form>
//   </div>
//   );
// }

// export default Searchbar;
