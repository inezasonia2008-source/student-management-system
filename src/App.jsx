import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'

function App() {

  // READ: Load students from Local Storage
  const [students, setStudents] = useState(() => {
    return JSON.parse(localStorage.getItem('students')) || []
  })

  const [form, setForm] = useState({
    studentId: '',
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    course: ''
  })

  const [editingId, setEditingId] = useState(null)

  const [search, setSearch] = useState('')

  // Save students in Local Storage
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  // CREATE and UPDATE
  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingId !== null) {

      // UPDATE student
      setStudents(students.map((student) =>
        student.id === editingId
          ? { ...form, id: editingId }
          : student
      ))

      alert('Student updated successfully!')

    } else {

      // CREATE student
      const newStudent = {
        ...form,
        id: Date.now()
      }

      setStudents([...students, newStudent])

      alert('Student registered successfully!')
    }

    resetForm()
  }

  // EDIT student
  const handleEdit = (student) => {
    setForm({
      studentId: student.studentId,
      fullName: student.fullName,
      email: student.email,
      phone: student.phone,
      gender: student.gender,
      course: student.course
    })

    setEditingId(student.id)
  }

  // DELETE student
  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this student?'
    )

    if (confirmDelete) {
      setStudents(students.filter(
        (student) => student.id !== id
      ))

      alert('Student deleted successfully!')
    }
  }

  // Reset form
  const resetForm = () => {
    setForm({
      studentId: '',
      fullName: '',
      email: '',
      phone: '',
      gender: '',
      course: ''
    })

    setEditingId(null)
  }

  // SEARCH students
  const filteredStudents = students.filter((student) =>
    student.fullName.toLowerCase().includes(search.toLowerCase()) ||
    student.studentId.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <main className="max-w-7xl mx-auto p-6">

        {/* Dashboard statistics */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Students</h3>
            <p className="text-3xl font-bold text-blue-600">
              {students.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Male Students</h3>
            <p className="text-3xl font-bold text-green-600">
              {students.filter(s => s.gender === 'Male').length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Female Students</h3>
            <p className="text-3xl font-bold text-purple-600">
              {students.filter(s => s.gender === 'Female').length}
            </p>
          </div>

        </div>

        {/* Student Form */}
        <StudentForm
          form={form}
          setForm={setForm}
          handleSubmit={handleSubmit}
          editingId={editingId}
          closeForm={resetForm}
        />

        {/* Search */}
        <div className="mb-5">

          <input
            type="text"
            placeholder="Search by student name or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 p-3 border rounded-lg bg-white"
          />

        </div>

        {/* Student Table */}
        <StudentTable
          students={filteredStudents}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

      </main>

    </div>
  )
}

export default App