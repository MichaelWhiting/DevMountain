import { useState } from "react";
import DescriptionCell from "./DescriptionCell";
import HoursCell from "./HoursCell";
import ModeButtons from "./ModeButtons";
import RateCell from "./RateCell";
import formatCurrency from "../utils/formatCurrency";
import axios from "axios";

function TableRow({ initialIsEditing, initialInvoiceData, deleteRow }) {
//   const { description, rate, hours } = initialInvoiceData;
  const [editMode, setEditMode] = useState(initialIsEditing);

  const [description, setDescription] = useState(initialInvoiceData.description);
  const [rate, setRate] = useState(initialInvoiceData.rate);
  const [hours, setHours] = useState(initialInvoiceData.hours);
  
  const makeEditMode = () => setEditMode(true);
  const makeNormalMode = () => {
    // This function now needs to submit an axios.put request to our server, submitting as the body of the request, 
    // the rate, hours, and description.
    const bodyObj = { description, rate, hours }
    const { id } = initialInvoiceData;
    // Send that body object (and an id as a param) to my server with axios
    axios.put(`/invoice/update/${id}`, bodyObj).then((res) => {
      setEditMode(false);
    });
  }

  return (
    <tr>
      <ModeButtons isEditing={editMode} saveClick={makeNormalMode} editClick={makeEditMode} deleteRow={deleteRow}/>
      <DescriptionCell isEditing={editMode} value={description} setDescription={setDescription}/>
      <RateCell isEditing={editMode} value={rate} setRate={setRate}/>
      <HoursCell isEditing={editMode} value={hours} setHours={setHours}/>
      <td>{formatCurrency(rate * hours)}</td>
    </tr>
  );
}

export default TableRow;
