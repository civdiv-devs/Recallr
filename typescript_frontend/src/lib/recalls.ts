import type { Recall } from "@/lib/types";

export function isActive(recall: Recall): boolean {
  return (
    recall.userStatus === "open" || recall.userStatus === "repair_scheduled"
  );
}

export function isUrgent(recall: Recall): boolean {
  return recall.parkIt || recall.parkOutSide;
}

export function compareNewestFirst(a: Recall, b: Recall): number {
  return Date.parse(b.reportedDate) - Date.parse(a.reportedDate);
}

export function compareUrgentThenNewest(a: Recall, b: Recall): number {
  const urgentDiff = Number(isUrgent(b)) - Number(isUrgent(a));
  if (urgentDiff !== 0) {
    return urgentDiff;
  }
  return compareNewestFirst(a, b);
}
