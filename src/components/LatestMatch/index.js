// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    date,
    venue,
    result,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-container">
      <h1 className="latest-heading">latest Matches</h1>
      <div className="sub-latest-container">
        <div className="logo-container">
          <div className="log-container-1">
            <p className="para1">{competingTeam}</p>
            <p className="para2">{date}</p>
            <p className="para3">{venue}</p>
            <p className="para3">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="team-image"
          />
        </div>
        <hr className="separator" />
        <div className="match-details-2">
          <p className="label">FirstInning</p>
          <p className="para4">{firstInnings}</p>
          <p className="label">SecondInning</p>
          <p className="para4">{secondInnings}</p>
          <p className="label">Man Of The Match</p>
          <p className="para4">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="para4">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
