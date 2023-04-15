import { useQuery } from '@tanstack/react-query'

export function GitHubBadge() {
  const result = useQuery({
    queryKey: ['repo-stats'],
    queryFn: async ({ signal }) => {
      const response = await fetch('https://api.github.com/repos/unional/typescript-blackbook', {
        signal
      })
      return response.json()
    }
  })

  if (result.data?.stargazers_count === undefined) return <></>

  return (
    <>
      <div className="rounded-l-sm outline outline-1 outline-gray-300 flex px-1 bg-gray-200">
        <a
          target="_blank"
          aria-label="Star TypeScript Blackbook on GitHub"
          href="https://github.com/unional/typescript-blackbook"
          className="flex items-center"
        >
          <img src="/svgs/github-mark.svg" className="h-4 w-4 mr-1" alt="github" />
          <span>Star</span>
        </a>
      </div>
      <div className="rounded-r-sm outline outline-1 outline-gray-300 flex px-1 bg-gray-100">
        <a
          target="_blank"
          aria-label={`${result.data?.stargazers_count} stargazers on GitHub`}
          href="https://github.com/unional/typescript-blackbook/stargazers"
        >
          {result.data?.stargazers_count}
        </a>
      </div>
    </>
  )
}
