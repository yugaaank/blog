import Link from "next/link";
import type { Post } from "./posts";
import { posts } from "./posts";
import { FallingPattern } from "@/components/ui/falling-pattern";

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

  const items: React.ReactNode[] = [];
  grouped.forEach((section, si) => {
    if (si > 0) {
      items.push(
        <div key={`${section.key}-divider`} className="flex items-center gap-3 px-8 py-3 bg-surface/50">
          <div className="h-px flex-1 bg-border" />
          <span className="shrink-0 text-base font-bold tracking-wider text-accent">{section.label}</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      );
    }
    section.posts.forEach((post, pi) => {
      const first = pi === 0;
      const last = pi === section.posts.length - 1;
      const after = first ? 'after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-px after:bg-border'
        : last ? 'after:absolute after:left-0 after:top-0 after:h-1/2 after:w-px after:bg-border'
        : 'after:absolute after:left-0 after:top-0 after:bottom-0 after:w-px after:bg-border';
      items.push(
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className={`relative flex items-center h-10 px-8 py-3 transition hover:bg-surface group ${after}`}
        >
          <div className="absolute left-0 top-1/2 w-3 h-px bg-border" />
          <span className="ml-4 shrink-0 whitespace-nowrap text-xs text-muted w-[95px]">
            {formatDate(post.date)}
          </span>
          <div className="min-w-0">
            <span className="font-bold text-accent group-hover:underline">{post.title}</span>
            <span className="ml-2 text-xs text-muted">{post.description}</span>
          </div>
        </Link>
      );
    });
  });

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <FallingPattern color="#bd93f9" backgroundColor="var(--background)" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-16 py-32">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="mt-2 text-muted">All posts</p>
        </div>
      </section>
      <div className="h-4 border-b border-border" />
      <div className="divide-y divide-border border-b">
        {items}
      </div>
    </>
  );
}
