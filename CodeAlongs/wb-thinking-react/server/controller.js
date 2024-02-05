let TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
];

let globalId = 4;

const handlerFunctions = {
    getInvoices: (req, res) => {
        res.send({
            message: "All invoices from test data",
            invoices: TEST_DATA
        })   
    },

    addInvoice: (req, res) => {
        // Get the description from req.body
        // Create a new invoice obj
        // Push that new obj into TEST_DATA
        // Increment globalId
        // Send back the new object to front-end
        const { description } = req.body;
        const newInvoice = {
            id: globalId,
            description: description,
            rate: 0,
            hours: 0
        }
        TEST_DATA.push(newInvoice);
        globalId++;

        res.send({
            message: "New invoice added to TEST_DATA",
            newInvoice: newInvoice 
        });
    },
    deleteInvoice: (req, res) => {
        // grab id from params
        const { id } = req.params;

        // delete the elemnt form TEST_DATA with the ID that matches one from request.
        TEST_DATA = TEST_DATA.filter((invoice) => invoice.id !== +id)

        res.send({
            message: "I tried to delete this invoice",
            status: true
        })
    },
    updateInvoice: (req, res) => {
        const { id } = req.params;
        const { description, rate, hours } = req.body;

        const index = TEST_DATA.findIndex((invoice) => invoice.id === +id);
        const invoiceToUpdate = TEST_DATA[index];
        invoiceToUpdate.description = description;
        invoiceToUpdate.rate = +rate;
        invoiceToUpdate.hours = +hours;

        res.send({
            message: "Invoiced updated",
            updatedInvoice: invoiceToUpdate
        });
    }
}

export default handlerFunctions;