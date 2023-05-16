import Button from 'react-bootstrap/Button';

function ActiveExample() {
  return (
    <div style={{margin:"0.3rem",padding:"0.3rem",marginRight:"0.3rem", backgroundColor:"grey",borderRadius:"0.3rem"}}>
        <div style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem 0",
      }}>
      <Button variant="outline-success" href="/seller-profile" size="sm" active>
        Seller Profiles
      </Button>
      <Button variant="outline-success" href="/deocrator-profile" size="sm" active>
        Decorator Profiles
      </Button>
      <Button variant="outline-success" href="/product" size="sm" active>
        Products
      </Button>
      <Button variant="outline-success" href="/idea" size="sm" active>
        Ideas
      </Button>
      <Button variant="outline-success" href="/query" size="sm" active>
        Query
      </Button>
    </div>

    </div>
    
  );
}

export default ActiveExample;