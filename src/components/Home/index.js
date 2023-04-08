// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, iplData: {}}

  componentDidMount() {
    this.getFetchData()
  }

  getFetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplData: formattedData, isLoading: false})
  }

  renderIplTeam = () => {
    const {iplData} = this.state

    return (
      <ul className="ul">
        {iplData.map(each => (
          <TeamCard teamDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  loader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-container">
        <div className="header-line">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.loader() : this.renderIplTeam()}
      </div>
    )
  }
}

export default Home
