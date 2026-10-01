import Link from "next/link";
import { notFound } from "next/navigation";
import { getVehicle, getRecallsForVehicle } from "@/lib/mock-data";
import { StatusBadge } from "@/components/status-badge";
import {
  isActive,
  compareNewestFirst,
  compareUrgentThenNewest,
} from "@/lib/recalls";
import { TriangleAlert } from "lucide-react";
import { RecallItem } from "@/components/recall-item";

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

  const vehicleRecalls = getRecallsForVehicle(id);

  const activeRecalls = vehicleRecalls
    .filter(isActive)
    .toSorted(compareUrgentThenNewest);

  const resolvedRecalls = vehicleRecalls
    .filter((r) => !isActive(r))
    .toSorted(compareNewestFirst);

  const mustNotDrive = activeRecalls.some((r) => r.parkIt);
  const mustParkOutside = activeRecalls.some((r) => r.parkOutSide);
  const showUrgentBanner = mustNotDrive || mustParkOutside;

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

      {/* Urgent Banner*/}
      {showUrgentBanner && (
        <div className="flex gap-3 rounded-md border border-destructive bg-destructive/10 p-4">
          <TriangleAlert
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 text-destructive"
          />
          <div className="space-y-1 font-medium">
            {mustNotDrive && (
              <p>Do not drive this vehicle until the recall repair is done.</p>
            )}
            {mustParkOutside && (
              <p>
                Park outside and away from buildings until the recall repair is
                done.
              </p>
            )}
          </div>
        </div>
      )}

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
            Recalls are matched by year, make, and model, so some may not apply
            to your exact vehicle. Add the VIN for exact matching.
          </p>
        )}

        <p className="text-sm">Last checked: {lastChecked}</p>
      </div>

      {/* Open recalls*/}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Open recalls</h2>
        {activeRecalls.length > 0 ? (
          <ul className="space-y-3">
            {activeRecalls.map((recall) => (
              <li key={recall.id}>
                <RecallItem recall={recall} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">No open recalls</p>
        )}
      </section>

      {/* Resolved recalls*/}
      {resolvedRecalls.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Resolved recalls</h2>
          <ul className="space-y-3">
            {resolvedRecalls.map((recall) => (
              <li key={recall.id}>
                <RecallItem recall={recall} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
