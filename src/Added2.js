import React, { Component } from 'react';

function Added(props) {

// -------------------------------------------------------------------------------

  const list = Object.entries(props).map(([key, value])=>{
    <ul>
        <li className="box" key={key}>
          <p className="box">{value.date}</p>
          <p className="box">{value.sku}</p>
          <p className="box">{value.name}</p>
        </li>
     </ul>
  });

// -------------------------------------------------------------------------------

  // const content = props.entries().map((key, value) =>
  //   <div key={key}>
  //     <h3>{value.sku}</h3>
  //     <h3>{value.name}</h3>
  //     <h3>{value.date}</h3>
  //   </div>
  // );

// -------------------------------------------------------------------------------

  return (
    <div>
      {list}
      // <hr />
    </div>
  );
}

export default Added;

// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------

// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );