import {Component} from 'react'

import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, teamData: {}}

  componentDidMount() {
    this.getFetchTeam()
  }

  getFormattedData = data1 => ({
    umpires: data1.umpires,
    result: data1.result,
    manOfTheMatch: data1.man_of_the_match,
    id: data1.id,
    date: data1.date,
    venue: data1.venue,
    competingTeam: data1.competing_team,
    competingTeamLogo: data1.competing_team_logo,
    firstInnings: data1.first_innings,
    secondInnings: data1.second_innings,
  })

  getFetchTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({teamData: formattedData, isLoading: false})
  }

  renderRecentMatchList = () => {
    const {teamData} = this.state
    const {recentMatches} = teamData

    return (
      <ul className="recent-match-list">
        {recentMatches.map(eachMatch => (
          <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamData} = this.state
    const {teamBannerUrl, latestMatch} = teamData

    return (
      <div className="responsive-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchData={latestMatch} />
        {this.renderRecentMatchList()}
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'MI':
        return 'mi'
      case 'SRH':
        return 'srh'
      case 'KXP':
        return 'rcb'
      case 'DC':
        return 'dc'
      case 'RR':
        return 'rr'
      case 'CSK':
        return 'csk'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const className = `team-match-container ${this.getRouteClassName()}`
    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
