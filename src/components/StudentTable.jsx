import { FaEdit, FaTrash } from 'react-icons/fa'

function StudentTable({ students, handleEdit, handleDelete }) {

  return (
    <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">

      <h2 className="text-xl font-bold mb-5">
        Registered Students
      </h2>

      <table className="w-full text-left">

        <thead className="bg-blue-100">
          <tr>
            <th className="p-3">Student ID</th>
            <th className="p-3">Full Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Course</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id} className="border-b hover:bg-gray-50">

              <td className="p-3">{student.studentId}</td>
              <td className="p-3">{student.fullName}</td>
              <td className="p-3">{student.email}</td>
              <td className="p-3">{student.phone}</td>
              <td className="p-3">{student.gender}</td>
              <td className="p-3">{student.course}</td>

              <td className="p-3">
                <div className="flex gap-4">

                  <button
                    onClick={() => handleEdit(student)}
                    className="text-blue-600"
                    title="Edit"
                  >
                    <FaEdit size={18} />
                  </button>

                  <button
                    onClick={() => handleDelete(student.id)}
                    className="text-red-600"
                    title="Delete"
                  >
                    <FaTrash size={18} />
                  </button>

                </div>
              </td>

            </tr>

          ))}

          {students.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center p-6 text-gray-500">
                No students registered yet.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  )
}

export default StudentTable