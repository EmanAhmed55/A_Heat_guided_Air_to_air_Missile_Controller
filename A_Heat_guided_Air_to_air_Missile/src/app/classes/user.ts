export class User {
    constructor(
        public missilelocationx: number,
        public missilelocationy: number,
        public targetlocationx: number,
        public targetlocationy: number,

        public position: number,
        public deviation: number,
        public temperature: number,
        public burnermalfunction: string
         ) 
    {

    }

}
