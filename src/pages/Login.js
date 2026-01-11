import {useContext, useState} from 'react'
import api from '../api'
import {AuthContext} from '../context/AuthContext'

const Login = () => {
  const {login} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async e => {
    e.preventDefault()
    try {
      const res = await api.post('/auth/login', {email, password})
      login(res.data.token, res.data.role)
      window.location.href = `/${res.data.role}`
    } catch {
      setError('Invalid email or password')
    }
  }

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      {error && <p>{error}</p>}

      <input
        placeholder="Email"
        required
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>

      <p>
        New user? <a href="/signup">Signup</a>
      </p>
    </form>
  )
}

export default Login
