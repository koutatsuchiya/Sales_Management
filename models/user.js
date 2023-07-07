const db = require('../configs/connDb');


module.exports = {
    getUser: async (un) => {
        try {
            const user = await db.one('SELECT * FROM public."Users" WHERE "f_Username" = $1', [un]);
            return user;
        } 
        catch(e) {
            console.log(e);
        }
    },
    getUserByEmail: async (email) => {
        try {
            const user = await db.one('SELECT * FROM public."Users" WHERE "f_Email" = $1', [email]);
            return user;
        } 
        catch(e) {
            console.log(e);
        }
    },
    maxUserId: async () => {
        try {
            const id = await db.one('select max("Users"."f_ID") from public."Users"');
            return id;
        } 
        catch(e) {
            console.log(e);
        }
    },
    updateByEmail: async (un, hashed_pw, f_name, email, per = 0) => {
        try {
            await db.none('UPDATE public."Users" SET "f_Username" = $1, "f_Password" = $2, "f_Name" = $3, "f_Permission" = $4' + 
                'WHERE "f_Email" = $5', 
                [un, hashed_pw, f_name, per, email]);
            return true;
        } 
        catch(e) {
            console.log(e);
        }
    },
    signup: async function (un, hashed_pw = 'none', f_name, email, dateRegister, per = 0) {
        try {
            const maxId = await this.maxUserId();
            await db.none('INSERT INTO public."Users"("f_ID", "f_Username", "f_Password", "f_Name", "f_Email", "f_DOB", "f_Permission") ' + 
                'VALUES ($1, $2, $3, $4, $5, $6, $7)',
                [maxId.max + 1, un, hashed_pw, f_name, email, dateRegister, per]);
        }
        catch(e) {
            console.log(e);
        }
    }
}