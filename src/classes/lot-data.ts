export class LotData {
    id: number;
    public sku_code: string;
    public product_names: any[];
    public product_costs: any[];
    public sku_name: string;
    public sku_quantity: number;
    public sku_cost: string;
    public display_price: number;
    public discount_per: number;
    public discounted_price: number;
    public gross_margin: number;
    public mpl_low: number;
    public mpl_high: number;
    public mplFlag: string;
    public theme: string;
    public festival_conf: string;
    public mapping: string;
    public hasFreeShipping: boolean;
    public hasUpsell: boolean;
    public dontList: boolean;
    public proactiveUpload: string;
    public vendor_code: string;
    public comments: string[];
    constructor(
    ) {}
}
