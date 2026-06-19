import { Link } from "react-router-dom";

function InterviewCard({
  interview,
  deleteInterview,
}) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{interview.company}</h3>

      <p>Role: {interview.role}</p>
      <p>Status: {interview.status}</p>
      <p>Date: {interview.date}</p>
      <p>Experience: {interview.experience} years</p>

      <Link to={`/edit/${interview.id}`}>
        <button>Edit</button>
      </Link>

      {" "}

      <button
        onClick={() =>
          deleteInterview(interview.id)
        }
      >
        Delete
      </button>
    </div>
  );
}

export default InterviewCard;