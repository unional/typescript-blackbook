import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'

export interface SandpackSnippetProps {
	/** File path shown in the mini workspace, e.g. "/index.ts" */
	file?: string
	/** Sandpack template; `vanilla-ts` is enough for TS snippets */
	template?: 'vanilla-ts' | 'vanilla' | 'react-ts'
	files: Record<string, string>
}

export function SandpackSnippet({ file = '/index.ts', template = 'vanilla-ts', files }: SandpackSnippetProps) {
	return (
		<div className="not-prose my-6 w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
			<SandpackProvider template={template} files={files} options={{ activeFile: file }}>
				<SandpackLayout>
					<SandpackCodeEditor showTabs={Object.keys(files).length > 1} />
					<SandpackPreview />
				</SandpackLayout>
			</SandpackProvider>
		</div>
	)
}
