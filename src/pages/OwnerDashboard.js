import {useContext, useEffect, useState} from 'react'
import api from '../api'
import {AuthContext} from '../context/AuthContext'

const OwnerDashboard = () => {
  const {logout} = useContext(AuthContext)
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    api
      .get('/owner/dashboard')
      .then(res => setRatings(res.data))
      .catch(() => alert('Unauthorized. Please login again.'))
  }, [])

  return (
    <div>
      <h1>Owner Dashboard</h1>

      {ratings.map((r, i) => (
        <p key={i}>
          {r.name} rated {r.rating}
        </p>
      ))}

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default OwnerDashboard
