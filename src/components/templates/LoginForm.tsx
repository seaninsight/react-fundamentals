import { useState } from 'react'
import validator from 'validator'

function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const onSubmit = () => {
    // reset error message, if any
    setError('')

    // validate form
    if (!email.length) {
      setError('Please enter your email')
      return
    }
    if (!validator.isEmail(email)) {
      setError('Please enter a valid email')
      return
    }
    if (!password.length) {
      setError('Please enter your password')
      return
    }
    // if gtg, submit
  }
  return (
    <div className="w-full min-w-[360px] max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {error.length ? (
          <p className="text-red-500 text-xs mb-4">{error}</p>
        ) : null}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-left text-sm font-bold mb-2 "
            htmlFor="email"
          >
            Email
          </label>
          <input
            value={email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm text-left font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onSubmit}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
