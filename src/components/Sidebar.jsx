import React, { useState } from "react";
import "../assets/css/sidebar.css";

const CollapseButton = ({ buttonText, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button className="btnExp" onClick={handleToggleCollapse}>
        {isCollapsed ? "" : ""} {buttonText}
        {/* 'Expend' : 'Collapse' */}
      </button>
      {!isCollapsed && (
        <div>
          {/* Content to be displayed when expanded */}
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4>Filter</h4>
      <hr />
      <CollapseButton
        buttonText="CATEGORY"
        content="> <a href='#'>Summer Esssential Collection</a> <BR>
                 > <a href='#'>Tribute Collection</a> <BR> 
                 > <a href='#'>Summer Premium Collections</a> <BR>
                 > <a href='#'>Vintage Garden</a> <BR> 
                 > <a href='#'>Yolo collection</a> <BR>
                 > <a href='#'>Red Collection 2023</a> <BR>
                 > <a href='#'>Chunri Collection</a> <BR>"
      />
      <hr />
      <CollapseButton
        buttonText="DISCOUNT PERCENTAGE"
        content="> <a href='#'>30%</a> <BR>"
      />
      <hr />
      <CollapseButton
        buttonText="PRICE"
        content=" > <a href='#'>PKR 0.00 - PKR 2,999.99</a> <BR>
                  > <a href='#'>PKR 3,000.00 - PKR 5,999.99</a> <BR>
                  > <a href='#'>PKR 6,000.00 - PKR 8,999.99</a> <BR>
                  > <a href='#'>PKR 9,000.00 - PKR 11,999.99</a> <BR>
                  > <a href='#'>PKR 12,000.00 - PKR 14,999.99</a> <BR>
                  > <a href='#'>PKR 15,000.00 - PKR 17,999.99</a> <BR>"
      />
      <hr />
      <CollapseButton
        buttonText="TYPE"
        content=" >  <a href='#'> 1 PC</a> <BR>
                  >  <a href='#'> 2 PC</a> <BR>
                  >   <a href='#'> 3 PC</a> <BR>"
      />
      <hr />
      <CollapseButton
        buttonText="SHIRT FABRIC"
        content="> <a href='#'>Lawn</a> <BR>
                 > <a href='#'>Chunri Lawn</a> <BR> 
                 > <a href='#'>Embroidered Lawn</a> <BR>
                 > <a href='#'>Cotton</a> <BR> 
                 > <a href='#'>Denting</a> <BR>"
      />
      <hr />
      <CollapseButton
        buttonText="DUPATTA FABRIC"
        content="> <a href='#'>Lawn</a> <BR>
                 > <a href='#'>Chiffon</a> <BR> 
                 > <a href='#'>Embroidered Lawn</a> <BR>
                 > <a href='#'>Silk</a> <BR> 
                 > <a href='#'>Net</a> <BR>
                 > <a href='#'>Dobby</a> <BR>
                 > <a href='#'>Chunri Lawn</a> <BR>
                 > <a href='#'>Denting Lawn</a> <BR>"
      />
      <hr />
    </div>
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import "../assets/css/sidebar.css";
// import Dropdown from "react-bootstrap/Dropdown";

// function Sidebar() {
//   const [collapseShow, setCollapseShow] = useState("collapse");
//   const [collapseShow1, setCollapseShow1] = useState("collapse");
//   const [collapseShow2, setCollapseShow2] = useState("collapse");

//   const [expanded, setExpanded] = useState(true);

//   function Collapsible(event) {
//     debugger;
//     if (event.target.id === "btnCollapseOne") {
//       if (expanded === true) {
//         setCollapseShow("collapse show");
//       } else if (expanded === false) {
//         setCollapseShow("collapse");
//       }
//     }

//     if (event.target.id === "btnCollapseTwo") {
//       if (expanded === true) {
//         setCollapseShow1("collapse show");
//       } else if (expanded === false) {
//         setCollapseShow1("collapse");
//       }
//     }

//     if (event.target.id === "btnCollapseThree") {
//       if (expanded === true) {
//         setCollapseShow2("collapse show");
//       } else if (expanded === false) {
//         setCollapseShow2("collapse");
//       }
//     }

//     setExpanded(!expanded);
//   }

//   return (
//     <div className="sidebar">
//       <h3>FILTER</h3>
//       <hr />
//       <div id="accordion">
//         <div class="card">
//           <div class="card-header" id="headingOne">
//             <h5 class="mb-0">
//               <button
//                 id="btnCollapseOne"
//                 class="btn btn-link"
//                 data-toggle="collapse"
//                 data-target="#collapseOne"
//                 aria-expanded={expanded}
//                 aria-controls="collapseOne"
//                 onClick={(event) => Collapsible(event)}
//               >
//                 Collapsible Group Item #1
//               </button>
//             </h5>
//           </div>

//           <div
//             id="collapseOne"
//             class={collapseShow}
//             aria-labelledby="headingOne"
//             data-parent="#accordion"
//           >
//             <div class="card-body">
//               Anim pariatur cliche reprehenderit, enim eiusmod high life
//               accusamus terry richardson ad squid. 3 wolf moon officia aute, non
//               cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
//               laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
//               on it squid single-origin coffee nulla assumenda shoreditch et.
//               Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
//               nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
//               lomo. Leggings occaecat craft beer farm-to-table, raw denim
//               aesthetic synth nesciunt you probably haven't heard of them
//               accusamus labore sustainable VHS.
//             </div>
//           </div>
//         </div>
//         <div class="card">
//           <div class="card-header" id="headingTwo">
//             <h5 class="mb-0">
//               <button
//                 class="btn btn-link"
//                 id="btnCollapseTwo"
//                 data-toggle="collapse"
//                 data-target="#collapseTwo"
//                 aria-expanded={expanded}
//                 aria-controls="collapseTwo"
//                 onClick={(event) => Collapsible(event)}
//               >
//                 Collapsible Group Item #2
//               </button>
//             </h5>
//           </div>
//           <div
//             id="collapseTwo"
//             class={collapseShow1}
//             aria-labelledby="headingTwo"
//             data-parent="#accordion"
//           >
//             <div class="card-body">
//               Anim pariatur cliche reprehenderit, enim eiusmod high life
//               accusamus terry richardson ad squid. 3 wolf moon officia aute, non
//               cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
//               laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
//               on it squid single-origin coffee nulla assumenda shoreditch et.
//               Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
//               nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
//               lomo. Leggings occaecat craft beer farm-to-table, raw denim
//               aesthetic synth nesciunt you probably haven't heard of them
//               accusamus labore sustainable VHS.
//             </div>
//           </div>
//         </div>
//         <div class="card">
//           <div class="card-header" id="headingThree">
//             <h5 class="mb-0">
//               <button
//                 class="btn btn-link"
//                 id="btnCollapseThree"
//                 data-toggle="collapse"
//                 data-target="#collapseTwo"
//                 aria-expanded={expanded}
//                 aria-controls="collapseTwo"
//                 onClick={(event) => Collapsible(event)}
//               >
//                 Collapsible Group Item #3
//               </button>
//             </h5>
//           </div>
//           <div
//             id="collapseThree"
//             class={collapseShow2}
//             aria-labelledby="headingThree"
//             data-parent="#accordion"
//           >
//             <div class="card-body">
//               Anim pariatur cliche reprehenderit, enim eiusmod high life
//               accusamus terry richardson ad squid. 3 wolf moon officia aute, non
//               cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
//               laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
//               on it squid single-origin coffee nulla assumenda shoreditch et.
//               Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
//               nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
//               lomo. Leggings occaecat craft beer farm-to-table, raw denim
//               aesthetic synth nesciunt you probably haven't heard of them
//               accusamus labore sustainable VHS.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
