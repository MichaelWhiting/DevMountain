
function ModeButtons({ isEditing, saveClick, editClick, deleteRow }) {
    return isEditing ? (
        <td>
            <button onClick={saveClick}>Save</button>
        </td>
    ) : (
        <td>
            <button onClick={deleteRow}>Delete</button>
            <button onClick={editClick}>Edit</button>
        </td>
    )
}

export default ModeButtons;