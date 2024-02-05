import formatCurrency from "../utils/formatCurrency";

function RateCell({isEditing, value, setRate}) {
  return isEditing ? (
    <td>
        <input type="number" value={value} onChange={e => setRate(e.target.value)}/>
    </td>
  ) : (
    <td>{(formatCurrency(value))}/hr</td>
  )
}

export default RateCell