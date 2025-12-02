import axios from "axios";

async function testRateLimit() {
  for (let i = 1; i <= 120; i++) {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      console.log(i, response.status); 
    } catch (err) {
      const status = err.response ? err.response.status : "No response";
      console.log(i, "LIMITED:", status); 
      break; 
    }
  }
}

testRateLimit();
