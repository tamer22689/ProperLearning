import UserStore from "../stores/UserStore"

function AdminHomePage() {
  return (
    <div>
        <h1>Welcome {UserStore.currentUser?.username} To Admin Dashboard</h1>
    </div>
  )
}

export default AdminHomePage
