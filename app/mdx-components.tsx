import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-6 md:mb-8 text-2xl md:text-4xl font-bold text-fg font-editorial text-center">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 md:mb-6 mt-8 md:mt-12 text-xl md:text-3xl font-bold text-fg font-editorial text-center">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="mb-6 md:mb-8 leading-[1.8] md:leading-[2] text-base md:text-xl text-fg font-editorial">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-accent underline hover:opacity-80">
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="mb-6 md:mb-8 list-disc pl-4 md:pl-6 space-y-2 md:space-y-3 text-base md:text-xl text-fg font-editorial">{children}</ul>,
    ol: ({ children }) => <ol className="mb-6 md:mb-8 list-decimal pl-4 md:pl-6 space-y-2 md:space-y-3 text-base md:text-xl text-fg font-editorial">{children}</ol>,
    li: ({ children }) => <li className="font-editorial">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mb-6 md:mb-8 border-l-4 border-accent pl-4 md:pl-8 py-2 md:py-3 italic text-muted font-editorial">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-surface px-1.5 py-0.5 text-sm text-pink">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-6 md:mb-8 overflow-x-auto border bg-surface p-3 md:p-4 text-sm">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="mb-6 md:mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b border-border px-3 md:px-4 py-2 font-bold text-fg">{children}</th>
    ),
    td: ({ children }) => <td className="border-b border-border px-3 md:px-4 py-2 text-fg">{children}</td>,
    strong: ({ children }) => <strong className="font-bold text-fg">{children}</strong>,
    em: ({ children }) => <em className="text-muted block text-center">{children}</em>,
    ...components,
  };
}
