import React from "react";
import { Card } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

export default function SearchResult() {
  const location = useLocation();
  const { filteredData } = location.state;

  return (
    <div>
      <h1>Search Result</h1>

      {filteredData.map((item) => {
        if (item.AccountType === "Decorator" || item.AccountType === "ProductSeller") {
          return (
            <div key={item.id} style={{ width: '300px', height: '200px', objectFit: 'cover' }}>
              <Card className="user-card">
                <Card.Img variant="top" src={item.Logo} />
                <Card.Body>
                  <Card.Title>{item.CompanyName}</Card.Title>
                  <Card.Text>{item.BusinessDescription}</Card.Text>

                </Card.Body>
              </Card>
            </div>
          );
        } else if (item.Category == "Home Decoration Ideas" || item.Category == "Occasion  Decoration Ideas") {
          return (
            <div key={item.id} style={{ width: '300px', height: '200px', objectFit: 'cover' }}>
              <Card className="user-card">
                <Card.Img variant="top" src={item.Image_1} />
                <Card.Body>
                  <Card.Text>{item.Description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        } else {
          return (
            <div key={item.id} style={{ width: '300px', height: '200px', objectFit: 'cover' }}>
            <Card className="user-card">
              <Card.Img variant="top" src={item.Image_1} />
              <Card.Body>
                <Card.Text>{item.Description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          );
        }
      })}
    </div>
  );
}
