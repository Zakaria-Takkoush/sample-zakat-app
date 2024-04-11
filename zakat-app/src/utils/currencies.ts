export type CurrencyOption = {
    name: string;
    value: string;
};

export const CURRENCIES: CurrencyOption[] = [
    {
        name: "US dollars",
        value: "usd",
    },
    {
        name: "Lebanese pounds",
        value: "lbp",
    },
];

export const DEFAULT_CURRENCY: CurrencyOption = {
    name: "US dollars",
    value: "usd",
};
