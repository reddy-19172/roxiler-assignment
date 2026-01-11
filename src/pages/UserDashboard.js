import {useContext, useEffect, useState} from 'react'
import api from '../api'
import {AuthContext} from '../context/AuthContext'

const UserDashboard = () => {
  const {logout} = useContext(AuthContext)
  const [stores, setStores] = useState([])

  useEffect(() => {
    api
      .get('/user/stores')
      .then(res => setStores(res.data))
      .catch(() => alert('Unauthorized. Please login again.'))
  }, [])

  const rateStore = (storeId, rating) => {
    api.post('/user/rate', {store_id: storeId, rating})
    alert('Rating submitted')
  }

  return (
    <div>
      <h1>User Dashboard</h1>

      {stores.map(store => (
        <div key={store.id}>
          <h3>{store.name}</h3>
          <p>{store.address}</p>
          <p>Avg Rating: {store.avgRating || 'N/A'}</p>
          <button onClick={() => rateStore(store.id, 5)}>Rate 5</button>
        </div>
      ))}

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default UserDashboard
