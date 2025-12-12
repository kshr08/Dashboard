"use client";
import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  const createNote = async (e) => {
    e.preventDefault();
    await API.post("/notes", { title, content });
    setTitle("");
    setContent("");
    fetchNotes();
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
    fetchNotes();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <form onSubmit={createNote} className="mb-6">
        <input className="border p-2 w-full mb-2" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <textarea className="border p-2 w-full mb-2" value={content} placeholder="Content" onChange={(e) => setContent(e.target.value)} />

        <button className="bg-green-600 text-white px-4 py-2 rounded">Add Note</button>
      </form>

      <h2 className="text-xl font-semibold mb-3">Your Notes</h2>

      {notes.map((note) => (
        <div key={note.id} className="border p-3 mb-3 rounded bg-gray-50">
          <h3 className="font-bold">{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}
