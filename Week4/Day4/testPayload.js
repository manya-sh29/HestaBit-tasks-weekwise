import axios from "axios";

const bigData = "x".repeat(25 * 1024); // 25kb body

axios.post("http://localhost:5000/api/users", { data: bigData })
  .then(res => console.log("OK:", res.status))
  .catch(err =>
    console.log("BLOCKED:", err.response?.status, err.response?.statusText)
  );