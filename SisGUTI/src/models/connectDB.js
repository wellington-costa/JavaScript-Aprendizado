const admin = require("firebase-admin");


class Connect{
    constructor(){
       const db = null;
         this.app = null;
    }
    async connectDB(){
      try {
        const app = admin.initializeApp({
            credential: admin.credential.cert('serviceAccount.json')
        });
        
        

        return true;
      } catch (error) {
         console.log(error);
         return false;
      }    
    }

    useDB(){
      const db = admin.firestore();
        return db;
    }
    
}

module.exports = Connect;