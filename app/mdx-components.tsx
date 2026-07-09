import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-4 text-3xl font-bold text-fg">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-8 text-2xl font-bold text-fg">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-fg">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-accent underline hover:opacity-80">
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="mb-4 list-disc pl-6 text-fg">{children}</ul>,
    ol: ({ children }) => <ol className="mb-4 list-decimal pl-6 text-fg">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mb-4 border-l-4 border-accent pl-4 italic text-muted">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-surface px-1.5 py-0.5 text-sm text-pink">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto border bg-surface p-4 text-sm">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b border-border px-4 py-2 font-bold text-fg">{children}</th>
    ),
    td: ({ children }) => <td className="border-b border-border px-4 py-2 text-fg">{children}</td>,
    strong: ({ children }) => <strong className="font-bold text-fg">{children}</strong>,
    em: ({ children }) => <em className="text-muted">{children}</em>,
    ...components,
  };
}
