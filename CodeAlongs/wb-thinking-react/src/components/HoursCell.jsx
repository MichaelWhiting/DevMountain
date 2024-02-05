
function HoursCell({isEditing, value, setHours}) {
  return isEditing ? (
    <td>
      <input type="number" value={value} onChange={e => setHours(e.target.value)}/>
    </td>
  ) : (
    <td>{value}</td>
  )
}

export default HoursCell;