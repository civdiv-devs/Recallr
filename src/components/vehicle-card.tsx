import {Card, CardContent} from "@/components/ui/card";
import {StatusBadge} from "@/components/status-badge";
import type {Vehicle} from "@/lib/types";


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
                <StatusBadge status={vehicle.status}/>
            </CardContent>
        </Card>
    );
}