import {useState} from 'react'
import api from '../api'

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
  })

  const submit = async e => {
    e.preventDefault()
    try {
      await api.post('/auth/signup', form)
      alert('Signup successful')
      window.location.href = '/'
    } catch (error) {
      console.error(error)
      alert(
        'Signup failed.\n\nPossible reasons:\n• Backend not running\n• Email already exists'
      )
    }
  }

  return (
    <form onSubmit={submit}>
      <h2>Signup</h2>

      <input
        placeholder="Name"
        required
        onChange={e => setForm({...form, name: e.target.value})}
      />

      <input
        placeholder="Email"
        required
        onChange={e => setForm({...form, email: e.target.value})}
      />

      <input
        placeholder="Address"
        required
        onChange={e => setForm({...form, address: e.target.value})}
      />

      <input
        type="password"
        placeholder="Password"
        required
        onChange={e => setForm({...form, password: e.target.value})}
      />

      <button type="submit">Signup</button>
    </form>
  )
}

export default Signup
