import TableHeader from "./TableHeader";
import AddButton from "./AddButton";
import TableRow from "./TableRow";
import { useState } from "react";
import axios from "axios";

let globalId = 4;

function InvoiceTable({initialData}) {
    const [currentData, setCurrentData] = useState(initialData);

    const rows = currentData.map((invoice) => {
        return (
            <TableRow
                key={invoice.id}
                initialIsEditing={false}
                initialInvoiceData={invoice}
                deleteRow={() => deleteRow(invoice.id)}
            />
        )
    });

    // Create a funciotn that will add a row to current data
    const addRow = async () => {
        const response = await axios.post('/invoice/add', {
            description: "Enter description here"
        })
        setCurrentData([...currentData, response.data.newInvoice]);
    }

    const deleteRow = (id) => {
        // Send a DELETE request to our server
        axios.delete(`/invoice/delete/${id}`).then((res) => {
            if (res.data.status) {
                const filteredList = currentData.filter((invoice) => invoice.id !== id);
                setCurrentData(filteredList);
            } else {
                console.log("Error with delete table row")
            }
        });
    }

    return (
        <div>
            <table>
                <thead>
                    <TableHeader/>
                </thead>

                <tbody>{rows}</tbody>

                <tfoot>
                    <AddButton addRow={addRow}/>
                </tfoot>
            </table>
        </div>
    )
}

export default InvoiceTable