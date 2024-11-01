import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

type GlassSheetProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
  triggerClassName?: string;
};

const GlassSheet = ({
  children,
  trigger,
  triggerClassName,
}: GlassSheetProps) => {
  return (
    <Sheet>
      <SheetTitle className="hidden">Menu</SheetTitle>
      <SheetTrigger className={cn(triggerClassName)} asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent>{children}</SheetContent>
    </Sheet>
  );
};

export default GlassSheet;
