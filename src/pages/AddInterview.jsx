import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddInterview({ interviews, setInterviews }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Pending",
    date: "",
    experience: "",
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

    const newInterview = {
      id: Date.now(),
      ...formData,
      experience: Number(formData.experience),
    };

    setInterviews([...interviews, newInterview]);

    navigate("/");
  };

  return (
    <div>
      <h2>Add Interview</h2>

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

        <button type="submit">Add Interview</button>
      </form>
    </div>
  );
}

export default AddInterview;