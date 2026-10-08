"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { RecallProgress } from "@/lib/types";

const progressLabels: Record<RecallProgress, string> = {
  open: "Open",
  repair_scheduled: "Repair scheduled",
  fixed: "Fixed",
  not_applicable: "Doesn't apply to my vehicle",
};

type RecallProgressSelectProps = {
  id: string;
  initialProgress: RecallProgress;
};

export function RecallProgressSelect({
  id,
  initialProgress,
}: RecallProgressSelectProps) {
  const [progress, setProgress] = useState(initialProgress);

  return (
    <Select
      value={progress}
      items={progressLabels}
      onValueChange={(value) => {
        if (value !== null) {
          setProgress(value);
        }
      }}
    >
      <SelectTrigger
        id={id}
        className="w-full text-base data-[size=default]:h-10 sm:w-72"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(progressLabels).map(([value, label]) => (
          <SelectItem key={value} value={value} className="py-2 text-base">
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
