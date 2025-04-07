import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([{name: 'Juanito', surname: 'Hernandez', email: 'jhernandez@gmail.com'}])

  const getUsers = async () => {
/*     //API que provee los datos
    const response = await fetch('https://randomuser.me/api/?results=10') //Fetch: puente entre la vista y el API
    //Extraer los resultados del API y pasarlo a JSON()
    const { results } = await response.json() */

    const response = await axios.get('https://randomuser.me/api/?results=10');

    const { results } = response.data
   
    const formatData = results.map((item)=> ({
      name: item.name.first,
      surname: item.name.last,
      email: item.email
    }))

    setUsers([...users, ...formatData])
    console.log(formatData) 
  }

  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <>
      <h1>Twitch pirata de: IN6AM</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            /* Inyección de código JS */
            users.map(
              (user)=> (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default App
