import React, { Component } from 'react'
import InputSearch from './Components/InputSearch'
import NavbarComponent from './Components/NavbarComponent'
import CardComponent from './Components/CardComponent'
import {Row, Container} from 'react-bootstrap'

export default class App extends Component {
  state = {
    dataNews : [],
    keyword : ''
  }

  onChange = (e)=>{
    e.preventDefault()
    this.setState({
      keyword : e.target.value
    })
  }
  async componentDidMount(){
    try{
      const response = await fetch('https://newsapi.org/v2/top-headlines?q='+ this.state.keyword +'&country=id&apiKey=9b16c48b13dd488ba1b525afb2e12a51')
      const datas = await response.json()
      const data = await datas.articles
      this.setState({
        dataNews : data
      })
    } catch(err){
      console.log(err)
    }
  }
  async componentDidUpdate(){
    try{
      const response = await fetch('https://newsapi.org/v2/top-headlines?q='+ this.state.keyword +'&country=id&apiKey=9b16c48b13dd488ba1b525afb2e12a51')
      const datas = await response.json()
      const data = await datas.articles
      this.setState({
        dataNews : data
      })
    } catch(err){
      console.log(err)
    }
  }
  render() {
    const {dataNews} = this.state
    return (
      <div>
        <NavbarComponent />
        <InputSearch onChange = {this.onChange} />
        <Container>
          <Row>
            {dataNews.map((data, i) =>(
              <CardComponent key={i} {...data} />
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

