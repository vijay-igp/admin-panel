export class Product {
    id: number;
    constructor(
        public name?: string,
        public description?: string,
        public quantity?: number,
        public type?: string,
        public price?: number,
        public weight?: string
    ) {}
}
