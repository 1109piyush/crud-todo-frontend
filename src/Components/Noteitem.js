import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-5  ">
            <div className="card my-3 " style={{ backgroundColor:"#f7f5fd" }} >
                <div className="card-body ">
                    <div >

                        <h5 className="card-title ">{note.title}</h5>
                        <h6 className="card-text ">{note.description}</h6>
                        <button type="button" className="btn btn-primary" onClick={() => { updateNote(note) }}>update</button>

                        <button type="button" className="btn btn-danger" onClick={() => { deleteNote(note._id) }}   >Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Noteitem
