"use client";
import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const deleteNote = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this note?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/notes/${id}`);
      fetchNotes(); // refresh list
    } catch (err) {
      alert("Failed to delete note");
    }
  };

  const startEdit = (note) => {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content || "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };

  const updateNote = async (id) => {
    try {
      await API.put(`/notes/${id}`, {
        title: editTitle,
        content: editContent,
      });

      cancelEdit();
      fetchNotes();
    } catch (err) {
      alert("Failed to update note");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
    <div className="p-6 max-w-xl mx-auto">
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center rounded mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Notes Dashboard</h1>
            <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </nav>

      <form
  onSubmit={createNote}
  className="bg-white p-4 rounded shadow mb-6"
>
  <h2 className="text-lg font-semibold mb-3">Add New Note</h2>

  <input
  className="border border-gray-300 p-3 w-full mb-3 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
  value={title}
  placeholder="Title"
  onChange={(e) => setTitle(e.target.value)}
/>

<textarea
  className="border border-gray-300 p-3 w-full mb-4 rounded text-gray-900 placeholder-gray-500 min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-green-500"
  value={content}
  placeholder="Content"
  onChange={(e) => setContent(e.target.value)}
/>


  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
    Add Note
  </button>
</form>


      <h2 className="text-xl font-semibold mb-3">Your Notes</h2>
      {notes.length === 0 && (
  <p className="text-gray-500 text-center">
    No notes yet. Add your first note 🚀
  </p>
)}


    {notes.map((note) => (
 <div
  key={note.id}
  className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200"
>

        {editingId === note.id ? (
          <>
            <input
  className="border border-gray-300 p-2 w-full mb-2 rounded text-gray-900"
  value={editTitle}
  onChange={(e) => setEditTitle(e.target.value)}
/>

<textarea
  className="border border-gray-300 p-2 w-full mb-3 rounded text-gray-900 min-h-[100px]"
  value={editContent}
  onChange={(e) => setEditContent(e.target.value)}
/>


            <div className="flex gap-2 mt-3">
              <button
                onClick={() => updateNote(note.id)}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm"
              >
                Save
              </button>

              <button
                onClick={cancelEdit}
                className="bg-gray-400 text-white px-3 py-1 rounded text-sm"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
  {note.title}
</h3>

<p className="text-gray-700 whitespace-pre-wrap">
  {note.content}
</p>


            <div className="flex gap-3 mt-4">
              <button
                onClick={() => startEdit(note)}
               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm">

              
                Edit
              </button>

              <button
                onClick={() => deleteNote(note.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    ))}
    </div>
      </div>
</div>
  );
}
