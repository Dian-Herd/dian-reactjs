import React from 'react'
import {Row, Container} from 'react-bootstrap'
import {getData} from './data'
import CardComponent from './CardComponent'

const BettaFish = () => {
  let datas = getData();
  return(
    <Container>
      <Row>
        {datas.map((data, i) => (
          <CardComponent key={i} {...data} />
        ))}
      </Row>
    </Container>
  )
}

export default BettaFish