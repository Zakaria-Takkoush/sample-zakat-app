import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function DatePicker({
    date,
    onChange,
}: {
    date: Date;
    onChange: (date: Date) => void;
}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Popover open={isOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={`w-[280px] justify-start text-left font-normal ${
                        !date && "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date ?? new Date()}
                    onSelect={(newDate) => {
                        onChange(newDate ?? new Date());
                        setIsOpen(false);
                    }}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}