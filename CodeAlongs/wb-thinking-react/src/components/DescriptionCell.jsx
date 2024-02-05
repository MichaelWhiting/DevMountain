
function DescriptionCell({isEditing, value, setDescription}) {
  return isEditing ? (
    <td>
        <input value={value} type="text" onChange={e => setDescription(e.target.value)}></input>
    </td>
  ) : (
    <td>{value}</td>
  )
}

export default DescriptionCell;