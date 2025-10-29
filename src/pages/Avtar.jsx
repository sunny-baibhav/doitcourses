"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../lib/utils";

// 🧩 Main Avatar Wrapper
function Avatar({ className, ...props }) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", // fixed consistent sizing
        className
      )}
      {...props}
    />
  );
}

// 🖼️ Image
function AvatarImage({ className, ...props }) {
  return (
    <AvatarPrimitive.Image
      className={cn("h-full w-full object-cover rounded-full", className)}
      {...props}
    />
  );
}

// 🔄 Fallback (when image fails)
function AvatarFallback({ className, ...props }) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "bg-gray-300 flex h-full w-full items-center justify-center rounded-full text-gray-800 font-semibold",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
