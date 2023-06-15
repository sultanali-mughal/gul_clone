import React, { useState } from "react";
import "../assets/css/sidebar.css";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';


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
          {content.map(title => {
            return <div key={title}><Link to={"/"+title}>{title}</Link></div>;
           })}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const PagesArr = ['ChunriCollection','RedCollection2023', 'SummerEsssentialCollection', 'SummerEsssentialCollection', 'SummerEsssentialCollection'];
  return (
    <div className="sidebar">
      <h4>Filter</h4>
      <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    <Stack gap={3}>
                        <div className="bg-warning border">First item</div>
                        <div className="bg-warning border">Second item</div>
                        <div className="bg-warning border">Third item</div>
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    <Stack gap={3}>
                        <div className="bg-warning border">First item</div>
                        <div className="bg-warning border">Second item</div>
                        <div className="bg-warning border">Third item</div>
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
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