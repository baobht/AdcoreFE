"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { UseFormSetValue } from "react-hook-form";

const categories = [
  {
    value: "Next.js",
    label: "Next.js",
  },
  {
    value: "SvelteKit",
    label: "SvelteKit",
  },
  {
    value: "Nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "Remix",
    label: "Remix",
  },
  {
    value: "Astro",
    label: "Astro",
  },
];

export function MultiSelect({
  setValue,
}: {
  setValue: UseFormSetValue<{
    title: string;
    categories: string[];
    price: number;
    rating: number;
    cover_img: string;
  }>;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setChosenValue] = React.useState<string[]>([]);

  const handleSetValue = (val: string) => {
    if (value.includes(val)) {
      value.splice(value.indexOf(val), 1);
      setChosenValue(value.filter((item) => item !== val));
      setValue("categories", [value.filter((item) => item !== val).join(";")]);
    } else {
      setValue("categories", [[...value, val].join(";")]);
      setChosenValue((prevValue) => [...prevValue, val]);
    }
  };
  return (
    <div className="mt-10">
      <div>Categories</div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between p-6 rounded-none mt-2 active:bg-red"
          >
            <div className="flex gap-2 justify-start">
              {value?.length
                ? value.map((val, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 rounded-xl border bg-slate-200 text-xs font-medium"
                    >
                      {
                        categories.find((framework) => framework.value === val)
                          ?.label
                      }
                    </div>
                  ))
                : "Categories..."}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <Command>
            <CommandInput placeholder="Search categories..." />
            <CommandEmpty>No categories found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {categories.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(option) => {
                      console.log("🚀 ~ MultiSelect ~ option:", option);
                      handleSetValue(option);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value.includes(framework.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
