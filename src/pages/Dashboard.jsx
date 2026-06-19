import { useState, useMemo } from "react";
import InterviewCard from "../components/InterviewCard";

function Dashboard({ interviews, setInterviews }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const deleteInterview = (id) => {
    setInterviews(
      interviews.filter(
        (item) => item.id !== id
      )
    );
  };

  const filteredInterviews = useMemo(() => {
    return interviews.filter((interview) => {
      const matchesSearch = interview.company
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All"
          ? true
          : interview.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [interviews, searchTerm, statusFilter]);

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Company..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      <br />
      <br />

      {/* Status Filter */}
      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value)
        }
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="Rejected">Rejected</option>
      </select>

      <br />
      <br />

      {filteredInterviews.length === 0 ? (
        <p>No Interviews Found</p>
      ) : (
        filteredInterviews.map((interview) => (
          <InterviewCard
            key={interview.id}
            interview={interview}
            deleteInterview={deleteInterview}
          />
        ))
      )}
    </div>
  );
}

export default Dashboard;