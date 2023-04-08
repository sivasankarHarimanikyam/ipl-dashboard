// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <li className="li">
      <Link to={`/team-matches/${id}`} className="lower-li">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="para1">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
