import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import type {Vehicle} from "@/lib/types";

const statusLabels: Record<Vehicle["status"], string> = {
    no_open_recalls: "No Open Recalls",
    open_recall: "Open Recall",
    urgent: "Urgent",
    unverified: "Unverified",
};

const statusStyles: Record<Vehicle["status"], string> = {
    no_open_recalls: "border-muted-foreground text-muted-foreground",
    open_recall: "border-amber-600 text-amber-600",
    urgent: "border-red-600 text-red-600 bg-red-50",
    unverified: "border-muted-foreground text-muted-foreground",
};

export function VehicleCard({vehicle}: {vehicle: Vehicle}) {
    return (
        <Card>
            <CardContent className="flex items-center justify-between p-4">
                <div>
                    <p className="font-semibold">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {vehicle.nickname ?? (vehicle.verified ? vehicle.vin : "Manually entered")}
                    </p>
                </div>
                <Badge variant="outline" className={statusStyles[vehicle.status]}>
                    {statusLabels[vehicle.status]}
                </Badge>
            </CardContent>
        </Card>
    );
}