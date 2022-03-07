import React, { Component } from 'react'
import Top from './Components/Top'
import InputSearch from './Components/InputSearch'
import CardComponent from './Components/CardComponent'
import {Row, Container} from 'react-bootstrap'
import './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       keyword: "",
       dataNews: []
    }
  }
  onChange = (e)=> {
    this.setState({
      keyword : e.target.value
    })
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?q='+ this.keyword +'&country=id&apiKey=9b16c48b13dd488ba1b525afb2e12a51')
      .then((response)=>response.json())
      .then((response)=>{
        this.setState({
          dataNews : response.articles
        })
      }) 
  }
  render() {
    return (
      <div>
        <Top />
        <InputSearch onChange={this.onChange} />
        <Container className="mt-5">
        <Row>
          {this.state.dataNews.map((data, index)=>(
            <CardComponent key={index} {...data} />
          ))}
        </Row>
        </Container>
      </div>
    )
  }
  componentDidUpdate(){
    fetch('https://newsapi.org/v2/top-headlines?q='+ this.keyword +'&country=id&apiKey=9b16c48b13dd488ba1b525afb2e12a51')
      .then((response)=>response.json())
      .then((response)=>{
        this.setState({
          dataNews : response.articles
        })
      }) 
  }
}
