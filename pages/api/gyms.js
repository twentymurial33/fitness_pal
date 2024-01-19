import axios from "axios";

async function handler() {
  try {
    const response = await axios.get("https://swapi.dev/api/ ");
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from external API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default handler;
