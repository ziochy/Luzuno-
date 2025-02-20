const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/luzuno_comments", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    timestamp: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", commentSchema);

// Ambil semua komentar
app.get("/comments", async (req, res) => {
    const comments = await Comment.find().sort({ timestamp: -1 });
    res.json(comments);
});

// Tambah komentar
app.post("/comments", async (req, res) => {
    const { name, comment } = req.body;
    if (!comment) return res.status(400).json({ error: "Komentar tidak boleh kosong" });
    const newComment = new Comment({ name: name || "Anonim", comment });
    await newComment.save();
    res.json(newComment);
});

// Hapus komentar
app.delete("/comments/:id", async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
