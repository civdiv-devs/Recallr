import type {RecallStatus} from "@/lib/types";
import {Badge} from "@/components/ui/badge";

const statusLabels: Record<RecallStatus, string> = {
    no_open_recalls: "No Open Recalls",
    open_recall: "Open Recall",
    urgent: "Urgent",
    unverified: "Unverified",
};

const statusStyles: Record<RecallStatus, string> = {
    no_open_recalls: "border-muted-foreground text-muted-foreground",
    open_recall: "border-amber-600 text-amber-600",
    urgent: "border-red-600 text-red-600 bg-red-50",
    unverified: "border-muted-foreground text-muted-foreground",
};

export function StatusBadge({status}: {status: RecallStatus}) {
    return (
        <Badge variant="outline" className={statusStyles[status]}>
            {statusLabels[status]}
        </Badge>
    );
}