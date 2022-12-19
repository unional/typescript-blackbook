import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GitHubBadge } from './GitHubBadge'

const queryClient = new QueryClient()

export function Header() {
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <nav className="flex gap-1 p-2 items-center">
          <div className="flex pr-4">
            <a aria-label="home" href="/" className="hover:outline rounded-sm py-1 px-2 outline-sky-700">
              <div className="flex font-chalk">
                <div className="pr-1">
                  <img src="/svgs/ts-guidelines.svg" className="w-6" alt="icon" />
                </div>
                Guidelines
              </div>
            </a>
          </div>
          <a className="rounded-sm hover:bg-slate-300 py-1 px-2">Blog</a>
          <a className="rounded-sm hover:bg-slate-300 py-1 px-2">Guidelines</a>
          <div className="flex py-1 flex-grow justify-end">
            <GitHubBadge />
          </div>
        </nav>
      </header>
    </QueryClientProvider>
  )
}
