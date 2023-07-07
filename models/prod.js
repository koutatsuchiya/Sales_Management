const db = require('../configs/connDb');


module.exports = {
    getProdsWithCate: async (cateId) => {
        try {
            const prodList = await db.any('SELECT * FROM public."Products" WHERE "CatID" = $1;',
            [cateId]);
            return prodList;
        } 
        catch(e) {
            console.log(e);
        }
    },
    getProd: async (proId) => {
        try {
            const p = await db.one('SELECT * FROM public."Products" WHERE "ProID" = $1;',
            [proId]);
            return p;
        } 
        catch(e) {
            console.log(e);
        }
    },
    maxProdId: async () => {
        try {
            const id = await db.one('select max("Products"."ProID") from public."Products"');
            return id;
        } 
        catch(e) {
            console.log(e);
        }
    },
    add: async (id, pName, pTiny, pFull, pPrice, pCatid, pQuan) => {
        try {
            await db.none('INSERT INTO public."Products"("ProID", "ProName", "TinyDes", "FullDes", "Price", "CatID", "Quantity") ' + 
                'VALUES ($1, $2, $3, $4, $5, $6, $7)', 
                [id, pName, pTiny, pFull, pPrice, pCatid, pQuan]);
        } 
        catch(e) {
            console.log(e);
        }
    },
    update: async (id, pName, pTiny, pFull, pPrice, pCatid, pQuan) => {
        try {
            await db.none('UPDATE public."Products" ' + 
                'SET "ProName"=$1, "TinyDes"=$2, "FullDes"=$3, "Price"=$4, "CatID"=$5, "Quantity"=$6 ' + 
                'WHERE "ProID" = $7', 
                [pName, pTiny, pFull, pPrice, pCatid, pQuan, id]);
        } 
        catch(e) {
            console.log(e);
        }
    },
    delete: async (id) => {
        try {
            await db.none('DELETE FROM public."Products" WHERE "ProID" = $1', [id]);
        } 
        catch(e) {
            console.log(e);
        }
    },
    decreaseQuan: async (id, pQuan) => {
        try {
            await db.none('UPDATE public."Products" SET "Quantity" = "Quantity" - $1 WHERE "ProID" = $2', 
                [pQuan, id]);
        } 
        catch(e) {
            console.log(e);
        }
    }
}