import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Content from './Content'
import '../assets/css/layout.css'

import { Container, Row, Col } from "react-bootstrap";

function Layout() {
  return (
    <div>
        <Header />
      < div className="container1">
        <Row className='S1'> 
          {/* for sidebar */}
          <Col md={3} sm={12} xs={12} className='background-sd'>
            <Sidebar />
          </Col>
          {/* for content */}
          <Col md={9} sm={12} xs={12} >
            <Content />
          </Col>
          {/* for footer  */}
          <Col md={12} sm={12} xs={12} >
            <Footer />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Layout