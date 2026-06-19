import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditInterview({ interviews, setInterviews }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingInterview = interviews.find(
    (item) => item.id === Number(id)
  );

  const [formData, setFormData] = useState({
    company: existingInterview?.company || "",
    role: existingInterview?.role || "",
    status: existingInterview?.status || "Pending",
    date: existingInterview?.date || "",
    experience: existingInterview?.experience || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedInterviews = interviews.map((item) =>
      item.id === Number(id)
        ? {
            ...item,
            ...formData,
            experience: Number(formData.experience),
          }
        : item
    );

    setInterviews(updatedInterviews);

    navigate("/");
  };

  if (!existingInterview) {
    return <h2>Interview Not Found</h2>;
  }

  return (
    <div>
      <h2>Edit Interview</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Company</label>
          <br />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Role</label>
          <br />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Status</label>
          <br />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <br />

        <div>
          <label>Date</label>
          <br />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Experience (Years)</label>
          <br />
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">Update Interview</button>
      </form>
    </div>
  );
}

export default EditInterview;