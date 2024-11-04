import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <main className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </main>
    </div>
  )
}

export default Layout
