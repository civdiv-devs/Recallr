export type RecallStatus =
  "no_open_recalls" | "open_recall" | "urgent" | "unverified";

export type RecallProgress =
  "open" | "repair_scheduled" | "fixed" | "not_applicable";

export type Vehicle = {
  id: string;
  vin: string | null;
  verified: boolean;
  year: number;
  make: string;
  model: string;
  nickname: string | null;
  status: RecallStatus;
  lastChecked: string;
};

export type Recall = {
  id: string;
  vehicleId: string;
  campaignNumber: string;
  summary: string;
  component: string;
  consequence: string;
  remedy: string;
  parkIt: boolean;
  parkOutSide: boolean;
  reportedDate: string;
  userStatus: RecallProgress;
};
