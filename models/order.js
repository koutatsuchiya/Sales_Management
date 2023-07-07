const db = require('../configs/connDb');


module.exports = {
    getOrders: async (uid) => {
        try {
            const o = await db.any('SELECT * FROM public."Orders" WHERE "UserID" = $1;',
            [uid]);
            return o;
        } 
        catch(e) {
            console.log(e);
        }
    },
    maxOrderId: async () => {
        try {
            const id = await db.one('select max("Orders"."OrderID") from public."Orders"');
            return id;
        } 
        catch(e) {
            console.log(e);
        }
    },
    add: async (oid, oDate, uid, total = 0) => {
        try {
            await db.none('INSERT INTO public."Orders"("OrderID", "OrderDate", "UserID", "Total") ' +
                'VALUES ($1, $2, $3, $4);', [oid, oDate, uid, total]);
        } 
        catch(e) {
            console.log(e);
        }
    },
    updateTotal: async (oid) => {
        try {
            await db.none('UPDATE public."Orders" SET "Total" = (SELECT SUM("Amount") ' +
                'FROM public."OrderDetails" ' +
                'WHERE "OrderID" = $1) ' +
                'WHERE "OrderID" = $1;', [oid]);
        } 
        catch(e) {
            console.log(e);
        }
    }
}