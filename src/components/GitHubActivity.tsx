import { useMemo } from "react";

type ContributionsMap = Record<string, number>;

interface GitHubActivityProps {
  // Optional map of date (YYYY-MM-DD) to contribution count
  contributions?: ContributionsMap;
  weeks?: number; // how many weeks to show (default 52)
}

function formatDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

function startOfWeek(d: Date) {
  // GitHub grid starts on Sunday; find previous Sunday
  const copy = new Date(d);
  const day = copy.getDay();
  copy.setDate(copy.getDate() - day);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

  const COLORS = ["#0b1220", "#093c09", "#0e7d12", "#26a641", "#6be06b"];

const GitHubActivity = ({ contributions, weeks = 52 }: GitHubActivityProps) => {
  // Build a 7 x weeks grid ending today
  const today = new Date();
  const grid = useMemo(() => {
    const end = startOfWeek(new Date(today));
    // end is Sunday of current week
    const weeksArr: string[][] = [];
    for (let w = 0; w < weeks; w++) {
      const col: string[] = [];
      for (let d = 0; d < 7; d++) {
        const day = new Date(end);
        day.setDate(end.getDate() - (weeks - 1 - w) * 7 + d - 6);
        col.push(formatDate(day));
      }
      weeksArr.push(col);
    }
    return weeksArr;
  }, [today, weeks]);

  // If no contributions provided, generate mock pattern (sparse)
  const contribMap: ContributionsMap = useMemo(() => {
    if (contributions) return contributions;
    const map: ContributionsMap = {};
    grid.flat().forEach((dateStr, i) => {
      // deterministic-ish pattern using index
      const val = Math.floor((Math.sin(i * 0.3) + 1) * 3); // 0..6 approx
      map[dateStr] = val > 6 ? 6 : val;
    });
    // Overlay a guessed preset to match the screenshot: place higher-intensity greens
    // Find month -> column index mapping
    const monthToCol: Record<string, number> = {};
    grid.forEach((col, ci) => {
      for (const dateStr of col) {
        const d = new Date(dateStr);
        if (d.getDate() === 1) {
          monthToCol[d.toLocaleString(undefined, { month: "short" })] = ci;
          break;
        }
      }
    });

    const setAt = (colIdx: number, row: number, value: number) => {
      if (colIdx < 0 || colIdx >= grid.length) return;
      const col = grid[colIdx];
      if (!col || row < 0 || row >= col.length) return;
      map[col[row]] = value;
    };

    // Guessed placements based on the screenshot (Dec->Nov across columns)
    const mar = monthToCol["Mar"] ?? -1;
    const sep = monthToCol["Sep"] ?? -1;
    const oct = monthToCol["Oct"] ?? -1;
    const nov = monthToCol["Nov"] ?? -1;

    // March: single green on Wednesday
    setAt(mar, 2, 4);
    // September: single green on Friday
    setAt(sep, 4, 4);
    // October: a small cluster
    setAt(oct, 4, 4);
    setAt(oct + 1, 1, 4);
    // November: cluster towards the very end
    setAt(nov - 1, 1, 4);
    setAt(nov, 4, 4);
    setAt(nov, 5, 4);

    return map;
  }, [contributions, grid]);

  // compute max for bucket normalization
  const max = Math.max(1, ...Object.values(contribMap));

  // Determine month labels: show month abbrev at the column where the first of month appears
  const monthLabels = useMemo(() => {
    const labels: Record<number, string> = {};
    grid.forEach((col, i) => {
      for (const dateStr of col) {
        const d = new Date(dateStr);
        if (d.getDate() === 1) {
          labels[i] = d.toLocaleString(undefined, { month: "short" });
          break;
        }
      }
    });
    return labels;
  }, [grid]);

  // visual params
  const SIZE = 12; // square size in px
  const GAP = 4; // gap between squares

  return (
    <section className="mt-8 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
      <h2 className="text-comment mb-4">// github activity</h2>
      <div className="w-full overflow-x-auto">
        <div style={{ display: "flex", gap: 12 }}>
          {/* Weekday labels */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: SIZE * 7 + GAP * 6, marginRight: 8 }}>
            <div className="text-xs text-muted-foreground">Mon</div>
            <div />
            <div className="text-xs text-muted-foreground">Wed</div>
            <div />
            <div className="text-xs text-muted-foreground">Fri</div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: GAP }}>
            {/* months header aligned to columns */}
            <div style={{ display: "flex", flexDirection: "column", gap: GAP }}>
              <div style={{ display: "flex", gap: GAP, alignItems: "center", height: SIZE }}>
                {grid.map((_, ci) => (
                  <div key={ci} style={{ width: SIZE, textAlign: "center", fontSize: 12, color: "var(--muted-foreground)" }}>
                    {monthLabels[ci] || ""}
                  </div>
                ))}
              </div>
              {/* grid */}
              <div style={{ display: "flex", gap: GAP }}>
                {grid.map((col, ci) => (
                  <div key={ci} style={{ display: "flex", flexDirection: "column", gap: GAP }}>
                    {col.map((dateStr) => {
                      const count = contribMap[dateStr] || 0;
                      const bucket = Math.min(4, Math.floor((count / max) * 4));
                      const color = bucket === 0 ? COLORS[0] : COLORS[bucket];
                      return (
                        <div
                          key={dateStr}
                          title={`${dateStr}: ${count} contributions`}
                          style={{
                            width: SIZE,
                            height: SIZE,
                            background: color,
                            borderRadius: 3,
                            transition: "all 120ms",
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span>Less</span>
          <div className="flex items-center gap-1">
            {COLORS.map((c, i) => (
              <div key={i} style={{ width: SIZE, height: SIZE, background: c, borderRadius: 3 }} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
