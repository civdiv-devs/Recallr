import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Vehicle} from "@/lib/types";

const vehicles: Vehicle[] = [
    {
        id: "1",
        vin: "2HGFC2F59KH123456",
        verified: true,
        year: 2019,
        make: "Honda",
        model: "Civic",
        nickname: null,
        status: "no_open_recalls",
        lastChecked: "2026-09-27T06:00:00Z",
    },
    {
        id: "2",
        vin: null,
        verified: false,
        year: 2015,
        make: "Ford",
        model: "F-150",
        nickname: "Work truck",
        status: "open_recall",
        lastChecked: "2026-09-27T06:00:00Z",
    },
    {
        id: "3",
        vin: "2T3P1RFV5MC123456",
        verified: true,
        year: 2021,
        make: "Toyota",
        model: "RAV4",
        nickname: null,
        status: "urgent",
        lastChecked: "2026-09-27T06:00:00Z",
    },
];

const statusLabels: Record<Vehicle["status"], string> = {
    no_open_recalls: "No Open Recalls",
    open_recall: "Open Recalls",
    urgent: "Urgent",
    unverified: "Unverified",
};

const statusStyles: Record<Vehicle["status"], string> = {
    no_open_recalls: "border-muted-foreground text-muted-foreground",
    open_recall: "border-amber-600 text-amber-600",
    urgent: "border-red-600 text-red-600 bg-red-50",
    unverified: "border-muted-foreground text-muted-foreground",
};

export default function DashboardPage() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center justify-between p-4">
                <h1 className="text-2x1 font-bold">Your Vehicles</h1>
            </div>

            <div className="space-y-3">
                {vehicles.map((vehicle) => (
                    <Card key={vehicle.id}>
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
                ))}
            </div>
        </div>
    );
}