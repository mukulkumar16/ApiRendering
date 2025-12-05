//@ts-nocheck
"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ImageTooltip({ children, status, count}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="text-xs">
          <p>Status: {status}</p>
          <p>Retries: {count}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}