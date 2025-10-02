"use client";

import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        {/* LIST ITEMS */}

        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Accept changes
              </label>
            </div>

            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked/>
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Commit Changes
              </label>
            </div>

             <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Deploy Changes
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
