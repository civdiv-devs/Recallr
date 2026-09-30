import type { Recall, Vehicle } from "@/lib/types";

export const vehicles: Vehicle[] = [
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

export function getVehicle(id: string): Vehicle | undefined {
  return vehicles.find((vehicle) => vehicle.id === id);
}

export const recalls: Recall[] = [
  {
    id: "r1",
    vehicleId: "1",
    campaignNumber: "20V314000",
    summary:
      "The low-pressure fuel pump may fail, causing the engine to stall while driving.",
    component: "FUEL SYSTEM, GASOLINE: DELIVERY: FUEL PUMP",
    consequence:
      "An engine stall while driving can increase the risk of a crash.",
    remedy: "Dealers will replace the fuel pump, free of charge.",
    parkIt: false,
    parkOutSide: false,
    reportedDate: "2020-06-02T00:00:00Z",
    userStatus: "fixed",
  },
  {
    id: "r2",
    vehicleId: "2",
    campaignNumber: "23V087000",
    summary:
      "The rear axle hub bolt may fracture, allowing the axle shaft to separate.",
    component: "POWER TRAIN: AXLE ASSEMBLY",
    consequence:
      "Axle separation can cause a loss of drive power or allow the vehicle to roll away while parked, increasing the risk of a crash.",
    remedy: "Dealers will replace the rear axle hub bolts, free of charge.",
    parkIt: false,
    parkOutSide: false,
    reportedDate: "2023-02-14T00:00:00Z",
    userStatus: "open",
  },
  {
    id: "r3",
    vehicleId: "2",
    campaignNumber: "22V561000",
    summary:
      "On vehicles with the 3.5L engine, the turbocharger coolant line may leak.",
    component: "ENGINE AND ENGINE COOLING",
    consequence:
      "A coolant leak onto hot engine parts can increase the risk of engine damage.",
    remedy: "Dealers will replace the coolant line, free of charge.",
    parkIt: false,
    parkOutSide: false,
    reportedDate: "2022-08-03T00:00:00Z",
    userStatus: "not_applicable",
  },
  {
    id: "r4",
    vehicleId: "2",
    campaignNumber: "21V742000",
    summary:
      "The anti-lock brake module may leak brake fluid internally and short-circuit.",
    component: "SERVICE BRAKES, HYDRAULIC: ANTILOCK",
    consequence:
      "A short circuit can cause a fire, even while the vehicle is parked and off.",
    remedy:
      "Dealers will install a fused relay in the ABS circuit, free of charge.",
    parkIt: true,
    parkOutSide: true,
    reportedDate: "2021-09-20T00:00:00Z",
    userStatus: "fixed",
  },
  {
    id: "r5",
    vehicleId: "3",
    campaignNumber: "25V219000",
    summary:
      "An engine compartment wiring harness may chafe against a bracket and short-circuit.",
    component: "ELECTRICAL SYSTEM: WIRING",
    consequence:
      "A short circuit can cause a fire, even while the vehicle is parked and off.",
    remedy:
      "Dealers will inspect and reroute the harness, free of charge. Until repaired, park outside and away from structures.",
    parkIt: false,
    parkOutSide: true,
    reportedDate: "2025-04-11T00:00:00Z",
    userStatus: "open",
  },
  {
    id: "r6",
    vehicleId: "3",
    campaignNumber: "24V905000",
    summary: "The second-row seat belt buckle may not latch fully.",
    component: "SEAT BELTS: REAR",
    consequence:
      "An unlatched seat belt may not restrain an occupant in a crash, increasing the risk of injury.",
    remedy: "Dealers will replace the buckle assembly, free of charge.",
    parkIt: false,
    parkOutSide: false,
    reportedDate: "2024-12-06T00:00:00Z",
    userStatus: "repair_scheduled",
  },
];

export function getRecallsForVehicle(vehicleId: string): Recall[] {
  return recalls.filter((recall) => recall.vehicleId === vehicleId);
}
