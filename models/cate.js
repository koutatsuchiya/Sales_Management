const db = require('../configs/connDb');


module.exports = {
    getCates: async () => {
        try {
            const cateList = await db.any('SELECT * FROM "Categories"');
            return cateList;
        } 
        catch(e) {
            console.log(e);
        }
    },
    maxCateId: async () => {
        try {
            const id = await db.one('select max("Categories"."CatID") from public."Categories"');
            return id;
        } 
        catch(e) {
            console.log(e);
        }
    },
    add: async function(catName) {
        try {
            const maxCateId = await this.maxCateId();
            await db.none('INSERT INTO public."Categories"("CatID", "CatName") VALUES ($1, $2)', 
                [maxCateId.max + 1, catName]);
        } 
        catch(e) {
            console.log(e);
        }
    },
    update: async (catId, catName) => {
        try {
            await db.none('UPDATE public."Categories" SET "CatName" = $1 WHERE "CatID" = $2', 
                [catName, catId]);
        } 
        catch(e) {
            console.log(e);
        }
    },
    delete: async (catId) => {
        try {
            await db.none('DELETE FROM public."Categories" WHERE "CatID" = $1', [catId]);
        } 
        catch(e) {
            console.log(e);
        }
    }
}