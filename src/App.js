import UserProfileDetails from './components/UserProfile'
import './App.css'

const UserDetailsList = [
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'manasa',
    role: 'Software Engineer',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'manasa',
    role: 'Software Engineer',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'manasa',
    role: 'Software Engineer',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'manasa',
    role: 'Software Engineer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">users list</h1>
    <ul>
      {UserDetailsList.map(eachItem => (
        <UserProfileDetails userDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  </div>
)
export default App
