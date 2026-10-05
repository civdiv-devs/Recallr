import { Ban, Flame } from "lucide-react";
import { isActive } from "@/lib/recalls";
import type { Recall } from "@/lib/types";
import { RecallProgressSelect } from "./recall-progress-select";
import { Label } from "@/components/ui/label";

export function RecallItem({ recall }: { recall: Recall }) {
  const showDoNotDrive = isActive(recall) && recall.parkIt;
  const showParkOutside = isActive(recall) && recall.parkOutSide;
  const hasCallouts = showDoNotDrive || showParkOutside;

  const reportedDate = new Date(recall.reportedDate).toLocaleDateString(
    "en-US",
    { dateStyle: "medium", timeZone: "UTC" },
  );

  const progressSelectId = `recall=progress=${recall.id}`;

  return (
    <article className="space-y-3 rounded-lg border p-4">
      <h3 className="font-semibold leading-snug">{recall.summary}</h3>

      {hasCallouts && (
        <div className="flex flex-wrap gap-2">
          {showDoNotDrive && (
            <p className="inline-flex items-center gap-1.5 rounded-md border border-destructive bg-destructive/10 px-2 py-1 text-sm font-semibold">
              <Ban aria-hidden="true" className="size-4 text-destructive" />
              Do not drive
            </p>
          )}
          {showParkOutside && (
            <p className="inline-flex items-center gap-1.5 rounded-md border border-destructive bg-destructive/10 px-2 py-1 text-sm font-semibold">
              <Flame aria-hidden="true" className="size-4 text-destructive" />
              Park outside
            </p>
          )}
        </div>
      )}

      <p>
        <strong className="font-semibold">Risk:</strong> {recall.consequence}
      </p>
      <p>
        <strong className="font-semibold">What to do:</strong> {recall.remedy}
      </p>

      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-t pt-3 text-sm">
        <dt className="text-muted-foreground">Component</dt>
        <dd>{recall.component}</dd>
        <dt className="text-muted-foreground">Campaign number</dt>
        <dd className="font-mono">{recall.campaignNumber}</dd>
        <dt className="text-muted-foreground">Reported</dt>
        <dd>{reportedDate}</dd>
        <dt className="text-muted-foreground">
          <Label htmlFor={progressSelectId}>Status</Label>
        </dt>
        <dd>
          <RecallProgressSelect
            id={progressSelectId}
            initialProgress={recall.userStatus}
          />
        </dd>
      </dl>
    </article>
  );
}
