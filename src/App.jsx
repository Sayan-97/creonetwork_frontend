import { BrowserRouter as Router } from "react-router-dom"
import { Footer, Header, ScrollToTopButton } from "./components"
import { PublicRoutes, ClientRoutes, FreelancerRoutes } from "./routes";
import { useSelector } from "react-redux"

function App() {

  const userRole = useSelector(state => state.user.userState?.role);

  return (
    <Router>
      <ScrollToTopButton />
      <Header />
      <div className="flex-grow">
        {userRole === 'client' ? (
          <ClientRoutes />
        ) : userRole === 'freelancer' ? (
          <FreelancerRoutes />
        ) : (
          <PublicRoutes />
        )}
      </div>
      <Footer />
    </Router>
  )
}

export default App
