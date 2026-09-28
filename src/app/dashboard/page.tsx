import Link from "next/link";
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
                    <Link
                        key={vehicle.id}
                        href={`/vehicles/${vehicle.id}`}
                        className="block rounded-xl transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <VehicleCard vehicle={vehicle} />
                    </Link>
                ))}
            </div>
        </div>
    );
}