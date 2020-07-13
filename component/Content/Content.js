import ContentList from './ContentList'
import Aside from './Aside'
import ReadContent from './ReadContent'
import { Row, Col } from 'react-bootstrap'
import styles from './Content.module.css'

export default function Content(props) {
  return (
    <Row className={styles.container}>
      <Col sm={8}>
        { props.page === 'home' ? <ContentList /> : <ReadContent /> }
      </Col>
      <Col sm={4}>
        <Aside />
      </Col>
    </Row>
  )
}