import {useContext, useEffect, useState} from 'react'
import api from '../api'
import {AuthContext} from '../context/AuthContext'

const AdminDashboard = () => {
  const {logout} = useContext(AuthContext)
  const [stats, setStats] = useState({})

  useEffect(() => {
    api
      .get('/admin/dashboard')
      .then(res => setStats(res.data))
      .catch(() => alert('Unauthorized. Please login again.'))
  }, [])

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Total Users: {stats.users}</p>
      <p>Total Stores: {stats.stores}</p>
      <p>Total Ratings: {stats.ratings}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default AdminDashboard
