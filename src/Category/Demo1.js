import { useState } from "react";
import Data from "./data";
import data from "./data";

function Test() {
  return (
    <>
      <Demo
        imglink={Data[0].imglink}
        title={Data[0].title}
        price={Data[0].price}
      />
    </>
  );
}
function Demo(props) {
  //let [list] = useState(Array.from({ length: 12 }));

  return (
    <>
      <div className="row">
        <div key={index} className="col-12 col-md-3">
          <div className="card">
            <img
              src={props.imglink}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.price}</p>
              <a href="#" className="btn btn-primary">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
