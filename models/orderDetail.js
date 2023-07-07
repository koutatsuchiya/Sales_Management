const db = require('../configs/connDb');


module.exports = {
    getOrderDetails: async (oid) => {
        try {
            const od = await db.any('SELECT * FROM public."OrderDetails" WHERE "OrderID" = $1;',
            [oid]);
            return od;
        } 
        catch(e) {
            console.log(e);
        }
    },
    maxOrderDetailsId: async () => {
        try {
            const id = await db.one('select max("OrderDetails"."ID") from public."OrderDetails"');
            return id;
        } 
        catch(e) {
            console.log(e);
        }
    },
    add: async (id, oid, pid, quan, price, amount) => {
        try {
            await db.none('INSERT INTO public."OrderDetails"("ID", "OrderID", "ProID", "Quantity", "Price", "Amount") ' +
                'VALUES ($1, $2, $3, $4, $5, $6);', 
                [id, oid, pid, quan, price, amount]);
        } 
        catch(e) {
            console.log(e);
        }
    },
}