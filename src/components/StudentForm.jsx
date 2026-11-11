function StudentForm({
  form,
  setForm,
  handleSubmit,
  editingId,
  closeForm
}) {

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">

      <h2 className="text-xl font-bold mb-5">
        {editingId ? 'Update Student' : 'Register New Student'}
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          value={form.studentId}
          onChange={handleChange}
          required
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-3 rounded-lg"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="border p-3 rounded-lg"
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
          required
          className="border p-3 rounded-lg"
        />

        <div className="md:col-span-2 flex gap-3">

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            {editingId ? 'Update Student' : 'Save Student'}
          </button>

          <button
            type="button"
            onClick={closeForm}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>

        </div>

      </form>
    </div>
  )
}

export default StudentForm