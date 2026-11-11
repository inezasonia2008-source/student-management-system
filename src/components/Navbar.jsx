import { FaUserGraduate } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <FaUserGraduate size={30} />

        <h1 className="text-2xl font-bold">
          Student Management System
        </h1>
      </div>
    </nav>
  )
}

export default Navbar