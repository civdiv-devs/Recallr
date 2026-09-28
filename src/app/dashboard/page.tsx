import { VehicleCard } from "@/components/vehicle-card";
import {vehicles} from "@/lib/mock-data";

export default function DashboardPage() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2x1 font-bold">Your Vehicles</h1>
            </div>

            <div className="space-y-3">
                {vehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
        </div>
    );
}