require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 1234;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(express.json());

app.get("/api/images", async (req, res) => {
  try {
    const { page = 1, limit = 10, tags, category } = req.query;
    const offset = (page - 1) * limit;

    let query = "SELECT * FROM images WHERE 1=1";
    let queryParams = [];

    if (category) {
      queryParams.push(category);
      query += ` AND category = $${queryParams.length}`;
    }

    if (tags) {
      const tagList = tags.split(",");
      queryParams.push(tagList);
      query += ` AND tags && $${queryParams.length}::text[]`;
    }

    query += " ORDER BY id DESC LIMIT $1 OFFSET $2";
    queryParams.unshift(limit, offset); 

    const { rows } = await pool.query(query, queryParams);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://192.168.0.18:${PORT}`);
});
