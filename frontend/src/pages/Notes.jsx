import { useEffect, useState } from "react";

function Notes() {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const token = localStorage.getItem("token");
        console.log(token);

        try {
            const response = await fetch("https://bc-zidc.onrender.com/note/get", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            console.log(data);
            setNotes(data.notes);
        } catch (error) {
            alert(`An error occurred: ${error}`);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");

        try {
            const response = await fetch(`https://bc-zidc.onrender.com/note/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                // Remove the deleted note from the state
                setNotes(notes.filter(note => note._id !== id));
            } else {
                alert(`Failed to delete the note: ${response.statusText}`);
            }
        } catch (error) {
            alert(`An error occurred: ${error}`);
        }
    };

    const handleLogout=()=>{
             localStorage.removeItem("token")
             window.location.href="/login"
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <h1>Notes</h1>
            {notes.length > 0 ? (
                notes.map((note) => (
                    <div key={note._id}>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                        <button onClick={() => handleDelete(note._id)}>Delete the note</button>
                    </div>
                ))
            ) : (
                <h2>No notes to display</h2>
            )}
        </div>
    );
}

export default Notes;