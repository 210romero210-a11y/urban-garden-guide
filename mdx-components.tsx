import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 mt-8 pb-2 border-b border-gray-800">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-3 mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-gray-300">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-gray-300">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-300">{children}</ol>
    ),
    li: ({ children }) => <li className="text-gray-300">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary-400 hover:text-primary-300 underline underline-offset-2 transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-400 my-6">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-800 text-primary-300 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6 border border-gray-800">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-gray-800 my-8" />,
    table: ({ children }) => (
      <table className="w-full border-collapse mb-6">{children}</table>
    ),
    th: ({ children }) => (
      <th className="bg-gray-800 text-white font-semibold p-3 text-left border border-gray-700">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="p-3 border border-gray-800 text-gray-300">{children}</td>
    ),
    ...components,
  }
}
