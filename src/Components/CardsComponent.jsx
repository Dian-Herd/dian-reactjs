import React, { useCallback, useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import InputSearch from './InputSearch'
import {Row, Col, Container} from 'react-bootstrap'

const CardsComponent = ()=>{
    const[datas, setData] = useState([])
    const[keyword, setKeyword] = useState("")
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?q='+ keyword +'&country=id&apiKey=9b16c48b13dd488ba1b525afb2e12a51')
            .then(response=>response.json())
            .then(response=>{
                return setData(response.articles)
            })
    },[keyword])

    const handleSearch = useCallback((e)=>{
        setKeyword(e.target.value)
    },[])

    return(
        <Container className="mt-5">
            <Row>
                <Col>
                    <InputSearch onChange={handleSearch} />
                </Col>
            </Row>
            <Row>
                {datas.map((data, i)=>(
                    <CardComponent key={i} {...data} />
                ))}
            </Row>
        </Container>
    )
}

export default CardsComponent