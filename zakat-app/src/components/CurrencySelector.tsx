import { CURRENCIES } from "@/utils/currencies";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

export const CurrencySelector = ({
    currency,
    onChange,
}: {
    currency: string;
    onChange: (value: string) => void;
}) => {
    return (
        <Select value={currency} onValueChange={onChange}>
            <SelectTrigger className="w-[500px]">
                <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
                {CURRENCIES.map((curr) => (
                    <SelectItem key={curr.value} value={curr.value}>
                        {curr.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
