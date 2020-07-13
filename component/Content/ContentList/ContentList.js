import styles from './ContentList.module.css'
import { Row, Col, Image } from 'react-bootstrap'

export default function ContentList() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <Row>
          <Col sm={3}>
            <Image src="https://i.dlpng.com/static/png/6979421_preview.png" rounded fluid alt="img" />
          </Col>
          <Col sm={9}>
            <h5>Lorem Ipsum is simply dummy</h5>
            <h7>26 Octover 2020 | 17:18</h7>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </Col>
        </Row>
      </div>

      <div className={styles.box}>
        <Row>
          <Col sm={3}>
            <Image src="https://i.dlpng.com/static/png/6979421_preview.png" rounded fluid alt="img" />
          </Col>
          <Col sm={9}>
            <h5>Lorem Ipsum is simply dummy</h5>
            <h7>26 Octover 2020 | 17:18</h7>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </Col>
        </Row>
      </div>

      <div className={styles.box}>
        <Row>
          <Col sm={3}>
            <Image src="https://i.dlpng.com/static/png/6979421_preview.png" rounded fluid alt="img" />
          </Col>
          <Col sm={9}>
            <h5>Lorem Ipsum is simply dummy</h5>
            <h7>26 Octover 2020 | 17:18</h7>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  )
}