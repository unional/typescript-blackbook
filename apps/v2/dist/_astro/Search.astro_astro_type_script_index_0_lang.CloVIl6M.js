const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f || (m.f = ['_astro/ui-core.BQ_aVLwX.js', '_astro/preload-helper.CJGquU1D.js']),
) => i.map((i) => d[i])

import { _ as m } from './preload-helper.CJGquU1D.js'
const g = { ranking: { pageLength: 0.1, termFrequency: 0.1, termSaturation: 2, termSimilarity: 9 } }
class h extends HTMLElement {
	constructor() {
		super()
		const r = this.querySelector('button[data-open-modal]'),
			u = this.querySelector('button[data-close-modal]'),
			o = this.querySelector('dialog'),
			p = this.querySelector('.dialog-frame'),
			i = (t) => {
				;('href' in (t.target || {}) || (document.body.contains(t.target) && !p.contains(t.target))) && n()
			},
			l = (t) => {
				o.showModal(),
					document.body.toggleAttribute('data-search-modal-open', !0),
					this.querySelector('input')?.focus(),
					t?.stopPropagation(),
					window.addEventListener('click', i)
			},
			n = () => o.close()
		r.addEventListener('click', l),
			(r.disabled = !1),
			u.addEventListener('click', n),
			o.addEventListener('close', () => {
				document.body.toggleAttribute('data-search-modal-open', !1), window.removeEventListener('click', i)
			}),
			window.addEventListener('keydown', (t) => {
				;(t.metaKey === !0 || t.ctrlKey === !0) && t.key === 'k' && (o.open ? n() : l(), t.preventDefault())
			})
		let c = {}
		try {
			c = JSON.parse(this.dataset.translations || '{}')
		} catch {}
		const d = this.dataset.stripTrailingSlash !== void 0 ? (t) => t.replace(/(.)\/(#.*)?$/, '$1$2') : (t) => t
		window.addEventListener('DOMContentLoaded', () => {
			;(window.requestIdleCallback || ((a) => setTimeout(a, 1)))(async () => {
				const { PagefindUI: a } = await m(
					async () => {
						const { PagefindUI: e } = await import('./ui-core.BQ_aVLwX.js')
						return { PagefindUI: e }
					},
					__vite__mapDeps([0, 1]),
				)
				new a({
					...g,
					element: '#starlight__search',
					baseUrl: '/typescript-blackbook',
					bundlePath: '/typescript-blackbook'.replace(/\/$/, '') + '/pagefind/',
					showImages: !1,
					translations: c,
					showSubResults: !0,
					processResult: (e) => {
						;(e.url = d(e.url)), (e.sub_results = e.sub_results.map((s) => ((s.url = d(s.url)), s)))
					},
				})
			})
		})
	}
}
customElements.define('site-search', h)
