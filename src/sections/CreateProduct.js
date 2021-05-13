import React from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import PreviewCard from '../components/PreviewCard'
import UploadCard from '../components/UploadCard'
import CropCard from '../components/CropCard'

function CreateProduct(props) {
    return (

            <Container>
            <Row className="section-row pt-5 pb-3" style={{justifyContent: 'center', marginBottom: '30px'}}><h2>Create Pendant</h2></Row>
            <Row className="section-row">

                    <Col className="px-4">
                    <UploadCard image={props.image} />
                    </Col>
                    <Col className="px-4">
                    <CropCard />
                    </Col>
                    <Col className="px-4">
                    <PreviewCard />
                    </Col>

            </Row>
            </Container>

    )
}
const mapStateToProps = state => {
    return {
      image: state.createPendant.image
    }
  }
export default connect(mapStateToProps)(CreateProduct)