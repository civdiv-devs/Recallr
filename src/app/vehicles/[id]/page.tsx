import Link from "next/link";
import { notFound } from "next/navigation";
import { getVehicle } from "@/lib/mock-data";
import { StatusBadge } from "@/components/status-badge";

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicle = getVehicle(id);
  if (!vehicle) {
    notFound();
  }

  const lastChecked = new Date(vehicle.lastChecked).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 p-4 md:p-8">
      {/* Back link */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span aria-hidden="true">←</span>
        <span>Your Vehicles</span>
      </Link>

      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b pb-4">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h1>
        <StatusBadge status={vehicle.status} />
      </div>

      {/* Details */}
      <div className="space-y-3 text-base text-muted-foreground">
        {vehicle.nickname && (
          <p className="text-foreground">{vehicle.nickname}</p>
        )}

        <p className="flex items-center gap-2">
          <span className="font-semibold text-foreground">VIN:</span>
          {vehicle.verified ? (
            <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
              {vehicle.vin}
            </span>
          ) : (
            <span>Manually entered</span>
          )}
        </p>

        {!vehicle.verified && (
          <p className="max-w-xl rounded-md border bg-muted p-3 text-sm">
            Recalls are matched by year, make, and model, so some may not
            apply to your exact vehicle. Add the VIN for exact matching.
          </p>
        )}

        <p className="text-sm">Last checked: {lastChecked}</p>
      </div>
    </div>
  );
}