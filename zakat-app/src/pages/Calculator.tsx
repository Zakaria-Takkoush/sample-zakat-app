import { CurrencySelector } from "@/components/CurrencySelector";
import { DatePicker } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CURRENCIES } from "@/utils/currencies";
import { useMemo, useState } from "react";

const Calculator = () => {
    const [inputValue, setInputValue] = useState<number>(0);
    const [zakatValue, setZakatValue] = useState<number>(0);

    const calculate = (value: number) => {
        return value / 40;
    };

    const handleCalculate = () => {
        setZakatValue(calculate(inputValue));
    };

    const handleReset = () => {
        setInputValue(0);
        setZakatValue(0);
        setDate(new Date());
    };

    const [date, setDate] = useState<Date>(new Date());
    const [selectedCurrency, setSelectedCurrency] = useState<string>();

    const currencyName = useMemo(() => {
        return CURRENCIES.find((c) => c.value === selectedCurrency)?.name;
    }, [selectedCurrency]);

    return (
        <div className="flex flex-col justify-start items-start gap-3 m-3">
            <div className="flex flex-row gap-2">
                <Input
                    type="number"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(Number(e.target.value));
                    }}
                    className="w-[200px]"
                />
                <CurrencySelector
                    currency={selectedCurrency ?? ""}
                    onChange={(v) => setSelectedCurrency(v)}
                />
            </div>

            <div>
                <DatePicker date={date} onChange={(v) => setDate(v)} />
            </div>

            <h3>
                Required Zakat value: {zakatValue.toFixed(2)} {currencyName}
            </h3>
            <div className="flex flex-row gap-2">
                <Button variant="secondary" onClick={handleReset}>
                    Reset
                </Button>
                <Button onClick={handleCalculate}>Calculate</Button>
            </div>
        </div>
    );
};

export default Calculator;
