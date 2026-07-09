import Link from "next/link";
import { posts } from "./posts";

const now = new Date();

function startOfWeek(date: Date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function formatDate(iso: string) {
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getGroupKey(iso: string): { key: string; label: string; order: number } {
  const date = new Date(iso);
  const currentWeekStart = startOfWeek(now);
  const fourWeeksAgo = new Date(currentWeekStart);
  fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);

  // This week
  if (date >= currentWeekStart) {
    return { key: "this-week", label: "This week", order: 0 };
  }

  // Last 4 weeks (week by week)
  if (date >= fourWeeksAgo) {
    const weekStart = startOfWeek(date);
    const label = weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    return { key: `week-${weekStart.toISOString()}`, label: `Week of ${label}`, order: 1 };
  }

  // This month
  const currentMonthStart = startOfMonth(now);
  if (date >= currentMonthStart) {
    return {
      key: `month-${now.getFullYear()}-${now.getMonth()}`,
      label: "This month",
      order: 2,
    };
  }

  // Earlier this year — group by month
  if (date.getFullYear() === now.getFullYear()) {
    const monthLabel = date.toLocaleDateString("en-US", { month: "long" });
    return {
      key: `year-${date.getFullYear()}-${date.getMonth()}`,
      label: monthLabel,
      order: 3,
    };
  }

  // Previous years — group by year
  return {
    key: `year-${date.getFullYear()}`,
    label: date.getFullYear().toString(),
    order: 4,
  };
}

export default function Blog() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  const grouped: { key: string; label: string; order: number; posts: typeof posts }[] = [];
  const map = new Map<string, number>();

  for (const post of sorted) {
    const { key, label, order } = getGroupKey(post.date);
    const idx = map.get(key);
    if (idx !== undefined) {
      grouped[idx].posts.push(post);
    } else {
      map.set(key, grouped.length);
      grouped.push({ key, label, order, posts: [post] });
    }
  }

  grouped.sort((a, b) => a.order - b.order);

  return (
    <>
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-2 text-muted">All posts</p>
      <div className="mt-8 space-y-10">
        {grouped.map((section) => (
          <section key={section.key}>
            <h2 className="mb-3 text-sm font-bold tracking-wider text-accent">{section.label}</h2>
            <div>
              {section.posts.map((post, i) => {
                const isFirst = i === 0;
                const isLast = i === section.posts.length - 1;
                const single = section.posts.length === 1;
                return (
                  <div key={post.slug} className="flex">
                    {/* Tree lines */}
                    {!single && (
                      <div className="flex flex-col items-center w-5 shrink-0">
                        {/* Vertical connector from above */}
                        {isFirst ? (
                          <div className="h-3" />
                        ) : (
                          <div className="w-px flex-1 bg-accent/30" />
                        )}
                        {/* Horizontal branch */}
                        <div className="w-full h-px bg-accent/30" />
                        {/* Vertical connector to below */}
                        {isLast ? (
                          <div className="h-3" />
                        ) : (
                          <div className="w-px flex-1 bg-accent/30" />
                        )}
                      </div>
                    )}
                    {single && <div className="w-5 shrink-0" />}
                    {/* Post link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex flex-1 items-center gap-4 border-b border-border px-4 py-3 transition hover:bg-surface"
                    >
                      <time className="shrink-0 text-xs text-muted w-[85px]">
                        {formatDate(post.date)}
                      </time>
                      <div className="min-w-0">
                        <h3 className="font-bold text-accent">{post.title}</h3>
                        <p className="mt-0.5 text-xs text-muted">{post.description}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
