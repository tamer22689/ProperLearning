import Search from '../components/Search'
import UserInfo from '../components/UserInfo'
import Menu from '../components/Menu'
import Logo1 from '../assets/images/Logo1.png'


const Courses = () => {
  return (
<>
      <div className="navbar">
        <div className="navbar-left">
            <div style={{ marginRight: "10px"}}>
              <img className="image" src={Logo1} alt=""/>
            </div>
            <Search/>
        </div>
        <div>
            <UserInfo />
        </div>        
      </div>
      <Menu/>
      <div className='container'><h1>Courses</h1></div>
    </>
  )
}

export default Courses;
