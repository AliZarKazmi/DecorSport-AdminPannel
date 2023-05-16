import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


function Searchbar() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubCategory("");
  };
  
  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
  };
  
  const renderSubCategoryOptions = () => {
    if (selectedCategory === "Profiles") {
      return (
        <select value={selectedSubCategory} class="form-control" id="category" onChange={handleSubCategoryChange}>
          <option value="All">All</option>
          <option value="Seller Account">Seller Account</option>
          <option value="Decorator Account">Decorator Account</option>
        </select>
      );
    } else if (selectedCategory === "Ideas") {
      return (
        <select value={selectedSubCategory} class="form-control" id="category" onChange={handleSubCategoryChange}>
          <option value="All">All</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Study-room">Study-room</option>
          <option value="Bridal-room">Bridal-room</option>
          <option value="Gaming-room">Gaming-room</option>
          <option value="Storage-room">Storage-room</option>
          <option value="Kid-room">Kid-room</option>
          <option value="Dinning-room">Dinning-room</option>
          <option value="Living-room">Living-room</option>
          <option value="Guest-room">Guest-room</option>
          <option value="Laundry-room">Laundry-room</option>
          <option value="Birthday-Part">Birthday-Part</option>
        </select>
      );
    } else if (selectedCategory === "Products") {
      return (
        <select value={selectedSubCategory} class="form-control" id="category" onChange={handleSubCategoryChange}>
          <option value="All">All</option>
          <option value="Furniture">Furniture</option>
          <option value="Fabric Material">Fabric Material</option>
          <option value="Decoration Acessories">Decoration Acessories</option>
          <option value="Decoration Cobering">Decoration Cobering</option>
          <option value="Wallpapers">Wallpapers</option>
          <option value="Ceiling">Ceiling</option>
          <option value="Art-pieces">Art-pieces</option>
          <option value="Lamp and Lightning">Lamp and Lightning</option>
          <option value="Table">Table</option>
          <option value="Bed">Bed</option>
          <option value="Sofa">Sofa</option>
        </select>
      );
    } else {
      return null; // No sub-category options for other categories
    }
  };

  return (
  <div>
    <h4>Filters</h4>
    <form>
              <div class="form-group">
                <label for="search">Search:</label>
                <input type="text" class="form-control" id="search" placeholder="Enter search keyword"/>
              </div>
              <div class="form-group">
                <label for="category">Category:</label>
                <select class="form-control" id="category" onChange={handleCategoryChange}>
                  <option value="">All</option>
                  <option value="Profiles">Profiles</option>
                  <option value="Products">Products</option>
                  <option value="Ideas">Ideas</option>
                  {/* <option value="Queries">Queries</option> */}
                </select>
              </div>
                      
                      
              <div class="form-group">
                <label for="sub-category">Sub-Category:</label>
                {/* <select class="form-control" id="status">
                  <option value="">All</option>
                  <option value="active">Home Decoration</option>
                  <option value="inactive">Occassion Decoration</option>
                </select> */}
                {renderSubCategoryOptions()}





{/* 
                {selectedCategory === "Profiles" && (
        <select value={selectedSubCategory} class='form-control' id='status' onChange={handleSubCategoryChange}>
          <option value="">Select Sub-Category</option>
          <option value="Seller Account">Seller Account</option>
          <option value="Decorator Account">Decorator Account</option>
        </select>
      )}

{selectedCategory === "Products" && (
        <select value={selectedSubCategory} onChange={handleSubCategoryChange}>
          <option value="">Select Sub-Category</option>
          <option value="Table">Table</option>
          <option value="Chair">Chair</option>
          <option value="Lamp">Lamp</option>
          <option value="Sofa">Sofa</option>
        </select>
      )} */}

              </div>
              <button type="submit" class="btn btn-primary">Apply Filters</button>
            </form>
  </div>
  );
}

export default Searchbar;
