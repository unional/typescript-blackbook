import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GitHubBadge } from './GitHubBadge'

const queryClient = new QueryClient()

export function Header({ active }: { active?: 'blog' | 'blackbook' }) {
	return (
		<QueryClientProvider client={queryClient}>
			<header className="bg-violet-300">
				<nav className="flex gap-1 p-2 items-center">
					<div className="flex pr-4">
						<a aria-label="home" href="/" className="hover:outline rounded-sm py-1 px-2 outline-sky-700">
							<div className="flex font-chalk">
								<div className="pr-1">
									<img src="/svgs/ts-guidelines.svg" className="w-6" alt="icon" />
								</div>
								Blackbook
							</div>
						</a>
					</div>
					<a
						className={`rounded-sm hover:bg-slate-300 py-1 px-2 ${active === 'blog' ? 'underline' : ''}`}
						href="/blogs"
					>
						Blogs
					</a>
					<a
						className={`rounded-sm hover:bg-slate-300 py-1 px-2 ${active === 'blackbook' ? 'underline' : ''
							}`}
						href="/blackbook"
					>
						Blackbook
					</a>
					<div className="flex py-1 flex-grow justify-end">
						<GitHubBadge />
					</div>
				</nav>
			</header>
		</QueryClientProvider>
	)
}
