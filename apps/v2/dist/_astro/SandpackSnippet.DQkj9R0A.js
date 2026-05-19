const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'_astro/index.CXVU2dZ1.js',
			'_astro/base-80a1f760.EHupSAwf.js',
			'_astro/consoleHook-59e792cb.BIRrJHnj.js',
			'_astro/index-599aeaf7.DdAZ73b2.js',
			'_astro/index.DjkCQ0TT.js',
			'_astro/index.CSo-74ve.js',
		]),
) => i.map((i) => d[i])

import { a as C, g as Ch, R as qd } from './index.CSo-74ve.js'
import { _ as gs } from './preload-helper.CJGquU1D.js'
var ms = { exports: {} },
	Fi = {}
var tl
function Gd() {
	if (tl) return Fi
	tl = 1
	var n = Symbol.for('react.transitional.element'),
		e = Symbol.for('react.fragment')
	function t(i, r, s) {
		var o = null
		if ((s !== void 0 && (o = '' + s), r.key !== void 0 && (o = '' + r.key), 'key' in r)) {
			s = {}
			for (var a in r) a !== 'key' && (s[a] = r[a])
		} else s = r
		return (r = s.ref), { $$typeof: n, type: i, key: o, ref: r !== void 0 ? r : null, props: s }
	}
	return (Fi.Fragment = e), (Fi.jsx = t), (Fi.jsxs = t), Fi
}
var il
function Ud() {
	return il || ((il = 1), (ms.exports = Gd())), ms.exports
}
var S = Ud(),
	ne = 'colors',
	_e = 'sizes',
	z = 'space',
	Fd = {
		gap: z,
		gridGap: z,
		columnGap: z,
		gridColumnGap: z,
		rowGap: z,
		gridRowGap: z,
		inset: z,
		insetBlock: z,
		insetBlockEnd: z,
		insetBlockStart: z,
		insetInline: z,
		insetInlineEnd: z,
		insetInlineStart: z,
		margin: z,
		marginTop: z,
		marginRight: z,
		marginBottom: z,
		marginLeft: z,
		marginBlock: z,
		marginBlockEnd: z,
		marginBlockStart: z,
		marginInline: z,
		marginInlineEnd: z,
		marginInlineStart: z,
		padding: z,
		paddingTop: z,
		paddingRight: z,
		paddingBottom: z,
		paddingLeft: z,
		paddingBlock: z,
		paddingBlockEnd: z,
		paddingBlockStart: z,
		paddingInline: z,
		paddingInlineEnd: z,
		paddingInlineStart: z,
		top: z,
		right: z,
		bottom: z,
		left: z,
		scrollMargin: z,
		scrollMarginTop: z,
		scrollMarginRight: z,
		scrollMarginBottom: z,
		scrollMarginLeft: z,
		scrollMarginX: z,
		scrollMarginY: z,
		scrollMarginBlock: z,
		scrollMarginBlockEnd: z,
		scrollMarginBlockStart: z,
		scrollMarginInline: z,
		scrollMarginInlineEnd: z,
		scrollMarginInlineStart: z,
		scrollPadding: z,
		scrollPaddingTop: z,
		scrollPaddingRight: z,
		scrollPaddingBottom: z,
		scrollPaddingLeft: z,
		scrollPaddingX: z,
		scrollPaddingY: z,
		scrollPaddingBlock: z,
		scrollPaddingBlockEnd: z,
		scrollPaddingBlockStart: z,
		scrollPaddingInline: z,
		scrollPaddingInlineEnd: z,
		scrollPaddingInlineStart: z,
		fontSize: 'fontSizes',
		background: ne,
		backgroundColor: ne,
		backgroundImage: ne,
		borderImage: ne,
		border: ne,
		borderBlock: ne,
		borderBlockEnd: ne,
		borderBlockStart: ne,
		borderBottom: ne,
		borderBottomColor: ne,
		borderColor: ne,
		borderInline: ne,
		borderInlineEnd: ne,
		borderInlineStart: ne,
		borderLeft: ne,
		borderLeftColor: ne,
		borderRight: ne,
		borderRightColor: ne,
		borderTop: ne,
		borderTopColor: ne,
		caretColor: ne,
		color: ne,
		columnRuleColor: ne,
		fill: ne,
		outline: ne,
		outlineColor: ne,
		stroke: ne,
		textDecorationColor: ne,
		fontFamily: 'fonts',
		fontWeight: 'fontWeights',
		lineHeight: 'lineHeights',
		letterSpacing: 'letterSpacings',
		blockSize: _e,
		minBlockSize: _e,
		maxBlockSize: _e,
		inlineSize: _e,
		minInlineSize: _e,
		maxInlineSize: _e,
		width: _e,
		minWidth: _e,
		maxWidth: _e,
		height: _e,
		minHeight: _e,
		maxHeight: _e,
		flexBasis: _e,
		gridTemplateColumns: _e,
		gridTemplateRows: _e,
		borderWidth: 'borderWidths',
		borderTopWidth: 'borderWidths',
		borderRightWidth: 'borderWidths',
		borderBottomWidth: 'borderWidths',
		borderLeftWidth: 'borderWidths',
		borderStyle: 'borderStyles',
		borderTopStyle: 'borderStyles',
		borderRightStyle: 'borderStyles',
		borderBottomStyle: 'borderStyles',
		borderLeftStyle: 'borderStyles',
		borderRadius: 'radii',
		borderTopLeftRadius: 'radii',
		borderTopRightRadius: 'radii',
		borderBottomRightRadius: 'radii',
		borderBottomLeftRadius: 'radii',
		boxShadow: 'shadows',
		textShadow: 'shadows',
		transition: 'transitions',
		zIndex: 'zIndices',
	},
	Hd = (n, e) => (typeof e == 'function' ? { '()': Function.prototype.toString.call(e) } : e),
	Xn = () => {
		const n = Object.create(null)
		return (e, t, ...i) => {
			const r = ((s) => JSON.stringify(s, Hd))(e)
			return r in n ? n[r] : (n[r] = t(e, ...i))
		}
	},
	lr = Symbol.for('sxs.internal'),
	da = (n, e) => Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)),
	nl = (n) => {
		for (const e in n) return !0
		return !1
	},
	{ hasOwnProperty: Kd } = Object.prototype,
	lo = (n) => (n.includes('-') ? n : n.replace(/[A-Z]/g, (e) => '-' + e.toLowerCase())),
	Jd = /\s+(?![^()]*\))/,
	xi = (n) => (e) => n(...(typeof e == 'string' ? String(e).split(Jd) : [e])),
	rl = {
		appearance: (n) => ({ WebkitAppearance: n, appearance: n }),
		backfaceVisibility: (n) => ({ WebkitBackfaceVisibility: n, backfaceVisibility: n }),
		backdropFilter: (n) => ({ WebkitBackdropFilter: n, backdropFilter: n }),
		backgroundClip: (n) => ({ WebkitBackgroundClip: n, backgroundClip: n }),
		boxDecorationBreak: (n) => ({ WebkitBoxDecorationBreak: n, boxDecorationBreak: n }),
		clipPath: (n) => ({ WebkitClipPath: n, clipPath: n }),
		content: (n) => ({
			content:
				n.includes('"') ||
				n.includes("'") ||
				/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(n)
					? n
					: `"${n}"`,
		}),
		hyphens: (n) => ({ WebkitHyphens: n, hyphens: n }),
		maskImage: (n) => ({ WebkitMaskImage: n, maskImage: n }),
		maskSize: (n) => ({ WebkitMaskSize: n, maskSize: n }),
		tabSize: (n) => ({ MozTabSize: n, tabSize: n }),
		textSizeAdjust: (n) => ({ WebkitTextSizeAdjust: n, textSizeAdjust: n }),
		userSelect: (n) => ({ WebkitUserSelect: n, userSelect: n }),
		marginBlock: xi((n, e) => ({ marginBlockStart: n, marginBlockEnd: e || n })),
		marginInline: xi((n, e) => ({ marginInlineStart: n, marginInlineEnd: e || n })),
		maxSize: xi((n, e) => ({ maxBlockSize: n, maxInlineSize: e || n })),
		minSize: xi((n, e) => ({ minBlockSize: n, minInlineSize: e || n })),
		paddingBlock: xi((n, e) => ({ paddingBlockStart: n, paddingBlockEnd: e || n })),
		paddingInline: xi((n, e) => ({ paddingInlineStart: n, paddingInlineEnd: e || n })),
	},
	vs = /([\d.]+)([^]*)/,
	eO = (n, e) =>
		n.length
			? n.reduce(
					(t, i) => (
						t.push(
							...e.map((r) =>
								r.includes('&') ? r.replace(/&/g, /[ +>|~]/.test(i) && /&.*&/.test(r) ? `:is(${i})` : i) : i + ' ' + r,
							),
						),
						t
					),
					[],
				)
			: e,
	tO = (n, e) =>
		n in iO && typeof e == 'string'
			? e.replace(
					/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
					(t, i, r, s) =>
						i +
						(r === 'stretch'
							? `-moz-available${s};${lo(n)}:${i}-webkit-fill-available`
							: `-moz-fit-content${s};${lo(n)}:${i}fit-content`) +
						s,
				)
			: String(e),
	iO = {
		blockSize: 1,
		height: 1,
		inlineSize: 1,
		maxBlockSize: 1,
		maxHeight: 1,
		maxInlineSize: 1,
		maxWidth: 1,
		minBlockSize: 1,
		minHeight: 1,
		minInlineSize: 1,
		minWidth: 1,
		width: 1,
	},
	Lt = (n) => (n ? n + '-' : ''),
	Zh = (n, e, t) =>
		n.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (i, r, s, o, a) =>
			(o == '$') == !!s
				? i
				: (r || o == '--' ? 'calc(' : '') +
					'var(--' +
					(o === '$' ? Lt(e) + (a.includes('$') ? '' : Lt(t)) + a.replace(/\$/g, '-') : a) +
					')' +
					(r || o == '--' ? '*' + (r || '') + (s || '1') + ')' : ''),
		),
	nO = /\s*,\s*(?![^()]*\))/,
	rO = Object.prototype.toString,
	$i = (n, e, t, i, r) => {
		let s, o, a
		const l = (c, h, u) => {
			let f, d
			const O = (p) => {
				for (f in p) {
					const g = f.charCodeAt(0) === 64,
						b = g && Array.isArray(p[f]) ? p[f] : [p[f]]
					for (d of b) {
						const x = /[A-Z]/.test((m = f)) ? m : m.replace(/-[^]/g, (y) => y[1].toUpperCase()),
							$ = typeof d == 'object' && d && d.toString === rO && (!i.utils[x] || !h.length)
						if (x in i.utils && !$) {
							const y = i.utils[x]
							if (y !== o) {
								;(o = y), O(y(d)), (o = null)
								continue
							}
						} else if (x in rl) {
							const y = rl[x]
							if (y !== a) {
								;(a = y), O(y(d)), (a = null)
								continue
							}
						}
						if (
							(g &&
								((v = f.slice(1) in i.media ? '@media ' + i.media[f.slice(1)] : f),
								(f = v.replace(
									/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
									(y, Q, P, X, M, E) => {
										const j = vs.test(Q),
											N = 0.0625 * (j ? -1 : 1),
											[I, q] = j ? [X, Q] : [Q, X]
										return (
											'(' +
											(P[0] === '=' ? '' : (P[0] === '>') === j ? 'max-' : 'min-') +
											I +
											':' +
											(P[0] !== '=' && P.length === 1
												? q.replace(vs, (K, oe, J) => Number(oe) + N * (P === '>' ? 1 : -1) + J)
												: q) +
											(M
												? ') and (' +
													(M[0] === '>' ? 'min-' : 'max-') +
													I +
													':' +
													(M.length === 1 ? E.replace(vs, (K, oe, J) => Number(oe) + N * (M === '>' ? -1 : 1) + J) : E)
												: '') +
											')'
										)
									},
								))),
							$)
						) {
							const y = g ? u.concat(f) : [...u],
								Q = g ? [...h] : eO(h, f.split(nO))
							s !== void 0 && r(sl(...s)), (s = void 0), l(d, Q, y)
						} else
							s === void 0 && (s = [[], h, u]),
								(f = g || f.charCodeAt(0) !== 36 ? f : `--${Lt(i.prefix)}${f.slice(1).replace(/\$/g, '-')}`),
								(d = $
									? d
									: typeof d == 'number'
										? d && x in sO
											? String(d) + 'px'
											: String(d)
										: Zh(tO(x, d ?? ''), i.prefix, i.themeMap[x])),
								s[0].push(`${g ? `${f} ` : `${lo(f)}:`}${d}`)
					}
				}
				var v, m
			}
			O(c), s !== void 0 && r(sl(...s)), (s = void 0)
		}
		l(n, e, t)
	},
	sl = (n, e, t) =>
		`${t.map((i) => `${i}{`).join('')}${e.length ? `${e.join(',')}{` : ''}${n.join(';')}${e.length ? '}' : ''}${Array(t.length ? t.length + 1 : 0).join('}')}`,
	sO = {
		animationDelay: 1,
		animationDuration: 1,
		backgroundSize: 1,
		blockSize: 1,
		border: 1,
		borderBlock: 1,
		borderBlockEnd: 1,
		borderBlockEndWidth: 1,
		borderBlockStart: 1,
		borderBlockStartWidth: 1,
		borderBlockWidth: 1,
		borderBottom: 1,
		borderBottomLeftRadius: 1,
		borderBottomRightRadius: 1,
		borderBottomWidth: 1,
		borderEndEndRadius: 1,
		borderEndStartRadius: 1,
		borderInlineEnd: 1,
		borderInlineEndWidth: 1,
		borderInlineStart: 1,
		borderInlineStartWidth: 1,
		borderInlineWidth: 1,
		borderLeft: 1,
		borderLeftWidth: 1,
		borderRadius: 1,
		borderRight: 1,
		borderRightWidth: 1,
		borderSpacing: 1,
		borderStartEndRadius: 1,
		borderStartStartRadius: 1,
		borderTop: 1,
		borderTopLeftRadius: 1,
		borderTopRightRadius: 1,
		borderTopWidth: 1,
		borderWidth: 1,
		bottom: 1,
		columnGap: 1,
		columnRule: 1,
		columnRuleWidth: 1,
		columnWidth: 1,
		containIntrinsicSize: 1,
		flexBasis: 1,
		fontSize: 1,
		gap: 1,
		gridAutoColumns: 1,
		gridAutoRows: 1,
		gridTemplateColumns: 1,
		gridTemplateRows: 1,
		height: 1,
		inlineSize: 1,
		inset: 1,
		insetBlock: 1,
		insetBlockEnd: 1,
		insetBlockStart: 1,
		insetInline: 1,
		insetInlineEnd: 1,
		insetInlineStart: 1,
		left: 1,
		letterSpacing: 1,
		margin: 1,
		marginBlock: 1,
		marginBlockEnd: 1,
		marginBlockStart: 1,
		marginBottom: 1,
		marginInline: 1,
		marginInlineEnd: 1,
		marginInlineStart: 1,
		marginLeft: 1,
		marginRight: 1,
		marginTop: 1,
		maxBlockSize: 1,
		maxHeight: 1,
		maxInlineSize: 1,
		maxWidth: 1,
		minBlockSize: 1,
		minHeight: 1,
		minInlineSize: 1,
		minWidth: 1,
		offsetDistance: 1,
		offsetRotate: 1,
		outline: 1,
		outlineOffset: 1,
		outlineWidth: 1,
		overflowClipMargin: 1,
		padding: 1,
		paddingBlock: 1,
		paddingBlockEnd: 1,
		paddingBlockStart: 1,
		paddingBottom: 1,
		paddingInline: 1,
		paddingInlineEnd: 1,
		paddingInlineStart: 1,
		paddingLeft: 1,
		paddingRight: 1,
		paddingTop: 1,
		perspective: 1,
		right: 1,
		rowGap: 1,
		scrollMargin: 1,
		scrollMarginBlock: 1,
		scrollMarginBlockEnd: 1,
		scrollMarginBlockStart: 1,
		scrollMarginBottom: 1,
		scrollMarginInline: 1,
		scrollMarginInlineEnd: 1,
		scrollMarginInlineStart: 1,
		scrollMarginLeft: 1,
		scrollMarginRight: 1,
		scrollMarginTop: 1,
		scrollPadding: 1,
		scrollPaddingBlock: 1,
		scrollPaddingBlockEnd: 1,
		scrollPaddingBlockStart: 1,
		scrollPaddingBottom: 1,
		scrollPaddingInline: 1,
		scrollPaddingInlineEnd: 1,
		scrollPaddingInlineStart: 1,
		scrollPaddingLeft: 1,
		scrollPaddingRight: 1,
		scrollPaddingTop: 1,
		shapeMargin: 1,
		textDecoration: 1,
		textDecorationThickness: 1,
		textIndent: 1,
		textUnderlineOffset: 1,
		top: 1,
		transitionDelay: 1,
		transitionDuration: 1,
		verticalAlign: 1,
		width: 1,
		wordSpacing: 1,
	},
	ol = (n) => String.fromCharCode(n + (n > 25 ? 39 : 97)),
	hi = (n) =>
		((e) => {
			let t,
				i = ''
			for (t = Math.abs(e); t > 52; t = (t / 52) | 0) i = ol(t % 52) + i
			return ol(t % 52) + i
		})(
			((e, t) => {
				let i = t.length
				for (; i; ) e = (33 * e) ^ t.charCodeAt(--i)
				return e
			})(5381, JSON.stringify(n)) >>> 0,
		),
	ln = ['themed', 'global', 'styled', 'onevar', 'resonevar', 'allvar', 'inline'],
	oO = (n) => {
		if (n.href && !n.href.startsWith(location.origin)) return !1
		try {
			return !!n.cssRules
		} catch {
			return !1
		}
	},
	aO = (n) => {
		let e
		const t = () => {
				const { cssRules: r } = e.sheet
				return [].map
					.call(r, (s, o) => {
						const { cssText: a } = s
						let l = ''
						if (a.startsWith('--sxs')) return ''
						if (r[o - 1] && (l = r[o - 1].cssText).startsWith('--sxs')) {
							if (!s.cssRules.length) return ''
							for (const c in e.rules)
								if (e.rules[c].group === s) return `--sxs{--sxs:${[...e.rules[c].cache].join(' ')}}${a}`
							return s.cssRules.length ? `${l}${a}` : ''
						}
						return a
					})
					.join('')
			},
			i = () => {
				if (e) {
					const { rules: a, sheet: l } = e
					if (!l.deleteRule) {
						for (; Object(Object(l.cssRules)[0]).type === 3; ) l.cssRules.splice(0, 1)
						l.cssRules = []
					}
					for (const c in a) delete a[c]
				}
				const r = Object(n).styleSheets || []
				for (const a of r)
					if (oO(a)) {
						for (let l = 0, c = a.cssRules; c[l]; ++l) {
							const h = Object(c[l])
							if (h.type !== 1) continue
							const u = Object(c[l + 1])
							if (u.type !== 4) continue
							++l
							const { cssText: f } = h
							if (!f.startsWith('--sxs')) continue
							const d = f.slice(14, -3).trim().split(/\s+/),
								O = ln[d[0]]
							O &&
								(e || (e = { sheet: a, reset: i, rules: {}, toString: t }),
								(e.rules[O] = { group: u, index: l, cache: new Set(d) }))
						}
						if (e) break
					}
				if (!e) {
					const a = (l, c) => ({
						type: c,
						cssRules: [],
						insertRule(h, u) {
							this.cssRules.splice(
								u,
								0,
								a(h, { import: 3, undefined: 1 }[(h.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4),
							)
						},
						get cssText() {
							return l === '@media{}' ? `@media{${[].map.call(this.cssRules, (h) => h.cssText).join('')}}` : l
						},
					})
					e = {
						sheet: n ? (n.head || n).appendChild(document.createElement('style')).sheet : a('', 'text/css'),
						rules: {},
						reset: i,
						toString: t,
					}
				}
				const { sheet: s, rules: o } = e
				for (let a = ln.length - 1; a >= 0; --a) {
					const l = ln[a]
					if (!o[l]) {
						const c = ln[a + 1],
							h = o[c] ? o[c].index : s.cssRules.length
						s.insertRule('@media{}', h),
							s.insertRule(`--sxs{--sxs:${a}}`, h),
							(o[l] = { group: s.cssRules[h + 1], index: h, cache: new Set([a]) })
					}
					lO(o[l])
				}
			}
		return i(), e
	},
	lO = (n) => {
		const e = n.group
		let t = e.cssRules.length
		n.apply = (i) => {
			try {
				e.insertRule(i, t), ++t
			} catch {}
		}
	},
	Hi = Symbol(),
	cO = Xn(),
	hO = (n, e) =>
		cO(n, () => (...t) => {
			const i = { type: null, composers: new Set() }
			for (const r of t)
				if (r != null)
					if (r[lr]) {
						i.type == null && (i.type = r[lr].type)
						for (const s of r[lr].composers) i.composers.add(s)
					} else r.constructor !== Object || r.$$typeof ? i.type == null && (i.type = r) : i.composers.add(uO(r, n))
			return (
				i.type == null && (i.type = 'span'),
				i.composers.size || i.composers.add(['PJLV', {}, [], [], {}, []]),
				fO(n, i, e)
			)
		}),
	uO = ({ variants: n, compoundVariants: e, defaultVariants: t, ...i }, r) => {
		const s = `${Lt(r.prefix)}c-${hi(i)}`,
			o = [],
			a = [],
			l = Object.create(null),
			c = []
		for (const f in t) l[f] = String(t[f])
		if (typeof n == 'object' && n)
			for (const f in n) {
				;(h = l), (u = f), Kd.call(h, u) || (l[f] = 'undefined')
				const d = n[f]
				for (const O in d) {
					const p = { [f]: String(O) }
					String(O) === 'undefined' && c.push(f)
					const v = d[O],
						m = [p, v, !nl(v)]
					o.push(m)
				}
			}
		var h, u
		if (typeof e == 'object' && e)
			for (const f of e) {
				let { css: d, ...O } = f
				d = (typeof d == 'object' && d) || {}
				for (const v in O) O[v] = String(O[v])
				const p = [O, d, !nl(d)]
				a.push(p)
			}
		return [s, i, o, a, l, c]
	},
	fO = (n, e, t) => {
		const [i, r, s, o] = dO(e.composers),
			a =
				typeof e.type == 'function' || e.type.$$typeof
					? ((u) => {
							function f() {
								for (let d = 0; d < f[Hi].length; d++) {
									const [O, p] = f[Hi][d]
									u.rules[O].apply(p)
								}
								return (f[Hi] = []), null
							}
							return (
								(f[Hi] = []), (f.rules = {}), ln.forEach((d) => (f.rules[d] = { apply: (O) => f[Hi].push([d, O]) })), f
							)
						})(t)
					: null,
			l = (a || t).rules,
			c = `.${i}${r.length > 1 ? `:where(.${r.slice(1).join('.')})` : ''}`,
			h = (u) => {
				u = (typeof u == 'object' && u) || OO
				const { css: f, ...d } = u,
					O = {}
				for (const m in s)
					if ((delete d[m], m in u)) {
						let g = u[m]
						typeof g == 'object' && g
							? (O[m] = { '@initial': s[m], ...g })
							: ((g = String(g)), (O[m] = g !== 'undefined' || o.has(m) ? g : s[m]))
					} else O[m] = s[m]
				const p = new Set([...r])
				for (const [m, g, b, x] of e.composers) {
					t.rules.styled.cache.has(m) ||
						(t.rules.styled.cache.add(m),
						$i(g, [`.${m}`], [], n, (Q) => {
							l.styled.apply(Q)
						}))
					const $ = al(b, O, n.media),
						y = al(x, O, n.media, !0)
					for (const Q of $)
						if (Q !== void 0)
							for (const [P, X, M] of Q) {
								const E = `${m}-${hi(X)}-${P}`
								p.add(E)
								const j = (M ? t.rules.resonevar : t.rules.onevar).cache,
									N = M ? l.resonevar : l.onevar
								j.has(E) ||
									(j.add(E),
									$i(X, [`.${E}`], [], n, (I) => {
										N.apply(I)
									}))
							}
					for (const Q of y)
						if (Q !== void 0)
							for (const [P, X] of Q) {
								const M = `${m}-${hi(X)}-${P}`
								p.add(M),
									t.rules.allvar.cache.has(M) ||
										(t.rules.allvar.cache.add(M),
										$i(X, [`.${M}`], [], n, (E) => {
											l.allvar.apply(E)
										}))
							}
				}
				if (typeof f == 'object' && f) {
					const m = `${i}-i${hi(f)}-css`
					p.add(m),
						t.rules.inline.cache.has(m) ||
							(t.rules.inline.cache.add(m),
							$i(f, [`.${m}`], [], n, (g) => {
								l.inline.apply(g)
							}))
				}
				for (const m of String(u.className || '')
					.trim()
					.split(/\s+/))
					m && p.add(m)
				const v = (d.className = [...p].join(' '))
				return { type: e.type, className: v, selector: c, props: d, toString: () => v, deferredInjector: a }
			}
		return da(h, { className: i, selector: c, [lr]: e, toString: () => (t.rules.styled.cache.has(i) || h(), i) })
	},
	dO = (n) => {
		let e = ''
		const t = [],
			i = {},
			r = []
		for (const [s, , , , o, a] of n) {
			e === '' && (e = s), t.push(s), r.push(...a)
			for (const l in o) {
				const c = o[l]
				;(i[l] === void 0 || c !== 'undefined' || a.includes(c)) && (i[l] = c)
			}
		}
		return [e, t, i, new Set(r)]
	},
	al = (n, e, t, i) => {
		const r = []
		e: for (let [s, o, a] of n) {
			if (a) continue
			let l,
				c = 0,
				h = !1
			for (l in s) {
				const u = s[l]
				const f = e[l]
				if (f !== u) {
					if (typeof f != 'object' || !f) continue e
					{
						let d,
							O,
							p = 0
						for (const v in f) {
							if (u === String(f[v])) {
								if (v !== '@initial') {
									const m = v.slice(1)
									;(O = O || []).push(m in t ? t[m] : v.replace(/^@media ?/, '')), (h = !0)
								}
								;(c += p), (d = !0)
							}
							++p
						}
						if ((O && O.length && (o = { ['@media ' + O.join(', ')]: o }), !d)) continue e
					}
				}
			}
			;(r[c] = r[c] || []).push([i ? 'cv' : `${l}-${s[l]}`, o, h])
		}
		return r
	},
	OO = {},
	pO = Xn(),
	gO = (n, e) =>
		pO(n, () => (...t) => {
			const i = () => {
				for (let r of t) {
					r = (typeof r == 'object' && r) || {}
					const s = hi(r)
					if (!e.rules.global.cache.has(s)) {
						if ((e.rules.global.cache.add(s), '@import' in r)) {
							let o = [].indexOf.call(e.sheet.cssRules, e.rules.themed.group) - 1
							for (let a of [].concat(r['@import']))
								(a = a.includes('"') || a.includes("'") ? a : `"${a}"`), e.sheet.insertRule(`@import ${a};`, o++)
							delete r['@import']
						}
						$i(r, [], [], n, (o) => {
							e.rules.global.apply(o)
						})
					}
				}
				return ''
			}
			return da(i, { toString: i })
		}),
	mO = Xn(),
	vO = (n, e) =>
		mO(n, () => (t) => {
			const i = `${Lt(n.prefix)}k-${hi(t)}`,
				r = () => {
					if (!e.rules.global.cache.has(i)) {
						e.rules.global.cache.add(i)
						const s = []
						$i(t, [], [], n, (a) => s.push(a))
						const o = `@keyframes ${i}{${s.join('')}}`
						e.rules.global.apply(o)
					}
					return i
				}
			return da(r, {
				get name() {
					return r()
				},
				toString: r,
			})
		}),
	bO = class {
		constructor(n, e, t, i) {
			;(this.token = n == null ? '' : String(n)),
				(this.value = e == null ? '' : String(e)),
				(this.scale = t == null ? '' : String(t)),
				(this.prefix = i == null ? '' : String(i))
		}
		get computedValue() {
			return 'var(' + this.variable + ')'
		}
		get variable() {
			return '--' + Lt(this.prefix) + Lt(this.scale) + this.token
		}
		toString() {
			return this.computedValue
		}
	},
	yO = Xn(),
	SO = (n, e) =>
		yO(n, () => (t, i) => {
			i = (typeof t == 'object' && t) || Object(i)
			const r = `.${(t = (t = typeof t == 'string' ? t : '') || `${Lt(n.prefix)}t-${hi(i)}`)}`,
				s = {},
				o = []
			for (const l in i) {
				s[l] = {}
				for (const c in i[l]) {
					const h = `--${Lt(n.prefix)}${l}-${c}`,
						u = Zh(String(i[l][c]), n.prefix, l)
					;(s[l][c] = new bO(c, u, l, n.prefix)), o.push(`${h}:${u}`)
				}
			}
			const a = () => {
				if (o.length && !e.rules.themed.cache.has(t)) {
					e.rules.themed.cache.add(t)
					const l = `${i === n.theme ? ':root,' : ''}.${t}{${o.join(';')}}`
					e.rules.themed.apply(l)
				}
				return t
			}
			return {
				...s,
				get className() {
					return a()
				},
				selector: r,
				toString: a,
			}
		}),
	xO = Xn(),
	wO = (n) => {
		let e = !1
		const t = xO(n, (i) => {
			e = !0
			const r = 'prefix' in (i = (typeof i == 'object' && i) || {}) ? String(i.prefix) : '',
				s = (typeof i.media == 'object' && i.media) || {},
				o = typeof i.root == 'object' ? i.root || null : globalThis.document || null,
				a = (typeof i.theme == 'object' && i.theme) || {},
				l = {
					prefix: r,
					media: s,
					theme: a,
					themeMap: (typeof i.themeMap == 'object' && i.themeMap) || { ...Fd },
					utils: (typeof i.utils == 'object' && i.utils) || {},
				},
				c = aO(o),
				h = {
					css: hO(l, c),
					globalCss: gO(l, c),
					keyframes: vO(l, c),
					createTheme: SO(l, c),
					reset() {
						c.reset(), h.theme.toString()
					},
					theme: {},
					sheet: c,
					config: l,
					prefix: r,
					getCssText: c.toString,
					toString: c.toString,
				}
			return String((h.theme = h.createTheme(a))), h
		})
		return e || t.reset(), t
	},
	ll = Object.prototype.hasOwnProperty
function cl(n, e, t) {
	for (t of n.keys()) if (fn(t, e)) return t
}
function fn(n, e) {
	var t, i, r
	if (n === e) return !0
	if (n && e && (t = n.constructor) === e.constructor) {
		if (t === Date) return n.getTime() === e.getTime()
		if (t === RegExp) return n.toString() === e.toString()
		if (t === Array) {
			if ((i = n.length) === e.length) for (; i-- && fn(n[i], e[i]); );
			return i === -1
		}
		if (t === Set) {
			if (n.size !== e.size) return !1
			for (i of n) if (((r = i), (r && typeof r == 'object' && ((r = cl(e, r)), !r)) || !e.has(r))) return !1
			return !0
		}
		if (t === Map) {
			if (n.size !== e.size) return !1
			for (i of n)
				if (((r = i[0]), (r && typeof r == 'object' && ((r = cl(e, r)), !r)) || !fn(i[1], e.get(r)))) return !1
			return !0
		}
		if (t === ArrayBuffer) (n = new Uint8Array(n)), (e = new Uint8Array(e))
		else if (t === DataView) {
			if ((i = n.byteLength) === e.byteLength) for (; i-- && n.getInt8(i) === e.getInt8(i); );
			return i === -1
		}
		if (ArrayBuffer.isView(n)) {
			if ((i = n.byteLength) === e.byteLength) for (; i-- && n[i] === e[i]; );
			return i === -1
		}
		if (!t || typeof n == 'object') {
			i = 0
			for (t in n) if ((ll.call(n, t) && ++i && !ll.call(e, t)) || !(t in e) || !fn(n[t], e[t])) return !1
			return Object.keys(e).length === i
		}
	}
	return n !== n && e !== e
}
var $O = /(%?)(%([sdjo]))/g
function QO(n, e) {
	switch (e) {
		case 's':
			return n
		case 'd':
		case 'i':
			return Number(n)
		case 'j':
			return JSON.stringify(n)
		case 'o': {
			if (typeof n == 'string') return n
			const t = JSON.stringify(n)
			return t === '{}' || t === '[]' || /^\[object .+?\]$/.test(t) ? n : t
		}
	}
}
function co(n, ...e) {
	if (e.length === 0) return n
	let t = 0,
		i = n.replace($O, (r, s, o, a) => {
			const l = e[t],
				c = QO(l, a)
			return s ? r : (t++, c)
		})
	return t < e.length && (i += ` ${e.slice(t).join(' ')}`), (i = i.replace(/%{2,2}/g, '%')), i
}
var kO = 2
function PO(n) {
	if (!n.stack) return
	const e = n.stack.split(`
`)
	e.splice(1, kO),
		(n.stack = e.join(`
`))
}
var TO = class extends Error {
		constructor(n, ...e) {
			super(n), (this.message = n), (this.name = 'Invariant Violation'), (this.message = co(n, ...e)), PO(this)
		}
	},
	Rh = (n, e, ...t) => {
		if (!n) throw new TO(e, ...t)
	}
Rh.as = (n, e, t, ...i) => {
	if (!e) throw n.prototype.name != null ? new n(co(t, i)) : n(co(t, i))
}
var ho = (n, e) => (
	(ho =
		Object.setPrototypeOf ||
		({ __proto__: [] } instanceof Array &&
			((t, i) => {
				t.__proto__ = i
			})) ||
		((t, i) => {
			for (var r in i) Object.hasOwn(i, r) && (t[r] = i[r])
		})),
	ho(n, e)
)
function tw(n, e) {
	if (typeof e != 'function' && e !== null)
		throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null')
	ho(n, e)
	function t() {
		this.constructor = n
	}
	n.prototype = e === null ? Object.create(e) : ((t.prototype = e.prototype), new t())
}
var Qi = function () {
	return (
		(Qi =
			Object.assign ||
			function (e) {
				for (var t, i = 1, r = arguments.length; i < r; i++) {
					t = arguments[i]
					for (var s in t) Object.hasOwn(t, s) && (e[s] = t[s])
				}
				return e
			}),
		Qi.apply(this, arguments)
	)
}
function CO(n, e, t, i) {
	function r(s) {
		return s instanceof t
			? s
			: new t((o) => {
					o(s)
				})
	}
	return new (t || (t = Promise))((s, o) => {
		function a(h) {
			try {
				c(i.next(h))
			} catch (u) {
				o(u)
			}
		}
		function l(h) {
			try {
				c(i.throw(h))
			} catch (u) {
				o(u)
			}
		}
		function c(h) {
			h.done ? s(h.value) : r(h.value).then(a, l)
		}
		c((i = i.apply(n, [])).next())
	})
}
function ZO(n, e) {
	var t = {
			label: 0,
			sent: () => {
				if (s[0] & 1) throw s[1]
				return s[1]
			},
			trys: [],
			ops: [],
		},
		i,
		r,
		s,
		o
	return (
		(o = { next: a(0), throw: a(1), return: a(2) }),
		typeof Symbol == 'function' &&
			(o[Symbol.iterator] = function () {
				return this
			}),
		o
	)
	function a(c) {
		return (h) => l([c, h])
	}
	function l(c) {
		if (i) throw new TypeError('Generator is already executing.')
		for (; t; )
			try {
				if (
					((i = 1),
					r &&
						(s = c[0] & 2 ? r.return : c[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) &&
						!(s = s.call(r, c[1])).done)
				)
					return s
				switch (((r = 0), s && (c = [c[0] & 2, s.value]), c[0])) {
					case 0:
					case 1:
						s = c
						break
					case 4:
						return t.label++, { value: c[1], done: !1 }
					case 5:
						t.label++, (r = c[1]), (c = [0])
						continue
					case 7:
						;(c = t.ops.pop()), t.trys.pop()
						continue
					default:
						if (((s = t.trys), !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2))) {
							t = 0
							continue
						}
						if (c[0] === 3 && (!s || (c[1] > s[0] && c[1] < s[3]))) {
							t.label = c[1]
							break
						}
						if (c[0] === 6 && t.label < s[1]) {
							;(t.label = s[1]), (s = c)
							break
						}
						if (s && t.label < s[2]) {
							;(t.label = s[2]), t.ops.push(c)
							break
						}
						s[2] && t.ops.pop(), t.trys.pop()
						continue
				}
				c = e.call(n, t)
			} catch (h) {
				;(c = [6, h]), (r = 0)
			} finally {
				i = s = 0
			}
		if (c[0] & 5) throw c[1]
		return { value: c[0] ? c[1] : void 0, done: !0 }
	}
}
function iw(n, e, t) {
	if (t || arguments.length === 2)
		for (var i = 0, r = e.length, s; i < r; i++)
			(s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), (s[i] = e[i]))
	return n.concat(s || Array.prototype.slice.call(e))
}
var hl
;((n) => {
	;(n[(n.None = 0)] = 'None'),
		(n[(n.Error = 10)] = 'Error'),
		(n[(n.Warning = 20)] = 'Warning'),
		(n[(n.Info = 30)] = 'Info'),
		(n[(n.Debug = 40)] = 'Debug')
})(hl || (hl = {}))
var RO = (n) => '[sandpack-client]: '.concat(n)
function bs(n, e) {
	return e === void 0 && (e = 'Value is nullish'), Rh(n != null, RO(e)), n
}
var AO = '"dependencies" was not specified - provide either a package.json or a "dependencies" value',
	ul = '"entry" was not specified - provide either a package.json with the "main" field or an "entry" value'
function jO(n, e, t) {
	return (
		n === void 0 && (n = {}),
		e === void 0 && (e = {}),
		t === void 0 && (t = '/index.js'),
		JSON.stringify({ name: 'sandpack-project', main: t, dependencies: n, devDependencies: e }, null, 2)
	)
}
function XO(n, e, t, i) {
	var r,
		s,
		o = ui(n),
		a = o['/package.json']
	if (!a) return bs(e, AO), bs(i, ul), (o['/package.json'] = { code: jO(e, t, i) }), o
	if (a) {
		var l = JSON.parse(a.code)
		bs(!(!e && !l.dependencies), ul),
			e && (l.dependencies = Qi(Qi({}, (r = l.dependencies) !== null && r !== void 0 ? r : {}), e ?? {})),
			t && (l.devDependencies = Qi(Qi({}, (s = l.devDependencies) !== null && s !== void 0 ? s : {}), t ?? {})),
			i && (l.main = i),
			(o['/package.json'] = { code: JSON.stringify(l, null, 2) })
	}
	return o
}
function MO(n) {
	var e
	if (n.title === 'SyntaxError') {
		var t = n.title,
			i = n.path,
			r = n.message,
			s = n.line,
			o = n.column
		return { title: t, path: i, message: r, line: s, column: o }
	}
	var a = EO((e = n.payload) === null || e === void 0 ? void 0 : e.frames)
	if (!a) return { message: n.message }
	var l = zO(a),
		c = _O(a),
		h = IO(a._originalFileName, n.message, c, l)
	return {
		message: h,
		title: n.title,
		path: a._originalFileName,
		line: a._originalLineNumber,
		column: a._originalColumnNumber,
	}
}
function EO(n) {
	if (n) return n.find((e) => !!e._originalFileName)
}
function _O(n) {
	return n ? ' ('.concat(n._originalLineNumber, ':').concat(n._originalColumnNumber, ')') : ''
}
function zO(n) {
	var e = n._originalScriptCode[n._originalScriptCode.length - 1],
		t = e.lineNumber.toString().length,
		i = 2,
		r = 3,
		s = i + t + r + n._originalColumnNumber
	return n._originalScriptCode.reduce((o, a) => {
		var l = a.highlight ? '>' : ' ',
			c = a.lineNumber.toString().length === t ? ''.concat(a.lineNumber) : ' '.concat(a.lineNumber),
			h = a.highlight
				? `
` +
					' '.repeat(s) +
					'^'
				: ''
		return (
			o +
			`
` +
			l +
			' ' +
			c +
			' | ' +
			a.content +
			h
		)
	}, '')
}
function IO(n, e, t, i) {
	return ''
		.concat(n, ': ')
		.concat(e)
		.concat(
			t,
			`
`,
		)
		.concat(i)
}
var ui = (n) =>
	typeof n == 'string'
		? n.startsWith('/')
			? n
			: '/'.concat(n)
		: Array.isArray(n)
			? n.map((e) => (e.startsWith('/') ? e : '/'.concat(e)))
			: typeof n == 'object' && n !== null
				? Object.entries(n).reduce((e, t) => {
						var i = t[0],
							r = t[1],
							s = i.startsWith('/') ? i : '/'.concat(i)
						return (e[s] = r), e
					}, {})
				: null
function LO(n, e, t) {
	var i
	return (
		t === void 0 && (t = {}),
		CO(this, void 0, void 0, function () {
			var r, s, o
			return ZO(this, (a) => {
				switch (a.label) {
					case 0:
						switch (((r = (i = e.template) !== null && i !== void 0 ? i : 'parcel'), (o = r), o)) {
							case 'node':
								return [3, 1]
							case 'static':
								return [3, 3]
						}
						return [3, 5]
					case 1:
						return [4, gs(() => import('./index.CXVU2dZ1.js'), __vite__mapDeps([0, 1, 2])).then((l) => l.SandpackNode)]
					case 2:
						return (s = a.sent()), [3, 7]
					case 3:
						return [
							4,
							gs(() => import('./index-599aeaf7.DdAZ73b2.js'), __vite__mapDeps([3, 2, 1])).then(
								(l) => l.SandpackStatic,
							),
						]
					case 4:
						return (s = a.sent()), [3, 7]
					case 5:
						return [
							4,
							gs(() => import('./index.DjkCQ0TT.js'), __vite__mapDeps([4, 1, 5])).then((l) => l.SandpackRuntime),
						]
					case 6:
						;(s = a.sent()), (a.label = 7)
					case 7:
						return [2, new s(n, e, t)]
				}
			})
		})
	)
}
const uo = [],
	Ah = []
;(() => {
	const n =
		'lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o'
			.split(',')
			.map((e) => (e ? Number.parseInt(e, 36) : 1))
	for (let e = 0, t = 0; e < n.length; e++) (e % 2 ? Ah : uo).push((t = t + n[e]))
})()
function DO(n) {
	if (n < 768) return !1
	for (let e = 0, t = uo.length; ; ) {
		const i = (e + t) >> 1
		if (n < uo[i]) t = i
		else if (n >= Ah[i]) e = i + 1
		else return !0
		if (e == t) return !1
	}
}
function fl(n) {
	return n >= 127462 && n <= 127487
}
const dl = 8205
function WO(n, e, t = !0, i = !0) {
	return (t ? jh : YO)(n, e, i)
}
function jh(n, e, t) {
	if (e == n.length) return e
	e && Xh(n.charCodeAt(e)) && Mh(n.charCodeAt(e - 1)) && e--
	let i = ys(n, e)
	for (e += Ol(i); e < n.length; ) {
		const r = ys(n, e)
		if (i == dl || r == dl || (t && DO(r))) (e += Ol(r)), (i = r)
		else if (fl(r)) {
			let s = 0,
				o = e - 2
			for (; o >= 0 && fl(ys(n, o)); ) s++, (o -= 2)
			if (s % 2 == 0) break
			e += 2
		} else break
	}
	return e
}
function YO(n, e, t) {
	for (; e > 0; ) {
		const i = jh(n, e - 2, t)
		if (i < e) return i
		e--
	}
	return 0
}
function ys(n, e) {
	const t = n.charCodeAt(e)
	if (!Mh(t) || e + 1 == n.length) return t
	const i = n.charCodeAt(e + 1)
	return Xh(i) ? ((t - 55296) << 10) + (i - 56320) + 65536 : t
}
function Xh(n) {
	return n >= 56320 && n < 57344
}
function Mh(n) {
	return n >= 55296 && n < 56320
}
function Ol(n) {
	return n < 65536 ? 1 : 2
}
class H {
	lineAt(e) {
		if (e < 0 || e > this.length) throw new RangeError(`Invalid position ${e} in document of length ${this.length}`)
		return this.lineInner(e, !1, 1, 0)
	}
	line(e) {
		if (e < 1 || e > this.lines) throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`)
		return this.lineInner(e, !0, 1, 0)
	}
	replace(e, t, i) {
		;[e, t] = Ei(this, e, t)
		const r = []
		return (
			this.decompose(0, e, r, 2),
			i.length && i.decompose(0, i.length, r, 3),
			this.decompose(t, this.length, r, 1),
			xt.from(r, this.length - (t - e) + i.length)
		)
	}
	append(e) {
		return this.replace(this.length, this.length, e)
	}
	slice(e, t = this.length) {
		;[e, t] = Ei(this, e, t)
		const i = []
		return this.decompose(e, t, i, 0), xt.from(i, t - e)
	}
	eq(e) {
		if (e == this) return !0
		if (e.length != this.length || e.lines != this.lines) return !1
		const t = this.scanIdentical(e, 1),
			i = this.length - this.scanIdentical(e, -1),
			r = new dn(this),
			s = new dn(e)
		for (let o = t, a = t; ; ) {
			if ((r.next(o), s.next(o), (o = 0), r.lineBreak != s.lineBreak || r.done != s.done || r.value != s.value))
				return !1
			if (((a += r.value.length), r.done || a >= i)) return !0
		}
	}
	iter(e = 1) {
		return new dn(this, e)
	}
	iterRange(e, t = this.length) {
		return new Eh(this, e, t)
	}
	iterLines(e, t) {
		let i
		if (e == null) i = this.iter()
		else {
			t == null && (t = this.lines + 1)
			const r = this.line(e).from
			i = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to))
		}
		return new _h(i)
	}
	toString() {
		return this.sliceString(0)
	}
	toJSON() {
		const e = []
		return this.flatten(e), e
	}
	constructor() {}
	static of(e) {
		if (e.length == 0) throw new RangeError('A document must have at least one line')
		return e.length == 1 && !e[0] ? H.empty : e.length <= 32 ? new ve(e) : xt.from(ve.split(e, []))
	}
}
class ve extends H {
	constructor(e, t = NO(e)) {
		super(), (this.text = e), (this.length = t)
	}
	get lines() {
		return this.text.length
	}
	get children() {
		return null
	}
	lineInner(e, t, i, r) {
		for (let s = 0; ; s++) {
			const o = this.text[s],
				a = r + o.length
			if ((t ? i : a) >= e) return new VO(r, a, i, o)
			;(r = a + 1), i++
		}
	}
	decompose(e, t, i, r) {
		const s = e <= 0 && t >= this.length ? this : new ve(pl(this.text, e, t), Math.min(t, this.length) - Math.max(0, e))
		if (r & 1) {
			const o = i.pop(),
				a = cr(s.text, o.text.slice(), 0, s.length)
			if (a.length <= 32) i.push(new ve(a, o.length + s.length))
			else {
				const l = a.length >> 1
				i.push(new ve(a.slice(0, l)), new ve(a.slice(l)))
			}
		} else i.push(s)
	}
	replace(e, t, i) {
		if (!(i instanceof ve)) return super.replace(e, t, i)
		;[e, t] = Ei(this, e, t)
		const r = cr(this.text, cr(i.text, pl(this.text, 0, e)), t),
			s = this.length + i.length - (t - e)
		return r.length <= 32 ? new ve(r, s) : xt.from(ve.split(r, []), s)
	}
	sliceString(
		e,
		t = this.length,
		i = `
`,
	) {
		;[e, t] = Ei(this, e, t)
		let r = ''
		for (let s = 0, o = 0; s <= t && o < this.text.length; o++) {
			const a = this.text[o],
				l = s + a.length
			s > e && o && (r += i), e < l && t > s && (r += a.slice(Math.max(0, e - s), t - s)), (s = l + 1)
		}
		return r
	}
	flatten(e) {
		for (const t of this.text) e.push(t)
	}
	scanIdentical() {
		return 0
	}
	static split(e, t) {
		let i = [],
			r = -1
		for (const s of e) i.push(s), (r += s.length + 1), i.length == 32 && (t.push(new ve(i, r)), (i = []), (r = -1))
		return r > -1 && t.push(new ve(i, r)), t
	}
}
class xt extends H {
	constructor(e, t) {
		super(), (this.children = e), (this.length = t), (this.lines = 0)
		for (const i of e) this.lines += i.lines
	}
	lineInner(e, t, i, r) {
		for (let s = 0; ; s++) {
			const o = this.children[s],
				a = r + o.length,
				l = i + o.lines - 1
			if ((t ? l : a) >= e) return o.lineInner(e, t, i, r)
			;(r = a + 1), (i = l + 1)
		}
	}
	decompose(e, t, i, r) {
		for (let s = 0, o = 0; o <= t && s < this.children.length; s++) {
			const a = this.children[s],
				l = o + a.length
			if (e <= l && t >= o) {
				const c = r & ((o <= e ? 1 : 0) | (l >= t ? 2 : 0))
				o >= e && l <= t && !c ? i.push(a) : a.decompose(e - o, t - o, i, c)
			}
			o = l + 1
		}
	}
	replace(e, t, i) {
		if ((([e, t] = Ei(this, e, t)), i.lines < this.lines))
			for (let r = 0, s = 0; r < this.children.length; r++) {
				const o = this.children[r],
					a = s + o.length
				if (e >= s && t <= a) {
					const l = o.replace(e - s, t - s, i),
						c = this.lines - o.lines + l.lines
					if (l.lines < c >> 4 && l.lines > c >> 6) {
						const h = this.children.slice()
						return (h[r] = l), new xt(h, this.length - (t - e) + i.length)
					}
					return super.replace(s, a, l)
				}
				s = a + 1
			}
		return super.replace(e, t, i)
	}
	sliceString(
		e,
		t = this.length,
		i = `
`,
	) {
		;[e, t] = Ei(this, e, t)
		let r = ''
		for (let s = 0, o = 0; s < this.children.length && o <= t; s++) {
			const a = this.children[s],
				l = o + a.length
			o > e && s && (r += i), e < l && t > o && (r += a.sliceString(e - o, t - o, i)), (o = l + 1)
		}
		return r
	}
	flatten(e) {
		for (const t of this.children) t.flatten(e)
	}
	scanIdentical(e, t) {
		if (!(e instanceof xt)) return 0
		let i = 0,
			[r, s, o, a] =
				t > 0
					? [0, 0, this.children.length, e.children.length]
					: [this.children.length - 1, e.children.length - 1, -1, -1]
		for (; ; r += t, s += t) {
			if (r == o || s == a) return i
			const l = this.children[r],
				c = e.children[s]
			if (l != c) return i + l.scanIdentical(c, t)
			i += l.length + 1
		}
	}
	static from(e, t = e.reduce((i, r) => i + r.length + 1, -1)) {
		let i = 0
		for (const d of e) i += d.lines
		if (i < 32) {
			const d = []
			for (const O of e) O.flatten(d)
			return new ve(d, t)
		}
		let r = Math.max(32, i >> 5),
			s = r << 1,
			o = r >> 1,
			a = [],
			l = 0,
			c = -1,
			h = []
		function u(d) {
			let O
			if (d.lines > s && d instanceof xt) for (const p of d.children) u(p)
			else
				d.lines > o && (l > o || !l)
					? (f(), a.push(d))
					: d instanceof ve && l && (O = h[h.length - 1]) instanceof ve && d.lines + O.lines <= 32
						? ((l += d.lines),
							(c += d.length + 1),
							(h[h.length - 1] = new ve(O.text.concat(d.text), O.length + 1 + d.length)))
						: (l + d.lines > r && f(), (l += d.lines), (c += d.length + 1), h.push(d))
		}
		function f() {
			l != 0 && (a.push(h.length == 1 ? h[0] : xt.from(h, c)), (c = -1), (l = h.length = 0))
		}
		for (const d of e) u(d)
		return f(), a.length == 1 ? a[0] : new xt(a, t)
	}
}
H.empty = new ve([''], 0)
function NO(n) {
	let e = -1
	for (const t of n) e += t.length + 1
	return e
}
function cr(n, e, t = 0, i = 1e9) {
	for (let r = 0, s = 0, o = !0; s < n.length && r <= i; s++) {
		let a = n[s],
			l = r + a.length
		l >= t &&
			(l > i && (a = a.slice(0, i - r)),
			r < t && (a = a.slice(t - r)),
			o ? ((e[e.length - 1] += a), (o = !1)) : e.push(a)),
			(r = l + 1)
	}
	return e
}
function pl(n, e, t) {
	return cr(n, [''], e, t)
}
class dn {
	constructor(e, t = 1) {
		;(this.dir = t),
			(this.done = !1),
			(this.lineBreak = !1),
			(this.value = ''),
			(this.nodes = [e]),
			(this.offsets = [t > 0 ? 1 : (e instanceof ve ? e.text.length : e.children.length) << 1])
	}
	nextInner(e, t) {
		for (this.done = this.lineBreak = !1; ; ) {
			const i = this.nodes.length - 1,
				r = this.nodes[i],
				s = this.offsets[i],
				o = s >> 1,
				a = r instanceof ve ? r.text.length : r.children.length
			if (o == (t > 0 ? a : 0)) {
				if (i == 0) return (this.done = !0), (this.value = ''), this
				t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop()
			} else if ((s & 1) == (t > 0 ? 0 : 1)) {
				if (((this.offsets[i] += t), e == 0))
					return (
						(this.lineBreak = !0),
						(this.value = `
`),
						this
					)
				e--
			} else if (r instanceof ve) {
				const l = r.text[o + (t < 0 ? -1 : 0)]
				if (((this.offsets[i] += t), l.length > Math.max(0, e)))
					return (this.value = e == 0 ? l : t > 0 ? l.slice(e) : l.slice(0, l.length - e)), this
				e -= l.length
			} else {
				const l = r.children[o + (t < 0 ? -1 : 0)]
				e > l.length
					? ((e -= l.length), (this.offsets[i] += t))
					: (t < 0 && this.offsets[i]--,
						this.nodes.push(l),
						this.offsets.push(t > 0 ? 1 : (l instanceof ve ? l.text.length : l.children.length) << 1))
			}
		}
	}
	next(e = 0) {
		return e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)), this.nextInner(e, this.dir)
	}
}
class Eh {
	constructor(e, t, i) {
		;(this.value = ''),
			(this.done = !1),
			(this.cursor = new dn(e, t > i ? -1 : 1)),
			(this.pos = t > i ? e.length : 0),
			(this.from = Math.min(t, i)),
			(this.to = Math.max(t, i))
	}
	nextInner(e, t) {
		if (t < 0 ? this.pos <= this.from : this.pos >= this.to) return (this.value = ''), (this.done = !0), this
		e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos)
		let i = t < 0 ? this.pos - this.from : this.to - this.pos
		e > i && (e = i), (i -= e)
		const { value: r } = this.cursor.next(e)
		return (
			(this.pos += (r.length + e) * t),
			(this.value = r.length <= i ? r : t < 0 ? r.slice(r.length - i) : r.slice(0, i)),
			(this.done = !this.value),
			this
		)
	}
	next(e = 0) {
		return (
			e < 0 ? (e = Math.max(e, this.from - this.pos)) : e > 0 && (e = Math.min(e, this.to - this.pos)),
			this.nextInner(e, this.cursor.dir)
		)
	}
	get lineBreak() {
		return this.cursor.lineBreak && this.value != ''
	}
}
class _h {
	constructor(e) {
		;(this.inner = e), (this.afterBreak = !0), (this.value = ''), (this.done = !1)
	}
	next(e = 0) {
		const { done: t, lineBreak: i, value: r } = this.inner.next(e)
		return (
			t && this.afterBreak
				? ((this.value = ''), (this.afterBreak = !1))
				: t
					? ((this.done = !0), (this.value = ''))
					: i
						? this.afterBreak
							? (this.value = '')
							: ((this.afterBreak = !0), this.next())
						: ((this.value = r), (this.afterBreak = !1)),
			this
		)
	}
	get lineBreak() {
		return !1
	}
}
typeof Symbol < 'u' &&
	((H.prototype[Symbol.iterator] = function () {
		return this.iter()
	}),
	(dn.prototype[Symbol.iterator] =
		Eh.prototype[Symbol.iterator] =
		_h.prototype[Symbol.iterator] =
			function () {
				return this
			}))
class VO {
	constructor(e, t, i, r) {
		;(this.from = e), (this.to = t), (this.number = i), (this.text = r)
	}
	get length() {
		return this.to - this.from
	}
}
function Ei(n, e, t) {
	return (e = Math.max(0, Math.min(n.length, e))), [e, Math.max(e, Math.min(n.length, t))]
}
function Xe(n, e, t = !0, i = !0) {
	return WO(n, e, t, i)
}
function BO(n) {
	return n >= 56320 && n < 57344
}
function qO(n) {
	return n >= 55296 && n < 56320
}
function mi(n, e) {
	const t = n.charCodeAt(e)
	if (!qO(t) || e + 1 == n.length) return t
	const i = n.charCodeAt(e + 1)
	return BO(i) ? ((t - 55296) << 10) + (i - 56320) + 65536 : t
}
function GO(n) {
	return n <= 65535
		? String.fromCharCode(n)
		: ((n -= 65536), String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320))
}
function Br(n) {
	return n < 65536 ? 1 : 2
}
const fo = /\r\n?|\n/
var je = ((n) => (
	(n[(n.Simple = 0)] = 'Simple'),
	(n[(n.TrackDel = 1)] = 'TrackDel'),
	(n[(n.TrackBefore = 2)] = 'TrackBefore'),
	(n[(n.TrackAfter = 3)] = 'TrackAfter'),
	n
))(je || (je = {}))
class Ct {
	constructor(e) {
		this.sections = e
	}
	get length() {
		let e = 0
		for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t]
		return e
	}
	get newLength() {
		let e = 0
		for (let t = 0; t < this.sections.length; t += 2) {
			const i = this.sections[t + 1]
			e += i < 0 ? this.sections[t] : i
		}
		return e
	}
	get empty() {
		return this.sections.length == 0 || (this.sections.length == 2 && this.sections[1] < 0)
	}
	iterGaps(e) {
		for (let t = 0, i = 0, r = 0; t < this.sections.length; ) {
			const s = this.sections[t++],
				o = this.sections[t++]
			o < 0 ? (e(i, r, s), (r += s)) : (r += o), (i += s)
		}
	}
	iterChangedRanges(e, t = !1) {
		Oo(this, e, t)
	}
	get invertedDesc() {
		const e = []
		for (let t = 0; t < this.sections.length; ) {
			const i = this.sections[t++],
				r = this.sections[t++]
			r < 0 ? e.push(i, r) : e.push(r, i)
		}
		return new Ct(e)
	}
	composeDesc(e) {
		return this.empty ? e : e.empty ? this : zh(this, e)
	}
	mapDesc(e, t = !1) {
		return e.empty ? this : po(this, e, t)
	}
	mapPos(e, t = -1, i = je.Simple) {
		let r = 0,
			s = 0
		for (let o = 0; o < this.sections.length; ) {
			const a = this.sections[o++],
				l = this.sections[o++],
				c = r + a
			if (l < 0) {
				if (c > e) return s + (e - r)
				s += a
			} else {
				if (
					i != je.Simple &&
					c >= e &&
					((i == je.TrackDel && r < e && c > e) || (i == je.TrackBefore && r < e) || (i == je.TrackAfter && c > e))
				)
					return null
				if (c > e || (c == e && t < 0 && !a)) return e == r || t < 0 ? s : s + l
				s += l
			}
			r = c
		}
		if (e > r) throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`)
		return s
	}
	touchesRange(e, t = e) {
		for (let i = 0, r = 0; i < this.sections.length && r <= t; ) {
			const s = this.sections[i++],
				o = this.sections[i++],
				a = r + s
			if (o >= 0 && r <= t && a >= e) return r < e && a > t ? 'cover' : !0
			r = a
		}
		return !1
	}
	toString() {
		let e = ''
		for (let t = 0; t < this.sections.length; ) {
			const i = this.sections[t++],
				r = this.sections[t++]
			e += (e ? ' ' : '') + i + (r >= 0 ? ':' + r : '')
		}
		return e
	}
	toJSON() {
		return this.sections
	}
	static fromJSON(e) {
		if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != 'number'))
			throw new RangeError('Invalid JSON representation of ChangeDesc')
		return new Ct(e)
	}
	static create(e) {
		return new Ct(e)
	}
}
class Qe extends Ct {
	constructor(e, t) {
		super(e), (this.inserted = t)
	}
	apply(e) {
		if (this.length != e.length) throw new RangeError('Applying change set to a document with the wrong length')
		return Oo(this, (t, i, r, s, o) => (e = e.replace(r, r + (i - t), o)), !1), e
	}
	mapDesc(e, t = !1) {
		return po(this, e, t, !0)
	}
	invert(e) {
		const t = this.sections.slice(),
			i = []
		for (let r = 0, s = 0; r < t.length; r += 2) {
			const o = t[r],
				a = t[r + 1]
			if (a >= 0) {
				;(t[r] = a), (t[r + 1] = o)
				const l = r >> 1
				for (; i.length < l; ) i.push(H.empty)
				i.push(o ? e.slice(s, s + o) : H.empty)
			}
			s += o
		}
		return new Qe(t, i)
	}
	compose(e) {
		return this.empty ? e : e.empty ? this : zh(this, e, !0)
	}
	map(e, t = !1) {
		return e.empty ? this : po(this, e, t, !0)
	}
	iterChanges(e, t = !1) {
		Oo(this, e, t)
	}
	get desc() {
		return Ct.create(this.sections)
	}
	filter(e) {
		const t = [],
			i = [],
			r = [],
			s = new yn(this)
		e: for (let o = 0, a = 0; ; ) {
			const l = o == e.length ? 1e9 : e[o++]
			for (; a < l || (a == l && s.len == 0); ) {
				if (s.done) break e
				const h = Math.min(s.len, l - a)
				Ae(r, h, -1)
				const u = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0
				Ae(t, h, u), u > 0 && Ut(i, t, s.text), s.forward(h), (a += h)
			}
			const c = e[o++]
			for (; a < c; ) {
				if (s.done) break e
				const h = Math.min(s.len, c - a)
				Ae(t, h, -1), Ae(r, h, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(h), (a += h)
			}
		}
		return { changes: new Qe(t, i), filtered: Ct.create(r) }
	}
	toJSON() {
		const e = []
		for (let t = 0; t < this.sections.length; t += 2) {
			const i = this.sections[t],
				r = this.sections[t + 1]
			r < 0 ? e.push(i) : r == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()))
		}
		return e
	}
	static of(e, t, i) {
		let r = [],
			s = [],
			o = 0,
			a = null
		function l(h = !1) {
			if (!h && !r.length) return
			o < t && Ae(r, t - o, -1)
			const u = new Qe(r, s)
			;(a = a ? a.compose(u.map(a)) : u), (r = []), (s = []), (o = 0)
		}
		function c(h) {
			if (Array.isArray(h)) for (const u of h) c(u)
			else if (h instanceof Qe) {
				if (h.length != t) throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`)
				l(), (a = a ? a.compose(h.map(a)) : h)
			} else {
				const { from: u, to: f = u, insert: d } = h
				if (u > f || u < 0 || f > t) throw new RangeError(`Invalid change range ${u} to ${f} (in doc of length ${t})`)
				const O = d ? (typeof d == 'string' ? H.of(d.split(i || fo)) : d) : H.empty,
					p = O.length
				if (u == f && p == 0) return
				u < o && l(), u > o && Ae(r, u - o, -1), Ae(r, f - u, p), Ut(s, r, O), (o = f)
			}
		}
		return c(e), l(!a), a
	}
	static empty(e) {
		return new Qe(e ? [e, -1] : [], [])
	}
	static fromJSON(e) {
		if (!Array.isArray(e)) throw new RangeError('Invalid JSON representation of ChangeSet')
		const t = [],
			i = []
		for (let r = 0; r < e.length; r++) {
			const s = e[r]
			if (typeof s == 'number') t.push(s, -1)
			else {
				if (!Array.isArray(s) || typeof s[0] != 'number' || s.some((o, a) => a && typeof o != 'string'))
					throw new RangeError('Invalid JSON representation of ChangeSet')
				if (s.length == 1) t.push(s[0], 0)
				else {
					for (; i.length < r; ) i.push(H.empty)
					;(i[r] = H.of(s.slice(1))), t.push(s[0], i[r].length)
				}
			}
		}
		return new Qe(t, i)
	}
	static createSet(e, t) {
		return new Qe(e, t)
	}
}
function Ae(n, e, t, i = !1) {
	if (e == 0 && t <= 0) return
	const r = n.length - 2
	r >= 0 && t <= 0 && t == n[r + 1]
		? (n[r] += e)
		: r >= 0 && e == 0 && n[r] == 0
			? (n[r + 1] += t)
			: i
				? ((n[r] += e), (n[r + 1] += t))
				: n.push(e, t)
}
function Ut(n, e, t) {
	if (t.length == 0) return
	const i = (e.length - 2) >> 1
	if (i < n.length) n[n.length - 1] = n[n.length - 1].append(t)
	else {
		for (; n.length < i; ) n.push(H.empty)
		n.push(t)
	}
}
function Oo(n, e, t) {
	const i = n.inserted
	for (let r = 0, s = 0, o = 0; o < n.sections.length; ) {
		let a = n.sections[o++],
			l = n.sections[o++]
		if (l < 0) (r += a), (s += a)
		else {
			let c = r,
				h = s,
				u = H.empty
			for (
				;
				(c += a),
					(h += l),
					l && i && (u = u.append(i[(o - 2) >> 1])),
					!(t || o == n.sections.length || n.sections[o + 1] < 0);
			)
				(a = n.sections[o++]), (l = n.sections[o++])
			e(r, c, s, h, u), (r = c), (s = h)
		}
	}
}
function po(n, e, t, i = !1) {
	const r = [],
		s = i ? [] : null,
		o = new yn(n),
		a = new yn(e)
	for (let l = -1; ; ) {
		if ((o.done && a.len) || (a.done && o.len)) throw new Error('Mismatched change set lengths')
		if (o.ins == -1 && a.ins == -1) {
			const c = Math.min(o.len, a.len)
			Ae(r, c, -1), o.forward(c), a.forward(c)
		} else if (a.ins >= 0 && (o.ins < 0 || l == o.i || (o.off == 0 && (a.len < o.len || (a.len == o.len && !t))))) {
			let c = a.len
			for (Ae(r, a.ins, -1); c; ) {
				const h = Math.min(o.len, c)
				o.ins >= 0 && l < o.i && o.len <= h && (Ae(r, 0, o.ins), s && Ut(s, r, o.text), (l = o.i)),
					o.forward(h),
					(c -= h)
			}
			a.next()
		} else if (o.ins >= 0) {
			let c = 0,
				h = o.len
			for (; h; )
				if (a.ins == -1) {
					const u = Math.min(h, a.len)
					;(c += u), (h -= u), a.forward(u)
				} else if (a.ins == 0 && a.len < h) (h -= a.len), a.next()
				else break
			Ae(r, c, l < o.i ? o.ins : 0), s && l < o.i && Ut(s, r, o.text), (l = o.i), o.forward(o.len - h)
		} else {
			if (o.done && a.done) return s ? Qe.createSet(r, s) : Ct.create(r)
			throw new Error('Mismatched change set lengths')
		}
	}
}
function zh(n, e, t = !1) {
	const i = [],
		r = t ? [] : null,
		s = new yn(n),
		o = new yn(e)
	for (let a = !1; ; ) {
		if (s.done && o.done) return r ? Qe.createSet(i, r) : Ct.create(i)
		if (s.ins == 0) Ae(i, s.len, 0, a), s.next()
		else if (o.len == 0 && !o.done) Ae(i, 0, o.ins, a), r && Ut(r, i, o.text), o.next()
		else {
			if (s.done || o.done) throw new Error('Mismatched change set lengths')
			{
				const l = Math.min(s.len2, o.len),
					c = i.length
				if (s.ins == -1) {
					const h = o.ins == -1 ? -1 : o.off ? 0 : o.ins
					Ae(i, l, h, a), r && h && Ut(r, i, o.text)
				} else
					o.ins == -1
						? (Ae(i, s.off ? 0 : s.len, l, a), r && Ut(r, i, s.textBit(l)))
						: (Ae(i, s.off ? 0 : s.len, o.off ? 0 : o.ins, a), r && !o.off && Ut(r, i, o.text))
				;(a = (s.ins > l || (o.ins >= 0 && o.len > l)) && (a || i.length > c)), s.forward2(l), o.forward(l)
			}
		}
	}
}
class yn {
	constructor(e) {
		;(this.set = e), (this.i = 0), this.next()
	}
	next() {
		const { sections: e } = this.set
		this.i < e.length ? ((this.len = e[this.i++]), (this.ins = e[this.i++])) : ((this.len = 0), (this.ins = -2)),
			(this.off = 0)
	}
	get done() {
		return this.ins == -2
	}
	get len2() {
		return this.ins < 0 ? this.len : this.ins
	}
	get text() {
		const { inserted: e } = this.set,
			t = (this.i - 2) >> 1
		return t >= e.length ? H.empty : e[t]
	}
	textBit(e) {
		const { inserted: t } = this.set,
			i = (this.i - 2) >> 1
		return i >= t.length && !e ? H.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e)
	}
	forward(e) {
		e == this.len ? this.next() : ((this.len -= e), (this.off += e))
	}
	forward2(e) {
		this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : ((this.ins -= e), (this.off += e))
	}
}
class ai {
	constructor(e, t, i) {
		;(this.from = e), (this.to = t), (this.flags = i)
	}
	get anchor() {
		return this.flags & 32 ? this.to : this.from
	}
	get head() {
		return this.flags & 32 ? this.from : this.to
	}
	get empty() {
		return this.from == this.to
	}
	get assoc() {
		return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0
	}
	get bidiLevel() {
		const e = this.flags & 7
		return e == 7 ? null : e
	}
	get goalColumn() {
		const e = this.flags >> 6
		return e == 16777215 ? void 0 : e
	}
	map(e, t = -1) {
		let i, r
		return (
			this.empty ? (i = r = e.mapPos(this.from, t)) : ((i = e.mapPos(this.from, 1)), (r = e.mapPos(this.to, -1))),
			i == this.from && r == this.to ? this : new ai(i, r, this.flags)
		)
	}
	extend(e, t = e, i = 0) {
		if (e <= this.anchor && t >= this.anchor) return T.range(e, t, void 0, void 0, i)
		const r = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t
		return T.range(this.anchor, r, void 0, void 0, i)
	}
	eq(e, t = !1) {
		return (
			this.anchor == e.anchor &&
			this.head == e.head &&
			this.goalColumn == e.goalColumn &&
			(!t || !this.empty || this.assoc == e.assoc)
		)
	}
	toJSON() {
		return { anchor: this.anchor, head: this.head }
	}
	static fromJSON(e) {
		if (!e || typeof e.anchor != 'number' || typeof e.head != 'number')
			throw new RangeError('Invalid JSON representation for SelectionRange')
		return T.range(e.anchor, e.head)
	}
	static create(e, t, i) {
		return new ai(e, t, i)
	}
}
class T {
	constructor(e, t) {
		;(this.ranges = e), (this.mainIndex = t)
	}
	map(e, t = -1) {
		return e.empty
			? this
			: T.create(
					this.ranges.map((i) => i.map(e, t)),
					this.mainIndex,
				)
	}
	eq(e, t = !1) {
		if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1
		for (let i = 0; i < this.ranges.length; i++) if (!this.ranges[i].eq(e.ranges[i], t)) return !1
		return !0
	}
	get main() {
		return this.ranges[this.mainIndex]
	}
	asSingle() {
		return this.ranges.length == 1 ? this : new T([this.main], 0)
	}
	addRange(e, t = !0) {
		return T.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1)
	}
	replaceRange(e, t = this.mainIndex) {
		const i = this.ranges.slice()
		return (i[t] = e), T.create(i, this.mainIndex)
	}
	toJSON() {
		return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex }
	}
	static fromJSON(e) {
		if (!e || !Array.isArray(e.ranges) || typeof e.main != 'number' || e.main >= e.ranges.length)
			throw new RangeError('Invalid JSON representation for EditorSelection')
		return new T(
			e.ranges.map((t) => ai.fromJSON(t)),
			e.main,
		)
	}
	static single(e, t = e) {
		return new T([T.range(e, t)], 0)
	}
	static create(e, t = 0) {
		if (e.length == 0) throw new RangeError('A selection needs at least one range')
		for (let i = 0, r = 0; r < e.length; r++) {
			const s = e[r]
			if (s.empty ? s.from <= i : s.from < i) return T.normalized(e.slice(), t)
			i = s.to
		}
		return new T(e, t)
	}
	static cursor(e, t = 0, i, r) {
		return ai.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | ((r ?? 16777215) << 6))
	}
	static range(e, t, i, r, s) {
		const o = ((i ?? 16777215) << 6) | (r == null ? 7 : Math.min(6, r))
		return (
			!s && e != t && (s = t < e ? 1 : -1),
			t < e ? ai.create(t, e, 48 | o) : ai.create(e, t, (s ? (s < 0 ? 8 : 16) : 0) | o)
		)
	}
	static normalized(e, t = 0) {
		const i = e[t]
		e.sort((r, s) => r.from - s.from), (t = e.indexOf(i))
		for (let r = 1; r < e.length; r++) {
			const s = e[r],
				o = e[r - 1]
			if (s.empty ? s.from <= o.to : s.from < o.to) {
				const a = o.from,
					l = Math.max(s.to, o.to)
				r <= t && t--, e.splice(--r, 2, s.anchor > s.head ? T.range(l, a) : T.range(a, l))
			}
		}
		return new T(e, t)
	}
}
function Ih(n, e) {
	for (const t of n.ranges) if (t.to > e) throw new RangeError('Selection points outside of document')
}
let Oa = 0
class W {
	constructor(e, t, i, r, s) {
		;(this.combine = e),
			(this.compareInput = t),
			(this.compare = i),
			(this.isStatic = r),
			(this.id = Oa++),
			(this.default = e([])),
			(this.extensions = typeof s == 'function' ? s(this) : s)
	}
	get reader() {
		return this
	}
	static define(e = {}) {
		return new W(
			e.combine || ((t) => t),
			e.compareInput || ((t, i) => t === i),
			e.compare || (e.combine ? (t, i) => t === i : pa),
			!!e.static,
			e.enables,
		)
	}
	of(e) {
		return new hr([], this, 0, e)
	}
	compute(e, t) {
		if (this.isStatic) throw new Error("Can't compute a static facet")
		return new hr(e, this, 1, t)
	}
	computeN(e, t) {
		if (this.isStatic) throw new Error("Can't compute a static facet")
		return new hr(e, this, 2, t)
	}
	from(e, t) {
		return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)))
	}
}
function pa(n, e) {
	return n == e || (n.length == e.length && n.every((t, i) => t === e[i]))
}
class hr {
	constructor(e, t, i, r) {
		;(this.dependencies = e), (this.facet = t), (this.type = i), (this.value = r), (this.id = Oa++)
	}
	dynamicSlot(e) {
		var t
		let i = this.value,
			r = this.facet.compareInput,
			s = this.id,
			o = e[s] >> 1,
			a = this.type == 2,
			l = !1,
			c = !1,
			h = []
		for (const u of this.dependencies)
			u == 'doc'
				? (l = !0)
				: u == 'selection'
					? (c = !0)
					: (((t = e[u.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && h.push(e[u.id])
		return {
			create(u) {
				return (u.values[o] = i(u)), 1
			},
			update(u, f) {
				if ((l && f.docChanged) || (c && (f.docChanged || f.selection)) || go(u, h)) {
					const d = i(u)
					if (a ? !gl(d, u.values[o], r) : !r(d, u.values[o])) return (u.values[o] = d), 1
				}
				return 0
			},
			reconfigure: (u, f) => {
				let d,
					O = f.config.address[s]
				if (O != null) {
					const p = xr(f, O)
					if (
						this.dependencies.every((v) =>
							v instanceof W ? f.facet(v) === u.facet(v) : v instanceof Rt ? f.field(v, !1) == u.field(v, !1) : !0,
						) ||
						(a ? gl((d = i(u)), p, r) : r((d = i(u)), p))
					)
						return (u.values[o] = p), 0
				} else d = i(u)
				return (u.values[o] = d), 1
			},
		}
	}
}
function gl(n, e, t) {
	if (n.length != e.length) return !1
	for (let i = 0; i < n.length; i++) if (!t(n[i], e[i])) return !1
	return !0
}
function go(n, e) {
	let t = !1
	for (const i of e) On(n, i) & 1 && (t = !0)
	return t
}
function UO(n, e, t) {
	const i = t.map((l) => n[l.id]),
		r = t.map((l) => l.type),
		s = i.filter((l) => !(l & 1)),
		o = n[e.id] >> 1
	function a(l) {
		const c = []
		for (let h = 0; h < i.length; h++) {
			const u = xr(l, i[h])
			if (r[h] == 2) for (const f of u) c.push(f)
			else c.push(u)
		}
		return e.combine(c)
	}
	return {
		create(l) {
			for (const c of i) On(l, c)
			return (l.values[o] = a(l)), 1
		},
		update(l, c) {
			if (!go(l, s)) return 0
			const h = a(l)
			return e.compare(h, l.values[o]) ? 0 : ((l.values[o] = h), 1)
		},
		reconfigure(l, c) {
			const h = go(l, i),
				u = c.config.facets[e.id],
				f = c.facet(e)
			if (u && !h && pa(t, u)) return (l.values[o] = f), 0
			const d = a(l)
			return e.compare(d, f) ? ((l.values[o] = f), 0) : ((l.values[o] = d), 1)
		},
	}
}
const Dn = W.define({ static: !0 })
class Rt {
	constructor(e, t, i, r, s) {
		;(this.id = e),
			(this.createF = t),
			(this.updateF = i),
			(this.compareF = r),
			(this.spec = s),
			(this.provides = void 0)
	}
	static define(e) {
		const t = new Rt(Oa++, e.create, e.update, e.compare || ((i, r) => i === r), e)
		return e.provide && (t.provides = e.provide(t)), t
	}
	create(e) {
		const t = e.facet(Dn).find((i) => i.field == this)
		return (t?.create || this.createF)(e)
	}
	slot(e) {
		const t = e[this.id] >> 1
		return {
			create: (i) => ((i.values[t] = this.create(i)), 1),
			update: (i, r) => {
				const s = i.values[t],
					o = this.updateF(s, r)
				return this.compareF(s, o) ? 0 : ((i.values[t] = o), 1)
			},
			reconfigure: (i, r) => {
				let s = i.facet(Dn),
					o = r.facet(Dn),
					a
				return (a = s.find((l) => l.field == this)) && a != o.find((l) => l.field == this)
					? ((i.values[t] = a.create(i)), 1)
					: r.config.address[this.id] != null
						? ((i.values[t] = r.field(this)), 0)
						: ((i.values[t] = this.create(i)), 1)
			},
		}
	}
	init(e) {
		return [this, Dn.of({ field: this, create: e })]
	}
	get extension() {
		return this
	}
}
const oi = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 }
function Ki(n) {
	return (e) => new Lh(e, n)
}
const qr = {
	highest: Ki(oi.highest),
	high: Ki(oi.high),
	default: Ki(oi.default),
	low: Ki(oi.low),
	lowest: Ki(oi.lowest),
}
class Lh {
	constructor(e, t) {
		;(this.inner = e), (this.prec = t)
	}
}
class Gr {
	of(e) {
		return new mo(this, e)
	}
	reconfigure(e) {
		return Gr.reconfigure.of({ compartment: this, extension: e })
	}
	get(e) {
		return e.config.compartments.get(this)
	}
}
class mo {
	constructor(e, t) {
		;(this.compartment = e), (this.inner = t)
	}
}
class Sr {
	constructor(e, t, i, r, s, o) {
		for (
			this.base = e,
				this.compartments = t,
				this.dynamicSlots = i,
				this.address = r,
				this.staticValues = s,
				this.facets = o,
				this.statusTemplate = [];
			this.statusTemplate.length < i.length;
		)
			this.statusTemplate.push(0)
	}
	staticFacet(e) {
		const t = this.address[e.id]
		return t == null ? e.default : this.staticValues[t >> 1]
	}
	static resolve(e, t, i) {
		const r = [],
			s = Object.create(null),
			o = new Map()
		for (const f of FO(e, t, o)) f instanceof Rt ? r.push(f) : (s[f.facet.id] || (s[f.facet.id] = [])).push(f)
		const a = Object.create(null),
			l = [],
			c = []
		for (const f of r) (a[f.id] = c.length << 1), c.push((d) => f.slot(d))
		const h = i?.config.facets
		for (const f in s) {
			const d = s[f],
				O = d[0].facet,
				p = (h && h[f]) || []
			if (d.every((v) => v.type == 0))
				if (((a[O.id] = (l.length << 1) | 1), pa(p, d))) l.push(i.facet(O))
				else {
					const v = O.combine(d.map((m) => m.value))
					l.push(i && O.compare(v, i.facet(O)) ? i.facet(O) : v)
				}
			else {
				for (const v of d)
					v.type == 0
						? ((a[v.id] = (l.length << 1) | 1), l.push(v.value))
						: ((a[v.id] = c.length << 1), c.push((m) => v.dynamicSlot(m)))
				;(a[O.id] = c.length << 1), c.push((v) => UO(v, O, d))
			}
		}
		const u = c.map((f) => f(a))
		return new Sr(e, o, u, a, l, s)
	}
}
function FO(n, e, t) {
	const i = [[], [], [], [], []],
		r = new Map()
	function s(o, a) {
		const l = r.get(o)
		if (l != null) {
			if (l <= a) return
			const c = i[l].indexOf(o)
			c > -1 && i[l].splice(c, 1), o instanceof mo && t.delete(o.compartment)
		}
		if ((r.set(o, a), Array.isArray(o))) for (const c of o) s(c, a)
		else if (o instanceof mo) {
			if (t.has(o.compartment)) throw new RangeError('Duplicate use of compartment in extensions')
			const c = e.get(o.compartment) || o.inner
			t.set(o.compartment, c), s(c, a)
		} else if (o instanceof Lh) s(o.inner, o.prec)
		else if (o instanceof Rt) i[a].push(o), o.provides && s(o.provides, a)
		else if (o instanceof hr) i[a].push(o), o.facet.extensions && s(o.facet.extensions, oi.default)
		else {
			const c = o.extension
			if (!c)
				throw new Error(
					`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`,
				)
			s(c, a)
		}
	}
	return s(n, oi.default), i.reduce((o, a) => o.concat(a))
}
function On(n, e) {
	if (e & 1) return 2
	const t = e >> 1,
		i = n.status[t]
	if (i == 4) throw new Error('Cyclic dependency between fields and/or facets')
	if (i & 2) return i
	n.status[t] = 4
	const r = n.computeSlot(n, n.config.dynamicSlots[t])
	return (n.status[t] = 2 | r)
}
function xr(n, e) {
	return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1]
}
const Dh = W.define(),
	vo = W.define({ combine: (n) => n.some((e) => e), static: !0 }),
	Wh = W.define({ combine: (n) => (n.length ? n[0] : void 0), static: !0 }),
	Yh = W.define(),
	Nh = W.define(),
	Vh = W.define(),
	Bh = W.define({ combine: (n) => (n.length ? n[0] : !1) })
class ft {
	constructor(e, t) {
		;(this.type = e), (this.value = t)
	}
	static define() {
		return new HO()
	}
}
class HO {
	of(e) {
		return new ft(this, e)
	}
}
class KO {
	constructor(e) {
		this.map = e
	}
	of(e) {
		return new re(this, e)
	}
}
class re {
	constructor(e, t) {
		;(this.type = e), (this.value = t)
	}
	map(e) {
		const t = this.type.map(this.value, e)
		return t === void 0 ? void 0 : t == this.value ? this : new re(this.type, t)
	}
	is(e) {
		return this.type == e
	}
	static define(e = {}) {
		return new KO(e.map || ((t) => t))
	}
	static mapEffects(e, t) {
		if (!e.length) return e
		const i = []
		for (const r of e) {
			const s = r.map(t)
			s && i.push(s)
		}
		return i
	}
}
re.reconfigure = re.define()
re.appendConfig = re.define()
class we {
	constructor(e, t, i, r, s, o) {
		;(this.startState = e),
			(this.changes = t),
			(this.selection = i),
			(this.effects = r),
			(this.annotations = s),
			(this.scrollIntoView = o),
			(this._doc = null),
			(this._state = null),
			i && Ih(i, t.newLength),
			s.some((a) => a.type == we.time) || (this.annotations = s.concat(we.time.of(Date.now())))
	}
	static create(e, t, i, r, s, o) {
		return new we(e, t, i, r, s, o)
	}
	get newDoc() {
		return this._doc || (this._doc = this.changes.apply(this.startState.doc))
	}
	get newSelection() {
		return this.selection || this.startState.selection.map(this.changes)
	}
	get state() {
		return this._state || this.startState.applyTransaction(this), this._state
	}
	annotation(e) {
		for (const t of this.annotations) if (t.type == e) return t.value
	}
	get docChanged() {
		return !this.changes.empty
	}
	get reconfigured() {
		return this.startState.config != this.state.config
	}
	isUserEvent(e) {
		const t = this.annotation(we.userEvent)
		return !!(t && (t == e || (t.length > e.length && t.slice(0, e.length) == e && t[e.length] == '.')))
	}
}
we.time = ft.define()
we.userEvent = ft.define()
we.addToHistory = ft.define()
we.remote = ft.define()
function JO(n, e) {
	const t = []
	for (let i = 0, r = 0; ; ) {
		let s, o
		if (i < n.length && (r == e.length || e[r] >= n[i])) (s = n[i++]), (o = n[i++])
		else if (r < e.length) (s = e[r++]), (o = e[r++])
		else return t
		!t.length || t[t.length - 1] < s ? t.push(s, o) : t[t.length - 1] < o && (t[t.length - 1] = o)
	}
}
function qh(n, e, t) {
	var i
	let r, s, o
	return (
		t
			? ((r = e.changes), (s = Qe.empty(e.changes.length)), (o = n.changes.compose(e.changes)))
			: ((r = e.changes.map(n.changes)), (s = n.changes.mapDesc(e.changes, !0)), (o = n.changes.compose(r))),
		{
			changes: o,
			selection: e.selection ? e.selection.map(s) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(r),
			effects: re.mapEffects(n.effects, r).concat(re.mapEffects(e.effects, s)),
			annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
			scrollIntoView: n.scrollIntoView || e.scrollIntoView,
		}
	)
}
function bo(n, e, t) {
	let i = e.selection,
		r = Ci(e.annotations)
	return (
		e.userEvent && (r = r.concat(we.userEvent.of(e.userEvent))),
		{
			changes: e.changes instanceof Qe ? e.changes : Qe.of(e.changes || [], t, n.facet(Wh)),
			selection: i && (i instanceof T ? i : T.single(i.anchor, i.head)),
			effects: Ci(e.effects),
			annotations: r,
			scrollIntoView: !!e.scrollIntoView,
		}
	)
}
function Gh(n, e, t) {
	let i = bo(n, e.length ? e[0] : {}, n.doc.length)
	e.length && e[0].filter === !1 && (t = !1)
	for (let s = 1; s < e.length; s++) {
		e[s].filter === !1 && (t = !1)
		const o = !!e[s].sequential
		i = qh(i, bo(n, e[s], o ? i.changes.newLength : n.doc.length), o)
	}
	const r = we.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView)
	return tp(t ? ep(r) : r)
}
function ep(n) {
	let e = n.startState,
		t = !0
	for (const r of e.facet(Yh)) {
		const s = r(n)
		if (s === !1) {
			t = !1
			break
		}
		Array.isArray(s) && (t = t === !0 ? s : JO(t, s))
	}
	if (t !== !0) {
		let r, s
		if (t === !1) (s = n.changes.invertedDesc), (r = Qe.empty(e.doc.length))
		else {
			const o = n.changes.filter(t)
			;(r = o.changes), (s = o.filtered.mapDesc(o.changes).invertedDesc)
		}
		n = we.create(e, r, n.selection && n.selection.map(s), re.mapEffects(n.effects, s), n.annotations, n.scrollIntoView)
	}
	const i = e.facet(Nh)
	for (let r = i.length - 1; r >= 0; r--) {
		const s = i[r](n)
		s instanceof we
			? (n = s)
			: Array.isArray(s) && s.length == 1 && s[0] instanceof we
				? (n = s[0])
				: (n = Gh(e, Ci(s), !1))
	}
	return n
}
function tp(n) {
	let e = n.startState,
		t = e.facet(Vh),
		i = n
	for (let r = t.length - 1; r >= 0; r--) {
		const s = t[r](n)
		s && Object.keys(s).length && (i = qh(i, bo(e, s, n.changes.newLength), !0))
	}
	return i == n ? n : we.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView)
}
const ip = []
function Ci(n) {
	return n == null ? ip : Array.isArray(n) ? n : [n]
}
var tt = ((n) => ((n[(n.Word = 0)] = 'Word'), (n[(n.Space = 1)] = 'Space'), (n[(n.Other = 2)] = 'Other'), n))(
	tt || (tt = {}),
)
const np = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
let yo
try {
	yo = /[\p{Alphabetic}\p{Number}_]/u
} catch {}
function rp(n) {
	if (yo) return yo.test(n)
	for (let e = 0; e < n.length; e++) {
		const t = n[e]
		if (/\w/.test(t) || (t > '' && (t.toUpperCase() != t.toLowerCase() || np.test(t)))) return !0
	}
	return !1
}
function sp(n) {
	return (e) => {
		if (!/\S/.test(e)) return tt.Space
		if (rp(e)) return tt.Word
		for (let t = 0; t < n.length; t++) if (e.indexOf(n[t]) > -1) return tt.Word
		return tt.Other
	}
}
class ee {
	constructor(e, t, i, r, s, o) {
		;(this.config = e),
			(this.doc = t),
			(this.selection = i),
			(this.values = r),
			(this.status = e.statusTemplate.slice()),
			(this.computeSlot = s),
			o && (o._state = this)
		for (let a = 0; a < this.config.dynamicSlots.length; a++) On(this, a << 1)
		this.computeSlot = null
	}
	field(e, t = !0) {
		const i = this.config.address[e.id]
		if (i == null) {
			if (t) throw new RangeError('Field is not present in this state')
			return
		}
		return On(this, i), xr(this, i)
	}
	update(...e) {
		return Gh(this, e, !0)
	}
	applyTransaction(e) {
		let t = this.config,
			{ base: i, compartments: r } = t
		for (const a of e.effects)
			a.is(Gr.reconfigure)
				? (t && ((r = new Map()), t.compartments.forEach((l, c) => r.set(c, l)), (t = null)),
					r.set(a.value.compartment, a.value.extension))
				: a.is(re.reconfigure)
					? ((t = null), (i = a.value))
					: a.is(re.appendConfig) && ((t = null), (i = Ci(i).concat(a.value)))
		let s
		t
			? (s = e.startState.values.slice())
			: ((t = Sr.resolve(i, r, this)),
				(s = new ee(
					t,
					this.doc,
					this.selection,
					t.dynamicSlots.map(() => null),
					(l, c) => c.reconfigure(l, this),
					null,
				).values))
		const o = e.startState.facet(vo) ? e.newSelection : e.newSelection.asSingle()
		new ee(t, e.newDoc, o, s, (a, l) => l.update(a, e), e)
	}
	replaceSelection(e) {
		return (
			typeof e == 'string' && (e = this.toText(e)),
			this.changeByRange((t) => ({
				changes: { from: t.from, to: t.to, insert: e },
				range: T.cursor(t.from + e.length),
			}))
		)
	}
	changeByRange(e) {
		let t = this.selection,
			i = e(t.ranges[0]),
			r = this.changes(i.changes),
			s = [i.range],
			o = Ci(i.effects)
		for (let a = 1; a < t.ranges.length; a++) {
			const l = e(t.ranges[a]),
				c = this.changes(l.changes),
				h = c.map(r)
			for (let f = 0; f < a; f++) s[f] = s[f].map(h)
			const u = r.mapDesc(c, !0)
			s.push(l.range.map(u)), (r = r.compose(h)), (o = re.mapEffects(o, h).concat(re.mapEffects(Ci(l.effects), u)))
		}
		return { changes: r, selection: T.create(s, t.mainIndex), effects: o }
	}
	changes(e = []) {
		return e instanceof Qe ? e : Qe.of(e, this.doc.length, this.facet(ee.lineSeparator))
	}
	toText(e) {
		return H.of(e.split(this.facet(ee.lineSeparator) || fo))
	}
	sliceDoc(e = 0, t = this.doc.length) {
		return this.doc.sliceString(e, t, this.lineBreak)
	}
	facet(e) {
		const t = this.config.address[e.id]
		return t == null ? e.default : (On(this, t), xr(this, t))
	}
	toJSON(e) {
		const t = { doc: this.sliceDoc(), selection: this.selection.toJSON() }
		if (e)
			for (const i in e) {
				const r = e[i]
				r instanceof Rt && this.config.address[r.id] != null && (t[i] = r.spec.toJSON(this.field(e[i]), this))
			}
		return t
	}
	static fromJSON(e, t = {}, i) {
		if (!e || typeof e.doc != 'string') throw new RangeError('Invalid JSON representation for EditorState')
		const r = []
		if (i) {
			for (const s in i)
				if (Object.hasOwn(e, s)) {
					const o = i[s],
						a = e[s]
					r.push(o.init((l) => o.spec.fromJSON(a, l)))
				}
		}
		return ee.create({
			doc: e.doc,
			selection: T.fromJSON(e.selection),
			extensions: t.extensions ? r.concat([t.extensions]) : r,
		})
	}
	static create(e = {}) {
		let t = Sr.resolve(e.extensions || [], new Map()),
			i = e.doc instanceof H ? e.doc : H.of((e.doc || '').split(t.staticFacet(ee.lineSeparator) || fo)),
			r = e.selection
				? e.selection instanceof T
					? e.selection
					: T.single(e.selection.anchor, e.selection.head)
				: T.single(0)
		return (
			Ih(r, i.length),
			t.staticFacet(vo) || (r = r.asSingle()),
			new ee(
				t,
				i,
				r,
				t.dynamicSlots.map(() => null),
				(s, o) => o.create(s),
				null,
			)
		)
	}
	get tabSize() {
		return this.facet(ee.tabSize)
	}
	get lineBreak() {
		return (
			this.facet(ee.lineSeparator) ||
			`
`
		)
	}
	get readOnly() {
		return this.facet(Bh)
	}
	phrase(e, ...t) {
		for (const i of this.facet(ee.phrases))
			if (Object.hasOwn(i, e)) {
				e = i[e]
				break
			}
		return (
			t.length &&
				(e = e.replace(/\$(\$|\d*)/g, (i, r) => {
					if (r == '$') return '$'
					const s = +(r || 1)
					return !s || s > t.length ? i : t[s - 1]
				})),
			e
		)
	}
	languageDataAt(e, t, i = -1) {
		const r = []
		for (const s of this.facet(Dh)) for (const o of s(this, t, i)) Object.hasOwn(o, e) && r.push(o[e])
		return r
	}
	charCategorizer(e) {
		const t = this.languageDataAt('wordChars', e)
		return sp(t.length ? t[0] : '')
	}
	wordAt(e) {
		let { text: t, from: i, length: r } = this.doc.lineAt(e),
			s = this.charCategorizer(e),
			o = e - i,
			a = e - i
		for (; o > 0; ) {
			const l = Xe(t, o, !1)
			if (s(t.slice(l, o)) != tt.Word) break
			o = l
		}
		for (; a < r; ) {
			const l = Xe(t, a)
			if (s(t.slice(a, l)) != tt.Word) break
			a = l
		}
		return o == a ? null : T.range(o + i, a + i)
	}
}
ee.allowMultipleSelections = vo
ee.tabSize = W.define({ combine: (n) => (n.length ? n[0] : 4) })
ee.lineSeparator = Wh
ee.readOnly = Bh
ee.phrases = W.define({
	compare(n, e) {
		const t = Object.keys(n),
			i = Object.keys(e)
		return t.length == i.length && t.every((r) => n[r] == e[r])
	},
})
ee.languageData = Dh
ee.changeFilter = Yh
ee.transactionFilter = Nh
ee.transactionExtender = Vh
Gr.reconfigure = re.define()
function Ur(n, e, t = {}) {
	const i = {}
	for (const r of n)
		for (const s of Object.keys(r)) {
			const o = r[s],
				a = i[s]
			if (a === void 0) i[s] = o
			else if (!(a === o || o === void 0))
				if (Object.hasOwn(t, s)) i[s] = t[s](a, o)
				else throw new Error('Config merge conflict for field ' + s)
		}
	for (const r in e) i[r] === void 0 && (i[r] = e[r])
	return i
}
class Ft {
	eq(e) {
		return this == e
	}
	range(e, t = e) {
		return So.create(e, t, this)
	}
}
Ft.prototype.startSide = Ft.prototype.endSide = 0
Ft.prototype.point = !1
Ft.prototype.mapMode = je.TrackDel
function ga(n, e) {
	return n == e || (n.constructor == e.constructor && n.eq(e))
}
const So = class Uh {
	constructor(e, t, i) {
		;(this.from = e), (this.to = t), (this.value = i)
	}
	static create(e, t, i) {
		return new Uh(e, t, i)
	}
}
function xo(n, e) {
	return n.from - e.from || n.value.startSide - e.value.startSide
}
class ma {
	constructor(e, t, i, r) {
		;(this.from = e), (this.to = t), (this.value = i), (this.maxPoint = r)
	}
	get length() {
		return this.to[this.to.length - 1]
	}
	findIndex(e, t, i, r = 0) {
		const s = i ? this.to : this.from
		for (let o = r, a = s.length; ; ) {
			if (o == a) return o
			const l = (o + a) >> 1,
				c = s[l] - e || (i ? this.value[l].endSide : this.value[l].startSide) - t
			if (l == o) return c >= 0 ? o : a
			c >= 0 ? (a = l) : (o = l + 1)
		}
	}
	between(e, t, i, r) {
		for (let s = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, s); s < o; s++)
			if (r(this.from[s] + e, this.to[s] + e, this.value[s]) === !1) return !1
	}
	map(e, t) {
		let i = [],
			r = [],
			s = [],
			o = -1,
			a = -1
		for (let l = 0; l < this.value.length; l++) {
			let c = this.value[l],
				h = this.from[l] + e,
				u = this.to[l] + e,
				f,
				d
			if (h == u) {
				const O = t.mapPos(h, c.startSide, c.mapMode)
				if (O == null || ((f = d = O), c.startSide != c.endSide && ((d = t.mapPos(h, c.endSide)), d < f))) continue
			} else if (
				((f = t.mapPos(h, c.startSide)),
				(d = t.mapPos(u, c.endSide)),
				f > d || (f == d && c.startSide > 0 && c.endSide <= 0))
			)
				continue
			;(d - f || c.endSide - c.startSide) < 0 ||
				(o < 0 && (o = f), c.point && (a = Math.max(a, d - f)), i.push(c), r.push(f - o), s.push(d - o))
		}
		return { mapped: i.length ? new ma(r, s, i, a) : null, pos: o }
	}
}
class F {
	constructor(e, t, i, r) {
		;(this.chunkPos = e), (this.chunk = t), (this.nextLayer = i), (this.maxPoint = r)
	}
	static create(e, t, i, r) {
		return new F(e, t, i, r)
	}
	get length() {
		const e = this.chunk.length - 1
		return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length)
	}
	get size() {
		if (this.isEmpty) return 0
		let e = this.nextLayer.size
		for (const t of this.chunk) e += t.value.length
		return e
	}
	chunkEnd(e) {
		return this.chunkPos[e] + this.chunk[e].length
	}
	update(e) {
		let { add: t = [], sort: i = !1, filterFrom: r = 0, filterTo: s = this.length } = e,
			o = e.filter
		if (t.length == 0 && !o) return this
		if ((i && (t = t.slice().sort(xo)), this.isEmpty)) return t.length ? F.of(t) : this
		let a = new Fh(this, null, -1).goto(0),
			l = 0,
			c = [],
			h = new _i()
		for (; a.value || l < t.length; )
			if (l < t.length && (a.from - t[l].from || a.startSide - t[l].value.startSide) >= 0) {
				const u = t[l++]
				h.addInner(u.from, u.to, u.value) || c.push(u)
			} else
				a.rangeIndex == 1 &&
				a.chunkIndex < this.chunk.length &&
				(l == t.length || this.chunkEnd(a.chunkIndex) < t[l].from) &&
				(!o || r > this.chunkEnd(a.chunkIndex) || s < this.chunkPos[a.chunkIndex]) &&
				h.addChunk(this.chunkPos[a.chunkIndex], this.chunk[a.chunkIndex])
					? a.nextChunk()
					: ((!o || r > a.to || s < a.from || o(a.from, a.to, a.value)) &&
							(h.addInner(a.from, a.to, a.value) || c.push(So.create(a.from, a.to, a.value))),
						a.next())
		return h.finishInner(
			this.nextLayer.isEmpty && !c.length
				? F.empty
				: this.nextLayer.update({ add: c, filter: o, filterFrom: r, filterTo: s }),
		)
	}
	map(e) {
		if (e.empty || this.isEmpty) return this
		let t = [],
			i = [],
			r = -1
		for (let o = 0; o < this.chunk.length; o++) {
			const a = this.chunkPos[o],
				l = this.chunk[o],
				c = e.touchesRange(a, a + l.length)
			if (c === !1) (r = Math.max(r, l.maxPoint)), t.push(l), i.push(e.mapPos(a))
			else if (c === !0) {
				const { mapped: h, pos: u } = l.map(a, e)
				h && ((r = Math.max(r, h.maxPoint)), t.push(h), i.push(u))
			}
		}
		const s = this.nextLayer.map(e)
		return t.length == 0 ? s : new F(i, t, s || F.empty, r)
	}
	between(e, t, i) {
		if (!this.isEmpty) {
			for (let r = 0; r < this.chunk.length; r++) {
				const s = this.chunkPos[r],
					o = this.chunk[r]
				if (t >= s && e <= s + o.length && o.between(s, e - s, t - s, i) === !1) return
			}
			this.nextLayer.between(e, t, i)
		}
	}
	iter(e = 0) {
		return Sn.from([this]).goto(e)
	}
	get isEmpty() {
		return this.nextLayer == this
	}
	static iter(e, t = 0) {
		return Sn.from(e).goto(t)
	}
	static compare(e, t, i, r, s = -1) {
		const o = e.filter((u) => u.maxPoint > 0 || (!u.isEmpty && u.maxPoint >= s)),
			a = t.filter((u) => u.maxPoint > 0 || (!u.isEmpty && u.maxPoint >= s)),
			l = ml(o, a, i),
			c = new Ji(o, l, s),
			h = new Ji(a, l, s)
		i.iterGaps((u, f, d) => vl(c, u, h, f, d, r)), i.empty && i.length == 0 && vl(c, 0, h, 0, 0, r)
	}
	static eq(e, t, i = 0, r) {
		r == null && (r = 999999999)
		const s = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0),
			o = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0)
		if (s.length != o.length) return !1
		if (!s.length) return !0
		const a = ml(s, o),
			l = new Ji(s, a, 0).goto(i),
			c = new Ji(o, a, 0).goto(i)
		for (;;) {
			if (l.to != c.to || !wo(l.active, c.active) || (l.point && (!c.point || !ga(l.point, c.point)))) return !1
			if (l.to > r) return !0
			l.next(), c.next()
		}
	}
	static spans(e, t, i, r, s = -1) {
		let o = new Ji(e, null, s).goto(t),
			a = t,
			l = o.openStart
		for (;;) {
			const c = Math.min(o.to, i)
			if (o.point) {
				const h = o.activeForPoint(o.to),
					u = o.pointFrom < t ? h.length + 1 : o.point.startSide < 0 ? h.length : Math.min(h.length, l)
				r.point(a, c, o.point, h, u, o.pointRank), (l = Math.min(o.openEnd(c), h.length))
			} else c > a && (r.span(a, c, o.active, l), (l = o.openEnd(c)))
			if (o.to > i) return l + (o.point && o.to > i ? 1 : 0)
			;(a = o.to), o.next()
		}
	}
	static of(e, t = !1) {
		const i = new _i()
		for (const r of e instanceof So ? [e] : t ? op(e) : e) i.add(r.from, r.to, r.value)
		return i.finish()
	}
	static join(e) {
		if (!e.length) return F.empty
		let t = e[e.length - 1]
		for (let i = e.length - 2; i >= 0; i--)
			for (let r = e[i]; r != F.empty; r = r.nextLayer)
				t = new F(r.chunkPos, r.chunk, t, Math.max(r.maxPoint, t.maxPoint))
		return t
	}
}
F.empty = new F([], [], null, -1)
function op(n) {
	if (n.length > 1)
		for (let e = n[0], t = 1; t < n.length; t++) {
			const i = n[t]
			if (xo(e, i) > 0) return n.slice().sort(xo)
			e = i
		}
	return n
}
F.empty.nextLayer = F.empty
class _i {
	finishChunk(e) {
		this.chunks.push(new ma(this.from, this.to, this.value, this.maxPoint)),
			this.chunkPos.push(this.chunkStart),
			(this.chunkStart = -1),
			(this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
			(this.maxPoint = -1),
			e && ((this.from = []), (this.to = []), (this.value = []))
	}
	constructor() {
		;(this.chunks = []),
			(this.chunkPos = []),
			(this.chunkStart = -1),
			(this.last = null),
			(this.lastFrom = -1e9),
			(this.lastTo = -1e9),
			(this.from = []),
			(this.to = []),
			(this.value = []),
			(this.maxPoint = -1),
			(this.setMaxPoint = -1),
			(this.nextLayer = null)
	}
	add(e, t, i) {
		this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new _i())).add(e, t, i)
	}
	addInner(e, t, i) {
		const r = e - this.lastTo || i.startSide - this.last.endSide
		if (r <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
			throw new Error('Ranges must be added sorted by `from` position and `startSide`')
		return r < 0
			? !1
			: (this.from.length == 250 && this.finishChunk(!0),
				this.chunkStart < 0 && (this.chunkStart = e),
				this.from.push(e - this.chunkStart),
				this.to.push(t - this.chunkStart),
				(this.last = i),
				(this.lastFrom = e),
				(this.lastTo = t),
				this.value.push(i),
				i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
				!0)
	}
	addChunk(e, t) {
		if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return !1
		this.from.length && this.finishChunk(!0),
			(this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
			this.chunks.push(t),
			this.chunkPos.push(e)
		const i = t.value.length - 1
		return (this.last = t.value[i]), (this.lastFrom = t.from[i] + e), (this.lastTo = t.to[i] + e), !0
	}
	finish() {
		return this.finishInner(F.empty)
	}
	finishInner(e) {
		if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0)) return e
		const t = F.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint)
		return (this.from = null), t
	}
}
function ml(n, e, t) {
	const i = new Map()
	for (const s of n)
		for (let o = 0; o < s.chunk.length; o++) s.chunk[o].maxPoint <= 0 && i.set(s.chunk[o], s.chunkPos[o])
	const r = new Set()
	for (const s of e)
		for (let o = 0; o < s.chunk.length; o++) {
			const a = i.get(s.chunk[o])
			a != null &&
				(t ? t.mapPos(a) : a) == s.chunkPos[o] &&
				!t?.touchesRange(a, a + s.chunk[o].length) &&
				r.add(s.chunk[o])
		}
	return r
}
class Fh {
	constructor(e, t, i, r = 0) {
		;(this.layer = e), (this.skip = t), (this.minPoint = i), (this.rank = r)
	}
	get startSide() {
		return this.value ? this.value.startSide : 0
	}
	get endSide() {
		return this.value ? this.value.endSide : 0
	}
	goto(e, t = -1e9) {
		return (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, t, !1), this
	}
	gotoInner(e, t, i) {
		for (; this.chunkIndex < this.layer.chunk.length; ) {
			const r = this.layer.chunk[this.chunkIndex]
			if (!((this.skip && this.skip.has(r)) || this.layer.chunkEnd(this.chunkIndex) < e || r.maxPoint < this.minPoint))
				break
			this.chunkIndex++, (i = !1)
		}
		if (this.chunkIndex < this.layer.chunk.length) {
			const r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0)
			;(!i || this.rangeIndex < r) && this.setRangeIndex(r)
		}
		this.next()
	}
	forward(e, t) {
		;(this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0)
	}
	next() {
		for (;;)
			if (this.chunkIndex == this.layer.chunk.length) {
				;(this.from = this.to = 1e9), (this.value = null)
				break
			} else {
				const e = this.layer.chunkPos[this.chunkIndex],
					t = this.layer.chunk[this.chunkIndex],
					i = e + t.from[this.rangeIndex]
				if (
					((this.from = i),
					(this.to = e + t.to[this.rangeIndex]),
					(this.value = t.value[this.rangeIndex]),
					this.setRangeIndex(this.rangeIndex + 1),
					this.minPoint < 0 || (this.value.point && this.to - this.from >= this.minPoint))
				)
					break
			}
	}
	setRangeIndex(e) {
		if (e == this.layer.chunk[this.chunkIndex].value.length) {
			if ((this.chunkIndex++, this.skip))
				for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
					this.chunkIndex++
			this.rangeIndex = 0
		} else this.rangeIndex = e
	}
	nextChunk() {
		this.chunkIndex++, (this.rangeIndex = 0), this.next()
	}
	compare(e) {
		return (
			this.from - e.from ||
			this.startSide - e.startSide ||
			this.rank - e.rank ||
			this.to - e.to ||
			this.endSide - e.endSide
		)
	}
}
class Sn {
	constructor(e) {
		this.heap = e
	}
	static from(e, t = null, i = -1) {
		const r = []
		for (let s = 0; s < e.length; s++)
			for (let o = e[s]; !o.isEmpty; o = o.nextLayer) o.maxPoint >= i && r.push(new Fh(o, t, i, s))
		return r.length == 1 ? r[0] : new Sn(r)
	}
	get startSide() {
		return this.value ? this.value.startSide : 0
	}
	goto(e, t = -1e9) {
		for (const i of this.heap) i.goto(e, t)
		for (let i = this.heap.length >> 1; i >= 0; i--) Ss(this.heap, i)
		return this.next(), this
	}
	forward(e, t) {
		for (const i of this.heap) i.forward(e, t)
		for (let i = this.heap.length >> 1; i >= 0; i--) Ss(this.heap, i)
		;(this.to - e || this.value.endSide - t) < 0 && this.next()
	}
	next() {
		if (this.heap.length == 0) (this.from = this.to = 1e9), (this.value = null), (this.rank = -1)
		else {
			const e = this.heap[0]
			;(this.from = e.from),
				(this.to = e.to),
				(this.value = e.value),
				(this.rank = e.rank),
				e.value && e.next(),
				Ss(this.heap, 0)
		}
	}
}
function Ss(n, e) {
	for (let t = n[e]; ; ) {
		let i = (e << 1) + 1
		if (i >= n.length) break
		let r = n[i]
		if ((i + 1 < n.length && r.compare(n[i + 1]) >= 0 && ((r = n[i + 1]), i++), t.compare(r) < 0)) break
		;(n[i] = t), (n[e] = r), (e = i)
	}
}
class Ji {
	constructor(e, t, i) {
		;(this.minPoint = i),
			(this.active = []),
			(this.activeTo = []),
			(this.activeRank = []),
			(this.minActive = -1),
			(this.point = null),
			(this.pointFrom = 0),
			(this.pointRank = 0),
			(this.to = -1e9),
			(this.endSide = 0),
			(this.openStart = -1),
			(this.cursor = Sn.from(e, t, i))
	}
	goto(e, t = -1e9) {
		return (
			this.cursor.goto(e, t),
			(this.active.length = this.activeTo.length = this.activeRank.length = 0),
			(this.minActive = -1),
			(this.to = e),
			(this.endSide = t),
			(this.openStart = -1),
			this.next(),
			this
		)
	}
	forward(e, t) {
		for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
			this.removeActive(this.minActive)
		this.cursor.forward(e, t)
	}
	removeActive(e) {
		Wn(this.active, e), Wn(this.activeTo, e), Wn(this.activeRank, e), (this.minActive = bl(this.active, this.activeTo))
	}
	addActive(e) {
		let t = 0,
			{ value: i, to: r, rank: s } = this.cursor
		for (; t < this.activeRank.length && (s - this.activeRank[t] || r - this.activeTo[t]) > 0; ) t++
		Yn(this.active, t, i),
			Yn(this.activeTo, t, r),
			Yn(this.activeRank, t, s),
			e && Yn(e, t, this.cursor.from),
			(this.minActive = bl(this.active, this.activeTo))
	}
	next() {
		const e = this.to,
			t = this.point
		this.point = null
		const i = this.openStart < 0 ? [] : null
		for (;;) {
			const r = this.minActive
			if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
				if (this.activeTo[r] > e) {
					;(this.to = this.activeTo[r]), (this.endSide = this.active[r].endSide)
					break
				}
				this.removeActive(r), i && Wn(i, r)
			} else if (this.cursor.value)
				if (this.cursor.from > e) {
					;(this.to = this.cursor.from), (this.endSide = this.cursor.startSide)
					break
				} else {
					const s = this.cursor.value
					if (!s.point) this.addActive(i), this.cursor.next()
					else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next()
					else {
						;(this.point = s),
							(this.pointFrom = this.cursor.from),
							(this.pointRank = this.cursor.rank),
							(this.to = this.cursor.to),
							(this.endSide = s.endSide),
							this.cursor.next(),
							this.forward(this.to, this.endSide)
						break
					}
				}
			else {
				this.to = this.endSide = 1e9
				break
			}
		}
		if (i) {
			this.openStart = 0
			for (let r = i.length - 1; r >= 0 && i[r] < e; r--) this.openStart++
		}
	}
	activeForPoint(e) {
		if (!this.active.length) return this.active
		const t = []
		for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
			(this.activeTo[i] > e || (this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide)) &&
				t.push(this.active[i])
		return t.reverse()
	}
	openEnd(e) {
		let t = 0
		for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--) t++
		return t
	}
}
function vl(n, e, t, i, r, s) {
	n.goto(e), t.goto(i)
	let o = i + r,
		a = i,
		l = i - e,
		c = !!s.boundChange
	for (let h = !1; ; ) {
		const u = n.to + l - t.to,
			f = u || n.endSide - t.endSide,
			d = f < 0 ? n.to + l : t.to,
			O = Math.min(d, o)
		if (
			(n.point || t.point
				? ((n.point && t.point && ga(n.point, t.point) && wo(n.activeForPoint(n.to), t.activeForPoint(t.to))) ||
						s.comparePoint(a, O, n.point, t.point),
					(h = !1))
				: (h && s.boundChange(a),
					O > a && !wo(n.active, t.active) && s.compareRange(a, O, n.active, t.active),
					c && O < o && (u || n.openEnd(d) != t.openEnd(d)) && (h = !0)),
			d > o)
		)
			break
		;(a = d), f <= 0 && n.next(), f >= 0 && t.next()
	}
}
function wo(n, e) {
	if (n.length != e.length) return !1
	for (let t = 0; t < n.length; t++) if (n[t] != e[t] && !ga(n[t], e[t])) return !1
	return !0
}
function Wn(n, e) {
	for (let t = e, i = n.length - 1; t < i; t++) n[t] = n[t + 1]
	n.pop()
}
function Yn(n, e, t) {
	for (let i = n.length - 1; i >= e; i--) n[i + 1] = n[i]
	n[e] = t
}
function bl(n, e) {
	let t = -1,
		i = 1e9
	for (let r = 0; r < e.length; r++) (e[r] - i || n[r].endSide - n[t].endSide) < 0 && ((t = r), (i = e[r]))
	return t
}
function Mn(n, e, t = n.length) {
	let i = 0
	for (let r = 0; r < t && r < n.length; ) n.charCodeAt(r) == 9 ? ((i += e - (i % e)), r++) : (i++, (r = Xe(n, r)))
	return i
}
function ap(n, e, t, i) {
	for (let r = 0, s = 0; ; ) {
		if (s >= e) return r
		if (r == n.length) break
		;(s += n.charCodeAt(r) == 9 ? t - (s % t) : 1), (r = Xe(n, r))
	}
	return n.length
}
const $o = 'ͼ',
	yl = typeof Symbol > 'u' ? '__' + $o : Symbol.for($o),
	Qo = typeof Symbol > 'u' ? '__styleSet' + Math.floor(Math.random() * 1e8) : Symbol('styleSet'),
	Sl = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : {}
class Ht {
	constructor(e, t) {
		this.rules = []
		const { finish: i } = t || {}
		function r(o) {
			return /^@/.test(o) ? [o] : o.split(/,\s*/)
		}
		function s(o, a, l, c) {
			const h = [],
				u = /^@(\w+)\b/.exec(o[0]),
				f = u && u[1] == 'keyframes'
			if (u && a == null) return l.push(o[0] + ';')
			for (const d in a) {
				const O = a[d]
				if (/&/.test(d))
					s(
						d
							.split(/,\s*/)
							.map((p) => o.map((v) => p.replace(/&/, v)))
							.reduce((p, v) => p.concat(v)),
						O,
						l,
					)
				else if (O && typeof O == 'object') {
					if (!u) throw new RangeError('The value of a property (' + d + ') should be a primitive value.')
					s(r(d), O, h, f)
				} else
					O != null && h.push(d.replace(/_.*/, '').replace(/[A-Z]/g, (p) => '-' + p.toLowerCase()) + ': ' + O + ';')
			}
			;(h.length || f) && l.push((i && !u && !c ? o.map(i) : o).join(', ') + ' {' + h.join(' ') + '}')
		}
		for (const o in e) s(r(o), e[o], this.rules)
	}
	getRules() {
		return this.rules.join(`
`)
	}
	static newName() {
		const e = Sl[yl] || 1
		return (Sl[yl] = e + 1), $o + e.toString(36)
	}
	static mount(e, t, i) {
		let r = e[Qo],
			s = i && i.nonce
		r ? s && r.setNonce(s) : (r = new lp(e, s)), r.mount(Array.isArray(t) ? t : [t], e)
	}
}
const xl = new Map()
class lp {
	constructor(e, t) {
		const i = e.ownerDocument || e,
			r = i.defaultView
		if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
			const s = xl.get(i)
			if (s) return (e[Qo] = s)
			;(this.sheet = new r.CSSStyleSheet()), xl.set(i, this)
		} else (this.styleTag = i.createElement('style')), t && this.styleTag.setAttribute('nonce', t)
		;(this.modules = []), (e[Qo] = this)
	}
	mount(e, t) {
		let i = this.sheet,
			r = 0,
			s = 0
		for (let o = 0; o < e.length; o++) {
			let a = e[o],
				l = this.modules.indexOf(a)
			if ((l < s && l > -1 && (this.modules.splice(l, 1), s--, (l = -1)), l == -1)) {
				if ((this.modules.splice(s++, 0, a), i)) for (let c = 0; c < a.rules.length; c++) i.insertRule(a.rules[c], r++)
			} else {
				for (; s < l; ) r += this.modules[s++].rules.length
				;(r += a.rules.length), s++
			}
		}
		if (i)
			t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets])
		else {
			let o = ''
			for (let l = 0; l < this.modules.length; l++)
				o +=
					this.modules[l].getRules() +
					`
`
			this.styleTag.textContent = o
			const a = t.head || t
			this.styleTag.parentNode != a && a.insertBefore(this.styleTag, a.firstChild)
		}
	}
	setNonce(e) {
		this.styleTag && this.styleTag.getAttribute('nonce') != e && this.styleTag.setAttribute('nonce', e)
	}
}
var Kt = {
		8: 'Backspace',
		9: 'Tab',
		10: 'Enter',
		12: 'NumLock',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		44: 'PrintScreen',
		45: 'Insert',
		46: 'Delete',
		59: ';',
		61: '=',
		91: 'Meta',
		92: 'Meta',
		106: '*',
		107: '+',
		108: ',',
		109: '-',
		110: '.',
		111: '/',
		144: 'NumLock',
		145: 'ScrollLock',
		160: 'Shift',
		161: 'Shift',
		162: 'Control',
		163: 'Control',
		164: 'Alt',
		165: 'Alt',
		173: '-',
		186: ';',
		187: '=',
		188: ',',
		189: '-',
		190: '.',
		191: '/',
		192: '`',
		219: '[',
		220: '\\',
		221: ']',
		222: "'",
	},
	xn = {
		48: ')',
		49: '!',
		50: '@',
		51: '#',
		52: '$',
		53: '%',
		54: '^',
		55: '&',
		56: '*',
		57: '(',
		59: ':',
		61: '+',
		173: '_',
		186: ':',
		187: '+',
		188: '<',
		189: '_',
		190: '>',
		191: '?',
		192: '~',
		219: '{',
		220: '|',
		221: '}',
		222: '"',
	},
	cp = typeof navigator < 'u' && /Mac/.test(navigator.platform),
	hp = typeof navigator < 'u' && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent)
for (var Ze = 0; Ze < 10; Ze++) Kt[48 + Ze] = Kt[96 + Ze] = String(Ze)
for (var Ze = 1; Ze <= 24; Ze++) Kt[Ze + 111] = 'F' + Ze
for (var Ze = 65; Ze <= 90; Ze++) (Kt[Ze] = String.fromCharCode(Ze + 32)), (xn[Ze] = String.fromCharCode(Ze))
for (var xs in Kt) Object.hasOwn(xn, xs) || (xn[xs] = Kt[xs])
function up(n) {
	var e =
			(cp && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey) ||
			(hp && n.shiftKey && n.key && n.key.length == 1) ||
			n.key == 'Unidentified',
		t = (!e && n.key) || (n.shiftKey ? xn : Kt)[n.keyCode] || n.key || 'Unidentified'
	return (
		t == 'Esc' && (t = 'Escape'),
		t == 'Del' && (t = 'Delete'),
		t == 'Left' && (t = 'ArrowLeft'),
		t == 'Up' && (t = 'ArrowUp'),
		t == 'Right' && (t = 'ArrowRight'),
		t == 'Down' && (t = 'ArrowDown'),
		t
	)
}
const ze = typeof navigator < 'u' ? navigator : { userAgent: '', vendor: '', platform: '' },
	ko = typeof document < 'u' ? document : { documentElement: { style: {} } }
const Po = /Edge\/(\d+)/.exec(ze.userAgent),
	Hh = /MSIE \d/.test(ze.userAgent),
	To = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ze.userAgent),
	Fr = !!(Hh || To || Po),
	wl = !Fr && /gecko\/(\d+)/i.test(ze.userAgent),
	ws = !Fr && /Chrome\/(\d+)/.exec(ze.userAgent),
	fp = 'webkitFontSmoothing' in ko.documentElement.style,
	Co = !Fr && /Apple Computer/.test(ze.vendor),
	$l = Co && (/Mobile\/\w+/.test(ze.userAgent) || ze.maxTouchPoints > 2)
var _ = {
	mac: $l || /Mac/.test(ze.platform),
	windows: /Win/.test(ze.platform),
	linux: /Linux|X11/.test(ze.platform),
	ie: Fr,
	ie_version: Hh ? ko.documentMode || 6 : To ? +To[1] : Po ? +Po[1] : 0,
	gecko: wl,
	gecko_version: wl ? +(/Firefox\/(\d+)/.exec(ze.userAgent) || [0, 0])[1] : 0,
	chrome: !!ws,
	chrome_version: ws ? +ws[1] : 0,
	ios: $l,
	android: /Android\b/.test(ze.userAgent),
	webkit_version: fp ? +(/\bAppleWebKit\/(\d+)/.exec(ze.userAgent) || [0, 0])[1] : 0,
	safari: Co,
	safari_version: Co ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(ze.userAgent) || [0, 0])[1] : 0,
	tabSize: ko.documentElement.style.tabSize != null ? 'tab-size' : '-moz-tab-size',
}
function va(n, e) {
	for (const t in n)
		t == 'class' && e.class
			? (e.class += ' ' + n.class)
			: t == 'style' && e.style
				? (e.style += ';' + n.style)
				: (e[t] = n[t])
	return e
}
const wr = Object.create(null)
function ba(n, e, t) {
	if (n == e) return !0
	n || (n = wr), e || (e = wr)
	const i = Object.keys(n),
		r = Object.keys(e)
	if (i.length - 0 != r.length - 0) return !1
	for (const s of i) if (s != t && (r.indexOf(s) == -1 || n[s] !== e[s])) return !1
	return !0
}
function dp(n, e) {
	for (let t = n.attributes.length - 1; t >= 0; t--) {
		const i = n.attributes[t].name
		e[i] == null && n.removeAttribute(i)
	}
	for (const t in e) {
		const i = e[t]
		t == 'style' ? (n.style.cssText = i) : n.getAttribute(t) != i && n.setAttribute(t, i)
	}
}
function Ql(n, e, t) {
	let i = !1
	if (e) for (const r in e) (t && r in t) || ((i = !0), r == 'style' ? (n.style.cssText = '') : n.removeAttribute(r))
	if (t)
		for (const r in t)
			(e && e[r] == t[r]) || ((i = !0), r == 'style' ? (n.style.cssText = t[r]) : n.setAttribute(r, t[r]))
	return i
}
function Op(n) {
	const e = Object.create(null)
	for (let t = 0; t < n.attributes.length; t++) {
		const i = n.attributes[t]
		e[i.name] = i.value
	}
	return e
}
class vi {
	eq(e) {
		return !1
	}
	updateDOM(e, t, i) {
		return !1
	}
	compare(e) {
		return this == e || (this.constructor == e.constructor && this.eq(e))
	}
	get estimatedHeight() {
		return -1
	}
	get lineBreaks() {
		return 0
	}
	ignoreEvent(e) {
		return !0
	}
	coordsAt(e, t, i) {
		return null
	}
	get isHidden() {
		return !1
	}
	get editable() {
		return !1
	}
	destroy(e) {}
}
var Be = ((n) => (
	(n[(n.Text = 0)] = 'Text'),
	(n[(n.WidgetBefore = 1)] = 'WidgetBefore'),
	(n[(n.WidgetAfter = 2)] = 'WidgetAfter'),
	(n[(n.WidgetRange = 3)] = 'WidgetRange'),
	n
))(Be || (Be = {}))
class U extends Ft {
	constructor(e, t, i, r) {
		super(), (this.startSide = e), (this.endSide = t), (this.widget = i), (this.spec = r)
	}
	get heightRelevant() {
		return !1
	}
	static mark(e) {
		return new En(e)
	}
	static widget(e) {
		let t = Math.max(-1e4, Math.min(1e4, e.side || 0)),
			i = !!e.block
		return (
			(t += i && !e.inlineOrder ? (t > 0 ? 3e8 : -4e8) : t > 0 ? 1e8 : -1e8), new fi(e, t, t, i, e.widget || null, !1)
		)
	}
	static replace(e) {
		let t = !!e.block,
			i,
			r
		if (e.isBlockGap) (i = -5e8), (r = 4e8)
		else {
			const { start: s, end: o } = Kh(e, t)
			;(i = (s ? (t ? -3e8 : -1) : 5e8) - 1), (r = (o ? (t ? 2e8 : 1) : -6e8) + 1)
		}
		return new fi(e, i, r, t, e.widget || null, !0)
	}
	static line(e) {
		return new _n(e)
	}
	static set(e, t = !1) {
		return F.of(e, t)
	}
	hasHeight() {
		return this.widget ? this.widget.estimatedHeight > -1 : !1
	}
}
U.none = F.empty
class En extends U {
	constructor(e) {
		const { start: t, end: i } = Kh(e)
		super(t ? -1 : 5e8, i ? 1 : -6e8, null, e),
			(this.tagName = e.tagName || 'span'),
			(this.attrs =
				e.class && e.attributes
					? va(e.attributes, { class: e.class })
					: e.class
						? { class: e.class }
						: e.attributes || wr)
	}
	eq(e) {
		return this == e || (e instanceof En && this.tagName == e.tagName && ba(this.attrs, e.attrs))
	}
	range(e, t = e) {
		if (e >= t) throw new RangeError('Mark decorations may not be empty')
		return super.range(e, t)
	}
}
En.prototype.point = !1
class _n extends U {
	constructor(e) {
		super(-2e8, -2e8, null, e)
	}
	eq(e) {
		return e instanceof _n && this.spec.class == e.spec.class && ba(this.spec.attributes, e.spec.attributes)
	}
	range(e, t = e) {
		if (t != e) throw new RangeError('Line decoration ranges must be zero-length')
		return super.range(e, t)
	}
}
_n.prototype.mapMode = je.TrackBefore
_n.prototype.point = !0
class fi extends U {
	constructor(e, t, i, r, s, o) {
		super(t, i, s, e),
			(this.block = r),
			(this.isReplace = o),
			(this.mapMode = r ? (t <= 0 ? je.TrackBefore : je.TrackAfter) : je.TrackDel)
	}
	get type() {
		return this.startSide != this.endSide ? Be.WidgetRange : this.startSide <= 0 ? Be.WidgetBefore : Be.WidgetAfter
	}
	get heightRelevant() {
		return this.block || (!!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0))
	}
	eq(e) {
		return (
			e instanceof fi &&
			pp(this.widget, e.widget) &&
			this.block == e.block &&
			this.startSide == e.startSide &&
			this.endSide == e.endSide
		)
	}
	range(e, t = e) {
		if (this.isReplace && (e > t || (e == t && this.startSide > 0 && this.endSide <= 0)))
			throw new RangeError('Invalid range for replacement decoration')
		if (!this.isReplace && t != e) throw new RangeError('Widget decorations can only have zero-length ranges')
		return super.range(e, t)
	}
}
fi.prototype.point = !0
function Kh(n, e = !1) {
	let { inclusiveStart: t, inclusiveEnd: i } = n
	return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e }
}
function pp(n, e) {
	return n == e || !!(n && e && n.compare(e))
}
function Zi(n, e, t, i = 0) {
	const r = t.length - 1
	r >= 0 && t[r] + i >= n ? (t[r] = Math.max(t[r], e)) : t.push(n, e)
}
class wn extends Ft {
	constructor(e, t) {
		super(), (this.tagName = e), (this.attributes = t)
	}
	eq(e) {
		return e == this || (e instanceof wn && this.tagName == e.tagName && ba(this.attributes, e.attributes))
	}
	static create(e) {
		return new wn(e.tagName, e.attributes || wr)
	}
	static set(e, t = !1) {
		return F.of(e, t)
	}
}
wn.prototype.startSide = wn.prototype.endSide = -1
function $n(n) {
	let e
	return n.nodeType == 11 ? (e = n.getSelection ? n : n.ownerDocument) : (e = n), e.getSelection()
}
function Zo(n, e) {
	return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1
}
function pn(n, e) {
	if (!e.anchorNode) return !1
	try {
		return Zo(n, e.anchorNode)
	} catch {
		return !1
	}
}
function ur(n) {
	return n.nodeType == 3 ? Qn(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : []
}
function gn(n, e, t, i) {
	return t ? kl(n, e, t, i, -1) || kl(n, e, t, i, 1) : !1
}
function Jt(n) {
	for (var e = 0; ; e++) if (((n = n.previousSibling), !n)) return e
}
function $r(n) {
	return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName)
}
function kl(n, e, t, i, r) {
	for (;;) {
		if (n == t && e == i) return !0
		if (e == (r < 0 ? 0 : Dt(n))) {
			if (n.nodeName == 'DIV') return !1
			const s = n.parentNode
			if (!s || s.nodeType != 1) return !1
			;(e = Jt(n) + (r < 0 ? 0 : 1)), (n = s)
		} else if (n.nodeType == 1) {
			if (((n = n.childNodes[e + (r < 0 ? -1 : 0)]), n.nodeType == 1 && n.contentEditable == 'false')) return !1
			e = r < 0 ? Dt(n) : 0
		} else return !1
	}
}
function Dt(n) {
	return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length
}
function Qr(n, e) {
	const t = e ? n.left : n.right
	return { left: t, right: t, top: n.top, bottom: n.bottom }
}
function gp(n) {
	const e = n.visualViewport
	return e
		? { left: 0, right: e.width, top: 0, bottom: e.height }
		: { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight }
}
function Jh(n, e) {
	let t = e.width / n.offsetWidth,
		i = e.height / n.offsetHeight
	return (
		((t > 0.995 && t < 1.005) || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1),
		((i > 0.995 && i < 1.005) || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) && (i = 1),
		{ scaleX: t, scaleY: i }
	)
}
function mp(n, e, t, i, r, s, o, a) {
	const l = n.ownerDocument,
		c = l.defaultView || window
	for (let h = n, u = !1; h && !u; )
		if (h.nodeType == 1) {
			let f,
				d = h == l.body,
				O = 1,
				p = 1
			if (d) f = gp(c)
			else {
				if (
					(/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (u = !0),
					h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth)
				) {
					h = h.assignedSlot || h.parentNode
					continue
				}
				const g = h.getBoundingClientRect()
				;({ scaleX: O, scaleY: p } = Jh(h, g)),
					(f = { left: g.left, right: g.left + h.clientWidth * O, top: g.top, bottom: g.top + h.clientHeight * p })
			}
			let v = 0,
				m = 0
			if (r == 'nearest')
				e.top < f.top + o
					? ((m = e.top - (f.top + o)), t > 0 && e.bottom > f.bottom + m && (m = e.bottom - f.bottom + o))
					: e.bottom > f.bottom - o &&
						((m = e.bottom - f.bottom + o), t < 0 && e.top - m < f.top && (m = e.top - (f.top + o)))
			else {
				const g = e.bottom - e.top,
					b = f.bottom - f.top
				m =
					(r == 'center' && g <= b
						? e.top + g / 2 - b / 2
						: r == 'start' || (r == 'center' && t < 0)
							? e.top - o
							: e.bottom - b + o) - f.top
			}
			if (
				(i == 'nearest'
					? e.left < f.left + s
						? ((v = e.left - (f.left + s)), t > 0 && e.right > f.right + v && (v = e.right - f.right + s))
						: e.right > f.right - s &&
							((v = e.right - f.right + s), t < 0 && e.left < f.left + v && (v = e.left - (f.left + s)))
					: (v =
							(i == 'center'
								? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2
								: (i == 'start') == a
									? e.left - s
									: e.right - (f.right - f.left) + s) - f.left),
				v || m)
			)
				if (d) c.scrollBy(v, m)
				else {
					let g = 0,
						b = 0
					if (m) {
						const x = h.scrollTop
						;(h.scrollTop += m / p), (b = (h.scrollTop - x) * p)
					}
					if (v) {
						const x = h.scrollLeft
						;(h.scrollLeft += v / O), (g = (h.scrollLeft - x) * O)
					}
					;(e = { left: e.left - g, top: e.top - b, right: e.right - g, bottom: e.bottom - b }),
						g && Math.abs(g - v) < 1 && (i = 'nearest'),
						b && Math.abs(b - m) < 1 && (r = 'nearest')
				}
			if (d) break
			;(e.top < f.top || e.bottom > f.bottom || e.left < f.left || e.right > f.right) &&
				(e = {
					left: Math.max(e.left, f.left),
					right: Math.min(e.right, f.right),
					top: Math.max(e.top, f.top),
					bottom: Math.min(e.bottom, f.bottom),
				}),
				(h = h.assignedSlot || h.parentNode)
		} else if (h.nodeType == 11) h = h.host
		else break
}
function eu(n, e = !0) {
	let t = n.ownerDocument,
		i = null,
		r = null
	for (let s = n.parentNode; s && !(s == t.body || ((!e || i) && r)); )
		if (s.nodeType == 1)
			!r && s.scrollHeight > s.clientHeight && (r = s),
				e && !i && s.scrollWidth > s.clientWidth && (i = s),
				(s = s.assignedSlot || s.parentNode)
		else if (s.nodeType == 11) s = s.host
		else break
	return { x: i, y: r }
}
class vp {
	constructor() {
		;(this.anchorNode = null), (this.anchorOffset = 0), (this.focusNode = null), (this.focusOffset = 0)
	}
	eq(e) {
		return (
			this.anchorNode == e.anchorNode &&
			this.anchorOffset == e.anchorOffset &&
			this.focusNode == e.focusNode &&
			this.focusOffset == e.focusOffset
		)
	}
	setRange(e) {
		const { anchorNode: t, focusNode: i } = e
		this.set(t, Math.min(e.anchorOffset, t ? Dt(t) : 0), i, Math.min(e.focusOffset, i ? Dt(i) : 0))
	}
	set(e, t, i, r) {
		;(this.anchorNode = e), (this.anchorOffset = t), (this.focusNode = i), (this.focusOffset = r)
	}
}
let si = null
_.safari && _.safari_version >= 26 && (si = !1)
function tu(n) {
	if (n.setActive) return n.setActive()
	if (si) return n.focus(si)
	const e = []
	for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode);
	if (
		(n.focus(
			si == null
				? {
						get preventScroll() {
							return (si = { preventScroll: !0 }), !0
						},
					}
				: void 0,
		),
		!si)
	) {
		si = !1
		for (let t = 0; t < e.length; ) {
			const i = e[t++],
				r = e[t++],
				s = e[t++]
			i.scrollTop != r && (i.scrollTop = r), i.scrollLeft != s && (i.scrollLeft = s)
		}
	}
}
let Pl
function Qn(n, e, t = e) {
	const i = Pl || (Pl = document.createRange())
	return i.setEnd(n, t), i.setStart(n, e), i
}
function Ri(n, e, t, i) {
	const r = { key: e, code: e, keyCode: t, which: t, cancelable: !0 }
	i && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = i)
	const s = new KeyboardEvent('keydown', r)
	;(s.synthetic = !0), n.dispatchEvent(s)
	const o = new KeyboardEvent('keyup', r)
	return (o.synthetic = !0), n.dispatchEvent(o), s.defaultPrevented || o.defaultPrevented
}
function bp(n) {
	for (; n; ) {
		if (n && (n.nodeType == 9 || (n.nodeType == 11 && n.host))) return n
		n = n.assignedSlot || n.parentNode
	}
	return null
}
function yp(n, e) {
	let t = e.focusNode,
		i = e.focusOffset
	if (!t || e.anchorNode != t || e.anchorOffset != i) return !1
	for (i = Math.min(i, Dt(t)); ; )
		if (i) {
			if (t.nodeType != 1) return !1
			const r = t.childNodes[i - 1]
			r.contentEditable == 'false' ? i-- : ((t = r), (i = Dt(t)))
		} else {
			if (t == n) return !0
			;(i = Jt(t)), (t = t.parentNode)
		}
}
function iu(n) {
	return n instanceof Window
		? n.pageYOffset > Math.max(0, n.document.documentElement.scrollHeight - n.innerHeight - 4)
		: n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4)
}
function nu(n, e) {
	for (let t = n, i = e; ; ) {
		if (t.nodeType == 3 && i > 0) return { node: t, offset: i }
		if (t.nodeType == 1 && i > 0) {
			if (t.contentEditable == 'false') return null
			;(t = t.childNodes[i - 1]), (i = Dt(t))
		} else if (t.parentNode && !$r(t)) (i = Jt(t)), (t = t.parentNode)
		else return null
	}
}
function ru(n, e) {
	for (let t = n, i = e; ; ) {
		if (t.nodeType == 3 && i < t.nodeValue.length) return { node: t, offset: i }
		if (t.nodeType == 1 && i < t.childNodes.length) {
			if (t.contentEditable == 'false') return null
			;(t = t.childNodes[i]), (i = 0)
		} else if (t.parentNode && !$r(t)) (i = Jt(t) + 1), (t = t.parentNode)
		else return null
	}
}
class ht {
	constructor(e, t, i = !0) {
		;(this.node = e), (this.offset = t), (this.precise = i)
	}
	static before(e, t) {
		return new ht(e.parentNode, Jt(e), t)
	}
	static after(e, t) {
		return new ht(e.parentNode, Jt(e) + 1, t)
	}
}
var be = ((n) => ((n[(n.LTR = 0)] = 'LTR'), (n[(n.RTL = 1)] = 'RTL'), n))(be || (be = {}))
const di = be.LTR,
	ya = be.RTL
function su(n) {
	const e = []
	for (let t = 0; t < n.length; t++) e.push(1 << +n[t])
	return e
}
const Sp = su(
		'88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008',
	),
	xp = su(
		'4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333',
	),
	Ro = Object.create(null),
	mt = []
for (const n of ['()', '[]', '{}']) {
	const e = n.charCodeAt(0),
		t = n.charCodeAt(1)
	;(Ro[e] = t), (Ro[t] = -e)
}
function ou(n) {
	return n <= 247
		? Sp[n]
		: 1424 <= n && n <= 1524
			? 2
			: 1536 <= n && n <= 1785
				? xp[n - 1536]
				: 1774 <= n && n <= 2220
					? 4
					: 8192 <= n && n <= 8204
						? 256
						: 64336 <= n && n <= 65023
							? 4
							: 1
}
const wp = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/
class $t {
	get dir() {
		return this.level % 2 ? ya : di
	}
	constructor(e, t, i) {
		;(this.from = e), (this.to = t), (this.level = i)
	}
	side(e, t) {
		return (this.dir == t) == e ? this.to : this.from
	}
	forward(e, t) {
		return e == (this.dir == t)
	}
	static find(e, t, i, r) {
		let s = -1
		for (let o = 0; o < e.length; o++) {
			const a = e[o]
			if (a.from <= t && a.to >= t) {
				if (a.level == i) return o
				;(s < 0 || (r != 0 ? (r < 0 ? a.from < t : a.to > t) : e[s].level > a.level)) && (s = o)
			}
		}
		if (s < 0) throw new RangeError('Index out of range')
		return s
	}
}
function au(n, e) {
	if (n.length != e.length) return !1
	for (let t = 0; t < n.length; t++) {
		const i = n[t],
			r = e[t]
		if (i.from != r.from || i.to != r.to || i.direction != r.direction || !au(i.inner, r.inner)) return !1
	}
	return !0
}
const se = []
function $p(n, e, t, i, r) {
	for (let s = 0; s <= i.length; s++) {
		const o = s ? i[s - 1].to : e,
			a = s < i.length ? i[s].from : t,
			l = s ? 256 : r
		for (let c = o, h = l, u = l; c < a; c++) {
			let f = ou(n.charCodeAt(c))
			f == 512 ? (f = h) : f == 8 && u == 4 && (f = 16), (se[c] = f == 4 ? 2 : f), f & 7 && (u = f), (h = f)
		}
		for (let c = o, h = l, u = l; c < a; c++) {
			let f = se[c]
			if (f == 128) c < a - 1 && h == se[c + 1] && h & 24 ? (f = se[c] = h) : (se[c] = 256)
			else if (f == 64) {
				let d = c + 1
				for (; d < a && se[d] == 64; ) d++
				const O = (c && h == 8) || (d < t && se[d] == 8) ? (u == 1 ? 1 : 8) : 256
				for (let p = c; p < d; p++) se[p] = O
				c = d - 1
			} else f == 8 && u == 1 && (se[c] = 1)
			;(h = f), f & 7 && (u = f)
		}
	}
}
function Qp(n, e, t, i, r) {
	const s = r == 1 ? 2 : 1
	for (let o = 0, a = 0, l = 0; o <= i.length; o++) {
		const c = o ? i[o - 1].to : e,
			h = o < i.length ? i[o].from : t
		for (let u = c, f, d, O; u < h; u++)
			if ((d = Ro[(f = n.charCodeAt(u))]))
				if (d < 0) {
					for (let p = a - 3; p >= 0; p -= 3)
						if (mt[p + 1] == -d) {
							const v = mt[p + 2],
								m = v & 2 ? r : v & 4 ? (v & 1 ? s : r) : 0
							m && (se[u] = se[mt[p]] = m), (a = p)
							break
						}
				} else {
					if (mt.length == 189) break
					;(mt[a++] = u), (mt[a++] = f), (mt[a++] = l)
				}
			else if ((O = se[u]) == 2 || O == 1) {
				const p = O == r
				l = p ? 0 : 1
				for (let v = a - 3; v >= 0; v -= 3) {
					const m = mt[v + 2]
					if (m & 2) break
					if (p) mt[v + 2] |= 2
					else {
						if (m & 4) break
						mt[v + 2] |= 4
					}
				}
			}
	}
}
function kp(n, e, t, i) {
	for (let r = 0, s = i; r <= t.length; r++) {
		let o = r ? t[r - 1].to : n,
			a = r < t.length ? t[r].from : e
		for (let l = o; l < a; ) {
			const c = se[l]
			if (c == 256) {
				let h = l + 1
				for (;;)
					if (h == a) {
						if (r == t.length) break
						;(h = t[r++].to), (a = r < t.length ? t[r].from : e)
					} else if (se[h] == 256) h++
					else break
				const u = s == 1,
					f = (h < e ? se[h] : i) == 1,
					d = u == f ? (u ? 1 : 2) : i
				for (let O = h, p = r, v = p ? t[p - 1].to : n; O > l; )
					O == v && ((O = t[--p].from), (v = p ? t[p - 1].to : n)), (se[--O] = d)
				l = h
			} else (s = c), l++
		}
	}
}
function Ao(n, e, t, i, r, s, o) {
	const a = i % 2 ? 2 : 1
	if (i % 2 == r % 2)
		for (let l = e, c = 0; l < t; ) {
			let h = !0,
				u = !1
			if (c == s.length || l < s[c].from) {
				const p = se[l]
				p != a && ((h = !1), (u = p == 16))
			}
			let f = !h && a == 1 ? [] : null,
				d = h ? i : i + 1,
				O = l
			e: for (;;)
				if (c < s.length && O == s[c].from) {
					if (u) break
					const p = s[c]
					if (!h)
						for (let v = p.to, m = c + 1; ; ) {
							if (v == t) break e
							if (m < s.length && s[m].from == v) v = s[m++].to
							else {
								if (se[v] == a) break e
								break
							}
						}
					if ((c++, f)) f.push(p)
					else {
						p.from > l && o.push(new $t(l, p.from, d))
						const v = (p.direction == di) != !(d % 2)
						jo(n, v ? i + 1 : i, r, p.inner, p.from, p.to, o), (l = p.to)
					}
					O = p.to
				} else {
					if (O == t || (h ? se[O] != a : se[O] == a)) break
					O++
				}
			f ? Ao(n, l, O, i + 1, r, f, o) : l < O && o.push(new $t(l, O, d)), (l = O)
		}
	else
		for (let l = t, c = s.length; l > e; ) {
			let h = !0,
				u = !1
			if (!c || l > s[c - 1].to) {
				const p = se[l - 1]
				p != a && ((h = !1), (u = p == 16))
			}
			let f = !h && a == 1 ? [] : null,
				d = h ? i : i + 1,
				O = l
			e: for (;;)
				if (c && O == s[c - 1].to) {
					if (u) break
					const p = s[--c]
					if (!h)
						for (let v = p.from, m = c; ; ) {
							if (v == e) break e
							if (m && s[m - 1].to == v) v = s[--m].from
							else {
								if (se[v - 1] == a) break e
								break
							}
						}
					if (f) f.push(p)
					else {
						p.to < l && o.push(new $t(p.to, l, d))
						const v = (p.direction == di) != !(d % 2)
						jo(n, v ? i + 1 : i, r, p.inner, p.from, p.to, o), (l = p.from)
					}
					O = p.from
				} else {
					if (O == e || (h ? se[O - 1] != a : se[O - 1] == a)) break
					O--
				}
			f ? Ao(n, O, l, i + 1, r, f, o) : O < l && o.push(new $t(O, l, d)), (l = O)
		}
}
function jo(n, e, t, i, r, s, o) {
	const a = e % 2 ? 2 : 1
	$p(n, r, s, i, a), Qp(n, r, s, i, a), kp(r, s, i, a), Ao(n, r, s, e, t, i, o)
}
function Pp(n, e, t) {
	if (!n) return [new $t(0, 0, e == ya ? 1 : 0)]
	if (e == di && !t.length && !wp.test(n)) return lu(n.length)
	if (t.length) for (; n.length > se.length; ) se[se.length] = 256
	const i = [],
		r = e == di ? 0 : 1
	return jo(n, r, r, t, 0, n.length, i), i
}
function lu(n) {
	return [new $t(0, n, 0)]
}
let cu = ''
function Tp(n, e, t, i, r) {
	var s
	let o = i.head - n.from,
		a = $t.find(e, o, (s = i.bidiLevel) !== null && s !== void 0 ? s : -1, i.assoc),
		l = e[a],
		c = l.side(r, t)
	if (o == c) {
		const f = (a += r ? 1 : -1)
		if (f < 0 || f >= e.length) return null
		;(l = e[(a = f)]), (o = l.side(!r, t)), (c = l.side(r, t))
	}
	let h = Xe(n.text, o, l.forward(r, t))
	;(h < l.from || h > l.to) && (h = c), (cu = n.text.slice(Math.min(o, h), Math.max(o, h)))
	const u = a == (r ? e.length - 1 : 0) ? null : e[a + (r ? 1 : -1)]
	return u && h == c && u.level + (r ? 0 : 1) < l.level
		? T.cursor(u.side(!r, t) + n.from, u.forward(r, t) ? 1 : -1, u.level)
		: T.cursor(h + n.from, l.forward(r, t) ? -1 : 1, l.level)
}
function Cp(n, e, t) {
	for (let i = e; i < t; i++) {
		const r = ou(n.charCodeAt(i))
		if (r == 1) return di
		if (r == 2 || r == 4) return ya
	}
	return di
}
const hu = W.define(),
	uu = W.define(),
	fu = W.define(),
	du = W.define(),
	Xo = W.define(),
	Ou = W.define(),
	pu = W.define(),
	Sa = W.define(),
	xa = W.define(),
	gu = W.define({ combine: (n) => n.some((e) => e) }),
	Zp = W.define({ combine: (n) => n.some((e) => e) }),
	mu = W.define()
class Ai {
	constructor(e, t, i, r, s, o = !1) {
		;(this.range = e), (this.y = t), (this.x = i), (this.yMargin = r), (this.xMargin = s), (this.isSnapshot = o)
	}
	map(e) {
		return e.empty ? this : new Ai(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
	}
	clip(e) {
		return this.range.to <= e.doc.length
			? this
			: new Ai(T.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
	}
}
const Nn = re.define({ map: (n, e) => n.map(e) }),
	vu = re.define()
function Qt(n, e, t) {
	const i = n.facet(du)
	i.length
		? i[0](e)
		: (window.onerror && window.onerror(String(e), t, void 0, void 0, e)) ||
			(t ? console.error(t + ':', e) : console.error(e))
}
const Et = W.define({ combine: (n) => (n.length ? n[0] : !0) })
let Rp = 0
const ki = W.define({
	combine(n) {
		return n.filter((e, t) => {
			for (let i = 0; i < t; i++) if (n[i].plugin == e.plugin) return !1
			return !0
		})
	},
})
class Ke {
	constructor(e, t, i, r, s) {
		;(this.id = e),
			(this.create = t),
			(this.domEventHandlers = i),
			(this.domEventObservers = r),
			(this.baseExtensions = s(this)),
			(this.extension = this.baseExtensions.concat(ki.of({ plugin: this, arg: void 0 })))
	}
	of(e) {
		return this.baseExtensions.concat(ki.of({ plugin: this, arg: e }))
	}
	static define(e, t) {
		const { eventHandlers: i, eventObservers: r, provide: s, decorations: o } = t || {}
		return new Ke(Rp++, e, i, r, (a) => {
			const l = []
			return (
				o &&
					l.push(
						Hr.of((c) => {
							const h = c.plugin(a)
							return h ? o(h) : U.none
						}),
					),
				s && l.push(s(a)),
				l
			)
		})
	}
	static fromClass(e, t) {
		return Ke.define((i, r) => new e(i, r), t)
	}
}
class $s {
	constructor(e) {
		;(this.spec = e), (this.mustUpdate = null), (this.value = null)
	}
	get plugin() {
		return this.spec && this.spec.plugin
	}
	update(e) {
		if (this.value) {
			if (this.mustUpdate) {
				const t = this.mustUpdate
				if (((this.mustUpdate = null), this.value.update))
					try {
						this.value.update(t)
					} catch (i) {
						if ((Qt(t.state, i, 'CodeMirror plugin crashed'), this.value.destroy))
							try {
								this.value.destroy()
							} catch {}
						this.deactivate()
					}
			}
		} else if (this.spec)
			try {
				this.value = this.spec.plugin.create(e, this.spec.arg)
			} catch (t) {
				Qt(e.state, t, 'CodeMirror plugin crashed'), this.deactivate()
			}
		return this
	}
	destroy(e) {
		var t
		if (!((t = this.value) === null || t === void 0) && t.destroy)
			try {
				this.value.destroy()
			} catch (i) {
				Qt(e.state, i, 'CodeMirror plugin crashed')
			}
	}
	deactivate() {
		this.spec = this.value = null
	}
}
const bu = W.define(),
	wa = W.define(),
	Hr = W.define(),
	yu = W.define(),
	$a = W.define(),
	zn = W.define(),
	Su = W.define()
function Tl(n, e) {
	const t = n.state.facet(Su)
	if (!t.length) return t
	const i = t.map((s) => (s instanceof Function ? s(n) : s)),
		r = []
	return (
		F.spans(i, e.from, e.to, {
			point() {},
			span(s, o, a, l) {
				let c = s - e.from,
					h = o - e.from,
					u = r
				for (let f = a.length - 1; f >= 0; f--, l--) {
					let d = a[f].spec.bidiIsolate,
						O
					if (
						(d == null && (d = Cp(e.text, c, h)),
						l > 0 && u.length && (O = u[u.length - 1]).to == c && O.direction == d)
					)
						(O.to = h), (u = O.inner)
					else {
						const p = { from: c, to: h, direction: d, inner: [] }
						u.push(p), (u = p.inner)
					}
				}
			},
		}),
		r
	)
}
const xu = W.define()
function wu(n) {
	let e = 0,
		t = 0,
		i = 0,
		r = 0
	for (const s of n.state.facet(xu)) {
		const o = s(n)
		o &&
			(o.left != null && (e = Math.max(e, o.left)),
			o.right != null && (t = Math.max(t, o.right)),
			o.top != null && (i = Math.max(i, o.top)),
			o.bottom != null && (r = Math.max(r, o.bottom)))
	}
	return { left: e, right: t, top: i, bottom: r }
}
const cn = W.define()
class it {
	constructor(e, t, i, r) {
		;(this.fromA = e), (this.toA = t), (this.fromB = i), (this.toB = r)
	}
	join(e) {
		return new it(
			Math.min(this.fromA, e.fromA),
			Math.max(this.toA, e.toA),
			Math.min(this.fromB, e.fromB),
			Math.max(this.toB, e.toB),
		)
	}
	addToSet(e) {
		let t = e.length,
			i = this
		for (; t > 0; t--) {
			const r = e[t - 1]
			if (!(r.fromA > i.toA)) {
				if (r.toA < i.fromA) break
				;(i = i.join(r)), e.splice(t - 1, 1)
			}
		}
		return e.splice(t, 0, i), e
	}
	static extendWithRanges(e, t) {
		if (t.length == 0) return e
		const i = []
		for (let r = 0, s = 0, o = 0; ; ) {
			const a = r < e.length ? e[r].fromB : 1e9,
				l = s < t.length ? t[s] : 1e9,
				c = Math.min(a, l)
			if (c == 1e9) break
			let h = c + o,
				u = c,
				f = h
			for (;;)
				if (s < t.length && t[s] <= u) {
					const d = t[s + 1]
					;(s += 2), (u = Math.max(u, d))
					for (let O = r; O < e.length && e[O].fromB <= u; O++) o = e[O].toA - e[O].toB
					f = Math.max(f, d + o)
				} else if (r < e.length && e[r].fromB <= u) {
					const d = e[r++]
					;(u = Math.max(u, d.toB)), (f = Math.max(f, d.toA)), (o = d.toA - d.toB)
				} else break
			i.push(new it(h, f, c, u))
		}
		return i
	}
}
class kr {
	constructor(e, t, i) {
		;(this.view = e),
			(this.state = t),
			(this.transactions = i),
			(this.flags = 0),
			(this.startState = e.state),
			(this.changes = Qe.empty(this.startState.doc.length))
		for (const s of i) this.changes = this.changes.compose(s.changes)
		const r = []
		this.changes.iterChangedRanges((s, o, a, l) => r.push(new it(s, o, a, l))), (this.changedRanges = r)
	}
	static create(e, t, i) {
		return new kr(e, t, i)
	}
	get viewportChanged() {
		return (this.flags & 4) > 0
	}
	get viewportMoved() {
		return (this.flags & 8) > 0
	}
	get heightChanged() {
		return (this.flags & 2) > 0
	}
	get geometryChanged() {
		return this.docChanged || (this.flags & 18) > 0
	}
	get focusChanged() {
		return (this.flags & 1) > 0
	}
	get docChanged() {
		return !this.changes.empty
	}
	get selectionSet() {
		return this.transactions.some((e) => e.selection)
	}
	get empty() {
		return this.flags == 0 && this.transactions.length == 0
	}
}
const Ap = []
class ge {
	constructor(e, t, i = 0) {
		;(this.dom = e), (this.length = t), (this.flags = i), (this.parent = null), (e.cmTile = this)
	}
	get breakAfter() {
		return this.flags & 1
	}
	get children() {
		return Ap
	}
	isWidget() {
		return !1
	}
	get isHidden() {
		return !1
	}
	isComposite() {
		return !1
	}
	isLine() {
		return !1
	}
	isText() {
		return !1
	}
	isBlock() {
		return !1
	}
	get domAttrs() {
		return null
	}
	sync(e) {
		if (((this.flags |= 2), this.flags & 4)) {
			this.flags &= -5
			const t = this.domAttrs
			t && dp(this.dom, t)
		}
	}
	toString() {
		return this.constructor.name + (this.children.length ? `(${this.children})` : '') + (this.breakAfter ? '#' : '')
	}
	destroy() {
		this.parent = null
	}
	setDOM(e) {
		;(this.dom = e), (e.cmTile = this)
	}
	get posAtStart() {
		return this.parent ? this.parent.posBefore(this) : 0
	}
	get posAtEnd() {
		return this.posAtStart + this.length
	}
	posBefore(e, t = this.posAtStart) {
		let i = t
		for (const r of this.children) {
			if (r == e) return i
			i += r.length + r.breakAfter
		}
		throw new RangeError('Invalid child in posBefore')
	}
	posAfter(e) {
		return this.posBefore(e) + e.length
	}
	covers(e) {
		return !0
	}
	coordsIn(e, t) {
		return null
	}
	domPosFor(e, t) {
		const i = Jt(this.dom),
			r = this.length ? e > 0 : t > 0
		return new ht(this.parent.dom, i + (r ? 1 : 0), e == 0 || e == this.length)
	}
	markDirty(e) {
		;(this.flags &= -3), e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1)
	}
	get overrideDOMText() {
		return null
	}
	get root() {
		for (let e = this; e; e = e.parent) if (e instanceof Jr) return e
		return null
	}
	static get(e) {
		return e.cmTile
	}
}
class Kr extends ge {
	constructor(e) {
		super(e, 0), (this._children = [])
	}
	isComposite() {
		return !0
	}
	get children() {
		return this._children
	}
	get lastChild() {
		return this.children.length ? this.children[this.children.length - 1] : null
	}
	append(e) {
		this.children.push(e), (e.parent = this)
	}
	sync(e) {
		if (this.flags & 2) return
		super.sync(e)
		let t = this.dom,
			i = null,
			r,
			s = e?.node == t ? e : null,
			o = 0
		for (const a of this.children) {
			if (
				(a.sync(e),
				(o += a.length + a.breakAfter),
				(r = i ? i.nextSibling : t.firstChild),
				s && r != a.dom && (s.written = !0),
				a.dom.parentNode == t)
			)
				for (; r && r != a.dom; ) r = Cl(r)
			else t.insertBefore(a.dom, r)
			i = a.dom
		}
		for (r = i ? i.nextSibling : t.firstChild, s && r && (s.written = !0); r; ) r = Cl(r)
		this.length = o
	}
}
function Cl(n) {
	const e = n.nextSibling
	return n.parentNode.removeChild(n), e
}
class Jr extends Kr {
	constructor(e, t) {
		super(t), (this.view = e)
	}
	owns(e) {
		for (; e; e = e.parent) if (e == this) return !0
		return !1
	}
	isBlock() {
		return !0
	}
	nearest(e) {
		for (;;) {
			if (!e) return null
			const t = ge.get(e)
			if (t && this.owns(t)) return t
			e = e.parentNode
		}
	}
	blockTiles(e) {
		for (let t = [], i = this, r = 0, s = 0; ; )
			if (r == i.children.length) {
				if (!t.length) return
				;(i = i.parent), i.breakAfter && s++, (r = t.pop())
			} else {
				const o = i.children[r++]
				if (o instanceof _t) t.push(r), (i = o), (r = 0)
				else {
					const a = s + o.length,
						l = e(o, s)
					if (l !== void 0) return l
					s = a + o.breakAfter
				}
			}
	}
	resolveBlock(e, t) {
		let i,
			r = -1,
			s,
			o = -1
		if (
			(this.blockTiles((a, l) => {
				const c = l + a.length
				if (e >= l && e <= c) {
					if (a.isWidget() && t >= -1 && t <= 1) {
						if (a.flags & 32) return !0
						a.flags & 16 && (i = void 0)
					}
					;(l < e || (e == c && (t < -1 ? a.length : a.covers(1)))) &&
						(!i || (!a.isWidget() && i.isWidget())) &&
						((i = a), (r = e - l)),
						(c > e || (e == l && (t > 1 ? a.length : a.covers(-1)))) &&
							(!s || (!a.isWidget() && s.isWidget())) &&
							((s = a), (o = e - l))
				}
			}),
			!i && !s)
		)
			throw new Error('No tile at position ' + e)
		return (i && t < 0) || !s ? { tile: i, offset: r } : { tile: s, offset: o }
	}
}
class _t extends Kr {
	constructor(e, t) {
		super(e), (this.wrapper = t)
	}
	isBlock() {
		return !0
	}
	covers(e) {
		return this.children.length ? (e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1)) : !1
	}
	get domAttrs() {
		return this.wrapper.attributes
	}
	static of(e, t) {
		const i = new _t(t || document.createElement(e.tagName), e)
		return t || (i.flags |= 4), i
	}
}
class zi extends Kr {
	constructor(e, t) {
		super(e), (this.attrs = t)
	}
	isLine() {
		return !0
	}
	static start(e, t, i) {
		const r = new zi(t || document.createElement('div'), e)
		return (!t || !i) && (r.flags |= 4), r
	}
	get domAttrs() {
		return this.attrs
	}
	resolveInline(e, t, i) {
		let r = null,
			s = -1,
			o = null,
			a = -1
		function l(h, u) {
			for (let f = 0, d = 0; f < h.children.length && d <= u; f++) {
				const O = h.children[f],
					p = d + O.length
				p >= u &&
					(O.isComposite()
						? l(O, u - d)
						: (!o || (o.isHidden && (t > 0 || (i && Xp(o, O))))) && (p > u || O.flags & 32)
							? ((o = O), (a = u - d))
							: (d < u || (O.flags & 16 && !O.isHidden)) && ((r = O), (s = u - d))),
					(d = p)
			}
		}
		l(this, e)
		const c = (t < 0 ? r : o) || r || o
		return c ? { tile: c, offset: c == r ? s : a } : null
	}
	coordsIn(e, t) {
		const i = this.resolveInline(e, t, !0)
		return i ? i.tile.coordsIn(Math.max(0, i.offset), t) : jp(this)
	}
	domIn(e, t) {
		const i = this.resolveInline(e, t)
		if (i) {
			const { tile: r, offset: s } = i
			if (this.dom.contains(r.dom))
				return r.isText()
					? new ht(r.dom, Math.min(r.dom.nodeValue.length, s))
					: r.domPosFor(s, r.flags & 16 ? 1 : r.flags & 32 ? -1 : t)
			let o = i.tile.parent,
				a = !1
			for (const l of o.children) {
				if (a) return new ht(l.dom, 0)
				l == i.tile && (a = !0)
			}
		}
		return new ht(this.dom, 0)
	}
}
function jp(n) {
	const e = n.dom.lastChild
	if (!e) return n.dom.getBoundingClientRect()
	const t = ur(e)
	return t[t.length - 1] || null
}
function Xp(n, e) {
	const t = n.coordsIn(0, 1),
		i = e.coordsIn(0, 1)
	return t && i && i.top < t.bottom
}
class Ne extends Kr {
	constructor(e, t) {
		super(e), (this.mark = t)
	}
	get domAttrs() {
		return this.mark.attrs
	}
	static of(e, t) {
		const i = new Ne(t || document.createElement(e.tagName), e)
		return t || (i.flags |= 4), i
	}
}
class li extends ge {
	constructor(e, t) {
		super(e, t.length), (this.text = t)
	}
	sync(e) {
		this.flags & 2 ||
			(super.sync(e),
			this.dom.nodeValue != this.text &&
				(e && e.node == this.dom && (e.written = !0), (this.dom.nodeValue = this.text)))
	}
	isText() {
		return !0
	}
	toString() {
		return JSON.stringify(this.text)
	}
	coordsIn(e, t) {
		const i = this.dom.nodeValue.length
		e > i && (e = i)
		let r = e,
			s = e,
			o = 0
		;(e == 0 && t < 0) || (e == i && t >= 0)
			? _.chrome || _.gecko || (e ? (r--, (o = 1)) : s < i && (s++, (o = -1)))
			: t < 0
				? r--
				: s < i && s++
		const a = Qn(this.dom, r, s).getClientRects()
		if (!a.length) return null
		let l = a[(o ? o < 0 : t >= 0) ? 0 : a.length - 1]
		return (
			_.safari && !o && l.width == 0 && (l = Array.prototype.find.call(a, (c) => c.width) || l),
			o ? Qr(l, o < 0) : l || null
		)
	}
	static of(e, t) {
		const i = new li(t || document.createTextNode(e), e)
		return t || (i.flags |= 2), i
	}
}
class Oi extends ge {
	constructor(e, t, i, r) {
		super(e, t, r), (this.widget = i)
	}
	isWidget() {
		return !0
	}
	get isHidden() {
		return this.widget.isHidden
	}
	covers(e) {
		return this.flags & 48 ? !1 : (this.flags & (e < 0 ? 64 : 128)) > 0
	}
	coordsIn(e, t) {
		return this.coordsInWidget(e, t, !1)
	}
	coordsInWidget(e, t, i) {
		const r = this.widget.coordsAt(this.dom, e, t)
		if (r) return r
		if (i) return Qr(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0)
		{
			let s = this.dom.getClientRects(),
				o = null
			if (!s.length) return null
			const a = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0
			for (
				let l = a ? s.length - 1 : 0;
				(o = s[l]), !(e > 0 ? l == 0 : l == s.length - 1 || o.top < o.bottom);
				l += a ? -1 : 1
			);
			return Qr(o, !a)
		}
	}
	get overrideDOMText() {
		if (!this.length) return H.empty
		const { root: e } = this
		if (!e) return H.empty
		const t = this.posAtStart
		return e.view.state.doc.slice(t, t + this.length)
	}
	destroy() {
		super.destroy(), this.widget.destroy(this.dom)
	}
	static of(e, t, i, r, s) {
		return s || ((s = e.toDOM(t)), e.editable || (s.contentEditable = 'false')), new Oi(s, i, e, r)
	}
}
class Pr extends ge {
	constructor(e) {
		const t = document.createElement('img')
		;(t.className = 'cm-widgetBuffer'), t.setAttribute('aria-hidden', 'true'), super(t, 0, e)
	}
	get isHidden() {
		return !0
	}
	get overrideDOMText() {
		return H.empty
	}
	coordsIn(e) {
		return this.dom.getBoundingClientRect()
	}
}
class Mp {
	constructor(e) {
		;(this.index = 0), (this.beforeBreak = !1), (this.parents = []), (this.tile = e)
	}
	advance(e, t, i) {
		let { tile: r, index: s, beforeBreak: o, parents: a } = this
		for (; e || t > 0; )
			if (r.isComposite())
				if (o) {
					if (!e) break
					i && i.break(), e--, (o = !1)
				} else if (s == r.children.length) {
					if (!e && !a.length) break
					i && i.leave(r), (o = !!r.breakAfter), ({ tile: r, index: s } = a.pop()), s++
				} else {
					const l = r.children[s],
						c = l.breakAfter
					;(t > 0 ? l.length <= e : l.length < e) && (!i || i.skip(l, 0, l.length) !== !1 || !l.isComposite)
						? ((o = !!c), s++, (e -= l.length))
						: (a.push({ tile: r, index: s }), (r = l), (s = 0), i && l.isComposite() && i.enter(l))
				}
			else if (s == r.length) (o = !!r.breakAfter), ({ tile: r, index: s } = a.pop()), s++
			else if (e) {
				const l = Math.min(e, r.length - s)
				i && i.skip(r, s, s + l), (e -= l), (s += l)
			} else break
		return (this.tile = r), (this.index = s), (this.beforeBreak = o), this
	}
	get root() {
		return this.parents.length ? this.parents[0].tile : this.tile
	}
}
class Ep {
	constructor(e, t, i, r) {
		;(this.from = e), (this.to = t), (this.wrapper = i), (this.rank = r)
	}
}
class _p {
	constructor(e, t, i) {
		;(this.cache = e),
			(this.root = t),
			(this.blockWrappers = i),
			(this.curLine = null),
			(this.lastBlock = null),
			(this.afterWidget = null),
			(this.pos = 0),
			(this.wrappers = []),
			(this.wrapperPos = 0)
	}
	addText(e, t, i, r) {
		var s
		this.flushBuffer()
		const o = this.ensureMarks(t, i),
			a = o.lastChild
		if (a && a.isText() && !(a.flags & 8) && a.length + e.length < 512) {
			this.cache.reused.set(a, 2)
			const l = (o.children[o.children.length - 1] = new li(a.dom, a.text + e))
			l.parent = o
		} else o.append(r || li.of(e, (s = this.cache.find(li)) === null || s === void 0 ? void 0 : s.dom))
		;(this.pos += e.length), (this.afterWidget = null)
	}
	addComposition(e, t) {
		const i = this.curLine
		i.dom != t.line.dom &&
			(i.setDOM(this.cache.reused.has(t.line) ? Qs(t.line.dom) : t.line.dom), this.cache.reused.set(t.line, 2))
		let r = i
		for (let a = t.marks.length - 1; a >= 0; a--) {
			const l = t.marks[a],
				c = r.lastChild
			if (c instanceof Ne && c.mark.eq(l.mark)) c.dom != l.dom && c.setDOM(Qs(l.dom)), (r = c)
			else {
				if (this.cache.reused.get(l)) {
					const u = ge.get(l.dom)
					u && u.setDOM(Qs(l.dom))
				}
				const h = Ne.of(l.mark, l.dom)
				r.append(h), (r = h)
			}
			this.cache.reused.set(l, 2)
		}
		const s = ge.get(e.text)
		s && this.cache.reused.set(s, 2)
		const o = new li(e.text, e.text.nodeValue)
		;(o.flags |= 8), r.append(o)
	}
	addInlineWidget(e, t, i) {
		const r = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48)
		r || this.flushBuffer()
		const s = this.ensureMarks(t, i)
		!r && !(e.flags & 16) && s.append(this.getBuffer(1)), s.append(e), (this.pos += e.length), (this.afterWidget = e)
	}
	addMark(e, t, i) {
		this.flushBuffer(), this.ensureMarks(t, i).append(e), (this.pos += e.length), (this.afterWidget = null)
	}
	addBlockWidget(e) {
		this.getBlockPos().append(e), (this.pos += e.length), (this.lastBlock = e), this.endLine()
	}
	continueWidget(e) {
		const t = this.afterWidget || this.lastBlock
		;(t.length += e), (this.pos += e)
	}
	addLineStart(e, t) {
		var i
		e || (e = $u)
		const r = zi.start(e, t || ((i = this.cache.find(zi)) === null || i === void 0 ? void 0 : i.dom), !!t)
		this.getBlockPos().append((this.lastBlock = this.curLine = r))
	}
	addLine(e) {
		this.getBlockPos().append(e), (this.pos += e.length), (this.lastBlock = e), this.endLine()
	}
	addBreak() {
		;(this.lastBlock.flags |= 1), this.endLine(), this.pos++
	}
	addLineStartIfNotCovered(e) {
		this.blockPosCovered() || this.addLineStart(e)
	}
	ensureLine(e) {
		this.curLine || this.addLineStart(e)
	}
	ensureMarks(e, t) {
		var i
		let r = this.curLine
		for (let s = e.length - 1; s >= 0; s--) {
			let o = e[s],
				a
			if (t > 0 && (a = r.lastChild) && a instanceof Ne && a.mark.eq(o)) (r = a), t--
			else {
				const l = Ne.of(o, (i = this.cache.find(Ne, (c) => c.mark.eq(o))) === null || i === void 0 ? void 0 : i.dom)
				r.append(l), (r = l), (t = 0)
			}
		}
		return r
	}
	endLine() {
		if (this.curLine) {
			this.flushBuffer()
			const e = this.curLine.lastChild
			;(!e || !Zl(this.curLine, !1) || (e.dom.nodeName != 'BR' && e.isWidget() && !(_.ios && Zl(this.curLine, !0)))) &&
				this.curLine.append(this.cache.findWidget(ks, 0, 32) || new Oi(ks.toDOM(), 0, ks, 32)),
				(this.curLine = this.afterWidget = null)
		}
	}
	updateBlockWrappers() {
		this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), (this.wrappers.length = 0))
		for (let e = this.wrappers.length - 1; e >= 0; e--) this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1)
		for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next())
			if (e.to >= this.pos) {
				let t = new Ep(e.from, e.to, e.value, e.rank),
					i = this.wrappers.length
				for (; i > 0 && (this.wrappers[i - 1].rank - t.rank || this.wrappers[i - 1].to - t.to) < 0; ) i--
				this.wrappers.splice(i, 0, t)
			}
		this.wrapperPos = this.pos
	}
	getBlockPos() {
		var e
		this.updateBlockWrappers()
		let t = this.root
		for (const i of this.wrappers) {
			const r = t.lastChild
			if (i.from < this.pos && r instanceof _t && r.wrapper.eq(i.wrapper)) t = r
			else {
				const s = _t.of(
					i.wrapper,
					(e = this.cache.find(_t, (o) => o.wrapper.eq(i.wrapper))) === null || e === void 0 ? void 0 : e.dom,
				)
				t.append(s), (t = s)
			}
		}
		return t
	}
	blockPosCovered() {
		const e = this.lastBlock
		return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0)
	}
	getBuffer(e) {
		const t = 2 | (e < 0 ? 16 : 32),
			i = this.cache.find(Pr, void 0, 1)
		return i && (i.flags = t), i || new Pr(t)
	}
	flushBuffer() {
		this.afterWidget &&
			!(this.afterWidget.flags & 32) &&
			(this.afterWidget.parent.append(this.getBuffer(-1)), (this.afterWidget = null))
	}
}
class zp {
	constructor(e) {
		;(this.skipCount = 0), (this.text = ''), (this.textOff = 0), (this.cursor = e.iter())
	}
	skip(e) {
		this.textOff + e <= this.text.length
			? (this.textOff += e)
			: ((this.skipCount += e - (this.text.length - this.textOff)), (this.text = ''), (this.textOff = 0))
	}
	next(e) {
		if (this.textOff == this.text.length) {
			const { value: r, lineBreak: s, done: o } = this.cursor.next(this.skipCount)
			if (((this.skipCount = 0), o)) throw new Error('Ran out of text content when drawing inline views')
			this.text = r
			const a = (this.textOff = Math.min(e, r.length))
			return s ? null : r.slice(0, a)
		}
		const t = Math.min(this.text.length, this.textOff + e),
			i = this.text.slice(this.textOff, t)
		return (this.textOff = t), i
	}
}
const Tr = [Oi, zi, li, Ne, Pr, _t, Jr]
for (let n = 0; n < Tr.length; n++) Tr[n].bucket = n
class Ip {
	constructor(e) {
		;(this.view = e), (this.buckets = Tr.map(() => [])), (this.index = Tr.map(() => 0)), (this.reused = new Map())
	}
	add(e) {
		const t = e.constructor.bucket,
			i = this.buckets[t]
		i.length < 6 ? i.push(e) : (i[(this.index[t] = (this.index[t] + 1) % 6)] = e)
	}
	find(e, t, i = 2) {
		const r = e.bucket,
			s = this.buckets[r],
			o = this.index[r]
		for (let a = s.length - 1; a >= 0; a--) {
			const l = (a + o) % s.length,
				c = s[l]
			if ((!t || t(c)) && !this.reused.has(c)) return s.splice(l, 1), l < o && this.index[r]--, this.reused.set(c, i), c
		}
		return null
	}
	findWidget(e, t, i) {
		const r = this.buckets[0]
		if (r.length)
			for (let s = 0, o = 0; ; s++) {
				if (s == r.length) {
					if (o) return null
					;(o = 1), (s = 0)
				}
				const a = r[s]
				if (
					!this.reused.has(a) &&
					(o == 0
						? a.widget.compare(e)
						: a.widget.constructor == e.constructor && e.updateDOM(a.dom, this.view, a.widget))
				)
					return (
						r.splice(s, 1),
						s < this.index[0] && this.index[0]--,
						a.widget == e && a.length == t && (a.flags & 497) == i
							? (this.reused.set(a, 1), a)
							: (this.reused.set(a, 2), new Oi(a.dom, t, e, (a.flags & -498) | i))
					)
			}
	}
	reuse(e) {
		return this.reused.set(e, 1), e
	}
	maybeReuse(e, t = 2) {
		if (!this.reused.has(e)) return this.reused.set(e, t), e.dom
	}
	clear() {
		for (let e = 0; e < this.buckets.length; e++) this.buckets[e].length = this.index[e] = 0
	}
}
class Lp {
	constructor(e, t, i, r, s) {
		;(this.view = e),
			(this.decorations = r),
			(this.disallowBlockEffectsFor = s),
			(this.openWidget = !1),
			(this.openMarks = 0),
			(this.cache = new Ip(e)),
			(this.text = new zp(e.state.doc)),
			(this.builder = new _p(this.cache, new Jr(e, e.contentDOM), F.iter(i))),
			this.cache.reused.set(t, 2),
			(this.old = new Mp(t)),
			(this.reuseWalker = {
				skip: (o, a, l) => {
					if ((this.cache.add(o), o.isComposite())) return !1
				},
				enter: (o) => this.cache.add(o),
				leave: () => {},
				break: () => {},
			})
	}
	run(e, t) {
		const i = t && this.getCompositionContext(t.text)
		for (let r = 0, s = 0, o = 0; ; ) {
			const a = o < e.length ? e[o++] : null,
				l = a ? a.fromA : this.old.root.length
			if (l > r) {
				const c = l - r
				this.preserve(c, !o, !a), (r = l), (s += c)
			}
			if (!a) break
			t && a.fromA <= t.range.fromA && a.toA >= t.range.toA
				? (this.forward(a.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1),
					this.emit(s, t.range.fromB),
					this.cache.clear(),
					this.builder.addComposition(t, i),
					this.text.skip(t.range.toB - t.range.fromB),
					this.forward(t.range.fromA, a.toA),
					this.emit(t.range.toB, a.toB))
				: (this.forward(a.fromA, a.toA), this.emit(s, a.toB)),
				(s = a.toB),
				(r = a.toA)
		}
		return this.builder.curLine && this.builder.endLine(), this.builder.root
	}
	preserve(e, t, i) {
		let r = Yp(this.old),
			s = this.openMarks
		this.old.advance(e, i ? 1 : -1, {
			skip: (o, a, l) => {
				if (o.isWidget())
					if (this.openWidget) this.builder.continueWidget(l - a)
					else {
						const c =
							l > 0 || a < o.length
								? Oi.of(o.widget, this.view, l - a, o.flags & 496, this.cache.maybeReuse(o))
								: this.cache.reuse(o)
						c.flags & 256
							? ((c.flags &= -2), this.builder.addBlockWidget(c))
							: (this.builder.ensureLine(null), this.builder.addInlineWidget(c, r, s), (s = r.length))
					}
				else if (o.isText())
					this.builder.ensureLine(null),
						!a && l == o.length && !this.cache.reused.has(o)
							? this.builder.addText(o.text, r, s, this.cache.reuse(o))
							: (this.cache.add(o), this.builder.addText(o.text.slice(a, l), r, s)),
						(s = r.length)
				else if (o.isLine()) (o.flags &= -2), this.cache.reused.set(o, 1), this.builder.addLine(o)
				else if (o instanceof Pr) this.cache.add(o)
				else if (o instanceof Ne)
					this.builder.ensureLine(null), this.builder.addMark(o, r, s), this.cache.reused.set(o, 1), (s = r.length)
				else return !1
				this.openWidget = !1
			},
			enter: (o) => {
				o.isLine()
					? this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o))
					: (this.cache.add(o), o instanceof Ne && r.unshift(o.mark)),
					(this.openWidget = !1)
			},
			leave: (o) => {
				o.isLine() ? r.length && (r.length = s = 0) : o instanceof Ne && (r.shift(), (s = Math.min(s, r.length)))
			},
			break: () => {
				this.builder.addBreak(), (this.openWidget = !1)
			},
		}),
			this.text.skip(e)
	}
	emit(e, t) {
		let i = null,
			r = this.builder,
			s = 0,
			o = F.spans(this.decorations, e, t, {
				point: (a, l, c, h, u, f) => {
					if (c instanceof fi) {
						if (this.disallowBlockEffectsFor[f]) {
							if (c.block) throw new RangeError('Block decorations may not be specified via plugins')
							if (l > this.view.state.doc.lineAt(a).to)
								throw new RangeError('Decorations that replace line breaks may not be specified via plugins')
						}
						if (((s = h.length), u > h.length)) r.continueWidget(l - a)
						else {
							const d = c.widget || (c.block ? Ii.block : Ii.inline),
								O = Dp(c),
								p = this.cache.findWidget(d, l - a, O) || Oi.of(d, this.view, l - a, O)
							c.block
								? (c.startSide > 0 && r.addLineStartIfNotCovered(i), r.addBlockWidget(p))
								: (r.ensureLine(i), r.addInlineWidget(p, h, u))
						}
						i = null
					} else i = Wp(i, c)
					l > a && this.text.skip(l - a)
				},
				span: (a, l, c, h) => {
					for (let u = a; u < l; ) {
						const f = this.text.next(Math.min(512, l - u))
						f == null
							? (r.addLineStartIfNotCovered(i), r.addBreak(), u++)
							: (r.ensureLine(i), r.addText(f, c, u == a ? h : c.length), (u += f.length)),
							(i = null)
					}
				},
			})
		r.addLineStartIfNotCovered(i), (this.openWidget = o > s), (this.openMarks = o)
	}
	forward(e, t, i = 1) {
		t - e <= 10
			? this.old.advance(t - e, i, this.reuseWalker)
			: (this.old.advance(5, -1, this.reuseWalker),
				this.old.advance(t - e - 10, -1),
				this.old.advance(5, i, this.reuseWalker))
	}
	getCompositionContext(e) {
		let t = [],
			i = null
		for (let r = e.parentNode; ; r = r.parentNode) {
			const s = ge.get(r)
			if (r == this.view.contentDOM) break
			s instanceof Ne
				? t.push(s)
				: s?.isLine()
					? (i = s)
					: s instanceof _t ||
						(r.nodeName == 'DIV' && !i && r != this.view.contentDOM
							? (i = new zi(r, $u))
							: i || t.push(Ne.of(new En({ tagName: r.nodeName.toLowerCase(), attributes: Op(r) }), r)))
		}
		return { line: i, marks: t }
	}
}
function Zl(n, e) {
	const t = (i) => {
		for (const r of i.children) if ((e ? r.isText() : r.length) || t(r)) return !0
		return !1
	}
	return t(n)
}
function Dp(n) {
	let e = n.isReplace ? (n.startSide < 0 ? 64 : 0) | (n.endSide > 0 ? 128 : 0) : n.startSide > 0 ? 32 : 16
	return n.block && (e |= 256), e
}
const $u = { class: 'cm-line' }
function Wp(n, e) {
	const t = e.spec.attributes,
		i = e.spec.class
	return (!t && !i) || (n || (n = { class: 'cm-line' }), t && va(t, n), i && (n.class += ' ' + i)), n
}
function Yp(n) {
	const e = []
	for (let t = n.parents.length; t > 1; t--) {
		const i = t == n.parents.length ? n.tile : n.parents[t].tile
		i instanceof Ne && e.push(i.mark)
	}
	return e
}
function Qs(n) {
	const e = ge.get(n)
	return e && e.setDOM(n.cloneNode()), n
}
class Ii extends vi {
	constructor(e) {
		super(), (this.tag = e)
	}
	eq(e) {
		return e.tag == this.tag
	}
	toDOM() {
		return document.createElement(this.tag)
	}
	updateDOM(e) {
		return e.nodeName.toLowerCase() == this.tag
	}
	get isHidden() {
		return !0
	}
}
Ii.inline = new Ii('span')
Ii.block = new Ii('div')
const ks = new (class extends vi {
	toDOM() {
		return document.createElement('br')
	}
	get isHidden() {
		return !0
	}
	get editable() {
		return !0
	}
})()
class Rl {
	constructor(e) {
		;(this.view = e),
			(this.decorations = []),
			(this.blockWrappers = []),
			(this.dynamicDecorationMap = [!1]),
			(this.domChanged = null),
			(this.hasComposition = null),
			(this.editContextFormatting = U.none),
			(this.lastCompositionAfterCursor = !1),
			(this.minWidth = 0),
			(this.minWidthFrom = 0),
			(this.minWidthTo = 0),
			(this.impreciseAnchor = null),
			(this.impreciseHead = null),
			(this.forceSelection = !1),
			(this.lastUpdate = Date.now()),
			this.updateDeco(),
			(this.tile = new Jr(e, e.contentDOM)),
			this.updateInner([new it(0, 0, 0, e.state.doc.length)], null)
	}
	update(e) {
		var t
		let i = e.changedRanges
		this.minWidth > 0 &&
			i.length &&
			(i.every(({ fromA: h, toA: u }) => u < this.minWidthFrom || h > this.minWidthTo)
				? ((this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1)),
					(this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)))
				: (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
			this.updateEditContextFormatting(e)
		let r = -1
		this.view.inputState.composing >= 0 &&
			!this.view.observer.editContext &&
			(!((t = this.domChanged) === null || t === void 0) && t.newSel
				? (r = this.domChanged.newSel.head)
				: !Kp(e.changes, this.hasComposition) && !e.selectionSet && (r = e.state.selection.main.head))
		const s = r > -1 ? Vp(this.view, e.changes, r) : null
		if (((this.domChanged = null), this.hasComposition)) {
			const { from: h, to: u } = this.hasComposition
			i = new it(h, u, e.changes.mapPos(h, -1), e.changes.mapPos(u, 1)).addToSet(i.slice())
		}
		;(this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null),
			(_.ie || _.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0)
		const o = this.decorations,
			a = this.blockWrappers
		this.updateDeco()
		const l = Gp(o, this.decorations, e.changes)
		l.length && (i = it.extendWithRanges(i, l))
		const c = Fp(a, this.blockWrappers, e.changes)
		return (
			c.length && (i = it.extendWithRanges(i, c)),
			s && !i.some((h) => h.fromA <= s.range.fromA && h.toA >= s.range.toA) && (i = s.range.addToSet(i.slice())),
			this.tile.flags & 2 && i.length == 0
				? !1
				: (this.updateInner(i, s), e.transactions.length && (this.lastUpdate = Date.now()), !0)
		)
	}
	updateInner(e, t) {
		this.view.viewState.mustMeasureContent = !0
		const { observer: i } = this.view
		i.ignore(() => {
			if (t || e.length) {
				const o = this.tile,
					a = new Lp(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap)
				t && ge.get(t.text) && a.cache.reused.set(ge.get(t.text), 2), (this.tile = a.run(e, t)), Mo(o, a.cache.reused)
			}
			;(this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + 'px'),
				(this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + 'px' : '')
			const s = _.chrome || _.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0
			this.tile.sync(s),
				s &&
					(s.written || i.selectionRange.focusNode != s.node || !this.tile.dom.contains(s.node)) &&
					(this.forceSelection = !0),
				(this.tile.dom.style.height = '')
		})
		const r = []
		if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
			for (const s of this.tile.children) s.isWidget() && s.widget instanceof Ps && r.push(s.dom)
		i.updateGaps(r)
	}
	updateEditContextFormatting(e) {
		this.editContextFormatting = this.editContextFormatting.map(e.changes)
		for (const t of e.transactions) for (const i of t.effects) i.is(vu) && (this.editContextFormatting = i.value)
	}
	updateSelection(e = !1, t = !1) {
		;(e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange()
		const { dom: i } = this.tile,
			r = this.view.root.activeElement,
			s = r == i,
			o =
				!s &&
				!(this.view.state.facet(Et) || i.tabIndex > -1) &&
				pn(i, this.view.observer.selectionRange) &&
				!(r && i.contains(r))
		if (!(s || t || o)) return
		let a = this.forceSelection
		this.forceSelection = !1
		let l = this.view.state.selection.main,
			c,
			h
		if (
			(l.empty
				? (h = c = this.inlineDOMNearPos(l.anchor, l.assoc || 1))
				: ((h = this.inlineDOMNearPos(l.head, l.head == l.from ? 1 : -1)),
					(c = this.inlineDOMNearPos(l.anchor, l.anchor == l.from ? 1 : -1))),
			_.gecko && l.empty && !this.hasComposition && Np(c))
		) {
			const f = document.createTextNode('')
			this.view.observer.ignore(() => c.node.insertBefore(f, c.node.childNodes[c.offset] || null)),
				(c = h = new ht(f, 0)),
				(a = !0)
		}
		const u = this.view.observer.selectionRange
		;(a ||
			!u.focusNode ||
			((!gn(c.node, c.offset, u.anchorNode, u.anchorOffset) || !gn(h.node, h.offset, u.focusNode, u.focusOffset)) &&
				!this.suppressWidgetCursorChange(u, l))) &&
			(this.view.observer.ignore(() => {
				_.android &&
					_.chrome &&
					i.contains(u.focusNode) &&
					Hp(u.focusNode, i) &&
					(i.blur(), i.focus({ preventScroll: !0 }))
				const f = $n(this.view.root)
				if (f)
					if (l.empty) {
						if (_.gecko) {
							const d = Bp(c.node, c.offset)
							if (d && d != 3) {
								const O = (d == 1 ? nu : ru)(c.node, c.offset)
								O && (c = new ht(O.node, O.offset))
							}
						}
						f.collapse(c.node, c.offset),
							l.bidiLevel != null && f.caretBidiLevel !== void 0 && (f.caretBidiLevel = l.bidiLevel)
					} else if (f.extend) {
						f.collapse(c.node, c.offset)
						try {
							f.extend(h.node, h.offset)
						} catch {}
					} else {
						const d = document.createRange()
						l.anchor > l.head && ([c, h] = [h, c]),
							d.setEnd(h.node, h.offset),
							d.setStart(c.node, c.offset),
							f.removeAllRanges(),
							f.addRange(d)
					}
				o && this.view.root.activeElement == i && (i.blur(), r && r.focus())
			}),
			this.view.observer.setSelectionRange(c, h)),
			(this.impreciseAnchor = c.precise ? null : new ht(u.anchorNode, u.anchorOffset)),
			(this.impreciseHead = h.precise ? null : new ht(u.focusNode, u.focusOffset))
	}
	suppressWidgetCursorChange(e, t) {
		return (
			this.hasComposition &&
			t.empty &&
			gn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) &&
			this.posFromDOM(e.focusNode, e.focusOffset) == t.head
		)
	}
	enforceCursorAssoc() {
		if (this.hasComposition) return
		const { view: e } = this,
			t = e.state.selection.main,
			i = $n(e.root),
			{ anchorNode: r, anchorOffset: s } = e.observer.selectionRange
		if (!i || !t.empty || !t.assoc || !i.modify) return
		const o = this.lineAt(t.head, t.assoc)
		if (!o) return
		const a = o.posAtStart
		if (t.head == a || t.head == a + o.length) return
		const l = this.coordsAt(t.head, -1),
			c = this.coordsAt(t.head, 1)
		if (!l || !c || l.bottom > c.top) return
		const h = this.domAtPos(t.head + t.assoc, t.assoc)
		i.collapse(h.node, h.offset),
			i.modify('move', t.assoc < 0 ? 'forward' : 'backward', 'lineboundary'),
			e.observer.readSelectionRange()
		const u = e.observer.selectionRange
		e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != t.from && i.collapse(r, s)
	}
	posFromDOM(e, t) {
		const i = this.tile.nearest(e)
		if (!i) return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length
		const r = i.posAtStart
		if (i.isComposite()) {
			let s
			if (e == i.dom) s = i.dom.childNodes[t]
			else {
				let o = Dt(e) == 0 ? 0 : t == 0 ? -1 : 1
				for (;;) {
					const a = e.parentNode
					if (a == i.dom) break
					o == 0 && a.firstChild != a.lastChild && (e == a.firstChild ? (o = -1) : (o = 1)), (e = a)
				}
				o < 0 ? (s = e) : (s = e.nextSibling)
			}
			if (s == i.dom.firstChild) return r
			for (; s && !ge.get(s); ) s = s.nextSibling
			if (!s) return r + i.length
			for (let o = 0, a = r; ; o++) {
				const l = i.children[o]
				if (l.dom == s) return a
				a += l.length + l.breakAfter
			}
		} else return i.isText() ? (e == i.dom ? r + t : r + (t ? i.length : 0)) : r
	}
	domAtPos(e, t) {
		const { tile: i, offset: r } = this.tile.resolveBlock(e, t)
		return i.isWidget() ? i.domPosFor(e, t) : i.domIn(r, t)
	}
	inlineDOMNearPos(e, t) {
		let i,
			r = -1,
			s = !1,
			o,
			a = -1,
			l = !1
		return (
			this.tile.blockTiles((c, h) => {
				if (c.isWidget()) {
					if (c.flags & 32 && h >= e) return !0
					c.flags & 16 && (s = !0)
				} else {
					const u = h + c.length
					if (
						(h <= e && ((i = c), (r = e - h), (s = u < e)),
						u >= e && !o && ((o = c), (a = e - h), (l = h > e)),
						h > e && o)
					)
						return !0
				}
			}),
			!i && !o
				? this.domAtPos(e, t)
				: (s && o ? (i = null) : l && i && (o = null), (i && t < 0) || !o ? i.domIn(r, t) : o.domIn(a, t))
		)
	}
	coordsAt(e, t) {
		const { tile: i, offset: r } = this.tile.resolveBlock(e, t)
		return i.isWidget() ? (i.widget instanceof Ps ? null : i.coordsInWidget(r, t, !0)) : i.coordsIn(r, t)
	}
	lineAt(e, t) {
		const { tile: i } = this.tile.resolveBlock(e, t)
		return i.isLine() ? i : null
	}
	coordsForChar(e) {
		const { tile: t, offset: i } = this.tile.resolveBlock(e, 1)
		if (!t.isLine()) return null
		function r(s, o) {
			if (s.isComposite())
				for (const a of s.children) {
					if (a.length >= o) {
						const l = r(a, o)
						if (l) return l
					}
					if (((o -= a.length), o < 0)) break
				}
			else if (s.isText() && o < s.length) {
				const a = Xe(s.text, o)
				if (a == o) return null
				const l = Qn(s.dom, o, a).getClientRects()
				for (let c = 0; c < l.length; c++) {
					const h = l[c]
					if (c == l.length - 1 || (h.top < h.bottom && h.left < h.right)) return h
				}
			}
			return null
		}
		return r(t, i)
	}
	measureVisibleLineHeights(e) {
		let t = [],
			{ from: i, to: r } = e,
			s = this.view.contentDOM.clientWidth,
			o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
			a = -1,
			l = this.view.textDirection == be.LTR,
			c = 0,
			h = (u, f, d) => {
				for (let O = 0; O < u.children.length && !(f > r); O++) {
					const p = u.children[O],
						v = f + p.length,
						m = p.dom.getBoundingClientRect(),
						{ height: g } = m
					if ((d && !O && (c += m.top - d.top), p instanceof _t)) v > i && h(p, f, m)
					else if (f >= i && (c > 0 && t.push(-c), t.push(g + c), (c = 0), o)) {
						const b = p.dom.lastChild,
							x = b ? ur(b) : []
						if (x.length) {
							const $ = x[x.length - 1],
								y = l ? $.right - m.left : m.right - $.left
							y > a && ((a = y), (this.minWidth = s), (this.minWidthFrom = f), (this.minWidthTo = v))
						}
					}
					d && O == u.children.length - 1 && (c += d.bottom - m.bottom), (f = v + p.breakAfter)
				}
			}
		return h(this.tile, 0, null), t
	}
	textDirectionAt(e) {
		const { tile: t } = this.tile.resolveBlock(e, 1)
		return getComputedStyle(t.dom).direction == 'rtl' ? be.RTL : be.LTR
	}
	measureTextSize() {
		const e = this.tile.blockTiles((o) => {
			if (o.isLine() && o.children.length && o.length <= 20) {
				let a = 0,
					l
				for (const c of o.children) {
					if (!c.isText() || /[^ -~]/.test(c.text)) return
					const h = ur(c.dom)
					if (h.length != 1) return
					;(a += h[0].width), (l = h[0].height)
				}
				if (a) return { lineHeight: o.dom.getBoundingClientRect().height, charWidth: a / o.length, textHeight: l }
			}
		})
		if (e) return e
		let t = document.createElement('div'),
			i,
			r,
			s
		return (
			(t.className = 'cm-line'),
			(t.style.width = '99999px'),
			(t.style.position = 'absolute'),
			(t.textContent = 'abc def ghi jkl mno pqr stu'),
			this.view.observer.ignore(() => {
				this.tile.dom.appendChild(t)
				const o = ur(t.firstChild)[0]
				;(i = t.getBoundingClientRect().height),
					(r = o && o.width ? o.width / 27 : 7),
					(s = o && o.height ? o.height : i),
					t.remove()
			}),
			{ lineHeight: i, charWidth: r, textHeight: s }
		)
	}
	computeBlockGapDeco() {
		const e = [],
			t = this.view.viewState
		for (let i = 0, r = 0; ; r++) {
			const s = r == t.viewports.length ? null : t.viewports[r],
				o = s ? s.from - 1 : this.view.state.doc.length
			if (o > i) {
				const a = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY
				e.push(U.replace({ widget: new Ps(a), block: !0, inclusive: !0, isBlockGap: !0 }).range(i, o))
			}
			if (!s) break
			i = s.to + 1
		}
		return U.set(e)
	}
	updateDeco() {
		let e = 1,
			t = this.view.state
				.facet(Hr)
				.map((s) => ((this.dynamicDecorationMap[e++] = typeof s == 'function') ? s(this.view) : s)),
			i = !1,
			r = this.view.state.facet($a).map((s, o) => {
				const a = typeof s == 'function'
				return a && (i = !0), a ? s(this.view) : s
			})
		for (
			r.length && ((this.dynamicDecorationMap[e++] = i), t.push(F.join(r))),
				this.decorations = [
					this.editContextFormatting,
					...t,
					this.computeBlockGapDeco(),
					this.view.viewState.lineGapDeco,
				];
			e < this.decorations.length;
		)
			this.dynamicDecorationMap[e++] = !1
		this.blockWrappers = this.view.state.facet(yu).map((s) => (typeof s == 'function' ? s(this.view) : s))
	}
	scrollIntoView(e) {
		var t
		if (e.isSnapshot) {
			const h = this.view.viewState.lineBlockAt(e.range.head)
			;(this.view.scrollDOM.scrollTop = h.top - e.yMargin), (this.view.scrollDOM.scrollLeft = e.xMargin)
			return
		}
		for (const h of this.view.state.facet(mu))
			try {
				if (h(this.view, e.range, e)) return !0
			} catch (u) {
				Qt(this.view.state, u, 'scroll handler')
			}
		let { range: i } = e,
			r = this.coordsAt(i.head, (t = i.assoc) !== null && t !== void 0 ? t : i.empty ? 0 : i.head > i.anchor ? -1 : 1),
			s
		if (!r) return
		!i.empty &&
			(s = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) &&
			(r = {
				left: Math.min(r.left, s.left),
				top: Math.min(r.top, s.top),
				right: Math.max(r.right, s.right),
				bottom: Math.max(r.bottom, s.bottom),
			})
		const o = wu(this.view),
			a = { left: r.left - o.left, top: r.top - o.top, right: r.right + o.right, bottom: r.bottom + o.bottom },
			{ offsetWidth: l, offsetHeight: c } = this.view.scrollDOM
		if (
			(mp(
				this.view.scrollDOM,
				a,
				i.head < i.anchor ? -1 : 1,
				e.x,
				e.y,
				Math.max(Math.min(e.xMargin, l), -l),
				Math.max(Math.min(e.yMargin, c), -c),
				this.view.textDirection == be.LTR,
			),
			window.visualViewport &&
				window.innerHeight - window.visualViewport.height > 1 &&
				(r.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height ||
					r.bottom < window.pageYOffset + window.visualViewport.offsetTop))
		) {
			const h = this.view.docView.lineAt(i.head, 1)
			h && h.dom.scrollIntoView({ block: 'nearest' })
		}
	}
	lineHasWidget(e) {
		const t = (i) => i.isWidget() || i.children.some(t)
		return t(this.tile.resolveBlock(e, 1).tile)
	}
	destroy() {
		Mo(this.tile)
	}
}
function Mo(n, e) {
	const t = e?.get(n)
	if (t != 1) {
		t == null && n.destroy()
		for (const i of n.children) Mo(i, e)
	}
}
function Np(n) {
	return (
		n.node.nodeType == 1 &&
		n.node.firstChild &&
		(n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == 'false') &&
		(n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == 'false')
	)
}
function Qu(n, e) {
	const t = n.observer.selectionRange
	if (!t.focusNode) return null
	let i = nu(t.focusNode, t.focusOffset),
		r = ru(t.focusNode, t.focusOffset),
		s = i || r
	if (r && i && r.node != i.node) {
		const a = ge.get(r.node)
		if (!a || (a.isText() && a.text != r.node.nodeValue)) s = r
		else if (n.docView.lastCompositionAfterCursor) {
			const l = ge.get(i.node)
			!l || (l.isText() && l.text != i.node.nodeValue) || (s = r)
		}
	}
	if (((n.docView.lastCompositionAfterCursor = s != i), !s)) return null
	const o = e - s.offset
	return { from: o, to: o + s.node.nodeValue.length, node: s.node }
}
function Vp(n, e, t) {
	const i = Qu(n, t)
	if (!i) return null
	const { node: r, from: s, to: o } = i,
		a = r.nodeValue
	if (/[\n\r]/.test(a) || n.state.doc.sliceString(i.from, i.to) != a) return null
	const l = e.invertedDesc
	return { range: new it(l.mapPos(s), l.mapPos(o), s, o), text: r }
}
function Bp(n, e) {
	return n.nodeType != 1
		? 0
		: (e && n.childNodes[e - 1].contentEditable == 'false' ? 1 : 0) |
				(e < n.childNodes.length && n.childNodes[e].contentEditable == 'false' ? 2 : 0)
}
const qp = class {
	constructor() {
		this.changes = []
	}
	compareRange(e, t) {
		Zi(e, t, this.changes)
	}
	comparePoint(e, t) {
		Zi(e, t, this.changes)
	}
	boundChange(e) {
		Zi(e, e, this.changes)
	}
}
function Gp(n, e, t) {
	const i = new qp()
	return F.compare(n, e, t, i), i.changes
}
class Up {
	constructor() {
		this.changes = []
	}
	compareRange(e, t) {
		Zi(e, t, this.changes)
	}
	comparePoint() {}
	boundChange(e) {
		Zi(e, e, this.changes)
	}
}
function Fp(n, e, t) {
	const i = new Up()
	return F.compare(n, e, t, i), i.changes
}
function Hp(n, e) {
	for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
		if (t.nodeType == 1 && t.contentEditable == 'false') return !0
	return !1
}
function Kp(n, e) {
	let t = !1
	return (
		e &&
			n.iterChangedRanges((i, r) => {
				i < e.to && r > e.from && (t = !0)
			}),
		t
	)
}
class Ps extends vi {
	constructor(e) {
		super(), (this.height = e)
	}
	toDOM() {
		const e = document.createElement('div')
		return (e.className = 'cm-gap'), this.updateDOM(e), e
	}
	eq(e) {
		return e.height == this.height
	}
	updateDOM(e) {
		return (e.style.height = this.height + 'px'), !0
	}
	get editable() {
		return !0
	}
	get estimatedHeight() {
		return this.height
	}
	ignoreEvent() {
		return !1
	}
}
function Jp(n, e, t = 1) {
	const i = n.charCategorizer(e),
		r = n.doc.lineAt(e),
		s = e - r.from
	if (r.length == 0) return T.cursor(e)
	s == 0 ? (t = 1) : s == r.length && (t = -1)
	let o = s,
		a = s
	t < 0 ? (o = Xe(r.text, s, !1)) : (a = Xe(r.text, s))
	const l = i(r.text.slice(o, a))
	for (; o > 0; ) {
		const c = Xe(r.text, o, !1)
		if (i(r.text.slice(c, o)) != l) break
		o = c
	}
	for (; a < r.length; ) {
		const c = Xe(r.text, a)
		if (i(r.text.slice(a, c)) != l) break
		a = c
	}
	return T.range(o + r.from, a + r.from)
}
function eg(n, e, t, i, r) {
	let s = Math.round((i - e.left) * n.defaultCharacterWidth)
	if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
		const a = n.viewState.heightOracle.textHeight,
			l = Math.floor((r - t.top - (n.defaultLineHeight - a) * 0.5) / a)
		s += l * n.viewState.heightOracle.lineLength
	}
	const o = n.state.sliceDoc(t.from, t.to)
	return t.from + ap(o, s, n.state.tabSize)
}
function tg(n, e, t) {
	const i = n.lineBlockAt(e)
	if (Array.isArray(i.type)) {
		let r
		for (const s of i.type) {
			if (s.from > e) break
			if (!(s.to < e)) {
				if (s.from < e && s.to > e) return s
				;(!r || (s.type == Be.Text && (r.type != s.type || (t < 0 ? s.from < e : s.to > e)))) && (r = s)
			}
		}
		return r || i
	}
	return i
}
function ig(n, e, t, i) {
	const r = tg(n, e.head, e.assoc || -1),
		s =
			!i || r.type != Be.Text || !(n.lineWrapping || r.widgetLineBreaks)
				? null
				: n.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head)
	if (s) {
		const o = n.dom.getBoundingClientRect(),
			a = n.textDirectionAt(r.from),
			l = n.posAtCoords({ x: t == (a == be.LTR) ? o.right - 1 : o.left + 1, y: (s.top + s.bottom) / 2 })
		if (l != null) return T.cursor(l, t ? -1 : 1)
	}
	return T.cursor(t ? r.to : r.from, t ? -1 : 1)
}
function Al(n, e, t, i) {
	let r = n.state.doc.lineAt(e.head),
		s = n.bidiSpans(r),
		o = n.textDirectionAt(r.from)
	for (let a = e, l = null; ; ) {
		let c = Tp(r, s, o, a, t),
			h = cu
		if (!c) {
			if (r.number == (t ? n.state.doc.lines : 1)) return a
			;(h = `
`),
				(r = n.state.doc.line(r.number + (t ? 1 : -1))),
				(s = n.bidiSpans(r)),
				(c = n.visualLineSide(r, !t))
		}
		if (l) {
			if (!l(h)) return a
		} else {
			if (!i) return c
			l = i(h)
		}
		a = c
	}
}
function ng(n, e, t) {
	let i = n.state.charCategorizer(e),
		r = i(t)
	return (s) => {
		const o = i(s)
		return r == tt.Space && (r = o), r == o
	}
}
function rg(n, e, t, i) {
	const r = e.head,
		s = t ? 1 : -1
	if (r == (t ? n.state.doc.length : 0)) return T.cursor(r, e.assoc)
	let o = e.goalColumn,
		a,
		l = n.contentDOM.getBoundingClientRect(),
		c = n.coordsAtPos(r, e.assoc || ((e.empty ? t : e.head == e.from) ? 1 : -1)),
		h = n.documentTop
	if (c) o == null && (o = c.left - l.left), (a = s < 0 ? c.top : c.bottom)
	else {
		const O = n.viewState.lineBlockAt(r)
		o == null && (o = Math.min(l.right - l.left, n.defaultCharacterWidth * (r - O.from))),
			(a = (s < 0 ? O.top : O.bottom) + h)
	}
	const u = l.left + o,
		f = n.viewState.heightOracle.textHeight >> 1,
		d = i ?? f
	for (let O = 0; ; O += f) {
		const p = a + (d + O) * s,
			v = Eo(n, { x: u, y: p }, !1, s)
		if (t ? p > l.bottom : p < l.top) return T.cursor(v.pos, v.assoc)
		const m = n.coordsAtPos(v.pos, v.assoc),
			g = m ? (m.top + m.bottom) / 2 : 0
		if (!m || (t ? g > a : g < a)) return T.cursor(v.pos, v.assoc, void 0, o)
	}
}
function mn(n, e, t) {
	for (;;) {
		let i = 0
		for (const r of n)
			r.between(e - 1, e + 1, (s, o, a) => {
				if (e > s && e < o) {
					const l = i || t || (e - s < o - e ? -1 : 1)
					;(e = l < 0 ? s : o), (i = l)
				}
			})
		if (!i) return e
	}
}
function ku(n, e) {
	let t = null
	for (let i = 0; i < e.ranges.length; i++) {
		let r = e.ranges[i],
			s = null
		if (r.empty) {
			const o = mn(n, r.from, 0)
			o != r.from && (s = T.cursor(o, -1))
		} else {
			const o = mn(n, r.from, -1),
				a = mn(n, r.to, 1)
			;(o != r.from || a != r.to) && (s = T.range(r.from == r.anchor ? o : a, r.from == r.head ? o : a))
		}
		s && (t || (t = e.ranges.slice()), (t[i] = s))
	}
	return t ? T.create(t, e.mainIndex) : e
}
function Ts(n, e, t) {
	const i = mn(
		n.state.facet(zn).map((r) => r(n)),
		t.from,
		e.head > t.from ? -1 : 1,
	)
	return i == t.from ? t : T.cursor(i, i < t.from ? 1 : -1)
}
class wt {
	constructor(e, t) {
		;(this.pos = e), (this.assoc = t)
	}
}
function Eo(n, e, t, i) {
	let r = n.contentDOM.getBoundingClientRect(),
		s = r.top + n.viewState.paddingTop,
		{ x: o, y: a } = e,
		l = a - s,
		c
	for (;;) {
		if (l < 0) return new wt(0, 1)
		if (l > n.viewState.docHeight) return new wt(n.state.doc.length, -1)
		if (((c = n.elementAtHeight(l)), i == null)) break
		if (c.type == Be.Text) {
			if (i < 0 ? c.to < n.viewport.from : c.from > n.viewport.to) break
			const f = n.docView.coordsAt(i < 0 ? c.from : c.to, i > 0 ? -1 : 1)
			if (f && (i < 0 ? f.top <= l + s : f.bottom >= l + s)) break
		}
		const u = n.viewState.heightOracle.textHeight / 2
		l = i > 0 ? c.bottom + u : c.top - u
	}
	if (n.viewport.from >= c.to || n.viewport.to <= c.from) {
		if (t) return null
		if (c.type == Be.Text) {
			const u = eg(n, r, c, o, a)
			return new wt(u, u == c.from ? 1 : -1)
		}
	}
	if (c.type != Be.Text) return l < (c.top + c.bottom) / 2 ? new wt(c.from, 1) : new wt(c.to, -1)
	let h = n.docView.lineAt(c.from, 2)
	return (
		(!h || h.length != c.length) && (h = n.docView.lineAt(c.from, -2)),
		new sg(n, o, a, n.textDirectionAt(c.from)).scanTile(h, c.from)
	)
}
class sg {
	constructor(e, t, i, r) {
		;(this.view = e), (this.x = t), (this.y = i), (this.baseDir = r), (this.line = null), (this.spans = null)
	}
	bidiSpansAt(e) {
		return (
			(!this.line || this.line.from > e || this.line.to < e) &&
				((this.line = this.view.state.doc.lineAt(e)), (this.spans = this.view.bidiSpans(this.line))),
			this
		)
	}
	baseDirAt(e, t) {
		const { line: i, spans: r } = this.bidiSpansAt(e)
		return r[$t.find(r, e - i.from, -1, t)].level == this.baseDir
	}
	dirAt(e, t) {
		const { line: i, spans: r } = this.bidiSpansAt(e)
		return r[$t.find(r, e - i.from, -1, t)].dir
	}
	bidiIn(e, t) {
		const { spans: i, line: r } = this.bidiSpansAt(e)
		return i.length > 1 || (i.length && (i[0].level != this.baseDir || i[0].to + r.from < t))
	}
	scan(e, t) {
		let i = 0,
			r = e.length - 1,
			s = new Set(),
			o = this.bidiIn(e[0], e[r]),
			a,
			l,
			c = -1,
			h = 1e9,
			u
		for (; i < r; ) {
			let d = r - i,
				O = (i + r) >> 1
			t: if (s.has(O)) {
				let v = i + Math.floor(Math.random() * d)
				for (let m = 0; m < d; m++) {
					if (!s.has(v)) {
						O = v
						break t
					}
					v++, v == r && (v = i)
				}
				break
			}
			s.add(O)
			const p = t(O)
			if (p)
				for (let v = 0; v < p.length; v++) {
					let m = p[v],
						g = 0
					if (!(m.width == 0 && p.length > 1)) {
						if (m.bottom < this.y) (!a || a.bottom < m.bottom) && (a = m), (g = 1)
						else if (m.top > this.y) (!l || l.top > m.top) && (l = m), (g = -1)
						else {
							const b = m.left > this.x ? this.x - m.left : m.right < this.x ? this.x - m.right : 0,
								x = Math.abs(b)
							x < h && ((c = O), (h = x), (u = m)), b && (g = b < 0 == (this.baseDir == be.LTR) ? -1 : 1)
						}
						g == -1 && (!o || this.baseDirAt(e[O], 1))
							? (r = O)
							: g == 1 && (!o || this.baseDirAt(e[O + 1], -1)) && (i = O + 1)
					}
				}
		}
		if (!u) {
			const d = a && (!l || this.y - a.bottom < l.top - this.y) ? a : l
			return (this.y = (d.top + d.bottom) / 2), this.scan(e, t)
		}
		if (h) {
			if (a && a.bottom > u.top) return (this.y = a.bottom - 1), this.scan(e, t)
			if (l && l.top < u.bottom) return (this.y = l.top + 1), this.scan(e, t)
		}
		const f = (o ? this.dirAt(e[c], 1) : this.baseDir) == be.LTR
		return { i: c, after: this.x > (u.left + u.right) / 2 == f }
	}
	scanText(e, t) {
		const i = []
		for (let s = 0; s < e.length; s = Xe(e.text, s)) i.push(t + s)
		i.push(t + e.length)
		const r = this.scan(i, (s) => {
			const o = i[s] - t,
				a = i[s + 1] - t
			return Qn(e.dom, o, a).getClientRects()
		})
		return r.after ? new wt(i[r.i + 1], -1) : new wt(i[r.i], 1)
	}
	scanTile(e, t) {
		if (!e.length) return new wt(t, 1)
		if (e.children.length == 1) {
			const a = e.children[0]
			if (a.isText()) return this.scanText(a, t)
			if (a.isComposite()) return this.scanTile(a, t)
		}
		const i = [t]
		for (let a = 0, l = t; a < e.children.length; a++) i.push((l += e.children[a].length))
		const r = this.scan(i, (a) => {
				const l = e.children[a]
				return l.flags & 48 ? null : (l.dom.nodeType == 1 ? l.dom : Qn(l.dom, 0, l.length)).getClientRects()
			}),
			s = e.children[r.i],
			o = i[r.i]
		return s.isText()
			? this.scanText(s, o)
			: s.isComposite()
				? this.scanTile(s, o)
				: r.after
					? new wt(i[r.i + 1], -1)
					: new wt(o, 1)
	}
}
const wi = '￿'
class og {
	constructor(e, t) {
		;(this.points = e), (this.view = t), (this.text = ''), (this.lineSeparator = t.state.facet(ee.lineSeparator))
	}
	append(e) {
		this.text += e
	}
	lineBreak() {
		this.text += wi
	}
	readRange(e, t) {
		if (!e) return this
		const i = e.parentNode
		for (let r = e; ; ) {
			this.findPointBefore(i, r)
			const s = this.text.length
			this.readNode(r)
			const o = ge.get(r),
				a = r.nextSibling
			if (a == t) {
				o?.breakAfter && !a && i != this.view.contentDOM && this.lineBreak()
				break
			}
			const l = ge.get(a)
			;(o && l
				? o.breakAfter
				: (o ? o.breakAfter : $r(r)) || ($r(a) && (r.nodeName != 'BR' || o?.isWidget()) && this.text.length > s)) &&
				!lg(a, t) &&
				this.lineBreak(),
				(r = a)
		}
		return this.findPointBefore(i, t), this
	}
	readTextNode(e) {
		const t = e.nodeValue
		for (const i of this.points) i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length))
		for (let i = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
			let s = -1,
				o = 1,
				a
			if (
				(this.lineSeparator
					? ((s = t.indexOf(this.lineSeparator, i)), (o = this.lineSeparator.length))
					: (a = r.exec(t)) && ((s = a.index), (o = a[0].length)),
				this.append(t.slice(i, s < 0 ? t.length : s)),
				s < 0)
			)
				break
			if ((this.lineBreak(), o > 1))
				for (const l of this.points) l.node == e && l.pos > this.text.length && (l.pos -= o - 1)
			i = s + o
		}
	}
	readNode(e) {
		const t = ge.get(e),
			i = t && t.overrideDOMText
		if (i != null) {
			this.findPointInside(e, i.length)
			for (let r = i.iter(); !r.next().done; ) r.lineBreak ? this.lineBreak() : this.append(r.value)
		} else
			e.nodeType == 3
				? this.readTextNode(e)
				: e.nodeName == 'BR'
					? e.nextSibling && this.lineBreak()
					: e.nodeType == 1 && this.readRange(e.firstChild, null)
	}
	findPointBefore(e, t) {
		for (const i of this.points) i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length)
	}
	findPointInside(e, t) {
		for (const i of this.points)
			(e.nodeType == 3 ? i.node == e : e.contains(i.node)) &&
				(i.pos = this.text.length + (ag(e, i.node, i.offset) ? t : 0))
	}
}
function ag(n, e, t) {
	for (;;) {
		if (!e || t < Dt(e)) return !1
		if (e == n) return !0
		;(t = Jt(e) + 1), (e = e.parentNode)
	}
}
function lg(n, e) {
	let t
	for (; !(n == e || !n); n = n.nextSibling) {
		const i = ge.get(n)
		if (!i?.isWidget()) return !1
		i && (t || (t = [])).push(i)
	}
	if (t)
		for (const i of t) {
			const r = i.overrideDOMText
			if (r?.length) return !1
		}
	return !0
}
class jl {
	constructor(e, t) {
		;(this.node = e), (this.offset = t), (this.pos = -1)
	}
}
class cg {
	constructor(e, t, i, r) {
		;(this.typeOver = r), (this.bounds = null), (this.text = ''), (this.domChanged = t > -1)
		const { impreciseHead: s, impreciseAnchor: o } = e.docView,
			a = e.state.selection
		if (e.state.readOnly && t > -1) this.newSel = null
		else if (t > -1 && (this.bounds = Pu(e.docView.tile, t, i, 0))) {
			const l = s || o ? [] : ug(e),
				c = new og(l, e)
			c.readRange(this.bounds.startDOM, this.bounds.endDOM),
				(this.text = c.text),
				(this.newSel = fg(l, this.bounds.from))
		} else {
			let l = e.observer.selectionRange,
				c =
					(s && s.node == l.focusNode && s.offset == l.focusOffset) || !Zo(e.contentDOM, l.focusNode)
						? a.main.head
						: e.docView.posFromDOM(l.focusNode, l.focusOffset),
				h =
					(o && o.node == l.anchorNode && o.offset == l.anchorOffset) || !Zo(e.contentDOM, l.anchorNode)
						? a.main.anchor
						: e.docView.posFromDOM(l.anchorNode, l.anchorOffset),
				u = e.viewport
			if ((_.ios || _.chrome) && a.main.empty && c != h && (u.from > 0 || u.to < e.state.doc.length)) {
				const f = Math.min(c, h),
					d = Math.max(c, h),
					O = u.from - f,
					p = u.to - d
				;(O == 0 || O == 1 || f == 0) &&
					(p == 0 || p == -1 || d == e.state.doc.length) &&
					((c = 0), (h = e.state.doc.length))
			}
			if (e.inputState.composing > -1 && a.ranges.length > 1) this.newSel = a.replaceRange(T.range(h, c))
			else if (
				e.lineWrapping &&
				h == c &&
				!(a.main.empty && a.main.head == c) &&
				e.inputState.lastTouchTime > Date.now() - 100
			) {
				let f = e.coordsAtPos(c, -1),
					d = 0
				f && (d = e.inputState.lastTouchY <= f.bottom ? -1 : 1), (this.newSel = T.create([T.cursor(c, d)]))
			} else this.newSel = T.single(h, c)
		}
	}
}
function Pu(n, e, t, i) {
	if (n.isComposite()) {
		let r = -1,
			s = -1,
			o = -1,
			a = -1
		for (let l = 0, c = i, h = i; l < n.children.length; l++) {
			const u = n.children[l],
				f = c + u.length
			if (c < e && f > t) return Pu(u, e, t, c)
			if ((f >= e && r == -1 && ((r = l), (s = c)), c > t && u.dom.parentNode == n.dom)) {
				;(o = l), (a = h)
				break
			}
			;(h = f), (c = f + u.breakAfter)
		}
		return {
			from: s,
			to: a < 0 ? i + n.length : a,
			startDOM: (r ? n.children[r - 1].dom.nextSibling : null) || n.dom.firstChild,
			endDOM: o < n.children.length && o >= 0 ? n.children[o].dom : null,
		}
	}
	return n.isText() ? { from: i, to: i + n.length, startDOM: n.dom, endDOM: n.dom.nextSibling } : null
}
function Tu(n, e) {
	let t,
		{ newSel: i } = e,
		{ state: r } = n,
		s = r.selection.main,
		o = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1
	if (e.bounds) {
		let { from: a, to: l } = e.bounds,
			c = s.from,
			h = null
		;(o === 8 || (_.android && e.text.length < l - a)) && ((c = s.to), (h = 'end'))
		let u = r.doc.sliceString(a, l, wi),
			f,
			d
		!s.empty &&
		s.from >= a &&
		s.to <= l &&
		(e.typeOver || u != e.text) &&
		u.slice(0, s.from - a) == e.text.slice(0, s.from - a) &&
		u.slice(s.to - a) == e.text.slice((f = e.text.length - (u.length - (s.to - a))))
			? (t = { from: s.from, to: s.to, insert: H.of(e.text.slice(s.from - a, f).split(wi)) })
			: (d = Cu(u, e.text, c - a, h)) &&
				(_.chrome && o == 13 && d.toB == d.from + 2 && e.text.slice(d.from, d.toB) == wi + wi && d.toB--,
				(t = { from: a + d.from, to: a + d.toA, insert: H.of(e.text.slice(d.from, d.toB).split(wi)) }))
	} else i && ((!n.hasFocus && r.facet(Et)) || Cr(i, s)) && (i = null)
	if (!t && !i) return !1
	if (
		((_.mac || _.android) &&
		t &&
		t.from == t.to &&
		t.from == s.head - 1 &&
		/^\. ?$/.test(t.insert.toString()) &&
		n.contentDOM.getAttribute('autocorrect') == 'off'
			? (i && t.insert.length == 2 && (i = T.single(i.main.anchor - 1, i.main.head - 1)),
				(t = { from: t.from, to: t.to, insert: H.of([t.insert.toString().replace('.', ' ')]) }))
			: r.doc.lineAt(s.from).to < s.to &&
					n.docView.lineHasWidget(s.to) &&
					n.inputState.insertingTextAt > Date.now() - 50
				? (t = { from: s.from, to: s.to, insert: r.toText(n.inputState.insertingText) })
				: _.chrome &&
					t &&
					t.from == t.to &&
					t.from == s.head &&
					t.insert.toString() ==
						`
 ` &&
					n.lineWrapping &&
					(i && (i = T.single(i.main.anchor - 1, i.main.head - 1)),
					(t = { from: s.from, to: s.to, insert: H.of([' ']) })),
		t)
	)
		return Qa(n, t, i, o)
	if (i && !Cr(i, s)) {
		let a = !1,
			l = 'select'
		return (
			n.inputState.lastSelectionTime > Date.now() - 50 &&
				(n.inputState.lastSelectionOrigin == 'select' && (a = !0),
				(l = n.inputState.lastSelectionOrigin),
				l == 'select.pointer' &&
					(i = ku(
						r.facet(zn).map((c) => c(n)),
						i,
					))),
			n.dispatch({ selection: i, scrollIntoView: a, userEvent: l }),
			!0
		)
	}
	return !1
}
function Qa(n, e, t, i = -1) {
	if (_.ios && n.inputState.flushIOSKey(e)) return !0
	const r = n.state.selection.main
	if (
		_.android &&
		((e.to == r.to &&
			(e.from == r.from || (e.from == r.from - 1 && n.state.sliceDoc(e.from, r.from) == ' ')) &&
			e.insert.length == 1 &&
			e.insert.lines == 2 &&
			Ri(n.contentDOM, 'Enter', 13)) ||
			(((e.from == r.from - 1 && e.to == r.to && e.insert.length == 0) ||
				(i == 8 && e.insert.length < e.to - e.from && e.to > r.head)) &&
				Ri(n.contentDOM, 'Backspace', 8)) ||
			(e.from == r.from && e.to == r.to + 1 && e.insert.length == 0 && Ri(n.contentDOM, 'Delete', 46)))
	)
		return !0
	const s = e.insert.toString()
	n.inputState.composing >= 0 && n.inputState.composing++
	let o,
		a = () => o || (o = hg(n, e, t))
	return n.state.facet(Ou).some((l) => l(n, e.from, e.to, s, a)) || n.dispatch(a()), !0
}
function hg(n, e, t) {
	let i,
		r = n.state,
		s = r.selection.main,
		o = -1
	if ((e.from == e.to && e.from < s.from) || e.from > s.to) {
		const l = e.from < s.from ? -1 : 1,
			c = l < 0 ? s.from : s.to,
			h = mn(
				r.facet(zn).map((u) => u(n)),
				c,
				l,
			)
		e.from == h && (o = h)
	}
	if (o > -1) i = { changes: e, selection: T.cursor(e.from + e.insert.length, -1) }
	else if (
		e.from >= s.from &&
		e.to <= s.to &&
		e.to - e.from >= (s.to - s.from) / 3 &&
		(!t || (t.main.empty && t.main.from == e.from + e.insert.length)) &&
		n.inputState.composing < 0
	) {
		const l = s.from < e.from ? r.sliceDoc(s.from, e.from) : '',
			c = s.to > e.to ? r.sliceDoc(e.to, s.to) : ''
		i = r.replaceSelection(n.state.toText(l + e.insert.sliceString(0, void 0, n.state.lineBreak) + c))
	} else {
		const l = r.changes(e),
			c = t && t.main.to <= l.newLength ? t.main : void 0
		if (
			r.selection.ranges.length > 1 &&
			(n.inputState.composing >= 0 || n.inputState.compositionPendingChange) &&
			e.to <= s.to + 10 &&
			e.to >= s.to - 10
		) {
			let h = n.state.sliceDoc(e.from, e.to),
				u,
				f = t && Qu(n, t.main.head)
			if (f) {
				const O = e.insert.length - (e.to - e.from)
				u = { from: f.from, to: f.to - O }
			} else u = n.state.doc.lineAt(s.head)
			const d = s.to - e.to
			i = r.changeByRange((O) => {
				if (O.from == s.from && O.to == s.to) return { changes: l, range: c || O.map(l) }
				const p = O.to - d,
					v = p - h.length
				if (n.state.sliceDoc(v, p) != h || (p >= u.from && v <= u.to)) return { range: O }
				const m = r.changes({ from: v, to: p, insert: e.insert }),
					g = O.to - s.to
				return { changes: m, range: c ? T.range(Math.max(0, c.anchor + g), Math.max(0, c.head + g)) : O.map(m) }
			})
		} else i = { changes: l, selection: c && r.selection.replaceRange(c) }
	}
	let a = 'input.type'
	return (
		(n.composing || (n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50)) &&
			((n.inputState.compositionPendingChange = !1),
			(a += '.compose'),
			n.inputState.compositionFirstChange && ((a += '.start'), (n.inputState.compositionFirstChange = !1))),
		r.update(i, { userEvent: a, scrollIntoView: !0 })
	)
}
function Cu(n, e, t, i) {
	let r = Math.min(n.length, e.length),
		s = 0
	for (; s < r && n.charCodeAt(s) == e.charCodeAt(s); ) s++
	if (s == r && n.length == e.length) return null
	let o = n.length,
		a = e.length
	for (; o > 0 && a > 0 && n.charCodeAt(o - 1) == e.charCodeAt(a - 1); ) o--, a--
	if (i == 'end') {
		const l = Math.max(0, s - Math.min(o, a))
		t -= o + l - s
	}
	if (o < s && n.length < e.length) {
		const l = t <= s && t >= o ? s - t : 0
		;(s -= l), (a = s + (a - o)), (o = s)
	} else if (a < s) {
		const l = t <= s && t >= a ? s - t : 0
		;(s -= l), (o = s + (o - a)), (a = s)
	}
	return { from: s, toA: o, toB: a }
}
function ug(n) {
	const e = []
	if (n.root.activeElement != n.contentDOM) return e
	const { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s } = n.observer.selectionRange
	return t && (e.push(new jl(t, i)), (r != t || s != i) && e.push(new jl(r, s))), e
}
function fg(n, e) {
	if (n.length == 0) return null
	const t = n[0].pos,
		i = n.length == 2 ? n[1].pos : t
	return t > -1 && i > -1 ? T.single(t + e, i + e) : null
}
function Cr(n, e) {
	return e.head == n.main.head && e.anchor == n.main.anchor
}
class dg {
	setSelectionOrigin(e) {
		;(this.lastSelectionOrigin = e), (this.lastSelectionTime = Date.now())
	}
	constructor(e) {
		;(this.view = e),
			(this.lastKeyCode = 0),
			(this.lastKeyTime = 0),
			(this.lastTouchTime = 0),
			(this.lastTouchX = 0),
			(this.lastTouchY = 0),
			(this.lastFocusTime = 0),
			(this.lastScrollTop = 0),
			(this.lastScrollLeft = 0),
			(this.lastWheelEvent = 0),
			(this.pendingIOSKey = void 0),
			(this.tabFocusMode = -1),
			(this.lastSelectionOrigin = null),
			(this.lastSelectionTime = 0),
			(this.lastContextMenu = 0),
			(this.scrollHandlers = []),
			(this.handlers = Object.create(null)),
			(this.composing = -1),
			(this.compositionFirstChange = null),
			(this.compositionEndedAt = 0),
			(this.compositionPendingKey = !1),
			(this.compositionPendingChange = !1),
			(this.insertingText = ''),
			(this.insertingTextAt = 0),
			(this.mouseSelection = null),
			(this.draggedContent = null),
			(this.handleEvent = this.handleEvent.bind(this)),
			(this.notifiedFocused = e.hasFocus),
			_.safari && e.contentDOM.addEventListener('input', () => null),
			_.gecko && Tg(e.contentDOM.ownerDocument)
	}
	handleEvent(e) {
		!Sg(this.view, e) ||
			this.ignoreDuringComposition(e) ||
			(e.type == 'keydown' && this.keydown(e)) ||
			(this.view.updateState != 0
				? Promise.resolve().then(() => this.runHandlers(e.type, e))
				: this.runHandlers(e.type, e))
	}
	runHandlers(e, t) {
		const i = this.handlers[e]
		if (i) {
			for (const r of i.observers) r(this.view, t)
			for (const r of i.handlers) {
				if (t.defaultPrevented) break
				if (r(this.view, t)) {
					t.preventDefault()
					break
				}
			}
		}
	}
	ensureHandlers(e) {
		const t = Og(e),
			i = this.handlers,
			r = this.view.contentDOM
		for (const s in t)
			if (s != 'scroll') {
				let o = !t[s].handlers.length,
					a = i[s]
				a && o != !a.handlers.length && (r.removeEventListener(s, this.handleEvent), (a = null)),
					a || r.addEventListener(s, this.handleEvent, { passive: o })
			}
		for (const s in i) s != 'scroll' && !t[s] && r.removeEventListener(s, this.handleEvent)
		this.handlers = t
	}
	keydown(e) {
		if (
			((this.lastKeyCode = e.keyCode),
			(this.lastKeyTime = Date.now()),
			e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
		)
			return !0
		if (
			(this.tabFocusMode > 0 && e.keyCode != 27 && Ru.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1),
			_.android && _.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
		)
			return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0
		let t
		return _.ios &&
			!e.synthetic &&
			!e.altKey &&
			!e.metaKey &&
			!e.shiftKey &&
			(((t = Zu.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey) || (pg.indexOf(e.key) > -1 && e.ctrlKey))
			? ((this.pendingIOSKey = t || e), setTimeout(() => this.flushIOSKey(), 250), !0)
			: (e.keyCode != 229 && this.view.observer.forceFlush(), !1)
	}
	flushIOSKey(e) {
		const t = this.pendingIOSKey
		return !t || (t.key == 'Enter' && e && e.from < e.to && /^\S+$/.test(e.insert.toString()))
			? !1
			: ((this.pendingIOSKey = void 0),
				Ri(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0))
	}
	ignoreDuringComposition(e) {
		return !/^key/.test(e.type) || e.synthetic
			? !1
			: this.composing > 0
				? !0
				: _.safari && !_.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100
					? ((this.compositionPendingKey = !1), !0)
					: !1
	}
	startMouseSelection(e) {
		this.mouseSelection && this.mouseSelection.destroy(), (this.mouseSelection = e)
	}
	update(e) {
		this.view.observer.update(e),
			this.mouseSelection && this.mouseSelection.update(e),
			this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)),
			e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
	}
	destroy() {
		this.mouseSelection && this.mouseSelection.destroy()
	}
}
function Xl(n, e) {
	return (t, i) => {
		try {
			return e.call(n, i, t)
		} catch (r) {
			Qt(t.state, r)
		}
	}
}
function Og(n) {
	const e = Object.create(null)
	function t(i) {
		return e[i] || (e[i] = { observers: [], handlers: [] })
	}
	for (const i of n) {
		const r = i.spec,
			s = r && r.plugin.domEventHandlers,
			o = r && r.plugin.domEventObservers
		if (s)
			for (const a in s) {
				const l = s[a]
				l && t(a).handlers.push(Xl(i.value, l))
			}
		if (o)
			for (const a in o) {
				const l = o[a]
				l && t(a).observers.push(Xl(i.value, l))
			}
	}
	for (const i in dt) t(i).handlers.push(dt[i])
	for (const i in qe) t(i).observers.push(qe[i])
	return e
}
const Zu = [
		{ key: 'Backspace', keyCode: 8, inputType: 'deleteContentBackward' },
		{ key: 'Enter', keyCode: 13, inputType: 'insertParagraph' },
		{ key: 'Enter', keyCode: 13, inputType: 'insertLineBreak' },
		{ key: 'Delete', keyCode: 46, inputType: 'deleteContentForward' },
	],
	pg = 'dthko',
	Ru = [16, 17, 18, 20, 91, 92, 224, 225],
	Vn = 6
function Bn(n) {
	return Math.max(0, n) * 0.7 + 8
}
function gg(n, e) {
	return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY))
}
class mg {
	constructor(e, t, i, r) {
		;(this.view = e),
			(this.startEvent = t),
			(this.style = i),
			(this.mustSelect = r),
			(this.scrollSpeed = { x: 0, y: 0 }),
			(this.scrolling = -1),
			(this.lastEvent = t),
			(this.scrollParents = eu(e.contentDOM)),
			(this.atoms = e.state.facet(zn).map((o) => o(e)))
		const s = e.contentDOM.ownerDocument
		s.addEventListener('mousemove', (this.move = this.move.bind(this))),
			s.addEventListener('mouseup', (this.up = this.up.bind(this))),
			(this.extend = t.shiftKey),
			(this.multiple = e.state.facet(ee.allowMultipleSelections) && vg(e, t)),
			(this.dragging = yg(e, t) && Xu(t) == 1 ? null : !1)
	}
	start(e) {
		this.dragging === !1 && this.select(e)
	}
	move(e) {
		if (e.buttons == 0) return this.destroy()
		if (this.dragging || (this.dragging == null && gg(this.startEvent, e) < 10)) return
		this.select((this.lastEvent = e))
		let t = 0,
			i = 0,
			r = 0,
			s = 0,
			o = this.view.win.innerWidth,
			a = this.view.win.innerHeight
		this.scrollParents.x && ({ left: r, right: o } = this.scrollParents.x.getBoundingClientRect()),
			this.scrollParents.y && ({ top: s, bottom: a } = this.scrollParents.y.getBoundingClientRect())
		const l = wu(this.view)
		e.clientX - l.left <= r + Vn ? (t = -Bn(r - e.clientX)) : e.clientX + l.right >= o - Vn && (t = Bn(e.clientX - o)),
			e.clientY - l.top <= s + Vn
				? (i = -Bn(s - e.clientY))
				: e.clientY + l.bottom >= a - Vn && (i = Bn(e.clientY - a)),
			this.setScrollSpeed(t, i)
	}
	up(e) {
		this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy()
	}
	destroy() {
		this.setScrollSpeed(0, 0)
		const e = this.view.contentDOM.ownerDocument
		e.removeEventListener('mousemove', this.move),
			e.removeEventListener('mouseup', this.up),
			(this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null)
	}
	setScrollSpeed(e, t) {
		;(this.scrollSpeed = { x: e, y: t }),
			e || t
				? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50))
				: this.scrolling > -1 && (clearInterval(this.scrolling), (this.scrolling = -1))
	}
	scroll() {
		let { x: e, y: t } = this.scrollSpeed
		e && this.scrollParents.x && ((this.scrollParents.x.scrollLeft += e), (e = 0)),
			t && this.scrollParents.y && ((this.scrollParents.y.scrollTop += t), (t = 0)),
			(e || t) && this.view.win.scrollBy(e, t),
			this.dragging === !1 && this.select(this.lastEvent)
	}
	select(e) {
		const { view: t } = this,
			i = ku(this.atoms, this.style.get(e, this.extend, this.multiple))
		;(this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) &&
			this.view.dispatch({ selection: i, userEvent: 'select.pointer' }),
			(this.mustSelect = !1)
	}
	update(e) {
		e.transactions.some((t) => t.isUserEvent('input.type'))
			? this.destroy()
			: this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20)
	}
}
function vg(n, e) {
	const t = n.state.facet(hu)
	return t.length ? t[0](e) : _.mac ? e.metaKey : e.ctrlKey
}
function bg(n, e) {
	const t = n.state.facet(uu)
	return t.length ? t[0](e) : _.mac ? !e.altKey : !e.ctrlKey
}
function yg(n, e) {
	const { main: t } = n.state.selection
	if (t.empty) return !1
	const i = $n(n.root)
	if (!i || i.rangeCount == 0) return !0
	const r = i.getRangeAt(0).getClientRects()
	for (let s = 0; s < r.length; s++) {
		const o = r[s]
		if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY) return !0
	}
	return !1
}
function Sg(n, e) {
	if (!e.bubbles) return !0
	if (e.defaultPrevented) return !1
	for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
		if (!t || t.nodeType == 11 || ((i = ge.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e))) return !1
	return !0
}
const dt = Object.create(null),
	qe = Object.create(null),
	Au = (_.ie && _.ie_version < 15) || (_.ios && _.webkit_version < 604)
function xg(n) {
	const e = n.dom.parentNode
	if (!e) return
	const t = e.appendChild(document.createElement('textarea'))
	;(t.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
		t.focus(),
		setTimeout(() => {
			n.focus(), t.remove(), ju(n, t.value)
		}, 50)
}
function es(n, e, t) {
	for (const i of n.facet(e)) t = i(t, n)
	return t
}
function ju(n, e) {
	e = es(n.state, Sa, e)
	let { state: t } = n,
		i,
		r = 1,
		s = t.toText(e),
		o = s.lines == t.selection.ranges.length
	if (_o != null && t.selection.ranges.every((l) => l.empty) && _o == s.toString()) {
		let l = -1
		i = t.changeByRange((c) => {
			const h = t.doc.lineAt(c.from)
			if (h.from == l) return { range: c }
			l = h.from
			const u = t.toText((o ? s.line(r++).text : e) + t.lineBreak)
			return { changes: { from: h.from, insert: u }, range: T.cursor(c.from + u.length) }
		})
	} else
		o
			? (i = t.changeByRange((l) => {
					const c = s.line(r++)
					return { changes: { from: l.from, to: l.to, insert: c.text }, range: T.cursor(l.from + c.length) }
				}))
			: (i = t.replaceSelection(s))
	n.dispatch(i, { userEvent: 'input.paste', scrollIntoView: !0 })
}
qe.scroll = (n) => {
	;(n.inputState.lastScrollTop = n.scrollDOM.scrollTop), (n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft)
}
qe.wheel = qe.mousewheel = (n) => {
	n.inputState.lastWheelEvent = Date.now()
}
dt.keydown = (n, e) => (
	n.inputState.setSelectionOrigin('select'),
	e.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3),
	!1
)
qe.touchstart = (n, e) => {
	const t = n.inputState,
		i = e.targetTouches[0]
	;(t.lastTouchTime = Date.now()),
		i && ((t.lastTouchX = i.clientX), (t.lastTouchY = i.clientY)),
		t.setSelectionOrigin('select.pointer')
}
qe.touchmove = (n) => {
	n.inputState.setSelectionOrigin('select.pointer')
}
dt.mousedown = (n, e) => {
	if ((n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)) return !1
	let t = null
	for (const i of n.state.facet(fu)) if (((t = i(n, e)), t)) break
	if ((!t && e.button == 0 && (t = $g(n, e)), t)) {
		const i = !n.hasFocus
		n.inputState.startMouseSelection(new mg(n, e, t, i)),
			i &&
				n.observer.ignore(() => {
					tu(n.contentDOM)
					const s = n.root.activeElement
					s && !s.contains(n.contentDOM) && s.blur()
				})
		const r = n.inputState.mouseSelection
		if (r) return r.start(e), r.dragging === !1
	} else n.inputState.setSelectionOrigin('select.pointer')
	return !1
}
function Ml(n, e, t, i) {
	if (i == 1) return T.cursor(e, t)
	if (i == 2) return Jp(n.state, e, t)
	{
		let r = n.docView.lineAt(e, t),
			s = n.state.doc.lineAt(r ? r.posAtEnd : e),
			o = r ? r.posAtStart : s.from,
			a = r ? r.posAtEnd : s.to
		return a < n.state.doc.length && a == s.to && a++, T.range(o, a)
	}
}
const wg = _.ie && _.ie_version <= 11
let El = null,
	_l = 0,
	zl = 0
function Xu(n) {
	if (!wg) return n.detail
	const e = El,
		t = zl
	return (
		(El = n),
		(zl = Date.now()),
		(_l =
			!e || (t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2)
				? (_l + 1) % 3
				: 1)
	)
}
function $g(n, e) {
	let t = n.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1),
		i = Xu(e),
		r = n.state.selection
	return {
		update(s) {
			s.docChanged && ((t.pos = s.changes.mapPos(t.pos)), (r = r.map(s.changes)))
		},
		get(s, o, a) {
			let l = n.posAndSideAtCoords({ x: s.clientX, y: s.clientY }, !1),
				c,
				h = Ml(n, l.pos, l.assoc, i)
			if (t.pos != l.pos && !o) {
				const u = Ml(n, t.pos, t.assoc, i),
					f = Math.min(u.from, h.from),
					d = Math.max(u.to, h.to)
				h = f < h.from ? T.range(f, d, h.assoc) : T.range(d, f, h.assoc)
			}
			return o
				? r.replaceRange(r.main.extend(h.from, h.to, h.assoc))
				: a && i == 1 && r.ranges.length > 1 && (c = Qg(r, l.pos))
					? c
					: a
						? r.addRange(h)
						: T.create([h])
		},
	}
}
function Qg(n, e) {
	for (let t = 0; t < n.ranges.length; t++) {
		const { from: i, to: r } = n.ranges[t]
		if (i <= e && r >= e)
			return T.create(
				n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)),
				n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0),
			)
	}
	return null
}
dt.dragstart = (n, e) => {
	let {
		selection: { main: t },
	} = n.state
	if (e.target.draggable) {
		const r = n.docView.tile.nearest(e.target)
		if (r && r.isWidget()) {
			const s = r.posAtStart,
				o = s + r.length
			;(s >= t.to || o <= t.from) && (t = T.range(s, o))
		}
	}
	const { inputState: i } = n
	return (
		i.mouseSelection && (i.mouseSelection.dragging = !0),
		(i.draggedContent = t),
		e.dataTransfer &&
			(e.dataTransfer.setData('Text', es(n.state, xa, n.state.sliceDoc(t.from, t.to))),
			(e.dataTransfer.effectAllowed = 'copyMove')),
		!1
	)
}
dt.dragend = (n) => ((n.inputState.draggedContent = null), !1)
function Il(n, e, t, i) {
	if (((t = es(n.state, Sa, t)), !t)) return
	const r = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
		{ draggedContent: s } = n.inputState,
		o = i && s && bg(n, e) ? { from: s.from, to: s.to } : null,
		a = { from: r, insert: t },
		l = n.state.changes(o ? [o, a] : a)
	n.focus(),
		n.dispatch({
			changes: l,
			selection: { anchor: l.mapPos(r, -1), head: l.mapPos(r, 1) },
			userEvent: o ? 'move.drop' : 'input.drop',
		}),
		(n.inputState.draggedContent = null)
}
dt.drop = (n, e) => {
	if (!e.dataTransfer) return !1
	if (n.state.readOnly) return !0
	const t = e.dataTransfer.files
	if (t && t.length) {
		let i = Array(t.length),
			r = 0,
			s = () => {
				++r == t.length && Il(n, e, i.filter((o) => o != null).join(n.state.lineBreak), !1)
			}
		for (let o = 0; o < t.length; o++) {
			const a = new FileReader()
			;(a.onerror = s),
				(a.onload = () => {
					;/[\x00-\x08\x0e-\x1f]{2}/.test(a.result) || (i[o] = a.result), s()
				}),
				a.readAsText(t[o])
		}
		return !0
	}
	const i = e.dataTransfer.getData('Text')
	if (i) return Il(n, e, i, !0), !0
	return !1
}
dt.paste = (n, e) => {
	if (n.state.readOnly) return !0
	n.observer.flush()
	const t = Au ? null : e.clipboardData
	return t ? (ju(n, t.getData('text/plain') || t.getData('text/uri-list')), !0) : (xg(n), !1)
}
function kg(n, e) {
	const t = n.dom.parentNode
	if (!t) return
	const i = t.appendChild(document.createElement('textarea'))
	;(i.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
		(i.value = e),
		i.focus(),
		(i.selectionEnd = e.length),
		(i.selectionStart = 0),
		setTimeout(() => {
			i.remove(), n.focus()
		}, 50)
}
function Pg(n) {
	let e = [],
		t = [],
		i = !1
	for (const r of n.selection.ranges) r.empty || (e.push(n.sliceDoc(r.from, r.to)), t.push(r))
	if (!e.length) {
		let r = -1
		for (const { from: s } of n.selection.ranges) {
			const o = n.doc.lineAt(s)
			o.number > r && (e.push(o.text), t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })), (r = o.number)
		}
		i = !0
	}
	return { text: es(n, xa, e.join(n.lineBreak)), ranges: t, linewise: i }
}
let _o = null
dt.copy = dt.cut = (n, e) => {
	if (!pn(n.contentDOM, n.observer.selectionRange)) return !1
	const { text: t, ranges: i, linewise: r } = Pg(n.state)
	if (!t && !r) return !1
	;(_o = r ? t : null),
		e.type == 'cut' && !n.state.readOnly && n.dispatch({ changes: i, scrollIntoView: !0, userEvent: 'delete.cut' })
	const s = Au ? null : e.clipboardData
	return s ? (s.clearData(), s.setData('text/plain', t), !0) : (kg(n, t), !1)
}
const Mu = ft.define()
function Eu(n, e) {
	const t = []
	for (const i of n.facet(pu)) {
		const r = i(n, e)
		r && t.push(r)
	}
	return t.length ? n.update({ effects: t, annotations: Mu.of(!0) }) : null
}
function _u(n) {
	setTimeout(() => {
		const e = n.hasFocus
		if (e != n.inputState.notifiedFocused) {
			const t = Eu(n.state, e)
			t ? n.dispatch(t) : n.update([])
		}
	}, 10)
}
qe.focus = (n) => {
	;(n.inputState.lastFocusTime = Date.now()),
		!n.scrollDOM.scrollTop &&
			(n.inputState.lastScrollTop || n.inputState.lastScrollLeft) &&
			((n.scrollDOM.scrollTop = n.inputState.lastScrollTop), (n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft)),
		_u(n)
}
qe.blur = (n) => {
	n.observer.clearSelectionRange(), _u(n)
}
qe.compositionstart = qe.compositionupdate = (n) => {
	n.observer.editContext ||
		(n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0),
		n.inputState.composing < 0 && (n.inputState.composing = 0))
}
qe.compositionend = (n) => {
	n.observer.editContext ||
		((n.inputState.composing = -1),
		(n.inputState.compositionEndedAt = Date.now()),
		(n.inputState.compositionPendingKey = !0),
		(n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0),
		(n.inputState.compositionFirstChange = null),
		_.chrome && _.android
			? n.observer.flushSoon()
			: n.inputState.compositionPendingChange
				? Promise.resolve().then(() => n.observer.flush())
				: setTimeout(() => {
						n.inputState.composing < 0 && n.docView.hasComposition && n.update([])
					}, 50))
}
qe.contextmenu = (n) => {
	n.inputState.lastContextMenu = Date.now()
}
dt.beforeinput = (n, e) => {
	var t, i
	if (
		((e.inputType == 'insertText' || e.inputType == 'insertCompositionText') &&
			((n.inputState.insertingText = e.data), (n.inputState.insertingTextAt = Date.now())),
		e.inputType == 'insertReplacementText' && n.observer.editContext)
	) {
		const s = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData('text/plain'),
			o = e.getTargetRanges()
		if (s && o.length) {
			const a = o[0],
				l = n.posAtDOM(a.startContainer, a.startOffset),
				c = n.posAtDOM(a.endContainer, a.endOffset)
			return Qa(n, { from: l, to: c, insert: n.state.toText(s) }, null), !0
		}
	}
	let r
	if (
		_.chrome &&
		_.android &&
		(r = Zu.find((s) => s.inputType == e.inputType)) &&
		(n.observer.delayAndroidKey(r.key, r.keyCode), r.key == 'Backspace' || r.key == 'Delete')
	) {
		const s = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0
		setTimeout(() => {
			var o
			;(((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > s + 10 &&
				n.hasFocus &&
				(n.contentDOM.blur(), n.focus())
		}, 100)
	}
	return (
		_.ios && e.inputType == 'deleteContentForward' && n.observer.flushSoon(),
		_.safari &&
			e.inputType == 'insertText' &&
			n.inputState.composing >= 0 &&
			setTimeout(() => qe.compositionend(n, e), 20),
		!1
	)
}
const Ll = new Set()
function Tg(n) {
	Ll.has(n) || (Ll.add(n), n.addEventListener('copy', () => {}), n.addEventListener('cut', () => {}))
}
const Dl = ['pre-wrap', 'normal', 'pre-line', 'break-spaces']
let Li = !1
function Wl() {
	Li = !1
}
class Cg {
	constructor(e) {
		;(this.lineWrapping = e),
			(this.doc = H.empty),
			(this.heightSamples = {}),
			(this.lineHeight = 14),
			(this.charWidth = 7),
			(this.textHeight = 14),
			(this.lineLength = 30)
	}
	heightForGap(e, t) {
		let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1
		return (
			this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))),
			this.lineHeight * i
		)
	}
	heightForLine(e) {
		return this.lineWrapping
			? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
			: this.lineHeight
	}
	setDoc(e) {
		return (this.doc = e), this
	}
	mustRefreshForWrapping(e) {
		return Dl.indexOf(e) > -1 != this.lineWrapping
	}
	mustRefreshForHeights(e) {
		let t = !1
		for (let i = 0; i < e.length; i++) {
			const r = e[i]
			r < 0 ? i++ : this.heightSamples[Math.floor(r * 10)] || ((t = !0), (this.heightSamples[Math.floor(r * 10)] = !0))
		}
		return t
	}
	refresh(e, t, i, r, s, o) {
		const a = Dl.indexOf(e) > -1,
			l = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != a || Math.abs(i - this.charWidth) > 0.1
		if (
			((this.lineWrapping = a),
			(this.lineHeight = t),
			(this.charWidth = i),
			(this.textHeight = r),
			(this.lineLength = s),
			l)
		) {
			this.heightSamples = {}
			for (let c = 0; c < o.length; c++) {
				const h = o[c]
				h < 0 ? c++ : (this.heightSamples[Math.floor(h * 10)] = !0)
			}
		}
		return l
	}
}
class Zg {
	constructor(e, t) {
		;(this.from = e), (this.heights = t), (this.index = 0)
	}
	get more() {
		return this.index < this.heights.length
	}
}
class ct {
	constructor(e, t, i, r, s) {
		;(this.from = e), (this.length = t), (this.top = i), (this.height = r), (this._content = s)
	}
	get type() {
		return typeof this._content == 'number'
			? Be.Text
			: Array.isArray(this._content)
				? this._content
				: this._content.type
	}
	get to() {
		return this.from + this.length
	}
	get bottom() {
		return this.top + this.height
	}
	get widget() {
		return this._content instanceof fi ? this._content.widget : null
	}
	get widgetLineBreaks() {
		return typeof this._content == 'number' ? this._content : 0
	}
	join(e) {
		const t = (Array.isArray(this._content) ? this._content : [this]).concat(
			Array.isArray(e._content) ? e._content : [e],
		)
		return new ct(this.from, this.length + e.length, this.top, this.height + e.height, t)
	}
}
var ce = ((n) => (
	(n[(n.ByPos = 0)] = 'ByPos'), (n[(n.ByHeight = 1)] = 'ByHeight'), (n[(n.ByPosNoHeight = 2)] = 'ByPosNoHeight'), n
))(ce || (ce = {}))
const fr = 0.001
class Ie {
	constructor(e, t, i = 2) {
		;(this.length = e), (this.height = t), (this.flags = i)
	}
	get outdated() {
		return (this.flags & 2) > 0
	}
	set outdated(e) {
		this.flags = (e ? 2 : 0) | (this.flags & -3)
	}
	setHeight(e) {
		this.height != e && (Math.abs(this.height - e) > fr && (Li = !0), (this.height = e))
	}
	replace(e, t, i) {
		return Ie.of(i)
	}
	decomposeLeft(e, t) {
		t.push(this)
	}
	decomposeRight(e, t) {
		t.push(this)
	}
	applyChanges(e, t, i, r) {
		let s = this,
			o = i.doc
		for (let a = r.length - 1; a >= 0; a--) {
			let { fromA: l, toA: c, fromB: h, toB: u } = r[a],
				f = s.lineAt(l, ce.ByPosNoHeight, i.setDoc(t), 0, 0),
				d = f.to >= c ? f : s.lineAt(c, ce.ByPosNoHeight, i, 0, 0)
			for (u += d.to - c, c = d.to; a > 0 && f.from <= r[a - 1].toA; )
				(l = r[a - 1].fromA), (h = r[a - 1].fromB), a--, l < f.from && (f = s.lineAt(l, ce.ByPosNoHeight, i, 0, 0))
			;(h += f.from - l), (l = f.from)
			const O = ka.build(i.setDoc(o), e, h, u)
			s = Zr(s, s.replace(l, c, O))
		}
		return s.updateHeight(i, 0)
	}
	static empty() {
		return new He(0, 0, 0)
	}
	static of(e) {
		if (e.length == 1) return e[0]
		let t = 0,
			i = e.length,
			r = 0,
			s = 0
		for (;;)
			if (t == i)
				if (r > s * 2) {
					const a = e[t - 1]
					a.break ? e.splice(--t, 1, a.left, null, a.right) : e.splice(--t, 1, a.left, a.right),
						(i += 1 + a.break),
						(r -= a.size)
				} else if (s > r * 2) {
					const a = e[i]
					a.break ? e.splice(i, 1, a.left, null, a.right) : e.splice(i, 1, a.left, a.right),
						(i += 2 + a.break),
						(s -= a.size)
				} else break
			else if (r < s) {
				const a = e[t++]
				a && (r += a.size)
			} else {
				const a = e[--i]
				a && (s += a.size)
			}
		let o = 0
		return (
			e[t - 1] == null ? ((o = 1), t--) : e[t] == null && ((o = 1), i++),
			new Ag(Ie.of(e.slice(0, t)), o, Ie.of(e.slice(i)))
		)
	}
}
function Zr(n, e) {
	return n == e ? n : (n.constructor != e.constructor && (Li = !0), e)
}
Ie.prototype.size = 1
const Rg = U.replace({})
class zu extends Ie {
	constructor(e, t, i) {
		super(e, t), (this.deco = i), (this.spaceAbove = 0)
	}
	mainBlock(e, t) {
		return new ct(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
	}
	blockAt(e, t, i, r) {
		return this.spaceAbove && e < i + this.spaceAbove ? new ct(r, 0, i, this.spaceAbove, Rg) : this.mainBlock(i, r)
	}
	lineAt(e, t, i, r, s) {
		const o = this.mainBlock(r, s)
		return this.spaceAbove ? this.blockAt(0, i, r, s).join(o) : o
	}
	forEachLine(e, t, i, r, s, o) {
		e <= s + this.length && t >= s && o(this.lineAt(0, ce.ByPos, i, r, s))
	}
	setMeasuredHeight(e) {
		let t = e.heights[e.index++]
		t < 0 ? ((this.spaceAbove = -t), (t = e.heights[e.index++])) : (this.spaceAbove = 0), this.setHeight(t)
	}
	updateHeight(e, t = 0, i = !1, r) {
		return r && r.from <= t && r.more && this.setMeasuredHeight(r), (this.outdated = !1), this
	}
	toString() {
		return `block(${this.length})`
	}
}
class He extends zu {
	constructor(e, t, i) {
		super(e, t, null), (this.collapsed = 0), (this.widgetHeight = 0), (this.breaks = 0), (this.spaceAbove = i)
	}
	mainBlock(e, t) {
		return new ct(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
	}
	replace(e, t, i) {
		let r = i[0]
		return i.length == 1 &&
			(r instanceof He || (r instanceof Ce && r.flags & 4)) &&
			Math.abs(this.length - r.length) < 10
			? (r instanceof Ce ? (r = new He(r.length, this.height, this.spaceAbove)) : (r.height = this.height),
				this.outdated || (r.outdated = !1),
				r)
			: Ie.of(i)
	}
	updateHeight(e, t = 0, i = !1, r) {
		return (
			r && r.from <= t && r.more
				? this.setMeasuredHeight(r)
				: (i || this.outdated) &&
					((this.spaceAbove = 0),
					this.setHeight(
						Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight,
					)),
			(this.outdated = !1),
			this
		)
	}
	toString() {
		return `line(${this.length}${this.collapsed ? -this.collapsed : ''}${this.widgetHeight ? ':' + this.widgetHeight : ''})`
	}
}
class Ce extends Ie {
	constructor(e) {
		super(e, 0)
	}
	heightMetrics(e, t) {
		let i = e.doc.lineAt(t).number,
			r = e.doc.lineAt(t + this.length).number,
			s = r - i + 1,
			o,
			a = 0
		if (e.lineWrapping) {
			const l = Math.min(this.height, e.lineHeight * s)
			;(o = l / s), this.length > s + 1 && (a = (this.height - l) / (this.length - s - 1))
		} else o = this.height / s
		return { firstLine: i, lastLine: r, perLine: o, perChar: a }
	}
	blockAt(e, t, i, r) {
		const { firstLine: s, lastLine: o, perLine: a, perChar: l } = this.heightMetrics(t, r)
		if (t.lineWrapping) {
			const c = r + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)),
				h = t.doc.lineAt(c),
				u = a + h.length * l,
				f = Math.max(i, e - u / 2)
			return new ct(h.from, h.length, f, u, 0)
		}
		const c = Math.max(0, Math.min(o - s, Math.floor((e - i) / a))),
			{ from: h, length: u } = t.doc.line(s + c)
		return new ct(h, u, i + a * c, a, 0)
	}
	lineAt(e, t, i, r, s) {
		if (t == ce.ByHeight) return this.blockAt(e, i, r, s)
		if (t == ce.ByPosNoHeight) {
			const { from: d, to: O } = i.doc.lineAt(e)
			return new ct(d, O - d, 0, 0, 0)
		}
		const { firstLine: o, perLine: a, perChar: l } = this.heightMetrics(i, s),
			c = i.doc.lineAt(e),
			h = a + c.length * l,
			u = c.number - o,
			f = r + a * u + l * (c.from - s - u)
		return new ct(c.from, c.length, Math.max(r, Math.min(f, r + this.height - h)), h, 0)
	}
	forEachLine(e, t, i, r, s, o) {
		;(e = Math.max(e, s)), (t = Math.min(t, s + this.length))
		const { firstLine: a, perLine: l, perChar: c } = this.heightMetrics(i, s)
		for (let h = e, u = r; h <= t; ) {
			const f = i.doc.lineAt(h)
			if (h == e) {
				const O = f.number - a
				u += l * O + c * (e - s - O)
			}
			const d = l + c * f.length
			o(new ct(f.from, f.length, u, d, 0)), (u += d), (h = f.to + 1)
		}
	}
	replace(e, t, i) {
		const r = this.length - t
		if (r > 0) {
			const s = i[i.length - 1]
			s instanceof Ce ? (i[i.length - 1] = new Ce(s.length + r)) : i.push(null, new Ce(r - 1))
		}
		if (e > 0) {
			const s = i[0]
			s instanceof Ce ? (i[0] = new Ce(e + s.length)) : i.unshift(new Ce(e - 1), null)
		}
		return Ie.of(i)
	}
	decomposeLeft(e, t) {
		t.push(new Ce(e - 1), null)
	}
	decomposeRight(e, t) {
		t.push(null, new Ce(this.length - e - 1))
	}
	updateHeight(e, t = 0, i = !1, r) {
		const s = t + this.length
		if (r && r.from <= t + this.length && r.more) {
			let o = [],
				a = Math.max(t, r.from),
				l = -1
			for (r.from > t && o.push(new Ce(r.from - t - 1).updateHeight(e, t)); a <= s && r.more; ) {
				const h = e.doc.lineAt(a).length
				o.length && o.push(null)
				let u = r.heights[r.index++],
					f = 0
				u < 0 && ((f = -u), (u = r.heights[r.index++])), l == -1 ? (l = u) : Math.abs(u - l) >= fr && (l = -2)
				const d = new He(h, u, f)
				;(d.outdated = !1), o.push(d), (a += h + 1)
			}
			a <= s && o.push(null, new Ce(s - a).updateHeight(e, a))
			const c = Ie.of(o)
			return (
				(l < 0 || Math.abs(c.height - this.height) >= fr || Math.abs(l - this.heightMetrics(e, t).perLine) >= fr) &&
					(Li = !0),
				Zr(this, c)
			)
		}
		;(i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), (this.outdated = !1))
		return this
	}
	toString() {
		return `gap(${this.length})`
	}
}
class Ag extends Ie {
	constructor(e, t, i) {
		super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)),
			(this.left = e),
			(this.right = i),
			(this.size = e.size + i.size)
	}
	get break() {
		return this.flags & 1
	}
	blockAt(e, t, i, r) {
		const s = i + this.left.height
		return e < s ? this.left.blockAt(e, t, i, r) : this.right.blockAt(e, t, s, r + this.left.length + this.break)
	}
	lineAt(e, t, i, r, s) {
		const o = r + this.left.height,
			a = s + this.left.length + this.break,
			l = t == ce.ByHeight ? e < o : e < a,
			c = l ? this.left.lineAt(e, t, i, r, s) : this.right.lineAt(e, t, i, o, a)
		if (this.break || (l ? c.to < a : c.from > a)) return c
		const h = t == ce.ByPosNoHeight ? ce.ByPosNoHeight : ce.ByPos
		return l ? c.join(this.right.lineAt(a, h, i, o, a)) : this.left.lineAt(a, h, i, r, s).join(c)
	}
	forEachLine(e, t, i, r, s, o) {
		const a = r + this.left.height,
			l = s + this.left.length + this.break
		if (this.break) e < l && this.left.forEachLine(e, t, i, r, s, o), t >= l && this.right.forEachLine(e, t, i, a, l, o)
		else {
			const c = this.lineAt(l, ce.ByPos, i, r, s)
			e < c.from && this.left.forEachLine(e, c.from - 1, i, r, s, o),
				c.to >= e && c.from <= t && o(c),
				t > c.to && this.right.forEachLine(c.to + 1, t, i, a, l, o)
		}
	}
	replace(e, t, i) {
		const r = this.left.length + this.break
		if (t < r) return this.balanced(this.left.replace(e, t, i), this.right)
		if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - r, t - r, i))
		const s = []
		e > 0 && this.decomposeLeft(e, s)
		const o = s.length
		for (const a of i) s.push(a)
		if ((e > 0 && Yl(s, o - 1), t < this.length)) {
			const a = s.length
			this.decomposeRight(t, s), Yl(s, a)
		}
		return Ie.of(s)
	}
	decomposeLeft(e, t) {
		let i = this.left.length
		if (e <= i) return this.left.decomposeLeft(e, t)
		t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t)
	}
	decomposeRight(e, t) {
		const i = this.left.length,
			r = i + this.break
		if (e >= r) return this.right.decomposeRight(e - r, t)
		e < i && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right)
	}
	balanced(e, t) {
		return e.size > 2 * t.size || t.size > 2 * e.size
			? Ie.of(this.break ? [e, null, t] : [e, t])
			: ((this.left = Zr(this.left, e)),
				(this.right = Zr(this.right, t)),
				this.setHeight(e.height + t.height),
				(this.outdated = e.outdated || t.outdated),
				(this.size = e.size + t.size),
				(this.length = e.length + this.break + t.length),
				this)
	}
	updateHeight(e, t = 0, i = !1, r) {
		let { left: s, right: o } = this,
			a = t + s.length + this.break,
			l = null
		return (
			r && r.from <= t + s.length && r.more ? (l = s = s.updateHeight(e, t, i, r)) : s.updateHeight(e, t, i),
			r && r.from <= a + o.length && r.more ? (l = o = o.updateHeight(e, a, i, r)) : o.updateHeight(e, a, i),
			l ? this.balanced(s, o) : ((this.height = this.left.height + this.right.height), (this.outdated = !1), this)
		)
	}
	toString() {
		return this.left + (this.break ? ' ' : '-') + this.right
	}
}
function Yl(n, e) {
	let t, i
	n[e] == null &&
		(t = n[e - 1]) instanceof Ce &&
		(i = n[e + 1]) instanceof Ce &&
		n.splice(e - 1, 3, new Ce(t.length + 1 + i.length))
}
const jg = 5
class ka {
	constructor(e, t) {
		;(this.pos = e),
			(this.oracle = t),
			(this.nodes = []),
			(this.lineStart = -1),
			(this.lineEnd = -1),
			(this.covering = null),
			(this.writtenTo = e)
	}
	get isCovered() {
		return this.covering && this.nodes[this.nodes.length - 1] == this.covering
	}
	span(e, t) {
		if (this.lineStart > -1) {
			const i = Math.min(t, this.lineEnd),
				r = this.nodes[this.nodes.length - 1]
			r instanceof He
				? (r.length += i - this.pos)
				: (i > this.pos || !this.isCovered) && this.nodes.push(new He(i - this.pos, -1, 0)),
				(this.writtenTo = i),
				t > i && (this.nodes.push(null), this.writtenTo++, (this.lineStart = -1))
		}
		this.pos = t
	}
	point(e, t, i) {
		if (e < t || i.heightRelevant) {
			let r = i.widget ? i.widget.estimatedHeight : 0,
				s = i.widget ? i.widget.lineBreaks : 0
			r < 0 && (r = this.oracle.lineHeight)
			const o = t - e
			i.block ? this.addBlock(new zu(o, r, i)) : (o || s || r >= jg) && this.addLineDeco(r, s, o)
		} else t > e && this.span(e, t)
		this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
	}
	enterLine() {
		if (this.lineStart > -1) return
		const { from: e, to: t } = this.oracle.doc.lineAt(this.pos)
		;(this.lineStart = e),
			(this.lineEnd = t),
			this.writtenTo < e &&
				((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) &&
					this.nodes.push(this.blankContent(this.writtenTo, e - 1)),
				this.nodes.push(null)),
			this.pos > e && this.nodes.push(new He(this.pos - e, -1, 0)),
			(this.writtenTo = this.pos)
	}
	blankContent(e, t) {
		const i = new Ce(t - e)
		return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i
	}
	ensureLine() {
		this.enterLine()
		const e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null
		if (e instanceof He) return e
		const t = new He(0, -1, 0)
		return this.nodes.push(t), t
	}
	addBlock(e) {
		this.enterLine()
		const t = e.deco
		t && t.startSide > 0 && !this.isCovered && this.ensureLine(),
			this.nodes.push(e),
			(this.writtenTo = this.pos = this.pos + e.length),
			t && t.endSide > 0 && (this.covering = e)
	}
	addLineDeco(e, t, i) {
		const r = this.ensureLine()
		;(r.length += i),
			(r.collapsed += i),
			(r.widgetHeight = Math.max(r.widgetHeight, e)),
			(r.breaks += t),
			(this.writtenTo = this.pos = this.pos + i)
	}
	finish(e) {
		const t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1]
		this.lineStart > -1 && !(t instanceof He) && !this.isCovered
			? this.nodes.push(new He(0, -1, 0))
			: (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos))
		let i = e
		for (const r of this.nodes) r instanceof He && r.updateHeight(this.oracle, i), (i += r ? r.length : 1)
		return this.nodes
	}
	static build(e, t, i, r) {
		const s = new ka(i, e)
		return F.spans(t, i, r, s, 0), s.finish(i)
	}
}
function Xg(n, e, t) {
	const i = new Mg()
	return F.compare(n, e, t, i, 0), i.changes
}
class Mg {
	constructor() {
		this.changes = []
	}
	compareRange() {}
	comparePoint(e, t, i, r) {
		;(e < t || (i && i.heightRelevant) || (r && r.heightRelevant)) && Zi(e, t, this.changes, 5)
	}
}
function Eg(n, e) {
	let t = n.getBoundingClientRect(),
		i = n.ownerDocument,
		r = i.defaultView || window,
		s = Math.max(0, t.left),
		o = Math.min(r.innerWidth, t.right),
		a = Math.max(0, t.top),
		l = Math.min(r.innerHeight, t.bottom)
	for (let c = n.parentNode; c && c != i.body; )
		if (c.nodeType == 1) {
			const h = c,
				u = window.getComputedStyle(h)
			if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && u.overflow != 'visible') {
				const f = h.getBoundingClientRect()
				;(s = Math.max(s, f.left)),
					(o = Math.min(o, f.right)),
					(a = Math.max(a, f.top)),
					(l = Math.min(c == n.parentNode ? r.innerHeight : l, f.bottom))
			}
			c = u.position == 'absolute' || u.position == 'fixed' ? h.offsetParent : h.parentNode
		} else if (c.nodeType == 11) c = c.host
		else break
	return {
		left: s - t.left,
		right: Math.max(s, o) - t.left,
		top: a - (t.top + e),
		bottom: Math.max(a, l) - (t.top + e),
	}
}
function _g(n) {
	const e = n.getBoundingClientRect(),
		t = n.ownerDocument.defaultView || window
	return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0
}
function zg(n, e) {
	const t = n.getBoundingClientRect()
	return { left: 0, right: t.right - t.left, top: e, bottom: t.bottom - (t.top + e) }
}
class Cs {
	constructor(e, t, i, r) {
		;(this.from = e), (this.to = t), (this.size = i), (this.displaySize = r)
	}
	static same(e, t) {
		if (e.length != t.length) return !1
		for (let i = 0; i < e.length; i++) {
			const r = e[i],
				s = t[i]
			if (r.from != s.from || r.to != s.to || r.size != s.size) return !1
		}
		return !0
	}
	draw(e, t) {
		return U.replace({ widget: new Ig(this.displaySize * (t ? e.scaleY : e.scaleX), t) }).range(this.from, this.to)
	}
}
class Ig extends vi {
	constructor(e, t) {
		super(), (this.size = e), (this.vertical = t)
	}
	eq(e) {
		return e.size == this.size && e.vertical == this.vertical
	}
	toDOM() {
		const e = document.createElement('div')
		return (
			this.vertical
				? (e.style.height = this.size + 'px')
				: ((e.style.width = this.size + 'px'), (e.style.height = '2px'), (e.style.display = 'inline-block')),
			e
		)
	}
	get estimatedHeight() {
		return this.vertical ? this.size : -1
	}
}
class Nl {
	constructor(e, t) {
		;(this.view = e),
			(this.state = t),
			(this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }),
			(this.inView = !0),
			(this.paddingTop = 0),
			(this.paddingBottom = 0),
			(this.contentDOMWidth = 0),
			(this.contentDOMHeight = 0),
			(this.editorHeight = 0),
			(this.editorWidth = 0),
			(this.scaleX = 1),
			(this.scaleY = 1),
			(this.scrollOffset = 0),
			(this.scrolledToBottom = !1),
			(this.scrollAnchorPos = 0),
			(this.scrollAnchorHeight = -1),
			(this.scaler = Vl),
			(this.scrollTarget = null),
			(this.printing = !1),
			(this.mustMeasureContent = !0),
			(this.defaultTextDirection = be.LTR),
			(this.visibleRanges = []),
			(this.mustEnforceCursorAssoc = !1)
		const i = t.facet(wa).some((r) => typeof r != 'function' && r.class == 'cm-lineWrapping')
		;(this.heightOracle = new Cg(i)),
			(this.stateDeco = Bl(t)),
			(this.heightMap = Ie.empty().applyChanges(this.stateDeco, H.empty, this.heightOracle.setDoc(t.doc), [
				new it(0, 0, 0, t.doc.length),
			]))
		for (let r = 0; r < 2 && ((this.viewport = this.getViewport(0, null)), !!this.updateForViewport()); r++);
		this.updateViewportLines(),
			(this.lineGaps = this.ensureLineGaps([])),
			(this.lineGapDeco = U.set(this.lineGaps.map((r) => r.draw(this, !1)))),
			(this.scrollParent = e.scrollDOM),
			this.computeVisibleRanges()
	}
	updateForViewport() {
		const e = [this.viewport],
			{ main: t } = this.state.selection
		for (let i = 0; i <= 1; i++) {
			const r = i ? t.head : t.anchor
			if (!e.some(({ from: s, to: o }) => r >= s && r <= o)) {
				const { from: s, to: o } = this.lineBlockAt(r)
				e.push(new qn(s, o))
			}
		}
		return (this.viewports = e.sort((i, r) => i.from - r.from)), this.updateScaler()
	}
	updateScaler() {
		const e = this.scaler
		return (
			(this.scaler = this.heightMap.height <= 7e6 ? Vl : new Pa(this.heightOracle, this.heightMap, this.viewports)),
			e.eq(this.scaler) ? 0 : 2
		)
	}
	updateViewportLines() {
		;(this.viewportLines = []),
			this.heightMap.forEachLine(
				this.viewport.from,
				this.viewport.to,
				this.heightOracle.setDoc(this.state.doc),
				0,
				0,
				(e) => {
					this.viewportLines.push(hn(e, this.scaler))
				},
			)
	}
	update(e, t = null) {
		this.state = e.state
		const i = this.stateDeco
		this.stateDeco = Bl(this.state)
		const r = e.changedRanges,
			s = it.extendWithRanges(r, Xg(i, this.stateDeco, e ? e.changes : Qe.empty(this.state.doc.length))),
			o = this.heightMap.height,
			a = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset)
		Wl(),
			(this.heightMap = this.heightMap.applyChanges(
				this.stateDeco,
				e.startState.doc,
				this.heightOracle.setDoc(this.state.doc),
				s,
			)),
			(this.heightMap.height != o || Li) && (e.flags |= 2),
			a
				? ((this.scrollAnchorPos = e.changes.mapPos(a.from, -1)), (this.scrollAnchorHeight = a.top))
				: ((this.scrollAnchorPos = -1), (this.scrollAnchorHeight = o))
		let l = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport
		;((t && (t.range.head < l.from || t.range.head > l.to)) || !this.viewportIsAppropriate(l)) &&
			(l = this.getViewport(0, t))
		const c = l.from != this.viewport.from || l.to != this.viewport.to
		;(this.viewport = l),
			(e.flags |= this.updateForViewport()),
			(c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(),
			(this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
				this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))),
			(e.flags |= this.computeVisibleRanges(e.changes)),
			t && (this.scrollTarget = t),
			!this.mustEnforceCursorAssoc &&
				(e.selectionSet || e.focusChanged) &&
				e.view.lineWrapping &&
				e.state.selection.main.empty &&
				e.state.selection.main.assoc &&
				!e.state.facet(Zp) &&
				(this.mustEnforceCursorAssoc = !0)
	}
	measure() {
		const { view: e } = this,
			t = e.contentDOM,
			i = window.getComputedStyle(t),
			r = this.heightOracle,
			s = i.whiteSpace
		this.defaultTextDirection = i.direction == 'rtl' ? be.RTL : be.LTR
		let o = this.heightOracle.mustRefreshForWrapping(s) || this.mustMeasureContent === 'refresh',
			a = t.getBoundingClientRect(),
			l = o || this.mustMeasureContent || this.contentDOMHeight != a.height
		;(this.contentDOMHeight = a.height), (this.mustMeasureContent = !1)
		let c = 0,
			h = 0
		if (a.width && a.height) {
			const { scaleX: $, scaleY: y } = Jh(t, a)
			;(($ > 0.005 && Math.abs(this.scaleX - $) > 0.005) || (y > 0.005 && Math.abs(this.scaleY - y) > 0.005)) &&
				((this.scaleX = $), (this.scaleY = y), (c |= 16), (o = l = !0))
		}
		const u = (Number.parseInt(i.paddingTop) || 0) * this.scaleY,
			f = (Number.parseInt(i.paddingBottom) || 0) * this.scaleY
		;(this.paddingTop != u || this.paddingBottom != f) && ((this.paddingTop = u), (this.paddingBottom = f), (c |= 18)),
			this.editorWidth != e.scrollDOM.clientWidth &&
				(r.lineWrapping && (l = !0), (this.editorWidth = e.scrollDOM.clientWidth), (c |= 16))
		const d = eu(this.view.contentDOM, !1).y
		d != this.scrollParent && ((this.scrollParent = d), (this.scrollAnchorHeight = -1), (this.scrollOffset = 0))
		const O = this.getScrollOffset()
		this.scrollOffset != O && ((this.scrollAnchorHeight = -1), (this.scrollOffset = O)),
			(this.scrolledToBottom = iu(this.scrollParent || e.win))
		const p = (this.printing ? zg : Eg)(t, this.paddingTop),
			v = p.top - this.pixelViewport.top,
			m = p.bottom - this.pixelViewport.bottom
		this.pixelViewport = p
		const g = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left
		if ((g != this.inView && ((this.inView = g), g && (l = !0)), !this.inView && !this.scrollTarget && !_g(e.dom)))
			return 0
		const b = a.width
		if (
			((this.contentDOMWidth != b || this.editorHeight != e.scrollDOM.clientHeight) &&
				((this.contentDOMWidth = a.width), (this.editorHeight = e.scrollDOM.clientHeight), (c |= 16)),
			l)
		) {
			const $ = e.docView.measureVisibleLineHeights(this.viewport)
			if (
				(r.mustRefreshForHeights($) && (o = !0),
				o || (r.lineWrapping && Math.abs(b - this.contentDOMWidth) > r.charWidth))
			) {
				const { lineHeight: y, charWidth: Q, textHeight: P } = e.docView.measureTextSize()
				;(o = y > 0 && r.refresh(s, y, Q, P, Math.max(5, b / Q), $)), o && ((e.docView.minWidth = 0), (c |= 16))
			}
			v > 0 && m > 0 ? (h = Math.max(v, m)) : v < 0 && m < 0 && (h = Math.min(v, m)), Wl()
			for (const y of this.viewports) {
				const Q = y.from == this.viewport.from ? $ : e.docView.measureVisibleLineHeights(y)
				this.heightMap = (
					o
						? Ie.empty().applyChanges(this.stateDeco, H.empty, this.heightOracle, [new it(0, 0, 0, e.state.doc.length)])
						: this.heightMap
				).updateHeight(r, 0, o, new Zg(y.from, Q))
			}
			Li && (c |= 2)
		}
		const x =
			!this.viewportIsAppropriate(this.viewport, h) ||
			(this.scrollTarget &&
				(this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to))
		return (
			x &&
				(c & 2 && (c |= this.updateScaler()),
				(this.viewport = this.getViewport(h, this.scrollTarget)),
				(c |= this.updateForViewport())),
			(c & 2 || x) && this.updateViewportLines(),
			(this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
				this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)),
			(c |= this.computeVisibleRanges()),
			this.mustEnforceCursorAssoc && ((this.mustEnforceCursorAssoc = !1), e.docView.enforceCursorAssoc()),
			c
		)
	}
	get visibleTop() {
		return this.scaler.fromDOM(this.pixelViewport.top)
	}
	get visibleBottom() {
		return this.scaler.fromDOM(this.pixelViewport.bottom)
	}
	getViewport(e, t) {
		let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)),
			r = this.heightMap,
			s = this.heightOracle,
			{ visibleTop: o, visibleBottom: a } = this,
			l = new qn(r.lineAt(o - i * 1e3, ce.ByHeight, s, 0, 0).from, r.lineAt(a + (1 - i) * 1e3, ce.ByHeight, s, 0, 0).to)
		if (t) {
			const { head: c } = t.range
			if (c < l.from || c > l.to) {
				let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
					u = r.lineAt(c, ce.ByPos, s, 0, 0),
					f
				t.y == 'center'
					? (f = (u.top + u.bottom) / 2 - h / 2)
					: t.y == 'start' || (t.y == 'nearest' && c < l.from)
						? (f = u.top)
						: (f = u.bottom - h),
					(l = new qn(
						r.lineAt(f - 1e3 / 2, ce.ByHeight, s, 0, 0).from,
						r.lineAt(f + h + 1e3 / 2, ce.ByHeight, s, 0, 0).to,
					))
			}
		}
		return l
	}
	mapViewport(e, t) {
		const i = t.mapPos(e.from, -1),
			r = t.mapPos(e.to, 1)
		return new qn(
			this.heightMap.lineAt(i, ce.ByPos, this.heightOracle, 0, 0).from,
			this.heightMap.lineAt(r, ce.ByPos, this.heightOracle, 0, 0).to,
		)
	}
	viewportIsAppropriate({ from: e, to: t }, i = 0) {
		if (!this.inView) return !0
		const { top: r } = this.heightMap.lineAt(e, ce.ByPos, this.heightOracle, 0, 0),
			{ bottom: s } = this.heightMap.lineAt(t, ce.ByPos, this.heightOracle, 0, 0),
			{ visibleTop: o, visibleBottom: a } = this
		return (
			(e == 0 || r <= o - Math.max(10, Math.min(-i, 250))) &&
			(t == this.state.doc.length || s >= a + Math.max(10, Math.min(i, 250))) &&
			r > o - 2 * 1e3 &&
			s < a + 2 * 1e3
		)
	}
	mapLineGaps(e, t) {
		if (!e.length || t.empty) return e
		const i = []
		for (const r of e)
			t.touchesRange(r.from, r.to) || i.push(new Cs(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize))
		return i
	}
	ensureLineGaps(e, t) {
		const i = this.heightOracle.lineWrapping,
			r = i ? 1e4 : 2e3,
			s = r >> 1,
			o = r << 1
		if (this.defaultTextDirection != be.LTR && !i) return []
		const a = [],
			l = (h, u, f, d) => {
				if (u - h < s) return
				const O = this.state.selection.main,
					p = [O.from]
				O.empty || p.push(O.to)
				for (const m of p)
					if (m > h && m < u) {
						l(h, m - 10, f, d), l(m + 10, u, f, d)
						return
					}
				let v = Dg(
					e,
					(m) =>
						m.from >= f.from &&
						m.to <= f.to &&
						Math.abs(m.from - h) < s &&
						Math.abs(m.to - u) < s &&
						!p.some((g) => m.from < g && m.to > g),
				)
				if (!v) {
					if (u < f.to && t && i && t.visibleRanges.some((b) => b.from <= u && b.to >= u)) {
						const b = t.moveToLineBoundary(T.cursor(u), !1, !0).head
						b > h && (u = b)
					}
					const m = this.gapSize(f, h, u, d),
						g = i || m < 2e6 ? m : 2e6
					v = new Cs(h, u, m, g)
				}
				a.push(v)
			},
			c = (h) => {
				if (h.length < o || h.type != Be.Text) return
				const u = Lg(h.from, h.to, this.stateDeco)
				if (u.total < o) return
				let f = this.scrollTarget ? this.scrollTarget.range.head : null,
					d,
					O
				if (i) {
					let p = (r / this.heightOracle.lineLength) * this.heightOracle.lineHeight,
						v,
						m
					if (f != null) {
						const g = Un(u, f),
							b = ((this.visibleBottom - this.visibleTop) / 2 + p) / h.height
						;(v = g - b), (m = g + b)
					} else (v = (this.visibleTop - h.top - p) / h.height), (m = (this.visibleBottom - h.top + p) / h.height)
					;(d = Gn(u, v)), (O = Gn(u, m))
				} else {
					let p = u.total * this.heightOracle.charWidth,
						v = r * this.heightOracle.charWidth,
						m = 0
					if (p > 2e6)
						for (const y of e)
							y.from >= h.from &&
								y.from < h.to &&
								y.size != y.displaySize &&
								y.from * this.heightOracle.charWidth + m < this.pixelViewport.left &&
								(m = y.size - y.displaySize)
					let g = this.pixelViewport.left + m,
						b = this.pixelViewport.right + m,
						x,
						$
					if (f != null) {
						const y = Un(u, f),
							Q = ((b - g) / 2 + v) / p
						;(x = y - Q), ($ = y + Q)
					} else (x = (g - v) / p), ($ = (b + v) / p)
					;(d = Gn(u, x)), (O = Gn(u, $))
				}
				d > h.from && l(h.from, d, h, u), O < h.to && l(O, h.to, h, u)
			}
		for (const h of this.viewportLines) Array.isArray(h.type) ? h.type.forEach(c) : c(h)
		return a
	}
	gapSize(e, t, i, r) {
		const s = Un(r, i) - Un(r, t)
		return this.heightOracle.lineWrapping ? e.height * s : r.total * this.heightOracle.charWidth * s
	}
	updateLineGaps(e) {
		Cs.same(e, this.lineGaps) ||
			((this.lineGaps = e), (this.lineGapDeco = U.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping)))))
	}
	computeVisibleRanges(e) {
		let t = this.stateDeco
		this.lineGaps.length && (t = t.concat(this.lineGapDeco))
		const i = []
		F.spans(
			t,
			this.viewport.from,
			this.viewport.to,
			{
				span(s, o) {
					i.push({ from: s, to: o })
				},
				point() {},
			},
			20,
		)
		let r = 0
		if (i.length != this.visibleRanges.length) r = 12
		else
			for (let s = 0; s < i.length && !(r & 8); s++) {
				const o = this.visibleRanges[s],
					a = i[s]
				;(o.from != a.from || o.to != a.to) &&
					((r |= 4), (e && e.mapPos(o.from, -1) == a.from && e.mapPos(o.to, 1) == a.to) || (r |= 8))
			}
		return (this.visibleRanges = i), r
	}
	lineBlockAt(e) {
		return (
			(e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e)) ||
			hn(this.heightMap.lineAt(e, ce.ByPos, this.heightOracle, 0, 0), this.scaler)
		)
	}
	lineBlockAtHeight(e) {
		return (
			(e >= this.viewportLines[0].top &&
				e <= this.viewportLines[this.viewportLines.length - 1].bottom &&
				this.viewportLines.find((t) => t.top <= e && t.bottom >= e)) ||
			hn(this.heightMap.lineAt(this.scaler.fromDOM(e), ce.ByHeight, this.heightOracle, 0, 0), this.scaler)
		)
	}
	getScrollOffset() {
		return (
			(this.scrollParent == this.view.scrollDOM
				? this.scrollParent.scrollTop
				: (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) -
					this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
		)
	}
	scrollAnchorAt(e) {
		const t = this.lineBlockAtHeight(e + 8)
		return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0]
	}
	elementAtHeight(e) {
		return hn(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler)
	}
	get docHeight() {
		return this.scaler.toDOM(this.heightMap.height)
	}
	get contentHeight() {
		return this.docHeight + this.paddingTop + this.paddingBottom
	}
}
class qn {
	constructor(e, t) {
		;(this.from = e), (this.to = t)
	}
}
function Lg(n, e, t) {
	let i = [],
		r = n,
		s = 0
	return (
		F.spans(
			t,
			n,
			e,
			{
				span() {},
				point(o, a) {
					o > r && (i.push({ from: r, to: o }), (s += o - r)), (r = a)
				},
			},
			20,
		),
		r < e && (i.push({ from: r, to: e }), (s += e - r)),
		{ total: s, ranges: i }
	)
}
function Gn({ total: n, ranges: e }, t) {
	if (t <= 0) return e[0].from
	if (t >= 1) return e[e.length - 1].to
	let i = Math.floor(n * t)
	for (let r = 0; ; r++) {
		const { from: s, to: o } = e[r],
			a = o - s
		if (i <= a) return s + i
		i -= a
	}
}
function Un(n, e) {
	let t = 0
	for (const { from: i, to: r } of n.ranges) {
		if (e <= r) {
			t += e - i
			break
		}
		t += r - i
	}
	return t / n.total
}
function Dg(n, e) {
	for (const t of n) if (e(t)) return t
}
const Vl = {
	toDOM(n) {
		return n
	},
	fromDOM(n) {
		return n
	},
	scale: 1,
	eq(n) {
		return n == this
	},
}
function Bl(n) {
	const e = n.facet(Hr).filter((i) => typeof i != 'function'),
		t = n.facet($a).filter((i) => typeof i != 'function')
	return t.length && e.push(F.join(t)), e
}
class Pa {
	constructor(e, t, i) {
		let r = 0,
			s = 0,
			o = 0
		;(this.viewports = i.map(({ from: a, to: l }) => {
			const c = t.lineAt(a, ce.ByPos, e, 0, 0).top,
				h = t.lineAt(l, ce.ByPos, e, 0, 0).bottom
			return (r += h - c), { from: a, to: l, top: c, bottom: h, domTop: 0, domBottom: 0 }
		})),
			(this.scale = (7e6 - r) / (t.height - r))
		for (const a of this.viewports)
			(a.domTop = o + (a.top - s) * this.scale), (o = a.domBottom = a.domTop + (a.bottom - a.top)), (s = a.bottom)
	}
	toDOM(e) {
		for (let t = 0, i = 0, r = 0; ; t++) {
			const s = t < this.viewports.length ? this.viewports[t] : null
			if (!s || e < s.top) return r + (e - i) * this.scale
			if (e <= s.bottom) return s.domTop + (e - s.top)
			;(i = s.bottom), (r = s.domBottom)
		}
	}
	fromDOM(e) {
		for (let t = 0, i = 0, r = 0; ; t++) {
			const s = t < this.viewports.length ? this.viewports[t] : null
			if (!s || e < s.domTop) return i + (e - r) / this.scale
			if (e <= s.domBottom) return s.top + (e - s.domTop)
			;(i = s.bottom), (r = s.domBottom)
		}
	}
	eq(e) {
		return e instanceof Pa
			? this.scale == e.scale &&
					this.viewports.length == e.viewports.length &&
					this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to)
			: !1
	}
}
function hn(n, e) {
	if (e.scale == 1) return n
	const t = e.toDOM(n.top),
		i = e.toDOM(n.bottom)
	return new ct(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((r) => hn(r, e)) : n._content)
}
const Fn = W.define({ combine: (n) => n.join(' ') }),
	zo = W.define({ combine: (n) => n.indexOf(!0) > -1 }),
	Io = Ht.newName(),
	Iu = Ht.newName(),
	Lu = Ht.newName(),
	Du = { '&light': '.' + Iu, '&dark': '.' + Lu }
function Lo(n, e, t) {
	return new Ht(e, {
		finish(i) {
			return /&/.test(i)
				? i.replace(/&\w*/, (r) => {
						if (r == '&') return n
						if (!t || !t[r]) throw new RangeError(`Unsupported selector: ${r}`)
						return t[r]
					})
				: n + ' ' + i
		},
	})
}
const Wg = Lo(
		'.' + Io,
		{
			'&': {
				position: 'relative !important',
				boxSizing: 'border-box',
				'&.cm-focused': { outline: '1px dotted #212121' },
				display: 'flex !important',
				flexDirection: 'column',
			},
			'.cm-scroller': {
				display: 'flex !important',
				alignItems: 'flex-start !important',
				fontFamily: 'monospace',
				lineHeight: 1.4,
				height: '100%',
				overflowX: 'auto',
				position: 'relative',
				zIndex: 0,
				overflowAnchor: 'none',
			},
			'.cm-content': {
				margin: 0,
				flexGrow: 2,
				flexShrink: 0,
				display: 'block',
				whiteSpace: 'pre',
				wordWrap: 'normal',
				boxSizing: 'border-box',
				minHeight: '100%',
				padding: '4px 0',
				outline: 'none',
				'&[contenteditable=true]': { WebkitUserModify: 'read-write-plaintext-only' },
			},
			'.cm-lineWrapping': {
				whiteSpace_fallback: 'pre-wrap',
				whiteSpace: 'break-spaces',
				wordBreak: 'break-word',
				overflowWrap: 'anywhere',
				flexShrink: 1,
			},
			'&light .cm-content': { caretColor: 'black' },
			'&dark .cm-content': { caretColor: 'white' },
			'.cm-line': { display: 'block', padding: '0 2px 0 6px' },
			'.cm-layer': { position: 'absolute', left: 0, top: 0, contain: 'size style', '& > *': { position: 'absolute' } },
			'&light .cm-selectionBackground': { background: '#d9d9d9' },
			'&dark .cm-selectionBackground': { background: '#222' },
			'&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': { background: '#d7d4f0' },
			'&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': { background: '#233' },
			'.cm-cursorLayer': { pointerEvents: 'none' },
			'&.cm-focused > .cm-scroller > .cm-cursorLayer': { animation: 'steps(1) cm-blink 1.2s infinite' },
			'@keyframes cm-blink': { '0%': {}, '50%': { opacity: 0 }, '100%': {} },
			'@keyframes cm-blink2': { '0%': {}, '50%': { opacity: 0 }, '100%': {} },
			'.cm-cursor, .cm-dropCursor': { borderLeft: '1.2px solid black', marginLeft: '-0.6px', pointerEvents: 'none' },
			'.cm-cursor': { display: 'none' },
			'&dark .cm-cursor': { borderLeftColor: '#ddd' },
			'.cm-selectionHandle': { backgroundColor: 'currentColor', width: '1.5px' },
			'.cm-selectionHandle-start::before, .cm-selectionHandle-end::before': {
				content: '""',
				backgroundColor: 'inherit',
				borderRadius: '50%',
				width: '8px',
				height: '8px',
				position: 'absolute',
				left: '-3.25px',
			},
			'.cm-selectionHandle-start::before': { top: '-8px' },
			'.cm-selectionHandle-end::before': { bottom: '-8px' },
			'.cm-dropCursor': { position: 'absolute' },
			'&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor': { display: 'block' },
			'.cm-iso': { unicodeBidi: 'isolate' },
			'.cm-announced': { position: 'fixed', top: '-10000px' },
			'@media print': { '.cm-announced': { display: 'none' } },
			'&light .cm-activeLine': { backgroundColor: '#cceeff44' },
			'&dark .cm-activeLine': { backgroundColor: '#99eeff33' },
			'&light .cm-specialChar': { color: 'red' },
			'&dark .cm-specialChar': { color: '#f78' },
			'.cm-gutters': { flexShrink: 0, display: 'flex', height: '100%', boxSizing: 'border-box', zIndex: 200 },
			'.cm-gutters-before': { insetInlineStart: 0 },
			'.cm-gutters-after': { insetInlineEnd: 0 },
			'&light .cm-gutters': {
				backgroundColor: '#f5f5f5',
				color: '#6c6c6c',
				border: '0px solid #ddd',
				'&.cm-gutters-before': { borderRightWidth: '1px' },
				'&.cm-gutters-after': { borderLeftWidth: '1px' },
			},
			'&dark .cm-gutters': { backgroundColor: '#333338', color: '#ccc' },
			'.cm-gutter': {
				display: 'flex !important',
				flexDirection: 'column',
				flexShrink: 0,
				boxSizing: 'border-box',
				minHeight: '100%',
				overflow: 'hidden',
			},
			'.cm-gutterElement': { boxSizing: 'border-box' },
			'.cm-lineNumbers .cm-gutterElement': {
				padding: '0 3px 0 5px',
				minWidth: '20px',
				textAlign: 'right',
				whiteSpace: 'nowrap',
			},
			'&light .cm-activeLineGutter': { backgroundColor: '#e2f2ff' },
			'&dark .cm-activeLineGutter': { backgroundColor: '#222227' },
			'.cm-panels': { boxSizing: 'border-box', position: 'sticky', left: 0, right: 0, zIndex: 300 },
			'&light .cm-panels': { backgroundColor: '#f5f5f5', color: 'black' },
			'&light .cm-panels-top': { borderBottom: '1px solid #ddd' },
			'&light .cm-panels-bottom': { borderTop: '1px solid #ddd' },
			'&dark .cm-panels': { backgroundColor: '#333338', color: 'white' },
			'.cm-dialog': { padding: '2px 19px 4px 6px', position: 'relative', '& label': { fontSize: '80%' } },
			'.cm-dialog-close': {
				position: 'absolute',
				top: '3px',
				right: '4px',
				backgroundColor: 'inherit',
				border: 'none',
				font: 'inherit',
				fontSize: '14px',
				padding: '0',
			},
			'.cm-tab': { display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' },
			'.cm-widgetBuffer': { verticalAlign: 'text-top', height: '1em', width: 0, display: 'inline' },
			'.cm-placeholder': { color: '#888', display: 'inline-block', verticalAlign: 'top', userSelect: 'none' },
			'.cm-highlightSpace': {
				backgroundImage: 'radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)',
				backgroundPosition: 'center',
			},
			'.cm-highlightTab': {
				backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
				backgroundSize: 'auto 100%',
				backgroundPosition: 'right 90%',
				backgroundRepeat: 'no-repeat',
			},
			'.cm-trailingSpace': { backgroundColor: '#ff332255' },
			'.cm-button': {
				verticalAlign: 'middle',
				color: 'inherit',
				fontSize: '70%',
				padding: '.2em 1em',
				borderRadius: '1px',
			},
			'&light .cm-button': {
				backgroundImage: 'linear-gradient(#eff1f5, #d9d9df)',
				border: '1px solid #888',
				'&:active': { backgroundImage: 'linear-gradient(#b4b4b4, #d0d3d6)' },
			},
			'&dark .cm-button': {
				backgroundImage: 'linear-gradient(#393939, #111)',
				border: '1px solid #888',
				'&:active': { backgroundImage: 'linear-gradient(#111, #333)' },
			},
			'.cm-textfield': {
				verticalAlign: 'middle',
				color: 'inherit',
				fontSize: '70%',
				border: '1px solid silver',
				padding: '.2em .5em',
			},
			'&light .cm-textfield': { backgroundColor: 'white' },
			'&dark .cm-textfield': { border: '1px solid #555', backgroundColor: 'inherit' },
		},
		Du,
	),
	Yg = { childList: !0, characterData: !0, subtree: !0, attributes: !0, characterDataOldValue: !0 },
	Zs = _.ie && _.ie_version <= 11
class Ng {
	constructor(e) {
		;(this.view = e),
			(this.active = !1),
			(this.editContext = null),
			(this.selectionRange = new vp()),
			(this.selectionChanged = !1),
			(this.delayedFlush = -1),
			(this.resizeTimeout = -1),
			(this.queue = []),
			(this.delayedAndroidKey = null),
			(this.flushingAndroidKey = -1),
			(this.lastChange = 0),
			(this.scrollTargets = []),
			(this.intersection = null),
			(this.resizeScroll = null),
			(this.intersecting = !1),
			(this.gapIntersection = null),
			(this.gaps = []),
			(this.printQuery = null),
			(this.parentCheck = -1),
			(this.dom = e.contentDOM),
			(this.observer = new MutationObserver((t) => {
				for (const i of t) this.queue.push(i)
				;((_.ie && _.ie_version <= 11) || (_.ios && e.composing)) &&
				t.some(
					(i) =>
						(i.type == 'childList' && i.removedNodes.length) ||
						(i.type == 'characterData' && i.oldValue.length > i.target.nodeValue.length),
				)
					? this.flushSoon()
					: this.flush()
			})),
			window.EditContext &&
				_.android &&
				e.constructor.EDIT_CONTEXT !== !1 &&
				!(_.chrome && _.chrome_version < 126) &&
				((this.editContext = new Bg(e)),
				e.state.facet(Et) && (e.contentDOM.editContext = this.editContext.editContext)),
			Zs &&
				(this.onCharData = (t) => {
					this.queue.push({ target: t.target, type: 'characterData', oldValue: t.prevValue }), this.flushSoon()
				}),
			(this.onSelectionChange = this.onSelectionChange.bind(this)),
			(this.onResize = this.onResize.bind(this)),
			(this.onPrint = this.onPrint.bind(this)),
			(this.onScroll = this.onScroll.bind(this)),
			window.matchMedia && (this.printQuery = window.matchMedia('print')),
			typeof ResizeObserver == 'function' &&
				((this.resizeScroll = new ResizeObserver(() => {
					var t
					;((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 &&
						this.onResize()
				})),
				this.resizeScroll.observe(e.scrollDOM)),
			this.addWindowListeners((this.win = e.win)),
			this.start(),
			typeof IntersectionObserver == 'function' &&
				((this.intersection = new IntersectionObserver(
					(t) => {
						this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)),
							t.length > 0 &&
								t[t.length - 1].intersectionRatio > 0 != this.intersecting &&
								((this.intersecting = !this.intersecting),
								this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent('Event')))
					},
					{ threshold: [0, 0.001] },
				)),
				this.intersection.observe(this.dom),
				(this.gapIntersection = new IntersectionObserver((t) => {
					t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent('Event'))
				}, {}))),
			this.listenForScroll(),
			this.readSelectionRange()
	}
	onScrollChanged(e) {
		this.view.inputState.runHandlers('scroll', e), this.intersecting && this.view.measure()
	}
	onScroll(e) {
		this.intersecting && this.flush(!1),
			this.editContext && this.view.requestMeasure(this.editContext.measureReq),
			this.onScrollChanged(e)
	}
	onResize() {
		this.resizeTimeout < 0 &&
			(this.resizeTimeout = setTimeout(() => {
				;(this.resizeTimeout = -1), this.view.requestMeasure()
			}, 50))
	}
	onPrint(e) {
		;((e.type == 'change' || !e.type) && !e.matches) ||
			((this.view.viewState.printing = !0),
			this.view.measure(),
			setTimeout(() => {
				;(this.view.viewState.printing = !1), this.view.requestMeasure()
			}, 500))
	}
	updateGaps(e) {
		if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
			this.gapIntersection.disconnect()
			for (const t of e) this.gapIntersection.observe(t)
			this.gaps = e
		}
	}
	onSelectionChange(e) {
		const t = this.selectionChanged
		if (!this.readSelectionRange() || this.delayedAndroidKey) return
		const { view: i } = this,
			r = this.selectionRange
		if (i.state.facet(Et) ? i.root.activeElement != this.dom : !pn(this.dom, r)) return
		const s = r.anchorNode && i.docView.tile.nearest(r.anchorNode)
		if (s && s.isWidget() && s.widget.ignoreEvent(e)) {
			t || (this.selectionChanged = !1)
			return
		}
		;((_.ie && _.ie_version <= 11) || (_.android && _.chrome)) &&
		!i.state.selection.main.empty &&
		r.focusNode &&
		gn(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset)
			? this.flushSoon()
			: this.flush(!1)
	}
	readSelectionRange() {
		const { view: e } = this,
			t = $n(e.root)
		if (!t) return !1
		const i = (_.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Vg(this.view, t)) || t
		if (!i || this.selectionRange.eq(i)) return !1
		const r = pn(this.dom, i)
		return r &&
			!this.selectionChanged &&
			e.inputState.lastFocusTime > Date.now() - 200 &&
			e.inputState.lastTouchTime < Date.now() - 300 &&
			yp(this.dom, i)
			? ((this.view.inputState.lastFocusTime = 0), e.docView.updateSelection(), !1)
			: (this.selectionRange.setRange(i), r && (this.selectionChanged = !0), !0)
	}
	setSelectionRange(e, t) {
		this.selectionRange.set(e.node, e.offset, t.node, t.offset), (this.selectionChanged = !1)
	}
	clearSelectionRange() {
		this.selectionRange.set(null, 0, null, 0)
	}
	listenForScroll() {
		this.parentCheck = -1
		let e = 0,
			t = null
		for (let i = this.dom; i; )
			if (i.nodeType == 1)
				!t && e < this.scrollTargets.length && this.scrollTargets[e] == i
					? e++
					: t || (t = this.scrollTargets.slice(0, e)),
					t && t.push(i),
					(i = i.assignedSlot || i.parentNode)
			else if (i.nodeType == 11) i = i.host
			else break
		if ((e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t)) {
			for (const i of this.scrollTargets) i.removeEventListener('scroll', this.onScroll)
			for (const i of (this.scrollTargets = t)) i.addEventListener('scroll', this.onScroll)
		}
	}
	ignore(e) {
		if (!this.active) return e()
		try {
			return this.stop(), e()
		} finally {
			this.start(), this.clear()
		}
	}
	start() {
		this.active ||
			(this.observer.observe(this.dom, Yg),
			Zs && this.dom.addEventListener('DOMCharacterDataModified', this.onCharData),
			(this.active = !0))
	}
	stop() {
		this.active &&
			((this.active = !1),
			this.observer.disconnect(),
			Zs && this.dom.removeEventListener('DOMCharacterDataModified', this.onCharData))
	}
	clear() {
		this.processRecords(), (this.queue.length = 0), (this.selectionChanged = !1)
	}
	delayAndroidKey(e, t) {
		var i
		if (!this.delayedAndroidKey) {
			const r = () => {
				const s = this.delayedAndroidKey
				s &&
					(this.clearDelayedAndroidKey(),
					(this.view.inputState.lastKeyCode = s.keyCode),
					(this.view.inputState.lastKeyTime = Date.now()),
					!this.flush() && s.force && Ri(this.dom, s.key, s.keyCode))
			}
			this.flushingAndroidKey = this.view.win.requestAnimationFrame(r)
		}
		;(!this.delayedAndroidKey || e == 'Enter') &&
			(this.delayedAndroidKey = {
				key: e,
				keyCode: t,
				force:
					this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force),
			})
	}
	clearDelayedAndroidKey() {
		this.win.cancelAnimationFrame(this.flushingAndroidKey),
			(this.delayedAndroidKey = null),
			(this.flushingAndroidKey = -1)
	}
	flushSoon() {
		this.delayedFlush < 0 &&
			(this.delayedFlush = this.view.win.requestAnimationFrame(() => {
				;(this.delayedFlush = -1), this.flush()
			}))
	}
	forceFlush() {
		this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), (this.delayedFlush = -1)),
			this.flush()
	}
	pendingRecords() {
		for (const e of this.observer.takeRecords()) this.queue.push(e)
		return this.queue
	}
	processRecords() {
		const e = this.pendingRecords()
		e.length && (this.queue = [])
		let t = -1,
			i = -1,
			r = !1
		for (const s of e) {
			const o = this.readMutation(s)
			o &&
				(o.typeOver && (r = !0),
				t == -1 ? ({ from: t, to: i } = o) : ((t = Math.min(o.from, t)), (i = Math.max(o.to, i))))
		}
		return { from: t, to: i, typeOver: r }
	}
	readChange() {
		const { from: e, to: t, typeOver: i } = this.processRecords(),
			r = this.selectionChanged && pn(this.dom, this.selectionRange)
		if (e < 0 && !r) return null
		e > -1 && (this.lastChange = Date.now()), (this.view.inputState.lastFocusTime = 0), (this.selectionChanged = !1)
		const s = new cg(this.view, e, t, i)
		return (this.view.docView.domChanged = { newSel: s.newSel ? s.newSel.main : null }), s
	}
	flush(e = !0) {
		if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1
		e && this.readSelectionRange()
		const t = this.readChange()
		if (!t) return this.view.requestMeasure(), !1
		const i = this.view.state,
			r = Tu(this.view, t)
		return (
			this.view.state == i &&
				(t.domChanged || (t.newSel && !Cr(this.view.state.selection, t.newSel.main))) &&
				this.view.update([]),
			r
		)
	}
	readMutation(e) {
		const t = this.view.docView.tile.nearest(e.target)
		if (!t || t.isWidget()) return null
		if ((t.markDirty(e.type == 'attributes'), e.type == 'childList')) {
			const i = ql(t, e.previousSibling || e.target.previousSibling, -1),
				r = ql(t, e.nextSibling || e.target.nextSibling, 1)
			return { from: i ? t.posAfter(i) : t.posAtStart, to: r ? t.posBefore(r) : t.posAtEnd, typeOver: !1 }
		}
		return e.type == 'characterData'
			? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue }
			: null
	}
	setWindow(e) {
		e != this.win && (this.removeWindowListeners(this.win), (this.win = e), this.addWindowListeners(this.win))
	}
	addWindowListeners(e) {
		e.addEventListener('resize', this.onResize),
			this.printQuery
				? this.printQuery.addEventListener
					? this.printQuery.addEventListener('change', this.onPrint)
					: this.printQuery.addListener(this.onPrint)
				: e.addEventListener('beforeprint', this.onPrint),
			e.addEventListener('scroll', this.onScroll),
			e.document.addEventListener('selectionchange', this.onSelectionChange)
	}
	removeWindowListeners(e) {
		e.removeEventListener('scroll', this.onScroll),
			e.removeEventListener('resize', this.onResize),
			this.printQuery
				? this.printQuery.removeEventListener
					? this.printQuery.removeEventListener('change', this.onPrint)
					: this.printQuery.removeListener(this.onPrint)
				: e.removeEventListener('beforeprint', this.onPrint),
			e.document.removeEventListener('selectionchange', this.onSelectionChange)
	}
	update(e) {
		this.editContext &&
			(this.editContext.update(e),
			e.startState.facet(Et) != e.state.facet(Et) &&
				(e.view.contentDOM.editContext = e.state.facet(Et) ? this.editContext.editContext : null))
	}
	destroy() {
		var e, t, i
		this.stop(),
			(e = this.intersection) === null || e === void 0 || e.disconnect(),
			(t = this.gapIntersection) === null || t === void 0 || t.disconnect(),
			(i = this.resizeScroll) === null || i === void 0 || i.disconnect()
		for (const r of this.scrollTargets) r.removeEventListener('scroll', this.onScroll)
		this.removeWindowListeners(this.win),
			clearTimeout(this.parentCheck),
			clearTimeout(this.resizeTimeout),
			this.win.cancelAnimationFrame(this.delayedFlush),
			this.win.cancelAnimationFrame(this.flushingAndroidKey),
			this.editContext && ((this.view.contentDOM.editContext = null), this.editContext.destroy())
	}
}
function ql(n, e, t) {
	for (; e; ) {
		const i = ge.get(e)
		if (i && i.parent == n) return i
		const r = e.parentNode
		e = r != n.dom ? r : t > 0 ? e.nextSibling : e.previousSibling
	}
	return null
}
function Gl(n, e) {
	let t = e.startContainer,
		i = e.startOffset,
		r = e.endContainer,
		s = e.endOffset,
		o = n.docView.domAtPos(n.state.selection.main.anchor, 1)
	return (
		gn(o.node, o.offset, r, s) && ([t, i, r, s] = [r, s, t, i]),
		{ anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s }
	)
}
function Vg(n, e) {
	if (e.getComposedRanges) {
		const r = e.getComposedRanges(n.root)[0]
		if (r) return Gl(n, r)
	}
	let t = null
	function i(r) {
		r.preventDefault(), r.stopImmediatePropagation(), (t = r.getTargetRanges()[0])
	}
	return (
		n.contentDOM.addEventListener('beforeinput', i, !0),
		n.dom.ownerDocument.execCommand('indent'),
		n.contentDOM.removeEventListener('beforeinput', i, !0),
		t ? Gl(n, t) : null
	)
}
class Bg {
	constructor(e) {
		;(this.from = 0),
			(this.to = 0),
			(this.pendingContextChange = null),
			(this.handlers = Object.create(null)),
			(this.composing = null),
			this.resetRange(e.state)
		const t = (this.editContext = new window.EditContext({
			text: e.state.doc.sliceString(this.from, this.to),
			selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
			selectionEnd: this.toContextPos(e.state.selection.main.head),
		}))
		;(this.handlers.textupdate = (i) => {
			let r = e.state.selection.main,
				{ anchor: s, head: o } = r,
				a = this.toEditorPos(i.updateRangeStart),
				l = this.toEditorPos(i.updateRangeEnd)
			e.inputState.composing >= 0 &&
				!this.composing &&
				(this.composing = { contextBase: i.updateRangeStart, editorBase: a, drifted: !1 })
			const c = l - a > i.text.length
			a == this.from && s < this.from ? (a = s) : l == this.to && s > this.to && (l = s)
			const h = Cu(e.state.sliceDoc(a, l), i.text, (c ? r.from : r.to) - a, c ? 'end' : null)
			if (!h) {
				const f = T.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd))
				Cr(f, r) || e.dispatch({ selection: f, userEvent: 'select' })
				return
			}
			let u = {
				from: h.from + a,
				to: h.toA + a,
				insert: H.of(
					i.text.slice(h.from, h.toB).split(`
`),
				),
			}
			if (
				((_.mac || _.android) &&
					u.from == o - 1 &&
					/^\. ?$/.test(i.text) &&
					e.contentDOM.getAttribute('autocorrect') == 'off' &&
					(u = { from: a, to: l, insert: H.of([i.text.replace('.', ' ')]) }),
				(this.pendingContextChange = u),
				!e.state.readOnly)
			) {
				const f = this.to - this.from + (u.to - u.from + u.insert.length)
				Qa(e, u, T.single(this.toEditorPos(i.selectionStart, f), this.toEditorPos(i.selectionEnd, f)))
			}
			this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)),
				u.from < u.to &&
					!u.insert.length &&
					e.inputState.composing >= 0 &&
					!/[\\p{Alphabetic}\\p{Number}_]/.test(
						t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1)),
					) &&
					this.handlers.compositionend(i)
		}),
			(this.handlers.characterboundsupdate = (i) => {
				let r = [],
					s = null
				for (let o = this.toEditorPos(i.rangeStart), a = this.toEditorPos(i.rangeEnd); o < a; o++) {
					const l = e.coordsForChar(o)
					;(s = (l && new DOMRect(l.left, l.top, l.right - l.left, l.bottom - l.top)) || s || new DOMRect()), r.push(s)
				}
				t.updateCharacterBounds(i.rangeStart, r)
			}),
			(this.handlers.textformatupdate = (i) => {
				const r = []
				for (const s of i.getTextFormats()) {
					const o = s.underlineStyle,
						a = s.underlineThickness
					if (!/none/i.test(o) && !/none/i.test(a)) {
						const l = this.toEditorPos(s.rangeStart),
							c = this.toEditorPos(s.rangeEnd)
						if (l < c) {
							const h = `text-decoration: underline ${/^[a-z]/.test(o) ? o + ' ' : o == 'Dashed' ? 'dashed ' : o == 'Squiggle' ? 'wavy ' : ''}${/thin/i.test(a) ? 1 : 2}px`
							r.push(U.mark({ attributes: { style: h } }).range(l, c))
						}
					}
				}
				e.dispatch({ effects: vu.of(U.set(r)) })
			}),
			(this.handlers.compositionstart = () => {
				e.inputState.composing < 0 && ((e.inputState.composing = 0), (e.inputState.compositionFirstChange = !0))
			}),
			(this.handlers.compositionend = () => {
				if (((e.inputState.composing = -1), (e.inputState.compositionFirstChange = null), this.composing)) {
					const { drifted: i } = this.composing
					;(this.composing = null), i && this.reset(e.state)
				}
			})
		for (const i in this.handlers) t.addEventListener(i, this.handlers[i])
		this.measureReq = {
			read: (i) => {
				this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect())
				const r = $n(i.root)
				r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect())
			},
		}
	}
	applyEdits(e) {
		let t = 0,
			i = !1,
			r = this.pendingContextChange
		return (
			e.changes.iterChanges((s, o, a, l, c) => {
				if (i) return
				const h = c.length - (o - s)
				if (r && o >= r.to)
					if (r.from == s && r.to == o && r.insert.eq(c)) {
						;(r = this.pendingContextChange = null), (t += h), (this.to += h)
						return
					} else (r = null), this.revertPending(e.state)
				if (((s += t), (o += t), o <= this.from)) (this.from += h), (this.to += h)
				else if (s < this.to) {
					if (s < this.from || o > this.to || this.to - this.from + c.length > 3e4) {
						i = !0
						return
					}
					this.editContext.updateText(this.toContextPos(s), this.toContextPos(o), c.toString()), (this.to += h)
				}
				t += h
			}),
			r && !i && this.revertPending(e.state),
			!i
		)
	}
	update(e) {
		const t = this.pendingContextChange,
			i = e.startState.selection.main
		this.composing &&
		(this.composing.drifted ||
			(!e.changes.touchesRange(i.from, i.to) &&
				e.transactions.some((r) => !r.isUserEvent('input.type') && r.changes.touchesRange(this.from, this.to))))
			? ((this.composing.drifted = !0), (this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)))
			: !this.applyEdits(e) || !this.rangeIsValid(e.state)
				? ((this.pendingContextChange = null), this.reset(e.state))
				: (e.docChanged || e.selectionSet || t) && this.setSelection(e.state),
			(e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq)
	}
	resetRange(e) {
		const { head: t } = e.selection.main
		;(this.from = Math.max(0, t - 1e4)), (this.to = Math.min(e.doc.length, t + 1e4))
	}
	reset(e) {
		this.resetRange(e),
			this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)),
			this.setSelection(e)
	}
	revertPending(e) {
		const t = this.pendingContextChange
		;(this.pendingContextChange = null),
			this.editContext.updateText(
				this.toContextPos(t.from),
				this.toContextPos(t.from + t.insert.length),
				e.doc.sliceString(t.from, t.to),
			)
	}
	setSelection(e) {
		const { main: t } = e.selection,
			i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))),
			r = this.toContextPos(t.head)
		;(this.editContext.selectionStart != i || this.editContext.selectionEnd != r) &&
			this.editContext.updateSelection(i, r)
	}
	rangeIsValid(e) {
		const { head: t } = e.selection.main
		return !(
			(this.from > 0 && t - this.from < 500) ||
			(this.to < e.doc.length && this.to - t < 500) ||
			this.to - this.from > 1e4 * 3
		)
	}
	toEditorPos(e, t = this.to - this.from) {
		e = Math.min(e, t)
		const i = this.composing
		return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from
	}
	toContextPos(e) {
		const t = this.composing
		return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from
	}
	destroy() {
		for (const e in this.handlers) this.editContext.removeEventListener(e, this.handlers[e])
	}
}
class Y {
	get state() {
		return this.viewState.state
	}
	get viewport() {
		return this.viewState.viewport
	}
	get visibleRanges() {
		return this.viewState.visibleRanges
	}
	get inView() {
		return this.viewState.inView
	}
	get composing() {
		return !!this.inputState && this.inputState.composing > 0
	}
	get compositionStarted() {
		return !!this.inputState && this.inputState.composing >= 0
	}
	get root() {
		return this._root
	}
	get win() {
		return this.dom.ownerDocument.defaultView || window
	}
	constructor(e = {}) {
		var t
		;(this.plugins = []),
			(this.pluginMap = new Map()),
			(this.editorAttrs = {}),
			(this.contentAttrs = {}),
			(this.bidiCache = []),
			(this.destroyed = !1),
			(this.updateState = 2),
			(this.measureScheduled = -1),
			(this.measureRequests = []),
			(this.contentDOM = document.createElement('div')),
			(this.scrollDOM = document.createElement('div')),
			(this.scrollDOM.tabIndex = -1),
			(this.scrollDOM.className = 'cm-scroller'),
			this.scrollDOM.appendChild(this.contentDOM),
			(this.announceDOM = document.createElement('div')),
			(this.announceDOM.className = 'cm-announced'),
			this.announceDOM.setAttribute('aria-live', 'polite'),
			(this.dom = document.createElement('div')),
			this.dom.appendChild(this.announceDOM),
			this.dom.appendChild(this.scrollDOM),
			e.parent && e.parent.appendChild(this.dom)
		const { dispatch: i } = e
		;(this.dispatchTransactions =
			e.dispatchTransactions || (i && ((r) => r.forEach((s) => i(s, this)))) || ((r) => this.update(r))),
			(this.dispatch = this.dispatch.bind(this)),
			(this._root = e.root || bp(e.parent) || document),
			(this.viewState = new Nl(this, e.state || ee.create(e))),
			e.scrollTo && e.scrollTo.is(Nn) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)),
			(this.plugins = this.state.facet(ki).map((r) => new $s(r)))
		for (const r of this.plugins) r.update(this)
		;(this.observer = new Ng(this)),
			(this.inputState = new dg(this)),
			this.inputState.ensureHandlers(this.plugins),
			(this.docView = new Rl(this)),
			this.mountStyles(),
			this.updateAttrs(),
			(this.updateState = 0),
			this.requestMeasure(),
			!((t = document.fonts) === null || t === void 0) &&
				t.ready &&
				document.fonts.ready.then(() => {
					;(this.viewState.mustMeasureContent = 'refresh'), this.requestMeasure()
				})
	}
	dispatch(...e) {
		const t =
			e.length == 1 && e[0] instanceof we ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)]
		this.dispatchTransactions(t, this)
	}
	update(e) {
		if (this.updateState != 0)
			throw new Error('Calls to EditorView.update are not allowed while an update is in progress')
		let t = !1,
			i = !1,
			r,
			s = this.state
		for (const f of e) {
			if (f.startState != s)
				throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.")
			s = f.state
		}
		if (this.destroyed) {
			this.viewState.state = s
			return
		}
		let o = this.hasFocus,
			a = 0,
			l = null
		e.some((f) => f.annotation(Mu))
			? ((this.inputState.notifiedFocused = o), (a = 1))
			: o != this.inputState.notifiedFocused && ((this.inputState.notifiedFocused = o), (l = Eu(s, o)), l || (a = 1))
		let c = this.observer.delayedAndroidKey,
			h = null
		if (
			(c
				? (this.observer.clearDelayedAndroidKey(),
					(h = this.observer.readChange()),
					((h && !this.state.doc.eq(s.doc)) || !this.state.selection.eq(s.selection)) && (h = null))
				: this.observer.clear(),
			s.facet(ee.phrases) != this.state.facet(ee.phrases))
		)
			return this.setState(s)
		;(r = kr.create(this, s, e)), (r.flags |= a)
		let u = this.viewState.scrollTarget
		try {
			this.updateState = 2
			for (const f of e) {
				if ((u && (u = u.map(f.changes)), f.scrollIntoView)) {
					const { main: d } = f.state.selection,
						{ x: O, y: p } = this.state.facet(Y.cursorScrollMargin)
					u = new Ai(d.empty ? d : T.cursor(d.head, d.head > d.anchor ? -1 : 1), 'nearest', 'nearest', p, O)
				}
				for (const d of f.effects) d.is(Nn) && (u = d.value.clip(this.state))
			}
			this.viewState.update(r, u),
				(this.bidiCache = Rr.update(this.bidiCache, r.changes)),
				r.empty || (this.updatePlugins(r), this.inputState.update(r)),
				(t = this.docView.update(r)),
				this.state.facet(cn) != this.styleModules && this.mountStyles(),
				(i = this.updateAttrs()),
				this.showAnnouncements(e),
				this.docView.updateSelection(
					t,
					e.some((f) => f.isUserEvent('select.pointer')),
				)
		} finally {
			this.updateState = 0
		}
		if (
			(r.startState.facet(Fn) != r.state.facet(Fn) && (this.viewState.mustMeasureContent = !0),
			(t || i || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) &&
				this.requestMeasure(),
			t && this.docViewUpdate(),
			!r.empty)
		)
			for (const f of this.state.facet(Xo))
				try {
					f(r)
				} catch (d) {
					Qt(this.state, d, 'update listener')
				}
		;(l || h) &&
			Promise.resolve().then(() => {
				l && this.state == l.startState && this.dispatch(l),
					h && !Tu(this, h) && c.force && Ri(this.contentDOM, c.key, c.keyCode)
			})
	}
	setState(e) {
		if (this.updateState != 0)
			throw new Error('Calls to EditorView.setState are not allowed while an update is in progress')
		if (this.destroyed) {
			this.viewState.state = e
			return
		}
		this.updateState = 2
		const t = this.hasFocus
		try {
			for (const i of this.plugins) i.destroy(this)
			;(this.viewState = new Nl(this, e)), (this.plugins = e.facet(ki).map((i) => new $s(i))), this.pluginMap.clear()
			for (const i of this.plugins) i.update(this)
			this.docView.destroy(),
				(this.docView = new Rl(this)),
				this.inputState.ensureHandlers(this.plugins),
				this.mountStyles(),
				this.updateAttrs(),
				(this.bidiCache = [])
		} finally {
			this.updateState = 0
		}
		t && this.focus(), this.requestMeasure()
	}
	updatePlugins(e) {
		const t = e.startState.facet(ki),
			i = e.state.facet(ki)
		if (t != i) {
			const r = []
			for (const s of i) {
				const o = t.indexOf(s)
				if (o < 0) r.push(new $s(s))
				else {
					const a = this.plugins[o]
					;(a.mustUpdate = e), r.push(a)
				}
			}
			for (const s of this.plugins) s.mustUpdate != e && s.destroy(this)
			;(this.plugins = r), this.pluginMap.clear()
		} else for (const r of this.plugins) r.mustUpdate = e
		for (let r = 0; r < this.plugins.length; r++) this.plugins[r].update(this)
		t != i && this.inputState.ensureHandlers(this.plugins)
	}
	docViewUpdate() {
		for (const e of this.plugins) {
			const t = e.value
			if (t && t.docViewUpdate)
				try {
					t.docViewUpdate(this)
				} catch (i) {
					Qt(this.state, i, 'doc view update listener')
				}
		}
	}
	measure(e = !0) {
		if (this.destroyed) return
		if (
			(this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled),
			this.observer.delayedAndroidKey)
		) {
			;(this.measureScheduled = -1), this.requestMeasure()
			return
		}
		;(this.measureScheduled = 0), e && this.observer.forceFlush()
		let t = null,
			i = this.viewState.scrollParent,
			r = this.viewState.getScrollOffset(),
			{ scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState
		Math.abs(r - this.viewState.scrollOffset) > 1 && (o = -1), (this.viewState.scrollAnchorHeight = -1)
		try {
			for (let a = 0; ; a++) {
				if (o < 0)
					if (iu(i || this.win)) (s = -1), (o = this.viewState.heightMap.height)
					else {
						const d = this.viewState.scrollAnchorAt(r)
						;(s = d.from), (o = d.top)
					}
				this.updateState = 1
				const l = this.viewState.measure()
				if (!l && !this.measureRequests.length && this.viewState.scrollTarget == null) break
				if (a > 5) {
					console.warn(
						this.measureRequests.length ? 'Measure loop restarted more than 5 times' : 'Viewport failed to stabilize',
					)
					break
				}
				let c = []
				l & 4 || ([this.measureRequests, c] = [c, this.measureRequests])
				let h = c.map((d) => {
						try {
							return d.read(this)
						} catch (O) {
							return Qt(this.state, O), Ul
						}
					}),
					u = kr.create(this, this.state, []),
					f = !1
				;(u.flags |= l),
					t ? (t.flags |= l) : (t = u),
					(this.updateState = 2),
					u.empty ||
						(this.updatePlugins(u),
						this.inputState.update(u),
						this.updateAttrs(),
						(f = this.docView.update(u)),
						f && this.docViewUpdate())
				for (let d = 0; d < c.length; d++)
					if (h[d] != Ul)
						try {
							const O = c[d]
							O.write && O.write(h[d], this)
						} catch (O) {
							Qt(this.state, O)
						}
				if ((f && this.docView.updateSelection(!0), !u.viewportChanged && this.measureRequests.length == 0)) {
					if (this.viewState.editorHeight)
						if (this.viewState.scrollTarget) {
							this.docView.scrollIntoView(this.viewState.scrollTarget), (this.viewState.scrollTarget = null), (o = -1)
							continue
						} else {
							const O =
								((s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - o) / this.scaleY
							if (
								(O > 1 || O < -1) &&
								(i == this.scrollDOM ||
									this.hasFocus ||
									Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)
							) {
								;(r = r + O), i ? (i.scrollTop += O) : this.win.scrollBy(0, O), (o = -1)
								continue
							}
						}
					break
				}
			}
		} finally {
			;(this.updateState = 0), (this.measureScheduled = -1)
		}
		if (t && !t.empty) for (const a of this.state.facet(Xo)) a(t)
	}
	get themeClasses() {
		return Io + ' ' + (this.state.facet(zo) ? Lu : Iu) + ' ' + this.state.facet(Fn)
	}
	updateAttrs() {
		const e = Fl(this, bu, { class: 'cm-editor' + (this.hasFocus ? ' cm-focused ' : ' ') + this.themeClasses }),
			t = {
				spellcheck: 'false',
				autocorrect: 'off',
				autocapitalize: 'off',
				writingsuggestions: 'false',
				translate: 'no',
				contenteditable: this.state.facet(Et) ? 'true' : 'false',
				class: 'cm-content',
				style: `${_.tabSize}: ${this.state.tabSize}`,
				role: 'textbox',
				'aria-multiline': 'true',
			}
		this.state.readOnly && (t['aria-readonly'] = 'true'), Fl(this, wa, t)
		const i = this.observer.ignore(() => {
			const r = Ql(this.contentDOM, this.contentAttrs, t),
				s = Ql(this.dom, this.editorAttrs, e)
			return r || s
		})
		return (this.editorAttrs = e), (this.contentAttrs = t), i
	}
	showAnnouncements(e) {
		let t = !0
		for (const i of e)
			for (const r of i.effects)
				if (r.is(Y.announce)) {
					t && (this.announceDOM.textContent = ''), (t = !1)
					const s = this.announceDOM.appendChild(document.createElement('div'))
					s.textContent = r.value
				}
	}
	mountStyles() {
		this.styleModules = this.state.facet(cn)
		const e = this.state.facet(Y.cspNonce)
		Ht.mount(this.root, this.styleModules.concat(Wg).reverse(), e ? { nonce: e } : void 0)
	}
	readMeasured() {
		if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update")
		this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1)
	}
	requestMeasure(e) {
		if (
			(this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e)
		) {
			if (this.measureRequests.indexOf(e) > -1) return
			if (e.key != null) {
				for (let t = 0; t < this.measureRequests.length; t++)
					if (this.measureRequests[t].key === e.key) {
						this.measureRequests[t] = e
						return
					}
			}
			this.measureRequests.push(e)
		}
	}
	plugin(e) {
		let t = this.pluginMap.get(e)
		return (
			(t === void 0 || (t && t.plugin != e)) &&
				this.pluginMap.set(e, (t = this.plugins.find((i) => i.plugin == e) || null)),
			t && t.update(this).value
		)
	}
	get documentTop() {
		return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
	}
	get documentPadding() {
		return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom }
	}
	get scaleX() {
		return this.viewState.scaleX
	}
	get scaleY() {
		return this.viewState.scaleY
	}
	elementAtHeight(e) {
		return this.readMeasured(), this.viewState.elementAtHeight(e)
	}
	lineBlockAtHeight(e) {
		return this.readMeasured(), this.viewState.lineBlockAtHeight(e)
	}
	get viewportLineBlocks() {
		return this.viewState.viewportLines
	}
	lineBlockAt(e) {
		return this.viewState.lineBlockAt(e)
	}
	get contentHeight() {
		return this.viewState.contentHeight
	}
	moveByChar(e, t, i) {
		return Ts(this, e, Al(this, e, t, i))
	}
	moveByGroup(e, t) {
		return Ts(
			this,
			e,
			Al(this, e, t, (i) => ng(this, e.head, i)),
		)
	}
	visualLineSide(e, t) {
		const i = this.bidiSpans(e),
			r = this.textDirectionAt(e.from),
			s = i[t ? i.length - 1 : 0]
		return T.cursor(s.side(t, r) + e.from, s.forward(!t, r) ? 1 : -1)
	}
	moveToLineBoundary(e, t, i = !0) {
		return ig(this, e, t, i)
	}
	moveVertically(e, t, i) {
		return Ts(this, e, rg(this, e, t, i))
	}
	domAtPos(e, t = 1) {
		return this.docView.domAtPos(e, t)
	}
	posAtDOM(e, t = 0) {
		return this.docView.posFromDOM(e, t)
	}
	posAtCoords(e, t = !0) {
		this.readMeasured()
		const i = Eo(this, e, t)
		return i && i.pos
	}
	posAndSideAtCoords(e, t = !0) {
		return this.readMeasured(), Eo(this, e, t)
	}
	coordsAtPos(e, t = 1) {
		this.readMeasured()
		const i = this.docView.coordsAt(e, t)
		if (!i || i.left == i.right) return i
		const r = this.state.doc.lineAt(e),
			s = this.bidiSpans(r),
			o = s[$t.find(s, e - r.from, -1, t)]
		return Qr(i, (o.dir == be.LTR) == t > 0)
	}
	coordsForChar(e) {
		return this.readMeasured(), this.docView.coordsForChar(e)
	}
	get defaultCharacterWidth() {
		return this.viewState.heightOracle.charWidth
	}
	get defaultLineHeight() {
		return this.viewState.heightOracle.lineHeight
	}
	get textDirection() {
		return this.viewState.defaultTextDirection
	}
	textDirectionAt(e) {
		return !this.state.facet(gu) || e < this.viewport.from || e > this.viewport.to
			? this.textDirection
			: (this.readMeasured(), this.docView.textDirectionAt(e))
	}
	get lineWrapping() {
		return this.viewState.heightOracle.lineWrapping
	}
	bidiSpans(e) {
		if (e.length > qg) return lu(e.length)
		let t = this.textDirectionAt(e.from),
			i
		for (const s of this.bidiCache)
			if (s.from == e.from && s.dir == t && (s.fresh || au(s.isolates, (i = Tl(this, e))))) return s.order
		i || (i = Tl(this, e))
		const r = Pp(e.text, t, i)
		return this.bidiCache.push(new Rr(e.from, e.to, t, i, !0, r)), r
	}
	get hasFocus() {
		var e
		return (
			(this.dom.ownerDocument.hasFocus() ||
				(_.safari &&
					((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4)) &&
			this.root.activeElement == this.contentDOM
		)
	}
	focus() {
		this.observer.ignore(() => {
			tu(this.contentDOM), this.docView.updateSelection()
		})
	}
	setRoot(e) {
		this._root != e &&
			((this._root = e),
			this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window),
			this.mountStyles())
	}
	destroy() {
		this.root.activeElement == this.contentDOM && this.contentDOM.blur()
		for (const e of this.plugins) e.destroy(this)
		;(this.plugins = []),
			this.inputState.destroy(),
			this.docView.destroy(),
			this.dom.remove(),
			this.observer.destroy(),
			this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled),
			(this.destroyed = !0)
	}
	static scrollIntoView(e, t = {}) {
		var i, r, s, o
		return Nn.of(
			new Ai(
				typeof e == 'number' ? T.cursor(e) : e,
				(i = t.y) !== null && i !== void 0 ? i : 'nearest',
				(r = t.x) !== null && r !== void 0 ? r : 'nearest',
				(s = t.yMargin) !== null && s !== void 0 ? s : 5,
				(o = t.xMargin) !== null && o !== void 0 ? o : 5,
			),
		)
	}
	scrollSnapshot() {
		const { scrollTop: e, scrollLeft: t } = this.scrollDOM,
			i = this.viewState.scrollAnchorAt(e)
		return Nn.of(new Ai(T.cursor(i.from), 'start', 'start', i.top - e, t, !0))
	}
	setTabFocusMode(e) {
		e == null
			? (this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1)
			: typeof e == 'boolean'
				? (this.inputState.tabFocusMode = e ? 0 : -1)
				: this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e)
	}
	static domEventHandlers(e) {
		return Ke.define(() => ({}), { eventHandlers: e })
	}
	static domEventObservers(e) {
		return Ke.define(() => ({}), { eventObservers: e })
	}
	static theme(e, t) {
		const i = Ht.newName(),
			r = [Fn.of(i), cn.of(Lo(`.${i}`, e))]
		return t && t.dark && r.push(zo.of(!0)), r
	}
	static baseTheme(e) {
		return qr.lowest(cn.of(Lo('.' + Io, e, Du)))
	}
	static findFromDOM(e) {
		var t
		const i = e.querySelector('.cm-content'),
			r = (i && ge.get(i)) || ge.get(e)
		return ((t = r?.root) === null || t === void 0 ? void 0 : t.view) || null
	}
}
Y.styleModule = cn
Y.inputHandler = Ou
Y.clipboardInputFilter = Sa
Y.clipboardOutputFilter = xa
Y.scrollHandler = mu
Y.focusChangeEffect = pu
Y.perLineTextDirection = gu
Y.exceptionSink = du
Y.updateListener = Xo
Y.editable = Et
Y.mouseSelectionStyle = fu
Y.dragMovesSelection = uu
Y.clickAddsSelectionRange = hu
Y.decorations = Hr
Y.blockWrappers = yu
Y.outerDecorations = $a
Y.atomicRanges = zn
Y.bidiIsolatedRanges = Su
Y.cursorScrollMargin = W.define({
	combine: (n) => {
		let e = 5,
			t = 5
		for (const i of n) typeof i == 'number' ? (e = t = i) : ({ x: e, y: t } = i)
		return { x: e, y: t }
	},
})
Y.scrollMargins = xu
Y.darkTheme = zo
Y.cspNonce = W.define({ combine: (n) => (n.length ? n[0] : '') })
Y.contentAttributes = wa
Y.editorAttributes = bu
Y.lineWrapping = Y.contentAttributes.of({ class: 'cm-lineWrapping' })
Y.announce = re.define()
const qg = 4096,
	Ul = {}
class Rr {
	constructor(e, t, i, r, s, o) {
		;(this.from = e), (this.to = t), (this.dir = i), (this.isolates = r), (this.fresh = s), (this.order = o)
	}
	static update(e, t) {
		if (t.empty && !e.some((s) => s.fresh)) return e
		const i = [],
			r = e.length ? e[e.length - 1].dir : be.LTR
		for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
			const o = e[s]
			o.dir == r &&
				!t.touchesRange(o.from, o.to) &&
				i.push(new Rr(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order))
		}
		return i
	}
}
function Fl(n, e, t) {
	for (let i = n.state.facet(e), r = i.length - 1; r >= 0; r--) {
		const s = i[r],
			o = typeof s == 'function' ? s(n) : s
		o && va(o, t)
	}
	return t
}
const Gg = _.mac ? 'mac' : _.windows ? 'win' : _.linux ? 'linux' : 'key'
function Ug(n, e) {
	const t = n.split(/-(?!$)/)
	let i = t[t.length - 1]
	i == 'Space' && (i = ' ')
	let r, s, o, a
	for (let l = 0; l < t.length - 1; ++l) {
		const c = t[l]
		if (/^(cmd|meta|m)$/i.test(c)) a = !0
		else if (/^a(lt)?$/i.test(c)) r = !0
		else if (/^(c|ctrl|control)$/i.test(c)) s = !0
		else if (/^s(hift)?$/i.test(c)) o = !0
		else if (/^mod$/i.test(c)) e == 'mac' ? (a = !0) : (s = !0)
		else throw new Error('Unrecognized modifier name: ' + c)
	}
	return r && (i = 'Alt-' + i), s && (i = 'Ctrl-' + i), a && (i = 'Meta-' + i), o && (i = 'Shift-' + i), i
}
function Hn(n, e, t) {
	return (
		e.altKey && (n = 'Alt-' + n),
		e.ctrlKey && (n = 'Ctrl-' + n),
		e.metaKey && (n = 'Meta-' + n),
		t !== !1 && e.shiftKey && (n = 'Shift-' + n),
		n
	)
}
const Fg = qr.default(
		Y.domEventHandlers({
			keydown(n, e) {
				return em(Hg(e.state), n, e, 'editor')
			},
		}),
	),
	Ar = W.define({ enables: Fg }),
	Hl = new WeakMap()
function Hg(n) {
	let e = n.facet(Ar),
		t = Hl.get(e)
	return t || Hl.set(e, (t = Jg(e.reduce((i, r) => i.concat(r), [])))), t
}
let Vt = null
const Kg = 4e3
function Jg(n, e = Gg) {
	const t = Object.create(null),
		i = Object.create(null),
		r = (o, a) => {
			const l = i[o]
			if (l == null) i[o] = a
			else if (l != a)
				throw new Error('Key binding ' + o + ' is used both as a regular binding and as a multi-stroke prefix')
		},
		s = (o, a, l, c, h) => {
			var u, f
			const d = t[o] || (t[o] = Object.create(null)),
				O = a.split(/ (?!$)/).map((m) => Ug(m, e))
			for (let m = 1; m < O.length; m++) {
				const g = O.slice(0, m).join(' ')
				r(g, !0),
					d[g] ||
						(d[g] = {
							preventDefault: !0,
							stopPropagation: !1,
							run: [
								(b) => {
									const x = (Vt = { view: b, prefix: g, scope: o })
									return (
										setTimeout(() => {
											Vt == x && (Vt = null)
										}, Kg),
										!0
									)
								},
							],
						})
			}
			const p = O.join(' ')
			r(p, !1)
			const v =
				d[p] ||
				(d[p] = {
					preventDefault: !1,
					stopPropagation: !1,
					run:
						((f = (u = d._any) === null || u === void 0 ? void 0 : u.run) === null || f === void 0
							? void 0
							: f.slice()) || [],
				})
			l && v.run.push(l), c && (v.preventDefault = !0), h && (v.stopPropagation = !0)
		}
	for (const o of n) {
		const a = o.scope ? o.scope.split(' ') : ['editor']
		if (o.any)
			for (const c of a) {
				const h = t[c] || (t[c] = Object.create(null))
				h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] })
				const { any: u } = o
				for (const f in h) h[f].run.push((d) => u(d, Do))
			}
		const l = o[e] || o.key
		if (l)
			for (const c of a)
				s(c, l, o.run, o.preventDefault, o.stopPropagation),
					o.shift && s(c, 'Shift-' + l, o.shift, o.preventDefault, o.stopPropagation)
	}
	return t
}
let Do = null
function em(n, e, t, i) {
	Do = e
	let r = up(e),
		s = mi(r, 0),
		o = Br(s) == r.length && r != ' ',
		a = '',
		l = !1,
		c = !1,
		h = !1
	Vt && Vt.view == t && Vt.scope == i && ((a = Vt.prefix + ' '), Ru.indexOf(e.keyCode) < 0 && ((c = !0), (Vt = null)))
	let u = new Set(),
		f = (v) => {
			if (v) {
				for (const m of v.run) if (!u.has(m) && (u.add(m), m(t))) return v.stopPropagation && (h = !0), !0
				v.preventDefault && (v.stopPropagation && (h = !0), (c = !0))
			}
			return !1
		},
		d = n[i],
		O,
		p
	return (
		d &&
			(f(d[a + Hn(r, e, !o)])
				? (l = !0)
				: o &&
						(e.altKey || e.metaKey || e.ctrlKey) &&
						!(_.windows && e.ctrlKey && e.altKey) &&
						!(_.mac && e.altKey && !(e.ctrlKey || e.metaKey)) &&
						(O = Kt[e.keyCode]) &&
						O != r
					? (f(d[a + Hn(O, e, !0)]) || (e.shiftKey && (p = xn[e.keyCode]) != r && p != O && f(d[a + Hn(p, e, !1)]))) &&
						(l = !0)
					: o && e.shiftKey && f(d[a + Hn(r, e, !0)]) && (l = !0),
			!l && f(d._any) && (l = !0)),
		c && (l = !0),
		l && h && e.stopPropagation(),
		(Do = null),
		l
	)
}
function Kl(n, e, t, i, r) {
	e.lastIndex = 0
	for (let s = n.iterRange(t, i), o = t, a; !s.next().done; o += s.value.length)
		if (!s.lineBreak) for (; (a = e.exec(s.value)); ) r(o + a.index, a)
}
function tm(n, e) {
	const t = n.visibleRanges
	if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to) return t
	const i = []
	for (let { from: r, to: s } of t)
		(r = Math.max(n.state.doc.lineAt(r).from, r - e)),
			(s = Math.min(n.state.doc.lineAt(s).to, s + e)),
			i.length && i[i.length - 1].to >= r ? (i[i.length - 1].to = s) : i.push({ from: r, to: s })
	return i
}
class im {
	constructor(e) {
		const { regexp: t, decoration: i, decorate: r, boundary: s, maxLength: o = 1e3 } = e
		if (!t.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set")
		if (((this.regexp = t), r)) this.addMatch = (a, l, c, h) => r(h, c, c + a[0].length, a, l)
		else if (typeof i == 'function')
			this.addMatch = (a, l, c, h) => {
				const u = i(a, l, c)
				u && h(c, c + a[0].length, u)
			}
		else if (i) this.addMatch = (a, l, c, h) => h(c, c + a[0].length, i)
		else throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator")
		;(this.boundary = s), (this.maxLength = o)
	}
	createDeco(e) {
		const t = new _i(),
			i = t.add.bind(t)
		for (const { from: r, to: s } of tm(e, this.maxLength))
			Kl(e.state.doc, this.regexp, r, s, (o, a) => this.addMatch(a, e, o, i))
		return t.finish()
	}
	updateDeco(e, t) {
		let i = 1e9,
			r = -1
		return (
			e.docChanged &&
				e.changes.iterChanges((s, o, a, l) => {
					l >= e.view.viewport.from && a <= e.view.viewport.to && ((i = Math.min(a, i)), (r = Math.max(l, r)))
				}),
			e.viewportMoved || r - i > 1e3
				? this.createDeco(e.view)
				: r > -1
					? this.updateRange(e.view, t.map(e.changes), i, r)
					: t
		)
	}
	updateRange(e, t, i, r) {
		for (const s of e.visibleRanges) {
			let o = Math.max(s.from, i),
				a = Math.min(s.to, r)
			if (a >= o) {
				let l = e.state.doc.lineAt(o),
					c = l.to < a ? e.state.doc.lineAt(a) : l,
					h = Math.max(s.from, l.from),
					u = Math.min(s.to, c.to)
				if (this.boundary) {
					for (; o > l.from; o--)
						if (this.boundary.test(l.text[o - 1 - l.from])) {
							h = o
							break
						}
					for (; a < c.to; a++)
						if (this.boundary.test(c.text[a - c.from])) {
							u = a
							break
						}
				}
				let f = [],
					d,
					O = (p, v, m) => f.push(m.range(p, v))
				if (l == c)
					for (this.regexp.lastIndex = h - l.from; (d = this.regexp.exec(l.text)) && d.index < u - l.from; )
						this.addMatch(d, e, d.index + l.from, O)
				else Kl(e.state.doc, this.regexp, h, u, (p, v) => this.addMatch(v, e, p, O))
				t = t.update({ filterFrom: h, filterTo: u, filter: (p, v) => p < h || v > u, add: f })
			}
		}
		return t
	}
}
const Wo = /x/.unicode != null ? 'gu' : 'g',
	nm = new RegExp(
		`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`,
		Wo,
	),
	rm = {
		0: 'null',
		7: 'bell',
		8: 'backspace',
		10: 'newline',
		11: 'vertical tab',
		13: 'carriage return',
		27: 'escape',
		8203: 'zero width space',
		8204: 'zero width non-joiner',
		8205: 'zero width joiner',
		8206: 'left-to-right mark',
		8207: 'right-to-left mark',
		8232: 'line separator',
		8237: 'left-to-right override',
		8238: 'right-to-left override',
		8294: 'left-to-right isolate',
		8295: 'right-to-left isolate',
		8297: 'pop directional isolate',
		8233: 'paragraph separator',
		65279: 'zero width no-break space',
		65532: 'object replacement',
	}
let Rs = null
function sm() {
	var n
	if (Rs == null && typeof document < 'u' && document.body) {
		const e = document.body.style
		Rs = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null
	}
	return Rs || !1
}
const dr = W.define({
	combine(n) {
		const e = Ur(n, { render: null, specialChars: nm, addSpecialChars: null })
		return (
			(e.replaceTabs = !sm()) && (e.specialChars = new RegExp('	|' + e.specialChars.source, Wo)),
			e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + '|' + e.addSpecialChars.source, Wo)),
			e
		)
	},
})
function om(n = {}) {
	return [dr.of(n), am()]
}
let Jl = null
function am() {
	return (
		Jl ||
		(Jl = Ke.fromClass(
			class {
				constructor(n) {
					;(this.view = n),
						(this.decorations = U.none),
						(this.decorationCache = Object.create(null)),
						(this.decorator = this.makeDecorator(n.state.facet(dr))),
						(this.decorations = this.decorator.createDeco(n))
				}
				makeDecorator(n) {
					return new im({
						regexp: n.specialChars,
						decoration: (e, t, i) => {
							const { doc: r } = t.state,
								s = mi(e[0], 0)
							if (s == 9) {
								const o = r.lineAt(i),
									a = t.state.tabSize,
									l = Mn(o.text, a, i - o.from)
								return U.replace({
									widget: new um(((a - (l % a)) * this.view.defaultCharacterWidth) / this.view.scaleX),
								})
							}
							return this.decorationCache[s] || (this.decorationCache[s] = U.replace({ widget: new hm(n, s) }))
						},
						boundary: n.replaceTabs ? void 0 : /[^]/,
					})
				}
				update(n) {
					const e = n.state.facet(dr)
					n.startState.facet(dr) != e
						? ((this.decorator = this.makeDecorator(e)), (this.decorations = this.decorator.createDeco(n.view)))
						: (this.decorations = this.decorator.updateDeco(n, this.decorations))
				}
			},
			{ decorations: (n) => n.decorations },
		))
	)
}
const lm = '•'
function cm(n) {
	return n >= 32 ? lm : n == 10 ? '␤' : String.fromCharCode(9216 + n)
}
class hm extends vi {
	constructor(e, t) {
		super(), (this.options = e), (this.code = t)
	}
	eq(e) {
		return e.code == this.code
	}
	toDOM(e) {
		const t = cm(this.code),
			i = e.state.phrase('Control character') + ' ' + (rm[this.code] || '0x' + this.code.toString(16)),
			r = this.options.render && this.options.render(this.code, i, t)
		if (r) return r
		const s = document.createElement('span')
		return (s.textContent = t), (s.title = i), s.setAttribute('aria-label', i), (s.className = 'cm-specialChar'), s
	}
	ignoreEvent() {
		return !1
	}
}
class um extends vi {
	constructor(e) {
		super(), (this.width = e)
	}
	eq(e) {
		return e.width == this.width
	}
	toDOM() {
		const e = document.createElement('span')
		return (e.textContent = '	'), (e.className = 'cm-tab'), (e.style.width = this.width + 'px'), e
	}
	ignoreEvent() {
		return !1
	}
}
function fm() {
	return Om
}
const dm = U.line({ class: 'cm-activeLine' }),
	Om = Ke.fromClass(
		class {
			constructor(n) {
				this.decorations = this.getDeco(n)
			}
			update(n) {
				;(n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view))
			}
			getDeco(n) {
				let e = -1,
					t = []
				for (const i of n.state.selection.ranges) {
					const r = n.lineBlockAt(i.head)
					r.from > e && (t.push(dm.range(r.from)), (e = r.from))
				}
				return U.set(t)
			}
		},
		{ decorations: (n) => n.decorations },
	)
class pi extends Ft {
	compare(e) {
		return this == e || (this.constructor == e.constructor && this.eq(e))
	}
	eq(e) {
		return !1
	}
	destroy(e) {}
}
pi.prototype.elementClass = ''
pi.prototype.toDOM = void 0
pi.prototype.mapMode = je.TrackBefore
pi.prototype.startSide = pi.prototype.endSide = -1
pi.prototype.point = !0
const As = W.define(),
	pm = W.define(),
	Or = W.define(),
	ec = W.define({ combine: (n) => n.some((e) => e) })
function gm(n) {
	return [mm]
}
const mm = Ke.fromClass(
	class {
		constructor(n) {
			;(this.view = n),
				(this.domAfter = null),
				(this.prevViewport = n.viewport),
				(this.dom = document.createElement('div')),
				(this.dom.className = 'cm-gutters cm-gutters-before'),
				this.dom.setAttribute('aria-hidden', 'true'),
				(this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + 'px'),
				(this.gutters = n.state.facet(Or).map((e) => new ic(n, e))),
				(this.fixed = !n.state.facet(ec))
			for (const e of this.gutters)
				e.config.side == 'after' ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom)
			this.fixed && (this.dom.style.position = 'sticky'),
				this.syncGutters(!1),
				n.scrollDOM.insertBefore(this.dom, n.contentDOM)
		}
		getDOMAfter() {
			return (
				this.domAfter ||
					((this.domAfter = document.createElement('div')),
					(this.domAfter.className = 'cm-gutters cm-gutters-after'),
					this.domAfter.setAttribute('aria-hidden', 'true'),
					(this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + 'px'),
					(this.domAfter.style.position = this.fixed ? 'sticky' : ''),
					this.view.scrollDOM.appendChild(this.domAfter)),
				this.domAfter
			)
		}
		update(n) {
			if (this.updateGutters(n)) {
				const e = this.prevViewport,
					t = n.view.viewport,
					i = Math.min(e.to, t.to) - Math.max(e.from, t.from)
				this.syncGutters(i < (t.to - t.from) * 0.8)
			}
			if (n.geometryChanged) {
				const e = this.view.contentHeight / this.view.scaleY + 'px'
				;(this.dom.style.minHeight = e), this.domAfter && (this.domAfter.style.minHeight = e)
			}
			this.view.state.facet(ec) != !this.fixed &&
				((this.fixed = !this.fixed),
				(this.dom.style.position = this.fixed ? 'sticky' : ''),
				this.domAfter && (this.domAfter.style.position = this.fixed ? 'sticky' : '')),
				(this.prevViewport = n.view.viewport)
		}
		syncGutters(n) {
			const e = this.dom.nextSibling
			n && (this.dom.remove(), this.domAfter && this.domAfter.remove())
			let t = F.iter(this.view.state.facet(As), this.view.viewport.from),
				i = [],
				r = this.gutters.map((s) => new vm(s, this.view.viewport, -this.view.documentPadding.top))
			for (const s of this.view.viewportLineBlocks)
				if ((i.length && (i = []), Array.isArray(s.type))) {
					let o = !0
					for (const a of s.type)
						if (a.type == Be.Text && o) {
							Yo(t, i, a.from)
							for (const l of r) l.line(this.view, a, i)
							o = !1
						} else if (a.widget) for (const l of r) l.widget(this.view, a)
				} else if (s.type == Be.Text) {
					Yo(t, i, s.from)
					for (const o of r) o.line(this.view, s, i)
				} else if (s.widget) for (const o of r) o.widget(this.view, s)
			for (const s of r) s.finish()
			n &&
				(this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
		}
		updateGutters(n) {
			let e = n.startState.facet(Or),
				t = n.state.facet(Or),
				i =
					n.docChanged ||
					n.heightChanged ||
					n.viewportChanged ||
					!F.eq(n.startState.facet(As), n.state.facet(As), n.view.viewport.from, n.view.viewport.to)
			if (e == t) for (const r of this.gutters) r.update(n) && (i = !0)
			else {
				i = !0
				const r = []
				for (const s of t) {
					const o = e.indexOf(s)
					o < 0 ? r.push(new ic(this.view, s)) : (this.gutters[o].update(n), r.push(this.gutters[o]))
				}
				for (const s of this.gutters) s.dom.remove(), r.indexOf(s) < 0 && s.destroy()
				for (const s of r)
					s.config.side == 'after' ? this.getDOMAfter().appendChild(s.dom) : this.dom.appendChild(s.dom)
				this.gutters = r
			}
			return i
		}
		destroy() {
			for (const n of this.gutters) n.destroy()
			this.dom.remove(), this.domAfter && this.domAfter.remove()
		}
	},
	{
		provide: (n) =>
			Y.scrollMargins.of((e) => {
				const t = e.plugin(n)
				if (!t || t.gutters.length == 0 || !t.fixed) return null
				const i = t.dom.offsetWidth * e.scaleX,
					r = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0
				return e.textDirection == be.LTR ? { left: i, right: r } : { right: i, left: r }
			}),
	},
)
function tc(n) {
	return Array.isArray(n) ? n : [n]
}
function Yo(n, e, t) {
	for (; n.value && n.from <= t; ) n.from == t && e.push(n.value), n.next()
}
class vm {
	constructor(e, t, i) {
		;(this.gutter = e), (this.height = i), (this.i = 0), (this.cursor = F.iter(e.markers, t.from))
	}
	addElement(e, t, i) {
		const { gutter: r } = this,
			s = (t.top - this.height) / e.scaleY,
			o = t.height / e.scaleY
		if (this.i == r.elements.length) {
			const a = new Wu(e, o, s, i)
			r.elements.push(a), r.dom.appendChild(a.dom)
		} else r.elements[this.i].update(e, o, s, i)
		;(this.height = t.bottom), this.i++
	}
	line(e, t, i) {
		let r = []
		Yo(this.cursor, r, t.from), i.length && (r = r.concat(i))
		const s = this.gutter.config.lineMarker(e, t, r)
		s && r.unshift(s)
		const o = this.gutter
		;(r.length == 0 && !o.config.renderEmptyElements) || this.addElement(e, t, r)
	}
	widget(e, t) {
		let i = this.gutter.config.widgetMarker(e, t.widget, t),
			r = i ? [i] : null
		for (const s of e.state.facet(pm)) {
			const o = s(e, t.widget, t)
			o && (r || (r = [])).push(o)
		}
		r && this.addElement(e, t, r)
	}
	finish() {
		const e = this.gutter
		for (; e.elements.length > this.i; ) {
			const t = e.elements.pop()
			e.dom.removeChild(t.dom), t.destroy()
		}
	}
}
class ic {
	constructor(e, t) {
		;(this.view = e),
			(this.config = t),
			(this.elements = []),
			(this.spacer = null),
			(this.dom = document.createElement('div')),
			(this.dom.className = 'cm-gutter' + (this.config.class ? ' ' + this.config.class : ''))
		for (const i in t.domEventHandlers)
			this.dom.addEventListener(i, (r) => {
				let s = r.target,
					o
				if (s != this.dom && this.dom.contains(s)) {
					for (; s.parentNode != this.dom; ) s = s.parentNode
					const l = s.getBoundingClientRect()
					o = (l.top + l.bottom) / 2
				} else o = r.clientY
				const a = e.lineBlockAtHeight(o - e.documentTop)
				t.domEventHandlers[i](e, a, r) && r.preventDefault()
			})
		;(this.markers = tc(t.markers(e))),
			t.initialSpacer &&
				((this.spacer = new Wu(e, 0, 0, [t.initialSpacer(e)])),
				this.dom.appendChild(this.spacer.dom),
				(this.spacer.dom.style.cssText += 'visibility: hidden; pointer-events: none'))
	}
	update(e) {
		const t = this.markers
		if (((this.markers = tc(this.config.markers(e.view))), this.spacer && this.config.updateSpacer)) {
			const r = this.config.updateSpacer(this.spacer.markers[0], e)
			r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r])
		}
		const i = e.view.viewport
		return !F.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1)
	}
	destroy() {
		for (const e of this.elements) e.destroy()
	}
}
class Wu {
	constructor(e, t, i, r) {
		;(this.height = -1),
			(this.above = 0),
			(this.markers = []),
			(this.dom = document.createElement('div')),
			(this.dom.className = 'cm-gutterElement'),
			this.update(e, t, i, r)
	}
	update(e, t, i, r) {
		this.height != t && ((this.height = t), (this.dom.style.height = t + 'px')),
			this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + 'px' : ''),
			bm(this.markers, r) || this.setMarkers(e, r)
	}
	setMarkers(e, t) {
		let i = 'cm-gutterElement',
			r = this.dom.firstChild
		for (let s = 0, o = 0; ; ) {
			let a = o,
				l = s < t.length ? t[s++] : null,
				c = !1
			if (l) {
				const h = l.elementClass
				h && (i += ' ' + h)
				for (let u = o; u < this.markers.length; u++)
					if (this.markers[u].compare(l)) {
						;(a = u), (c = !0)
						break
					}
			} else a = this.markers.length
			for (; o < a; ) {
				const h = this.markers[o++]
				if (h.toDOM) {
					h.destroy(r)
					const u = r.nextSibling
					r.remove(), (r = u)
				}
			}
			if (!l) break
			l.toDOM && (c ? (r = r.nextSibling) : this.dom.insertBefore(l.toDOM(e), r)), c && o++
		}
		;(this.dom.className = i), (this.markers = t)
	}
	destroy() {
		this.setMarkers(null, [])
	}
}
function bm(n, e) {
	if (n.length != e.length) return !1
	for (let t = 0; t < n.length; t++) if (!n[t].compare(e[t])) return !1
	return !0
}
const ym = W.define(),
	Sm = W.define(),
	Pi = W.define({
		combine(n) {
			return Ur(
				n,
				{ formatNumber: String, domEventHandlers: {} },
				{
					domEventHandlers(e, t) {
						const i = Object.assign({}, e)
						for (const r in t) {
							const s = i[r],
								o = t[r]
							i[r] = s ? (a, l, c) => s(a, l, c) || o(a, l, c) : o
						}
						return i
					},
				},
			)
		},
	})
class js extends pi {
	constructor(e) {
		super(), (this.number = e)
	}
	eq(e) {
		return this.number == e.number
	}
	toDOM() {
		return document.createTextNode(this.number)
	}
}
function Xs(n, e) {
	return n.state.facet(Pi).formatNumber(e, n.state)
}
const xm = Or.compute([Pi], (n) => ({
	class: 'cm-lineNumbers',
	renderEmptyElements: !1,
	markers(e) {
		return e.state.facet(ym)
	},
	lineMarker(e, t, i) {
		return i.some((r) => r.toDOM) ? null : new js(Xs(e, e.state.doc.lineAt(t.from).number))
	},
	widgetMarker: (e, t, i) => {
		for (const r of e.state.facet(Sm)) {
			const s = r(e, t, i)
			if (s) return s
		}
		return null
	},
	lineMarkerChange: (e) => e.startState.facet(Pi) != e.state.facet(Pi),
	initialSpacer(e) {
		return new js(Xs(e, nc(e.state.doc.lines)))
	},
	updateSpacer(e, t) {
		const i = Xs(t.view, nc(t.view.state.doc.lines))
		return i == e.number ? e : new js(i)
	},
	domEventHandlers: n.facet(Pi).domEventHandlers,
	side: 'before',
}))
function wm(n = {}) {
	return [Pi.of(n), gm(), xm]
}
function nc(n) {
	let e = 9
	for (; e < n; ) e = e * 10 + 9
	return e
}
const Yu = 1024
let $m = 0
class nt {
	constructor(e, t) {
		;(this.from = e), (this.to = t)
	}
}
class G {
	constructor(e = {}) {
		;(this.id = $m++),
			(this.perNode = !!e.perNode),
			(this.deserialize =
				e.deserialize ||
				(() => {
					throw new Error("This node type doesn't define a deserialize function")
				})),
			(this.combine = e.combine || null)
	}
	add(e) {
		if (this.perNode) throw new RangeError("Can't add per-node props to node types")
		return (
			typeof e != 'function' && (e = De.match(e)),
			(t) => {
				const i = e(t)
				return i === void 0 ? null : [this, i]
			}
		)
	}
}
G.closedBy = new G({ deserialize: (n) => n.split(' ') })
G.openedBy = new G({ deserialize: (n) => n.split(' ') })
G.group = new G({ deserialize: (n) => n.split(' ') })
G.isolate = new G({
	deserialize: (n) => {
		if (n && n != 'rtl' && n != 'ltr' && n != 'auto') throw new RangeError('Invalid value for isolate: ' + n)
		return n || 'auto'
	},
})
G.contextHash = new G({ perNode: !0 })
G.lookAhead = new G({ perNode: !0 })
G.mounted = new G({ perNode: !0 })
class ji {
	constructor(e, t, i, r = !1) {
		;(this.tree = e), (this.overlay = t), (this.parser = i), (this.bracketed = r)
	}
	static get(e) {
		return e && e.props && e.props[G.mounted.id]
	}
}
const Qm = Object.create(null)
class De {
	constructor(e, t, i, r = 0) {
		;(this.name = e), (this.props = t), (this.id = i), (this.flags = r)
	}
	static define(e) {
		const t = e.props && e.props.length ? Object.create(null) : Qm,
			i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0),
			r = new De(e.name || '', t, e.id, i)
		if (e.props) {
			for (let s of e.props)
				if ((Array.isArray(s) || (s = s(r)), s)) {
					if (s[0].perNode) throw new RangeError("Can't store a per-node prop on a node type")
					t[s[0].id] = s[1]
				}
		}
		return r
	}
	prop(e) {
		return this.props[e.id]
	}
	get isTop() {
		return (this.flags & 1) > 0
	}
	get isSkipped() {
		return (this.flags & 2) > 0
	}
	get isError() {
		return (this.flags & 4) > 0
	}
	get isAnonymous() {
		return (this.flags & 8) > 0
	}
	is(e) {
		if (typeof e == 'string') {
			if (this.name == e) return !0
			const t = this.prop(G.group)
			return t ? t.indexOf(e) > -1 : !1
		}
		return this.id == e
	}
	static match(e) {
		const t = Object.create(null)
		for (const i in e) for (const r of i.split(' ')) t[r] = e[i]
		return (i) => {
			for (let r = i.prop(G.group), s = -1; s < (r ? r.length : 0); s++) {
				const o = t[s < 0 ? i.name : r[s]]
				if (o) return o
			}
		}
	}
}
De.none = new De('', Object.create(null), 0, 8)
class Ta {
	constructor(e) {
		this.types = e
		for (let t = 0; t < e.length; t++)
			if (e[t].id != t)
				throw new RangeError('Node type ids should correspond to array positions when creating a node set')
	}
	extend(...e) {
		const t = []
		for (const i of this.types) {
			let r = null
			for (const s of e) {
				const o = s(i)
				if (o) {
					r || (r = Object.assign({}, i.props))
					let a = o[1],
						l = o[0]
					l.combine && l.id in r && (a = l.combine(r[l.id], a)), (r[l.id] = a)
				}
			}
			t.push(r ? new De(i.name, r, i.id, i.flags) : i)
		}
		return new Ta(t)
	}
}
const Kn = new WeakMap(),
	rc = new WeakMap()
var te
;((n) => {
	;(n[(n.ExcludeBuffers = 1)] = 'ExcludeBuffers'),
		(n[(n.IncludeAnonymous = 2)] = 'IncludeAnonymous'),
		(n[(n.IgnoreMounts = 4)] = 'IgnoreMounts'),
		(n[(n.IgnoreOverlays = 8)] = 'IgnoreOverlays'),
		(n[(n.EnterBracketed = 16)] = 'EnterBracketed')
})(te || (te = {}))
class fe {
	constructor(e, t, i, r, s) {
		if (
			((this.type = e),
			(this.children = t),
			(this.positions = i),
			(this.length = r),
			(this.props = null),
			s && s.length)
		) {
			this.props = Object.create(null)
			for (const [o, a] of s) this.props[typeof o == 'number' ? o : o.id] = a
		}
	}
	toString() {
		const e = ji.get(this)
		if (e && !e.overlay) return e.tree.toString()
		let t = ''
		for (const i of this.children) {
			const r = i.toString()
			r && (t && (t += ','), (t += r))
		}
		return this.type.name
			? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) +
					(t.length ? '(' + t + ')' : '')
			: t
	}
	cursor(e = 0) {
		return new jr(this.topNode, e)
	}
	cursorAt(e, t = 0, i = 0) {
		const r = Kn.get(this) || this.topNode,
			s = new jr(r)
		return s.moveTo(e, t), Kn.set(this, s._tree), s
	}
	get topNode() {
		return new Me(this, 0, 0, null)
	}
	resolve(e, t = 0) {
		const i = kn(Kn.get(this) || this.topNode, e, t, !1)
		return Kn.set(this, i), i
	}
	resolveInner(e, t = 0) {
		const i = kn(rc.get(this) || this.topNode, e, t, !0)
		return rc.set(this, i), i
	}
	resolveStack(e, t = 0) {
		return Tm(this, e, t)
	}
	iterate(e) {
		const { enter: t, leave: i, from: r = 0, to: s = this.length } = e,
			o = e.mode || 0,
			a = (o & te.IncludeAnonymous) > 0
		for (let l = this.cursor(o | te.IncludeAnonymous); ; ) {
			let c = !1
			if (l.from <= s && l.to >= r && ((!a && l.type.isAnonymous) || t(l) !== !1)) {
				if (l.firstChild()) continue
				c = !0
			}
			for (; c && i && (a || !l.type.isAnonymous) && i(l), !l.nextSibling(); ) {
				if (!l.parent()) return
				c = !0
			}
		}
	}
	prop(e) {
		return e.perNode ? (this.props ? this.props[e.id] : void 0) : this.type.prop(e)
	}
	get propValues() {
		const e = []
		if (this.props) for (const t in this.props) e.push([+t, this.props[t]])
		return e
	}
	balance(e = {}) {
		return this.children.length <= 8
			? this
			: Ra(
					De.none,
					this.children,
					this.positions,
					0,
					this.children.length,
					0,
					this.length,
					(t, i, r) => new fe(this.type, t, i, r, this.propValues),
					e.makeTree || ((t, i, r) => new fe(De.none, t, i, r)),
				)
	}
	static build(e) {
		return Cm(e)
	}
}
fe.empty = new fe(De.none, [], [], 0)
class Ca {
	constructor(e, t) {
		;(this.buffer = e), (this.index = t)
	}
	get id() {
		return this.buffer[this.index - 4]
	}
	get start() {
		return this.buffer[this.index - 3]
	}
	get end() {
		return this.buffer[this.index - 2]
	}
	get size() {
		return this.buffer[this.index - 1]
	}
	get pos() {
		return this.index
	}
	next() {
		this.index -= 4
	}
	fork() {
		return new Ca(this.buffer, this.index)
	}
}
class ei {
	constructor(e, t, i) {
		;(this.buffer = e), (this.length = t), (this.set = i)
	}
	get type() {
		return De.none
	}
	toString() {
		const e = []
		for (let t = 0; t < this.buffer.length; ) e.push(this.childString(t)), (t = this.buffer[t + 3])
		return e.join(',')
	}
	childString(e) {
		let t = this.buffer[e],
			i = this.buffer[e + 3],
			r = this.set.types[t],
			s = r.name
		if ((/\W/.test(s) && !r.isError && (s = JSON.stringify(s)), (e += 4), i == e)) return s
		const o = []
		for (; e < i; ) o.push(this.childString(e)), (e = this.buffer[e + 3])
		return s + '(' + o.join(',') + ')'
	}
	findChild(e, t, i, r, s) {
		let { buffer: o } = this,
			a = -1
		for (let l = e; l != t && !(Nu(s, r, o[l + 1], o[l + 2]) && ((a = l), i > 0)); l = o[l + 3]);
		return a
	}
	slice(e, t, i) {
		let r = this.buffer,
			s = new Uint16Array(t - e),
			o = 0
		for (let a = e, l = 0; a < t; ) {
			;(s[l++] = r[a++]), (s[l++] = r[a++] - i)
			const c = (s[l++] = r[a++] - i)
			;(s[l++] = r[a++] - e), (o = Math.max(o, c))
		}
		return new ei(s, o, this.set)
	}
}
function Nu(n, e, t, i) {
	switch (n) {
		case -2:
			return t < e
		case -1:
			return i >= e && t < e
		case 0:
			return t < e && i > e
		case 1:
			return t <= e && i > e
		case 2:
			return i > e
		case 4:
			return !0
	}
}
function kn(n, e, t, i) {
	for (var r; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
		const o = !i && n instanceof Me && n.index < 0 ? null : n.parent
		if (!o) return n
		n = o
	}
	const s = i ? 0 : te.IgnoreOverlays
	if (i)
		for (let o = n, a = o.parent; a; o = a, a = o.parent)
			o instanceof Me &&
				o.index < 0 &&
				((r = a.enter(e, t, s)) === null || r === void 0 ? void 0 : r.from) != o.from &&
				(n = a)
	for (;;) {
		const o = n.enter(e, t, s)
		if (!o) return n
		n = o
	}
}
class Vu {
	cursor(e = 0) {
		return new jr(this, e)
	}
	getChild(e, t = null, i = null) {
		const r = sc(this, e, t, i)
		return r.length ? r[0] : null
	}
	getChildren(e, t = null, i = null) {
		return sc(this, e, t, i)
	}
	resolve(e, t = 0) {
		return kn(this, e, t, !1)
	}
	resolveInner(e, t = 0) {
		return kn(this, e, t, !0)
	}
	matchContext(e) {
		return No(this.parent, e)
	}
	enterUnfinishedNodesBefore(e) {
		let t = this.childBefore(e),
			i = this
		for (; t; ) {
			const r = t.lastChild
			if (!r || r.to != t.to) break
			r.type.isError && r.from == r.to ? ((i = t), (t = r.prevSibling)) : (t = r)
		}
		return i
	}
	get node() {
		return this
	}
	get next() {
		return this.parent
	}
}
class Me extends Vu {
	constructor(e, t, i, r) {
		super(), (this._tree = e), (this.from = t), (this.index = i), (this._parent = r)
	}
	get type() {
		return this._tree.type
	}
	get name() {
		return this._tree.type.name
	}
	get to() {
		return this.from + this._tree.length
	}
	nextChild(e, t, i, r, s = 0) {
		for (let o = this; ; ) {
			for (let { children: a, positions: l } = o._tree, c = t > 0 ? a.length : -1; e != c; e += t) {
				let h = a[e],
					u = l[e] + o.from,
					f
				if (
					!(
						!(
							s & te.EnterBracketed &&
							h instanceof fe &&
							(f = ji.get(h)) &&
							!f.overlay &&
							f.bracketed &&
							i >= u &&
							i <= u + h.length
						) && !Nu(r, i, u, u + h.length)
					)
				) {
					if (h instanceof ei) {
						if (s & te.ExcludeBuffers) continue
						const d = h.findChild(0, h.buffer.length, t, i - u, r)
						if (d > -1) return new kt(new km(o, h, e, u), null, d)
					} else if (s & te.IncludeAnonymous || !h.type.isAnonymous || Za(h)) {
						let d
						if (!(s & te.IgnoreMounts) && (d = ji.get(h)) && !d.overlay) return new Me(d.tree, u, e, o)
						const O = new Me(h, u, e, o)
						return s & te.IncludeAnonymous || !O.type.isAnonymous
							? O
							: O.nextChild(t < 0 ? h.children.length - 1 : 0, t, i, r, s)
					}
				}
			}
			if (
				s & te.IncludeAnonymous ||
				!o.type.isAnonymous ||
				(o.index >= 0 ? (e = o.index + t) : (e = t < 0 ? -1 : o._parent._tree.children.length), (o = o._parent), !o)
			)
				return null
		}
	}
	get firstChild() {
		return this.nextChild(0, 1, 0, 4)
	}
	get lastChild() {
		return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
	}
	childAfter(e) {
		return this.nextChild(0, 1, e, 2)
	}
	childBefore(e) {
		return this.nextChild(this._tree.children.length - 1, -1, e, -2)
	}
	prop(e) {
		return this._tree.prop(e)
	}
	enter(e, t, i = 0) {
		let r
		if (!(i & te.IgnoreOverlays) && (r = ji.get(this._tree)) && r.overlay) {
			const s = e - this.from,
				o = i & te.EnterBracketed && r.bracketed
			for (const { from: a, to: l } of r.overlay)
				if ((t > 0 || o ? a <= s : a < s) && (t < 0 || o ? l >= s : l > s))
					return new Me(r.tree, r.overlay[0].from + this.from, -1, this)
		}
		return this.nextChild(0, 1, e, t, i)
	}
	nextSignificantParent() {
		let e = this
		for (; e.type.isAnonymous && e._parent; ) e = e._parent
		return e
	}
	get parent() {
		return this._parent ? this._parent.nextSignificantParent() : null
	}
	get nextSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null
	}
	get prevSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null
	}
	get tree() {
		return this._tree
	}
	toTree() {
		return this._tree
	}
	toString() {
		return this._tree.toString()
	}
}
function sc(n, e, t, i) {
	const r = n.cursor(),
		s = []
	if (!r.firstChild()) return s
	if (t != null) {
		for (let o = !1; !o; ) if (((o = r.type.is(t)), !r.nextSibling())) return s
	}
	for (;;) {
		if (i != null && r.type.is(i)) return s
		if ((r.type.is(e) && s.push(r.node), !r.nextSibling())) return i == null ? s : []
	}
}
function No(n, e, t = e.length - 1) {
	for (let i = n; t >= 0; i = i.parent) {
		if (!i) return !1
		if (!i.type.isAnonymous) {
			if (e[t] && e[t] != i.name) return !1
			t--
		}
	}
	return !0
}
class km {
	constructor(e, t, i, r) {
		;(this.parent = e), (this.buffer = t), (this.index = i), (this.start = r)
	}
}
class kt extends Vu {
	get name() {
		return this.type.name
	}
	get from() {
		return this.context.start + this.context.buffer.buffer[this.index + 1]
	}
	get to() {
		return this.context.start + this.context.buffer.buffer[this.index + 2]
	}
	constructor(e, t, i) {
		super(),
			(this.context = e),
			(this._parent = t),
			(this.index = i),
			(this.type = e.buffer.set.types[e.buffer.buffer[i]])
	}
	child(e, t, i) {
		const { buffer: r } = this.context,
			s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, i)
		return s < 0 ? null : new kt(this.context, this, s)
	}
	get firstChild() {
		return this.child(1, 0, 4)
	}
	get lastChild() {
		return this.child(-1, 0, 4)
	}
	childAfter(e) {
		return this.child(1, e, 2)
	}
	childBefore(e) {
		return this.child(-1, e, -2)
	}
	prop(e) {
		return this.type.prop(e)
	}
	enter(e, t, i = 0) {
		if (i & te.ExcludeBuffers) return null
		const { buffer: r } = this.context,
			s = r.findChild(this.index + 4, r.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t)
		return s < 0 ? null : new kt(this.context, this, s)
	}
	get parent() {
		return this._parent || this.context.parent.nextSignificantParent()
	}
	externalSibling(e) {
		return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4)
	}
	get nextSibling() {
		const { buffer: e } = this.context,
			t = e.buffer[this.index + 3]
		return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)
			? new kt(this.context, this._parent, t)
			: this.externalSibling(1)
	}
	get prevSibling() {
		const { buffer: e } = this.context,
			t = this._parent ? this._parent.index + 4 : 0
		return this.index == t
			? this.externalSibling(-1)
			: new kt(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4))
	}
	get tree() {
		return null
	}
	toTree() {
		const e = [],
			t = [],
			{ buffer: i } = this.context,
			r = this.index + 4,
			s = i.buffer[this.index + 3]
		if (s > r) {
			const o = i.buffer[this.index + 1]
			e.push(i.slice(r, s, o)), t.push(0)
		}
		return new fe(this.type, e, t, this.to - this.from)
	}
	toString() {
		return this.context.buffer.childString(this.index)
	}
}
function Bu(n) {
	if (!n.length) return null
	let e = 0,
		t = n[0]
	for (let s = 1; s < n.length; s++) {
		const o = n[s]
		;(o.from > t.from || o.to < t.to) && ((t = o), (e = s))
	}
	const i = t instanceof Me && t.index < 0 ? null : t.parent,
		r = n.slice()
	return i ? (r[e] = i) : r.splice(e, 1), new Pm(r, t)
}
class Pm {
	constructor(e, t) {
		;(this.heads = e), (this.node = t)
	}
	get next() {
		return Bu(this.heads)
	}
}
function Tm(n, e, t) {
	let i = n.resolveInner(e, t),
		r = null
	for (let s = i instanceof Me ? i : i.context.parent; s; s = s.parent)
		if (s.index < 0) {
			const o = s.parent
			;(r || (r = [i])).push(o.resolve(e, t)), (s = o)
		} else {
			const o = ji.get(s.tree)
			if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
				const a = new Me(o.tree, o.overlay[0].from + s.from, -1, s)
				;(r || (r = [i])).push(kn(a, e, t, !1))
			}
		}
	return r ? Bu(r) : i
}
class jr {
	get name() {
		return this.type.name
	}
	constructor(e, t = 0) {
		if (
			((this.buffer = null),
			(this.stack = []),
			(this.index = 0),
			(this.bufferNode = null),
			(this.mode = t & ~te.EnterBracketed),
			e instanceof Me)
		)
			this.yieldNode(e)
		else {
			;(this._tree = e.context.parent), (this.buffer = e.context)
			for (let i = e._parent; i; i = i._parent) this.stack.unshift(i.index)
			;(this.bufferNode = e), this.yieldBuf(e.index)
		}
	}
	yieldNode(e) {
		return e ? ((this._tree = e), (this.type = e.type), (this.from = e.from), (this.to = e.to), !0) : !1
	}
	yieldBuf(e, t) {
		this.index = e
		const { start: i, buffer: r } = this.buffer
		return (
			(this.type = t || r.set.types[r.buffer[e]]),
			(this.from = i + r.buffer[e + 1]),
			(this.to = i + r.buffer[e + 2]),
			!0
		)
	}
	yield(e) {
		return e
			? e instanceof Me
				? ((this.buffer = null), this.yieldNode(e))
				: ((this.buffer = e.context), this.yieldBuf(e.index, e.type))
			: !1
	}
	toString() {
		return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
	}
	enterChild(e, t, i) {
		if (!this.buffer)
			return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode))
		const { buffer: r } = this.buffer,
			s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, i)
		return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s))
	}
	firstChild() {
		return this.enterChild(1, 0, 4)
	}
	lastChild() {
		return this.enterChild(-1, 0, 4)
	}
	childAfter(e) {
		return this.enterChild(1, e, 2)
	}
	childBefore(e) {
		return this.enterChild(-1, e, -2)
	}
	enter(e, t, i = this.mode) {
		return this.buffer ? (i & te.ExcludeBuffers ? !1 : this.enterChild(1, e, t)) : this.yield(this._tree.enter(e, t, i))
	}
	parent() {
		if (!this.buffer) return this.yieldNode(this.mode & te.IncludeAnonymous ? this._tree._parent : this._tree.parent)
		if (this.stack.length) return this.yieldBuf(this.stack.pop())
		const e = this.mode & te.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent()
		return (this.buffer = null), this.yieldNode(e)
	}
	sibling(e) {
		if (!this.buffer)
			return this._tree._parent
				? this.yield(
						this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode),
					)
				: !1
		const { buffer: t } = this.buffer,
			i = this.stack.length - 1
		if (e < 0) {
			const r = i < 0 ? 0 : this.stack[i] + 4
			if (this.index != r) return this.yieldBuf(t.findChild(r, this.index, -1, 0, 4))
		} else {
			const r = t.buffer[this.index + 3]
			if (r < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3])) return this.yieldBuf(r)
		}
		return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1
	}
	nextSibling() {
		return this.sibling(1)
	}
	prevSibling() {
		return this.sibling(-1)
	}
	atLastNode(e) {
		let t,
			i,
			{ buffer: r } = this
		if (r) {
			if (e > 0) {
				if (this.index < r.buffer.buffer.length) return !1
			} else for (let s = 0; s < this.index; s++) if (r.buffer.buffer[s + 3] < this.index) return !1
			;({ index: t, parent: i } = r)
		} else ({ index: t, _parent: i } = this._tree)
		for (; i; { index: t, _parent: i } = i)
			if (t > -1)
				for (let s = t + e, o = e < 0 ? -1 : i._tree.children.length; s != o; s += e) {
					const a = i._tree.children[s]
					if (this.mode & te.IncludeAnonymous || a instanceof ei || !a.type.isAnonymous || Za(a)) return !1
				}
		return !0
	}
	move(e, t) {
		if (t && this.enterChild(e, 0, 4)) return !0
		for (;;) {
			if (this.sibling(e)) return !0
			if (this.atLastNode(e) || !this.parent()) return !1
		}
	}
	next(e = !0) {
		return this.move(1, e)
	}
	prev(e = !0) {
		return this.move(-1, e)
	}
	moveTo(e, t = 0) {
		for (
			;
			(this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) &&
			this.parent();
		);
		for (; this.enterChild(1, e, t); );
		return this
	}
	get node() {
		if (!this.buffer) return this._tree
		let e = this.bufferNode,
			t = null,
			i = 0
		if (e && e.context == this.buffer)
			e: for (let r = this.index, s = this.stack.length; s >= 0; ) {
				for (let o = e; o; o = o._parent)
					if (o.index == r) {
						if (r == this.index) return o
						;(t = o), (i = s + 1)
						break e
					}
				r = this.stack[--s]
			}
		for (let r = i; r < this.stack.length; r++) t = new kt(this.buffer, t, this.stack[r])
		return (this.bufferNode = new kt(this.buffer, t, this.index))
	}
	get tree() {
		return this.buffer ? null : this._tree._tree
	}
	iterate(e, t) {
		for (let i = 0; ; ) {
			let r = !1
			if (this.type.isAnonymous || e(this) !== !1) {
				if (this.firstChild()) {
					i++
					continue
				}
				this.type.isAnonymous || (r = !0)
			}
			for (;;) {
				if ((r && t && t(this), (r = this.type.isAnonymous), !i)) return
				if (this.nextSibling()) break
				this.parent(), i--, (r = !0)
			}
		}
	}
	matchContext(e) {
		if (!this.buffer) return No(this.node.parent, e)
		const { buffer: t } = this.buffer,
			{ types: i } = t.set
		for (let r = e.length - 1, s = this.stack.length - 1; r >= 0; s--) {
			if (s < 0) return No(this._tree, e, r)
			const o = i[t.buffer[this.stack[s]]]
			if (!o.isAnonymous) {
				if (e[r] && e[r] != o.name) return !1
				r--
			}
		}
		return !0
	}
}
function Za(n) {
	return n.children.some((e) => e instanceof ei || !e.type.isAnonymous || Za(e))
}
function Cm(n) {
	var e
	let { buffer: t, nodeSet: i, maxBufferLength: r = Yu, reused: s = [], minRepeatType: o = i.types.length } = n,
		a = Array.isArray(t) ? new Ca(t, t.length) : t,
		l = i.types,
		c = 0,
		h = 0
	function u($, y, Q, P, X, M) {
		const { id: E, start: j, end: N, size: I } = a,
			q = h,
			K = c
		if (I < 0)
			if ((a.next(), I == -1)) {
				const L = s[E]
				Q.push(L), P.push(j - $)
				return
			} else if (I == -3) {
				c = E
				return
			} else if (I == -4) {
				h = E
				return
			} else throw new RangeError(`Unrecognized record size: ${I}`)
		let oe = l[E],
			J,
			me,
			Ge = j - $
		if (N - j <= r && (me = v(a.pos - y, X))) {
			let L = new Uint16Array(me.size - me.skip),
				Z = a.pos - me.size,
				V = L.length
			for (; a.pos > Z; ) V = m(me.start, L, V)
			;(J = new ei(L, N - me.start, i)), (Ge = me.start - $)
		} else {
			const L = a.pos - I
			a.next()
			let Z = [],
				V = [],
				B = E >= o ? E : -1,
				de = 0,
				Oe = N
			for (; a.pos > L; )
				B >= 0 && a.id == B && a.size >= 0
					? (a.end <= Oe - r && (O(Z, V, j, de, a.end, Oe, B, q, K), (de = Z.length), (Oe = a.end)), a.next())
					: M > 2500
						? f(j, L, Z, V)
						: u(j, L, Z, V, B, M + 1)
			if (
				(B >= 0 && de > 0 && de < Z.length && O(Z, V, j, de, j, Oe, B, q, K),
				Z.reverse(),
				V.reverse(),
				B > -1 && de > 0)
			) {
				const ae = d(oe, K)
				J = Ra(oe, Z, V, 0, Z.length, 0, N - j, ae, ae)
			} else J = p(oe, Z, V, N - j, q - N, K)
		}
		Q.push(J), P.push(Ge)
	}
	function f($, y, Q, P) {
		let X = [],
			M = 0,
			E = -1
		for (; a.pos > y; ) {
			const { id: j, start: N, end: I, size: q } = a
			if (q > 4) a.next()
			else {
				if (E > -1 && N < E) break
				E < 0 && (E = I - r), X.push(j, N, I), M++, a.next()
			}
		}
		if (M) {
			const j = new Uint16Array(M * 4),
				N = X[X.length - 2]
			for (let I = X.length - 3, q = 0; I >= 0; I -= 3)
				(j[q++] = X[I]), (j[q++] = X[I + 1] - N), (j[q++] = X[I + 2] - N), (j[q++] = q)
			Q.push(new ei(j, X[2] - N, i)), P.push(N - $)
		}
	}
	function d($, y) {
		return (Q, P, X) => {
			let M = 0,
				E = Q.length - 1,
				j,
				N
			if (E >= 0 && (j = Q[E]) instanceof fe) {
				if (!E && j.type == $ && j.length == X) return j
				;(N = j.prop(G.lookAhead)) && (M = P[E] + j.length + N)
			}
			return p($, Q, P, X, M, y)
		}
	}
	function O($, y, Q, P, X, M, E, j, N) {
		const I = [],
			q = []
		for (; $.length > P; ) I.push($.pop()), q.push(y.pop() + Q - X)
		$.push(p(i.types[E], I, q, M - X, j - M, N)), y.push(X - Q)
	}
	function p($, y, Q, P, X, M, E) {
		if (M) {
			const j = [G.contextHash, M]
			E = E ? [j].concat(E) : [j]
		}
		if (X > 25) {
			const j = [G.lookAhead, X]
			E = E ? [j].concat(E) : [j]
		}
		return new fe($, y, Q, P, E)
	}
	function v($, y) {
		let Q = a.fork(),
			P = 0,
			X = 0,
			M = 0,
			E = Q.end - r,
			j = { size: 0, start: 0, skip: 0 }
		e: for (let N = Q.pos - $; Q.pos > N; ) {
			const I = Q.size
			if (Q.id == y && I >= 0) {
				;(j.size = P), (j.start = X), (j.skip = M), (M += 4), (P += 4), Q.next()
				continue
			}
			const q = Q.pos - I
			if (I < 0 || q < N || Q.start < E) break
			let K = Q.id >= o ? 4 : 0,
				oe = Q.start
			for (Q.next(); Q.pos > q; ) {
				if (Q.size < 0)
					if (Q.size == -3 || Q.size == -4) K += 4
					else break e
				else Q.id >= o && (K += 4)
				Q.next()
			}
			;(X = oe), (P += I), (M += K)
		}
		return (y < 0 || P == $) && ((j.size = P), (j.start = X), (j.skip = M)), j.size > 4 ? j : void 0
	}
	function m($, y, Q) {
		const { id: P, start: X, end: M, size: E } = a
		if ((a.next(), E >= 0 && P < o)) {
			const j = Q
			if (E > 4) {
				const N = a.pos - (E - 4)
				for (; a.pos > N; ) Q = m($, y, Q)
			}
			;(y[--Q] = j), (y[--Q] = M - $), (y[--Q] = X - $), (y[--Q] = P)
		} else E == -3 ? (c = P) : E == -4 && (h = P)
		return Q
	}
	const g = [],
		b = []
	for (; a.pos > 0; ) u(n.start || 0, n.bufferStart || 0, g, b, -1, 0)
	const x = (e = n.length) !== null && e !== void 0 ? e : g.length ? b[0] + g[0].length : 0
	return new fe(l[n.topID], g.reverse(), b.reverse(), x)
}
const oc = new WeakMap()
function pr(n, e) {
	if (!n.isAnonymous || e instanceof ei || e.type != n) return 1
	let t = oc.get(e)
	if (t == null) {
		t = 1
		for (const i of e.children) {
			if (i.type != n || !(i instanceof fe)) {
				t = 1
				break
			}
			t += pr(n, i)
		}
		oc.set(e, t)
	}
	return t
}
function Ra(n, e, t, i, r, s, o, a, l) {
	let c = 0
	for (let O = i; O < r; O++) c += pr(n, e[O])
	const h = Math.ceil((c * 1.5) / 8),
		u = [],
		f = []
	function d(O, p, v, m, g) {
		for (let b = v; b < m; ) {
			let x = b,
				$ = p[b],
				y = pr(n, O[b])
			for (b++; b < m; b++) {
				const Q = pr(n, O[b])
				if (y + Q >= h) break
				y += Q
			}
			if (b == x + 1) {
				if (y > h) {
					const Q = O[x]
					d(Q.children, Q.positions, 0, Q.children.length, p[x] + g)
					continue
				}
				u.push(O[x])
			} else {
				const Q = p[b - 1] + O[b - 1].length - $
				u.push(Ra(n, O, p, x, b, $, Q, null, l))
			}
			f.push($ + g - s)
		}
	}
	return d(e, t, i, r, 0), (a || l)(u, f, o)
}
class qu {
	constructor() {
		this.map = new WeakMap()
	}
	setBuffer(e, t, i) {
		let r = this.map.get(e)
		r || this.map.set(e, (r = new Map())), r.set(t, i)
	}
	getBuffer(e, t) {
		const i = this.map.get(e)
		return i && i.get(t)
	}
	set(e, t) {
		e instanceof kt ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof Me && this.map.set(e.tree, t)
	}
	get(e) {
		return e instanceof kt ? this.getBuffer(e.context.buffer, e.index) : e instanceof Me ? this.map.get(e.tree) : void 0
	}
	cursorSet(e, t) {
		e.buffer ? this.setBuffer(e.buffer.buffer, e.index, t) : this.map.set(e.tree, t)
	}
	cursorGet(e) {
		return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree)
	}
}
class zt {
	constructor(e, t, i, r, s = !1, o = !1) {
		;(this.from = e), (this.to = t), (this.tree = i), (this.offset = r), (this.open = (s ? 1 : 0) | (o ? 2 : 0))
	}
	get openStart() {
		return (this.open & 1) > 0
	}
	get openEnd() {
		return (this.open & 2) > 0
	}
	static addTree(e, t = [], i = !1) {
		const r = [new zt(0, e.length, e, 0, !1, i)]
		for (const s of t) s.to > e.length && r.push(s)
		return r
	}
	static applyChanges(e, t, i = 128) {
		if (!t.length) return e
		let r = [],
			s = 1,
			o = e.length ? e[0] : null
		for (let a = 0, l = 0, c = 0; ; a++) {
			const h = a < t.length ? t[a] : null,
				u = h ? h.fromA : 1e9
			if (u - l >= i)
				for (; o && o.from < u; ) {
					let f = o
					if (l >= f.from || u <= f.to || c) {
						const d = Math.max(f.from, l) - c,
							O = Math.min(f.to, u) - c
						f = d >= O ? null : new zt(d, O, f.tree, f.offset + c, a > 0, !!h)
					}
					if ((f && r.push(f), o.to > u)) break
					o = s < e.length ? e[s++] : null
				}
			if (!h) break
			;(l = h.toA), (c = h.toA - h.toB)
		}
		return r
	}
}
class Gu {
	startParse(e, t, i) {
		return (
			typeof e == 'string' && (e = new Zm(e)),
			(i = i ? (i.length ? i.map((r) => new nt(r.from, r.to)) : [new nt(0, 0)]) : [new nt(0, e.length)]),
			this.createParse(e, t || [], i)
		)
	}
	parse(e, t, i) {
		const r = this.startParse(e, t, i)
		for (;;) {
			const s = r.advance()
			if (s) return s
		}
	}
}
class Zm {
	constructor(e) {
		this.string = e
	}
	get length() {
		return this.string.length
	}
	chunk(e) {
		return this.string.slice(e)
	}
	get lineChunks() {
		return !1
	}
	read(e, t) {
		return this.string.slice(e, t)
	}
}
function Rm(n) {
	return (e, t, i, r) => new jm(e, n, t, i, r)
}
class ac {
	constructor(e, t, i, r, s, o) {
		;(this.parser = e), (this.parse = t), (this.overlay = i), (this.bracketed = r), (this.target = s), (this.from = o)
	}
}
function lc(n) {
	if (!n.length || n.some((e) => e.from >= e.to))
		throw new RangeError('Invalid inner parse ranges given: ' + JSON.stringify(n))
}
class Am {
	constructor(e, t, i, r, s, o, a, l) {
		;(this.parser = e),
			(this.predicate = t),
			(this.mounts = i),
			(this.index = r),
			(this.start = s),
			(this.bracketed = o),
			(this.target = a),
			(this.prev = l),
			(this.depth = 0),
			(this.ranges = [])
	}
}
const Vo = new G({ perNode: !0 })
class jm {
	constructor(e, t, i, r, s) {
		;(this.nest = t),
			(this.input = i),
			(this.fragments = r),
			(this.ranges = s),
			(this.inner = []),
			(this.innerDone = 0),
			(this.baseTree = null),
			(this.stoppedAt = null),
			(this.baseParse = e)
	}
	advance() {
		if (this.baseParse) {
			const i = this.baseParse.advance()
			if (!i) return null
			if (((this.baseParse = null), (this.baseTree = i), this.startInner(), this.stoppedAt != null))
				for (const r of this.inner) r.parse.stopAt(this.stoppedAt)
		}
		if (this.innerDone == this.inner.length) {
			let i = this.baseTree
			return (
				this.stoppedAt != null &&
					(i = new fe(i.type, i.children, i.positions, i.length, i.propValues.concat([[Vo, this.stoppedAt]]))),
				i
			)
		}
		const e = this.inner[this.innerDone],
			t = e.parse.advance()
		if (t) {
			this.innerDone++
			const i = Object.assign(Object.create(null), e.target.props)
			;(i[G.mounted.id] = new ji(t, e.overlay, e.parser, e.bracketed)), (e.target.props = i)
		}
		return null
	}
	get parsedPos() {
		if (this.baseParse) return 0
		let e = this.input.length
		for (let t = this.innerDone; t < this.inner.length; t++)
			this.inner[t].from < e && (e = Math.min(e, this.inner[t].parse.parsedPos))
		return e
	}
	stopAt(e) {
		if (((this.stoppedAt = e), this.baseParse)) this.baseParse.stopAt(e)
		else for (let t = this.innerDone; t < this.inner.length; t++) this.inner[t].parse.stopAt(e)
	}
	startInner() {
		let e = new Em(this.fragments),
			t = null,
			i = null,
			r = new jr(new Me(this.baseTree, this.ranges[0].from, 0, null), te.IncludeAnonymous | te.IgnoreMounts)
		e: for (let s, o; ; ) {
			let a = !0,
				l
			if (this.stoppedAt != null && r.from >= this.stoppedAt) a = !1
			else if (e.hasNode(r)) {
				if (t) {
					const c = t.mounts.find((h) => h.frag.from <= r.from && h.frag.to >= r.to && h.mount.overlay)
					if (c)
						for (const h of c.mount.overlay) {
							const u = h.from + c.pos,
								f = h.to + c.pos
							u >= r.from &&
								f <= r.to &&
								!t.ranges.some((d) => d.from < f && d.to > u) &&
								t.ranges.push({ from: u, to: f })
						}
				}
				a = !1
			} else if (i && (o = Xm(i.ranges, r.from, r.to))) a = o != 2
			else if (!r.type.isAnonymous && (s = this.nest(r, this.input)) && (r.from < r.to || !s.overlay)) {
				r.tree || (Mm(r), t && t.depth++, i && i.depth++)
				const c = e.findMounts(r.from, s.parser)
				if (typeof s.overlay == 'function')
					t = new Am(s.parser, s.overlay, c, this.inner.length, r.from, !!s.bracketed, r.tree, t)
				else {
					const h = uc(this.ranges, s.overlay || (r.from < r.to ? [new nt(r.from, r.to)] : []))
					h.length && lc(h),
						(h.length || !s.overlay) &&
							this.inner.push(
								new ac(
									s.parser,
									h.length ? s.parser.startParse(this.input, fc(c, h), h) : s.parser.startParse(''),
									s.overlay ? s.overlay.map((u) => new nt(u.from - r.from, u.to - r.from)) : null,
									!!s.bracketed,
									r.tree,
									h.length ? h[0].from : r.from,
								),
							),
						s.overlay ? h.length && (i = { ranges: h, depth: 0, prev: i }) : (a = !1)
				}
			} else if (t && (l = t.predicate(r)) && (l === !0 && (l = new nt(r.from, r.to)), l.from < l.to)) {
				const c = t.ranges.length - 1
				c >= 0 && t.ranges[c].to == l.from ? (t.ranges[c] = { from: t.ranges[c].from, to: l.to }) : t.ranges.push(l)
			}
			if (a && r.firstChild()) t && t.depth++, i && i.depth++
			else
				for (; !r.nextSibling(); ) {
					if (!r.parent()) break e
					if (t && !--t.depth) {
						const c = uc(this.ranges, t.ranges)
						c.length &&
							(lc(c),
							this.inner.splice(
								t.index,
								0,
								new ac(
									t.parser,
									t.parser.startParse(this.input, fc(t.mounts, c), c),
									t.ranges.map((h) => new nt(h.from - t.start, h.to - t.start)),
									t.bracketed,
									t.target,
									c[0].from,
								),
							)),
							(t = t.prev)
					}
					i && !--i.depth && (i = i.prev)
				}
		}
	}
}
function Xm(n, e, t) {
	for (const i of n) {
		if (i.from >= t) break
		if (i.to > e) return i.from <= e && i.to >= t ? 2 : 1
	}
	return 0
}
function cc(n, e, t, i, r, s) {
	if (e < t) {
		const o = n.buffer[e + 1]
		i.push(n.slice(e, t, o)), r.push(o - s)
	}
}
function Mm(n) {
	const { node: e } = n,
		t = [],
		i = e.context.buffer
	do t.push(n.index), n.parent()
	while (!n.tree)
	const r = n.tree,
		s = r.children.indexOf(i),
		o = r.children[s],
		a = o.buffer,
		l = [s]
	function c(h, u, f, d, O, p) {
		const v = t[p],
			m = [],
			g = []
		cc(o, h, v, m, g, d)
		const b = a[v + 1],
			x = a[v + 2]
		l.push(m.length)
		const $ = p ? c(v + 4, a[v + 3], o.set.types[a[v]], b, x - b, p - 1) : e.toTree()
		return m.push($), g.push(b - d), cc(o, a[v + 3], u, m, g, d), new fe(f, m, g, O)
	}
	r.children[s] = c(0, a.length, De.none, 0, o.length, t.length - 1)
	for (const h of l) {
		const u = n.tree.children[h],
			f = n.tree.positions[h]
		n.yield(new Me(u, f + n.from, h, n._tree))
	}
}
class hc {
	constructor(e, t) {
		;(this.offset = t), (this.done = !1), (this.cursor = e.cursor(te.IncludeAnonymous | te.IgnoreMounts))
	}
	moveTo(e) {
		const { cursor: t } = this,
			i = e - this.offset
		for (; !this.done && t.from < i; )
			if (!(t.to >= e && t.enter(i, 1, te.IgnoreOverlays | te.ExcludeBuffers)))
				if (t.to <= e) t.next(!1) || (this.done = !0)
				else break
	}
	hasNode(e) {
		if ((this.moveTo(e.from), !this.done && this.cursor.from + this.offset == e.from && this.cursor.tree))
			for (let t = this.cursor.tree; ; ) {
				if (t == e.tree) return !0
				if (t.children.length && t.positions[0] == 0 && t.children[0] instanceof fe) t = t.children[0]
				else break
			}
		return !1
	}
}
const Em = class {
	constructor(e) {
		var t
		if (((this.fragments = e), (this.curTo = 0), (this.fragI = 0), e.length)) {
			const i = (this.curFrag = e[0])
			;(this.curTo = (t = i.tree.prop(Vo)) !== null && t !== void 0 ? t : i.to),
				(this.inner = new hc(i.tree, -i.offset))
		} else this.curFrag = this.inner = null
	}
	hasNode(e) {
		for (; this.curFrag && e.from >= this.curTo; ) this.nextFrag()
		return this.curFrag && this.curFrag.from <= e.from && this.curTo >= e.to && this.inner.hasNode(e)
	}
	nextFrag() {
		var e
		if ((this.fragI++, this.fragI == this.fragments.length)) this.curFrag = this.inner = null
		else {
			const t = (this.curFrag = this.fragments[this.fragI])
			;(this.curTo = (e = t.tree.prop(Vo)) !== null && e !== void 0 ? e : t.to),
				(this.inner = new hc(t.tree, -t.offset))
		}
	}
	findMounts(e, t) {
		var i
		const r = []
		if (this.inner) {
			this.inner.cursor.moveTo(e, 1)
			for (let s = this.inner.cursor.node; s; s = s.parent) {
				const o = (i = s.tree) === null || i === void 0 ? void 0 : i.prop(G.mounted)
				if (o && o.parser == t)
					for (let a = this.fragI; a < this.fragments.length; a++) {
						const l = this.fragments[a]
						if (l.from >= s.to) break
						l.tree == this.curFrag.tree && r.push({ frag: l, pos: s.from - l.offset, mount: o })
					}
			}
		}
		return r
	}
}
function uc(n, e) {
	let t = null,
		i = e
	for (let r = 1, s = 0; r < n.length; r++) {
		const o = n[r - 1].to,
			a = n[r].from
		for (; s < i.length; s++) {
			const l = i[s]
			if (l.from >= a) break
			l.to <= o ||
				(t || (i = t = e.slice()),
				l.from < o
					? ((t[s] = new nt(l.from, o)), l.to > a && t.splice(s + 1, 0, new nt(a, l.to)))
					: l.to > a
						? (t[s--] = new nt(a, l.to))
						: t.splice(s--, 1))
		}
	}
	return i
}
function _m(n, e, t, i) {
	let r = 0,
		s = 0,
		o = !1,
		a = !1,
		l = -1e9,
		c = []
	for (;;) {
		const h = r == n.length ? 1e9 : o ? n[r].to : n[r].from,
			u = s == e.length ? 1e9 : a ? e[s].to : e[s].from
		if (o != a) {
			const f = Math.max(l, t),
				d = Math.min(h, u, i)
			f < d && c.push(new nt(f, d))
		}
		if (((l = Math.min(h, u)), l == 1e9)) break
		h == l && (o ? ((o = !1), r++) : (o = !0)), u == l && (a ? ((a = !1), s++) : (a = !0))
	}
	return c
}
function fc(n, e) {
	const t = []
	for (const { pos: i, mount: r, frag: s } of n) {
		const o = i + (r.overlay ? r.overlay[0].from : 0),
			a = o + r.tree.length,
			l = Math.max(s.from, o),
			c = Math.min(s.to, a)
		if (r.overlay) {
			const h = r.overlay.map((f) => new nt(f.from + i, f.to + i)),
				u = _m(e, h, l, c)
			for (let f = 0, d = l; ; f++) {
				const O = f == u.length,
					p = O ? c : u[f].from
				if ((p > d && t.push(new zt(d, p, r.tree, -o, s.from >= d || s.openStart, s.to <= p || s.openEnd)), O)) break
				d = u[f].to
			}
		} else t.push(new zt(l, c, r.tree, -o, s.from >= o || s.openStart, s.to <= a || s.openEnd))
	}
	return t
}
let zm = 0
class et {
	constructor(e, t, i, r) {
		;(this.name = e), (this.set = t), (this.base = i), (this.modified = r), (this.id = zm++)
	}
	toString() {
		let { name: e } = this
		for (const t of this.modified) t.name && (e = `${t.name}(${e})`)
		return e
	}
	static define(e, t) {
		const i = typeof e == 'string' ? e : '?'
		if ((e instanceof et && (t = e), t?.base)) throw new Error('Can not derive from a modified tag')
		const r = new et(i, [], null, [])
		if ((r.set.push(r), t)) for (const s of t.set) r.set.push(s)
		return r
	}
	static defineModifier(e) {
		const t = new Xr(e)
		return (i) =>
			i.modified.indexOf(t) > -1
				? i
				: Xr.get(
						i.base || i,
						i.modified.concat(t).sort((r, s) => r.id - s.id),
					)
	}
}
let Im = 0
class Xr {
	constructor(e) {
		;(this.name = e), (this.instances = []), (this.id = Im++)
	}
	static get(e, t) {
		if (!t.length) return e
		const i = t[0].instances.find((a) => a.base == e && Lm(t, a.modified))
		if (i) return i
		const r = [],
			s = new et(e.name, r, e, t)
		for (const a of t) a.instances.push(s)
		const o = Dm(t)
		for (const a of e.set) if (!a.modified.length) for (const l of o) r.push(Xr.get(a, l))
		return s
	}
}
function Lm(n, e) {
	return n.length == e.length && n.every((t, i) => t == e[i])
}
function Dm(n) {
	const e = [[]]
	for (let t = 0; t < n.length; t++) for (let i = 0, r = e.length; i < r; i++) e.push(e[i].concat(n[t]))
	return e.sort((t, i) => i.length - t.length)
}
function ts(n) {
	const e = Object.create(null)
	for (const t in n) {
		let i = n[t]
		Array.isArray(i) || (i = [i])
		for (const r of t.split(' '))
			if (r) {
				let s = [],
					o = 2,
					a = r
				for (let u = 0; ; ) {
					if (a == '...' && u > 0 && u + 3 == r.length) {
						o = 1
						break
					}
					const f = /^"(?:[^"\\]|\\.)*?"|[^/!]+/.exec(a)
					if (!f) throw new RangeError('Invalid path: ' + r)
					if ((s.push(f[0] == '*' ? '' : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), (u += f[0].length), u == r.length))
						break
					const d = r[u++]
					if (u == r.length && d == '!') {
						o = 0
						break
					}
					if (d != '/') throw new RangeError('Invalid path: ' + r)
					a = r.slice(u)
				}
				const l = s.length - 1,
					c = s[l]
				if (!c) throw new RangeError('Invalid path: ' + r)
				const h = new Pn(i, o, l > 0 ? s.slice(0, l) : null)
				e[c] = h.sort(e[c])
			}
	}
	return Uu.add(e)
}
const Uu = new G({
	combine(n, e) {
		let t, i, r
		for (; n || e; ) {
			if (
				(!n || (e && n.depth >= e.depth) ? ((r = e), (e = e.next)) : ((r = n), (n = n.next)),
				t && t.mode == r.mode && !r.context && !t.context)
			)
				continue
			const s = new Pn(r.tags, r.mode, r.context)
			t ? (t.next = s) : (i = s), (t = s)
		}
		return i
	},
})
class Pn {
	constructor(e, t, i, r) {
		;(this.tags = e), (this.mode = t), (this.context = i), (this.next = r)
	}
	get opaque() {
		return this.mode == 0
	}
	get inherit() {
		return this.mode == 1
	}
	sort(e) {
		return !e || e.depth < this.depth ? ((this.next = e), this) : ((e.next = this.sort(e.next)), e)
	}
	get depth() {
		return this.context ? this.context.length : 0
	}
}
Pn.empty = new Pn([], 2, null)
function Fu(n, e) {
	const t = Object.create(null)
	for (const s of n)
		if (!Array.isArray(s.tag)) t[s.tag.id] = s.class
		else for (const o of s.tag) t[o.id] = s.class
	const { scope: i, all: r = null } = e || {}
	return {
		style: (s) => {
			let o = r
			for (const a of s)
				for (const l of a.set) {
					const c = t[l.id]
					if (c) {
						o = o ? o + ' ' + c : c
						break
					}
				}
			return o
		},
		scope: i,
	}
}
function Wm(n, e) {
	let t = null
	for (const i of n) {
		const r = i.style(e)
		r && (t = t ? t + ' ' + r : r)
	}
	return t
}
function Hu(n, e, t, i = 0, r = n.length) {
	const s = new Ym(i, Array.isArray(e) ? e : [e], t)
	s.highlightRange(n.cursor(), i, r, '', s.highlighters), s.flush(r)
}
class Ym {
	constructor(e, t, i) {
		;(this.at = e), (this.highlighters = t), (this.span = i), (this.class = '')
	}
	startSpan(e, t) {
		t != this.class && (this.flush(e), e > this.at && (this.at = e), (this.class = t))
	}
	flush(e) {
		e > this.at && this.class && this.span(this.at, e, this.class)
	}
	highlightRange(e, t, i, r, s) {
		const { type: o, from: a, to: l } = e
		if (a >= i || l <= t) return
		o.isTop && (s = this.highlighters.filter((d) => !d.scope || d.scope(o)))
		let c = r,
			h = Nm(e) || Pn.empty,
			u = Wm(s, h.tags)
		if (
			(u && (c && (c += ' '), (c += u), h.mode == 1 && (r += (r ? ' ' : '') + u)),
			this.startSpan(Math.max(t, a), c),
			h.opaque)
		)
			return
		const f = e.tree && e.tree.prop(G.mounted)
		if (f && f.overlay) {
			const d = e.node.enter(f.overlay[0].from + a, 1),
				O = this.highlighters.filter((v) => !v.scope || v.scope(f.tree.type)),
				p = e.firstChild()
			for (let v = 0, m = a; ; v++) {
				const g = v < f.overlay.length ? f.overlay[v] : null,
					b = g ? g.from + a : l,
					x = Math.max(t, m),
					$ = Math.min(i, b)
				if (x < $ && p)
					for (
						;
						e.from < $ &&
						(this.highlightRange(e, x, $, r, s),
						this.startSpan(Math.min($, e.to), c),
						!(e.to >= b || !e.nextSibling()));
					);
				if (!g || b > i) break
				;(m = g.to + a),
					m > t &&
						(this.highlightRange(d.cursor(), Math.max(t, g.from + a), Math.min(i, m), '', O),
						this.startSpan(Math.min(i, m), c))
			}
			p && e.parent()
		} else if (e.firstChild()) {
			f && (r = '')
			do
				if (!(e.to <= t)) {
					if (e.from >= i) break
					this.highlightRange(e, t, i, r, s), this.startSpan(Math.min(i, e.to), c)
				}
			while (e.nextSibling())
			e.parent()
		}
	}
}
function Nm(n) {
	let e = n.type.prop(Uu)
	for (; e && e.context && !n.matchContext(e.context); ) e = e.next
	return e || null
}
const A = et.define,
	Jn = A(),
	Yt = A(),
	dc = A(Yt),
	Oc = A(Yt),
	Nt = A(),
	er = A(Nt),
	Ms = A(Nt),
	yt = A(),
	ni = A(yt),
	vt = A(),
	bt = A(),
	Bo = A(),
	en = A(Bo),
	tr = A(),
	w = {
		comment: Jn,
		lineComment: A(Jn),
		blockComment: A(Jn),
		docComment: A(Jn),
		name: Yt,
		variableName: A(Yt),
		typeName: dc,
		tagName: A(dc),
		propertyName: Oc,
		attributeName: A(Oc),
		className: A(Yt),
		labelName: A(Yt),
		namespace: A(Yt),
		macroName: A(Yt),
		literal: Nt,
		string: er,
		docString: A(er),
		character: A(er),
		attributeValue: A(er),
		number: Ms,
		integer: A(Ms),
		float: A(Ms),
		bool: A(Nt),
		regexp: A(Nt),
		escape: A(Nt),
		color: A(Nt),
		url: A(Nt),
		keyword: vt,
		self: A(vt),
		null: A(vt),
		atom: A(vt),
		unit: A(vt),
		modifier: A(vt),
		operatorKeyword: A(vt),
		controlKeyword: A(vt),
		definitionKeyword: A(vt),
		moduleKeyword: A(vt),
		operator: bt,
		derefOperator: A(bt),
		arithmeticOperator: A(bt),
		logicOperator: A(bt),
		bitwiseOperator: A(bt),
		compareOperator: A(bt),
		updateOperator: A(bt),
		definitionOperator: A(bt),
		typeOperator: A(bt),
		controlOperator: A(bt),
		punctuation: Bo,
		separator: A(Bo),
		bracket: en,
		angleBracket: A(en),
		squareBracket: A(en),
		paren: A(en),
		brace: A(en),
		content: yt,
		heading: ni,
		heading1: A(ni),
		heading2: A(ni),
		heading3: A(ni),
		heading4: A(ni),
		heading5: A(ni),
		heading6: A(ni),
		contentSeparator: A(yt),
		list: A(yt),
		quote: A(yt),
		emphasis: A(yt),
		strong: A(yt),
		link: A(yt),
		monospace: A(yt),
		strikethrough: A(yt),
		inserted: A(),
		deleted: A(),
		changed: A(),
		invalid: A(),
		meta: tr,
		documentMeta: A(tr),
		annotation: A(tr),
		processingInstruction: A(tr),
		definition: et.defineModifier('definition'),
		constant: et.defineModifier('constant'),
		function: et.defineModifier('function'),
		standard: et.defineModifier('standard'),
		local: et.defineModifier('local'),
		special: et.defineModifier('special'),
	}
for (const n in w) {
	const e = w[n]
	e instanceof et && (e.name = n)
}
Fu([
	{ tag: w.link, class: 'tok-link' },
	{ tag: w.heading, class: 'tok-heading' },
	{ tag: w.emphasis, class: 'tok-emphasis' },
	{ tag: w.strong, class: 'tok-strong' },
	{ tag: w.keyword, class: 'tok-keyword' },
	{ tag: w.atom, class: 'tok-atom' },
	{ tag: w.bool, class: 'tok-bool' },
	{ tag: w.url, class: 'tok-url' },
	{ tag: w.labelName, class: 'tok-labelName' },
	{ tag: w.inserted, class: 'tok-inserted' },
	{ tag: w.deleted, class: 'tok-deleted' },
	{ tag: w.literal, class: 'tok-literal' },
	{ tag: w.string, class: 'tok-string' },
	{ tag: w.number, class: 'tok-number' },
	{ tag: [w.regexp, w.escape, w.special(w.string)], class: 'tok-string2' },
	{ tag: w.variableName, class: 'tok-variableName' },
	{ tag: w.local(w.variableName), class: 'tok-variableName tok-local' },
	{ tag: w.definition(w.variableName), class: 'tok-variableName tok-definition' },
	{ tag: w.special(w.variableName), class: 'tok-variableName2' },
	{ tag: w.definition(w.propertyName), class: 'tok-propertyName tok-definition' },
	{ tag: w.typeName, class: 'tok-typeName' },
	{ tag: w.namespace, class: 'tok-namespace' },
	{ tag: w.className, class: 'tok-className' },
	{ tag: w.macroName, class: 'tok-macroName' },
	{ tag: w.propertyName, class: 'tok-propertyName' },
	{ tag: w.operator, class: 'tok-operator' },
	{ tag: w.comment, class: 'tok-comment' },
	{ tag: w.meta, class: 'tok-meta' },
	{ tag: w.invalid, class: 'tok-invalid' },
	{ tag: w.punctuation, class: 'tok-punctuation' },
])
var Es
const Ti = new G()
function Ku(n) {
	return W.define({ combine: n ? (e) => e.concat(n) : void 0 })
}
const Aa = new G()
class ut {
	constructor(e, t, i = [], r = '') {
		;(this.data = e),
			(this.name = r),
			Object.hasOwn(ee.prototype, 'tree') ||
				Object.defineProperty(ee.prototype, 'tree', {
					get() {
						return ke(this)
					},
				}),
			(this.parser = t),
			(this.extension = [
				Yi.of(this),
				ee.languageData.of((s, o, a) => {
					const l = pc(s, o, a),
						c = l.type.prop(Ti)
					if (!c) return []
					const h = s.facet(c),
						u = l.type.prop(Aa)
					if (u) {
						const f = l.resolve(o - l.from, a)
						for (const d of u)
							if (d.test(f, s)) {
								const O = s.facet(d.facet)
								return d.type == 'replace' ? O : O.concat(h)
							}
					}
					return h
				}),
			].concat(i))
	}
	isActiveAt(e, t, i = -1) {
		return pc(e, t, i).type.prop(Ti) == this.data
	}
	findRegions(e) {
		const t = e.facet(Yi)
		if (t?.data == this.data) return [{ from: 0, to: e.doc.length }]
		if (!t || !t.allowsNesting) return []
		const i = [],
			r = (s, o) => {
				if (s.prop(Ti) == this.data) {
					i.push({ from: o, to: o + s.length })
					return
				}
				const a = s.prop(G.mounted)
				if (a) {
					if (a.tree.prop(Ti) == this.data) {
						if (a.overlay) for (const l of a.overlay) i.push({ from: l.from + o, to: l.to + o })
						else i.push({ from: o, to: o + s.length })
						return
					}
					if (a.overlay) {
						const l = i.length
						if ((r(a.tree, a.overlay[0].from + o), i.length > l)) return
					}
				}
				for (let l = 0; l < s.children.length; l++) {
					const c = s.children[l]
					c instanceof fe && r(c, s.positions[l] + o)
				}
			}
		return r(ke(e), 0), i
	}
	get allowsNesting() {
		return !0
	}
}
ut.setState = re.define()
function pc(n, e, t) {
	let i = n.facet(Yi),
		r = ke(n).topNode
	if (!i || i.allowsNesting)
		for (let s = r; s; s = s.enter(e, t, te.ExcludeBuffers | te.EnterBracketed)) s.type.isTop && (r = s)
	return r
}
class Di extends ut {
	constructor(e, t, i) {
		super(e, t, [], i), (this.parser = t)
	}
	static define(e) {
		const t = Ku(e.languageData)
		return new Di(t, e.parser.configure({ props: [Ti.add((i) => (i.isTop ? t : void 0))] }), e.name)
	}
	configure(e, t) {
		return new Di(this.data, this.parser.configure(e), t || this.name)
	}
	get allowsNesting() {
		return this.parser.hasWrappers()
	}
}
function ke(n) {
	const e = n.field(ut.state, !1)
	return e ? e.tree : fe.empty
}
class Vm {
	constructor(e) {
		;(this.doc = e), (this.cursorPos = 0), (this.string = ''), (this.cursor = e.iter())
	}
	get length() {
		return this.doc.length
	}
	syncTo(e) {
		return (
			(this.string = this.cursor.next(e - this.cursorPos).value),
			(this.cursorPos = e + this.string.length),
			this.cursorPos - this.string.length
		)
	}
	chunk(e) {
		return this.syncTo(e), this.string
	}
	get lineChunks() {
		return !0
	}
	read(e, t) {
		const i = this.cursorPos - this.string.length
		return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i)
	}
}
let tn = null
class Mr {
	constructor(e, t, i = [], r, s, o, a, l) {
		;(this.parser = e),
			(this.state = t),
			(this.fragments = i),
			(this.tree = r),
			(this.treeLen = s),
			(this.viewport = o),
			(this.skipped = a),
			(this.scheduleOn = l),
			(this.parse = null),
			(this.tempSkipped = [])
	}
	static create(e, t, i) {
		return new Mr(e, t, [], fe.empty, 0, i, [], null)
	}
	startParse() {
		return this.parser.startParse(new Vm(this.state.doc), this.fragments)
	}
	work(e, t) {
		return (
			t != null && t >= this.state.doc.length && (t = void 0),
			this.tree != fe.empty && this.isDone(t ?? this.state.doc.length)
				? (this.takeTree(), !0)
				: this.withContext(() => {
						var i
						if (typeof e == 'number') {
							const r = Date.now() + e
							e = () => Date.now() > r
						}
						for (
							this.parse || (this.parse = this.startParse()),
								t != null &&
									(this.parse.stoppedAt == null || this.parse.stoppedAt > t) &&
									t < this.state.doc.length &&
									this.parse.stopAt(t);
							;
						) {
							const r = this.parse.advance()
							if (r)
								if (
									((this.fragments = this.withoutTempSkipped(
										zt.addTree(r, this.fragments, this.parse.stoppedAt != null),
									)),
									(this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length),
									(this.tree = r),
									(this.parse = null),
									this.treeLen < (t ?? this.state.doc.length))
								)
									this.parse = this.startParse()
								else return !0
							if (e()) return !1
						}
					})
		)
	}
	takeTree() {
		let e, t
		this.parse &&
			(e = this.parse.parsedPos) >= this.treeLen &&
			((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e),
			this.withContext(() => {
				for (; !(t = this.parse.advance()); );
			}),
			(this.treeLen = e),
			(this.tree = t),
			(this.fragments = this.withoutTempSkipped(zt.addTree(this.tree, this.fragments, !0))),
			(this.parse = null))
	}
	withContext(e) {
		const t = tn
		tn = this
		try {
			return e()
		} finally {
			tn = t
		}
	}
	withoutTempSkipped(e) {
		for (let t; (t = this.tempSkipped.pop()); ) e = gc(e, t.from, t.to)
		return e
	}
	changes(e, t) {
		let { fragments: i, tree: r, treeLen: s, viewport: o, skipped: a } = this
		if ((this.takeTree(), !e.empty)) {
			const l = []
			if (
				(e.iterChangedRanges((c, h, u, f) => l.push({ fromA: c, toA: h, fromB: u, toB: f })),
				(i = zt.applyChanges(i, l)),
				(r = fe.empty),
				(s = 0),
				(o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }),
				this.skipped.length)
			) {
				a = []
				for (const c of this.skipped) {
					const h = e.mapPos(c.from, 1),
						u = e.mapPos(c.to, -1)
					h < u && a.push({ from: h, to: u })
				}
			}
		}
		return new Mr(this.parser, t, i, r, s, o, a, this.scheduleOn)
	}
	updateViewport(e) {
		if (this.viewport.from == e.from && this.viewport.to == e.to) return !1
		this.viewport = e
		const t = this.skipped.length
		for (let i = 0; i < this.skipped.length; i++) {
			const { from: r, to: s } = this.skipped[i]
			r < e.to && s > e.from && ((this.fragments = gc(this.fragments, r, s)), this.skipped.splice(i--, 1))
		}
		return this.skipped.length >= t ? !1 : (this.reset(), !0)
	}
	reset() {
		this.parse && (this.takeTree(), (this.parse = null))
	}
	skipUntilInView(e, t) {
		this.skipped.push({ from: e, to: t })
	}
	static getSkippingParser(e) {
		return new (class extends Gu {
			createParse(t, i, r) {
				const s = r[0].from,
					o = r[r.length - 1].to
				return {
					parsedPos: s,
					advance() {
						const l = tn
						if (l) {
							for (const c of r) l.tempSkipped.push(c)
							e && (l.scheduleOn = l.scheduleOn ? Promise.all([l.scheduleOn, e]) : e)
						}
						return (this.parsedPos = o), new fe(De.none, [], [], o - s)
					},
					stoppedAt: null,
					stopAt() {},
				}
			}
		})()
	}
	isDone(e) {
		e = Math.min(e, this.state.doc.length)
		const t = this.fragments
		return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e
	}
	static get() {
		return tn
	}
}
function gc(n, e, t) {
	return zt.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }])
}
class Wi {
	constructor(e) {
		;(this.context = e), (this.tree = e.tree)
	}
	apply(e) {
		if (!e.docChanged && this.tree == this.context.tree) return this
		const t = this.context.changes(e.changes, e.state),
			i =
				this.context.treeLen == e.startState.doc.length
					? void 0
					: Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to)
		return t.work(20, i) || t.takeTree(), new Wi(t)
	}
	static init(e) {
		const t = Math.min(3e3, e.doc.length),
			i = Mr.create(e.facet(Yi).parser, e, { from: 0, to: t })
		return i.work(20, t) || i.takeTree(), new Wi(i)
	}
}
ut.state = Rt.define({
	create: Wi.init,
	update(n, e) {
		for (const t of e.effects) if (t.is(ut.setState)) return t.value
		return e.startState.facet(Yi) != e.state.facet(Yi) ? Wi.init(e.state) : n.apply(e)
	},
})
let Ju = (n) => {
	const e = setTimeout(() => n(), 500)
	return () => clearTimeout(e)
}
typeof requestIdleCallback < 'u' &&
	(Ju = (n) => {
		let e = -1,
			t = setTimeout(() => {
				e = requestIdleCallback(n, { timeout: 400 })
			}, 100)
		return () => (e < 0 ? clearTimeout(t) : cancelIdleCallback(e))
	})
const _s =
		typeof navigator < 'u' && !((Es = navigator.scheduling) === null || Es === void 0) && Es.isInputPending
			? () => navigator.scheduling.isInputPending()
			: null,
	Bm = Ke.fromClass(
		class {
			constructor(e) {
				;(this.view = e),
					(this.working = null),
					(this.workScheduled = 0),
					(this.chunkEnd = -1),
					(this.chunkBudget = -1),
					(this.work = this.work.bind(this)),
					this.scheduleWork()
			}
			update(e) {
				const t = this.view.state.field(ut.state).context
				;(t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(),
					(e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()),
					this.checkAsyncSchedule(t)
			}
			scheduleWork() {
				if (this.working) return
				const { state: e } = this.view,
					t = e.field(ut.state)
				;(t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = Ju(this.work))
			}
			work(e) {
				this.working = null
				const t = Date.now()
				if (
					(this.chunkEnd < t &&
						(this.chunkEnd < 0 || this.view.hasFocus) &&
						((this.chunkEnd = t + 3e4), (this.chunkBudget = 3e3)),
					this.chunkBudget <= 0)
				)
					return
				const {
						state: i,
						viewport: { to: r },
					} = this.view,
					s = i.field(ut.state)
				if (s.tree == s.context.tree && s.context.isDone(r + 1e5)) return
				const o = Date.now() + Math.min(this.chunkBudget, 100, e && !_s ? Math.max(25, e.timeRemaining() - 5) : 1e9),
					a = s.context.treeLen < r && i.doc.length > r + 1e3,
					l = s.context.work(() => (_s && _s()) || Date.now() > o, r + (a ? 0 : 1e5))
				;(this.chunkBudget -= Date.now() - t),
					(l || this.chunkBudget <= 0) &&
						(s.context.takeTree(), this.view.dispatch({ effects: ut.setState.of(new Wi(s.context)) })),
					this.chunkBudget > 0 && !(l && !a) && this.scheduleWork(),
					this.checkAsyncSchedule(s.context)
			}
			checkAsyncSchedule(e) {
				e.scheduleOn &&
					(this.workScheduled++,
					e.scheduleOn
						.then(() => this.scheduleWork())
						.catch((t) => Qt(this.view.state, t))
						.then(() => this.workScheduled--),
					(e.scheduleOn = null))
			}
			destroy() {
				this.working && this.working()
			}
			isWorking() {
				return !!(this.working || this.workScheduled > 0)
			}
		},
		{
			eventHandlers: {
				focus() {
					this.scheduleWork()
				},
			},
		},
	),
	Yi = W.define({
		combine(n) {
			return n.length ? n[0] : null
		},
		enables: (n) => [
			ut.state,
			Bm,
			Y.contentAttributes.compute([n], (e) => {
				const t = e.facet(n)
				return t && t.name ? { 'data-language': t.name } : {}
			}),
		],
	})
class ja {
	constructor(e, t = []) {
		;(this.language = e), (this.support = t), (this.extension = [e, t])
	}
}
const qm = W.define(),
	is = W.define({
		combine: (n) => {
			if (!n.length) return '  '
			const e = n[0]
			if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
				throw new Error('Invalid indent unit: ' + JSON.stringify(n[0]))
			return e
		},
	})
function Er(n) {
	const e = n.facet(is)
	return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length
}
function _r(n, e) {
	let t = '',
		i = n.tabSize,
		r = n.facet(is)[0]
	if (r == '	') {
		for (; e >= i; ) (t += '	'), (e -= i)
		r = ' '
	}
	for (let s = 0; s < e; s++) t += r
	return t
}
function ef(n, e) {
	n instanceof ee && (n = new ns(n))
	for (const i of n.state.facet(qm)) {
		const r = i(n, e)
		if (r !== void 0) return r
	}
	const t = ke(n.state)
	return t.length >= e ? Gm(n, t, e) : null
}
class ns {
	constructor(e, t = {}) {
		;(this.state = e), (this.options = t), (this.unit = Er(e))
	}
	lineAt(e, t = 1) {
		const i = this.state.doc.lineAt(e),
			{ simulateBreak: r, simulateDoubleBreak: s } = this.options
		return r != null && r >= i.from && r <= i.to
			? s && r == e
				? { text: '', from: e }
				: (t < 0 ? r < e : r <= e)
					? { text: i.text.slice(r - i.from), from: r }
					: { text: i.text.slice(0, r - i.from), from: i.from }
			: i
	}
	textAfterPos(e, t = 1) {
		if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return ''
		const { text: i, from: r } = this.lineAt(e, t)
		return i.slice(e - r, Math.min(i.length, e + 100 - r))
	}
	column(e, t = 1) {
		let { text: i, from: r } = this.lineAt(e, t),
			s = this.countColumn(i, e - r),
			o = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1
		return o > -1 && (s += o - this.countColumn(i, i.search(/\S|$/))), s
	}
	countColumn(e, t = e.length) {
		return Mn(e, this.state.tabSize, t)
	}
	lineIndent(e, t = 1) {
		const { text: i, from: r } = this.lineAt(e, t),
			s = this.options.overrideIndentation
		if (s) {
			const o = s(r)
			if (o > -1) return o
		}
		return this.countColumn(i, i.search(/\S|$/))
	}
	get simulatedBreak() {
		return this.options.simulateBreak || null
	}
}
const rs = new G()
function Gm(n, e, t) {
	let i = e.resolveStack(t),
		r = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t)
	if (r != i.node) {
		const s = []
		for (
			let o = r;
			o && !(o.from < i.node.from || o.to > i.node.to || (o.from == i.node.from && o.type == i.node.type));
			o = o.parent
		)
			s.push(o)
		for (let o = s.length - 1; o >= 0; o--) i = { node: s[o], next: i }
	}
	return tf(i, n, t)
}
function tf(n, e, t) {
	for (let i = n; i; i = i.next) {
		const r = Fm(i.node)
		if (r) return r(Xa.create(e, t, i))
	}
	return 0
}
function Um(n) {
	return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak
}
function Fm(n) {
	const e = n.type.prop(rs)
	if (e) return e
	let t = n.firstChild,
		i
	if (t && (i = t.type.prop(G.closedBy))) {
		const r = n.lastChild,
			s = r && i.indexOf(r.name) > -1
		return (o) => nf(o, !0, 1, void 0, s && !Um(o) ? r.from : void 0)
	}
	return n.parent == null ? Hm : null
}
function Hm() {
	return 0
}
class Xa extends ns {
	constructor(e, t, i) {
		super(e.state, e.options), (this.base = e), (this.pos = t), (this.context = i)
	}
	get node() {
		return this.context.node
	}
	static create(e, t, i) {
		return new Xa(e, t, i)
	}
	get textAfter() {
		return this.textAfterPos(this.pos)
	}
	get baseIndent() {
		return this.baseIndentFor(this.node)
	}
	baseIndentFor(e) {
		let t = this.state.doc.lineAt(e.from)
		for (;;) {
			let i = e.resolve(t.from)
			for (; i.parent && i.parent.from == i.from; ) i = i.parent
			if (Km(i, e)) break
			t = this.state.doc.lineAt(i.from)
		}
		return this.lineIndent(t.from)
	}
	continue() {
		return tf(this.context.next, this.base, this.pos)
	}
}
function Km(n, e) {
	for (let t = e; t; t = t.parent) if (n == t) return !0
	return !1
}
function Jm(n) {
	const e = n.node,
		t = e.childAfter(e.from),
		i = e.lastChild
	if (!t) return null
	const r = n.options.simulateBreak,
		s = n.state.doc.lineAt(t.from),
		o = r == null || r <= s.from ? s.to : Math.min(s.to, r)
	for (let a = t.to; ; ) {
		const l = e.childAfter(a)
		if (!l || l == i) return null
		if (!l.type.isSkipped) {
			if (l.from >= o) return null
			const c = /^ */.exec(s.text.slice(t.to - s.from))[0].length
			return { from: t.from, to: t.to + c }
		}
		a = l.to
	}
}
function e0({ closing: n, align: e = !0, units: t = 1 }) {
	return (i) => nf(i, e, t, n)
}
function nf(n, e, t, i, r) {
	const s = n.textAfter,
		o = s.match(/^\s*/)[0].length,
		a = (i && s.slice(o, o + i.length) == i) || r == n.pos + o,
		l = e ? Jm(n) : null
	return l ? (a ? n.column(l.from) : n.column(l.to)) : n.baseIndent + (a ? 0 : n.unit * t)
}
const t0 = (n) => n.baseIndent
function gr({ except: n, units: e = 1 } = {}) {
	return (t) => {
		const i = n && n.test(t.textAfter)
		return t.baseIndent + (i ? 0 : e * t.unit)
	}
}
const Ma = new G()
function rf(n) {
	const e = n.firstChild,
		t = n.lastChild
	return e && e.to < t.from ? { from: e.to, to: t.type.isError ? n.to : t.from } : null
}
class ss {
	constructor(e, t) {
		this.specs = e
		let i
		function r(a) {
			const l = Ht.newName()
			return ((i || (i = Object.create(null)))['.' + l] = a), l
		}
		const s = typeof t.all == 'string' ? t.all : t.all ? r(t.all) : void 0,
			o = t.scope
		;(this.scope = o instanceof ut ? (a) => a.prop(Ti) == o.data : o ? (a) => a == o : void 0),
			(this.style = Fu(
				e.map((a) => ({ tag: a.tag, class: a.class || r(Object.assign({}, a, { tag: null })) })),
				{ all: s },
			).style),
			(this.module = i ? new Ht(i) : null),
			(this.themeType = t.themeType)
	}
	static define(e, t) {
		return new ss(e, t || {})
	}
}
const qo = W.define(),
	i0 = W.define({
		combine(n) {
			return n.length ? [n[0]] : null
		},
	})
function zs(n) {
	const e = n.facet(qo)
	return e.length ? e : n.facet(i0)
}
function n0(n, e) {
	let t = [s0],
		i
	return (
		n instanceof ss && (n.module && t.push(Y.styleModule.of(n.module)), (i = n.themeType)),
		i
			? t.push(qo.computeN([Y.darkTheme], (r) => (r.facet(Y.darkTheme) == (i == 'dark') ? [n] : [])))
			: t.push(qo.of(n)),
		t
	)
}
class r0 {
	constructor(e) {
		;(this.markCache = Object.create(null)),
			(this.tree = ke(e.state)),
			(this.decorations = this.buildDeco(e, zs(e.state))),
			(this.decoratedTo = e.viewport.to)
	}
	update(e) {
		const t = ke(e.state),
			i = zs(e.state),
			r = i != zs(e.startState),
			{ viewport: s } = e.view,
			o = e.changes.mapPos(this.decoratedTo, 1)
		t.length < s.to && !r && t.type == this.tree.type && o >= s.to
			? ((this.decorations = this.decorations.map(e.changes)), (this.decoratedTo = o))
			: (t != this.tree || e.viewportChanged || r) &&
				((this.tree = t), (this.decorations = this.buildDeco(e.view, i)), (this.decoratedTo = s.to))
	}
	buildDeco(e, t) {
		if (!t || !this.tree.length) return U.none
		const i = new _i()
		for (const { from: r, to: s } of e.visibleRanges)
			Hu(
				this.tree,
				t,
				(o, a, l) => {
					i.add(o, a, this.markCache[l] || (this.markCache[l] = U.mark({ class: l })))
				},
				r,
				s,
			)
		return i.finish()
	}
}
const s0 = qr.high(Ke.fromClass(r0, { decorations: (n) => n.decorations })),
	o0 = Y.baseTheme({
		'&.cm-focused .cm-matchingBracket': { backgroundColor: '#328c8252' },
		'&.cm-focused .cm-nonmatchingBracket': { backgroundColor: '#bb555544' },
	}),
	sf = 1e4,
	of = '()[]{}',
	af = W.define({
		combine(n) {
			return Ur(n, { afterCursor: !0, brackets: of, maxScanDistance: sf, renderMatch: c0 })
		},
	}),
	a0 = U.mark({ class: 'cm-matchingBracket' }),
	l0 = U.mark({ class: 'cm-nonmatchingBracket' })
function c0(n) {
	const e = [],
		t = n.matched ? a0 : l0
	return e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e
}
function mc(n) {
	let e = [],
		t = n.facet(af)
	for (const i of n.selection.ranges) {
		if (!i.empty) continue
		const r =
			Pt(n, i.head, -1, t) ||
			(i.head > 0 && Pt(n, i.head - 1, 1, t)) ||
			(t.afterCursor && (Pt(n, i.head, 1, t) || (i.head < n.doc.length && Pt(n, i.head + 1, -1, t))))
		r && (e = e.concat(t.renderMatch(r, n)))
	}
	return U.set(e, !0)
}
const h0 = Ke.fromClass(
		class {
			constructor(n) {
				;(this.paused = !1), (this.decorations = mc(n.state))
			}
			update(n) {
				;(n.docChanged || n.selectionSet || this.paused) &&
					(n.view.composing
						? ((this.decorations = this.decorations.map(n.changes)), (this.paused = !0))
						: ((this.decorations = mc(n.state)), (this.paused = !1)))
			}
		},
		{ decorations: (n) => n.decorations },
	),
	u0 = [h0, o0]
function f0(n = {}) {
	return [af.of(n), u0]
}
const lf = new G()
function Go(n, e, t) {
	const i = n.prop(e < 0 ? G.openedBy : G.closedBy)
	if (i) return i
	if (n.name.length == 1) {
		const r = t.indexOf(n.name)
		if (r > -1 && r % 2 == (e < 0 ? 1 : 0)) return [t[r + e]]
	}
	return null
}
function Uo(n) {
	const e = n.type.prop(lf)
	return e ? e(n.node) : n
}
function Pt(n, e, t, i = {}) {
	const r = i.maxScanDistance || sf,
		s = i.brackets || of,
		o = ke(n),
		a = o.resolveInner(e, t)
	for (let l = a; l; l = l.parent) {
		const c = Go(l.type, t, s)
		if (c && l.from < l.to) {
			const h = Uo(l)
			if (h && (t > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to)) return d0(n, e, t, l, h, c, s)
		}
	}
	return O0(n, e, t, o, a.type, r, s)
}
function d0(n, e, t, i, r, s, o) {
	let a = i.parent,
		l = { from: r.from, to: r.to },
		c = 0,
		h = a?.cursor()
	if (h && (t < 0 ? h.childBefore(i.from) : h.childAfter(i.to)))
		do
			if (t < 0 ? h.to <= i.from : h.from >= i.to) {
				if (c == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to) {
					const u = Uo(h)
					return { start: l, end: u ? { from: u.from, to: u.to } : void 0, matched: !0 }
				}
				if (Go(h.type, t, o)) c++
				else if (Go(h.type, -t, o)) {
					if (c == 0) {
						const u = Uo(h)
						return { start: l, end: u && u.from < u.to ? { from: u.from, to: u.to } : void 0, matched: !1 }
					}
					c--
				}
			}
		while (t < 0 ? h.prevSibling() : h.nextSibling())
	return { start: l, matched: !1 }
}
function O0(n, e, t, i, r, s, o) {
	if (t < 0 ? !e : e == n.doc.length) return null
	const a = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1),
		l = o.indexOf(a)
	if (l < 0 || (l % 2 == 0) != t > 0) return null
	let c = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e },
		h = n.doc.iterRange(e, t > 0 ? n.doc.length : 0),
		u = 0
	for (let f = 0; !h.next().done && f <= s; ) {
		const d = h.value
		t < 0 && (f += d.length)
		const O = e + f * t
		for (let p = t > 0 ? 0 : d.length - 1, v = t > 0 ? d.length : -1; p != v; p += t) {
			const m = o.indexOf(d[p])
			if (!(m < 0 || i.resolveInner(O + p, 1).type != r))
				if ((m % 2 == 0) == t > 0) u++
				else {
					if (u == 1) return { start: c, end: { from: O + p, to: O + p + 1 }, matched: m >> 1 == l >> 1 }
					u--
				}
		}
		t > 0 && (f += d.length)
	}
	return h.done ? { start: c, matched: !1 } : null
}
const p0 = Object.create(null),
	vc = [De.none],
	bc = [],
	yc = Object.create(null),
	g0 = Object.create(null)
for (const [n, e] of [
	['variable', 'variableName'],
	['variable-2', 'variableName.special'],
	['string-2', 'string.special'],
	['def', 'variableName.definition'],
	['tag', 'tagName'],
	['attribute', 'attributeName'],
	['type', 'typeName'],
	['builtin', 'variableName.standard'],
	['qualifier', 'modifier'],
	['error', 'invalid'],
	['header', 'heading'],
	['property', 'propertyName'],
])
	g0[n] = m0(p0, e)
function Is(n, e) {
	bc.indexOf(n) > -1 || (bc.push(n), console.warn(e))
}
function m0(n, e) {
	const t = []
	for (const a of e.split(' ')) {
		let l = []
		for (const c of a.split('.')) {
			const h = n[c] || w[c]
			h
				? typeof h == 'function'
					? l.length
						? (l = l.map(h))
						: Is(c, `Modifier ${c} used at start of tag`)
					: l.length
						? Is(c, `Tag ${c} used as modifier`)
						: (l = Array.isArray(h) ? h : [h])
				: Is(c, `Unknown highlighting tag ${c}`)
		}
		for (const c of l) t.push(c)
	}
	if (!t.length) return 0
	const i = e.replace(/ /g, '_'),
		r = i + ' ' + t.map((a) => a.id),
		s = yc[r]
	if (s) return s.id
	const o = (yc[r] = De.define({ id: vc.length, name: i, props: [ts({ [i]: t })] }))
	return vc.push(o), o.id
}
be.RTL, be.LTR
function Sc(n) {
	let e = Object.keys(n).join(''),
		t = /\w/.test(e)
	return t && (e = e.replace(/\w/g, '')), `[${t ? '\\w' : ''}${e.replace(/[^\w\s]/g, '\\$&')}]`
}
function v0(n) {
	const e = Object.create(null),
		t = Object.create(null)
	for (const { label: r } of n) {
		e[r[0]] = !0
		for (let s = 1; s < r.length; s++) t[r[s]] = !0
	}
	const i = Sc(e) + Sc(t) + '*$'
	return [new RegExp('^' + i), new RegExp(i)]
}
function b0(n) {
	const e = n.map((r) => (typeof r == 'string' ? { label: r } : r)),
		[t, i] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : v0(e)
	return (r) => {
		const s = r.matchBefore(i)
		return s || r.explicit ? { from: s ? s.from : r.pos, options: e, validFor: t } : null
	}
}
function y0(n, e) {
	return (t) => {
		for (let i = ke(t.state).resolveInner(t.pos, -1); i; i = i.parent) {
			if (n.indexOf(i.name) > -1) return null
			if (i.type.isTop) break
		}
		return e(t)
	}
}
const S0 = ft.define(),
	x0 = Y.baseTheme({
		'.cm-tooltip.cm-tooltip-autocomplete': {
			'& > ul': {
				fontFamily: 'monospace',
				whiteSpace: 'nowrap',
				overflow: 'hidden auto',
				maxWidth_fallback: '700px',
				maxWidth: 'min(700px, 95vw)',
				minWidth: '250px',
				maxHeight: '10em',
				height: '100%',
				listStyle: 'none',
				margin: 0,
				padding: 0,
				'& > li, & > completion-section': { padding: '1px 3px', lineHeight: 1.2 },
				'& > li': { overflowX: 'hidden', textOverflow: 'ellipsis', cursor: 'pointer' },
				'& > completion-section': {
					display: 'list-item',
					borderBottom: '1px solid silver',
					paddingLeft: '0.5em',
					opacity: 0.7,
				},
			},
		},
		'&light .cm-tooltip-autocomplete ul li[aria-selected]': { background: '#17c', color: 'white' },
		'&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]': { background: '#777' },
		'&dark .cm-tooltip-autocomplete ul li[aria-selected]': { background: '#347', color: 'white' },
		'&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]': { background: '#444' },
		'.cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after': {
			content: '"···"',
			opacity: 0.5,
			display: 'block',
			textAlign: 'center',
		},
		'.cm-tooltip.cm-completionInfo': {
			position: 'absolute',
			padding: '3px 9px',
			width: 'max-content',
			maxWidth: '400px',
			boxSizing: 'border-box',
			whiteSpace: 'pre-line',
		},
		'.cm-completionInfo.cm-completionInfo-left': { right: '100%' },
		'.cm-completionInfo.cm-completionInfo-right': { left: '100%' },
		'.cm-completionInfo.cm-completionInfo-left-narrow': { right: '30px' },
		'.cm-completionInfo.cm-completionInfo-right-narrow': { left: '30px' },
		'&light .cm-snippetField': { backgroundColor: '#00000022' },
		'&dark .cm-snippetField': { backgroundColor: '#ffffff22' },
		'.cm-snippetFieldPosition': {
			verticalAlign: 'text-top',
			width: 0,
			height: '1.15em',
			display: 'inline-block',
			margin: '0 -0.7px -.7em',
			borderLeft: '1.4px dotted #888',
		},
		'.cm-completionMatchedText': { textDecoration: 'underline' },
		'.cm-completionDetail': { marginLeft: '0.5em', fontStyle: 'italic' },
		'.cm-completionIcon': {
			fontSize: '90%',
			width: '.8em',
			display: 'inline-block',
			textAlign: 'center',
			paddingRight: '.6em',
			opacity: '0.6',
			boxSizing: 'content-box',
		},
		'.cm-completionIcon-function, .cm-completionIcon-method': { '&:after': { content: "'ƒ'" } },
		'.cm-completionIcon-class': { '&:after': { content: "'○'" } },
		'.cm-completionIcon-interface': { '&:after': { content: "'◌'" } },
		'.cm-completionIcon-variable': { '&:after': { content: "'𝑥'" } },
		'.cm-completionIcon-constant': { '&:after': { content: "'𝐶'" } },
		'.cm-completionIcon-type': { '&:after': { content: "'𝑡'" } },
		'.cm-completionIcon-enum': { '&:after': { content: "'∪'" } },
		'.cm-completionIcon-property': { '&:after': { content: "'□'" } },
		'.cm-completionIcon-keyword': { '&:after': { content: "'🔑︎'" } },
		'.cm-completionIcon-namespace': { '&:after': { content: "'▢'" } },
		'.cm-completionIcon-text': { '&:after': { content: "'abc'", fontSize: '50%', verticalAlign: 'middle' } },
	})
class w0 {
	constructor(e, t, i, r) {
		;(this.field = e), (this.line = t), (this.from = i), (this.to = r)
	}
}
class Ea {
	constructor(e, t, i) {
		;(this.field = e), (this.from = t), (this.to = i)
	}
	map(e) {
		const t = e.mapPos(this.from, -1, je.TrackDel),
			i = e.mapPos(this.to, 1, je.TrackDel)
		return t == null || i == null ? null : new Ea(this.field, t, i)
	}
}
class _a {
	constructor(e, t) {
		;(this.lines = e), (this.fieldPositions = t)
	}
	instantiate(e, t) {
		const i = [],
			r = [t],
			s = e.doc.lineAt(t),
			o = /^\s*/.exec(s.text)[0]
		for (let l of this.lines) {
			if (i.length) {
				let c = o,
					h = /^\t*/.exec(l)[0].length
				for (let u = 0; u < h; u++) c += e.facet(is)
				r.push(t + c.length - h), (l = c + l.slice(h))
			}
			i.push(l), (t += l.length + 1)
		}
		const a = this.fieldPositions.map((l) => new Ea(l.field, r[l.line] + l.from, r[l.line] + l.to))
		return { text: i, ranges: a }
	}
	static parse(e) {
		let t = [],
			i = [],
			r = [],
			s
		for (let o of e.split(/\r\n?|\n/)) {
			for (; (s = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(o)); ) {
				let a = s[1] ? +s[1] : null,
					l = s[2] || s[3] || '',
					c = -1,
					h = l.replace(/\\[{}]/g, (u) => u[1])
				for (let u = 0; u < t.length; u++) (a != null ? t[u].seq == a : h && t[u].name == h) && (c = u)
				if (c < 0) {
					let u = 0
					for (; u < t.length && (a == null || (t[u].seq != null && t[u].seq < a)); ) u++
					t.splice(u, 0, { seq: a, name: h }), (c = u)
					for (const f of r) f.field >= c && f.field++
				}
				for (const u of r)
					if (u.line == i.length && u.from > s.index) {
						const f = s[2] ? 3 + (s[1] || '').length : 2
						;(u.from -= f), (u.to -= f)
					}
				r.push(new w0(c, i.length, s.index, s.index + h.length)),
					(o = o.slice(0, s.index) + l + o.slice(s.index + s[0].length))
			}
			;(o = o.replace(/\\([{}])/g, (a, l, c) => {
				for (const h of r) h.line == i.length && h.from > c && (h.from--, h.to--)
				return l
			})),
				i.push(o)
		}
		return new _a(i, r)
	}
}
const $0 = U.widget({
		widget: new (class extends vi {
			toDOM() {
				const n = document.createElement('span')
				return (n.className = 'cm-snippetFieldPosition'), n
			}
			ignoreEvent() {
				return !1
			}
		})(),
	}),
	Q0 = U.mark({ class: 'cm-snippetField' })
class Gi {
	constructor(e, t) {
		;(this.ranges = e),
			(this.active = t),
			(this.deco = U.set(
				e.map((i) => (i.from == i.to ? $0 : Q0).range(i.from, i.to)),
				!0,
			))
	}
	map(e) {
		const t = []
		for (const i of this.ranges) {
			const r = i.map(e)
			if (!r) return null
			t.push(r)
		}
		return new Gi(t, this.active)
	}
	selectionInsideField(e) {
		return e.ranges.every((t) => this.ranges.some((i) => i.field == this.active && i.from <= t.from && i.to >= t.to))
	}
}
const In = re.define({
		map(n, e) {
			return n && n.map(e)
		},
	}),
	k0 = re.define(),
	Tn = Rt.define({
		create() {
			return null
		},
		update(n, e) {
			for (const t of e.effects) {
				if (t.is(In)) return t.value
				if (t.is(k0) && n) return new Gi(n.ranges, t.value)
			}
			return (
				n && e.docChanged && (n = n.map(e.changes)),
				n && e.selection && !n.selectionInsideField(e.selection) && (n = null),
				n
			)
		},
		provide: (n) => Y.decorations.from(n, (e) => (e ? e.deco : U.none)),
	})
function za(n, e) {
	return T.create(n.filter((t) => t.field == e).map((t) => T.range(t.from, t.to)))
}
function P0(n) {
	const e = _a.parse(n)
	return (t, i, r, s) => {
		const { text: o, ranges: a } = e.instantiate(t.state, r),
			{ main: l } = t.state.selection,
			c = {
				changes: { from: r, to: s == l.from ? l.to : s, insert: H.of(o) },
				scrollIntoView: !0,
				annotations: i ? [S0.of(i), we.userEvent.of('input.complete')] : void 0,
			}
		if ((a.length && (c.selection = za(a, 0)), a.some((h) => h.field > 0))) {
			const h = new Gi(a, 0),
				u = (c.effects = [In.of(h)])
			t.state.field(Tn, !1) === void 0 && u.push(re.appendConfig.of([Tn, A0, j0, x0]))
		}
		t.dispatch(t.state.update(c))
	}
}
function cf(n) {
	return ({ state: e, dispatch: t }) => {
		const i = e.field(Tn, !1)
		if (!i || (n < 0 && i.active == 0)) return !1
		const r = i.active + n,
			s = n > 0 && !i.ranges.some((o) => o.field == r + n)
		return (
			t(e.update({ selection: za(i.ranges, r), effects: In.of(s ? null : new Gi(i.ranges, r)), scrollIntoView: !0 })),
			!0
		)
	}
}
const T0 = ({ state: n, dispatch: e }) => (n.field(Tn, !1) ? (e(n.update({ effects: In.of(null) })), !0) : !1),
	C0 = cf(1),
	Z0 = cf(-1),
	R0 = [
		{ key: 'Tab', run: C0, shift: Z0 },
		{ key: 'Escape', run: T0 },
	],
	xc = W.define({
		combine(n) {
			return n.length ? n[0] : R0
		},
	}),
	A0 = qr.highest(Ar.compute([xc], (n) => n.facet(xc)))
function Ye(n, e) {
	return { ...e, apply: P0(n) }
}
const j0 = Y.domEventHandlers({
		mousedown(n, e) {
			let t = e.state.field(Tn, !1),
				i
			if (!t || (i = e.posAtCoords({ x: n.clientX, y: n.clientY })) == null) return !1
			const r = t.ranges.find((s) => s.from <= i && s.to >= i)
			return !r || r.field == t.active
				? !1
				: (e.dispatch({
						selection: za(t.ranges, r.field),
						effects: In.of(t.ranges.some((s) => s.field > r.field) ? new Gi(t.ranges, r.field) : null),
						scrollIntoView: !0,
					}),
					!0)
		},
	}),
	Cn = { brackets: ['(', '[', '{', "'", '"'], before: ')]}:;>', stringPrefixes: [] },
	ci = re.define({
		map(n, e) {
			const t = e.mapPos(n, -1, je.TrackAfter)
			return t ?? void 0
		},
	}),
	Ia = new (class extends Ft {})()
Ia.startSide = 1
Ia.endSide = -1
const hf = Rt.define({
	create() {
		return F.empty
	},
	update(n, e) {
		if (((n = n.map(e.changes)), e.selection)) {
			const t = e.state.doc.lineAt(e.selection.main.head)
			n = n.update({ filter: (i) => i >= t.from && i <= t.to })
		}
		for (const t of e.effects) t.is(ci) && (n = n.update({ add: [Ia.range(t.value, t.value + 1)] }))
		return n
	},
})
function X0() {
	return [E0, hf]
}
const Ls = '()[]{}<>«»»«［］｛｝'
function uf(n) {
	for (let e = 0; e < Ls.length; e += 2) if (Ls.charCodeAt(e) == n) return Ls.charAt(e + 1)
	return GO(n < 128 ? n : n + 1)
}
function ff(n, e) {
	return n.languageDataAt('closeBrackets', e)[0] || Cn
}
const M0 = typeof navigator == 'object' && /Android\b/.test(navigator.userAgent),
	E0 = Y.inputHandler.of((n, e, t, i) => {
		if ((M0 ? n.composing : n.compositionStarted) || n.state.readOnly) return !1
		const r = n.state.selection.main
		if (i.length > 2 || (i.length == 2 && Br(mi(i, 0)) == 1) || e != r.from || t != r.to) return !1
		const s = I0(n.state, i)
		return s ? (n.dispatch(s), !0) : !1
	}),
	_0 = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1
		let i = ff(n, n.selection.main.head).brackets || Cn.brackets,
			r = null,
			s = n.changeByRange((o) => {
				if (o.empty) {
					const a = L0(n.doc, o.head)
					for (const l of i)
						if (l == a && os(n.doc, o.head) == uf(mi(l, 0)))
							return { changes: { from: o.head - l.length, to: o.head + l.length }, range: T.cursor(o.head - l.length) }
				}
				return { range: (r = o) }
			})
		return r || e(n.update(s, { scrollIntoView: !0, userEvent: 'delete.backward' })), !r
	},
	z0 = [{ key: 'Backspace', run: _0 }]
function I0(n, e) {
	const t = ff(n, n.selection.main.head),
		i = t.brackets || Cn.brackets
	for (const r of i) {
		const s = uf(mi(r, 0))
		if (e == r) return s == r ? Y0(n, r, i.indexOf(r + r + r) > -1, t) : D0(n, r, s, t.before || Cn.before)
		if (e == s && df(n, n.selection.main.from)) return W0(n, r, s)
	}
	return null
}
function df(n, e) {
	let t = !1
	return (
		n.field(hf).between(0, n.doc.length, (i) => {
			i == e && (t = !0)
		}),
		t
	)
}
function os(n, e) {
	const t = n.sliceString(e, e + 2)
	return t.slice(0, Br(mi(t, 0)))
}
function L0(n, e) {
	const t = n.sliceString(e - 2, e)
	return Br(mi(t, 0)) == t.length ? t : t.slice(1)
}
function D0(n, e, t, i) {
	let r = null,
		s = n.changeByRange((o) => {
			if (!o.empty)
				return {
					changes: [
						{ insert: e, from: o.from },
						{ insert: t, from: o.to },
					],
					effects: ci.of(o.to + e.length),
					range: T.range(o.anchor + e.length, o.head + e.length),
				}
			const a = os(n.doc, o.head)
			return !a || /\s/.test(a) || i.indexOf(a) > -1
				? {
						changes: { insert: e + t, from: o.head },
						effects: ci.of(o.head + e.length),
						range: T.cursor(o.head + e.length),
					}
				: { range: (r = o) }
		})
	return r ? null : n.update(s, { scrollIntoView: !0, userEvent: 'input.type' })
}
function W0(n, e, t) {
	let i = null,
		r = n.changeByRange((s) =>
			s.empty && os(n.doc, s.head) == t
				? { changes: { from: s.head, to: s.head + t.length, insert: t }, range: T.cursor(s.head + t.length) }
				: (i = { range: s }),
		)
	return i ? null : n.update(r, { scrollIntoView: !0, userEvent: 'input.type' })
}
function Y0(n, e, t, i) {
	let r = i.stringPrefixes || Cn.stringPrefixes,
		s = null,
		o = n.changeByRange((a) => {
			if (!a.empty)
				return {
					changes: [
						{ insert: e, from: a.from },
						{ insert: e, from: a.to },
					],
					effects: ci.of(a.to + e.length),
					range: T.range(a.anchor + e.length, a.head + e.length),
				}
			let l = a.head,
				c = os(n.doc, l),
				h
			if (c == e) {
				if (wc(n, l))
					return { changes: { insert: e + e, from: l }, effects: ci.of(l + e.length), range: T.cursor(l + e.length) }
				if (df(n, l)) {
					const f = t && n.sliceDoc(l, l + e.length * 3) == e + e + e ? e + e + e : e
					return { changes: { from: l, to: l + f.length, insert: f }, range: T.cursor(l + f.length) }
				}
			} else {
				if (t && n.sliceDoc(l - 2 * e.length, l) == e + e && (h = $c(n, l - 2 * e.length, r)) > -1 && wc(n, h))
					return {
						changes: { insert: e + e + e + e, from: l },
						effects: ci.of(l + e.length),
						range: T.cursor(l + e.length),
					}
				if (n.charCategorizer(l)(c) != tt.Word && $c(n, l, r) > -1 && !N0(n, l, e, r))
					return { changes: { insert: e + e, from: l }, effects: ci.of(l + e.length), range: T.cursor(l + e.length) }
			}
			return { range: (s = a) }
		})
	return s ? null : n.update(o, { scrollIntoView: !0, userEvent: 'input.type' })
}
function wc(n, e) {
	const t = ke(n).resolveInner(e + 1)
	return t.parent && t.from == e
}
function N0(n, e, t, i) {
	let r = ke(n).resolveInner(e, -1),
		s = i.reduce((o, a) => Math.max(o, a.length), 0)
	for (let o = 0; o < 5; o++) {
		const a = n.sliceDoc(r.from, Math.min(r.to, r.from + t.length + s)),
			l = a.indexOf(t)
		if (!l || (l > -1 && i.indexOf(a.slice(0, l)) > -1)) {
			let h = r.firstChild
			for (; h && h.from == r.from && h.to - h.from > t.length + l; ) {
				if (n.sliceDoc(h.to - t.length, h.to) == t) return !1
				h = h.firstChild
			}
			return !0
		}
		const c = r.to == e && r.parent
		if (!c) break
		r = c
	}
	return !1
}
function $c(n, e, t) {
	const i = n.charCategorizer(e)
	if (i(n.sliceDoc(e - 1, e)) != tt.Word) return e
	for (const r of t) {
		const s = e - r.length
		if (n.sliceDoc(s, e) == r && i(n.sliceDoc(s - 1, s)) != tt.Word) return s
	}
	return -1
}
const V0 = (n) => {
	const { state: e } = n,
		t = e.doc.lineAt(e.selection.main.from),
		i = Da(n.state, t.from)
	return i.line ? B0(n) : i.block ? G0(n) : !1
}
function La(n, e) {
	return ({ state: t, dispatch: i }) => {
		if (t.readOnly) return !1
		const r = n(e, t)
		return r ? (i(t.update(r)), !0) : !1
	}
}
const B0 = La(H0, 0),
	q0 = La(Of, 0),
	G0 = La((n, e) => Of(n, e, F0(e)), 0)
function Da(n, e) {
	const t = n.languageDataAt('commentTokens', e, 1)
	return t.length ? t[0] : {}
}
const nn = 50
function U0(n, { open: e, close: t }, i, r) {
	const s = n.sliceDoc(i - nn, i),
		o = n.sliceDoc(r, r + nn),
		a = /\s*$/.exec(s)[0].length,
		l = /^\s*/.exec(o)[0].length,
		c = s.length - a
	if (s.slice(c - e.length, c) == e && o.slice(l, l + t.length) == t)
		return { open: { pos: i - a, margin: a && 1 }, close: { pos: r + l, margin: l && 1 } }
	let h, u
	r - i <= 2 * nn ? (h = u = n.sliceDoc(i, r)) : ((h = n.sliceDoc(i, i + nn)), (u = n.sliceDoc(r - nn, r)))
	const f = /^\s*/.exec(h)[0].length,
		d = /\s*$/.exec(u)[0].length,
		O = u.length - d - t.length
	return h.slice(f, f + e.length) == e && u.slice(O, O + t.length) == t
		? {
				open: { pos: i + f + e.length, margin: /\s/.test(h.charAt(f + e.length)) ? 1 : 0 },
				close: { pos: r - d - t.length, margin: /\s/.test(u.charAt(O - 1)) ? 1 : 0 },
			}
		: null
}
function F0(n) {
	const e = []
	for (const t of n.selection.ranges) {
		let i = n.doc.lineAt(t.from),
			r = t.to <= i.to ? i : n.doc.lineAt(t.to)
		r.from > i.from && r.from == t.to && (r = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1))
		const s = e.length - 1
		s >= 0 && e[s].to > i.from ? (e[s].to = r.to) : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: r.to })
	}
	return e
}
function Of(n, e, t = e.selection.ranges) {
	const i = t.map((s) => Da(e, s.from).block)
	if (!i.every((s) => s)) return null
	const r = t.map((s, o) => U0(e, i[o], s.from, s.to))
	if (n != 2 && !r.every((s) => s))
		return {
			changes: e.changes(
				t.map((s, o) =>
					r[o]
						? []
						: [
								{ from: s.from, insert: i[o].open + ' ' },
								{ from: s.to, insert: ' ' + i[o].close },
							],
				),
			),
		}
	if (n != 1 && r.some((s) => s)) {
		const s = []
		for (let o = 0, a; o < r.length; o++)
			if ((a = r[o])) {
				const l = i[o],
					{ open: c, close: h } = a
				s.push(
					{ from: c.pos - l.open.length, to: c.pos + c.margin },
					{ from: h.pos - h.margin, to: h.pos + l.close.length },
				)
			}
		return { changes: s }
	}
	return null
}
function H0(n, e, t = e.selection.ranges) {
	let i = [],
		r = -1
	e: for (const { from: s, to: o } of t) {
		let a = i.length,
			l = 1e9,
			c
		for (let h = s; h <= o; ) {
			const u = e.doc.lineAt(h)
			if (c == null && ((c = Da(e, u.from).line), !c)) continue e
			if (u.from > r && (s == o || o > u.from)) {
				r = u.from
				const f = /^\s*/.exec(u.text)[0].length,
					d = f == u.length,
					O = u.text.slice(f, f + c.length) == c ? f : -1
				f < u.text.length && f < l && (l = f),
					i.push({ line: u, comment: O, token: c, indent: f, empty: d, single: !1 })
			}
			h = u.to + 1
		}
		if (l < 1e9) for (let h = a; h < i.length; h++) i[h].indent < i[h].line.text.length && (i[h].indent = l)
		i.length == a + 1 && (i[a].single = !0)
	}
	if (n != 2 && i.some((s) => s.comment < 0 && (!s.empty || s.single))) {
		const s = []
		for (const { line: a, token: l, indent: c, empty: h, single: u } of i)
			(u || !h) && s.push({ from: a.from + c, insert: l + ' ' })
		const o = e.changes(s)
		return { changes: o, selection: e.selection.map(o, 1) }
	}
	if (n != 1 && i.some((s) => s.comment >= 0)) {
		const s = []
		for (const { line: o, comment: a, token: l } of i)
			if (a >= 0) {
				let c = o.from + a,
					h = c + l.length
				o.text[h - o.from] == ' ' && h++, s.push({ from: c, to: h })
			}
		return { changes: s }
	}
	return null
}
const Fo = ft.define(),
	K0 = ft.define(),
	J0 = W.define(),
	pf = W.define({
		combine(n) {
			return Ur(
				n,
				{ minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t },
				{ minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (e, t) => (i, r) => e(i, r) || t(i, r) },
			)
		},
	}),
	gf = Rt.define({
		create() {
			return Tt.empty
		},
		update(n, e) {
			const t = e.state.facet(pf),
				i = e.annotation(Fo)
			if (i) {
				let l = Ve.fromTransaction(e, i.selection),
					c = i.side,
					h = c == 0 ? n.undone : n.done
				return (
					l ? (h = zr(h, h.length, t.minDepth, l)) : (h = bf(h, e.startState.selection)),
					new Tt(c == 0 ? i.rest : h, c == 0 ? h : i.rest)
				)
			}
			const r = e.annotation(K0)
			if (((r == 'full' || r == 'before') && (n = n.isolate()), e.annotation(we.addToHistory) === !1))
				return e.changes.empty ? n : n.addMapping(e.changes.desc)
			const s = Ve.fromTransaction(e),
				o = e.annotation(we.time),
				a = e.annotation(we.userEvent)
			return (
				s
					? (n = n.addChanges(s, o, a, t, e))
					: e.selection && (n = n.addSelection(e.startState.selection, o, a, t.newGroupDelay)),
				(r == 'full' || r == 'after') && (n = n.isolate()),
				n
			)
		},
		toJSON(n) {
			return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) }
		},
		fromJSON(n) {
			return new Tt(n.done.map(Ve.fromJSON), n.undone.map(Ve.fromJSON))
		},
	})
function ev(n = {}) {
	return [
		gf,
		pf.of(n),
		Y.domEventHandlers({
			beforeinput(e, t) {
				const i = e.inputType == 'historyUndo' ? mf : e.inputType == 'historyRedo' ? Ho : null
				return i ? (e.preventDefault(), i(t)) : !1
			},
		}),
	]
}
function as(n, e) {
	return ({ state: t, dispatch: i }) => {
		if (!e && t.readOnly) return !1
		const r = t.field(gf, !1)
		if (!r) return !1
		const s = r.pop(n, t, e)
		return s ? (i(s), !0) : !1
	}
}
const mf = as(0, !1),
	Ho = as(1, !1),
	tv = as(0, !0),
	iv = as(1, !0)
class Ve {
	constructor(e, t, i, r, s) {
		;(this.changes = e), (this.effects = t), (this.mapped = i), (this.startSelection = r), (this.selectionsAfter = s)
	}
	setSelAfter(e) {
		return new Ve(this.changes, this.effects, this.mapped, this.startSelection, e)
	}
	toJSON() {
		var e, t, i
		return {
			changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
			mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
			startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
			selectionsAfter: this.selectionsAfter.map((r) => r.toJSON()),
		}
	}
	static fromJSON(e) {
		return new Ve(
			e.changes && Qe.fromJSON(e.changes),
			[],
			e.mapped && Ct.fromJSON(e.mapped),
			e.startSelection && T.fromJSON(e.startSelection),
			e.selectionsAfter.map(T.fromJSON),
		)
	}
	static fromTransaction(e, t) {
		let i = rt
		for (const r of e.startState.facet(J0)) {
			const s = r(e)
			s.length && (i = i.concat(s))
		}
		return !i.length && e.changes.empty
			? null
			: new Ve(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, rt)
	}
	static selection(e) {
		return new Ve(void 0, rt, void 0, void 0, e)
	}
}
function zr(n, e, t, i) {
	const r = e + 1 > t + 20 ? e - t - 1 : 0,
		s = n.slice(r, e)
	return s.push(i), s
}
function nv(n, e) {
	let t = [],
		i = !1
	return (
		n.iterChangedRanges((r, s) => t.push(r, s)),
		e.iterChangedRanges((r, s, o, a) => {
			for (let l = 0; l < t.length; ) {
				const c = t[l++],
					h = t[l++]
				a >= c && o <= h && (i = !0)
			}
		}),
		i
	)
}
function rv(n, e) {
	return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0
}
function vf(n, e) {
	return n.length ? (e.length ? n.concat(e) : n) : e
}
const rt = [],
	sv = 200
function bf(n, e) {
	if (n.length) {
		const t = n[n.length - 1],
			i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - sv))
		return i.length && i[i.length - 1].eq(e) ? n : (i.push(e), zr(n, n.length - 1, 1e9, t.setSelAfter(i)))
	}
	return [Ve.selection([e])]
}
function ov(n) {
	const e = n[n.length - 1],
		t = n.slice()
	return (t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1))), t
}
function Ds(n, e) {
	if (!n.length) return n
	let t = n.length,
		i = rt
	for (; t; ) {
		const r = av(n[t - 1], e, i)
		if ((r.changes && !r.changes.empty) || r.effects.length) {
			const s = n.slice(0, t)
			return (s[t - 1] = r), s
		}
		;(e = r.mapped), t--, (i = r.selectionsAfter)
	}
	return i.length ? [Ve.selection(i)] : rt
}
function av(n, e, t) {
	const i = vf(n.selectionsAfter.length ? n.selectionsAfter.map((a) => a.map(e)) : rt, t)
	if (!n.changes) return Ve.selection(i)
	const r = n.changes.map(e),
		s = e.mapDesc(n.changes, !0),
		o = n.mapped ? n.mapped.composeDesc(s) : s
	return new Ve(r, re.mapEffects(n.effects, e), o, n.startSelection.map(s), i)
}
const lv = /^(input\.type|delete)($|\.)/
class Tt {
	constructor(e, t, i = 0, r = void 0) {
		;(this.done = e), (this.undone = t), (this.prevTime = i), (this.prevUserEvent = r)
	}
	isolate() {
		return this.prevTime ? new Tt(this.done, this.undone) : this
	}
	addChanges(e, t, i, r, s) {
		let o = this.done,
			a = o[o.length - 1]
		return (
			a &&
			a.changes &&
			!a.changes.empty &&
			e.changes &&
			(!i || lv.test(i)) &&
			((!a.selectionsAfter.length &&
				t - this.prevTime < r.newGroupDelay &&
				r.joinToEvent(s, nv(a.changes, e.changes))) ||
				i == 'input.type.compose')
				? (o = zr(
						o,
						o.length - 1,
						r.minDepth,
						new Ve(
							e.changes.compose(a.changes),
							vf(re.mapEffects(e.effects, a.changes), a.effects),
							a.mapped,
							a.startSelection,
							rt,
						),
					))
				: (o = zr(o, o.length, r.minDepth, e)),
			new Tt(o, rt, t, i)
		)
	}
	addSelection(e, t, i, r) {
		const s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : rt
		return s.length > 0 &&
			t - this.prevTime < r &&
			i == this.prevUserEvent &&
			i &&
			/^select($|\.)/.test(i) &&
			rv(s[s.length - 1], e)
			? this
			: new Tt(bf(this.done, e), this.undone, t, i)
	}
	addMapping(e) {
		return new Tt(Ds(this.done, e), Ds(this.undone, e), this.prevTime, this.prevUserEvent)
	}
	pop(e, t, i) {
		const r = e == 0 ? this.done : this.undone
		if (r.length == 0) return null
		const s = r[r.length - 1],
			o = s.selectionsAfter[0] || (s.startSelection ? s.startSelection.map(s.changes.invertedDesc, 1) : t.selection)
		if (i && s.selectionsAfter.length)
			return t.update({
				selection: s.selectionsAfter[s.selectionsAfter.length - 1],
				annotations: Fo.of({ side: e, rest: ov(r), selection: o }),
				userEvent: e == 0 ? 'select.undo' : 'select.redo',
				scrollIntoView: !0,
			})
		if (s.changes) {
			let a = r.length == 1 ? rt : r.slice(0, r.length - 1)
			return (
				s.mapped && (a = Ds(a, s.mapped)),
				t.update({
					changes: s.changes,
					selection: s.startSelection,
					effects: s.effects,
					annotations: Fo.of({ side: e, rest: a, selection: o }),
					filter: !1,
					userEvent: e == 0 ? 'undo' : 'redo',
					scrollIntoView: !0,
				})
			)
		}
		return null
	}
}
Tt.empty = new Tt(rt, rt)
const cv = [
	{ key: 'Mod-z', run: mf, preventDefault: !0 },
	{ key: 'Mod-y', mac: 'Mod-Shift-z', run: Ho, preventDefault: !0 },
	{ linux: 'Ctrl-Shift-z', run: Ho, preventDefault: !0 },
	{ key: 'Mod-u', run: tv, preventDefault: !0 },
	{ key: 'Alt-u', mac: 'Mod-Shift-u', run: iv, preventDefault: !0 },
]
function Ui(n, e) {
	return T.create(n.ranges.map(e), n.mainIndex)
}
function Ot(n, e) {
	return n.update({ selection: e, scrollIntoView: !0, userEvent: 'select' })
}
function pt({ state: n, dispatch: e }, t) {
	const i = Ui(n.selection, t)
	return i.eq(n.selection, !0) ? !1 : (e(Ot(n, i)), !0)
}
function ls(n, e) {
	return T.cursor(e ? n.to : n.from)
}
function yf(n, e) {
	return pt(n, (t) => (t.empty ? n.moveByChar(t, e) : ls(t, e)))
}
function Ee(n) {
	return n.textDirectionAt(n.state.selection.main.head) == be.LTR
}
const Sf = (n) => yf(n, !Ee(n)),
	xf = (n) => yf(n, Ee(n))
function wf(n, e) {
	return pt(n, (t) => (t.empty ? n.moveByGroup(t, e) : ls(t, e)))
}
const hv = (n) => wf(n, !Ee(n)),
	uv = (n) => wf(n, Ee(n))
function fv(n, e, t) {
	if (e.type.prop(t)) return !0
	const i = e.to - e.from
	return (i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to)))) || e.firstChild
}
function cs(n, e, t) {
	let i = ke(n).resolveInner(e.head),
		r = t ? G.closedBy : G.openedBy
	for (let l = e.head; ; ) {
		const c = t ? i.childAfter(l) : i.childBefore(l)
		if (!c) break
		fv(n, c, r) ? (i = c) : (l = t ? c.to : c.from)
	}
	let s = i.type.prop(r),
		o,
		a
	return (
		s && (o = t ? Pt(n, i.from, 1) : Pt(n, i.to, -1)) && o.matched
			? (a = t ? o.end.to : o.end.from)
			: (a = t ? i.to : i.from),
		T.cursor(a, t ? -1 : 1)
	)
}
const dv = (n) => pt(n, (e) => cs(n.state, e, !Ee(n))),
	Ov = (n) => pt(n, (e) => cs(n.state, e, Ee(n)))
function $f(n, e) {
	return pt(n, (t) => {
		if (!t.empty) return ls(t, e)
		const i = n.moveVertically(t, e)
		return i.head != t.head ? i : n.moveToLineBoundary(t, e)
	})
}
const Qf = (n) => $f(n, !1),
	kf = (n) => $f(n, !0)
function Pf(n) {
	let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2,
		t = 0,
		i = 0,
		r
	if (e) {
		for (const s of n.state.facet(Y.scrollMargins)) {
			const o = s(n)
			o?.top && (t = Math.max(o?.top, t)), o?.bottom && (i = Math.max(o?.bottom, i))
		}
		r = n.scrollDOM.clientHeight - t - i
	} else r = (n.dom.ownerDocument.defaultView || window).innerHeight
	return { marginTop: t, marginBottom: i, selfScroll: e, height: Math.max(n.defaultLineHeight, r - 5) }
}
function Tf(n, e) {
	const t = Pf(n),
		{ state: i } = n,
		r = Ui(i.selection, (o) => (o.empty ? n.moveVertically(o, e, t.height) : ls(o, e)))
	if (r.eq(i.selection)) return !1
	let s
	if (t.selfScroll) {
		const o = n.coordsAtPos(i.selection.main.head),
			a = n.scrollDOM.getBoundingClientRect(),
			l = a.top + t.marginTop,
			c = a.bottom - t.marginBottom
		o && o.top > l && o.bottom < c && (s = Y.scrollIntoView(r.main.head, { y: 'start', yMargin: o.top - l }))
	}
	return n.dispatch(Ot(i, r), { effects: s }), !0
}
const Qc = (n) => Tf(n, !1),
	Ko = (n) => Tf(n, !0)
function ti(n, e, t) {
	let i = n.lineBlockAt(e.head),
		r = n.moveToLineBoundary(e, t)
	if (
		(r.head == e.head && r.head != (t ? i.to : i.from) && (r = n.moveToLineBoundary(e, t, !1)),
		!t && r.head == i.from && i.length)
	) {
		const s = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length
		s && e.head != i.from + s && (r = T.cursor(i.from + s))
	}
	return r
}
const pv = (n) => pt(n, (e) => ti(n, e, !0)),
	gv = (n) => pt(n, (e) => ti(n, e, !1)),
	mv = (n) => pt(n, (e) => ti(n, e, !Ee(n))),
	vv = (n) => pt(n, (e) => ti(n, e, Ee(n))),
	bv = (n) => pt(n, (e) => T.cursor(n.lineBlockAt(e.head).from, 1)),
	yv = (n) => pt(n, (e) => T.cursor(n.lineBlockAt(e.head).to, -1))
function Sv(n, e, t) {
	let i = !1,
		r = Ui(n.selection, (s) => {
			const o =
				Pt(n, s.head, -1) ||
				Pt(n, s.head, 1) ||
				(s.head > 0 && Pt(n, s.head - 1, 1)) ||
				(s.head < n.doc.length && Pt(n, s.head + 1, -1))
			if (!o || !o.end) return s
			i = !0
			const a = o.start.from == s.head ? o.end.to : o.end.from
			return T.cursor(a)
		})
	return i ? (e(Ot(n, r)), !0) : !1
}
const xv = ({ state: n, dispatch: e }) => Sv(n, e)
function st(n, e) {
	const t = Ui(n.state.selection, (i) => {
		const r = e(i)
		return T.range(i.anchor, r.head, r.goalColumn, r.bidiLevel || void 0, r.assoc)
	})
	return t.eq(n.state.selection) ? !1 : (n.dispatch(Ot(n.state, t)), !0)
}
function Cf(n, e) {
	return st(n, (t) => n.moveByChar(t, e))
}
const Zf = (n) => Cf(n, !Ee(n)),
	Rf = (n) => Cf(n, Ee(n))
function Af(n, e) {
	return st(n, (t) => n.moveByGroup(t, e))
}
const wv = (n) => Af(n, !Ee(n)),
	$v = (n) => Af(n, Ee(n)),
	Qv = (n) => st(n, (e) => cs(n.state, e, !Ee(n))),
	kv = (n) => st(n, (e) => cs(n.state, e, Ee(n)))
function jf(n, e) {
	return st(n, (t) => n.moveVertically(t, e))
}
const Xf = (n) => jf(n, !1),
	Mf = (n) => jf(n, !0)
function Ef(n, e) {
	return st(n, (t) => n.moveVertically(t, e, Pf(n).height))
}
const kc = (n) => Ef(n, !1),
	Pc = (n) => Ef(n, !0),
	Pv = (n) => st(n, (e) => ti(n, e, !0)),
	Tv = (n) => st(n, (e) => ti(n, e, !1)),
	Cv = (n) => st(n, (e) => ti(n, e, !Ee(n))),
	Zv = (n) => st(n, (e) => ti(n, e, Ee(n))),
	Rv = (n) => st(n, (e) => T.cursor(n.lineBlockAt(e.head).from)),
	Av = (n) => st(n, (e) => T.cursor(n.lineBlockAt(e.head).to)),
	Tc = ({ state: n, dispatch: e }) => (e(Ot(n, { anchor: 0 })), !0),
	Cc = ({ state: n, dispatch: e }) => (e(Ot(n, { anchor: n.doc.length })), !0),
	Zc = ({ state: n, dispatch: e }) => (e(Ot(n, { anchor: n.selection.main.anchor, head: 0 })), !0),
	Rc = ({ state: n, dispatch: e }) => (e(Ot(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0),
	jv = ({ state: n, dispatch: e }) => (
		e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: 'select' })), !0
	),
	Xv = ({ state: n, dispatch: e }) => {
		const t = hs(n).map(({ from: i, to: r }) => T.range(i, Math.min(r + 1, n.doc.length)))
		return e(n.update({ selection: T.create(t), userEvent: 'select' })), !0
	},
	Mv = ({ state: n, dispatch: e }) => {
		const t = Ui(n.selection, (i) => {
			let r = ke(n),
				s = r.resolveStack(i.from, 1)
			if (i.empty) {
				const o = r.resolveStack(i.from, -1)
				o.node.from >= s.node.from && o.node.to <= s.node.to && (s = o)
			}
			for (let o = s; o; o = o.next) {
				const { node: a } = o
				if (((a.from < i.from && a.to >= i.to) || (a.to > i.to && a.from <= i.from)) && o.next)
					return T.range(a.to, a.from)
			}
			return i
		})
		return t.eq(n.selection) ? !1 : (e(Ot(n, t)), !0)
	}
function _f(n, e) {
	const { state: t } = n,
		i = t.selection,
		r = t.selection.ranges.slice()
	for (const s of t.selection.ranges) {
		const o = t.doc.lineAt(s.head)
		if (e ? o.to < n.state.doc.length : o.from > 0)
			for (let a = s; ; ) {
				const l = n.moveVertically(a, e)
				if (l.head < o.from || l.head > o.to) {
					r.some((c) => c.head == l.head) || r.push(l)
					break
				}
				if (l.head == a.head) break
				a = l
			}
	}
	return r.length == i.ranges.length ? !1 : (n.dispatch(Ot(t, T.create(r, r.length - 1))), !0)
}
const Ev = (n) => _f(n, !1),
	_v = (n) => _f(n, !0),
	zv = ({ state: n, dispatch: e }) => {
		let t = n.selection,
			i = null
		return (
			t.ranges.length > 1 ? (i = T.create([t.main])) : t.main.empty || (i = T.create([T.cursor(t.main.head)])),
			i ? (e(Ot(n, i)), !0) : !1
		)
	}
function Ln(n, e) {
	if (n.state.readOnly) return !1
	let t = 'delete.selection',
		{ state: i } = n,
		r = i.changeByRange((s) => {
			let { from: o, to: a } = s
			if (o == a) {
				let l = e(s)
				l < o ? ((t = 'delete.backward'), (l = ir(n, l, !1))) : l > o && ((t = 'delete.forward'), (l = ir(n, l, !0))),
					(o = Math.min(o, l)),
					(a = Math.max(a, l))
			} else (o = ir(n, o, !1)), (a = ir(n, a, !0))
			return o == a ? { range: s } : { changes: { from: o, to: a }, range: T.cursor(o, o < s.head ? -1 : 1) }
		})
	return r.changes.empty
		? !1
		: (n.dispatch(
				i.update(r, {
					scrollIntoView: !0,
					userEvent: t,
					effects: t == 'delete.selection' ? Y.announce.of(i.phrase('Selection deleted')) : void 0,
				}),
			),
			!0)
}
function ir(n, e, t) {
	if (n instanceof Y)
		for (const i of n.state.facet(Y.atomicRanges).map((r) => r(n)))
			i.between(e, e, (r, s) => {
				r < e && s > e && (e = t ? s : r)
			})
	return e
}
const zf = (n, e, t) =>
		Ln(n, (i) => {
			let r = i.from,
				{ state: s } = n,
				o = s.doc.lineAt(r),
				a,
				l
			if (t && !e && r > o.from && r < o.from + 200 && !/[^ \t]/.test((a = o.text.slice(0, r - o.from)))) {
				if (a[a.length - 1] == '	') return r - 1
				const c = Mn(a, s.tabSize),
					h = c % Er(s) || Er(s)
				for (let u = 0; u < h && a[a.length - 1 - u] == ' '; u++) r--
				l = r
			} else
				(l = Xe(o.text, r - o.from, e, e) + o.from),
					l == r && o.number != (e ? s.doc.lines : 1)
						? (l += e ? 1 : -1)
						: !e &&
							/[\ufe00-\ufe0f]/.test(o.text.slice(l - o.from, r - o.from)) &&
							(l = Xe(o.text, l - o.from, !1, !1) + o.from)
			return l
		}),
	Jo = (n) => zf(n, !1, !0),
	If = (n) => zf(n, !0, !1),
	Lf = (n, e) =>
		Ln(n, (t) => {
			let i = t.head,
				{ state: r } = n,
				s = r.doc.lineAt(i),
				o = r.charCategorizer(i)
			for (let a = null; ; ) {
				if (i == (e ? s.to : s.from)) {
					i == t.head && s.number != (e ? r.doc.lines : 1) && (i += e ? 1 : -1)
					break
				}
				const l = Xe(s.text, i - s.from, e) + s.from,
					c = s.text.slice(Math.min(i, l) - s.from, Math.max(i, l) - s.from),
					h = o(c)
				if (a != null && h != a) break
				;(c != ' ' || i != t.head) && (a = h), (i = l)
			}
			return i
		}),
	Wa = (n) => Lf(n, !1),
	Iv = (n) => Lf(n, !0),
	Lv = (n) =>
		Ln(n, (e) => {
			const t = n.lineBlockAt(e.head).to
			return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1)
		}),
	Dv = (n) =>
		Ln(n, (e) => {
			const t = n.moveToLineBoundary(e, !1).head
			return e.head > t ? t : Math.max(0, e.head - 1)
		}),
	Wv = (n) =>
		Ln(n, (e) => {
			const t = n.moveToLineBoundary(e, !0).head
			return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1)
		}),
	Yv = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1
		const t = n.changeByRange((i) => ({
			changes: { from: i.from, to: i.to, insert: H.of(['', '']) },
			range: T.cursor(i.from),
		}))
		return e(n.update(t, { scrollIntoView: !0, userEvent: 'input' })), !0
	},
	Nv = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1
		const t = n.changeByRange((i) => {
			if (!i.empty || i.from == 0 || i.from == n.doc.length) return { range: i }
			const r = i.from,
				s = n.doc.lineAt(r),
				o = r == s.from ? r - 1 : Xe(s.text, r - s.from, !1) + s.from,
				a = r == s.to ? r + 1 : Xe(s.text, r - s.from, !0) + s.from
			return { changes: { from: o, to: a, insert: n.doc.slice(r, a).append(n.doc.slice(o, r)) }, range: T.cursor(a) }
		})
		return t.changes.empty ? !1 : (e(n.update(t, { scrollIntoView: !0, userEvent: 'move.character' })), !0)
	}
function hs(n) {
	let e = [],
		t = -1
	for (const i of n.selection.ranges) {
		let r = n.doc.lineAt(i.from),
			s = n.doc.lineAt(i.to)
		if ((!i.empty && i.to == s.from && (s = n.doc.lineAt(i.to - 1)), t >= r.number)) {
			const o = e[e.length - 1]
			;(o.to = s.to), o.ranges.push(i)
		} else e.push({ from: r.from, to: s.to, ranges: [i] })
		t = s.number + 1
	}
	return e
}
function Df(n, e, t) {
	if (n.readOnly) return !1
	const i = [],
		r = []
	for (const s of hs(n)) {
		if (t ? s.to == n.doc.length : s.from == 0) continue
		const o = n.doc.lineAt(t ? s.to + 1 : s.from - 1),
			a = o.length + 1
		if (t) {
			i.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + n.lineBreak })
			for (const l of s.ranges)
				r.push(T.range(Math.min(n.doc.length, l.anchor + a), Math.min(n.doc.length, l.head + a)))
		} else {
			i.push({ from: o.from, to: s.from }, { from: s.to, insert: n.lineBreak + o.text })
			for (const l of s.ranges) r.push(T.range(l.anchor - a, l.head - a))
		}
	}
	return i.length
		? (e(
				n.update({
					changes: i,
					scrollIntoView: !0,
					selection: T.create(r, n.selection.mainIndex),
					userEvent: 'move.line',
				}),
			),
			!0)
		: !1
}
const Vv = ({ state: n, dispatch: e }) => Df(n, e, !1),
	Bv = ({ state: n, dispatch: e }) => Df(n, e, !0)
function Wf(n, e, t) {
	if (n.readOnly) return !1
	const i = []
	for (const s of hs(n))
		t
			? i.push({ from: s.from, insert: n.doc.slice(s.from, s.to) + n.lineBreak })
			: i.push({ from: s.to, insert: n.lineBreak + n.doc.slice(s.from, s.to) })
	const r = n.changes(i)
	return (
		e(
			n.update({
				changes: r,
				selection: n.selection.map(r, t ? 1 : -1),
				scrollIntoView: !0,
				userEvent: 'input.copyline',
			}),
		),
		!0
	)
}
const qv = ({ state: n, dispatch: e }) => Wf(n, e, !1),
	Gv = ({ state: n, dispatch: e }) => Wf(n, e, !0),
	Uv = (n) => {
		if (n.state.readOnly) return !1
		const { state: e } = n,
			t = e.changes(hs(e).map(({ from: r, to: s }) => (r > 0 ? r-- : s < e.doc.length && s++, { from: r, to: s }))),
			i = Ui(e.selection, (r) => {
				let s
				if (n.lineWrapping) {
					const o = n.lineBlockAt(r.head),
						a = n.coordsAtPos(r.head, r.assoc || 1)
					a && (s = o.bottom + n.documentTop - a.bottom + n.defaultLineHeight / 2)
				}
				return n.moveVertically(r, !0, s)
			}).map(t)
		return n.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: 'delete.line' }), !0
	}
function Fv(n, e) {
	if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1))) return { from: e, to: e }
	let t = ke(n).resolveInner(e),
		i = t.childBefore(e),
		r = t.childAfter(e),
		s
	return i &&
		r &&
		i.to <= e &&
		r.from >= e &&
		(s = i.type.prop(G.closedBy)) &&
		s.indexOf(r.name) > -1 &&
		n.doc.lineAt(i.to).from == n.doc.lineAt(r.from).from &&
		!/\S/.test(n.sliceDoc(i.to, r.from))
		? { from: i.to, to: r.from }
		: null
}
const Ac = Yf(!1),
	Hv = Yf(!0)
function Yf(n) {
	return ({ state: e, dispatch: t }) => {
		if (e.readOnly) return !1
		const i = e.changeByRange((r) => {
			let { from: s, to: o } = r,
				a = e.doc.lineAt(s),
				l = !n && s == o && Fv(e, s)
			n && (s = o = (o <= a.to ? a : e.doc.lineAt(o)).to)
			let c = new ns(e, { simulateBreak: s, simulateDoubleBreak: !!l }),
				h = ef(c, s)
			for (
				h == null && (h = Mn(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize));
				o < a.to && /\s/.test(a.text[o - a.from]);
			)
				o++
			l ? ({ from: s, to: o } = l) : s > a.from && s < a.from + 100 && !/\S/.test(a.text.slice(0, s)) && (s = a.from)
			const u = ['', _r(e, h)]
			return (
				l && u.push(_r(e, c.lineIndent(a.from, -1))),
				{ changes: { from: s, to: o, insert: H.of(u) }, range: T.cursor(s + 1 + u[1].length) }
			)
		})
		return t(e.update(i, { scrollIntoView: !0, userEvent: 'input' })), !0
	}
}
function Ya(n, e) {
	let t = -1
	return n.changeByRange((i) => {
		const r = []
		for (let o = i.from; o <= i.to; ) {
			const a = n.doc.lineAt(o)
			a.number > t && (i.empty || i.to > a.from) && (e(a, r, i), (t = a.number)), (o = a.to + 1)
		}
		const s = n.changes(r)
		return { changes: r, range: T.range(s.mapPos(i.anchor, 1), s.mapPos(i.head, 1)) }
	})
}
const Kv = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1
		const t = Object.create(null),
			i = new ns(n, {
				overrideIndentation: (s) => {
					const o = t[s]
					return o ?? -1
				},
			}),
			r = Ya(n, (s, o, a) => {
				let l = ef(i, s.from)
				if (l == null) return
				;/\S/.test(s.text) || (l = 0)
				const c = /^\s*/.exec(s.text)[0],
					h = _r(n, l)
				;(c != h || a.from < s.from + c.length) &&
					((t[s.from] = l), o.push({ from: s.from, to: s.from + c.length, insert: h }))
			})
		return r.changes.empty || e(n.update(r, { userEvent: 'indent' })), !0
	},
	Nf = ({ state: n, dispatch: e }) =>
		n.readOnly
			? !1
			: (e(
					n.update(
						Ya(n, (t, i) => {
							i.push({ from: t.from, insert: n.facet(is) })
						}),
						{ userEvent: 'input.indent' },
					),
				),
				!0),
	Vf = ({ state: n, dispatch: e }) =>
		n.readOnly
			? !1
			: (e(
					n.update(
						Ya(n, (t, i) => {
							const r = /^\s*/.exec(t.text)[0]
							if (!r) return
							let s = Mn(r, n.tabSize),
								o = 0,
								a = _r(n, Math.max(0, s - Er(n)))
							for (; o < r.length && o < a.length && r.charCodeAt(o) == a.charCodeAt(o); ) o++
							i.push({ from: t.from + o, to: t.from + r.length, insert: a.slice(o) })
						}),
						{ userEvent: 'delete.dedent' },
					),
				),
				!0),
	Jv = (n) => (n.setTabFocusMode(), !0),
	e1 = [
		{ key: 'Ctrl-b', run: Sf, shift: Zf, preventDefault: !0 },
		{ key: 'Ctrl-f', run: xf, shift: Rf },
		{ key: 'Ctrl-p', run: Qf, shift: Xf },
		{ key: 'Ctrl-n', run: kf, shift: Mf },
		{ key: 'Ctrl-a', run: bv, shift: Rv },
		{ key: 'Ctrl-e', run: yv, shift: Av },
		{ key: 'Ctrl-d', run: If },
		{ key: 'Ctrl-h', run: Jo },
		{ key: 'Ctrl-k', run: Lv },
		{ key: 'Ctrl-Alt-h', run: Wa },
		{ key: 'Ctrl-o', run: Yv },
		{ key: 'Ctrl-t', run: Nv },
		{ key: 'Ctrl-v', run: Ko },
	],
	t1 = [
		{ key: 'ArrowLeft', run: Sf, shift: Zf, preventDefault: !0 },
		{ key: 'Mod-ArrowLeft', mac: 'Alt-ArrowLeft', run: hv, shift: wv, preventDefault: !0 },
		{ mac: 'Cmd-ArrowLeft', run: mv, shift: Cv, preventDefault: !0 },
		{ key: 'ArrowRight', run: xf, shift: Rf, preventDefault: !0 },
		{ key: 'Mod-ArrowRight', mac: 'Alt-ArrowRight', run: uv, shift: $v, preventDefault: !0 },
		{ mac: 'Cmd-ArrowRight', run: vv, shift: Zv, preventDefault: !0 },
		{ key: 'ArrowUp', run: Qf, shift: Xf, preventDefault: !0 },
		{ mac: 'Cmd-ArrowUp', run: Tc, shift: Zc },
		{ mac: 'Ctrl-ArrowUp', run: Qc, shift: kc },
		{ key: 'ArrowDown', run: kf, shift: Mf, preventDefault: !0 },
		{ mac: 'Cmd-ArrowDown', run: Cc, shift: Rc },
		{ mac: 'Ctrl-ArrowDown', run: Ko, shift: Pc },
		{ key: 'PageUp', run: Qc, shift: kc },
		{ key: 'PageDown', run: Ko, shift: Pc },
		{ key: 'Home', run: gv, shift: Tv, preventDefault: !0 },
		{ key: 'Mod-Home', run: Tc, shift: Zc },
		{ key: 'End', run: pv, shift: Pv, preventDefault: !0 },
		{ key: 'Mod-End', run: Cc, shift: Rc },
		{ key: 'Enter', run: Ac, shift: Ac },
		{ key: 'Mod-a', run: jv },
		{ key: 'Backspace', run: Jo, shift: Jo, preventDefault: !0 },
		{ key: 'Delete', run: If, preventDefault: !0 },
		{ key: 'Mod-Backspace', mac: 'Alt-Backspace', run: Wa, preventDefault: !0 },
		{ key: 'Mod-Delete', mac: 'Alt-Delete', run: Iv, preventDefault: !0 },
		{ mac: 'Mod-Backspace', run: Dv, preventDefault: !0 },
		{ mac: 'Mod-Delete', run: Wv, preventDefault: !0 },
	].concat(e1.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))),
	i1 = [
		{ key: 'Alt-ArrowLeft', mac: 'Ctrl-ArrowLeft', run: dv, shift: Qv },
		{ key: 'Alt-ArrowRight', mac: 'Ctrl-ArrowRight', run: Ov, shift: kv },
		{ key: 'Alt-ArrowUp', run: Vv },
		{ key: 'Shift-Alt-ArrowUp', run: qv },
		{ key: 'Alt-ArrowDown', run: Bv },
		{ key: 'Shift-Alt-ArrowDown', run: Gv },
		{ key: 'Mod-Alt-ArrowUp', run: Ev },
		{ key: 'Mod-Alt-ArrowDown', run: _v },
		{ key: 'Escape', run: zv },
		{ key: 'Mod-Enter', run: Hv },
		{ key: 'Alt-l', mac: 'Ctrl-l', run: Xv },
		{ key: 'Mod-i', run: Mv, preventDefault: !0 },
		{ key: 'Mod-[', run: Vf },
		{ key: 'Mod-]', run: Nf },
		{ key: 'Mod-Alt-\\', run: Kv },
		{ key: 'Shift-Mod-k', run: Uv },
		{ key: 'Shift-Mod-\\', run: xv },
		{ key: 'Mod-/', run: V0 },
		{ key: 'Alt-A', run: q0 },
		{ key: 'Ctrl-m', mac: 'Shift-Alt-m', run: Jv },
	].concat(t1)
var jc = {},
	Xc
function n1() {
	return (
		Xc ||
			((Xc = 1),
			(() => {
				if (typeof window != 'object') return
				if (
					'IntersectionObserver' in window &&
					'IntersectionObserverEntry' in window &&
					'intersectionRatio' in window.IntersectionObserverEntry.prototype
				) {
					'isIntersecting' in window.IntersectionObserverEntry.prototype ||
						Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
							get: function () {
								return this.intersectionRatio > 0
							},
						})
					return
				}
				var n = window.document,
					e = [],
					t = null,
					i = null
				function r(g) {
					;(this.time = g.time),
						(this.target = g.target),
						(this.rootBounds = d(g.rootBounds)),
						(this.boundingClientRect = d(g.boundingClientRect)),
						(this.intersectionRect = d(g.intersectionRect || f())),
						(this.isIntersecting = !!g.intersectionRect)
					var b = this.boundingClientRect,
						x = b.width * b.height,
						$ = this.intersectionRect,
						y = $.width * $.height
					x
						? (this.intersectionRatio = Number((y / x).toFixed(4)))
						: (this.intersectionRatio = this.isIntersecting ? 1 : 0)
				}
				function s(g, b) {
					var x = b || {}
					if (typeof g != 'function') throw new Error('callback must be a function')
					if (x.root && x.root.nodeType != 1) throw new Error('root must be an Element')
					;(this._checkForIntersections = a(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT)),
						(this._callback = g),
						(this._observationTargets = []),
						(this._queuedEntries = []),
						(this._rootMarginValues = this._parseRootMargin(x.rootMargin)),
						(this.thresholds = this._initThresholds(x.threshold)),
						(this.root = x.root || null),
						(this.rootMargin = this._rootMarginValues.map(($) => $.value + $.unit).join(' ')),
						(this._monitoringDocuments = []),
						(this._monitoringUnsubscribes = [])
				}
				;(s.prototype.THROTTLE_TIMEOUT = 100),
					(s.prototype.POLL_INTERVAL = null),
					(s.prototype.USE_MUTATION_OBSERVER = !0),
					(s._setupCrossOriginUpdater = () => (
						t ||
							(t = (g, b) => {
								!g || !b ? (i = f()) : (i = O(g, b)),
									e.forEach((x) => {
										x._checkForIntersections()
									})
							}),
						t
					)),
					(s._resetCrossOriginUpdater = () => {
						;(t = null), (i = null)
					}),
					(s.prototype.observe = function (g) {
						var b = this._observationTargets.some((x) => x.element == g)
						if (!b) {
							if (!(g && g.nodeType == 1)) throw new Error('target must be an Element')
							this._registerInstance(),
								this._observationTargets.push({ element: g, entry: null }),
								this._monitorIntersections(g.ownerDocument),
								this._checkForIntersections()
						}
					}),
					(s.prototype.unobserve = function (g) {
						;(this._observationTargets = this._observationTargets.filter((b) => b.element != g)),
							this._unmonitorIntersections(g.ownerDocument),
							this._observationTargets.length == 0 && this._unregisterInstance()
					}),
					(s.prototype.disconnect = function () {
						;(this._observationTargets = []), this._unmonitorAllIntersections(), this._unregisterInstance()
					}),
					(s.prototype.takeRecords = function () {
						var g = this._queuedEntries.slice()
						return (this._queuedEntries = []), g
					}),
					(s.prototype._initThresholds = (g) => {
						var b = g || [0]
						return (
							Array.isArray(b) || (b = [b]),
							b.sort().filter((x, $, y) => {
								if (typeof x != 'number' || isNaN(x) || x < 0 || x > 1)
									throw new Error('threshold must be a number between 0 and 1 inclusively')
								return x !== y[$ - 1]
							})
						)
					}),
					(s.prototype._parseRootMargin = (g) => {
						var b = g || '0px',
							x = b.split(/\s+/).map(($) => {
								var y = /^(-?\d*\.?\d+)(px|%)$/.exec($)
								if (!y) throw new Error('rootMargin must be specified in pixels or percent')
								return { value: Number.parseFloat(y[1]), unit: y[2] }
							})
						return (x[1] = x[1] || x[0]), (x[2] = x[2] || x[0]), (x[3] = x[3] || x[1]), x
					}),
					(s.prototype._monitorIntersections = function (g) {
						var b = g.defaultView
						if (b && this._monitoringDocuments.indexOf(g) == -1) {
							var x = this._checkForIntersections,
								$ = null,
								y = null
							if (
								(this.POLL_INTERVAL
									? ($ = b.setInterval(x, this.POLL_INTERVAL))
									: (l(b, 'resize', x, !0),
										l(g, 'scroll', x, !0),
										this.USE_MUTATION_OBSERVER &&
											'MutationObserver' in b &&
											((y = new b.MutationObserver(x)),
											y.observe(g, { attributes: !0, childList: !0, characterData: !0, subtree: !0 }))),
								this._monitoringDocuments.push(g),
								this._monitoringUnsubscribes.push(() => {
									var P = g.defaultView
									P && ($ && P.clearInterval($), c(P, 'resize', x, !0)), c(g, 'scroll', x, !0), y && y.disconnect()
								}),
								g != ((this.root && this.root.ownerDocument) || n))
							) {
								var Q = m(g)
								Q && this._monitorIntersections(Q.ownerDocument)
							}
						}
					}),
					(s.prototype._unmonitorIntersections = function (g) {
						var b = this._monitoringDocuments.indexOf(g)
						if (b != -1) {
							var x = (this.root && this.root.ownerDocument) || n,
								$ = this._observationTargets.some((P) => {
									var X = P.element.ownerDocument
									if (X == g) return !0
									for (; X && X != x; ) {
										var M = m(X)
										if (((X = M && M.ownerDocument), X == g)) return !0
									}
									return !1
								})
							if (!$) {
								var y = this._monitoringUnsubscribes[b]
								if ((this._monitoringDocuments.splice(b, 1), this._monitoringUnsubscribes.splice(b, 1), y(), g != x)) {
									var Q = m(g)
									Q && this._unmonitorIntersections(Q.ownerDocument)
								}
							}
						}
					}),
					(s.prototype._unmonitorAllIntersections = function () {
						var g = this._monitoringUnsubscribes.slice(0)
						;(this._monitoringDocuments.length = 0), (this._monitoringUnsubscribes.length = 0)
						for (var b = 0; b < g.length; b++) g[b]()
					}),
					(s.prototype._checkForIntersections = function () {
						if (!(!this.root && t && !i)) {
							var g = this._rootIsInDom(),
								b = g ? this._getRootRect() : f()
							this._observationTargets.forEach(function (x) {
								var $ = x.element,
									y = u($),
									Q = this._rootContainsTarget($),
									P = x.entry,
									X = g && Q && this._computeTargetAndRootIntersection($, y, b),
									M = (x.entry = new r({
										time: o(),
										target: $,
										boundingClientRect: y,
										rootBounds: t && !this.root ? null : b,
										intersectionRect: X,
									}))
								P
									? g && Q
										? this._hasCrossedThreshold(P, M) && this._queuedEntries.push(M)
										: P && P.isIntersecting && this._queuedEntries.push(M)
									: this._queuedEntries.push(M)
							}, this),
								this._queuedEntries.length && this._callback(this.takeRecords(), this)
						}
					}),
					(s.prototype._computeTargetAndRootIntersection = function (g, b, x) {
						if (window.getComputedStyle(g).display != 'none') {
							for (var $ = b, y = v(g), Q = !1; !Q && y; ) {
								var P = null,
									X = y.nodeType == 1 ? window.getComputedStyle(y) : {}
								if (X.display == 'none') return null
								if (y == this.root || y.nodeType == 9)
									if (((Q = !0), y == this.root || y == n))
										t && !this.root
											? !i || (i.width == 0 && i.height == 0)
												? ((y = null), (P = null), ($ = null))
												: (P = i)
											: (P = x)
									else {
										var M = v(y),
											E = M && u(M),
											j = M && this._computeTargetAndRootIntersection(M, E, x)
										E && j ? ((y = M), (P = O(E, j))) : ((y = null), ($ = null))
									}
								else {
									var N = y.ownerDocument
									y != N.body && y != N.documentElement && X.overflow != 'visible' && (P = u(y))
								}
								if ((P && ($ = h(P, $)), !$)) break
								y = y && v(y)
							}
							return $
						}
					}),
					(s.prototype._getRootRect = function () {
						var g
						if (this.root) g = u(this.root)
						else {
							var b = n.documentElement,
								x = n.body
							g = {
								top: 0,
								left: 0,
								right: b.clientWidth || x.clientWidth,
								width: b.clientWidth || x.clientWidth,
								bottom: b.clientHeight || x.clientHeight,
								height: b.clientHeight || x.clientHeight,
							}
						}
						return this._expandRectByRootMargin(g)
					}),
					(s.prototype._expandRectByRootMargin = function (g) {
						var b = this._rootMarginValues.map(($, y) =>
								$.unit == 'px' ? $.value : ($.value * (y % 2 ? g.width : g.height)) / 100,
							),
							x = { top: g.top - b[0], right: g.right + b[1], bottom: g.bottom + b[2], left: g.left - b[3] }
						return (x.width = x.right - x.left), (x.height = x.bottom - x.top), x
					}),
					(s.prototype._hasCrossedThreshold = function (g, b) {
						var x = g && g.isIntersecting ? g.intersectionRatio || 0 : -1,
							$ = b.isIntersecting ? b.intersectionRatio || 0 : -1
						if (x !== $)
							for (var y = 0; y < this.thresholds.length; y++) {
								var Q = this.thresholds[y]
								if (Q == x || Q == $ || Q < x != Q < $) return !0
							}
					}),
					(s.prototype._rootIsInDom = function () {
						return !this.root || p(n, this.root)
					}),
					(s.prototype._rootContainsTarget = function (g) {
						return p(this.root || n, g) && (!this.root || this.root.ownerDocument == g.ownerDocument)
					}),
					(s.prototype._registerInstance = function () {
						e.indexOf(this) < 0 && e.push(this)
					}),
					(s.prototype._unregisterInstance = function () {
						var g = e.indexOf(this)
						g != -1 && e.splice(g, 1)
					})
				function o() {
					return window.performance && performance.now && performance.now()
				}
				function a(g, b) {
					var x = null
					return () => {
						x ||
							(x = setTimeout(() => {
								g(), (x = null)
							}, b))
					}
				}
				function l(g, b, x, $) {
					typeof g.addEventListener == 'function'
						? g.addEventListener(b, x, $)
						: typeof g.attachEvent == 'function' && g.attachEvent('on' + b, x)
				}
				function c(g, b, x, $) {
					typeof g.removeEventListener == 'function'
						? g.removeEventListener(b, x, $)
						: typeof g.detatchEvent == 'function' && g.detatchEvent('on' + b, x)
				}
				function h(g, b) {
					var x = Math.max(g.top, b.top),
						$ = Math.min(g.bottom, b.bottom),
						y = Math.max(g.left, b.left),
						Q = Math.min(g.right, b.right),
						P = Q - y,
						X = $ - x
					return (P >= 0 && X >= 0 && { top: x, bottom: $, left: y, right: Q, width: P, height: X }) || null
				}
				function u(g) {
					var b
					try {
						b = g.getBoundingClientRect()
					} catch {}
					return b
						? ((b.width && b.height) ||
								(b = {
									top: b.top,
									right: b.right,
									bottom: b.bottom,
									left: b.left,
									width: b.right - b.left,
									height: b.bottom - b.top,
								}),
							b)
						: f()
				}
				function f() {
					return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }
				}
				function d(g) {
					return !g || 'x' in g
						? g
						: {
								top: g.top,
								y: g.top,
								bottom: g.bottom,
								left: g.left,
								x: g.left,
								right: g.right,
								width: g.width,
								height: g.height,
							}
				}
				function O(g, b) {
					var x = b.top - g.top,
						$ = b.left - g.left
					return { top: x, left: $, height: b.height, width: b.width, bottom: x + b.height, right: $ + b.width }
				}
				function p(g, b) {
					for (var x = b; x; ) {
						if (x == g) return !0
						x = v(x)
					}
					return !1
				}
				function v(g) {
					var b = g.parentNode
					return g.nodeType == 9 && g != n
						? m(g)
						: b && b.nodeType == 11 && b.host
							? b.host
							: b && b.assignedSlot
								? b.assignedSlot.parentNode
								: b
				}
				function m(g) {
					try {
						return (g.defaultView && g.defaultView.frameElement) || null
					} catch {
						return null
					}
				}
				;(window.IntersectionObserver = s), (window.IntersectionObserverEntry = r)
			})()),
		jc
	)
}
n1()
const r1 = qd[typeof document < 'u' && document.createElement !== void 0 ? 'useLayoutEffect' : 'useEffect']
function s1(n, e = {}) {
	const {
			root: t = null,
			pollInterval: i = null,
			useMutationObserver: r = !1,
			rootMargin: s = '0px 0px 0px 0px',
			threshold: o = 0,
			initialIsIntersecting: a = !1,
		} = e,
		[l, c] = C.useState(() => ({
			boundingClientRect: null,
			intersectionRatio: 0,
			intersectionRect: null,
			isIntersecting: a,
			rootBounds: null,
			target: null,
			time: 0,
		})),
		[h, u] = C.useState(() => Ec({ root: t, pollInterval: i, useMutationObserver: r, rootMargin: s, threshold: o }))
	return (
		C.useEffect(() => {
			const f = Ec({ root: t, pollInterval: i, useMutationObserver: r, rootMargin: s, threshold: o })
			u(f)
		}, [t, s, i, r, JSON.stringify(o)]),
		r1(() => {
			const f = n && 'current' in n ? n.current : n
			if (!h || !f) return
			let d = !1
			h.observer.observe(f)
			const O = (p) => {
				if (!d)
					for (let v = 0; v < p.length; v++) {
						const m = p[v]
						m.target === f && c(m)
					}
			}
			return (
				h.subscribe(O),
				() => {
					;(d = !0), h.observer.unobserve(f), h.unsubscribe(O)
				}
			)
		}, [n, h]),
		l
	)
}
function o1({
	root: n = null,
	pollInterval: e = null,
	useMutationObserver: t = !1,
	rootMargin: i = '0px 0px 0px 0px',
	threshold: r = 0,
}) {
	const s = new Set()
	if (typeof IntersectionObserver > 'u') return null
	const o = new IntersectionObserver(
		(a) => {
			for (const l of s) l(a, o)
		},
		{ root: n, rootMargin: i, threshold: r },
	)
	return (
		(o.POLL_INTERVAL = e),
		(o.USE_MUTATION_OBSERVER = t),
		{
			observer: o,
			getListeners() {
				return s
			},
			subscribe: (a) => s.add(a),
			unsubscribe: (a) => s.delete(a),
		}
	)
}
const Mc = new Map()
function Ec(n) {
	const { root: e, ...t } = n,
		i = JSON.stringify(t)
	let r = Mc.get(e)
	return r || ((r = {}), Mc.set(e, r)), r[i] ? r[i] : (r[i] = o1(n))
}
var _c = {}
class Ir {
	constructor(e, t, i, r, s, o, a, l, c, h = 0, u) {
		;(this.p = e),
			(this.stack = t),
			(this.state = i),
			(this.reducePos = r),
			(this.pos = s),
			(this.score = o),
			(this.buffer = a),
			(this.bufferBase = l),
			(this.curContext = c),
			(this.lookAhead = h),
			(this.parent = u)
	}
	toString() {
		return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? '!' + this.score : ''}`
	}
	static start(e, t, i = 0) {
		const r = e.parser.context
		return new Ir(e, [], t, i, i, 0, [], 0, r ? new zc(r, r.start) : null, 0, null)
	}
	get context() {
		return this.curContext ? this.curContext.context : null
	}
	pushState(e, t) {
		this.stack.push(this.state, t, this.bufferBase + this.buffer.length), (this.state = e)
	}
	reduce(e) {
		var t
		const i = e >> 19,
			r = e & 65535,
			{ parser: s } = this.p,
			o = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
			a = s.dynamicPrecedence(r)
		if ((a && (this.score += a), i == 0)) {
			this.pushState(s.getGoto(this.state, r, !0), this.reducePos),
				r < s.minRepeatTerm && this.storeNode(r, this.reducePos, this.reducePos, o ? 8 : 4, !0),
				this.reduceContext(r, this.reducePos)
			return
		}
		const l = this.stack.length - (i - 1) * 3 - (e & 262144 ? 6 : 0),
			c = l ? this.stack[l - 2] : this.p.ranges[0].from,
			h = this.reducePos - c
		h >= 2e3 &&
			!(!((t = this.p.parser.nodeSet.types[r]) === null || t === void 0) && t.isAnonymous) &&
			(c == this.p.lastBigReductionStart
				? (this.p.bigReductionCount++, (this.p.lastBigReductionSize = h))
				: this.p.lastBigReductionSize < h &&
					((this.p.bigReductionCount = 1), (this.p.lastBigReductionStart = c), (this.p.lastBigReductionSize = h)))
		const u = l ? this.stack[l - 1] : 0,
			f = this.bufferBase + this.buffer.length - u
		if (r < s.minRepeatTerm || e & 131072) {
			const d = s.stateFlag(this.state, 1) ? this.pos : this.reducePos
			this.storeNode(r, c, d, f + 4, !0)
		}
		if (e & 262144) this.state = this.stack[l]
		else {
			const d = this.stack[l - 3]
			this.state = s.getGoto(d, r, !0)
		}
		for (; this.stack.length > l; ) this.stack.pop()
		this.reduceContext(r, c)
	}
	storeNode(e, t, i, r = 4, s = !1) {
		if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
			let o = this,
				a = this.buffer.length
			if (
				(a == 0 && o.parent && ((a = o.bufferBase - o.parent.bufferBase), (o = o.parent)),
				a > 0 && o.buffer[a - 4] == 0 && o.buffer[a - 1] > -1)
			) {
				if (t == i) return
				if (o.buffer[a - 2] >= t) {
					o.buffer[a - 2] = i
					return
				}
			}
		}
		if (!s || this.pos == i) this.buffer.push(e, t, i, r)
		else {
			let o = this.buffer.length
			if (o > 0 && (this.buffer[o - 4] != 0 || this.buffer[o - 1] < 0)) {
				let a = !1
				for (let l = o; l > 0 && this.buffer[l - 2] > i; l -= 4)
					if (this.buffer[l - 1] >= 0) {
						a = !0
						break
					}
				if (a)
					for (; o > 0 && this.buffer[o - 2] > i; )
						(this.buffer[o] = this.buffer[o - 4]),
							(this.buffer[o + 1] = this.buffer[o - 3]),
							(this.buffer[o + 2] = this.buffer[o - 2]),
							(this.buffer[o + 3] = this.buffer[o - 1]),
							(o -= 4),
							r > 4 && (r -= 4)
			}
			;(this.buffer[o] = e), (this.buffer[o + 1] = t), (this.buffer[o + 2] = i), (this.buffer[o + 3] = r)
		}
	}
	shift(e, t, i, r) {
		if (e & 131072) this.pushState(e & 65535, this.pos)
		else if ((e & 262144) == 0) {
			const s = e,
				{ parser: o } = this.p
			this.pos = r
			const a = o.stateFlag(s, 1)
			!a && (r > i || t <= o.maxNode) && (this.reducePos = r),
				this.pushState(s, a ? i : Math.min(i, this.reducePos)),
				this.shiftContext(t, i),
				t <= o.maxNode && this.buffer.push(t, i, r, 4)
		} else (this.pos = r), this.shiftContext(t, i), t <= this.p.parser.maxNode && this.buffer.push(t, i, r, 4)
	}
	apply(e, t, i, r) {
		e & 65536 ? this.reduce(e) : this.shift(e, t, i, r)
	}
	useNode(e, t) {
		let i = this.p.reused.length - 1
		;(i < 0 || this.p.reused[i] != e) && (this.p.reused.push(e), i++)
		const r = this.pos
		;(this.reducePos = this.pos = r + e.length),
			this.pushState(t, r),
			this.buffer.push(i, r, this.reducePos, -1),
			this.curContext &&
				this.updateContext(
					this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)),
				)
	}
	split() {
		let e = this,
			t = e.buffer.length
		for (; t > 0 && e.buffer[t - 2] > e.reducePos; ) t -= 4
		const i = e.buffer.slice(t),
			r = e.bufferBase + t
		for (; e && r == e.bufferBase; ) e = e.parent
		return new Ir(
			this.p,
			this.stack.slice(),
			this.state,
			this.reducePos,
			this.pos,
			this.score,
			i,
			r,
			this.curContext,
			this.lookAhead,
			e,
		)
	}
	recoverByDelete(e, t) {
		const i = e <= this.p.parser.maxNode
		i && this.storeNode(e, this.pos, t, 4),
			this.storeNode(0, this.pos, t, i ? 8 : 4),
			(this.pos = this.reducePos = t),
			(this.score -= 190)
	}
	canShift(e) {
		for (let t = new a1(this); ; ) {
			const i = this.p.parser.stateSlot(t.state, 4) || this.p.parser.hasAction(t.state, e)
			if (i == 0) return !1
			if ((i & 65536) == 0) return !0
			t.reduce(i)
		}
	}
	recoverByInsert(e) {
		if (this.stack.length >= 300) return []
		let t = this.p.parser.nextStates(this.state)
		if (t.length > 8 || this.stack.length >= 120) {
			const r = []
			for (let s = 0, o; s < t.length; s += 2)
				(o = t[s + 1]) != this.state && this.p.parser.hasAction(o, e) && r.push(t[s], o)
			if (this.stack.length < 120)
				for (let s = 0; r.length < 8 && s < t.length; s += 2) {
					const o = t[s + 1]
					r.some((a, l) => l & 1 && a == o) || r.push(t[s], o)
				}
			t = r
		}
		const i = []
		for (let r = 0; r < t.length && i.length < 4; r += 2) {
			const s = t[r + 1]
			if (s == this.state) continue
			const o = this.split()
			o.pushState(s, this.pos),
				o.storeNode(0, o.pos, o.pos, 4, !0),
				o.shiftContext(t[r], this.pos),
				(o.reducePos = this.pos),
				(o.score -= 200),
				i.push(o)
		}
		return i
	}
	forceReduce() {
		let { parser: e } = this.p,
			t = e.stateSlot(this.state, 5)
		if ((t & 65536) == 0) return !1
		if (!e.validAction(this.state, t)) {
			const i = t >> 19,
				r = t & 65535,
				s = this.stack.length - i * 3
			if (s < 0 || e.getGoto(this.stack[s], r, !1) < 0) {
				const o = this.findForcedReduction()
				if (o == null) return !1
				t = o
			}
			this.storeNode(0, this.pos, this.pos, 4, !0), (this.score -= 100)
		}
		return (this.reducePos = this.pos), this.reduce(t), !0
	}
	findForcedReduction() {
		const { parser: e } = this.p,
			t = [],
			i = (r, s) => {
				if (!t.includes(r))
					return (
						t.push(r),
						e.allActions(r, (o) => {
							if (!(o & 393216))
								if (o & 65536) {
									const a = (o >> 19) - s
									if (a > 1) {
										const l = o & 65535,
											c = this.stack.length - a * 3
										if (c >= 0 && e.getGoto(this.stack[c], l, !1) >= 0) return (a << 19) | 65536 | l
									}
								} else {
									const a = i(o, s + 1)
									if (a != null) return a
								}
						})
					)
			}
		return i(this.state, 0)
	}
	forceAll() {
		for (; !this.p.parser.stateFlag(this.state, 2); )
			if (!this.forceReduce()) {
				this.storeNode(0, this.pos, this.pos, 4, !0)
				break
			}
		return this
	}
	get deadEnd() {
		if (this.stack.length != 3) return !1
		const { parser: e } = this.p
		return e.data[e.stateSlot(this.state, 1)] == 65535 && !e.stateSlot(this.state, 4)
	}
	restart() {
		this.storeNode(0, this.pos, this.pos, 4, !0), (this.state = this.stack[0]), (this.stack.length = 0)
	}
	sameState(e) {
		if (this.state != e.state || this.stack.length != e.stack.length) return !1
		for (let t = 0; t < this.stack.length; t += 3) if (this.stack[t] != e.stack[t]) return !1
		return !0
	}
	get parser() {
		return this.p.parser
	}
	dialectEnabled(e) {
		return this.p.parser.dialect.flags[e]
	}
	shiftContext(e, t) {
		this.curContext &&
			this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)))
	}
	reduceContext(e, t) {
		this.curContext &&
			this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)))
	}
	emitContext() {
		const e = this.buffer.length - 1
		;(e < 0 || this.buffer[e] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
	}
	emitLookAhead() {
		const e = this.buffer.length - 1
		;(e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
	}
	updateContext(e) {
		if (e != this.curContext.context) {
			const t = new zc(this.curContext.tracker, e)
			t.hash != this.curContext.hash && this.emitContext(), (this.curContext = t)
		}
	}
	setLookAhead(e) {
		return e <= this.lookAhead ? !1 : (this.emitLookAhead(), (this.lookAhead = e), !0)
	}
	close() {
		this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
	}
}
class zc {
	constructor(e, t) {
		;(this.tracker = e), (this.context = t), (this.hash = e.strict ? e.hash(t) : 0)
	}
}
class a1 {
	constructor(e) {
		;(this.start = e), (this.state = e.state), (this.stack = e.stack), (this.base = this.stack.length)
	}
	reduce(e) {
		const t = e & 65535,
			i = e >> 19
		i == 0
			? (this.stack == this.start.stack && (this.stack = this.stack.slice()),
				this.stack.push(this.state, 0, 0),
				(this.base += 3))
			: (this.base -= (i - 1) * 3)
		const r = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0)
		this.state = r
	}
}
class Lr {
	constructor(e, t, i) {
		;(this.stack = e), (this.pos = t), (this.index = i), (this.buffer = e.buffer), this.index == 0 && this.maybeNext()
	}
	static create(e, t = e.bufferBase + e.buffer.length) {
		return new Lr(e, t, t - e.bufferBase)
	}
	maybeNext() {
		const e = this.stack.parent
		e != null && ((this.index = this.stack.bufferBase - e.bufferBase), (this.stack = e), (this.buffer = e.buffer))
	}
	get id() {
		return this.buffer[this.index - 4]
	}
	get start() {
		return this.buffer[this.index - 3]
	}
	get end() {
		return this.buffer[this.index - 2]
	}
	get size() {
		return this.buffer[this.index - 1]
	}
	next() {
		;(this.index -= 4), (this.pos -= 4), this.index == 0 && this.maybeNext()
	}
	fork() {
		return new Lr(this.stack, this.pos, this.index)
	}
}
function un(n, e = Uint16Array) {
	if (typeof n != 'string') return n
	let t = null
	for (let i = 0, r = 0; i < n.length; ) {
		let s = 0
		for (;;) {
			let o = n.charCodeAt(i++),
				a = !1
			if (o == 126) {
				s = 65535
				break
			}
			o >= 92 && o--, o >= 34 && o--
			let l = o - 32
			if ((l >= 46 && ((l -= 46), (a = !0)), (s += l), a)) break
			s *= 46
		}
		t ? (t[r++] = s) : (t = new e(s))
	}
	return t
}
class mr {
	constructor() {
		;(this.start = -1),
			(this.value = -1),
			(this.end = -1),
			(this.extended = -1),
			(this.lookAhead = 0),
			(this.mask = 0),
			(this.context = 0)
	}
}
const Ic = new mr()
class l1 {
	constructor(e, t) {
		;(this.input = e),
			(this.ranges = t),
			(this.chunk = ''),
			(this.chunkOff = 0),
			(this.chunk2 = ''),
			(this.chunk2Pos = 0),
			(this.next = -1),
			(this.token = Ic),
			(this.rangeIndex = 0),
			(this.pos = this.chunkPos = t[0].from),
			(this.range = t[0]),
			(this.end = t[t.length - 1].to),
			this.readNext()
	}
	resolveOffset(e, t) {
		let i = this.range,
			r = this.rangeIndex,
			s = this.pos + e
		for (; s < i.from; ) {
			if (!r) return null
			const o = this.ranges[--r]
			;(s -= i.from - o.to), (i = o)
		}
		for (; t < 0 ? s > i.to : s >= i.to; ) {
			if (r == this.ranges.length - 1) return null
			const o = this.ranges[++r]
			;(s += o.from - i.to), (i = o)
		}
		return s
	}
	clipPos(e) {
		if (e >= this.range.from && e < this.range.to) return e
		for (const t of this.ranges) if (t.to > e) return Math.max(e, t.from)
		return this.end
	}
	peek(e) {
		let t = this.chunkOff + e,
			i,
			r
		if (t >= 0 && t < this.chunk.length) (i = this.pos + e), (r = this.chunk.charCodeAt(t))
		else {
			const s = this.resolveOffset(e, 1)
			if (s == null) return -1
			if (((i = s), i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length))
				r = this.chunk2.charCodeAt(i - this.chunk2Pos)
			else {
				let o = this.rangeIndex,
					a = this.range
				for (; a.to <= i; ) a = this.ranges[++o]
				;(this.chunk2 = this.input.chunk((this.chunk2Pos = i))),
					i + this.chunk2.length > a.to && (this.chunk2 = this.chunk2.slice(0, a.to - i)),
					(r = this.chunk2.charCodeAt(0))
			}
		}
		return i >= this.token.lookAhead && (this.token.lookAhead = i + 1), r
	}
	acceptToken(e, t = 0) {
		const i = t ? this.resolveOffset(t, -1) : this.pos
		if (i == null || i < this.token.start) throw new RangeError('Token end out of bounds')
		;(this.token.value = e), (this.token.end = i)
	}
	acceptTokenTo(e, t) {
		;(this.token.value = e), (this.token.end = t)
	}
	getChunk() {
		if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
			const { chunk: e, chunkPos: t } = this
			;(this.chunk = this.chunk2),
				(this.chunkPos = this.chunk2Pos),
				(this.chunk2 = e),
				(this.chunk2Pos = t),
				(this.chunkOff = this.pos - this.chunkPos)
		} else {
			;(this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos)
			const e = this.input.chunk(this.pos),
				t = this.pos + e.length
			;(this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e),
				(this.chunkPos = this.pos),
				(this.chunkOff = 0)
		}
	}
	readNext() {
		return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length)
			? (this.next = -1)
			: (this.next = this.chunk.charCodeAt(this.chunkOff))
	}
	advance(e = 1) {
		for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
			if (this.rangeIndex == this.ranges.length - 1) return this.setDone()
			;(e -= this.range.to - this.pos), (this.range = this.ranges[++this.rangeIndex]), (this.pos = this.range.from)
		}
		return (this.pos += e), this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
	}
	setDone() {
		return (
			(this.pos = this.chunkPos = this.end),
			(this.range = this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
			(this.chunk = ''),
			(this.next = -1)
		)
	}
	reset(e, t) {
		if (
			(t ? ((this.token = t), (t.start = e), (t.lookAhead = e + 1), (t.value = t.extended = -1)) : (this.token = Ic),
			this.pos != e)
		) {
			if (((this.pos = e), e == this.end)) return this.setDone(), this
			for (; e < this.range.from; ) this.range = this.ranges[--this.rangeIndex]
			for (; e >= this.range.to; ) this.range = this.ranges[++this.rangeIndex]
			e >= this.chunkPos && e < this.chunkPos + this.chunk.length
				? (this.chunkOff = e - this.chunkPos)
				: ((this.chunk = ''), (this.chunkOff = 0)),
				this.readNext()
		}
		return this
	}
	read(e, t) {
		if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
			return this.chunk.slice(e - this.chunkPos, t - this.chunkPos)
		if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
			return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos)
		if (e >= this.range.from && t <= this.range.to) return this.input.read(e, t)
		let i = ''
		for (const r of this.ranges) {
			if (r.from >= t) break
			r.to > e && (i += this.input.read(Math.max(r.from, e), Math.min(r.to, t)))
		}
		return i
	}
}
class Xi {
	constructor(e, t) {
		;(this.data = e), (this.id = t)
	}
	token(e, t) {
		const { parser: i } = t.p
		Bf(this.data, e, t, this.id, i.data, i.tokenPrecTable)
	}
}
Xi.prototype.contextual = Xi.prototype.fallback = Xi.prototype.extend = !1
class Dr {
	constructor(e, t, i) {
		;(this.precTable = t), (this.elseToken = i), (this.data = typeof e == 'string' ? un(e) : e)
	}
	token(e, t) {
		let i = e.pos,
			r = 0
		for (;;) {
			const s = e.next < 0,
				o = e.resolveOffset(1, 1)
			if ((Bf(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)) break
			if (this.elseToken == null) return
			if ((s || r++, o == null)) break
			e.reset(o, e.token)
		}
		r && (e.reset(i, e.token), e.acceptToken(this.elseToken, r))
	}
}
Dr.prototype.contextual = Xi.prototype.fallback = Xi.prototype.extend = !1
class Je {
	constructor(e, t = {}) {
		;(this.token = e), (this.contextual = !!t.contextual), (this.fallback = !!t.fallback), (this.extend = !!t.extend)
	}
}
function Bf(n, e, t, i, r, s) {
	let o = 0,
		a = 1 << i,
		{ dialect: l } = t.p.parser
	e: for (; (a & n[o]) != 0; ) {
		const c = n[o + 1]
		for (let d = o + 3; d < c; d += 2)
			if ((n[d + 1] & a) > 0) {
				const O = n[d]
				if (l.allows(O) && (e.token.value == -1 || e.token.value == O || c1(O, e.token.value, r, s))) {
					e.acceptToken(O)
					break
				}
			}
		let h = e.next,
			u = 0,
			f = n[o + 2]
		if (e.next < 0 && f > u && n[c + f * 3 - 3] == 65535) {
			o = n[c + f * 3 - 1]
			continue
		}
		for (; u < f; ) {
			const d = (u + f) >> 1,
				O = c + d + (d << 1),
				p = n[O],
				v = n[O + 1] || 65536
			if (h < p) f = d
			else if (h >= v) u = d + 1
			else {
				;(o = n[O + 2]), e.advance()
				continue e
			}
		}
		break
	}
}
function Lc(n, e, t) {
	for (let i = e, r; (r = n[i]) != 65535; i++) if (r == t) return i - e
	return -1
}
function c1(n, e, t, i) {
	const r = Lc(t, i, e)
	return r < 0 || Lc(t, i, n) < r
}
const Ue = typeof process < 'u' && _c && /\bparse\b/.test(_c.LOG)
let Ws = null
function Dc(n, e, t) {
	const i = n.cursor(te.IncludeAnonymous)
	for (i.moveTo(e); ; )
		if (!(t < 0 ? i.childBefore(e) : i.childAfter(e)))
			for (;;) {
				if ((t < 0 ? i.to < e : i.from > e) && !i.type.isError)
					return t < 0 ? Math.max(0, Math.min(i.to - 1, e - 25)) : Math.min(n.length, Math.max(i.from + 1, e + 25))
				if (t < 0 ? i.prevSibling() : i.nextSibling()) break
				if (!i.parent()) return t < 0 ? 0 : n.length
			}
}
class h1 {
	constructor(e, t) {
		;(this.fragments = e),
			(this.nodeSet = t),
			(this.i = 0),
			(this.fragment = null),
			(this.safeFrom = -1),
			(this.safeTo = -1),
			(this.trees = []),
			(this.start = []),
			(this.index = []),
			this.nextFragment()
	}
	nextFragment() {
		const e = (this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++])
		if (e) {
			for (
				this.safeFrom = e.openStart ? Dc(e.tree, e.from + e.offset, 1) - e.offset : e.from,
					this.safeTo = e.openEnd ? Dc(e.tree, e.to + e.offset, -1) - e.offset : e.to;
				this.trees.length;
			)
				this.trees.pop(), this.start.pop(), this.index.pop()
			this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), (this.nextStart = this.safeFrom)
		} else this.nextStart = 1e9
	}
	nodeAt(e) {
		if (e < this.nextStart) return null
		for (; this.fragment && this.safeTo <= e; ) this.nextFragment()
		if (!this.fragment) return null
		for (;;) {
			const t = this.trees.length - 1
			if (t < 0) return this.nextFragment(), null
			const i = this.trees[t],
				r = this.index[t]
			if (r == i.children.length) {
				this.trees.pop(), this.start.pop(), this.index.pop()
				continue
			}
			const s = i.children[r],
				o = this.start[t] + i.positions[r]
			if (o > e) return (this.nextStart = o), null
			if (s instanceof fe) {
				if (o == e) {
					if (o < this.safeFrom) return null
					const a = o + s.length
					if (a <= this.safeTo) {
						const l = s.prop(G.lookAhead)
						if (!l || a + l < this.fragment.to) return s
					}
				}
				this.index[t]++,
					o + s.length >= Math.max(this.safeFrom, e) && (this.trees.push(s), this.start.push(o), this.index.push(0))
			} else this.index[t]++, (this.nextStart = o + s.length)
		}
	}
}
class u1 {
	constructor(e, t) {
		;(this.stream = t),
			(this.tokens = []),
			(this.mainToken = null),
			(this.actions = []),
			(this.tokens = e.tokenizers.map((i) => new mr()))
	}
	getActions(e) {
		let t = 0,
			i = null,
			{ parser: r } = e.p,
			{ tokenizers: s } = r,
			o = r.stateSlot(e.state, 3),
			a = e.curContext ? e.curContext.hash : 0,
			l = 0
		for (let c = 0; c < s.length; c++) {
			if (((1 << c) & o) == 0) continue
			const h = s[c],
				u = this.tokens[c]
			if (
				!(i && !h.fallback) &&
				((h.contextual || u.start != e.pos || u.mask != o || u.context != a) &&
					(this.updateCachedToken(u, h, e), (u.mask = o), (u.context = a)),
				u.lookAhead > u.end + 25 && (l = Math.max(u.lookAhead, l)),
				u.value != 0)
			) {
				const f = t
				if (
					(u.extended > -1 && (t = this.addActions(e, u.extended, u.end, t)),
					(t = this.addActions(e, u.value, u.end, t)),
					!h.extend && ((i = u), t > f))
				)
					break
			}
		}
		for (; this.actions.length > t; ) this.actions.pop()
		return (
			l && e.setLookAhead(l),
			!i &&
				e.pos == this.stream.end &&
				((i = new mr()),
				(i.value = e.p.parser.eofTerm),
				(i.start = i.end = e.pos),
				(t = this.addActions(e, i.value, i.end, t))),
			(this.mainToken = i),
			this.actions
		)
	}
	getMainToken(e) {
		if (this.mainToken) return this.mainToken
		const t = new mr(),
			{ pos: i, p: r } = e
		return (
			(t.start = i), (t.end = Math.min(i + 1, r.stream.end)), (t.value = i == r.stream.end ? r.parser.eofTerm : 0), t
		)
	}
	updateCachedToken(e, t, i) {
		const r = this.stream.clipPos(i.pos)
		if ((t.token(this.stream.reset(r, e), i), e.value > -1)) {
			const { parser: s } = i.p
			for (let o = 0; o < s.specialized.length; o++)
				if (s.specialized[o] == e.value) {
					const a = s.specializers[o](this.stream.read(e.start, e.end), i)
					if (a >= 0 && i.p.parser.dialect.allows(a >> 1)) {
						;(a & 1) == 0 ? (e.value = a >> 1) : (e.extended = a >> 1)
						break
					}
				}
		} else (e.value = 0), (e.end = this.stream.clipPos(r + 1))
	}
	putAction(e, t, i, r) {
		for (let s = 0; s < r; s += 3) if (this.actions[s] == e) return r
		return (this.actions[r++] = e), (this.actions[r++] = t), (this.actions[r++] = i), r
	}
	addActions(e, t, i, r) {
		const { state: s } = e,
			{ parser: o } = e.p,
			{ data: a } = o
		for (let l = 0; l < 2; l++)
			for (let c = o.stateSlot(s, l ? 2 : 1); ; c += 3) {
				if (a[c] == 65535)
					if (a[c + 1] == 1) c = Mt(a, c + 2)
					else {
						r == 0 && a[c + 1] == 2 && (r = this.putAction(Mt(a, c + 2), t, i, r))
						break
					}
				a[c] == t && (r = this.putAction(Mt(a, c + 1), t, i, r))
			}
		return r
	}
}
class f1 {
	constructor(e, t, i, r) {
		;(this.parser = e),
			(this.input = t),
			(this.ranges = r),
			(this.recovering = 0),
			(this.nextStackID = 9812),
			(this.minStackPos = 0),
			(this.reused = []),
			(this.stoppedAt = null),
			(this.lastBigReductionStart = -1),
			(this.lastBigReductionSize = 0),
			(this.bigReductionCount = 0),
			(this.stream = new l1(t, r)),
			(this.tokens = new u1(e, this.stream)),
			(this.topTerm = e.top[1])
		const { from: s } = r[0]
		;(this.stacks = [Ir.start(this, e.top[0], s)]),
			(this.fragments = i.length && this.stream.end - s > e.bufferLength * 4 ? new h1(i, e.nodeSet) : null)
	}
	get parsedPos() {
		return this.minStackPos
	}
	advance() {
		let e = this.stacks,
			t = this.minStackPos,
			i = (this.stacks = []),
			r,
			s
		if (this.bigReductionCount > 300 && e.length == 1) {
			const [o] = e
			for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; );
			this.bigReductionCount = this.lastBigReductionSize = 0
		}
		for (let o = 0; o < e.length; o++) {
			const a = e[o]
			for (;;) {
				if (((this.tokens.mainToken = null), a.pos > t)) i.push(a)
				else {
					if (this.advanceStack(a, i, e)) continue
					{
						r || ((r = []), (s = [])), r.push(a)
						const l = this.tokens.getMainToken(a)
						s.push(l.value, l.end)
					}
				}
				break
			}
		}
		if (!i.length) {
			const o = r && O1(r)
			if (o) return Ue && console.log('Finish with ' + this.stackID(o)), this.stackToTree(o)
			if (this.parser.strict)
				throw (
					(Ue &&
						r &&
						console.log(
							'Stuck with token ' + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : 'none'),
						),
					new SyntaxError('No parse at ' + t))
				)
			this.recovering || (this.recovering = 5)
		}
		if (this.recovering && r) {
			const o = this.stoppedAt != null && r[0].pos > this.stoppedAt ? r[0] : this.runRecovery(r, s, i)
			if (o) return Ue && console.log('Force-finish ' + this.stackID(o)), this.stackToTree(o.forceAll())
		}
		if (this.recovering) {
			const o = this.recovering == 1 ? 1 : this.recovering * 3
			if (i.length > o) for (i.sort((a, l) => l.score - a.score); i.length > o; ) i.pop()
			i.some((a) => a.reducePos > t) && this.recovering--
		} else if (i.length > 1) {
			e: for (let o = 0; o < i.length - 1; o++) {
				const a = i[o]
				for (let l = o + 1; l < i.length; l++) {
					const c = i[l]
					if (a.sameState(c) || (a.buffer.length > 500 && c.buffer.length > 500))
						if ((a.score - c.score || a.buffer.length - c.buffer.length) > 0) i.splice(l--, 1)
						else {
							i.splice(o--, 1)
							continue e
						}
				}
			}
			i.length > 12 && (i.sort((o, a) => a.score - o.score), i.splice(12, i.length - 12))
		}
		this.minStackPos = i[0].pos
		for (let o = 1; o < i.length; o++) i[o].pos < this.minStackPos && (this.minStackPos = i[o].pos)
		return null
	}
	stopAt(e) {
		if (this.stoppedAt != null && this.stoppedAt < e) throw new RangeError("Can't move stoppedAt forward")
		this.stoppedAt = e
	}
	advanceStack(e, t, i) {
		const r = e.pos,
			{ parser: s } = this,
			o = Ue ? this.stackID(e) + ' -> ' : ''
		if (this.stoppedAt != null && r > this.stoppedAt) return e.forceReduce() ? e : null
		if (this.fragments) {
			const c = e.curContext && e.curContext.tracker.strict,
				h = c ? e.curContext.hash : 0
			for (let u = this.fragments.nodeAt(r); u; ) {
				const f = this.parser.nodeSet.types[u.type.id] == u.type ? s.getGoto(e.state, u.type.id) : -1
				if (f > -1 && u.length && (!c || (u.prop(G.contextHash) || 0) == h))
					return e.useNode(u, f), Ue && console.log(o + this.stackID(e) + ` (via reuse of ${s.getName(u.type.id)})`), !0
				if (!(u instanceof fe) || u.children.length == 0 || u.positions[0] > 0) break
				const d = u.children[0]
				if (d instanceof fe && u.positions[0] == 0) u = d
				else break
			}
		}
		const a = s.stateSlot(e.state, 4)
		if (a > 0)
			return e.reduce(a), Ue && console.log(o + this.stackID(e) + ` (via always-reduce ${s.getName(a & 65535)})`), !0
		if (e.stack.length >= 8400) for (; e.stack.length > 6e3 && e.forceReduce(); );
		const l = this.tokens.getActions(e)
		for (let c = 0; c < l.length; ) {
			const h = l[c++],
				u = l[c++],
				f = l[c++],
				d = c == l.length || !i,
				O = d ? e : e.split(),
				p = this.tokens.mainToken
			if (
				(O.apply(h, u, p ? p.start : O.pos, f),
				Ue &&
					console.log(
						o +
							this.stackID(O) +
							` (via ${(h & 65536) == 0 ? 'shift' : `reduce of ${s.getName(h & 65535)}`} for ${s.getName(u)} @ ${r}${O == e ? '' : ', split'})`,
					),
				d)
			)
				return !0
			O.pos > r ? t.push(O) : i.push(O)
		}
		return !1
	}
	advanceFully(e, t) {
		const i = e.pos
		for (;;) {
			if (!this.advanceStack(e, null, null)) return !1
			if (e.pos > i) return Wc(e, t), !0
		}
	}
	runRecovery(e, t, i) {
		let r = null,
			s = !1
		for (let o = 0; o < e.length; o++) {
			let a = e[o],
				l = t[o << 1],
				c = t[(o << 1) + 1],
				h = Ue ? this.stackID(a) + ' -> ' : ''
			if (
				a.deadEnd &&
				(s || ((s = !0), a.restart(), Ue && console.log(h + this.stackID(a) + ' (restarted)'), this.advanceFully(a, i)))
			)
				continue
			let u = a.split(),
				f = h
			for (
				let d = 0;
				d < 10 &&
				u.forceReduce() &&
				(Ue && console.log(f + this.stackID(u) + ' (via force-reduce)'), !this.advanceFully(u, i));
				d++
			)
				Ue && (f = this.stackID(u) + ' -> ')
			for (const d of a.recoverByInsert(l))
				Ue && console.log(h + this.stackID(d) + ' (via recover-insert)'), this.advanceFully(d, i)
			this.stream.end > a.pos
				? (c == a.pos && (c++, (l = 0)),
					a.recoverByDelete(l, c),
					Ue && console.log(h + this.stackID(a) + ` (via recover-delete ${this.parser.getName(l)})`),
					Wc(a, i))
				: (!r || r.score < u.score) && (r = u)
		}
		return r
	}
	stackToTree(e) {
		return (
			e.close(),
			fe.build({
				buffer: Lr.create(e),
				nodeSet: this.parser.nodeSet,
				topID: this.topTerm,
				maxBufferLength: this.parser.bufferLength,
				reused: this.reused,
				start: this.ranges[0].from,
				length: e.pos - this.ranges[0].from,
				minRepeatType: this.parser.minRepeatTerm,
			})
		)
	}
	stackID(e) {
		let t = (Ws || (Ws = new WeakMap())).get(e)
		return t || Ws.set(e, (t = String.fromCodePoint(this.nextStackID++))), t + e
	}
}
function Wc(n, e) {
	for (let t = 0; t < e.length; t++) {
		const i = e[t]
		if (i.pos == n.pos && i.sameState(n)) {
			e[t].score < n.score && (e[t] = n)
			return
		}
	}
	e.push(n)
}
class d1 {
	constructor(e, t, i) {
		;(this.source = e), (this.flags = t), (this.disabled = i)
	}
	allows(e) {
		return !this.disabled || this.disabled[e] == 0
	}
}
const Ys = (n) => n
class qf {
	constructor(e) {
		;(this.start = e.start),
			(this.shift = e.shift || Ys),
			(this.reduce = e.reduce || Ys),
			(this.reuse = e.reuse || Ys),
			(this.hash = e.hash || (() => 0)),
			(this.strict = e.strict !== !1)
	}
}
class Ni extends Gu {
	constructor(e) {
		if ((super(), (this.wrappers = []), e.version != 14))
			throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`)
		const t = e.nodeNames.split(' ')
		this.minRepeatTerm = t.length
		for (let a = 0; a < e.repeatNodeCount; a++) t.push('')
		const i = Object.keys(e.topRules).map((a) => e.topRules[a][1]),
			r = []
		for (let a = 0; a < t.length; a++) r.push([])
		function s(a, l, c) {
			r[a].push([l, l.deserialize(String(c))])
		}
		if (e.nodeProps)
			for (const a of e.nodeProps) {
				let l = a[0]
				typeof l == 'string' && (l = G[l])
				for (let c = 1; c < a.length; ) {
					const h = a[c++]
					if (h >= 0) s(h, l, a[c++])
					else {
						const u = a[c + -h]
						for (let f = -h; f > 0; f--) s(a[c++], l, u)
						c++
					}
				}
			}
		;(this.nodeSet = new Ta(
			t.map((a, l) =>
				De.define({
					name: l >= this.minRepeatTerm ? void 0 : a,
					id: l,
					props: r[l],
					top: i.indexOf(l) > -1,
					error: l == 0,
					skipped: e.skippedNodes && e.skippedNodes.indexOf(l) > -1,
				}),
			),
		)),
			e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)),
			(this.strict = !1),
			(this.bufferLength = Yu)
		const o = un(e.tokenData)
		;(this.context = e.context),
			(this.specializerSpecs = e.specialized || []),
			(this.specialized = new Uint16Array(this.specializerSpecs.length))
		for (let a = 0; a < this.specializerSpecs.length; a++) this.specialized[a] = this.specializerSpecs[a].term
		;(this.specializers = this.specializerSpecs.map(Yc)),
			(this.states = un(e.states, Uint32Array)),
			(this.data = un(e.stateData)),
			(this.goto = un(e.goto)),
			(this.maxTerm = e.maxTerm),
			(this.tokenizers = e.tokenizers.map((a) => (typeof a == 'number' ? new Xi(o, a) : a))),
			(this.topRules = e.topRules),
			(this.dialects = e.dialects || {}),
			(this.dynamicPrecedences = e.dynamicPrecedences || null),
			(this.tokenPrecTable = e.tokenPrec),
			(this.termNames = e.termNames || null),
			(this.maxNode = this.nodeSet.types.length - 1),
			(this.dialect = this.parseDialect()),
			(this.top = this.topRules[Object.keys(this.topRules)[0]])
	}
	createParse(e, t, i) {
		let r = new f1(this, e, t, i)
		for (const s of this.wrappers) r = s(r, e, t, i)
		return r
	}
	getGoto(e, t, i = !1) {
		const r = this.goto
		if (t >= r[0]) return -1
		for (let s = r[t + 1]; ; ) {
			const o = r[s++],
				a = o & 1,
				l = r[s++]
			if (a && i) return l
			for (let c = s + (o >> 1); s < c; s++) if (r[s] == e) return l
			if (a) return -1
		}
	}
	hasAction(e, t) {
		const i = this.data
		for (let r = 0; r < 2; r++)
			for (let s = this.stateSlot(e, r ? 2 : 1), o; ; s += 3) {
				if ((o = i[s]) == 65535)
					if (i[s + 1] == 1) o = i[(s = Mt(i, s + 2))]
					else {
						if (i[s + 1] == 2) return Mt(i, s + 2)
						break
					}
				if (o == t || o == 0) return Mt(i, s + 1)
			}
		return 0
	}
	stateSlot(e, t) {
		return this.states[e * 6 + t]
	}
	stateFlag(e, t) {
		return (this.stateSlot(e, 0) & t) > 0
	}
	validAction(e, t) {
		return !!this.allActions(e, (i) => (i == t ? !0 : null))
	}
	allActions(e, t) {
		let i = this.stateSlot(e, 4),
			r = i ? t(i) : void 0
		for (let s = this.stateSlot(e, 1); r == null; s += 3) {
			if (this.data[s] == 65535)
				if (this.data[s + 1] == 1) s = Mt(this.data, s + 2)
				else break
			r = t(Mt(this.data, s + 1))
		}
		return r
	}
	nextStates(e) {
		const t = []
		for (let i = this.stateSlot(e, 1); ; i += 3) {
			if (this.data[i] == 65535)
				if (this.data[i + 1] == 1) i = Mt(this.data, i + 2)
				else break
			if ((this.data[i + 2] & 1) == 0) {
				const r = this.data[i + 1]
				t.some((s, o) => o & 1 && s == r) || t.push(this.data[i], r)
			}
		}
		return t
	}
	configure(e) {
		const t = Object.assign(Object.create(Ni.prototype), this)
		if ((e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top)) {
			const i = this.topRules[e.top]
			if (!i) throw new RangeError(`Invalid top rule name ${e.top}`)
			t.top = i
		}
		return (
			e.tokenizers &&
				(t.tokenizers = this.tokenizers.map((i) => {
					const r = e.tokenizers.find((s) => s.from == i)
					return r ? r.to : i
				})),
			e.specializers &&
				((t.specializers = this.specializers.slice()),
				(t.specializerSpecs = this.specializerSpecs.map((i, r) => {
					const s = e.specializers.find((a) => a.from == i.external)
					if (!s) return i
					const o = Object.assign(Object.assign({}, i), { external: s.to })
					return (t.specializers[r] = Yc(o)), o
				}))),
			e.contextTracker && (t.context = e.contextTracker),
			e.dialect && (t.dialect = this.parseDialect(e.dialect)),
			e.strict != null && (t.strict = e.strict),
			e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)),
			e.bufferLength != null && (t.bufferLength = e.bufferLength),
			t
		)
	}
	hasWrappers() {
		return this.wrappers.length > 0
	}
	getName(e) {
		return this.termNames ? this.termNames[e] : String((e <= this.maxNode && this.nodeSet.types[e].name) || e)
	}
	get eofTerm() {
		return this.maxNode + 1
	}
	get topNode() {
		return this.nodeSet.types[this.top[1]]
	}
	dynamicPrecedence(e) {
		const t = this.dynamicPrecedences
		return t == null ? 0 : t[e] || 0
	}
	parseDialect(e) {
		const t = Object.keys(this.dialects),
			i = t.map(() => !1)
		if (e)
			for (const s of e.split(' ')) {
				const o = t.indexOf(s)
				o >= 0 && (i[o] = !0)
			}
		let r = null
		for (let s = 0; s < t.length; s++)
			if (!i[s])
				for (let o = this.dialects[t[s]], a; (a = this.data[o++]) != 65535; )
					(r || (r = new Uint8Array(this.maxTerm + 1)))[a] = 1
		return new d1(e, i, r)
	}
	static deserialize(e) {
		return new Ni(e)
	}
}
function Mt(n, e) {
	return n[e] | (n[e + 1] << 16)
}
function O1(n) {
	let e = null
	for (const t of n) {
		const i = t.p.stoppedAt
		;(t.pos == t.p.stream.end || (i != null && t.pos > i)) &&
			t.p.parser.stateFlag(t.state, 2) &&
			(!e || e.score < t.score) &&
			(e = t)
	}
	return e
}
function Yc(n) {
	if (n.external) {
		const e = n.extend ? 1 : 0
		return (t, i) => (n.external(t, i) << 1) | e
	}
	return n.get
}
const p1 = 135,
	Nc = 1,
	g1 = 136,
	m1 = 137,
	Gf = 2,
	v1 = 138,
	b1 = 3,
	y1 = 4,
	Uf = [
		9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233,
		8239, 8287, 12288,
	],
	S1 = 58,
	x1 = 40,
	Ff = 95,
	w1 = 91,
	vr = 45,
	$1 = 46,
	Q1 = 35,
	k1 = 37,
	P1 = 38,
	T1 = 92,
	C1 = 10,
	Z1 = 42
function Zn(n) {
	return (n >= 65 && n <= 90) || (n >= 97 && n <= 122) || n >= 161
}
function Na(n) {
	return n >= 48 && n <= 57
}
function Vc(n) {
	return Na(n) || (n >= 97 && n <= 102) || (n >= 65 && n <= 70)
}
const Hf = (n, e, t) => (i, r) => {
		for (let s = !1, o = 0, a = 0; ; a++) {
			const { next: l } = i
			if (Zn(l) || l == vr || l == Ff || (s && Na(l)))
				!s && (l != vr || a > 0) && (s = !0), o === a && l == vr && o++, i.advance()
			else if (l == T1 && i.peek(1) != C1) {
				if ((i.advance(), Vc(i.next))) {
					do i.advance()
					while (Vc(i.next))
					i.next == 32 && i.advance()
				} else i.next > -1 && i.advance()
				s = !0
			} else {
				s && i.acceptToken(o == 2 && r.canShift(Gf) ? e : l == x1 ? t : n)
				break
			}
		}
	},
	R1 = new Je(Hf(g1, Gf, m1), { contextual: !0 }),
	A1 = new Je(Hf(v1, b1, y1), { contextual: !0 }),
	j1 = new Je((n) => {
		if (Uf.includes(n.peek(-1))) {
			const { next: e } = n
			;(Zn(e) ||
				e == Ff ||
				e == Q1 ||
				e == $1 ||
				e == Z1 ||
				e == w1 ||
				(e == S1 && Zn(n.peek(1))) ||
				e == vr ||
				e == P1) &&
				n.acceptToken(p1)
		}
	}),
	X1 = new Je((n) => {
		if (!Uf.includes(n.peek(-1))) {
			const { next: e } = n
			if ((e == k1 && (n.advance(), n.acceptToken(Nc)), Zn(e))) {
				do n.advance()
				while (Zn(n.next) || Na(n.next))
				n.acceptToken(Nc)
			}
		}
	}),
	M1 = ts({
		'AtKeyword import charset namespace keyframes media supports font-feature-values': w.definitionKeyword,
		'from to selector scope MatchFlag': w.keyword,
		NamespaceName: w.namespace,
		KeyframeName: w.labelName,
		KeyframeRangeName: w.operatorKeyword,
		TagName: w.tagName,
		ClassName: w.className,
		PseudoClassName: w.constant(w.className),
		IdName: w.labelName,
		'FeatureName PropertyName': w.propertyName,
		AttributeName: w.attributeName,
		NumberLiteral: w.number,
		KeywordQuery: w.keyword,
		UnaryQueryOp: w.operatorKeyword,
		'CallTag ValueName FontName': w.atom,
		VariableName: w.variableName,
		Callee: w.operatorKeyword,
		Unit: w.unit,
		'UniversalSelector NestingSelector': w.definitionOperator,
		'MatchOp CompareOp': w.compareOperator,
		'ChildOp SiblingOp, LogicOp': w.logicOperator,
		BinOp: w.arithmeticOperator,
		Important: w.modifier,
		Comment: w.blockComment,
		ColorLiteral: w.color,
		'ParenthesizedContent StringLiteral': w.string,
		':': w.punctuation,
		'PseudoOp #': w.derefOperator,
		'; , |': w.separator,
		'( )': w.paren,
		'[ ]': w.squareBracket,
		'{ }': w.brace,
	}),
	E1 = {
		__proto__: null,
		lang: 44,
		'nth-child': 44,
		'nth-last-child': 44,
		'nth-of-type': 44,
		'nth-last-of-type': 44,
		dir: 44,
		'host-context': 44,
		if: 90,
		url: 132,
		'url-prefix': 132,
		domain: 132,
		regexp: 132,
	},
	_1 = { __proto__: null, or: 104, and: 104, not: 112, only: 112, layer: 186 },
	z1 = { __proto__: null, selector: 118, layer: 182 },
	I1 = {
		__proto__: null,
		'@import': 178,
		'@media': 190,
		'@charset': 194,
		'@namespace': 198,
		'@keyframes': 204,
		'@supports': 216,
		'@scope': 220,
		'@font-feature-values': 226,
	},
	L1 = { __proto__: null, to: 223 },
	D1 = Ni.deserialize({
		version: 14,
		states:
			"IpQYQdOOO#}QdOOP$UO`OOO%OQaO'#CfOOQP'#Ce'#CeO%VQdO'#CgO%[Q`O'#CgO%aQaO'#FdO&XQdO'#CkO&xQaO'#CcO'SQdO'#CnO'_QdO'#DtO'dQdO'#DvO'oQdO'#D}O'oQdO'#EQOOQP'#Fd'#FdO)OQhO'#EsOOQS'#Fc'#FcOOQS'#Ev'#EvQYQdOOO)VQdO'#EWO*cQhO'#E^O)VQdO'#E`O*jQdO'#EbO*uQdO'#EeO)zQhO'#EkO*}QdO'#EmO+YQdO'#EpO+_QaO'#CfO+fQ`O'#ETO+kQ`O'#FnO+vQdO'#FnQOQ`OOP,QO&jO'#CaPOOO)CAR)CAROOQP'#Ci'#CiOOQP,59R,59RO%VQdO,59ROOQP'#Cm'#CmOOQP,59V,59VO&XQdO,59VO,]QdO,59YO'_QdO,5:`O'dQdO,5:bO'oQdO,5:iO'oQdO,5:kO'oQdO,5:lO'oQdO'#E}O,hQ`O,58}O,pQdO'#ESOOQS,58},58}OOQP'#Cq'#CqOOQO'#Dr'#DrOOQP,59Y,59YO,wQ`O,59YO,|Q`O,59YOOQP'#Du'#DuOOQP,5:`,5:`O-RQpO'#DwO-^QdO'#DxO-cQ`O'#DxO-hQpO,5:bO.RQaO,5:iO.iQaO,5:lOOQW'#D^'#D^O/eQhO'#DgO/xQhO,5;_O)zQhO'#DeO0VQ`O'#DkO0[QhO'#DnOOQW'#Fj'#FjOOQS,5;_,5;_O0aQ`O'#DhOOQS-E8t-E8tOOQ['#Cv'#CvO0fQdO'#CwO0|QdO'#C}O1dQdO'#DQO1zQ!pO'#DSO4TQ!jO,5:rOOQO'#DX'#DXO,|Q`O'#DWO4eQ!nO'#FgO6hQ`O'#DYO6mQ`O'#DoOOQ['#Fg'#FgO6rQhO'#FqO7QQ`O,5:xO7VQ!bO,5:zOOQS'#Ed'#EdO7_Q`O,5:|O7dQdO,5:|OOQO'#Eg'#EgO7lQ`O,5;PO7qQhO,5;VO'oQdO'#DjOOQS,5;X,5;XO0aQ`O,5;XO7yQdO,5;XOOQS'#FU'#FUO8RQdO'#ErO7QQ`O,5;[O8ZQdO,5:oO8kQdO'#FPO8xQ`O,5<YO8xQ`O,5<YPOOO'#Eu'#EuP9TO&jO,58{POOO,58{,58{OOQP1G.m1G.mOOQP1G.q1G.qOOQP1G.t1G.tO,wQ`O1G.tO,|Q`O1G.tOOQP1G/z1G/zO9`QpO1G/|O9hQaO1G0TO:OQaO1G0VO:fQaO1G0WO:|QaO,5;iOOQO-E8{-E8{OOQS1G.i1G.iO;WQ`O,5:nO;]QdO'#DsO;dQdO'#CuOOQO'#Dz'#DzOOQO,5:d,5:dO-^QdO,5:dOOQP1G/|1G/|O)VQdO1G/|O;kQ!jO'#D^O;yQ!bO,59yO<RQhO,5:ROOQO'#Fk'#FkO;|Q!bO,59}O<ZQhO'#FVO)zQhO,59{O)zQhO'#FVO=OQhO1G0yOOQS1G0y1G0yO=YQhO,5:PO>QQhO'#DlOOQW,5:V,5:VOOQW,5:Y,5:YOOQW,5:S,5:SO>[Q!fO'#FhOOQS'#Fh'#FhOOQS'#Ex'#ExO?lQdO,59cOOQ[,59c,59cO@SQdO,59iOOQ[,59i,59iO@jQdO,59lOOQ[,59l,59lOOQ[,59n,59nO)VQdO,59pOAQQhO'#EYOOQW'#EY'#EYOAlQ`O1G0^O4^QhO1G0^OOQ[,59r,59rO)zQhO'#D[OOQ[,59t,59tOAqQ#tO,5:ZOA|QhO'#FROBZQ`O,5<]OOQS1G0d1G0dOOQS1G0f1G0fOOQS1G0h1G0hOBfQ`O1G0hOBkQdO'#EhOOQS1G0k1G0kOOQS1G0q1G0qOBvQaO,5:UO7QQ`O1G0sOOQS1G0s1G0sO0aQ`O1G0sOOQS-E9S-E9SOOQS1G0v1G0vOB}Q!fO1G0ZOCeQ`O'#EVOOQO1G0Z1G0ZOOQO,5;k,5;kOCjQdO,5;kOOQO-E8}-E8}OCwQ`O1G1tPOOO-E8s-E8sPOOO1G.g1G.gOOQP7+$`7+$`OOQP7+%h7+%hO)VQdO7+%hOOQS1G0Y1G0YODSQaO'#FmOD^Q`O,5:_ODcQ!fO'#EwOEaQdO'#FfOEkQ`O,59aOOQO1G0O1G0OOEpQ!bO7+%hO)VQdO1G/eOE{QhO1G/iOOQW1G/m1G/mOOQW1G/g1G/gOF^QhO,5;qOOQW-E9T-E9TOOQS7+&e7+&eOGRQhO'#D^OGaQhO'#FlOGlQ`O'#FlOGqQ`O,5:WOOQS-E8v-E8vOOQ[1G.}1G.}OOQ[1G/T1G/TOOQ[1G/W1G/WOOQ[1G/[1G/[OGvQdO,5:tOOQS7+%x7+%xOG{Q`O7+%xOHQQhO'#D]OHYQ`O,59vO)zQhO,59vOOQ[1G/u1G/uOHbQ`O1G/uOHgQhO,5;mOOQO-E9P-E9POOQS7+&S7+&SOHuQbO'#DSOOQO'#Ej'#EjOITQ`O'#EiOOQO'#Ei'#EiOI`Q`O'#FSOIhQdO,5;SOOQS,5;S,5;SOOQ[1G/p1G/pOOQS7+&_7+&_O7QQ`O7+&_OIsQ!fO'#FOO)VQdO'#FOOJzQdO7+%uOOQO7+%u7+%uOOQO,5:q,5:qOOQO1G1V1G1VOK_Q!bO<<ISOKjQdO'#E|OKtQ`O,5<XOOQP1G/y1G/yOOQS-E8u-E8uOK|QdO'#E{OLWQ`O,5<QOOQ]1G.{1G.{OOQP<<IS<<ISOL`Q`O<<ISOLeQdO7+%POOQO'#D`'#D`OLlQ!bO7+%TOLtQhO'#EzOMRQ`O,5<WO)VQdO,5<WOOQW1G/r1G/rOOQO'#E['#E[OMZQ`O1G0`OOQS<<Id<<IdO)VQdO,59wOMzQhO1G/bOOQ[1G/b1G/bONRQ`O1G/bOOQW-E8w-E8wOOQ[7+%a7+%aOOQO,5;T,5;TOBnQdO'#FTOI`Q`O,5;nOOQS,5;n,5;nOOQS-E9Q-E9QOOQS1G0n1G0nOOQS<<Iy<<IyONZQ!fO,5;jOOQS-E8|-E8|OOQO<<Ia<<IaOOQPAN>nAN>nO! bQ`OAN>nO! gQaO,5;hOOQO-E8z-E8zO! qQdO,5;gOOQO-E8y-E8yOOQW<<Hk<<HkOOQW<<Ho<<HoO! {QhO<<HoO!!^QhO,5;fO!!iQ`O,5;fOOQO-E8x-E8xO!!nQdO1G1rOGvQdO'#FQO!!xQ`O7+%zOOQW7+%z7+%zO!#QQ!bO1G/cOOQ[7+$|7+$|O!#]QhO7+$|P!#dQ`O'#EyOOQO,5;o,5;oOOQO-E9R-E9ROOQS1G1Y1G1YOOQPG24YG24YO!#iQ`OAN>ZO)VQdO1G1QO!#nQ`O7+'^OOQO,5;l,5;lOOQO-E9O-E9OOOQW<<If<<IfOOQ[<<Hh<<HhPOQW,5;e,5;eOOQWG23uG23uO!#vQdO7+&l",
		stateData:
			"!$Z~O$QOS$RQQ~OWVO^_O`WOcYOdYOl`OmZOp[O!r]O!u^O!{dO#ReO#TfO#VgO#YhO#`iO#bjO#ekO#|RO$XTO~OQmOWVO^_O`WOcYOdYOl`OmZOp[O!r]O!u^O!{dO#ReO#TfO#VgO#YhO#`iO#bjO#ekO#|lO$XTO~O#z$bP~P!jO$RqO~O`YXcYXdYXmYXpYXsYX!aYX!rYX!uYX#{YX$X[X~OgYX~P$ZO#|sO~O$XuO~O$XuO`$WXc$WXd$WXm$WXp$WXs$WX!a$WX!r$WX!u$WX#{$WXg$WX~O#|vO~O`xOcyOdyOmzOp{O!r|O!u!OO#{}O~Os!RO!a!PO~P&^Of!XO#|!TO#}!UO~O#|!YO~OW!^O#|![O$X!]O~OWVO^_O`WOcYOdYOmZOp[O!r]O!u^O#|RO$XTO~OS!fOc!gOd!gOh!cOs!RO!Y!eO!]!jO$O!bO~On!iO~P(dOQ!tOh!mOp!nOs!oOu!wOw!wO}!uO!d!vO#|!lO#}!rO$]!pO~OS!fOc!gOd!gOh!cO!Y!eO!]!jO$O!bO~Os$eP~P)zOw!|O!d!vO#|!{O~Ow#OO#|#OO~Oh#ROs!RO#c#TO~O#|#VO~Oc!xX~P$ZOc#YO~On#ZO#z$bXr$bX~O#z$bXr$bX~P!jO$S#^O$T#^O$U#`O~Of#eO#|!TO#}!UO~Os!RO!a!PO~Or$bP~P!jOh#oO~Oh#pO~Oo!kX!o!kX$X!mX~O#|#qO~O$X#sO~Oo#tO!o#uO~O`xOcyOdyOmzOp{O~Os!qa!a!qa!r!qa!u!qa#{!qag!qa~P-pOs!ta!a!ta!r!ta!u!ta#{!tag!ta~P-pOS!fOc!gOd!gOh!cO!Y!eO!]!jO~OR#yOu#yOw#yO$O#vO$]!pO~P/POn$PO!U#|O!a#}O~P(dOh$RO~O$O$TO~Oh#RO~O`$WOc$WOg$ZOl$WOm$WOn$WO~P)VO`$WOc$WOl$WOm$WOn$WOo$]O~P)VO`$WOc$WOl$WOm$WOn$WOr$_O~P)VOP$`OSvXcvXdvXhvXnvXyvX!YvX!]vX!}vX#PvX$OvX!WvXQvX`vXgvXlvXmvXpvXsvXuvXwvX}vX!dvX#|vX#}vX$]vXovXrvX!avX#zvX$dvX!pvX~Oy$aO!}$bO#P$cOn$eP~P)zOh#pOS$ZXc$ZXd$ZXn$ZXy$ZX!Y$ZX!]$ZX!}$ZX#P$ZX$O$ZXQ$ZX`$ZXg$ZXl$ZXm$ZXp$ZXs$ZXu$ZXw$ZX}$ZX!d$ZX#|$ZX#}$ZX$]$ZXo$ZXr$ZX!a$ZX#z$ZX$d$ZX!p$ZX~Oh$gO~Oh$iO~O!U#|O!a$jOs$eXn$eX~Os!RO~On$mOy$aO~On$nO~Ow$oO!d!vO~Os$pO~Os!RO!U#|O~Os!RO#c$vO~O#|#VOs#fX~O$d$zOn!wa#z!war!wa~P)VOn#sX#z#sXr#sX~P!jOn#ZO#z$bar$ba~O$S#^O$T#^O$U%RO~Oo%TO!o%UO~Os!qi!a!qi!r!qi!u!qi#{!qig!qi~P-pOs!si!a!si!r!si!u!si#{!sig!si~P-pOs!ti!a!ti!r!ti!u!ti#{!tig!ti~P-pOs#qa!a#qa~P&^Or%VO~Og$aP~P'oOg$YP~P)VOc!SXg!QX!U!QX!W!SX~Oc%_O!W%`O~Og%aO!U#|O~O!U#|OS#yXc#yXd#yXh#yXn#yXs#yX!Y#yX!]#yX!a#yX$O#yX~On%eO!a#}O~P(dO!U#|OS!Xac!Xad!Xah!Xan!Xas!Xa!Y!Xa!]!Xa!a!Xa$O!Xag!Xa~O$O%fOg$`P~P/POy$aOQ$[X`$[Xc$[Xg$[Xh$[Xl$[Xm$[Xn$[Xp$[Xs$[Xu$[Xw$[X}$[X!d$[X#|$[X#}$[X$]$[Xo$[Xr$[X~O`$WOc$WOg%kOl$WOm$WOn$WO~P)VO`$WOc$WOl$WOm$WOn$WOo%lO~P)VO`$WOc$WOl$WOm$WOn$WOr%mO~P)VOh%oOS!|Xc!|Xd!|Xn!|X!Y!|X!]!|X$O!|X~On%pO~Og%uOw%vO!e%vO~Os#uX!a#uXn#uX~P)zO!a$jOs$ean$ea~On%yO~Or&QO#|%{O$]%zO~Og&RO~P&^Oy$aO!a&VO$d$zOn!wi#z!wir!wi~P)VO$c&YO~On#sa#z#sar#sa~P!jOn#ZO#z$bir$bi~O!a&]Og$aX~P&^Og&_O~Oy$aOQ#kXg#kXh#kXp#kXs#kXu#kXw#kX}#kX!a#kX!d#kX#|#kX#}#kX$]#kX~O!a&aOg$YX~P)VOg&cO~Oo&dOy$aO!p&eO~OR#yOu#yOw#yO$O&gO$]!pO~O!U#|OS#yac#yad#yah#yan#yas#ya!Y#ya!]#ya!a#ya$O#ya~Oc!SXg!QX!U!QX!a!QX~O!U#|O!a&iOg$`X~Oc&kO~Og&lO~O#|&mO~On&oO~Oc&pO!U#|O~Og&rOn&qO~Og&uO~O!U#|Os#ua!a#uan#ua~OP$`OsvX!avXgvX~O$]%zOs#]X!a#]X~Os!RO!a&wO~Or&{O#|%{O$]%zO~Oy$aOQ#rXh#rXn#rXp#rXs#rXu#rXw#rX}#rX!a#rX!d#rX#z#rX#|#rX#}#rX$]#rX$d#rXr#rX~O!a&VO$d$zOn!wq#z!wqr!wq~P)VOo'QOy$aO!p'RO~Og#pX!a#pX~P'oO!a&]Og$aa~Og#oX!a#oX~P)VO!a&aOg$Ya~Oo'QO~Og'WO~P)VOg'XO!W'YO~O$O%fOg#nX!a#nX~P/PO!a&iOg$`a~O`'_Og'aO~OS#mac#mad#mah#ma!Y#ma!]#ma$O#ma~Og'cO~PMcOg'cOn'dO~Oy$aOQ#rah#ran#rap#ras#rau#raw#ra}#ra!a#ra!d#ra#z#ra#|#ra#}#ra$]#ra$d#rar#ra~Oo'iO~Og#pa!a#pa~P&^Og#oa!a#oa~P)VOR#yOu#yOw#yO$O&gO$]%zO~O!U#|Og#na!a#na~Oc'kO~O!a&iOg$`i~P)VO`'_Og'oO~Oy$aOg!Pin!Pi~Og'pO~PMcOn'qO~Og'rO~O!a&iOg$`q~Og#nq!a#nq~P)VO$Q!e$R$]`$]y!u~",
		goto: "4h$fPPPPP$gP$jP$s%V$s%i%{P$sP&R$sPP&XPPP&_&i&iPPPPP&iPP&iP'VP&iP&i(Q&iP(n(q(w(w)Z(wP(wP(wP(w(wP)j(w)vP(w)yPP*m*s$s*y$s+P+P+V+ZPP$sP$s$sP+a,],j,q$jP,zP,}P$jP$jP$jP-T$jP-W-Z-^-e$jP$jPP$jP-j$jP-m-s.S.j.x/O/Y/`/f/l/r/|0S0Y0`0f0lPPPPPPPPPPP0r0{P1q1t2vP3O3x4R4U4XPP4_RrQ_aOPco!R#Z$}q_OP]^co|}!O!P!R#R#Z#o$}&]qSOP]^co|}!O!P!R#R#Z#o$}&]qUOP]^co|}!O!P!R#R#Z#o$}&]QtTR#auQwWR#bxQ!VYR#cyQ#c!XS$f!s!tR%S#e!V!wdf!m!n!o#Y#p#u$Y$[$^$a$y%U%Z%_&V&W&a&f&k&p'U'^'k's!U!wdf!m!n!o#Y#p#u$Y$[$^$a$y%U%Z%_&V&W&a&f&k&p'U'^'k'sU#y!c%`'YU%}$p&P&wR&v%|!V!sdf!m!n!o#Y#p#u$Y$[$^$a$y%U%Z%_&V&W&a&f&k&p'U'^'k'sR$h!uQ%s$gR&s%tq!h`ei!c!d!e!q#|#}$O$R$e$g$j%t&iQ#w!cQ%h$RQ&h%`Q'[&iR'j'YQ#UjQ$U!jQ$t#TR&T$vR$S!f!U!wdf!m!n!o#Y#p#u$Y$[$^$a$y%U%Z%_&V&W&a&f&k&p'U'^'k'sQ!|gR$o!}Q!WYR#dyQ#c!WR%S#dQ!ZZR#fzQ!_[R#g{T!^[{Q#r!]R%]#sQ!SXQ!i`Q#SjQ#m!QQ$P!dQ$l!yQ$r#QQ$u#UQ$x#XQ%e$OQ&S$tQ&y&OQ&|&TR'h&xSnP!RQ#]oQ$|#ZR&Z$}ZmPo!R#Z$}Q${#YQ&X$yR'P&WR$e!qQ&n%oR'm'_R!}gR#PhR$q#PS&O$p&PR'f&wV%|$p&P&wR#XkQ#_qR%Q#_QcOSoP!RU!kco$}R$}#ZQ%Z#pY&`%Z&f'U'^'sQ&f%_Q'U&aQ'^&kR's'kQ$Y!mQ$[!nQ$^!oV%j$Y$[$^Q%t$gR&t%tQ&j%gS']&j'lR'l'^Q&b%ZR'V&bQ&^%WR'T&^Q!QXR#l!QQ&W$yR'O&WQ#[nS%O#[%PR%P#]Q'`&nR'n'`Q$k!xR%x$kQ&P$pR&z&PQ&x&OR'g&xQ#WkR$w#WQ$O!dR%d$O_bOPco!R#Z$}^XOPco!R#Z$}Q!`]Q!a^Q#h|Q#i}Q#j!OQ#k!PQ$s#RQ%W#oR'S&]R%[#pQ!qdQ!zf[$V!m!n!o$Y$[$^Q$y#Yd%Y#p%Z%_&a&f&k'U'^'k'sQ%^#uQ%n$aS&U$y&WQ&[%UQ&}&VR'b&p]$X!m!n!o$Y$[$^Q!d`U!xe!q$eQ#QiQ#x!cS#{!d$OQ$Q!eQ%b#|Q%c#}Q%g$RS%r$g%tQ%w$jR'Z&iQ#z!cQ&h%`R'j'YR%i$RR%X#oQpPR#n!RQ!yeQ$d!qR%q$e",
		nodeNames:
			'⚠ Unit VariableName VariableName QueryCallee Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NamespacedTagSelector NamespaceName TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue AtKeyword # ; ] [ BracketedValue } { BracedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee IfExpression if ArgList IfBranch KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp ComparisonQuery CompareOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector ParenthesizedSelector CallQuery ArgList , PseudoQuery CallLiteral CallTag ParenthesizedContent PseudoClassName ArgList IdSelector IdName AttributeSelector AttributeName NamespacedAttribute NamespaceName AttributeName MatchOp MatchFlag ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp Block Declaration PropertyName Important ImportStatement import Layer layer LayerName layer MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports ScopeStatement scope to FontFeatureStatement font-feature-values FontName AtRule Styles',
		maxTerm: 159,
		nodeProps: [
			['isolate', -2, 5, 39, ''],
			['openedBy', 23, '(', 31, '[', 34, '{'],
			['closedBy', 24, ')', 32, ']', 35, '}'],
		],
		propSources: [M1],
		skippedNodes: [0, 5, 117],
		repeatNodeCount: 17,
		tokenData:
			"K`~R!bOX%ZX^&R^p%Zpq&Rqr)ers)vst+jtu2Xuv%Zvw3Rwx3dxy5Ryz5dz{5i{|6S|}:u}!O;W!O!P;u!P!Q<^!Q![=V![!]>Q!]!^>|!^!_?_!_!`@Z!`!a@n!a!b%Z!b!cAo!c!k%Z!k!lC|!l!u%Z!u!vC|!v!}%Z!}#OD_#O#P%Z#P#QDp#Q#R2X#R#]%Z#]#^ER#^#g%Z#g#hC|#h#o%Z#o#pIf#p#qIw#q#rJ`#r#sJq#s#y%Z#y#z&R#z$f%Z$f$g&R$g#BY%Z#BY#BZ&R#BZ$IS%Z$IS$I_&R$I_$I|%Z$I|$JO&R$JO$JT%Z$JT$JU&R$JU$KV%Z$KV$KW&R$KW&FU%Z&FU&FV&R&FV;'S%Z;'S;=`KY<%lO%Z`%^SOy%jz;'S%j;'S;=`%{<%lO%j`%oS!e`Oy%jz;'S%j;'S;=`%{<%lO%j`&OP;=`<%l%j~&Wh$Q~OX%jX^'r^p%jpq'rqy%jz#y%j#y#z'r#z$f%j$f$g'r$g#BY%j#BY#BZ'r#BZ$IS%j$IS$I_'r$I_$I|%j$I|$JO'r$JO$JT%j$JT$JU'r$JU$KV%j$KV$KW'r$KW&FU%j&FU&FV'r&FV;'S%j;'S;=`%{<%lO%j~'yh$Q~!e`OX%jX^'r^p%jpq'rqy%jz#y%j#y#z'r#z$f%j$f$g'r$g#BY%j#BY#BZ'r#BZ$IS%j$IS$I_'r$I_$I|%j$I|$JO'r$JO$JT%j$JT$JU'r$JU$KV%j$KV$KW'r$KW&FU%j&FU&FV'r&FV;'S%j;'S;=`%{<%lO%jj)jS$dYOy%jz;'S%j;'S;=`%{<%lO%j~)yWOY)vZr)vrs*cs#O)v#O#P*h#P;'S)v;'S;=`+d<%lO)v~*hOw~~*kRO;'S)v;'S;=`*t;=`O)v~*wXOY)vZr)vrs*cs#O)v#O#P*h#P;'S)v;'S;=`+d;=`<%l)v<%lO)v~+gP;=`<%l)vj+oYmYOy%jz!Q%j!Q![,_![!c%j!c!i,_!i#T%j#T#Z,_#Z;'S%j;'S;=`%{<%lO%jj,dY!e`Oy%jz!Q%j!Q![-S![!c%j!c!i-S!i#T%j#T#Z-S#Z;'S%j;'S;=`%{<%lO%jj-XY!e`Oy%jz!Q%j!Q![-w![!c%j!c!i-w!i#T%j#T#Z-w#Z;'S%j;'S;=`%{<%lO%jj.OYuY!e`Oy%jz!Q%j!Q![.n![!c%j!c!i.n!i#T%j#T#Z.n#Z;'S%j;'S;=`%{<%lO%jj.uYuY!e`Oy%jz!Q%j!Q![/e![!c%j!c!i/e!i#T%j#T#Z/e#Z;'S%j;'S;=`%{<%lO%jj/jY!e`Oy%jz!Q%j!Q![0Y![!c%j!c!i0Y!i#T%j#T#Z0Y#Z;'S%j;'S;=`%{<%lO%jj0aYuY!e`Oy%jz!Q%j!Q![1P![!c%j!c!i1P!i#T%j#T#Z1P#Z;'S%j;'S;=`%{<%lO%jj1UY!e`Oy%jz!Q%j!Q![1t![!c%j!c!i1t!i#T%j#T#Z1t#Z;'S%j;'S;=`%{<%lO%jj1{SuY!e`Oy%jz;'S%j;'S;=`%{<%lO%jd2[UOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%jd2uS!oS!e`Oy%jz;'S%j;'S;=`%{<%lO%jb3WS^QOy%jz;'S%j;'S;=`%{<%lO%j~3gWOY3dZw3dwx*cx#O3d#O#P4P#P;'S3d;'S;=`4{<%lO3d~4SRO;'S3d;'S;=`4];=`O3d~4`XOY3dZw3dwx*cx#O3d#O#P4P#P;'S3d;'S;=`4{;=`<%l3d<%lO3d~5OP;=`<%l3dj5WShYOy%jz;'S%j;'S;=`%{<%lO%j~5iOg~n5pUWQyWOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%jj6ZWyW!uQOy%jz!O%j!O!P6s!P!Q%j!Q![9x![;'S%j;'S;=`%{<%lO%jj6xU!e`Oy%jz!Q%j!Q![7[![;'S%j;'S;=`%{<%lO%jj7cY!e`$]YOy%jz!Q%j!Q![7[![!g%j!g!h8R!h#X%j#X#Y8R#Y;'S%j;'S;=`%{<%lO%jj8WY!e`Oy%jz{%j{|8v|}%j}!O8v!O!Q%j!Q![9_![;'S%j;'S;=`%{<%lO%jj8{U!e`Oy%jz!Q%j!Q![9_![;'S%j;'S;=`%{<%lO%jj9fU!e`$]YOy%jz!Q%j!Q![9_![;'S%j;'S;=`%{<%lO%jj:P[!e`$]YOy%jz!O%j!O!P7[!P!Q%j!Q![9x![!g%j!g!h8R!h#X%j#X#Y8R#Y;'S%j;'S;=`%{<%lO%jj:zS!aYOy%jz;'S%j;'S;=`%{<%lO%jj;]WyWOy%jz!O%j!O!P6s!P!Q%j!Q![9x![;'S%j;'S;=`%{<%lO%jj;zU`YOy%jz!Q%j!Q![7[![;'S%j;'S;=`%{<%lO%j~<cTyWOy%jz{<r{;'S%j;'S;=`%{<%lO%j~<yS!e`$R~Oy%jz;'S%j;'S;=`%{<%lO%jj=[[$]YOy%jz!O%j!O!P7[!P!Q%j!Q![9x![!g%j!g!h8R!h#X%j#X#Y8R#Y;'S%j;'S;=`%{<%lO%jj>VUcYOy%jz![%j![!]>i!];'S%j;'S;=`%{<%lO%jj>pSdY!e`Oy%jz;'S%j;'S;=`%{<%lO%jj?RSnYOy%jz;'S%j;'S;=`%{<%lO%jh?dU!WWOy%jz!_%j!_!`?v!`;'S%j;'S;=`%{<%lO%jh?}S!WW!e`Oy%jz;'S%j;'S;=`%{<%lO%jl@bS!WW!oSOy%jz;'S%j;'S;=`%{<%lO%jj@uV!rQ!WWOy%jz!_%j!_!`?v!`!aA[!a;'S%j;'S;=`%{<%lO%jbAcS!rQ!e`Oy%jz;'S%j;'S;=`%{<%lO%jjArYOy%jz}%j}!OBb!O!c%j!c!}CP!}#T%j#T#oCP#o;'S%j;'S;=`%{<%lO%jjBgW!e`Oy%jz!c%j!c!}CP!}#T%j#T#oCP#o;'S%j;'S;=`%{<%lO%jjCW[lY!e`Oy%jz}%j}!OCP!O!Q%j!Q![CP![!c%j!c!}CP!}#T%j#T#oCP#o;'S%j;'S;=`%{<%lO%jhDRS!pWOy%jz;'S%j;'S;=`%{<%lO%jjDdSpYOy%jz;'S%j;'S;=`%{<%lO%jnDuSo^Oy%jz;'S%j;'S;=`%{<%lO%jjEWU!pWOy%jz#a%j#a#bEj#b;'S%j;'S;=`%{<%lO%jbEoU!e`Oy%jz#d%j#d#eFR#e;'S%j;'S;=`%{<%lO%jbFWU!e`Oy%jz#c%j#c#dFj#d;'S%j;'S;=`%{<%lO%jbFoU!e`Oy%jz#f%j#f#gGR#g;'S%j;'S;=`%{<%lO%jbGWU!e`Oy%jz#h%j#h#iGj#i;'S%j;'S;=`%{<%lO%jbGoU!e`Oy%jz#T%j#T#UHR#U;'S%j;'S;=`%{<%lO%jbHWU!e`Oy%jz#b%j#b#cHj#c;'S%j;'S;=`%{<%lO%jbHoU!e`Oy%jz#h%j#h#iIR#i;'S%j;'S;=`%{<%lO%jbIYS$cQ!e`Oy%jz;'S%j;'S;=`%{<%lO%jjIkSsYOy%jz;'S%j;'S;=`%{<%lO%jfI|U$XUOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%jjJeSrYOy%jz;'S%j;'S;=`%{<%lO%jfJvU!uQOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%j`K]P;=`<%l%Z",
		tokenizers: [j1, X1, R1, A1, 1, 2, 3, 4, new Dr('m~RRYZ[z{a~~g~aO$T~~dP!P!Qg~lO$U~~', 28, 142)],
		topRules: { StyleSheet: [0, 6], Styles: [1, 116] },
		dynamicPrecedences: { 84: 1 },
		specialized: [
			{ term: 137, get: (n) => E1[n] || -1 },
			{ term: 138, get: (n) => _1[n] || -1 },
			{ term: 4, get: (n) => z1[n] || -1 },
			{ term: 28, get: (n) => I1[n] || -1 },
			{ term: 136, get: (n) => L1[n] || -1 },
		],
		tokenPrec: 2256,
	})
let Ns = null
function Vs() {
	if (!Ns && typeof document == 'object' && document.body) {
		const { style: n } = document.body,
			e = [],
			t = new Set()
		for (let i in n)
			i != 'cssText' &&
				i != 'cssFloat' &&
				typeof n[i] == 'string' &&
				(/[A-Z]/.test(i) && (i = i.replace(/[A-Z]/g, (r) => '-' + r.toLowerCase())), t.has(i) || (e.push(i), t.add(i)))
		Ns = e.sort().map((i) => ({ type: 'property', label: i, apply: i + ': ' }))
	}
	return Ns || []
}
const Bc = [
		'active',
		'after',
		'any-link',
		'autofill',
		'backdrop',
		'before',
		'checked',
		'cue',
		'default',
		'defined',
		'disabled',
		'empty',
		'enabled',
		'file-selector-button',
		'first',
		'first-child',
		'first-letter',
		'first-line',
		'first-of-type',
		'focus',
		'focus-visible',
		'focus-within',
		'fullscreen',
		'has',
		'host',
		'host-context',
		'hover',
		'in-range',
		'indeterminate',
		'invalid',
		'is',
		'lang',
		'last-child',
		'last-of-type',
		'left',
		'link',
		'marker',
		'modal',
		'not',
		'nth-child',
		'nth-last-child',
		'nth-last-of-type',
		'nth-of-type',
		'only-child',
		'only-of-type',
		'optional',
		'out-of-range',
		'part',
		'placeholder',
		'placeholder-shown',
		'read-only',
		'read-write',
		'required',
		'right',
		'root',
		'scope',
		'selection',
		'slotted',
		'target',
		'target-text',
		'valid',
		'visited',
		'where',
	].map((n) => ({ type: 'class', label: n })),
	qc = [
		'above',
		'absolute',
		'activeborder',
		'additive',
		'activecaption',
		'after-white-space',
		'ahead',
		'alias',
		'all',
		'all-scroll',
		'alphabetic',
		'alternate',
		'always',
		'antialiased',
		'appworkspace',
		'asterisks',
		'attr',
		'auto',
		'auto-flow',
		'avoid',
		'avoid-column',
		'avoid-page',
		'avoid-region',
		'axis-pan',
		'background',
		'backwards',
		'baseline',
		'below',
		'bidi-override',
		'blink',
		'block',
		'block-axis',
		'bold',
		'bolder',
		'border',
		'border-box',
		'both',
		'bottom',
		'break',
		'break-all',
		'break-word',
		'bullets',
		'button',
		'button-bevel',
		'buttonface',
		'buttonhighlight',
		'buttonshadow',
		'buttontext',
		'calc',
		'capitalize',
		'caps-lock-indicator',
		'caption',
		'captiontext',
		'caret',
		'cell',
		'center',
		'checkbox',
		'circle',
		'cjk-decimal',
		'clear',
		'clip',
		'close-quote',
		'col-resize',
		'collapse',
		'color',
		'color-burn',
		'color-dodge',
		'column',
		'column-reverse',
		'compact',
		'condensed',
		'contain',
		'content',
		'contents',
		'content-box',
		'context-menu',
		'continuous',
		'copy',
		'counter',
		'counters',
		'cover',
		'crop',
		'cross',
		'crosshair',
		'currentcolor',
		'cursive',
		'cyclic',
		'darken',
		'dashed',
		'decimal',
		'decimal-leading-zero',
		'default',
		'default-button',
		'dense',
		'destination-atop',
		'destination-in',
		'destination-out',
		'destination-over',
		'difference',
		'disc',
		'discard',
		'disclosure-closed',
		'disclosure-open',
		'document',
		'dot-dash',
		'dot-dot-dash',
		'dotted',
		'double',
		'down',
		'e-resize',
		'ease',
		'ease-in',
		'ease-in-out',
		'ease-out',
		'element',
		'ellipse',
		'ellipsis',
		'embed',
		'end',
		'ethiopic-abegede-gez',
		'ethiopic-halehame-aa-er',
		'ethiopic-halehame-gez',
		'ew-resize',
		'exclusion',
		'expanded',
		'extends',
		'extra-condensed',
		'extra-expanded',
		'fantasy',
		'fast',
		'fill',
		'fill-box',
		'fixed',
		'flat',
		'flex',
		'flex-end',
		'flex-start',
		'footnotes',
		'forwards',
		'from',
		'geometricPrecision',
		'graytext',
		'grid',
		'groove',
		'hand',
		'hard-light',
		'help',
		'hidden',
		'hide',
		'higher',
		'highlight',
		'highlighttext',
		'horizontal',
		'hsl',
		'hsla',
		'hue',
		'icon',
		'ignore',
		'inactiveborder',
		'inactivecaption',
		'inactivecaptiontext',
		'infinite',
		'infobackground',
		'infotext',
		'inherit',
		'initial',
		'inline',
		'inline-axis',
		'inline-block',
		'inline-flex',
		'inline-grid',
		'inline-table',
		'inset',
		'inside',
		'intrinsic',
		'invert',
		'italic',
		'justify',
		'keep-all',
		'landscape',
		'large',
		'larger',
		'left',
		'level',
		'lighter',
		'lighten',
		'line-through',
		'linear',
		'linear-gradient',
		'lines',
		'list-item',
		'listbox',
		'listitem',
		'local',
		'logical',
		'loud',
		'lower',
		'lower-hexadecimal',
		'lower-latin',
		'lower-norwegian',
		'lowercase',
		'ltr',
		'luminosity',
		'manipulation',
		'match',
		'matrix',
		'matrix3d',
		'medium',
		'menu',
		'menutext',
		'message-box',
		'middle',
		'min-intrinsic',
		'mix',
		'monospace',
		'move',
		'multiple',
		'multiple_mask_images',
		'multiply',
		'n-resize',
		'narrower',
		'ne-resize',
		'nesw-resize',
		'no-close-quote',
		'no-drop',
		'no-open-quote',
		'no-repeat',
		'none',
		'normal',
		'not-allowed',
		'nowrap',
		'ns-resize',
		'numbers',
		'numeric',
		'nw-resize',
		'nwse-resize',
		'oblique',
		'opacity',
		'open-quote',
		'optimizeLegibility',
		'optimizeSpeed',
		'outset',
		'outside',
		'outside-shape',
		'overlay',
		'overline',
		'padding',
		'padding-box',
		'painted',
		'page',
		'paused',
		'perspective',
		'pinch-zoom',
		'plus-darker',
		'plus-lighter',
		'pointer',
		'polygon',
		'portrait',
		'pre',
		'pre-line',
		'pre-wrap',
		'preserve-3d',
		'progress',
		'push-button',
		'radial-gradient',
		'radio',
		'read-only',
		'read-write',
		'read-write-plaintext-only',
		'rectangle',
		'region',
		'relative',
		'repeat',
		'repeating-linear-gradient',
		'repeating-radial-gradient',
		'repeat-x',
		'repeat-y',
		'reset',
		'reverse',
		'rgb',
		'rgba',
		'ridge',
		'right',
		'rotate',
		'rotate3d',
		'rotateX',
		'rotateY',
		'rotateZ',
		'round',
		'row',
		'row-resize',
		'row-reverse',
		'rtl',
		'run-in',
		'running',
		's-resize',
		'sans-serif',
		'saturation',
		'scale',
		'scale3d',
		'scaleX',
		'scaleY',
		'scaleZ',
		'screen',
		'scroll',
		'scrollbar',
		'scroll-position',
		'se-resize',
		'self-start',
		'self-end',
		'semi-condensed',
		'semi-expanded',
		'separate',
		'serif',
		'show',
		'single',
		'skew',
		'skewX',
		'skewY',
		'skip-white-space',
		'slide',
		'slider-horizontal',
		'slider-vertical',
		'sliderthumb-horizontal',
		'sliderthumb-vertical',
		'slow',
		'small',
		'small-caps',
		'small-caption',
		'smaller',
		'soft-light',
		'solid',
		'source-atop',
		'source-in',
		'source-out',
		'source-over',
		'space',
		'space-around',
		'space-between',
		'space-evenly',
		'spell-out',
		'square',
		'start',
		'static',
		'status-bar',
		'stretch',
		'stroke',
		'stroke-box',
		'sub',
		'subpixel-antialiased',
		'svg_masks',
		'super',
		'sw-resize',
		'symbolic',
		'symbols',
		'system-ui',
		'table',
		'table-caption',
		'table-cell',
		'table-column',
		'table-column-group',
		'table-footer-group',
		'table-header-group',
		'table-row',
		'table-row-group',
		'text',
		'text-bottom',
		'text-top',
		'textarea',
		'textfield',
		'thick',
		'thin',
		'threeddarkshadow',
		'threedface',
		'threedhighlight',
		'threedlightshadow',
		'threedshadow',
		'to',
		'top',
		'transform',
		'translate',
		'translate3d',
		'translateX',
		'translateY',
		'translateZ',
		'transparent',
		'ultra-condensed',
		'ultra-expanded',
		'underline',
		'unidirectional-pan',
		'unset',
		'up',
		'upper-latin',
		'uppercase',
		'url',
		'var',
		'vertical',
		'vertical-text',
		'view-box',
		'visible',
		'visibleFill',
		'visiblePainted',
		'visibleStroke',
		'visual',
		'w-resize',
		'wait',
		'wave',
		'wider',
		'window',
		'windowframe',
		'windowtext',
		'words',
		'wrap',
		'wrap-reverse',
		'x-large',
		'x-small',
		'xor',
		'xx-large',
		'xx-small',
	]
		.map((n) => ({ type: 'keyword', label: n }))
		.concat(
			[
				'aliceblue',
				'antiquewhite',
				'aqua',
				'aquamarine',
				'azure',
				'beige',
				'bisque',
				'black',
				'blanchedalmond',
				'blue',
				'blueviolet',
				'brown',
				'burlywood',
				'cadetblue',
				'chartreuse',
				'chocolate',
				'coral',
				'cornflowerblue',
				'cornsilk',
				'crimson',
				'cyan',
				'darkblue',
				'darkcyan',
				'darkgoldenrod',
				'darkgray',
				'darkgreen',
				'darkkhaki',
				'darkmagenta',
				'darkolivegreen',
				'darkorange',
				'darkorchid',
				'darkred',
				'darksalmon',
				'darkseagreen',
				'darkslateblue',
				'darkslategray',
				'darkturquoise',
				'darkviolet',
				'deeppink',
				'deepskyblue',
				'dimgray',
				'dodgerblue',
				'firebrick',
				'floralwhite',
				'forestgreen',
				'fuchsia',
				'gainsboro',
				'ghostwhite',
				'gold',
				'goldenrod',
				'gray',
				'grey',
				'green',
				'greenyellow',
				'honeydew',
				'hotpink',
				'indianred',
				'indigo',
				'ivory',
				'khaki',
				'lavender',
				'lavenderblush',
				'lawngreen',
				'lemonchiffon',
				'lightblue',
				'lightcoral',
				'lightcyan',
				'lightgoldenrodyellow',
				'lightgray',
				'lightgreen',
				'lightpink',
				'lightsalmon',
				'lightseagreen',
				'lightskyblue',
				'lightslategray',
				'lightsteelblue',
				'lightyellow',
				'lime',
				'limegreen',
				'linen',
				'magenta',
				'maroon',
				'mediumaquamarine',
				'mediumblue',
				'mediumorchid',
				'mediumpurple',
				'mediumseagreen',
				'mediumslateblue',
				'mediumspringgreen',
				'mediumturquoise',
				'mediumvioletred',
				'midnightblue',
				'mintcream',
				'mistyrose',
				'moccasin',
				'navajowhite',
				'navy',
				'oldlace',
				'olive',
				'olivedrab',
				'orange',
				'orangered',
				'orchid',
				'palegoldenrod',
				'palegreen',
				'paleturquoise',
				'palevioletred',
				'papayawhip',
				'peachpuff',
				'peru',
				'pink',
				'plum',
				'powderblue',
				'purple',
				'rebeccapurple',
				'red',
				'rosybrown',
				'royalblue',
				'saddlebrown',
				'salmon',
				'sandybrown',
				'seagreen',
				'seashell',
				'sienna',
				'silver',
				'skyblue',
				'slateblue',
				'slategray',
				'snow',
				'springgreen',
				'steelblue',
				'tan',
				'teal',
				'thistle',
				'tomato',
				'turquoise',
				'violet',
				'wheat',
				'white',
				'whitesmoke',
				'yellow',
				'yellowgreen',
			].map((n) => ({ type: 'constant', label: n })),
		),
	W1 = [
		'a',
		'abbr',
		'address',
		'article',
		'aside',
		'b',
		'bdi',
		'bdo',
		'blockquote',
		'body',
		'br',
		'button',
		'canvas',
		'caption',
		'cite',
		'code',
		'col',
		'colgroup',
		'dd',
		'del',
		'details',
		'dfn',
		'dialog',
		'div',
		'dl',
		'dt',
		'em',
		'figcaption',
		'figure',
		'footer',
		'form',
		'header',
		'hgroup',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'hr',
		'html',
		'i',
		'iframe',
		'img',
		'input',
		'ins',
		'kbd',
		'label',
		'legend',
		'li',
		'main',
		'meter',
		'nav',
		'ol',
		'output',
		'p',
		'pre',
		'ruby',
		'section',
		'select',
		'small',
		'source',
		'span',
		'strong',
		'sub',
		'summary',
		'sup',
		'table',
		'tbody',
		'td',
		'template',
		'textarea',
		'tfoot',
		'th',
		'thead',
		'tr',
		'u',
		'ul',
	].map((n) => ({ type: 'type', label: n })),
	Y1 = [
		'@charset',
		'@color-profile',
		'@container',
		'@counter-style',
		'@font-face',
		'@font-feature-values',
		'@font-palette-values',
		'@import',
		'@keyframes',
		'@layer',
		'@media',
		'@namespace',
		'@page',
		'@position-try',
		'@property',
		'@scope',
		'@starting-style',
		'@supports',
		'@view-transition',
	].map((n) => ({ type: 'keyword', label: n })),
	Xt = /^(\w[\w-]*|-\w[\w-]*|)$/,
	N1 = /^-(-[\w-]*)?$/
function V1(n, e) {
	var t
	if (((n.name == '(' || n.type.isError) && (n = n.parent || n), n.name != 'ArgList')) return !1
	const i = (t = n.parent) === null || t === void 0 ? void 0 : t.firstChild
	return i?.name != 'Callee' ? !1 : e.sliceString(i.from, i.to) == 'var'
}
const Gc = new qu(),
	B1 = ['Declaration']
function q1(n) {
	for (let e = n; ; ) {
		if (e.type.isTop) return e
		if (!(e = e.parent)) return n
	}
}
function Kf(n, e, t) {
	if (e.to - e.from > 4096) {
		const i = Gc.get(e)
		if (i) return i
		const r = [],
			s = new Set(),
			o = e.cursor(te.IncludeAnonymous)
		if (o.firstChild())
			do for (const a of Kf(n, o.node, t)) s.has(a.label) || (s.add(a.label), r.push(a))
			while (o.nextSibling())
		return Gc.set(e, r), r
	}
	const i = [],
		r = new Set()
	return (
		e.cursor().iterate((s) => {
			var o
			if (t(s) && s.matchContext(B1) && ((o = s.node.nextSibling) === null || o === void 0 ? void 0 : o.name) == ':') {
				const a = n.sliceString(s.from, s.to)
				r.has(a) || (r.add(a), i.push({ label: a, type: 'variable' }))
			}
		}),
		i
	)
}
const G1 = (n) => (e) => {
		const { state: t, pos: i } = e,
			r = ke(t).resolveInner(i, -1),
			s = r.type.isError && r.from == r.to - 1 && t.doc.sliceString(r.from, r.to) == '-'
		if (r.name == 'PropertyName' || ((s || r.name == 'TagName') && /^(Block|Styles)$/.test(r.resolve(r.to).name)))
			return { from: r.from, options: Vs(), validFor: Xt }
		if (r.name == 'ValueName') return { from: r.from, options: qc, validFor: Xt }
		if (r.name == 'PseudoClassName') return { from: r.from, options: Bc, validFor: Xt }
		if (n(r) || ((e.explicit || s) && V1(r, t.doc)))
			return { from: n(r) || s ? r.from : i, options: Kf(t.doc, q1(r), n), validFor: N1 }
		if (r.name == 'TagName') {
			for (let { parent: l } = r; l; l = l.parent)
				if (l.name == 'Block') return { from: r.from, options: Vs(), validFor: Xt }
			return { from: r.from, options: W1, validFor: Xt }
		}
		if (r.name == 'AtKeyword') return { from: r.from, options: Y1, validFor: Xt }
		if (!e.explicit) return null
		const o = r.resolve(i),
			a = o.childBefore(i)
		return a && a.name == ':' && o.name == 'PseudoClassSelector'
			? { from: i, options: Bc, validFor: Xt }
			: (a && a.name == ':' && o.name == 'Declaration') || o.name == 'ArgList'
				? { from: i, options: qc, validFor: Xt }
				: o.name == 'Block' || o.name == 'Styles'
					? { from: i, options: Vs(), validFor: Xt }
					: null
	},
	U1 = G1((n) => n.name == 'VariableName'),
	Wr = Di.define({
		name: 'css',
		parser: D1.configure({ props: [rs.add({ Declaration: gr() }), Ma.add({ 'Block KeyframeList': rf })] }),
		languageData: { commentTokens: { block: { open: '/*', close: '*/' } }, indentOnInput: /^\s*\}$/, wordChars: '-' },
	})
function Jf() {
	return new ja(Wr, Wr.data.of({ autocomplete: U1 }))
}
const F1 = 55,
	H1 = 1,
	K1 = 56,
	J1 = 2,
	eb = 57,
	tb = 3,
	Uc = 4,
	ib = 5,
	Va = 6,
	ed = 7,
	td = 8,
	id = 9,
	nd = 10,
	nb = 11,
	rb = 12,
	sb = 13,
	Bs = 58,
	ob = 14,
	ab = 15,
	Fc = 59,
	rd = 21,
	lb = 23,
	sd = 24,
	cb = 25,
	ea = 27,
	od = 28,
	hb = 29,
	ub = 32,
	fb = 35,
	db = 37,
	Ob = 38,
	pb = 0,
	gb = 1,
	mb = {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		command: !0,
		embed: !0,
		frame: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
		menuitem: !0,
	},
	vb = {
		dd: !0,
		li: !0,
		optgroup: !0,
		option: !0,
		p: !0,
		rp: !0,
		rt: !0,
		tbody: !0,
		td: !0,
		tfoot: !0,
		th: !0,
		tr: !0,
	},
	Hc = {
		dd: { dd: !0, dt: !0 },
		dt: { dd: !0, dt: !0 },
		li: { li: !0 },
		option: { option: !0, optgroup: !0 },
		optgroup: { optgroup: !0 },
		p: {
			address: !0,
			article: !0,
			aside: !0,
			blockquote: !0,
			dir: !0,
			div: !0,
			dl: !0,
			fieldset: !0,
			footer: !0,
			form: !0,
			h1: !0,
			h2: !0,
			h3: !0,
			h4: !0,
			h5: !0,
			h6: !0,
			header: !0,
			hgroup: !0,
			hr: !0,
			menu: !0,
			nav: !0,
			ol: !0,
			p: !0,
			pre: !0,
			section: !0,
			table: !0,
			ul: !0,
		},
		rp: { rp: !0, rt: !0 },
		rt: { rp: !0, rt: !0 },
		tbody: { tbody: !0, tfoot: !0 },
		td: { td: !0, th: !0 },
		tfoot: { tbody: !0 },
		th: { td: !0, th: !0 },
		thead: { tbody: !0, tfoot: !0 },
		tr: { tr: !0 },
	}
function bb(n) {
	return n == 45 || n == 46 || n == 58 || (n >= 65 && n <= 90) || n == 95 || (n >= 97 && n <= 122) || n >= 161
}
let Kc = null,
	Jc = null,
	eh = 0
function ta(n, e) {
	const t = n.pos + e
	if (eh == t && Jc == n) return Kc
	let i = n.peek(e),
		r = ''
	for (; bb(i); ) (r += String.fromCharCode(i)), (i = n.peek(++e))
	return (Jc = n), (eh = t), (Kc = r ? r.toLowerCase() : i == yb || i == Sb ? void 0 : null)
}
const ad = 60,
	Yr = 62,
	Ba = 47,
	yb = 63,
	Sb = 33,
	xb = 45
function th(n, e) {
	;(this.name = n), (this.parent = e)
}
const wb = [Va, nd, ed, td, id],
	$b = new qf({
		start: null,
		shift(n, e, t, i) {
			return wb.indexOf(e) > -1 ? new th(ta(i, 1) || '', n) : n
		},
		reduce(n, e) {
			return e == rd && n ? n.parent : n
		},
		reuse(n, e, t, i) {
			const r = e.type.id
			return r == Va || r == db ? new th(ta(i, 1) || '', n) : n
		},
		strict: !1,
	}),
	Qb = new Je(
		(n, e) => {
			if (n.next != ad) {
				n.next < 0 && e.context && n.acceptToken(Bs)
				return
			}
			n.advance()
			const t = n.next == Ba
			t && n.advance()
			const i = ta(n, 0)
			if (i === void 0) return
			if (!i) return n.acceptToken(t ? ab : ob)
			const r = e.context ? e.context.name : null
			if (t) {
				if (i == r) return n.acceptToken(nb)
				if (r && vb[r]) return n.acceptToken(Bs, -2)
				if (e.dialectEnabled(pb)) return n.acceptToken(rb)
				for (let s = e.context; s; s = s.parent) if (s.name == i) return
				n.acceptToken(sb)
			} else {
				if (i == 'script') return n.acceptToken(ed)
				if (i == 'style') return n.acceptToken(td)
				if (i == 'textarea') return n.acceptToken(id)
				if (Object.hasOwn(mb, i)) return n.acceptToken(nd)
				r && Hc[r] && Hc[r][i] ? n.acceptToken(Bs, -1) : n.acceptToken(Va)
			}
		},
		{ contextual: !0 },
	),
	kb = new Je((n) => {
		for (let e = 0, t = 0; ; t++) {
			if (n.next < 0) {
				t && n.acceptToken(Fc)
				break
			}
			if (n.next == xb) e++
			else if (n.next == Yr && e >= 2) {
				t >= 3 && n.acceptToken(Fc, -2)
				break
			} else e = 0
			n.advance()
		}
	})
function Pb(n) {
	for (; n; n = n.parent) if (n.name == 'svg' || n.name == 'math') return !0
	return !1
}
const Tb = new Je((n, e) => {
	if (n.next == Ba && n.peek(1) == Yr) {
		const t = e.dialectEnabled(gb) || Pb(e.context)
		n.acceptToken(t ? ib : Uc, 2)
	} else n.next == Yr && n.acceptToken(Uc, 1)
})
function qa(n, e, t) {
	const i = 2 + n.length
	return new Je((r) => {
		for (let s = 0, o = 0, a = 0; ; a++) {
			if (r.next < 0) {
				a && r.acceptToken(e)
				break
			}
			if ((s == 0 && r.next == ad) || (s == 1 && r.next == Ba) || (s >= 2 && s < i && r.next == n.charCodeAt(s - 2)))
				s++, o++
			else if (s == i && r.next == Yr) {
				a > o ? r.acceptToken(e, -o) : r.acceptToken(t, -(o - 2))
				break
			} else if ((r.next == 10 || r.next == 13) && a) {
				r.acceptToken(e, 1)
				break
			} else s = o = 0
			r.advance()
		}
	})
}
const Cb = qa('script', F1, H1),
	Zb = qa('style', K1, J1),
	Rb = qa('textarea', eb, tb),
	Ab = ts({
		'Text RawText IncompleteTag IncompleteCloseTag': w.content,
		'StartTag StartCloseTag SelfClosingEndTag EndTag': w.angleBracket,
		TagName: w.tagName,
		'MismatchedCloseTag/TagName': [w.tagName, w.invalid],
		AttributeName: w.attributeName,
		'AttributeValue UnquotedAttributeValue': w.attributeValue,
		Is: w.definitionOperator,
		'EntityReference CharacterReference': w.character,
		Comment: w.blockComment,
		ProcessingInst: w.processingInstruction,
		DoctypeDecl: w.documentMeta,
	}),
	jb = Ni.deserialize({
		version: 14,
		states:
			",xOVO!rOOO!ZQ#tO'#CrO!`Q#tO'#C{O!eQ#tO'#DOO!jQ#tO'#DRO!oQ#tO'#DTO!tOaO'#CqO#PObO'#CqO#[OdO'#CqO$kO!rO'#CqOOO`'#Cq'#CqO$rO$fO'#DUO$zQ#tO'#DWO%PQ#tO'#DXOOO`'#Dl'#DlOOO`'#DZ'#DZQVO!rOOO%UQ&rO,59^O%aQ&rO,59gO%lQ&rO,59jO%wQ&rO,59mO&SQ&rO,59oOOOa'#D_'#D_O&_OaO'#CyO&jOaO,59]OOOb'#D`'#D`O&rObO'#C|O&}ObO,59]OOOd'#Da'#DaO'VOdO'#DPO'bOdO,59]OOO`'#Db'#DbO'jO!rO,59]O'qQ#tO'#DSOOO`,59],59]OOOp'#Dc'#DcO'vO$fO,59pOOO`,59p,59pO(OQ#|O,59rO(TQ#|O,59sOOO`-E7X-E7XO(YQ&rO'#CtOOQW'#D['#D[O(hQ&rO1G.xOOOa1G.x1G.xOOO`1G/Z1G/ZO(sQ&rO1G/ROOOb1G/R1G/RO)OQ&rO1G/UOOOd1G/U1G/UO)ZQ&rO1G/XOOO`1G/X1G/XO)fQ&rO1G/ZOOOa-E7]-E7]O)qQ#tO'#CzOOO`1G.w1G.wOOOb-E7^-E7^O)vQ#tO'#C}OOOd-E7_-E7_O){Q#tO'#DQOOO`-E7`-E7`O*QQ#|O,59nOOOp-E7a-E7aOOO`1G/[1G/[OOO`1G/^1G/^OOO`1G/_1G/_O*VQ,UO,59`OOQW-E7Y-E7YOOOa7+$d7+$dOOO`7+$u7+$uOOOb7+$m7+$mOOOd7+$p7+$pOOO`7+$s7+$sO*bQ#|O,59fO*gQ#|O,59iO*lQ#|O,59lOOO`1G/Y1G/YO*qO7[O'#CwO+SOMhO'#CwOOQW1G.z1G.zOOO`1G/Q1G/QOOO`1G/T1G/TOOO`1G/W1G/WOOOO'#D]'#D]O+eO7[O,59cOOQW,59c,59cOOOO'#D^'#D^O+vOMhO,59cOOOO-E7Z-E7ZOOQW1G.}1G.}OOOO-E7[-E7[",
		stateData:
			',c~O!_OS~OUSOVPOWQOXROYTO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O|_O!eZO~OgaO~OgbO~OgcO~OgdO~OgeO~O!XfOPmP![mP~O!YiOQpP![pP~O!ZlORsP![sP~OUSOVPOWQOXROYTOZqO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O!eZO~O![rO~P#gO!]sO!fuO~OgvO~OgwO~OS|OT}OiyO~OS!POT}OiyO~OS!ROT}OiyO~OS!TOT}OiyO~OS}OT}OiyO~O!XfOPmX![mX~OP!WO![!XO~O!YiOQpX![pX~OQ!ZO![!XO~O!ZlORsX![sX~OR!]O![!XO~O![!XO~P#gOg!_O~O!]sO!f!aO~OS!bO~OS!cO~Oj!dOShXThXihX~OS!fOT!gOiyO~OS!hOT!gOiyO~OS!iOT!gOiyO~OS!jOT!gOiyO~OS!gOT!gOiyO~Og!kO~Og!lO~Og!mO~OS!nO~Ol!qO!a!oO!c!pO~OS!rO~OS!sO~OS!tO~Ob!uOc!uOd!uO!a!wO!b!uO~Ob!xOc!xOd!xO!c!wO!d!xO~Ob!uOc!uOd!uO!a!{O!b!uO~Ob!xOc!xOd!xO!c!{O!d!xO~OT~cbd!ey|!e~',
		goto: '%q!aPPPPPPPPPPPPPPPPPPPPP!b!hP!nPP!zP!}#Q#T#Z#^#a#g#j#m#s#y!bP!b!bP$P$V$m$s$y%P%V%]%cPPPPPPPP%iX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp',
		nodeNames:
			'⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl',
		maxTerm: 68,
		context: $b,
		nodeProps: [
			[
				'closedBy',
				-10,
				1,
				2,
				3,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				'EndTag',
				6,
				'EndTag SelfClosingEndTag',
				-4,
				22,
				31,
				34,
				37,
				'CloseTag',
			],
			['openedBy', 4, 'StartTag StartCloseTag', 5, 'StartTag', -4, 30, 33, 36, 38, 'OpenTag'],
			[
				'group',
				-10,
				14,
				15,
				18,
				19,
				20,
				21,
				40,
				41,
				42,
				43,
				'Entity',
				17,
				'Entity TextContent',
				-3,
				29,
				32,
				35,
				'TextContent Entity',
			],
			['isolate', -11, 22, 30, 31, 33, 34, 36, 37, 38, 39, 42, 43, 'ltr', -3, 27, 28, 40, ''],
		],
		propSources: [Ab],
		skippedNodes: [0],
		repeatNodeCount: 9,
		tokenData:
			"!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|caPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bXaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UVaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pTaPOv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!dpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({WaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!b`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!b`!dpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYlWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]`aP!b`!dp!_^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebiSlWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXiSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vciSaP!b`!dpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!ahaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WiiSlWd!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zblWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOb!R!R7tP;=`<%l7S!Z8OYlWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{iiSlWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbiSlWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QciSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXiSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TalWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOc!R!RAwP;=`<%lAY!ZBRYlWc!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbiSlWc!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbiSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXiSc!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!cxaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYliSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_kiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_XaP!b`!dp!fQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZiSgQaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!b`!dpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!b`!dp!ePOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!b`!dpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!b`!dpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!b`!dpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!b`!dpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!b`!dpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!b`!dpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!b`!dpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!dpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO|PP!-nP;=`<%l!-Sq!-xS!dp|POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!b`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!b`|POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!b`!dp|POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!b`!dpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!b`!dpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!b`!dpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!b`!dpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!b`!dpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!b`!dpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!dpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOyPP!7TP;=`<%l!6Vq!7]V!dpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!dpyPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!b`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!b`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!b`yPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!b`!dpyPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXjSaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
		tokenizers: [Cb, Zb, Rb, Tb, Qb, kb, 0, 1, 2, 3, 4, 5],
		topRules: { Document: [0, 16] },
		dialects: { noMatch: 0, selfClosing: 515 },
		tokenPrec: 517,
	})
function ld(n, e) {
	const t = Object.create(null)
	for (const i of n.getChildren(sd)) {
		const r = i.getChild(cb),
			s = i.getChild(ea) || i.getChild(od)
		r && (t[e.read(r.from, r.to)] = s ? (s.type.id == ea ? e.read(s.from + 1, s.to - 1) : e.read(s.from, s.to)) : '')
	}
	return t
}
function ih(n, e) {
	const t = n.getChild(lb)
	return t ? e.read(t.from, t.to) : ' '
}
function qs(n, e, t) {
	let i
	for (const r of t)
		if (!r.attrs || r.attrs(i || (i = ld(n.node.parent.firstChild, e)))) return { parser: r.parser, bracketed: !0 }
	return null
}
function cd(n = [], e = []) {
	const t = [],
		i = [],
		r = [],
		s = []
	for (const a of n) (a.tag == 'script' ? t : a.tag == 'style' ? i : a.tag == 'textarea' ? r : s).push(a)
	const o = e.length ? Object.create(null) : null
	for (const a of e) (o[a.name] || (o[a.name] = [])).push(a)
	return Rm((a, l) => {
		const c = a.type.id
		if (c == hb) return qs(a, l, t)
		if (c == ub) return qs(a, l, i)
		if (c == fb) return qs(a, l, r)
		if (c == rd && s.length) {
			let h = a.node,
				u = h.firstChild,
				f = u && ih(u, l),
				d
			if (f) {
				for (const O of s)
					if (O.tag == f && (!O.attrs || O.attrs(d || (d = ld(u, l))))) {
						const p = h.lastChild,
							v = p.type.id == Ob ? p.from : h.to
						if (v > u.to) return { parser: O.parser, overlay: [{ from: u.to, to: v }] }
					}
			}
		}
		if (o && c == sd) {
			let h = a.node,
				u
			if ((u = h.firstChild)) {
				const f = o[l.read(u.from, u.to)]
				if (f)
					for (const d of f) {
						if (d.tagName && d.tagName != ih(h.parent, l)) continue
						const O = h.lastChild
						if (O.type.id == ea) {
							const p = O.from + 1,
								v = O.lastChild,
								m = O.to - (v && v.isError ? 0 : 1)
							if (m > p) return { parser: d.parser, overlay: [{ from: p, to: m }], bracketed: !0 }
						} else if (O.type.id == od) return { parser: d.parser, overlay: [{ from: O.from, to: O.to }] }
					}
			}
		}
		return null
	})
}
const Xb = 316,
	Mb = 317,
	nh = 1,
	Eb = 2,
	_b = 3,
	zb = 4,
	Ib = 318,
	Lb = 320,
	Db = 321,
	Wb = 5,
	Yb = 6,
	Nb = 0,
	ia = [
		9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233,
		8239, 8287, 12288,
	],
	hd = 125,
	Vb = 59,
	na = 47,
	Bb = 42,
	qb = 43,
	Gb = 45,
	Ub = 60,
	Fb = 44,
	Hb = 63,
	Kb = 46,
	Jb = 91,
	ey = new qf({
		start: !1,
		shift(n, e) {
			return e == Wb || e == Yb || e == Lb ? n : e == Db
		},
		strict: !1,
	}),
	ty = new Je(
		(n, e) => {
			const { next: t } = n
			;(t == hd || t == -1 || e.context) && n.acceptToken(Ib)
		},
		{ contextual: !0, fallback: !0 },
	),
	iy = new Je(
		(n, e) => {
			let { next: t } = n,
				i
			ia.indexOf(t) > -1 ||
				(t == na && ((i = n.peek(1)) == na || i == Bb)) ||
				(t != hd && t != Vb && t != -1 && !e.context && n.acceptToken(Xb))
		},
		{ contextual: !0 },
	),
	ny = new Je(
		(n, e) => {
			n.next == Jb && !e.context && n.acceptToken(Mb)
		},
		{ contextual: !0 },
	),
	ry = new Je(
		(n, e) => {
			const { next: t } = n
			if (t == qb || t == Gb) {
				if ((n.advance(), t == n.next)) {
					n.advance()
					const i = !e.context && e.canShift(nh)
					n.acceptToken(i ? nh : Eb)
				}
			} else t == Hb && n.peek(1) == Kb && (n.advance(), n.advance(), (n.next < 48 || n.next > 57) && n.acceptToken(_b))
		},
		{ contextual: !0 },
	)
function Gs(n, e) {
	return (n >= 65 && n <= 90) || (n >= 97 && n <= 122) || n == 95 || n >= 192 || (!e && n >= 48 && n <= 57)
}
const sy = new Je((n, e) => {
		if (n.next != Ub || !e.dialectEnabled(Nb) || (n.advance(), n.next == na)) return
		let t = 0
		for (; ia.indexOf(n.next) > -1; ) n.advance(), t++
		if (Gs(n.next, !0)) {
			for (n.advance(), t++; Gs(n.next, !1); ) n.advance(), t++
			for (; ia.indexOf(n.next) > -1; ) n.advance(), t++
			if (n.next == Fb) return
			for (let i = 0; ; i++) {
				if (i == 7) {
					if (!Gs(n.next, !0)) return
					break
				}
				if (n.next != 'extends'.charCodeAt(i)) break
				n.advance(), t++
			}
		}
		n.acceptToken(zb, -t)
	}),
	oy = ts({
		'get set async static': w.modifier,
		'for while do if else switch try catch finally return throw break continue default case defer': w.controlKeyword,
		'in of await yield void typeof delete instanceof as satisfies': w.operatorKeyword,
		'let var const using function class extends': w.definitionKeyword,
		'import export from': w.moduleKeyword,
		'with debugger new': w.keyword,
		TemplateString: w.special(w.string),
		super: w.atom,
		BooleanLiteral: w.bool,
		this: w.self,
		null: w.null,
		Star: w.modifier,
		VariableName: w.variableName,
		'CallExpression/VariableName TaggedTemplateExpression/VariableName': w.function(w.variableName),
		VariableDefinition: w.definition(w.variableName),
		Label: w.labelName,
		PropertyName: w.propertyName,
		PrivatePropertyName: w.special(w.propertyName),
		'CallExpression/MemberExpression/PropertyName': w.function(w.propertyName),
		'FunctionDeclaration/VariableDefinition': w.function(w.definition(w.variableName)),
		'ClassDeclaration/VariableDefinition': w.definition(w.className),
		'NewExpression/VariableName': w.className,
		PropertyDefinition: w.definition(w.propertyName),
		PrivatePropertyDefinition: w.definition(w.special(w.propertyName)),
		UpdateOp: w.updateOperator,
		'LineComment Hashbang': w.lineComment,
		BlockComment: w.blockComment,
		Number: w.number,
		String: w.string,
		Escape: w.escape,
		ArithOp: w.arithmeticOperator,
		LogicOp: w.logicOperator,
		BitOp: w.bitwiseOperator,
		CompareOp: w.compareOperator,
		RegExp: w.regexp,
		Equals: w.definitionOperator,
		Arrow: w.function(w.punctuation),
		': Spread': w.punctuation,
		'( )': w.paren,
		'[ ]': w.squareBracket,
		'{ }': w.brace,
		'InterpolationStart InterpolationEnd': w.special(w.brace),
		'.': w.derefOperator,
		', ;': w.separator,
		'@': w.meta,
		TypeName: w.typeName,
		TypeDefinition: w.definition(w.typeName),
		'type enum interface implements namespace module declare': w.definitionKeyword,
		'abstract global Privacy readonly override': w.modifier,
		'is keyof unique infer asserts': w.operatorKeyword,
		JSXAttributeValue: w.attributeValue,
		JSXText: w.content,
		'JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag': w.angleBracket,
		'JSXIdentifier JSXNameSpacedName': w.tagName,
		'JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName': w.attributeName,
		'JSXBuiltin/JSXIdentifier': w.standard(w.tagName),
	}),
	ay = {
		__proto__: null,
		export: 20,
		as: 25,
		from: 33,
		default: 36,
		async: 41,
		function: 42,
		in: 52,
		out: 55,
		const: 56,
		extends: 60,
		this: 64,
		true: 72,
		false: 72,
		null: 84,
		void: 88,
		typeof: 92,
		super: 108,
		new: 142,
		delete: 154,
		yield: 163,
		await: 167,
		class: 172,
		public: 235,
		private: 235,
		protected: 235,
		readonly: 237,
		instanceof: 256,
		satisfies: 259,
		import: 292,
		keyof: 349,
		unique: 353,
		infer: 359,
		asserts: 395,
		is: 397,
		abstract: 417,
		implements: 419,
		type: 421,
		let: 424,
		var: 426,
		using: 429,
		interface: 435,
		enum: 439,
		namespace: 445,
		module: 447,
		declare: 451,
		global: 455,
		defer: 471,
		for: 476,
		of: 485,
		while: 488,
		with: 492,
		do: 496,
		if: 500,
		else: 502,
		switch: 506,
		case: 512,
		try: 518,
		catch: 522,
		finally: 526,
		return: 530,
		throw: 534,
		break: 538,
		continue: 542,
		debugger: 546,
	},
	ly = {
		__proto__: null,
		async: 129,
		get: 131,
		set: 133,
		declare: 195,
		public: 197,
		private: 197,
		protected: 197,
		static: 199,
		abstract: 201,
		override: 203,
		readonly: 209,
		accessor: 211,
		new: 401,
	},
	cy = { __proto__: null, '<': 193 },
	hy = Ni.deserialize({
		version: 14,
		states:
			"$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
		stateData:
			"()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
		goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
		nodeNames:
			'⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem',
		maxTerm: 380,
		context: ey,
		nodeProps: [
			['isolate', -8, 5, 6, 14, 37, 39, 51, 53, 55, ''],
			[
				'group',
				-26,
				9,
				17,
				19,
				68,
				207,
				211,
				215,
				216,
				218,
				221,
				224,
				234,
				237,
				243,
				245,
				247,
				249,
				252,
				258,
				264,
				266,
				268,
				270,
				272,
				274,
				275,
				'Statement',
				-34,
				13,
				14,
				32,
				35,
				36,
				42,
				51,
				54,
				55,
				57,
				62,
				70,
				72,
				76,
				80,
				82,
				84,
				85,
				110,
				111,
				120,
				121,
				136,
				139,
				141,
				142,
				143,
				144,
				145,
				147,
				148,
				167,
				169,
				171,
				'Expression',
				-23,
				31,
				33,
				37,
				41,
				43,
				45,
				173,
				175,
				177,
				178,
				180,
				181,
				182,
				184,
				185,
				186,
				188,
				189,
				190,
				201,
				203,
				205,
				206,
				'Type',
				-3,
				88,
				103,
				109,
				'ClassItem',
			],
			['openedBy', 23, '<', 38, 'InterpolationStart', 56, '[', 60, '{', 73, '(', 160, 'JSXStartCloseTag'],
			['closedBy', -2, 24, 168, '>', 40, 'InterpolationEnd', 50, ']', 61, '}', 74, ')', 165, 'JSXEndTag'],
		],
		propSources: [oy],
		skippedNodes: [0, 5, 6, 278],
		repeatNodeCount: 37,
		tokenData:
			"$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
		tokenizers: [
			iy,
			ny,
			ry,
			sy,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			ty,
			new Dr(
				"$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~",
				141,
				340,
			),
			new Dr('j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~', 25, 323),
		],
		topRules: { Script: [0, 7], SingleExpression: [1, 276], SingleClassItem: [2, 277] },
		dialects: { jsx: 0, ts: 15175 },
		dynamicPrecedences: { 80: 1, 82: 1, 94: 1, 169: 1, 199: 1 },
		specialized: [
			{ term: 327, get: (n) => ay[n] || -1 },
			{ term: 343, get: (n) => ly[n] || -1 },
			{ term: 95, get: (n) => cy[n] || -1 },
		],
		tokenPrec: 15201,
	}),
	ud = [
		Ye('function ${name}(${params}) {\n	${}\n}', { label: 'function', detail: 'definition', type: 'keyword' }),
		Ye('for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}', {
			label: 'for',
			detail: 'loop',
			type: 'keyword',
		}),
		Ye('for (let ${name} of ${collection}) {\n	${}\n}', { label: 'for', detail: 'of loop', type: 'keyword' }),
		Ye('do {\n	${}\n} while (${})', { label: 'do', detail: 'loop', type: 'keyword' }),
		Ye('while (${}) {\n	${}\n}', { label: 'while', detail: 'loop', type: 'keyword' }),
		Ye(
			`try {
	\${}
} catch (\${error}) {
	\${}
}`,
			{ label: 'try', detail: '/ catch block', type: 'keyword' },
		),
		Ye('if (${}) {\n	${}\n}', { label: 'if', detail: 'block', type: 'keyword' }),
		Ye(
			`if (\${}) {
	\${}
} else {
	\${}
}`,
			{ label: 'if', detail: '/ else block', type: 'keyword' },
		),
		Ye(
			`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`,
			{ label: 'class', detail: 'definition', type: 'keyword' },
		),
		Ye('import {${names}} from "${module}"\n${}', { label: 'import', detail: 'named', type: 'keyword' }),
		Ye('import ${name} from "${module}"\n${}', { label: 'import', detail: 'default', type: 'keyword' }),
	],
	uy = ud.concat([
		Ye('interface ${name} {\n	${}\n}', { label: 'interface', detail: 'definition', type: 'keyword' }),
		Ye('type ${name} = ${type}', { label: 'type', detail: 'definition', type: 'keyword' }),
		Ye('enum ${name} {\n	${}\n}', { label: 'enum', detail: 'definition', type: 'keyword' }),
	]),
	rh = new qu(),
	fd = new Set([
		'Script',
		'Block',
		'FunctionExpression',
		'FunctionDeclaration',
		'ArrowFunction',
		'MethodDeclaration',
		'ForStatement',
	])
function rn(n) {
	return (e, t) => {
		const i = e.node.getChild('VariableDefinition')
		return i && t(i, n), !0
	}
}
const fy = ['FunctionDeclaration'],
	dy = {
		FunctionDeclaration: rn('function'),
		ClassDeclaration: rn('class'),
		ClassExpression: () => !0,
		EnumDeclaration: rn('constant'),
		TypeAliasDeclaration: rn('type'),
		NamespaceDeclaration: rn('namespace'),
		VariableDefinition(n, e) {
			n.matchContext(fy) || e(n, 'variable')
		},
		TypeDefinition(n, e) {
			e(n, 'type')
		},
		__proto__: null,
	}
function dd(n, e) {
	const t = rh.get(e)
	if (t) return t
	let i = [],
		r = !0
	function s(o, a) {
		const l = n.sliceString(o.from, o.to)
		i.push({ label: l, type: a })
	}
	return (
		e.cursor(te.IncludeAnonymous).iterate((o) => {
			if (r) r = !1
			else if (o.name) {
				const a = dy[o.name]
				if ((a && a(o, s)) || fd.has(o.name)) return !1
			} else if (o.to - o.from > 8192) {
				for (const a of dd(n, o.node)) i.push(a)
				return !1
			}
		}),
		rh.set(e, i),
		i
	)
}
const sh = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
	Od = [
		'TemplateString',
		'String',
		'RegExp',
		'LineComment',
		'BlockComment',
		'VariableDefinition',
		'TypeDefinition',
		'Label',
		'PropertyDefinition',
		'PropertyName',
		'PrivatePropertyDefinition',
		'PrivatePropertyName',
		'JSXText',
		'JSXAttributeValue',
		'JSXOpenTag',
		'JSXCloseTag',
		'JSXSelfClosingTag',
		'.',
		'?.',
	]
function Oy(n) {
	const e = ke(n.state).resolveInner(n.pos, -1)
	if (Od.indexOf(e.name) > -1) return null
	const t = e.name == 'VariableName' || (e.to - e.from < 20 && sh.test(n.state.sliceDoc(e.from, e.to)))
	if (!t && !n.explicit) return null
	let i = []
	for (let r = e; r; r = r.parent) fd.has(r.name) && (i = i.concat(dd(n.state.doc, r)))
	return { options: i, from: t ? e.from : n.pos, validFor: sh }
}
const Zt = Di.define({
		name: 'javascript',
		parser: hy.configure({
			props: [
				rs.add({
					IfStatement: gr({ except: /^\s*({|else\b)/ }),
					TryStatement: gr({ except: /^\s*({|catch\b|finally\b)/ }),
					LabeledStatement: t0,
					SwitchBody: (n) => {
						const e = n.textAfter,
							t = /^\s*\}/.test(e),
							i = /^\s*(case|default)\b/.test(e)
						return n.baseIndent + (t ? 0 : i ? 1 : 2) * n.unit
					},
					Block: e0({ closing: '}' }),
					ArrowFunction: (n) => n.baseIndent + n.unit,
					'TemplateString BlockComment': () => null,
					'Statement Property': gr({ except: /^\s*{/ }),
					JSXElement(n) {
						const e = /^\s*<\//.test(n.textAfter)
						return n.lineIndent(n.node.from) + (e ? 0 : n.unit)
					},
					JSXEscape(n) {
						const e = /\s*\}/.test(n.textAfter)
						return n.lineIndent(n.node.from) + (e ? 0 : n.unit)
					},
					'JSXOpenTag JSXSelfClosingTag'(n) {
						return n.column(n.node.from) + n.unit
					},
				}),
				Ma.add({
					'Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType': rf,
					BlockComment(n) {
						return { from: n.from + 2, to: n.to - 2 }
					},
					JSXElement(n) {
						const e = n.firstChild
						if (!e || e.name == 'JSXSelfClosingTag') return null
						const t = n.lastChild
						return { from: e.to, to: t.type.isError ? n.to : t.from }
					},
					'JSXSelfClosingTag JSXOpenTag'(n) {
						var e
						const t = (e = n.firstChild) === null || e === void 0 ? void 0 : e.nextSibling,
							i = n.lastChild
						return !t || t.type.isError ? null : { from: t.to, to: i.type.isError ? n.to : i.from }
					},
				}),
			],
		}),
		languageData: {
			closeBrackets: { brackets: ['(', '[', '{', "'", '"', '`'] },
			commentTokens: { line: '//', block: { open: '/*', close: '*/' } },
			indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
			wordChars: '$',
		},
	}),
	pd = { test: (n) => /^JSX/.test(n.name), facet: Ku({ commentTokens: { block: { open: '{/*', close: '*/}' } } }) },
	gd = Zt.configure({ dialect: 'ts' }, 'typescript'),
	md = Zt.configure({ dialect: 'jsx', props: [Aa.add((n) => (n.isTop ? [pd] : void 0))] }),
	vd = Zt.configure({ dialect: 'jsx ts', props: [Aa.add((n) => (n.isTop ? [pd] : void 0))] }, 'typescript')
const bd = (n) => ({ label: n, type: 'keyword' })
const yd =
		'break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield'
			.split(' ')
			.map(bd),
	py = yd.concat(['declare', 'implements', 'private', 'protected', 'public'].map(bd))
function ra(n = {}) {
	const e = n.jsx ? (n.typescript ? vd : md) : n.typescript ? gd : Zt,
		t = n.typescript ? uy.concat(py) : ud.concat(yd)
	return new ja(e, [Zt.data.of({ autocomplete: y0(Od, b0(t)) }), Zt.data.of({ autocomplete: Oy }), n.jsx ? vy : []])
}
function gy(n) {
	for (;;) {
		if (n.name == 'JSXOpenTag' || n.name == 'JSXSelfClosingTag' || n.name == 'JSXFragmentTag') return n
		if (n.name == 'JSXEscape' || !n.parent) return null
		n = n.parent
	}
}
function oh(n, e, t = n.length) {
	for (let i = e?.firstChild; i; i = i.nextSibling)
		if (
			i.name == 'JSXIdentifier' ||
			i.name == 'JSXBuiltin' ||
			i.name == 'JSXNamespacedName' ||
			i.name == 'JSXMemberExpression'
		)
			return n.sliceString(i.from, Math.min(i.to, t))
	return ''
}
const my = typeof navigator == 'object' && /Android\b/.test(navigator.userAgent),
	vy = Y.inputHandler.of((n, e, t, i, r) => {
		if (
			(my ? n.composing : n.compositionStarted) ||
			n.state.readOnly ||
			e != t ||
			(i != '>' && i != '/') ||
			!Zt.isActiveAt(n.state, e, -1)
		)
			return !1
		const s = r(),
			{ state: o } = s,
			a = o.changeByRange((l) => {
				var c
				let { head: h } = l,
					u = ke(o).resolveInner(h - 1, -1),
					f
				if (
					(u.name == 'JSXStartTag' && (u = u.parent),
					!(o.doc.sliceString(h - 1, h) != i || (u.name == 'JSXAttributeValue' && u.to > h)))
				) {
					if (i == '>' && u.name == 'JSXFragmentTag') return { range: l, changes: { from: h, insert: '</>' } }
					if (i == '/' && u.name == 'JSXStartCloseTag') {
						const d = u.parent,
							O = d.parent
						if (
							O &&
							d.from == h - 2 &&
							((f = oh(o.doc, O.firstChild, h)) ||
								((c = O.firstChild) === null || c === void 0 ? void 0 : c.name) == 'JSXFragmentTag')
						) {
							const p = `${f}>`
							return { range: T.cursor(h + p.length, -1), changes: { from: h, insert: p } }
						}
					} else if (i == '>') {
						const d = gy(u)
						if (d && d.name == 'JSXOpenTag' && !/^\/?>|^<\//.test(o.doc.sliceString(h, h + 2)) && (f = oh(o.doc, d, h)))
							return { range: l, changes: { from: h, insert: `</${f}>` } }
					}
				}
				return { range: l }
			})
		return a.changes.empty
			? !1
			: (n.dispatch([s, o.update(a, { userEvent: 'input.complete', scrollIntoView: !0 })]), !0)
	}),
	sn = ['_blank', '_self', '_top', '_parent'],
	Us = ['ascii', 'utf-8', 'utf-16', 'latin1', 'latin1'],
	Fs = ['get', 'post', 'put', 'delete'],
	Hs = ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
	Fe = ['true', 'false'],
	D = {},
	by = {
		a: { attrs: { href: null, ping: null, type: null, media: null, target: sn, hreflang: null } },
		abbr: D,
		address: D,
		area: {
			attrs: {
				alt: null,
				coords: null,
				href: null,
				target: null,
				ping: null,
				media: null,
				hreflang: null,
				type: null,
				shape: ['default', 'rect', 'circle', 'poly'],
			},
		},
		article: D,
		aside: D,
		audio: {
			attrs: {
				src: null,
				mediagroup: null,
				crossorigin: ['anonymous', 'use-credentials'],
				preload: ['none', 'metadata', 'auto'],
				autoplay: ['autoplay'],
				loop: ['loop'],
				controls: ['controls'],
			},
		},
		b: D,
		base: { attrs: { href: null, target: sn } },
		bdi: D,
		bdo: D,
		blockquote: { attrs: { cite: null } },
		body: D,
		br: D,
		button: {
			attrs: {
				form: null,
				formaction: null,
				name: null,
				value: null,
				autofocus: ['autofocus'],
				disabled: ['autofocus'],
				formenctype: Hs,
				formmethod: Fs,
				formnovalidate: ['novalidate'],
				formtarget: sn,
				type: ['submit', 'reset', 'button'],
			},
		},
		canvas: { attrs: { width: null, height: null } },
		caption: D,
		center: D,
		cite: D,
		code: D,
		col: { attrs: { span: null } },
		colgroup: { attrs: { span: null } },
		command: {
			attrs: {
				type: ['command', 'checkbox', 'radio'],
				label: null,
				icon: null,
				radiogroup: null,
				command: null,
				title: null,
				disabled: ['disabled'],
				checked: ['checked'],
			},
		},
		data: { attrs: { value: null } },
		datagrid: { attrs: { disabled: ['disabled'], multiple: ['multiple'] } },
		datalist: { attrs: { data: null } },
		dd: D,
		del: { attrs: { cite: null, datetime: null } },
		details: { attrs: { open: ['open'] } },
		dfn: D,
		div: D,
		dl: D,
		dt: D,
		em: D,
		embed: { attrs: { src: null, type: null, width: null, height: null } },
		eventsource: { attrs: { src: null } },
		fieldset: { attrs: { disabled: ['disabled'], form: null, name: null } },
		figcaption: D,
		figure: D,
		footer: D,
		form: {
			attrs: {
				action: null,
				name: null,
				'accept-charset': Us,
				autocomplete: ['on', 'off'],
				enctype: Hs,
				method: Fs,
				novalidate: ['novalidate'],
				target: sn,
			},
		},
		h1: D,
		h2: D,
		h3: D,
		h4: D,
		h5: D,
		h6: D,
		head: { children: ['title', 'base', 'link', 'style', 'meta', 'script', 'noscript', 'command'] },
		header: D,
		hgroup: D,
		hr: D,
		html: { attrs: { manifest: null } },
		i: D,
		iframe: {
			attrs: {
				src: null,
				srcdoc: null,
				name: null,
				width: null,
				height: null,
				sandbox: ['allow-top-navigation', 'allow-same-origin', 'allow-forms', 'allow-scripts'],
				seamless: ['seamless'],
			},
		},
		img: {
			attrs: {
				alt: null,
				src: null,
				ismap: null,
				usemap: null,
				width: null,
				height: null,
				crossorigin: ['anonymous', 'use-credentials'],
			},
		},
		input: {
			attrs: {
				alt: null,
				dirname: null,
				form: null,
				formaction: null,
				height: null,
				list: null,
				max: null,
				maxlength: null,
				min: null,
				name: null,
				pattern: null,
				placeholder: null,
				size: null,
				src: null,
				step: null,
				value: null,
				width: null,
				accept: ['audio/*', 'video/*', 'image/*'],
				autocomplete: ['on', 'off'],
				autofocus: ['autofocus'],
				checked: ['checked'],
				disabled: ['disabled'],
				formenctype: Hs,
				formmethod: Fs,
				formnovalidate: ['novalidate'],
				formtarget: sn,
				multiple: ['multiple'],
				readonly: ['readonly'],
				required: ['required'],
				type: [
					'hidden',
					'text',
					'search',
					'tel',
					'url',
					'email',
					'password',
					'datetime',
					'date',
					'month',
					'week',
					'time',
					'datetime-local',
					'number',
					'range',
					'color',
					'checkbox',
					'radio',
					'file',
					'submit',
					'image',
					'reset',
					'button',
				],
			},
		},
		ins: { attrs: { cite: null, datetime: null } },
		kbd: D,
		keygen: {
			attrs: {
				challenge: null,
				form: null,
				name: null,
				autofocus: ['autofocus'],
				disabled: ['disabled'],
				keytype: ['RSA'],
			},
		},
		label: { attrs: { for: null, form: null } },
		legend: D,
		li: { attrs: { value: null } },
		link: {
			attrs: {
				href: null,
				type: null,
				hreflang: null,
				media: null,
				sizes: ['all', '16x16', '16x16 32x32', '16x16 32x32 64x64'],
			},
		},
		map: { attrs: { name: null } },
		mark: D,
		menu: { attrs: { label: null, type: ['list', 'context', 'toolbar'] } },
		meta: {
			attrs: {
				content: null,
				charset: Us,
				name: ['viewport', 'application-name', 'author', 'description', 'generator', 'keywords'],
				'http-equiv': ['content-language', 'content-type', 'default-style', 'refresh'],
			},
		},
		meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
		nav: D,
		noscript: D,
		object: {
			attrs: {
				data: null,
				type: null,
				name: null,
				usemap: null,
				form: null,
				width: null,
				height: null,
				typemustmatch: ['typemustmatch'],
			},
		},
		ol: {
			attrs: { reversed: ['reversed'], start: null, type: ['1', 'a', 'A', 'i', 'I'] },
			children: ['li', 'script', 'template', 'ul', 'ol'],
		},
		optgroup: { attrs: { disabled: ['disabled'], label: null } },
		option: { attrs: { disabled: ['disabled'], label: null, selected: ['selected'], value: null } },
		output: { attrs: { for: null, form: null, name: null } },
		p: D,
		param: { attrs: { name: null, value: null } },
		pre: D,
		progress: { attrs: { value: null, max: null } },
		q: { attrs: { cite: null } },
		rp: D,
		rt: D,
		ruby: D,
		samp: D,
		script: { attrs: { type: ['text/javascript'], src: null, async: ['async'], defer: ['defer'], charset: Us } },
		section: D,
		select: {
			attrs: {
				form: null,
				name: null,
				size: null,
				autofocus: ['autofocus'],
				disabled: ['disabled'],
				multiple: ['multiple'],
			},
		},
		slot: { attrs: { name: null } },
		small: D,
		source: { attrs: { src: null, type: null, media: null } },
		span: D,
		strong: D,
		style: { attrs: { type: ['text/css'], media: null, scoped: null } },
		sub: D,
		summary: D,
		sup: D,
		table: D,
		tbody: D,
		td: { attrs: { colspan: null, rowspan: null, headers: null } },
		template: D,
		textarea: {
			attrs: {
				dirname: null,
				form: null,
				maxlength: null,
				name: null,
				placeholder: null,
				rows: null,
				cols: null,
				autofocus: ['autofocus'],
				disabled: ['disabled'],
				readonly: ['readonly'],
				required: ['required'],
				wrap: ['soft', 'hard'],
			},
		},
		tfoot: D,
		th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ['row', 'col', 'rowgroup', 'colgroup'] } },
		thead: D,
		time: { attrs: { datetime: null } },
		title: D,
		tr: D,
		track: {
			attrs: {
				src: null,
				label: null,
				default: null,
				kind: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata'],
				srclang: null,
			},
		},
		ul: { children: ['li', 'script', 'template', 'ul', 'ol'] },
		var: D,
		video: {
			attrs: {
				src: null,
				poster: null,
				width: null,
				height: null,
				crossorigin: ['anonymous', 'use-credentials'],
				preload: ['auto', 'metadata', 'none'],
				autoplay: ['autoplay'],
				mediagroup: ['movie'],
				muted: ['muted'],
				controls: ['controls'],
			},
		},
		wbr: D,
	},
	Sd = {
		accesskey: null,
		class: null,
		contenteditable: Fe,
		contextmenu: null,
		dir: ['ltr', 'rtl', 'auto'],
		draggable: ['true', 'false', 'auto'],
		dropzone: ['copy', 'move', 'link', 'string:', 'file:'],
		hidden: ['hidden'],
		id: null,
		inert: ['inert'],
		itemid: null,
		itemprop: null,
		itemref: null,
		itemscope: ['itemscope'],
		itemtype: null,
		lang: ['ar', 'bn', 'de', 'en-GB', 'en-US', 'es', 'fr', 'hi', 'id', 'ja', 'pa', 'pt', 'ru', 'tr', 'zh'],
		spellcheck: Fe,
		autocorrect: Fe,
		autocapitalize: Fe,
		style: null,
		tabindex: null,
		title: null,
		translate: ['yes', 'no'],
		rel: [
			'stylesheet',
			'alternate',
			'author',
			'bookmark',
			'help',
			'license',
			'next',
			'nofollow',
			'noreferrer',
			'prefetch',
			'prev',
			'search',
			'tag',
		],
		role: 'alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer'.split(
			' ',
		),
		'aria-activedescendant': null,
		'aria-atomic': Fe,
		'aria-autocomplete': ['inline', 'list', 'both', 'none'],
		'aria-busy': Fe,
		'aria-checked': ['true', 'false', 'mixed', 'undefined'],
		'aria-controls': null,
		'aria-describedby': null,
		'aria-disabled': Fe,
		'aria-dropeffect': null,
		'aria-expanded': ['true', 'false', 'undefined'],
		'aria-flowto': null,
		'aria-grabbed': ['true', 'false', 'undefined'],
		'aria-haspopup': Fe,
		'aria-hidden': Fe,
		'aria-invalid': ['true', 'false', 'grammar', 'spelling'],
		'aria-label': null,
		'aria-labelledby': null,
		'aria-level': null,
		'aria-live': ['off', 'polite', 'assertive'],
		'aria-multiline': Fe,
		'aria-multiselectable': Fe,
		'aria-owns': null,
		'aria-posinset': null,
		'aria-pressed': ['true', 'false', 'mixed', 'undefined'],
		'aria-readonly': Fe,
		'aria-relevant': null,
		'aria-required': Fe,
		'aria-selected': ['true', 'false', 'undefined'],
		'aria-setsize': null,
		'aria-sort': ['ascending', 'descending', 'none', 'other'],
		'aria-valuemax': null,
		'aria-valuemin': null,
		'aria-valuenow': null,
		'aria-valuetext': null,
	},
	xd =
		'beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload'
			.split(' ')
			.map((n) => 'on' + n)
for (const n of xd) Sd[n] = null
class Nr {
	constructor(e, t) {
		;(this.tags = { ...by, ...e }),
			(this.globalAttrs = { ...Sd, ...t }),
			(this.allTags = Object.keys(this.tags)),
			(this.globalAttrNames = Object.keys(this.globalAttrs))
	}
}
Nr.default = new Nr()
function Vi(n, e, t = n.length) {
	if (!e) return ''
	const i = e.firstChild,
		r = i && i.getChild('TagName')
	return r ? n.sliceString(r.from, Math.min(r.to, t)) : ''
}
function Bi(n, e = !1) {
	for (; n; n = n.parent)
		if (n.name == 'Element')
			if (e) e = !1
			else return n
	return null
}
function wd(n, e, t) {
	const i = t.tags[Vi(n, Bi(e))]
	return i?.children || t.allTags
}
function Ga(n, e) {
	const t = []
	for (let i = Bi(e); i && !i.type.isTop; i = Bi(i.parent)) {
		const r = Vi(n, i)
		if (r && i.lastChild.name == 'CloseTag') break
		r && t.indexOf(r) < 0 && (e.name == 'EndTag' || e.from >= i.firstChild.to) && t.push(r)
	}
	return t
}
const $d = /^[:\-.\w\u00b7-\uffff]*$/
function ah(n, e, t, i, r) {
	const s = /\s*>/.test(n.sliceDoc(r, r + 5)) ? '' : '>',
		o = Bi(t, t.name == 'StartTag' || t.name == 'TagName')
	return {
		from: i,
		to: r,
		options: wd(n.doc, o, e)
			.map((a) => ({ label: a, type: 'type' }))
			.concat(Ga(n.doc, t).map((a, l) => ({ label: '/' + a, apply: '/' + a + s, type: 'type', boost: 99 - l }))),
		validFor: /^\/?[:\-.\w\u00b7-\uffff]*$/,
	}
}
function lh(n, e, t, i) {
	const r = /\s*>/.test(n.sliceDoc(i, i + 5)) ? '' : '>'
	return {
		from: t,
		to: i,
		options: Ga(n.doc, e).map((s, o) => ({ label: s, apply: s + r, type: 'type', boost: 99 - o })),
		validFor: $d,
	}
}
function yy(n, e, t, i) {
	let r = [],
		s = 0
	for (const o of wd(n.doc, t, e)) r.push({ label: '<' + o, type: 'type' })
	for (const o of Ga(n.doc, t)) r.push({ label: '</' + o + '>', type: 'type', boost: 99 - s++ })
	return { from: i, to: i, options: r, validFor: /^<\/?[:\-.\w\u00b7-\uffff]*$/ }
}
function Sy(n, e, t, i, r) {
	const s = Bi(t),
		o = s ? e.tags[Vi(n.doc, s)] : null,
		a = o && o.attrs ? Object.keys(o.attrs) : [],
		l = o && o.globalAttrs === !1 ? a : a.length ? a.concat(e.globalAttrNames) : e.globalAttrNames
	return { from: i, to: r, options: l.map((c) => ({ label: c, type: 'property' })), validFor: $d }
}
function xy(n, e, t, i, r) {
	var s
	let o = (s = t.parent) === null || s === void 0 ? void 0 : s.getChild('AttributeName'),
		a = [],
		l
	if (o) {
		let c = n.sliceDoc(o.from, o.to),
			h = e.globalAttrs[c]
		if (!h) {
			const u = Bi(t),
				f = u ? e.tags[Vi(n.doc, u)] : null
			h = f?.attrs && f.attrs[c]
		}
		if (h) {
			let u = n.sliceDoc(i, r).toLowerCase(),
				f = '"',
				d = '"'
			;/^['"]/.test(u)
				? ((l = u[0] == '"' ? /^[^"]*$/ : /^[^']*$/),
					(f = ''),
					(d = n.sliceDoc(r, r + 1) == u[0] ? '' : u[0]),
					(u = u.slice(1)),
					i++)
				: (l = /^[^\s<>='"]*$/)
			for (const O of h) a.push({ label: O, apply: f + O + d, type: 'constant' })
		}
	}
	return { from: i, to: r, options: a, validFor: l }
}
function wy(n, e) {
	let { state: t, pos: i } = e,
		r = ke(t).resolveInner(i, -1),
		s = r.resolve(i)
	for (let o = i, a; s == r && (a = r.childBefore(o)); ) {
		const l = a.lastChild
		if (!l || !l.type.isError || l.from < l.to) break
		;(s = r = a), (o = l.from)
	}
	return r.name == 'TagName'
		? r.parent && /CloseTag$/.test(r.parent.name)
			? lh(t, r, r.from, i)
			: ah(t, n, r, r.from, i)
		: r.name == 'StartTag' || r.name == 'IncompleteTag'
			? ah(t, n, r, i, i)
			: r.name == 'StartCloseTag' || r.name == 'IncompleteCloseTag'
				? lh(t, r, i, i)
				: r.name == 'OpenTag' || r.name == 'SelfClosingTag' || r.name == 'AttributeName'
					? Sy(t, n, r, r.name == 'AttributeName' ? r.from : i, i)
					: r.name == 'Is' || r.name == 'AttributeValue' || r.name == 'UnquotedAttributeValue'
						? xy(t, n, r, r.name == 'Is' ? i : r.from, i)
						: e.explicit && (s.name == 'Element' || s.name == 'Text' || s.name == 'Document')
							? yy(t, n, r, i)
							: null
}
function $y(n) {
	const { extraTags: e, extraGlobalAttributes: t } = n,
		i = t || e ? new Nr(e, t) : Nr.default
	return (r) => wy(i, r)
}
const Qy = Zt.parser.configure({ top: 'SingleExpression' }),
	Qd = [
		{ tag: 'script', attrs: (n) => n.type == 'text/typescript' || n.lang == 'ts', parser: gd.parser },
		{ tag: 'script', attrs: (n) => n.type == 'text/babel' || n.type == 'text/jsx', parser: md.parser },
		{ tag: 'script', attrs: (n) => n.type == 'text/typescript-jsx', parser: vd.parser },
		{
			tag: 'script',
			attrs(n) {
				return /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(n.type)
			},
			parser: Qy,
		},
		{
			tag: 'script',
			attrs(n) {
				return !n.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(n.type)
			},
			parser: Zt.parser,
		},
		{
			tag: 'style',
			attrs(n) {
				return (!n.lang || n.lang == 'css') && (!n.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(n.type))
			},
			parser: Wr.parser,
		},
	],
	kd = [{ name: 'style', parser: Wr.parser.configure({ top: 'Styles' }) }].concat(
		xd.map((n) => ({ name: n, parser: Zt.parser })),
	),
	Pd = Di.define({
		name: 'html',
		parser: jb.configure({
			props: [
				rs.add({
					Element(n) {
						const e = /^(\s*)(<\/)?/.exec(n.textAfter)
						return n.node.to <= n.pos + e[0].length ? n.continue() : n.lineIndent(n.node.from) + (e[2] ? 0 : n.unit)
					},
					'OpenTag CloseTag SelfClosingTag'(n) {
						return n.column(n.node.from) + n.unit
					},
					Document(n) {
						if (n.pos + /\s*/.exec(n.textAfter)[0].length < n.node.to) return n.continue()
						let e = null,
							t
						for (let i = n.node; ; ) {
							const r = i.lastChild
							if (!r || r.name != 'Element' || r.to != i.to) break
							e = i = r
						}
						return e && !((t = e.lastChild) && (t.name == 'CloseTag' || t.name == 'SelfClosingTag'))
							? n.lineIndent(e.from) + n.unit
							: null
					},
				}),
				Ma.add({
					Element(n) {
						const e = n.firstChild,
							t = n.lastChild
						return !e || e.name != 'OpenTag' ? null : { from: e.to, to: t.name == 'CloseTag' ? t.from : n.to }
					},
				}),
				lf.add({ 'OpenTag CloseTag': (n) => n.getChild('TagName') }),
			],
		}),
		languageData: {
			commentTokens: { block: { open: '<!--', close: '-->' } },
			indentOnInput: /^\s*<\/\w+\W$/,
			wordChars: '-_',
		},
	}),
	br = Pd.configure({ wrap: cd(Qd, kd) })
function ky(n = {}) {
	let e = '',
		t
	n.matchClosingTags === !1 && (e = 'noMatch'),
		n.selfClosingTags === !0 && (e = (e ? e + ' ' : '') + 'selfClosing'),
		((n.nestedLanguages && n.nestedLanguages.length) || (n.nestedAttributes && n.nestedAttributes.length)) &&
			(t = cd((n.nestedLanguages || []).concat(Qd), (n.nestedAttributes || []).concat(kd)))
	const i = t ? Pd.configure({ wrap: t, dialect: e }) : e ? br.configure({ dialect: e }) : br
	return new ja(i, [br.data.of({ autocomplete: $y(n) }), n.autoCloseTags !== !1 ? Py : [], ra().support, Jf().support])
}
const ch = new Set(
		'area base br col command embed frame hr img input keygen link meta param source track wbr menuitem'.split(' '),
	),
	Py = Y.inputHandler.of((n, e, t, i, r) => {
		if (n.composing || n.state.readOnly || e != t || (i != '>' && i != '/') || !br.isActiveAt(n.state, e, -1)) return !1
		const s = r(),
			{ state: o } = s,
			a = o.changeByRange((l) => {
				var c, h, u
				let f = o.doc.sliceString(l.from - 1, l.to) == i,
					{ head: d } = l,
					O = ke(o).resolveInner(d, -1),
					p
				if (f && i == '>' && O.name == 'EndTag') {
					const v = O.parent
					if (
						((h = (c = v.parent) === null || c === void 0 ? void 0 : c.lastChild) === null || h === void 0
							? void 0
							: h.name) != 'CloseTag' &&
						(p = Vi(o.doc, v.parent, d)) &&
						!ch.has(p)
					) {
						const m = d + (o.doc.sliceString(d, d + 1) === '>' ? 1 : 0),
							g = `</${p}>`
						return { range: l, changes: { from: d, to: m, insert: g } }
					}
				} else if (f && i == '/' && O.name == 'IncompleteCloseTag') {
					const v = O.parent
					if (
						O.from == d - 2 &&
						((u = v.lastChild) === null || u === void 0 ? void 0 : u.name) != 'CloseTag' &&
						(p = Vi(o.doc, v, d)) &&
						!ch.has(p)
					) {
						const m = d + (o.doc.sliceString(d, d + 1) === '>' ? 1 : 0),
							g = `${p}>`
						return { range: T.cursor(d + g.length, -1), changes: { from: d, to: m, insert: g } }
					}
				}
				return { range: l }
			})
		return a.changes.empty
			? !1
			: (n.dispatch([s, o.update(a, { userEvent: 'input.complete', scrollIntoView: !0 })]), !0)
	})
var Ks, hh
function Ty() {
	if (hh) return Ks
	hh = 1
	const n = [
			[
				{ color: '0, 0, 0', class: 'ansi-black' },
				{ color: '187, 0, 0', class: 'ansi-red' },
				{ color: '0, 187, 0', class: 'ansi-green' },
				{ color: '187, 187, 0', class: 'ansi-yellow' },
				{ color: '0, 0, 187', class: 'ansi-blue' },
				{ color: '187, 0, 187', class: 'ansi-magenta' },
				{ color: '0, 187, 187', class: 'ansi-cyan' },
				{ color: '255,255,255', class: 'ansi-white' },
			],
			[
				{ color: '85, 85, 85', class: 'ansi-bright-black' },
				{ color: '255, 85, 85', class: 'ansi-bright-red' },
				{ color: '0, 255, 0', class: 'ansi-bright-green' },
				{ color: '255, 255, 85', class: 'ansi-bright-yellow' },
				{ color: '85, 85, 255', class: 'ansi-bright-blue' },
				{ color: '255, 85, 255', class: 'ansi-bright-magenta' },
				{ color: '85, 255, 255', class: 'ansi-bright-cyan' },
				{ color: '255, 255, 255', class: 'ansi-bright-white' },
			],
		],
		e = /(https?:\/\/(?:[A-Za-z0-9#;/?:@=+$',_.!~*()[\]-]|&amp;|%[A-Fa-f0-9]{2})+)/gm
	class t {
		static escapeForHtml(r) {
			return new t().escapeForHtml(r)
		}
		static linkify(r) {
			return new t().linkify(r)
		}
		static ansiToHtml(r, s) {
			return new t().ansiToHtml(r, s)
		}
		static ansiToJson(r, s) {
			return new t().ansiToJson(r, s)
		}
		static ansiToText(r) {
			return new t().ansiToText(r)
		}
		constructor() {
			;(this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null), (this.bright = 0), (this.decorations = [])
		}
		setupPalette() {
			this.PALETTE_COLORS = []
			for (let a = 0; a < 2; ++a) for (let l = 0; l < 8; ++l) this.PALETTE_COLORS.push(n[a][l].color)
			const r = [0, 95, 135, 175, 215, 255],
				s = (a, l, c) => r[a] + ', ' + r[l] + ', ' + r[c]
			for (let a = 0; a < 6; ++a)
				for (let l = 0; l < 6; ++l) for (let c = 0; c < 6; ++c) this.PALETTE_COLORS.push(s(a, l, c))
			let o = 8
			for (let a = 0; a < 24; ++a, o += 10) this.PALETTE_COLORS.push(o + ', ' + o + ', ' + o)
		}
		escapeForHtml(r) {
			return r.replace(/[&<>"]/gm, (s) =>
				s == '&' ? '&amp;' : s == '"' ? '&quot;' : s == '<' ? '&lt;' : s == '>' ? '&gt;' : '',
			)
		}
		linkify(r) {
			return r.replace(e, (s) => `<a href="${s}">${s}</a>`)
		}
		ansiToHtml(r, s) {
			return this.process(r, s, !0)
		}
		ansiToJson(r, s) {
			return (s = s || {}), (s.json = !0), (s.clearLine = !1), this.process(r, s, !0)
		}
		ansiToText(r) {
			return this.process(r, {}, !1)
		}
		process(r, s, o) {
			const l = r.split(/\033\[/),
				c = l.shift()
			s == null && (s = {}), (s.clearLine = /\r/.test(r))
			let h = l.map((u) => this.processChunk(u, s, o))
			if (s && s.json) {
				const u = this.processChunkJson('')
				return (
					(u.content = c),
					(u.clearLine = s.clearLine),
					h.unshift(u),
					s.remove_empty && (h = h.filter((f) => !f.isEmpty())),
					h
				)
			}
			h.unshift(c)
			return h.join('')
		}
		processChunkJson(r, s, o) {
			s = typeof s > 'u' ? {} : s
			const a = (s.use_classes = typeof s.use_classes < 'u' && s.use_classes),
				l = (s.key = a ? 'class' : 'color'),
				c = {
					content: r,
					fg: null,
					bg: null,
					fg_truecolor: null,
					bg_truecolor: null,
					isInverted: !1,
					clearLine: s.clearLine,
					decoration: null,
					decorations: [],
					was_processed: !1,
					isEmpty: () => !c.content,
				},
				h = r.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m)
			if (!h) return c
			c.content = h[4]
			const u = h[2].split(';')
			if (h[1] !== '' || h[3] !== 'm' || !o) return c

			for (; u.length > 0; ) {
				const d = u.shift(),
					O = Number.parseInt(d)
				if (isNaN(O) || O === 0) (this.fg = this.bg = null), (this.decorations = [])
				else if (O === 1) this.decorations.push('bold')
				else if (O === 2) this.decorations.push('dim')
				else if (O === 3) this.decorations.push('italic')
				else if (O === 4) this.decorations.push('underline')
				else if (O === 5) this.decorations.push('blink')
				else if (O === 7) this.decorations.push('reverse')
				else if (O === 8) this.decorations.push('hidden')
				else if (O === 9) this.decorations.push('strikethrough')
				else if (O === 21) this.removeDecoration('bold')
				else if (O === 22) this.removeDecoration('bold'), this.removeDecoration('dim')
				else if (O === 23) this.removeDecoration('italic')
				else if (O === 24) this.removeDecoration('underline')
				else if (O === 25) this.removeDecoration('blink')
				else if (O === 27) this.removeDecoration('reverse')
				else if (O === 28) this.removeDecoration('hidden')
				else if (O === 29) this.removeDecoration('strikethrough')
				else if (O === 39) this.fg = null
				else if (O === 49) this.bg = null
				else if (O >= 30 && O < 38) this.fg = n[0][O % 10][l]
				else if (O >= 90 && O < 98) this.fg = n[1][O % 10][l]
				else if (O >= 40 && O < 48) this.bg = n[0][O % 10][l]
				else if (O >= 100 && O < 108) this.bg = n[1][O % 10][l]
				else if (O === 38 || O === 48) {
					const p = O === 38
					if (u.length >= 1) {
						const v = u.shift()
						if (v === '5' && u.length >= 1) {
							const m = Number.parseInt(u.shift())
							if (m >= 0 && m <= 255)
								if (!a)
									this.PALETTE_COLORS || this.setupPalette(),
										p ? (this.fg = this.PALETTE_COLORS[m]) : (this.bg = this.PALETTE_COLORS[m])
								else {
									const g = m >= 16 ? 'ansi-palette-' + m : n[m > 7 ? 1 : 0][m % 8].class
									p ? (this.fg = g) : (this.bg = g)
								}
						} else if (v === '2' && u.length >= 3) {
							const m = Number.parseInt(u.shift()),
								g = Number.parseInt(u.shift()),
								b = Number.parseInt(u.shift())
							if (m >= 0 && m <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
								const x = m + ', ' + g + ', ' + b
								a
									? p
										? ((this.fg = 'ansi-truecolor'), (this.fg_truecolor = x))
										: ((this.bg = 'ansi-truecolor'), (this.bg_truecolor = x))
									: p
										? (this.fg = x)
										: (this.bg = x)
							}
						}
					}
				}
			}
			return (
				(this.fg === null && this.bg === null && this.decorations.length === 0) ||
					((c.fg = this.fg),
					(c.bg = this.bg),
					(c.fg_truecolor = this.fg_truecolor),
					(c.bg_truecolor = this.bg_truecolor),
					(c.decorations = this.decorations),
					(c.decoration = this.decorations.slice(-1).pop() || null),
					(c.was_processed = !0)),
				c
			)
		}
		processChunk(r, s, o) {
			s = s || {}
			const a = this.processChunkJson(r, s, o),
				l = s.use_classes
			if (
				((a.decorations = a.decorations.filter((O) => {
					if (O === 'reverse') {
						a.fg || (a.fg = n[0][7][l ? 'class' : 'color']), a.bg || (a.bg = n[0][0][l ? 'class' : 'color'])
						const p = a.fg
						;(a.fg = a.bg), (a.bg = p)
						const v = a.fg_truecolor
						return (a.fg_truecolor = a.bg_truecolor), (a.bg_truecolor = v), (a.isInverted = !0), !1
					}
					return !0
				})),
				s.json)
			)
				return a
			if (a.isEmpty()) return ''
			if (!a.was_processed) return a.content
			const c = [],
				h = [],
				u = [],
				f = {},
				d = (O) => {
					let p = [],
						v
					for (v in O) Object.hasOwn(O, v) && p.push('data-' + v + '="' + this.escapeForHtml(O[v]) + '"')
					return p.length > 0 ? ' ' + p.join(' ') : ''
				}
			return (
				a.isInverted && (f['ansi-is-inverted'] = 'true'),
				a.fg &&
					(l
						? (c.push(a.fg + '-fg'),
							a.fg_truecolor !== null && ((f['ansi-truecolor-fg'] = a.fg_truecolor), (a.fg_truecolor = null)))
						: c.push('color:rgb(' + a.fg + ')')),
				a.bg &&
					(l
						? (c.push(a.bg + '-bg'),
							a.bg_truecolor !== null && ((f['ansi-truecolor-bg'] = a.bg_truecolor), (a.bg_truecolor = null)))
						: c.push('background-color:rgb(' + a.bg + ')')),
				a.decorations.forEach((O) => {
					if (l) {
						h.push('ansi-' + O)
						return
					}
					O === 'bold'
						? h.push('font-weight:bold')
						: O === 'dim'
							? h.push('opacity:0.5')
							: O === 'italic'
								? h.push('font-style:italic')
								: O === 'hidden'
									? h.push('visibility:hidden')
									: O === 'strikethrough'
										? u.push('line-through')
										: u.push(O)
				}),
				u.length && h.push('text-decoration:' + u.join(' ')),
				l
					? '<span class="' + c.concat(h).join(' ') + '"' + d(f) + '>' + a.content + '</span>'
					: '<span style="' + c.concat(h).join(';') + '"' + d(f) + '>' + a.content + '</span>'
			)
		}
		removeDecoration(r) {
			const s = this.decorations.indexOf(r)
			s >= 0 && this.decorations.splice(s, 1)
		}
	}
	return (Ks = t), Ks
}
var Cy = Ty()
const Zy = Ch(Cy)
var on = { exports: {} },
	uh
function Ry() {
	if (uh) return on.exports
	uh = 1
	function n(r) {
		if (!r) return ''
		if (!/\r/.test(r)) return r
		for (
			r = r.replace(
				/\r+\n/gm,
				`
`,
			);
			/\r./.test(r);
		)
			r = r.replace(/^([^\r\n]*)\r+([^\r\n]+)/gm, (s, o, a) => a + o.slice(a.length))
		return r
	}
	function e(r) {
		for (var s = 0, o = 0; o < r.length; o++) r[s].length <= r[o].length && (s = o)
		return s
	}
	function t(r) {
		if (!/\r/.test(r)) return r
		for (var s = r.split('\r'), o = []; s.length > 0; ) {
			var a = e(s)
			o.push(s[a]), (s = s.slice(a + 1))
		}
		return o.join('\r')
	}
	function i(r) {
		if (!r) return ''
		if (!/\r/.test(r)) return r
		if (!/\n/.test(r)) return t(r)
		r = r.replace(
			/\r+\n/gm,
			`
`,
		)
		var s = r.lastIndexOf(`
`)
		return (
			n(r.slice(0, s)) +
			`
` +
			t(r.slice(s + 1))
		)
	}
	return (on.exports = n), (on.exports.escapeCarriageReturn = n), (on.exports.escapeCarriageReturnSafe = i), on.exports
}
var Ay = Ry(),
	Js = { exports: {} },
	fh
function jy() {
	return (
		fh ||
			((fh = 1),
			((n) => {
				var e = (() => {
					var t = String.fromCharCode,
						i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
						r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
						s = {}
					function o(l, c) {
						if (!s[l]) {
							s[l] = {}
							for (var h = 0; h < l.length; h++) s[l][l.charAt(h)] = h
						}
						return s[l][c]
					}
					var a = {
						compressToBase64: (l) => {
							if (l == null) return ''
							var c = a._compress(l, 6, (h) => i.charAt(h))
							switch (c.length % 4) {
								default:
								case 0:
									return c
								case 1:
									return c + '==='
								case 2:
									return c + '=='
								case 3:
									return c + '='
							}
						},
						decompressFromBase64: (l) =>
							l == null ? '' : l == '' ? null : a._decompress(l.length, 32, (c) => o(i, l.charAt(c))),
						compressToUTF16: (l) => (l == null ? '' : a._compress(l, 15, (c) => t(c + 32)) + ' '),
						decompressFromUTF16: (l) =>
							l == null ? '' : l == '' ? null : a._decompress(l.length, 16384, (c) => l.charCodeAt(c) - 32),
						compressToUint8Array: (l) => {
							for (var c = a.compress(l), h = new Uint8Array(c.length * 2), u = 0, f = c.length; u < f; u++) {
								var d = c.charCodeAt(u)
								;(h[u * 2] = d >>> 8), (h[u * 2 + 1] = d % 256)
							}
							return h
						},
						decompressFromUint8Array: (l) => {
							if (l == null) return a.decompress(l)
							for (var c = new Array(l.length / 2), h = 0, u = c.length; h < u; h++)
								c[h] = l[h * 2] * 256 + l[h * 2 + 1]
							var f = []
							return (
								c.forEach((d) => {
									f.push(t(d))
								}),
								a.decompress(f.join(''))
							)
						},
						compressToEncodedURIComponent: (l) => (l == null ? '' : a._compress(l, 6, (c) => r.charAt(c))),
						decompressFromEncodedURIComponent: (l) =>
							l == null
								? ''
								: l == ''
									? null
									: ((l = l.replace(/ /g, '+')), a._decompress(l.length, 32, (c) => o(r, l.charAt(c)))),
						compress: (l) => a._compress(l, 16, (c) => t(c)),
						_compress: (l, c, h) => {
							if (l == null) return ''
							var u,
								f,
								d = {},
								O = {},
								p = '',
								v = '',
								m = '',
								g = 2,
								b = 3,
								x = 2,
								$ = [],
								y = 0,
								Q = 0,
								P
							for (P = 0; P < l.length; P += 1)
								if (
									((p = l.charAt(P)),
									Object.hasOwn(d, p) || ((d[p] = b++), (O[p] = !0)),
									(v = m + p),
									Object.hasOwn(d, v))
								)
									m = v
								else {
									if (Object.hasOwn(O, m)) {
										if (m.charCodeAt(0) < 256) {
											for (u = 0; u < x; u++) (y = y << 1), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++
											for (f = m.charCodeAt(0), u = 0; u < 8; u++)
												(y = (y << 1) | (f & 1)), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++, (f = f >> 1)
										} else {
											for (f = 1, u = 0; u < x; u++)
												(y = (y << 1) | f), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++, (f = 0)
											for (f = m.charCodeAt(0), u = 0; u < 16; u++)
												(y = (y << 1) | (f & 1)), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++, (f = f >> 1)
										}
										g--, g == 0 && ((g = 2 ** x), x++), delete O[m]
									} else
										for (f = d[m], u = 0; u < x; u++)
											(y = (y << 1) | (f & 1)), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++, (f = f >> 1)
									g--, g == 0 && ((g = 2 ** x), x++), (d[v] = b++), (m = String(p))
								}
							if (m !== '') {
								if (Object.hasOwn(O, m)) {
									if (m.charCodeAt(0) < 256) {
										for (u = 0; u < x; u++) (y = y << 1), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++
										for (f = m.charCodeAt(0), u = 0; u < 8; u++)
											(y = (y << 1) | (f & 1)), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++, (f = f >> 1)
									} else {
										for (f = 1, u = 0; u < x; u++)
											(y = (y << 1) | f), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++, (f = 0)
										for (f = m.charCodeAt(0), u = 0; u < 16; u++)
											(y = (y << 1) | (f & 1)), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++, (f = f >> 1)
									}
									g--, g == 0 && ((g = 2 ** x), x++), delete O[m]
								} else
									for (f = d[m], u = 0; u < x; u++)
										(y = (y << 1) | (f & 1)), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++, (f = f >> 1)
								g--, g == 0 && ((g = 2 ** x), x++)
							}
							for (f = 2, u = 0; u < x; u++)
								(y = (y << 1) | (f & 1)), Q == c - 1 ? ((Q = 0), $.push(h(y)), (y = 0)) : Q++, (f = f >> 1)
							for (;;)
								if (((y = y << 1), Q == c - 1)) {
									$.push(h(y))
									break
								} else Q++
							return $.join('')
						},
						decompress: (l) =>
							l == null ? '' : l == '' ? null : a._decompress(l.length, 32768, (c) => l.charCodeAt(c)),
						_decompress: (l, c, h) => {
							var u = [],
								f = 4,
								d = 4,
								O = 3,
								p = '',
								v = [],
								m,
								g,
								b,
								x,
								$,
								y,
								Q,
								P = { val: h(0), position: c, index: 1 }
							for (m = 0; m < 3; m += 1) u[m] = m
							for (b = 0, $ = 2 ** 2, y = 1; y != $; )
								(x = P.val & P.position),
									(P.position >>= 1),
									P.position == 0 && ((P.position = c), (P.val = h(P.index++))),
									(b |= (x > 0 ? 1 : 0) * y),
									(y <<= 1)
							switch (b) {
								case 0:
									for (b = 0, $ = 2 ** 8, y = 1; y != $; )
										(x = P.val & P.position),
											(P.position >>= 1),
											P.position == 0 && ((P.position = c), (P.val = h(P.index++))),
											(b |= (x > 0 ? 1 : 0) * y),
											(y <<= 1)
									Q = t(b)
									break
								case 1:
									for (b = 0, $ = 2 ** 16, y = 1; y != $; )
										(x = P.val & P.position),
											(P.position >>= 1),
											P.position == 0 && ((P.position = c), (P.val = h(P.index++))),
											(b |= (x > 0 ? 1 : 0) * y),
											(y <<= 1)
									Q = t(b)
									break
								case 2:
									return ''
							}
							for (u[3] = Q, g = Q, v.push(Q); ; ) {
								if (P.index > l) return ''
								for (b = 0, $ = 2 ** O, y = 1; y != $; )
									(x = P.val & P.position),
										(P.position >>= 1),
										P.position == 0 && ((P.position = c), (P.val = h(P.index++))),
										(b |= (x > 0 ? 1 : 0) * y),
										(y <<= 1)
								switch ((Q = b)) {
									case 0:
										for (b = 0, $ = 2 ** 8, y = 1; y != $; )
											(x = P.val & P.position),
												(P.position >>= 1),
												P.position == 0 && ((P.position = c), (P.val = h(P.index++))),
												(b |= (x > 0 ? 1 : 0) * y),
												(y <<= 1)
										;(u[d++] = t(b)), (Q = d - 1), f--
										break
									case 1:
										for (b = 0, $ = 2 ** 16, y = 1; y != $; )
											(x = P.val & P.position),
												(P.position >>= 1),
												P.position == 0 && ((P.position = c), (P.val = h(P.index++))),
												(b |= (x > 0 ? 1 : 0) * y),
												(y <<= 1)
										;(u[d++] = t(b)), (Q = d - 1), f--
										break
									case 2:
										return v.join('')
								}
								if ((f == 0 && ((f = 2 ** O), O++), u[Q])) p = u[Q]
								else if (Q === d) p = g + g.charAt(0)
								else return null
								v.push(p), (u[d++] = g + p.charAt(0)), f--, (g = p), f == 0 && ((f = 2 ** O), O++)
							}
						},
					}
					return a
				})()
				n != null
					? (n.exports = e)
					: typeof angular < 'u' && angular != null && angular.module('LZString', []).factory('LZString', () => e)
			})(Js)),
		Js.exports
	)
}
var Xy = jy()
const My = Ch(Xy)
var k = function () {
	return (
		(k =
			Object.assign ||
			function (e) {
				for (var t, i = 1, r = arguments.length; i < r; i++) {
					t = arguments[i]
					for (var s in t) Object.hasOwn(t, s) && (e[s] = t[s])
				}
				return e
			}),
		k.apply(this, arguments)
	)
}
function $e(n, e) {
	var t = {}
	for (var i in n) Object.hasOwn(n, i) && e.indexOf(i) < 0 && (t[i] = n[i])
	if (n != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var r = 0, i = Object.getOwnPropertySymbols(n); r < i.length; r++)
			e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
	return t
}
function Bt(n, e, t, i) {
	function r(s) {
		return s instanceof t
			? s
			: new t((o) => {
					o(s)
				})
	}
	return new (t || (t = Promise))((s, o) => {
		function a(h) {
			try {
				c(i.next(h))
			} catch (u) {
				o(u)
			}
		}
		function l(h) {
			try {
				c(i.throw(h))
			} catch (u) {
				o(u)
			}
		}
		function c(h) {
			h.done ? s(h.value) : r(h.value).then(a, l)
		}
		c((i = i.apply(n, [])).next())
	})
}
function qt(n, e) {
	var t = {
			label: 0,
			sent: () => {
				if (s[0] & 1) throw s[1]
				return s[1]
			},
			trys: [],
			ops: [],
		},
		i,
		r,
		s,
		o
	return (
		(o = { next: a(0), throw: a(1), return: a(2) }),
		typeof Symbol == 'function' &&
			(o[Symbol.iterator] = function () {
				return this
			}),
		o
	)
	function a(c) {
		return (h) => l([c, h])
	}
	function l(c) {
		if (i) throw new TypeError('Generator is already executing.')
		for (; t; )
			try {
				if (
					((i = 1),
					r &&
						(s = c[0] & 2 ? r.return : c[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) &&
						!(s = s.call(r, c[1])).done)
				)
					return s
				switch (((r = 0), s && (c = [c[0] & 2, s.value]), c[0])) {
					case 0:
					case 1:
						s = c
						break
					case 4:
						return t.label++, { value: c[1], done: !1 }
					case 5:
						t.label++, (r = c[1]), (c = [0])
						continue
					case 7:
						;(c = t.ops.pop()), t.trys.pop()
						continue
					default:
						if (((s = t.trys), !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2))) {
							t = 0
							continue
						}
						if (c[0] === 3 && (!s || (c[1] > s[0] && c[1] < s[3]))) {
							t.label = c[1]
							break
						}
						if (c[0] === 6 && t.label < s[1]) {
							;(t.label = s[1]), (s = c)
							break
						}
						if (s && t.label < s[2]) {
							;(t.label = s[2]), t.ops.push(c)
							break
						}
						s[2] && t.ops.pop(), t.trys.pop()
						continue
				}
				c = e.call(n, t)
			} catch (h) {
				;(c = [6, h]), (r = 0)
			} finally {
				i = s = 0
			}
		if (c[0] & 5) throw c[1]
		return { value: c[0] ? c[1] : void 0, done: !0 }
	}
}
function Re(n, e, t) {
	if (t || arguments.length === 2)
		for (var i = 0, r = e.length, s; i < r; i++)
			(s || !(i in e)) && (s || (s = Array.prototype.slice.call(e, 0, i)), (s[i] = e[i]))
	return n.concat(s || Array.prototype.slice.call(e))
}
var gt = (n) =>
		S.jsx(
			'svg',
			k(
				{ fill: 'currentColor', height: '16', viewBox: '0 0 16 16', width: '16', xmlns: 'http://www.w3.org/2000/svg' },
				n,
			),
		),
	Ey = () =>
		S.jsxs(gt, {
			viewBox: '0 0 48 48',
			children: [
				S.jsx('title', { children: 'Sign in' }),
				S.jsx('path', {
					d: 'M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z',
				}),
			],
		}),
	_y = () =>
		S.jsxs(gt, {
			viewBox: '0 0 48 48',
			children: [
				S.jsx('title', { children: 'Sign out' }),
				S.jsx('path', {
					d: 'M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z',
				}),
			],
		}),
	us = () =>
		S.jsxs(gt, {
			fill: 'none',
			stroke: 'currentColor',
			children: [
				S.jsx('title', { children: 'Restart script' }),
				S.jsx('path', {
					d: 'M8 2C4.68629 2 2 4.68629 2 8C2 10.0946 3.07333 11.9385 4.7 13.0118',
					strokeLinecap: 'round',
				}),
				S.jsx('path', { d: 'M14.0005 7.9998C14.0005 5.82095 12.8391 3.91335 11.1016 2.8623', strokeLinecap: 'round' }),
				S.jsx('path', {
					d: 'M14.0003 2.3335H11.167C10.8908 2.3335 10.667 2.55735 10.667 2.8335V5.66683',
					strokeLinecap: 'round',
				}),
				S.jsx('path', {
					d: 'M1.99967 13.6665L4.83301 13.6665C5.10915 13.6665 5.33301 13.4426 5.33301 13.1665L5.33301 10.3332',
					strokeLinecap: 'round',
				}),
				S.jsx('path', { d: 'M10 10L12 12L10 14', strokeLinecap: 'round', strokeLinejoin: 'round' }),
				S.jsx('path', { d: 'M14.667 14L12.667 14', strokeLinecap: 'round', strokeLinejoin: 'round' }),
			],
		}),
	zy = () =>
		S.jsxs(gt, {
			children: [
				S.jsx('title', { children: 'Run sandbox' }),
				S.jsx('path', {
					d: 'M11.0792 8.1078C11.2793 8.25007 11.27 8.55012 11.0616 8.67981L6.02535 11.8135C5.79638 11.956 5.5 11.7913 5.5 11.5216L5.5 8.40703L5.5 4.80661C5.5 4.52735 5.81537 4.36463 6.04296 4.52647L11.0792 8.1078Z',
				}),
			],
		}),
	Iy = () =>
		S.jsxs(gt, {
			children: [
				S.jsx('title', { children: 'Click to go back' }),
				S.jsx('path', {
					d: 'M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536C10.5488 12.1583 10.5488 11.8417 10.3536 11.6464L9.64645 12.3536ZM10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64644C10.1583 3.45118 9.84171 3.45118 9.64645 3.64644L10.3536 4.35355ZM6.07072 7.92929L5.71716 7.57573L6.07072 7.92929ZM10.3536 11.6464L6.42427 7.71716L5.71716 8.42426L9.64645 12.3536L10.3536 11.6464ZM6.42427 8.28284L10.3536 4.35355L9.64645 3.64644L5.71716 7.57573L6.42427 8.28284ZM6.42427 7.71716C6.58048 7.87337 6.58048 8.12663 6.42427 8.28284L5.71716 7.57573C5.48285 7.81005 5.48285 8.18995 5.71716 8.42426L6.42427 7.71716Z',
				}),
			],
		}),
	Ly = () =>
		S.jsxs(gt, {
			children: [
				S.jsx('title', { children: 'Click to go forward' }),
				S.jsx('path', {
					d: 'M6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L6.35355 3.64645ZM5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L5.64645 11.6464ZM9.92929 8.07071L10.2828 8.42426L9.92929 8.07071ZM5.64645 4.35355L9.57574 8.28284L10.2828 7.57574L6.35355 3.64645L5.64645 4.35355ZM9.57574 7.71716L5.64645 11.6464L6.35355 12.3536L10.2828 8.42426L9.57574 7.71716ZM9.57574 8.28284C9.41952 8.12663 9.41953 7.87337 9.57574 7.71716L10.2828 8.42426C10.5172 8.18995 10.5172 7.81005 10.2828 7.57574L9.57574 8.28284Z',
				}),
			],
		}),
	Td = () =>
		S.jsxs(gt, {
			children: [
				S.jsx('title', { children: 'Refresh preview' }),
				S.jsx('path', {
					clipRule: 'evenodd',
					d: 'M3.83325 7.99992C3.83325 5.69867 5.69853 3.83325 7.99934 3.83325C9.81246 3.83325 11.3563 4.99195 11.9285 6.61097C11.9396 6.6425 11.9536 6.67221 11.97 6.69992H8.80005C8.52391 6.69992 8.30005 6.92378 8.30005 7.19992C8.30005 7.47606 8.52391 7.69992 8.80005 7.69992H12.5667C12.8981 7.69992 13.1667 7.43129 13.1667 7.09992V3.33325C13.1667 3.05711 12.9429 2.83325 12.6667 2.83325C12.3906 2.83325 12.1667 3.05711 12.1667 3.33325V4.94608C11.2268 3.66522 9.7106 2.83325 7.99934 2.83325C5.14613 2.83325 2.83325 5.14651 2.83325 7.99992C2.83325 10.8533 5.14613 13.1666 7.99934 13.1666C9.91218 13.1666 11.5815 12.1266 12.474 10.5836C12.6123 10.3446 12.5306 10.0387 12.2915 9.90044C12.0525 9.76218 11.7466 9.84387 11.6084 10.0829C10.8873 11.3296 9.54072 12.1666 7.99934 12.1666C5.69853 12.1666 3.83325 10.3012 3.83325 7.99992Z',
					fillRule: 'evenodd',
				}),
			],
		}),
	Dy = () =>
		S.jsxs(gt, {
			fill: 'none',
			stroke: 'currentColor',
			children: [
				S.jsx('title', { children: 'Clean' }),
				S.jsx('circle', { cx: '7.99998', cy: '8.00004', r: '4.66667', strokeLinecap: 'round' }),
				S.jsx('path', { d: 'M4.66669 4.66663L11.3334 11.3333' }),
			],
		}),
	Wy = () =>
		S.jsxs(gt, {
			fill: 'none',
			stroke: 'currentColor',
			children: [
				S.jsx('title', { children: 'Open on CodeSandbox' }),
				S.jsx('path', {
					d: 'M6.66665 3.33337H4.33331C3.78103 3.33337 3.33331 3.78109 3.33331 4.33337V11.6667C3.33331 12.219 3.78103 12.6667 4.33331 12.6667H11.6666C12.2189 12.6667 12.6666 12.219 12.6666 11.6667V9.33337',
					strokeLinecap: 'round',
				}),
				S.jsx('path', {
					d: 'M10 3.33337H12.5667C12.6219 3.33337 12.6667 3.37815 12.6667 3.43337V6.00004',
					strokeLinecap: 'round',
				}),
				S.jsx('path', { d: 'M7.33331 8.66668L12.5333 3.46667', strokeLinecap: 'round' }),
			],
		}),
	Yy = () =>
		S.jsxs(gt, {
			stroke: 'currentColor',
			children: [
				S.jsx('title', { children: 'Close file' }),
				S.jsx('path', { d: 'M12 4L4 12', strokeLinecap: 'round' }),
				S.jsx('path', { d: 'M4 4L12 12', strokeLinecap: 'round' }),
			],
		}),
	Ny = () =>
		S.jsxs(gt, {
			children: [
				S.jsx('title', { children: 'Open browser console' }),
				S.jsx('path', {
					d: 'M5.65871 3.62037C5.44905 3.44066 5.1334 3.46494 4.95368 3.6746C4.77397 3.88427 4.79825 4.19992 5.00792 4.37963L5.65871 3.62037ZM5.00792 11.6204C4.79825 11.8001 4.77397 12.1157 4.95368 12.3254C5.1334 12.5351 5.44905 12.5593 5.65871 12.3796L5.00792 11.6204ZM9.9114 7.92407L10.2368 7.54445L9.9114 7.92407ZM5.00792 4.37963L9.586 8.3037L10.2368 7.54445L5.65871 3.62037L5.00792 4.37963ZM9.586 7.6963L5.00792 11.6204L5.65871 12.3796L10.2368 8.45555L9.586 7.6963ZM9.586 8.3037C9.39976 8.14407 9.39976 7.85594 9.586 7.6963L10.2368 8.45555C10.5162 8.2161 10.5162 7.7839 10.2368 7.54445L9.586 8.3037Z',
				}),
				S.jsx('path', {
					d: 'M10 11.5C9.72386 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.72386 12.5 10 12.5V11.5ZM14.6667 12.5C14.9428 12.5 15.1667 12.2761 15.1667 12C15.1667 11.7239 14.9428 11.5 14.6667 11.5V12.5ZM10 12.5H14.6667V11.5H10V12.5Z',
				}),
			],
		}),
	eo,
	Mi = {
		colors: {
			surface1: '#ffffff',
			surface2: '#EFEFEF',
			surface3: '#F3F3F3',
			disabled: '#C5C5C5',
			base: '#323232',
			clickable: '#808080',
			hover: '#4D4D4D',
			accent: '#3973E0',
			error: '#EA3323',
			errorSurface: '#FCF1F0',
			warning: '#6A4516',
			warningSurface: '#FEF2C0',
		},
		syntax: {
			plain: '#151515',
			comment: { color: '#999', fontStyle: 'italic' },
			keyword: '#7C5AE3',
			tag: '#0971F1',
			punctuation: '#3B3B3B',
			definition: '#85A600',
			property: '#3B3B3B',
			static: '#3B3B3B',
			string: '#2E6BD0',
		},
		font: {
			body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
			mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
			size: '13px',
			lineHeight: '20px',
		},
	},
	sa = {
		colors: {
			surface1: '#151515',
			surface2: '#252525',
			surface3: '#2F2F2F',
			disabled: '#4D4D4D',
			base: '#808080',
			clickable: '#999999',
			hover: '#C5C5C5',
			accent: '#E5E5E5',
			error: '#FFB4A6',
			errorSurface: '#690000',
			warning: '#E7C400',
			warningSurface: '#3A3000',
		},
		syntax: {
			plain: '#FFFFFF',
			comment: { color: '#757575', fontStyle: 'italic' },
			keyword: '#77B7D7',
			tag: '#DFAB5C',
			punctuation: '#ffffff',
			definition: '#86D9CA',
			property: '#77B7D7',
			static: '#C64640',
			string: '#977CDC',
		},
		font: {
			body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
			mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
			size: '13px',
			lineHeight: '20px',
		},
	},
	Vy = {
		light: Mi,
		dark: sa,
		auto:
			typeof window < 'u' &&
			!((eo = window?.matchMedia) === null || eo === void 0) &&
			eo.call(window, '(prefers-color-scheme: dark)').matches
				? sa
				: Mi,
	},
	Vr = (n) => {
		var e = n.lastIndexOf('/')
		return n.slice(e + 1)
	},
	By = (n, e) => {
		var t = (n[0] === '/' ? n.slice(1) : n).split('/'),
			i = []
		if (t.length === 1) i.unshift(t[0])
		else
			for (var r = 0; r < e.length; r++)
				for (var s = e[r].split('/'), o = 1; o <= t.length; o++) {
					var a = t[t.length - o],
						l = s[s.length - o]
					if ((i.length < o && i.unshift(a), a !== l)) break
				}
		return i.length < t.length && i.unshift('..'), i.join('/')
	},
	dh = (n) => {
		var e = 0,
			t = 0,
			i = 0
		if (n.startsWith('#')) {
			if (n.length < 7) return !0
			;(e = Number.parseInt(n.substr(1, 2), 16)),
				(t = Number.parseInt(n.substr(3, 2), 16)),
				(i = Number.parseInt(n.substr(5, 2), 16))
		} else {
			var r = n.replace('rgb(', '').replace('rgba(', '').replace(')', '').split(',')
			if (r.length < 3) return !0
			;(e = Number.parseInt(r[0], 10)), (t = Number.parseInt(r[1], 10)), (i = Number.parseInt(r[2], 10))
		}
		var s = (e * 299 + t * 587 + i * 114) / 1e3
		return s < 128
	},
	qy = 0,
	qi = () => {
		var n = +(Date.now().toString(10).substr(0, 4) + qy++)
		return n.toString(16)
	},
	Rn,
	ie = 'sp',
	Gy = ((Rn = wO({ prefix: ie })), Rn.createTheme),
	R = Rn.css
Rn.getCssText
var Cd = Rn.keyframes,
	Uy = {
		space: new Array(11).fill(' ').reduce((n, e, t) => {
			var i
			return k(k({}, n), ((i = {}), (i[t + 1] = ''.concat((t + 1) * 4, 'px')), i))
		}, {}),
		border: { radius: '4px' },
		layout: { height: '300px', headerHeight: '40px' },
		transitions: { default: '150ms ease' },
		zIndices: { base: '1', overlay: '2', top: '3' },
	},
	Fy = (n) => {
		var e = Object.entries(n.syntax),
			t = e.reduce((i, r) => {
				var s,
					o = r[0],
					a = r[1],
					l = ((s = {}), (s['color-'.concat(o)] = a), s)
				return (
					typeof a == 'object' &&
						(l = Object.entries(a).reduce((c, h) => {
							var u,
								f = h[0],
								d = h[1]
							return k(k({}, c), ((u = {}), (u[''.concat(f, '-').concat(o)] = d), u))
						}, {})),
					k(k({}, i), l)
				)
			}, {})
		return k(k({}, Uy), { colors: n.colors, font: n.font, syntax: t })
	},
	Hy = (n) => {
		var e, t, i, r, s
		n === void 0 && (n = 'light')
		var o = 'default'
		if (typeof n == 'string') {
			var a = Vy[n]
			if (!a) throw new Error("[sandpack-react]: invalid theme '".concat(n, "' provided."))
			return { theme: a, id: n, mode: dh(a.colors.surface1) ? 'dark' : 'light' }
		}
		var l = dh(
				(t = (e = n?.colors) === null || e === void 0 ? void 0 : e.surface1) !== null && t !== void 0
					? t
					: Mi.colors.surface1,
			)
				? 'dark'
				: 'light',
			c = l === 'dark' ? sa : Mi,
			h = k(k({}, c.colors), (i = n?.colors) !== null && i !== void 0 ? i : {}),
			u = k(k({}, c.syntax), (r = n?.syntax) !== null && r !== void 0 ? r : {}),
			f = k(k({}, c.font), (s = n?.font) !== null && s !== void 0 ? s : {}),
			d = { colors: h, syntax: u, font: f },
			O = n ? Ky(JSON.stringify(d)) : o
		return { theme: d, id: 'sp-'.concat(O), mode: l }
	},
	Ky = (n) => {
		for (var e = 0, t = 0; t < n.length; e &= e) e = 31 * e + n.charCodeAt(t++)
		return Math.abs(e)
	},
	Oh = () => ''
Oh.toString = Oh
var Zd = C.createContext({}),
	Jy = (n) => {
		var e = n.children,
			t = n.classes
		return S.jsx(Zd.Provider, { value: t || {}, children: e })
	},
	Pe = () => {
		var n = C.useContext(Zd)
		return (t, i) => {
			i === void 0 && (i = [])
			var r = ''.concat(ie, '-').concat(t)
			return eS.apply(void 0, Re(Re([], i, !1), [r, n[r]], !1))
		}
	},
	eS = function () {
		for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]
		return n.filter(Boolean).join(' ')
	},
	tS = R({
		all: 'initial',
		fontSize: '$font$size',
		fontFamily: '$font$body',
		display: 'block',
		boxSizing: 'border-box',
		textRendering: 'optimizeLegibility',
		WebkitTapHighlightColor: 'transparent',
		WebkitFontSmoothing: 'subpixel-antialiased',
		variants: { variant: { dark: { colorScheme: 'dark' }, light: { colorScheme: 'light' } } },
		'@media screen and (min-resolution: 2dppx)': {
			WebkitFontSmoothing: 'antialiased',
			MozOsxFontSmoothing: 'grayscale',
		},
		'*': { boxSizing: 'border-box' },
		'.sp-wrapper:focus': { outline: '0' },
	}),
	Ua = C.createContext({ theme: Mi, id: 'light', mode: 'light' }),
	iS = (n) => {
		var e = n.theme,
			t = n.children,
			i = n.className,
			r = $e(n, ['theme', 'children', 'className']),
			s = C.useState(e),
			o = s[0],
			a = s[1],
			l = Hy(o),
			c = l.theme,
			h = l.id,
			u = l.mode,
			f = Pe(),
			d = C.useMemo(() => Gy(h, Fy(c)), [c, h])
		return (
			C.useEffect(() => {
				if (e !== 'auto') {
					a(e)
					return
				}
				var O = (p) => {
					var v = p.matches
					a(v ? 'dark' : 'light')
				}
				return (
					window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', O),
					() => {
						window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', O)
					}
				)
			}, [e]),
			S.jsx(Ua.Provider, {
				value: { theme: c, id: h, mode: u },
				children: S.jsx('div', k({ className: f('wrapper', [d, tS({ variant: u }), i]) }, r, { children: t })),
			})
		)
	}
Ua.Consumer
var Se = {
		'/styles.css': {
			code: `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`,
		},
	},
	nS = {
		files: {
			'/src/styles.css': Se['/styles.css'],
			'/src/pages/index.astro': {
				code: `---
import "../styles.css";
const data = "world";
---

<h1>Hello {data}</h1>

<style>
  h1 {
    font-size: 1.5rem;
  }
</style>`,
			},
			'.env': { code: 'ASTRO_TELEMETRY_DISABLED="1"' },
			'/package.json': {
				code: JSON.stringify({
					dependencies: { astro: '^1.6.12', 'esbuild-wasm': '^0.15.16' },
					scripts: {
						dev: 'astro dev',
						start: 'astro dev',
						build: 'astro build',
						preview: 'astro preview',
						astro: 'astro',
					},
				}),
			},
		},
		main: '/src/pages/index.astro',
		environment: 'node',
	},
	rS = {
		files: k(k({}, Se), {
			'/pages/_app.js': {
				code: `import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}`,
			},
			'/pages/index.js': {
				code: `export default function Home({ data }) {
  return (
    <div>
      <h1>Hello {data}</h1>
    </div>
  );
}
  
export function getServerSideProps() {
  return {
    props: { data: "world" },
  }
}
`,
			},
			'/next.config.js': {
				code: `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
`,
			},
			'/package.json': {
				code: JSON.stringify({
					name: 'my-app',
					version: '0.1.0',
					private: !0,
					scripts: {
						dev: 'NEXT_TELEMETRY_DISABLED=1 next dev',
						build: 'next build',
						start: 'next start',
						lint: 'next lint',
					},
					dependencies: { next: '12.1.6', react: '18.2.0', 'react-dom': '18.2.0', '@next/swc-wasm-nodejs': '12.1.6' },
				}),
			},
		}),
		main: '/pages/index.js',
		environment: 'node',
	},
	sS = {
		files: {
			'/index.js': {
				code: `const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello world');
});

server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});`,
			},
			'/package.json': {
				code: JSON.stringify({ dependencies: {}, scripts: { start: 'node index.js' }, main: 'index.js' }),
			},
		},
		main: '/index.js',
		environment: 'node',
	},
	oS = {
		files: k(k({}, Se), {
			'/index.js': {
				code: `import "./styles.css";

document.getElementById("app").innerHTML = \`
<h1>Hello world</h1>
\`;
`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/index.js"></script>
  </body>
</html>
`,
			},
			'/package.json': {
				code: JSON.stringify({
					scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
					devDependencies: { vite: '4.1.4', 'esbuild-wasm': '0.17.12' },
				}),
			},
		}),
		main: '/index.js',
		environment: 'node',
	},
	aS = {
		files: k(k({}, Se), {
			'/App.jsx': {
				code: `export default function App() {
  const data = "world"

  return <h1>Hello {data}</h1>
}
`,
			},
			'/index.jsx': {
				code: `import { render } from "preact";
import "./styles.css";

import App from "./App";

const root = document.getElementById("root");
render(<App />, root);
`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.jsx"></script>
  </body>
</html>
`,
			},
			'/package.json': {
				code: JSON.stringify({
					scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
					dependencies: { preact: '^10.16.0' },
					devDependencies: { '@preact/preset-vite': '^2.5.0', vite: '4.1.4', 'esbuild-wasm': '0.17.12' },
				}),
			},
			'/vite.config.js': {
				code: `import { defineConfig } from "vite";
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
});
`,
			},
		}),
		main: '/App.jsx',
		environment: 'node',
	},
	lS = {
		files: k(k({}, Se), {
			'/App.tsx': {
				code: `export default function App() {
  const data: string = "world"

  return <h1>Hello {data}</h1>
}
`,
			},
			'/index.tsx': {
				code: `import { render } from "preact";
import "./styles.css";

import App from "./App";

const root = document.getElementById("root") as HTMLElement;
render(<App />, root);
`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>
`,
			},
			'/tsconfig.json': {
				code: JSON.stringify(
					{
						compilerOptions: {
							target: 'ESNext',
							useDefineForClassFields: !0,
							lib: ['DOM', 'DOM.Iterable', 'ESNext'],
							allowJs: !1,
							skipLibCheck: !0,
							esModuleInterop: !1,
							allowSyntheticDefaultImports: !0,
							strict: !0,
							forceConsistentCasingInFileNames: !0,
							module: 'ESNext',
							moduleResolution: 'Node',
							resolveJsonModule: !0,
							isolatedModules: !0,
							noEmit: !0,
							jsx: 'react-jsx',
							jsxImportSource: 'preact',
						},
						include: ['src'],
						references: [{ path: './tsconfig.node.json' }],
					},
					null,
					2,
				),
			},
			'/tsconfig.node.json': {
				code: JSON.stringify(
					{
						compilerOptions: {
							composite: !0,
							module: 'ESNext',
							moduleResolution: 'Node',
							allowSyntheticDefaultImports: !0,
						},
						include: ['vite.config.ts'],
					},
					null,
					2,
				),
			},
			'/package.json': {
				code: JSON.stringify(
					{
						scripts: { dev: 'vite', build: 'tsc && vite build', preview: 'vite preview' },
						dependencies: { preact: '^10.16.0' },
						devDependencies: {
							'@preact/preset-vite': '^2.5.0',
							typescript: '^4.9.5',
							vite: '4.1.4',
							'esbuild-wasm': '^0.17.12',
						},
					},
					null,
					2,
				),
			},
			'/vite-env.d.ts': { code: '/// <reference types="vite/client" />' },
			'/vite.config.ts': {
				code: `import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
})
`,
			},
		}),
		main: '/App.tsx',
		environment: 'node',
	},
	cS = {
		files: k(k({}, Se), {
			'/App.jsx': {
				code: `export default function App() {
  const data = "world"

  return <h1>Hello {data}</h1>
}
`,
			},
			'/index.jsx': {
				code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.jsx"></script>
  </body>
</html>
`,
			},
			'/package.json': {
				code: JSON.stringify({
					scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
					dependencies: { react: '^18.2.0', 'react-dom': '^18.2.0' },
					devDependencies: { '@vitejs/plugin-react': '3.1.0', vite: '4.1.4', 'esbuild-wasm': '0.17.12' },
				}),
			},
			'/vite.config.js': {
				code: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
`,
			},
		}),
		main: '/App.jsx',
		environment: 'node',
	},
	hS = {
		files: k(k({}, Se), {
			'/App.tsx': {
				code: `export default function App() {
  const data: string = "world"

  return <h1>Hello {data}</h1>
}
`,
			},
			'/index.tsx': {
				code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import React from "react";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>
`,
			},
			'/tsconfig.json': {
				code: JSON.stringify(
					{
						compilerOptions: {
							target: 'ESNext',
							useDefineForClassFields: !0,
							lib: ['DOM', 'DOM.Iterable', 'ESNext'],
							allowJs: !1,
							skipLibCheck: !0,
							esModuleInterop: !1,
							allowSyntheticDefaultImports: !0,
							strict: !0,
							forceConsistentCasingInFileNames: !0,
							module: 'ESNext',
							moduleResolution: 'Node',
							resolveJsonModule: !0,
							isolatedModules: !0,
							noEmit: !0,
							jsx: 'react-jsx',
						},
						include: ['src'],
						references: [{ path: './tsconfig.node.json' }],
					},
					null,
					2,
				),
			},
			'/tsconfig.node.json': {
				code: JSON.stringify(
					{
						compilerOptions: {
							composite: !0,
							module: 'ESNext',
							moduleResolution: 'Node',
							allowSyntheticDefaultImports: !0,
						},
						include: ['vite.config.ts'],
					},
					null,
					2,
				),
			},
			'/package.json': {
				code: JSON.stringify(
					{
						scripts: { dev: 'vite', build: 'tsc && vite build', preview: 'vite preview' },
						dependencies: { react: '^19.0.0', 'react-dom': '^19.0.0' },
						devDependencies: {
							'@types/react': '^19.0.8',
							'@types/react-dom': '^19.0.3',
							'@vitejs/plugin-react': '^4.3.4',
							typescript: '^4.9.5',
							vite: '4.2.0',
							'esbuild-wasm': '^0.17.12',
						},
					},
					null,
					2,
				),
			},
			'/vite-env.d.ts': { code: '/// <reference types="vite/client" />' },
			'/vite.config.ts': {
				code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
`,
			},
		}),
		main: '/App.tsx',
		environment: 'node',
	},
	uS = {
		files: {
			'/src/styles.css': Se['/styles.css'],
			'/src/App.svelte': {
				code: `<script>
const data = "world";
</script>

<h1>Hello {data}</h1>

<style>
h1 {
  font-size: 1.5rem;
}
</style>`,
			},
			'/src/main.js': {
				code: `import App from './App.svelte'
import "./styles.css"

const app = new App({
  target: document.getElementById('app'),
})

export default app`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`,
			},
			'/vite.config.js': {
				code: `import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
})`,
			},
			'/package.json': {
				code: JSON.stringify({
					type: 'module',
					scripts: { dev: 'vite' },
					devDependencies: {
						'@sveltejs/vite-plugin-svelte': '^2.0.2',
						svelte: '^3.55.1',
						vite: '4.0.4',
						'esbuild-wasm': '^0.17.12',
					},
				}),
			},
		},
		main: '/src/App.svelte',
		environment: 'node',
	},
	fS = {
		files: {
			'/src/styles.css': Se['/styles.css'],
			'/src/App.svelte': {
				code: `<script lang="ts">
const data: string = "world";
</script>

<h1>Hello {data}</h1>

<style>
h1 {
  font-size: 1.5rem;
}
</style>`,
			},
			'/src/main.ts': {
				code: `import App from './App.svelte'
import "./styles.css"

const app = new App({
  target: document.getElementById('app'),
})

export default app`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`,
			},
			'/vite-env.d.ts': {
				code: `/// <reference types="svelte" />
/// <reference types="vite/client" />`,
			},
			'svelte.config.js': {
				code: `import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
`,
			},
			'/vite.config.ts': {
				code: `import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
})`,
			},
			'tsconfig.json': {
				code: JSON.stringify(
					{
						extends: '@tsconfig/svelte/tsconfig.json',
						compilerOptions: {
							target: 'ESNext',
							useDefineForClassFields: !0,
							module: 'ESNext',
							resolveJsonModule: !0,
							allowJs: !0,
							checkJs: !0,
							isolatedModules: !0,
						},
						include: ['src/**/*.d.ts', 'src/**/*.ts', 'src/**/*.js', 'src/**/*.svelte'],
						references: [{ path: './tsconfig.node.json' }],
					},
					null,
					2,
				),
			},
			'tsconfig.node.json': {
				code: JSON.stringify(
					{
						compilerOptions: { composite: !0, module: 'ESNext', moduleResolution: 'Node' },
						include: ['vite.config.ts'],
					},
					null,
					2,
				),
			},
			'/package.json': {
				code: JSON.stringify(
					{
						type: 'module',
						scripts: { dev: 'vite' },
						devDependencies: {
							'@sveltejs/vite-plugin-svelte': '^2.0.2',
							'@tsconfig/svelte': '^3.0.0',
							svelte: '^3.55.1',
							'svelte-check': '^2.10.3',
							tslib: '^2.5.0',
							vite: '4.1.4',
							'esbuild-wasm': '^0.17.12',
						},
					},
					null,
					2,
				),
			},
		},
		main: '/src/App.svelte',
		environment: 'node',
	},
	dS = {
		files: {
			'/src/styles.css': Se['/styles.css'],
			'/src/App.vue': {
				code: `<script setup>
import { ref } from "vue";

const data = ref("world");
</script>

<template>
  <h1>Hello {{ data }}</h1>
</template>

<style>
h1 {
  font-size: 1.5rem;
}
</style>`,
			},
			'/src/main.js': {
				code: `import { createApp } from 'vue'
import App from './App.vue'
import "./styles.css"
            
createApp(App).mount('#app')            
`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`,
			},
			'/vite.config.js': {
				code: `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
`,
			},
			'/package.json': {
				code: JSON.stringify({
					scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
					dependencies: { vue: '^3.2.45' },
					devDependencies: { '@vitejs/plugin-vue': '3.2.0', vite: '4.1.4', 'esbuild-wasm': '0.17.12' },
				}),
			},
		},
		main: '/src/App.vue',
		environment: 'node',
	},
	OS = {
		files: {
			'/src/styles.css': Se['/styles.css'],
			'/src/App.vue': {
				code: `<script setup lang="ts">
import { ref } from "vue";

const data = ref<string>("world");
</script>

<template>
  <h1>Hello {{ data }}</h1>
</template>

<style>
h1 {
  font-size: 1.5rem;
}
</style>`,
			},
			'/src/main.ts': {
				code: `import { createApp } from 'vue'
import App from './App.vue'
import "./styles.css"

createApp(App).mount('#app')
`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`,
			},
			'/vite-env.d.ts': { code: '/// <reference types="vite/client" />' },
			'/vite.config.ts': {
				code: `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
`,
			},
			'tsconfig.json': {
				code: JSON.stringify(
					{
						compilerOptions: {
							target: 'ESNext',
							useDefineForClassFields: !0,
							module: 'ESNext',
							moduleResolution: 'Node',
							strict: !0,
							jsx: 'preserve',
							resolveJsonModule: !0,
							isolatedModules: !0,
							esModuleInterop: !0,
							lib: ['ESNext', 'DOM'],
							skipLibCheck: !0,
							noEmit: !0,
						},
						include: ['src/**/*.ts', 'src/**/*.d.ts', 'src/**/*.tsx', 'src/**/*.vue'],
						references: [{ path: './tsconfig.node.json' }],
					},
					null,
					2,
				),
			},
			'tsconfig.node.json': {
				code: JSON.stringify(
					{
						compilerOptions: {
							composite: !0,
							module: 'ESNext',
							moduleResolution: 'Node',
							allowSyntheticDefaultImports: !0,
						},
						include: ['vite.config.ts'],
					},
					null,
					2,
				),
			},
			'/package.json': {
				code: JSON.stringify(
					{
						scripts: { dev: 'vite', build: 'tsc && vite build', preview: 'vite preview' },
						dependencies: { vue: '^3.2.47' },
						devDependencies: {
							'@vitejs/plugin-vue': '^4.0.0',
							vite: '4.1.4',
							'vue-tsc': '^1.2.0',
							typescript: '^4.9.5',
							'esbuild-wasm': '^0.17.12',
						},
					},
					null,
					2,
				),
			},
		},
		main: '/src/App.vue',
		environment: 'node',
	},
	pS = {
		files: {
			'/src/app/app.component.css': Se['/styles.css'],
			'/src/app/app.component.html': {
				code: `<div>
<h1>{{ helloWorld }}</h1>
</div>     
`,
			},
			'/src/app/app.component.ts': {
				code: `import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  helloWorld = "Hello world";
}           
`,
			},
			'/src/app/app.module.ts': {
				code: `import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
      
import { AppComponent } from "./app.component";
      
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}       
`,
			},
			'/src/index.html': {
				code: `<!doctype html>
<html lang="en">
      
<head>
  <meta charset="utf-8">
  <title>Angular</title>
  <base href="/">
      
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
      
<body>
   <app-root></app-root>
</body>
      
</html>
`,
			},
			'/src/main.ts': {
				code: `import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
      
import { AppModule } from "./app/app.module";      

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
      
`,
			},
			'/src/polyfills.ts': {
				code: `import "core-js/proposals/reflect-metadata";   
      import "zone.js/dist/zone";
`,
			},
			'/package.json': {
				code: JSON.stringify({
					dependencies: {
						'@angular/core': '^11.2.0',
						'@angular/platform-browser': '^11.2.0',
						'@angular/platform-browser-dynamic': '^11.2.0',
						'@angular/common': '^11.2.0',
						'@angular/compiler': '^11.2.0',
						'zone.js': '0.11.3',
						'core-js': '3.8.3',
						rxjs: '6.6.3',
					},
					main: '/src/main.ts',
				}),
			},
		},
		main: '/src/app/app.component.ts',
		environment: 'angular-cli',
	},
	gS = {
		files: k(k({}, Se), {
			'/App.js': {
				code: `export default function App() {
  return <h1>Hello world</h1>
}
`,
			},
			'/index.js': {
				code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
			},
			'/public/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
			},
			'/package.json': {
				code: JSON.stringify({
					dependencies: { react: '^19.0.0', 'react-dom': '^19.0.0', 'react-scripts': '^5.0.0' },
					main: '/index.js',
				}),
			},
		}),
		main: '/App.js',
		environment: 'create-react-app',
	},
	mS = {
		files: k(k({}, Se), {
			'tsconfig.json': {
				code: `{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`,
			},
			'/App.tsx': {
				code: `export default function App(): JSX.Element {
  return <h1>Hello world</h1>
}
`,
			},
			'/index.tsx': {
				code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
			},
			'/public/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
			},
			'/package.json': {
				code: JSON.stringify({
					dependencies: { react: '^19.0.0', 'react-dom': '^19.0.0', 'react-scripts': '^4.0.0' },
					devDependencies: { '@types/react': '^19.0.0', '@types/react-dom': '^19.0.0', typescript: '^4.0.0' },
					main: '/index.tsx',
				}),
			},
		}),
		main: '/App.tsx',
		environment: 'create-react-app',
	},
	vS = {
		files: k(k({}, Se), {
			'/App.tsx': {
				code: `import { Component } from "solid-js";

const App: Component = () => {
  return <h1>Hello world</h1>
};

export default App;`,
			},
			'/index.tsx': {
				code: `import { render } from "solid-js/web";
import App from "./App";

import "./styles.css";

render(() => <App />, document.getElementById("app"));`,
			},
			'/index.html': {
				code: `<html>
<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>
<body>
  <div id="app"></div>
  <script src="src/index.tsx"></script>
</body>
</html>`,
			},
			'/package.json': { code: JSON.stringify({ dependencies: { 'solid-js': '1.3.15' }, main: '/index.tsx' }) },
		}),
		main: '/App.tsx',
		environment: 'solid',
	},
	bS = {
		files: k(k({}, Se), {
			'/App.svelte': {
				code: `<style>
  h1 {
    font-size: 1.5rem;
  }
</style>

<script>
  let name = 'world';
</script>

<main>
  <h1>Hello {name}</h1>
</main>`,
			},
			'/index.js': {
				code: `import App from "./App.svelte";
import "./styles.css";

const app = new App({
  target: document.body
});

export default app;
      `,
			},
			'/public/index.html': {
				code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf8" />
    <meta name="viewport" content="width=device-width" />

    <title>Svelte app</title>

    <link rel="stylesheet" href="public/bundle.css" />
  </head>

  <body>
    <script src="bundle.js"></script>
  </body>
</html>`,
			},
			'/package.json': { code: JSON.stringify({ dependencies: { svelte: '^3.0.0' }, main: '/index.js' }) },
		}),
		main: '/App.svelte',
		environment: 'svelte',
	},
	yS = {
		files: {
			'tsconfig.json': {
				code: `{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`,
			},
			'/add.ts': { code: 'export const add = (a: number, b: number): number => a + b;' },
			'/add.test.ts': {
				code: `import { add } from './add';

describe('add', () => {
  test('Commutative Law of Addition', () => {
    expect(add(1, 2)).toBe(add(2, 1));
  });
});`,
			},
			'package.json': {
				code: JSON.stringify({ dependencies: {}, devDependencies: { typescript: '^4.0.0' }, main: '/add.ts' }),
			},
		},
		main: '/add.test.ts',
		environment: 'parcel',
		mode: 'tests',
	},
	SS = {
		files: k(k({}, Se), {
			'/index.js': {
				code: `import "./styles.css";

document.getElementById("app").innerHTML = \`
<h1>Hello world</h1>
\`;
`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <div id="app"></div>

  <script src="index.js">
  </script>
</body>

</html>`,
			},
			'/package.json': { code: JSON.stringify({ dependencies: {}, main: '/index.js' }) },
		}),
		main: '/index.js',
		environment: 'parcel',
	},
	xS = {
		files: k(k({}, Se), {
			'tsconfig.json': {
				code: `{
  "compilerOptions": {
    "strict": true,
    "module": "commonjs",
    "jsx": "preserve",
    "esModuleInterop": true,
    "sourceMap": true,
    "allowJs": true,
    "lib": [
      "es6",
      "dom"
    ],
    "rootDir": "src",
    "moduleResolution": "node"
  }
}`,
			},
			'/index.ts': {
				code: `import "./styles.css";

document.getElementById("app").innerHTML = \`
<h1>Hello world</h1>
\`;
`,
			},
			'/index.html': {
				code: `<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <div id="app"></div>

  <script src="index.ts">
  </script>
</body>

</html>`,
			},
			'/package.json': {
				code: JSON.stringify({ dependencies: {}, devDependencies: { typescript: '^4.0.0' }, main: '/index.ts' }),
			},
		}),
		main: '/index.ts',
		environment: 'parcel',
	},
	wS = {
		files: {
			'/src/styles.css': Se['/styles.css'],
			'/src/App.vue': {
				code: `<template>
  <h1>Hello {{ msg }}</h1>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('world');
</script>`,
			},
			'/src/main.js': {
				code: `import { createApp } from 'vue'
import App from './App.vue'
import "./styles.css";

createApp(App).mount('#app')
`,
			},
			'/public/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`,
			},
			'/package.json': {
				code: JSON.stringify({
					name: 'vue3',
					version: '0.1.0',
					private: !0,
					main: '/src/main.js',
					scripts: { serve: 'vue-cli-service serve', build: 'vue-cli-service build' },
					dependencies: { 'core-js': '^3.26.1', vue: '^3.2.45' },
					devDependencies: { '@vue/cli-plugin-babel': '^5.0.8', '@vue/cli-service': '^5.0.8' },
				}),
			},
		},
		main: '/src/App.vue',
		environment: 'vue-cli',
	},
	$S = {
		files: {
			'/src/styles.css': Se['/styles.css'],
			'/src/App.vue': {
				code: `<template>
  <h1>Hello {{ msg }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const msg = ref<string>('world');
</script>`,
			},
			'/src/main.ts': {
				code: `import { createApp } from 'vue'
import App from './App.vue'
import "./styles.css";

createApp(App).mount('#app')
`,
			},
			'/src/shims-vue.d.ts': `/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}`,
			'/public/index.html': {
				code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`,
			},
			'/package.json': {
				code: JSON.stringify({
					name: 'vue3-ts',
					version: '0.1.0',
					private: !0,
					main: '/src/main.ts',
					scripts: { serve: 'vue-cli-service serve', build: 'vue-cli-service build' },
					dependencies: { 'core-js': '^3.26.1', vue: '^3.2.45' },
					devDependencies: {
						'@vue/cli-plugin-babel': '^5.0.8',
						'@vue/cli-plugin-typescript': '^5.0.8',
						'@vue/cli-service': '^5.0.8',
						typescript: '^4.9.3',
					},
				}),
			},
			'/tsconfig.json': {
				code: JSON.stringify({
					compilerOptions: {
						target: 'esnext',
						module: 'esnext',
						strict: !0,
						jsx: 'preserve',
						moduleResolution: 'node',
						experimentalDecorators: !0,
						skipLibCheck: !0,
						esModuleInterop: !0,
						allowSyntheticDefaultImports: !0,
						forceConsistentCasingInFileNames: !0,
						useDefineForClassFields: !0,
						sourceMap: !1,
						baseUrl: '.',
						types: ['webpack-env'],
						paths: { '@/*': ['src/*'] },
						lib: ['esnext', 'dom', 'dom.iterable', 'scripthost'],
					},
					include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue', 'tests/**/*.ts', 'tests/**/*.tsx'],
					exclude: ['node_modules'],
				}),
			},
		},
		main: '/src/App.vue',
		environment: 'vue-cli',
	},
	QS = {
		files: k(k({}, Se), {
			'/index.html': {
				code: `<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="/styles.css" />
</head>

<body>
  <h1>Hello world</h1>
</body>

</html>`,
			},
			'/package.json': { code: JSON.stringify({ dependencies: {}, main: '/index.html' }) },
		}),
		main: '/index.html',
		environment: 'static',
	},
	ph = {
		static: QS,
		angular: pS,
		react: gS,
		'react-ts': mS,
		solid: vS,
		svelte: bS,
		'test-ts': yS,
		'vanilla-ts': xS,
		vanilla: SS,
		vue: wS,
		'vue-ts': $S,
		node: sS,
		nextjs: rS,
		vite: oS,
		'vite-react': cS,
		'vite-react-ts': hS,
		'vite-preact': aS,
		'vite-preact-ts': lS,
		'vite-vue': dS,
		'vite-vue-ts': OS,
		'vite-svelte': uS,
		'vite-svelte-ts': fS,
		astro: nS,
	},
	oa = (n) => {
		var e,
			t,
			i,
			r,
			s,
			o,
			a = ui(n.files),
			l = kS({ template: n.template, customSetup: n.customSetup, files: a }),
			c = ui(
				(t = (e = n.options) === null || e === void 0 ? void 0 : e.visibleFiles) !== null && t !== void 0 ? t : [],
			),
			h =
				!((i = n.options) === null || i === void 0) && i.activeFile
					? gh((r = n.options) === null || r === void 0 ? void 0 : r.activeFile, l.files)
					: void 0
		c.length === 0 &&
			a &&
			Object.keys(a).forEach((d) => {
				var O = a[d]
				if (typeof O == 'string') {
					c.push(d)
					return
				}
				!h && O.active && ((h = d), O.hidden === !0 && c.push(d)), O.hidden || c.push(d)
			}),
			c.length === 0 && (c = [l.main]),
			l.entry && !l.files[l.entry] && (l.entry = gh(l.entry, l.files)),
			!h && l.main && (h = l.main),
			(!h || !l.files[h]) && (h = c[0]),
			c.includes(h) || c.push(h)
		var u = XO(
				l.files,
				(s = l.dependencies) !== null && s !== void 0 ? s : {},
				(o = l.devDependencies) !== null && o !== void 0 ? o : {},
				l.entry,
			),
			f = c.filter((d) => u[d])
		return { visibleFiles: f, activeFile: h, files: u, environment: l.environment, shouldUpdatePreview: !0 }
	},
	gh = (n, e) => {
		var t = ui(e),
			i = ui(n)
		if (i in t) return i
		if (!n) return null
		for (var r = null, s = 0, o = ['.js', '.jsx', '.ts', '.tsx']; !r && s < o.length; ) {
			var a = i.split('.')[0],
				l = ''.concat(a).concat(o[s])
			t[l] !== void 0 && (r = l), s++
		}
		return r
	},
	kS = (n) => {
		var e = n.files,
			t = n.template,
			i = n.customSetup
		if (!t) {
			if (!i) {
				var r = ph.vanilla
				return k(k({}, r), { files: k(k({}, r.files), yr(e)) })
			}
			if (!e || Object.keys(e).length === 0)
				throw new Error('[sandpack-react]: without a template, you must pass at least one file')
			return k(k({}, i), { files: yr(e) })
		}
		var s = ph[t]
		if (!s) throw new Error('[sandpack-react]: invalid template "'.concat(t, '" provided'))
		return !i && !e
			? s
			: {
					files: yr(k(k({}, s.files), e)),
					dependencies: k(k({}, s.dependencies), i?.dependencies),
					devDependencies: k(k({}, s.devDependencies), i?.devDependencies),
					entry: ui(i?.entry),
					main: s.main,
					environment: i?.environment || s.environment,
				}
	},
	yr = (n) =>
		n
			? Object.keys(n).reduce((e, t) => (typeof n[t] == 'string' ? (e[t] = { code: n[t] }) : (e[t] = n[t]), e), {})
			: {},
	PS = (n, e) => {
		var t = C.useState({ editorState: 'pristine' }),
			i = t[0],
			r = t[1],
			s = oa(n),
			o = fn(s.files, e) ? 'pristine' : 'dirty'
		return o !== i.editorState && r((a) => k(k({}, a), { editorState: o })), i
	},
	Rd = () => (typeof C.useId == 'function' ? C.useId() : qi()),
	mh = 9,
	TS = '2.19.8',
	CS = (n) => {
		if (typeof C.useId == 'function') {
			var e = C.useId()
			return () =>
				Bt(void 0, void 0, void 0, function () {
					var t, i
					return qt(this, (r) => {
						switch (r.label) {
							case 0:
								return (
									(t = Object.entries(n)
										.map((s, o) => s + '|' + o)
										.join('|||')),
									[4, ZS(t + e + TS)]
								)
							case 1:
								return (i = r.sent()), [2, vh(i.replace(/:/g, 'sp').replace(/[^a-zA-Z]/g, ''), mh)]
						}
					})
				})
		}
		return () => vh(qi(), mh)
	}
function vh(n, e) {
	return n.length > e ? n.slice(0, e) : n.padEnd(e, 's')
}
function ZS(n) {
	return Bt(this, void 0, void 0, function () {
		var e, t, i, r
		return qt(this, (s) => {
			switch (s.label) {
				case 0:
					return (e = new TextEncoder()), (t = e.encode(n)), [4, crypto.subtle.digest('SHA-256', t)]
				case 1:
					return (i = s.sent()), (r = Array.from(new Uint8Array(i))), [2, btoa(String.fromCharCode.apply(String, r))]
			}
		})
	})
}
var RS = 4e4,
	AS = (n, e) => {
		var t,
			i,
			r,
			s = n.options,
			o = n.customSetup,
			a = n.teamId,
			l = n.sandboxId
		s ?? (s = {}), o ?? (o = {})
		var c = s?.initMode || 'lazy',
			h = C.useState({
				startRoute: s?.startRoute,
				bundlerState: void 0,
				error: null,
				initMode: c,
				reactDevTools: void 0,
				status: !((t = s?.autorun) !== null && t !== void 0) || t ? 'initial' : 'idle',
			}),
			u = h[0],
			f = h[1],
			d = C.useRef(),
			O = C.useRef(null),
			p = C.useRef(null),
			v = C.useRef({}),
			m = C.useRef({}),
			g = C.useRef(null),
			b = C.useRef({}),
			x = C.useRef(),
			$ = C.useRef({ global: {} }),
			y = C.useRef(),
			Q = C.useRef(e.environment),
			P = CS(e.files),
			X = C.useCallback(
				(L, Z, V) =>
					Bt(void 0, void 0, void 0, function () {
						var B, de, Oe, ae, We, xe, At, Wt, bi, yi, Si
						return qt(this, (ii) => {
							switch (ii.label) {
								case 0:
									return (
										m.current[Z] && m.current[Z].destroy(),
										s ?? (s = {}),
										o ?? (o = {}),
										(B = (bi = s?.bundlerTimeOut) !== null && bi !== void 0 ? bi : RS),
										g.current && clearTimeout(g.current),
										(de = typeof x.current != 'function'),
										de &&
											(g.current = setTimeout(() => {
												M(), f((Te) => k(k({}, Te), { status: 'timeout' }))
											}, B)),
										(Oe = () =>
											Bt(void 0, void 0, void 0, function () {
												var Te, ot
												return qt(this, (at) => {
													switch (at.label) {
														case 0:
															return s?.experimental_enableStableServiceWorkerId
																? ((Te = 'SANDPACK_INTERNAL:URL-CONSISTENT-ID'),
																	(ot = localStorage.getItem(Te)),
																	ot ? [3, 2] : [4, P()])
																: [3, 3]
														case 1:
															;(ot = at.sent()), localStorage.setItem(Te, ot), (at.label = 2)
														case 2:
															return [2, ot]
														case 3:
															return [4, P()]
														case 4:
															return [2, at.sent()]
													}
												})
											})),
										(We = LO),
										(xe = [L, { files: e.files, template: e.environment }]),
										(Wt = {
											externalResources: s.externalResources,
											bundlerURL: s.bundlerURL,
											startRoute: (yi = V?.startRoute) !== null && yi !== void 0 ? yi : s.startRoute,
											fileResolver: s.fileResolver,
											skipEval: (Si = s.skipEval) !== null && Si !== void 0 ? Si : !1,
											logLevel: s.logLevel,
											showOpenInCodeSandbox: !1,
											showErrorScreen: !0,
											showLoadingScreen: !1,
											reactDevTools: u.reactDevTools,
											customNpmRegistries: o?.npmRegistries,
											teamId: a,
											experimental_enableServiceWorker: !!s?.experimental_enableServiceWorker,
										}),
										[4, Oe()]
									)
								case 1:
									return [
										4,
										We.apply(
											void 0,
											xe.concat([((Wt.experimental_stableServiceWorkerId = ii.sent()), (Wt.sandboxId = l), Wt)]),
										),
									]
								case 2:
									return (
										(ae = ii.sent()),
										typeof x.current != 'function' && (x.current = ae.listen(q)),
										(b.current[Z] = b.current[Z] || {}),
										$.current[Z] &&
											(Object.keys($.current[Z]).forEach((Te) => {
												var ot = $.current[Z][Te],
													at = ae.listen(ot)
												b.current[Z][Te] = at
											}),
											($.current[Z] = {})),
										(At = Object.entries($.current.global)),
										At.forEach((Te) => {
											var ot = Te[0],
												at = Te[1],
												he = ae.listen(at)
											b.current[Z][ot] = he
										}),
										(m.current[Z] = ae),
										[2]
									)
							}
						})
					}),
				[e.environment, e.files, u.reactDevTools],
			),
			M = C.useCallback(() => {
				Object.keys(m.current).map(I), typeof x.current == 'function' && (x.current(), (x.current = void 0))
			}, []),
			E = C.useCallback(
				() =>
					Bt(void 0, void 0, void 0, function () {
						return qt(this, (L) => {
							switch (L.label) {
								case 0:
									return [
										4,
										Promise.all(
											Object.entries(v.current).map((Z) => {
												var V = Z[0],
													B = Z[1],
													de = B.iframe,
													Oe = B.clientPropsOverride,
													ae = Oe === void 0 ? {} : Oe
												return Bt(void 0, void 0, void 0, function () {
													return qt(this, (We) => {
														switch (We.label) {
															case 0:
																return [4, X(de, V, ae)]
															case 1:
																return We.sent(), [2]
														}
													})
												})
											}),
										),
									]
								case 1:
									return L.sent(), f((Z) => k(k({}, Z), { error: null, status: 'running' })), [2]
							}
						})
					}),
				[X],
			)
		d.current = (L) => {
			L.some((Z) => Z.isIntersecting) ? E() : M()
		}
		var j = C.useCallback(() => {
				var L,
					Z,
					V,
					B = (L = s?.autorun) !== null && L !== void 0 ? L : !0
				if (B) {
					var de = (Z = s?.initModeObserverOptions) !== null && Z !== void 0 ? Z : { rootMargin: '1000px 0px' }
					O.current && p.current && ((V = O.current) === null || V === void 0 || V.unobserve(p.current)),
						p.current && u.initMode === 'lazy'
							? ((O.current = new IntersectionObserver((Oe) => {
									var ae, We
									Oe.some((xe) => xe.isIntersecting) &&
										Oe.some((xe) => xe.isIntersecting) &&
										p.current &&
										((ae = d.current) === null || ae === void 0 || ae.call(d, Oe),
										(We = O.current) === null || We === void 0 || We.unobserve(p.current))
								}, de)),
								O.current.observe(p.current))
							: p.current && u.initMode === 'user-visible'
								? ((O.current = new IntersectionObserver((Oe) => {
										var ae
										;(ae = d.current) === null || ae === void 0 || ae.call(d, Oe)
									}, de)),
									O.current.observe(p.current))
								: E()
				}
			}, [s?.autorun, s?.initModeObserverOptions, E, u.initMode, M]),
			N = C.useCallback(
				(L, Z, V) =>
					Bt(void 0, void 0, void 0, function () {
						return qt(this, (B) => {
							switch (B.label) {
								case 0:
									return (
										(v.current[Z] = { iframe: L, clientPropsOverride: V }),
										u.status !== 'running' ? [3, 2] : [4, X(L, Z, V)]
									)
								case 1:
									B.sent(), (B.label = 2)
								case 2:
									return [2]
							}
						})
					}),
				[X, u.status],
			),
			I = (L) => {
				var Z,
					V,
					B = m.current[L]
				B
					? (B.destroy(),
						(Z = B.iframe.contentWindow) === null || Z === void 0 || Z.location.replace('about:blank'),
						B.iframe.removeAttribute('src'),
						delete m.current[L])
					: delete v.current[L],
					g.current && clearTimeout(g.current)
				var de = Object.values((V = b.current[L]) !== null && V !== void 0 ? V : {})
				de.forEach((ae) => {
					var We = Object.values(ae)
					We.forEach((xe) => xe())
				})
				var Oe = Object.keys(m.current).length > 0 ? 'running' : 'idle'
				f((ae) => k(k({}, ae), { status: Oe }))
			},
			q = (L) => {
				L.type === 'start'
					? f((Z) => k(k({}, Z), { error: null }))
					: L.type === 'state'
						? f((Z) => k(k({}, Z), { bundlerState: L.state }))
						: (L.type === 'done' && !L.compilatonError) || L.type === 'connected'
							? (g.current && clearTimeout(g.current), f((Z) => k(k({}, Z), { error: null })))
							: L.type === 'action' && L.action === 'show-error'
								? (g.current && clearTimeout(g.current), f((Z) => k(k({}, Z), { error: MO(L) })))
								: L.type === 'action' &&
									L.action === 'notification' &&
									L.notificationType === 'error' &&
									f((Z) => k(k({}, Z), { error: { message: L.title } }))
			},
			K = (L) => {
				f((Z) => k(k({}, Z), { reactDevTools: L }))
			},
			oe = (i = s?.recompileMode) !== null && i !== void 0 ? i : 'delayed',
			J = (r = s?.recompileDelay) !== null && r !== void 0 ? r : 200,
			me = (L, Z) => {
				if (u.status !== 'running') {
					console.warn('[sandpack-react]: dispatch cannot be called while in idle mode')
					return
				}
				Z
					? m.current[Z].dispatch(L)
					: Object.values(m.current).forEach((V) => {
							V.dispatch(L)
						})
			},
			Ge = (L, Z) => {
				if (Z)
					if (m.current[Z]) {
						var V = m.current[Z].listen(L)
						return V
					} else {
						var B = qi()
						;($.current[Z] = $.current[Z] || {}), (b.current[Z] = b.current[Z] || {}), ($.current[Z][B] = L)
						var V = () => {
							$.current[Z][B] ? delete $.current[Z][B] : b.current[Z][B] && (b.current[Z][B](), delete b.current[Z][B])
						}
						return V
					}
				var de = qi()
				$.current.global[de] = L
				var Oe = Object.values(m.current),
					ae = Oe.map((xe) => xe.listen(L)),
					V = () => {
						ae.forEach((xe) => xe()),
							delete $.current.global[de],
							Object.values(b.current).forEach((xe) => {
								var At
								;(At = xe?.[de]) === null || At === void 0 || At.call(xe)
							})
					}
				return V
			}
		return (
			C.useEffect(() => {
				if (!(u.status !== 'running' || !e.shouldUpdatePreview)) {
					if (
						(Q.current !== e.environment &&
							((Q.current = e.environment),
							Object.entries(m.current).forEach((Z) => {
								var V = Z[0],
									B = Z[1]
								N(B.iframe, V)
							})),
						oe === 'immediate' &&
							Object.values(m.current).forEach((Z) => {
								Z.status === 'done' && Z.updateSandbox({ files: e.files, template: e.environment })
							}),
						oe === 'delayed')
					) {
						if (typeof window > 'u') return
						window.clearTimeout(y.current),
							(y.current = window.setTimeout(() => {
								Object.values(m.current).forEach((Z) => {
									Z.status === 'done' && Z.updateSandbox({ files: e.files, template: e.environment })
								})
							}, J))
					}
					return () => {
						window.clearTimeout(y.current)
					}
				}
			}, [e.files, e.environment, e.shouldUpdatePreview, J, oe, N, u.status]),
			C.useEffect(() => {
				c !== u.initMode && (f((Z) => k(k({}, Z), { initMode: c })), j())
			}, [c, j, u.initMode]),
			C.useEffect(
				() => () => {
					typeof x.current == 'function' && x.current(),
						g.current && clearTimeout(g.current),
						y.current && clearTimeout(y.current),
						O.current && O.current.disconnect()
				},
				[],
			),
			[
				u,
				{
					clients: m.current,
					initializeSandpackIframe: j,
					runSandpack: E,
					registerBundler: N,
					unregisterBundler: I,
					registerReactDevTools: K,
					addListener: Ge,
					dispatchMessage: me,
					lazyAnchorRef: p,
					unsubscribeClientListenersRef: b,
					queuedListenersRef: $,
				},
			]
		)
	},
	jS = (n) => {
		var e = oa(n),
			t = C.useState(e),
			i = t[0],
			r = t[1],
			s = C.useRef(!1)
		C.useEffect(() => {
			s.current ? r(oa(n)) : (s.current = !0)
		}, [n.files, n.customSetup, n.template])
		var o = (l, c, h) => {
				h === void 0 && (h = !0),
					r((u) => {
						var f,
							d = u.files
						return (
							typeof l == 'string' && typeof c == 'string'
								? (d = k(k({}, d), ((f = {}), (f[l] = k(k({}, d[l]), { code: c })), f)))
								: typeof l == 'object' && (d = k(k({}, d), yr(l))),
							k(k({}, u), { files: ui(d), shouldUpdatePreview: h })
						)
					})
			},
			a = {
				openFile: (l) => {
					r((c) => {
						var h = c.visibleFiles,
							u = $e(c, ['visibleFiles']),
							f = h.includes(l) ? h : Re(Re([], h, !0), [l], !1)
						return k(k({}, u), { activeFile: l, visibleFiles: f })
					})
				},
				resetFile: (l) => {
					r((c) => {
						var h
						return k(k({}, c), { files: k(k({}, c.files), ((h = {}), (h[l] = e.files[l]), h)) })
					})
				},
				resetAllFiles: () => {
					r((l) => k(k({}, l), { files: e.files }))
				},
				setActiveFile: (l) => {
					i.files[l] && r((c) => k(k({}, c), { activeFile: l }))
				},
				updateCurrentFile: (l, c) => {
					c === void 0 && (c = !0), o(i.activeFile, l, c)
				},
				updateFile: o,
				addFile: o,
				closeFile: (l) => {
					i.visibleFiles.length !== 1 &&
						r((c) => {
							var h = c.visibleFiles,
								u = c.activeFile,
								f = $e(c, ['visibleFiles', 'activeFile']),
								d = h.indexOf(l),
								O = h.filter((p) => p !== l)
							return k(k({}, f), { activeFile: l === u ? (d === 0 ? h[1] : h[d - 1]) : u, visibleFiles: O })
						})
				},
				deleteFile: (l, c) => {
					c === void 0 && (c = !0),
						r((h) => {
							var u = h.visibleFiles,
								f = h.files,
								d = h.activeFile,
								O = $e(h, ['visibleFiles', 'files', 'activeFile']),
								p = k({}, f)
							delete p[l]
							var v = u.filter((b) => b !== l),
								m = v.length === 0
							if (m) {
								var g = Object.keys(f)[Object.keys(f).length - 1]
								return k(k({}, O), { visibleFiles: [g], activeFile: g, files: p, shouldUpdatePreview: c })
							}
							return k(k({}, O), {
								visibleFiles: v,
								activeFile: l === d ? v[v.length - 1] : d,
								files: p,
								shouldUpdatePreview: c,
							})
						})
				},
			}
		return [k(k({}, i), { visibleFilesFromProps: e.visibleFiles }), a]
	},
	Fa = C.createContext(null),
	XS = (n) => {
		var e,
			t,
			i,
			r = n.children,
			s = n.options,
			o = n.style,
			a = n.className,
			l = n.theme,
			c = jS(n),
			h = c[0],
			u = c[1],
			f = AS(n, h),
			d = f[0],
			O = f[1],
			p = O.dispatchMessage,
			v = O.addListener,
			m = $e(O, ['dispatchMessage', 'addListener']),
			g = PS(n, h.files)
		return (
			C.useEffect(() => {
				m.initializeSandpackIframe()
			}, []),
			S.jsx(Fa.Provider, {
				value: k(k(k(k(k(k({}, h), d), g), u), m), {
					autoReload:
						(t = (e = n.options) === null || e === void 0 ? void 0 : e.autoReload) !== null && t !== void 0 ? t : !0,
					teamId: n?.teamId,
					exportOptions: (i = n?.customSetup) === null || i === void 0 ? void 0 : i.exportOptions,
					listen: v,
					dispatch: p,
				}),
				children: S.jsx(Jy, {
					classes: s?.classes,
					children: S.jsx(iS, { className: a, style: o, theme: l, children: r }),
				}),
			})
		)
	}
Fa.Consumer
function ye() {
	var n = C.useContext(Fa)
	if (n === null) throw new Error('[sandpack-react]: "useSandpack" must be wrapped by a "SandpackProvider"')
	var e = n.dispatch,
		t = n.listen,
		i = $e(n, ['dispatch', 'listen'])
	return { sandpack: k({}, i), dispatch: e, listen: t }
}
var Ad = () => {
		var n,
			e,
			t,
			i = ye().sandpack
		return {
			code: (n = i.files[i.activeFile]) === null || n === void 0 ? void 0 : n.code,
			readOnly:
				(t = (e = i.files[i.activeFile]) === null || e === void 0 ? void 0 : e.readOnly) !== null && t !== void 0
					? t
					: !1,
			updateCode: i.updateCurrentFile,
		}
	},
	an,
	nr,
	to,
	It = R({ svg: { margin: 'auto' } }),
	Le = R(
		((an = {
			appearance: 'none',
			outline: 'none',
			display: 'flex',
			alignItems: 'center',
			fontSize: 'inherit',
			fontFamily: 'inherit',
			backgroundColor: 'transparent',
			transition: 'color $default, background $default',
			cursor: 'pointer',
			color: '$colors$clickable',
			border: 0,
			textDecoration: 'none',
			'&:disabled': { color: '$colors$disabled' },
			"&:hover:not(:disabled,[data-active='true'])": { color: '$colors$hover' },
			'&[data-active="true"]': { color: '$colors$accent' },
			svg: { minWidth: '$space$4', width: '$space$4', height: '$space$4' },
		}),
		(an['&.'.concat(It)] = { padding: '$space$1', height: '$space$7', display: 'flex' }),
		(an['&.'.concat(It, '&:not(:has(span))')] = { width: '$space$7' }),
		(an['&.'.concat(It, '&:has(svg + span)')] = { paddingRight: '$space$3', paddingLeft: '$space$2', gap: '$space$1' }),
		an),
	),
	gi = R({
		backgroundColor: '$colors$surface2',
		borderRadius: '99999px',
		border: '1px solid $colors$surface3',
		'&[data-active="true"]': { color: '$colors$surface1', background: '$colors$accent' },
		"&:hover:not(:disabled,[data-active='true'])": { backgroundColor: '$colors$surface3' },
	}),
	MS = R({ padding: 0 }),
	Ha = Cd({ '0%': { opacity: 0 }, '100%': { opacity: 1 } }),
	vn = R({
		position: 'absolute',
		bottom: '0',
		left: '0',
		right: '0',
		top: '0',
		margin: '0',
		overflow: 'auto',
		height: '100%',
		zIndex: '$top',
	}),
	jd = R(
		((nr = {
			whiteSpace: 'pre-wrap',
			padding: '$space$10',
			backgroundColor: '$colors$surface1',
			display: 'flex',
			gap: '$space$2',
			flexDirection: 'column',
		}),
		(nr['.'.concat(Le)] = { width: 'auto', gap: '$space$2', padding: '0 $space$3 0 $space$2', marginTop: '$space$1' }),
		(nr.variants = { solidBg: { true: { backgroundColor: '$colors$errorSurface' } } }),
		nr),
	),
	aa = R(
		((to = { padding: '$space$10', backgroundColor: '$colors$surface1' }),
		(to['.'.concat(Le)] = { marginTop: '$space$6', width: 'auto', gap: '$space$2', padding: '0 $space$3 0 $space$2' }),
		to),
	),
	Gt = R({
		animation: ''.concat(Ha, ' 150ms ease'),
		color: '$colors$error',
		display: 'flex',
		flexDirection: 'column',
		gap: '$space$3',
		variants: { errorCode: { true: { fontFamily: '$font$mono' } } },
		a: { color: 'inherit' },
		p: { margin: 0 },
	}),
	io,
	ES = R({ borderBottom: '1px solid $colors$surface2', background: '$colors$surface1' }),
	_S = R({
		padding: '0 $space$2',
		overflow: 'auto',
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'stretch',
		minHeight: '40px',
		marginBottom: '-1px',
	}),
	zS = R({
		display: 'flex',
		alignItems: 'center',
		outline: 'none',
		position: 'relative',
		paddingRight: '20px',
		margin: '1px 0',
		'&:has(button:focus)': { outline: '$colors$accent auto 1px' },
	}),
	Xd = R({
		padding: '0 $space$1 0 $space$1',
		borderRadius: '$border$radius',
		marginLeft: '$space$1',
		width: '$space$5',
		visibility: 'hidden',
		cursor: 'pointer',
		position: 'absolute',
		right: '0px',
		svg: { width: '$space$3', height: '$space$3', display: 'block', position: 'relative', top: 1 },
	}),
	IS = R(
		((io = {
			padding: '0 $space$2',
			height: '$layout$headerHeight',
			whiteSpace: 'nowrap',
			'&:focus': { outline: 'none' },
		}),
		(io['&:hover ~ .'.concat(Xd)] = { visibility: 'visible' }),
		io),
	),
	Md = (n) => {
		var e = n.closableTabs,
			t = n.className,
			i = n.activeFileUniqueId,
			r = $e(n, ['closableTabs', 'className', 'activeFileUniqueId']),
			s = ye().sandpack,
			o = Pe(),
			a = s.activeFile,
			l = s.visibleFiles,
			c = s.setActiveFile,
			h = C.useState(null),
			u = h[0],
			f = h[1],
			d = (p) => {
				var v = Vr(p),
					m = l.reduce((g, b) => {
						if (b === p) return g
						var x = Vr(b)
						return x === v && g.push(b), g
					}, [])
				return m.length === 0 ? v : By(p, m)
			},
			O = (p) => {
				var v,
					m,
					g,
					b,
					x = p.e,
					$ = p.index,
					y = x.currentTarget
				switch (x.key) {
					case 'ArrowLeft':
						{
							var Q = y.previousElementSibling
							Q && ((v = Q.querySelector('button')) === null || v === void 0 || v.focus(), c(l[$ - 1]))
						}
						break
					case 'ArrowRight':
						{
							var P = y.nextElementSibling
							P && ((m = P.querySelector('button')) === null || m === void 0 || m.focus(), c(l[$ + 1]))
						}
						break
					case 'Home': {
						var X = y.parentElement,
							M = X.firstElementChild
						;(g = M.querySelector('button')) === null || g === void 0 || g.focus(), c(l[0])
						break
					}
					case 'End': {
						var E = y.parentElement,
							j = E.lastElementChild
						;(b = j.querySelector('button')) === null || b === void 0 || b.focus(), c(l[-1])
						break
					}
				}
			}
		return S.jsx(
			'div',
			k({ className: o('tabs', [ES, t]), translate: 'no' }, r, {
				children: S.jsx('div', {
					'aria-label': 'Select active file',
					className: o('tabs-scrollable-container', [_S]),
					role: 'tablist',
					children: l.map((p, v) =>
						S.jsxs(
							'div',
							{
								'aria-controls': ''.concat(p, '-').concat(i, '-tab-panel'),
								'aria-selected': p === a,
								className: o('tab-container', [zS]),
								onKeyDown: (m) => O({ e: m, index: v }),
								onMouseEnter: () => f(v),
								onMouseLeave: () => f(null),
								role: 'tab',
								children: [
									S.jsx('button', {
										className: o('tab-button', [Le, IS]),
										'data-active': p === a,
										id: ''.concat(p, '-').concat(i, '-tab'),
										onClick: () => c(p),
										tabIndex: p === a ? 0 : -1,
										title: p,
										type: 'button',
										children: d(p),
									}),
									e &&
										l.length > 1 &&
										S.jsx('span', {
											className: o('close-button', [Xd]),
											onClick: (m) => {
												m.stopPropagation(), s.closeFile(p)
											},
											style: { visibility: p === a || u === v ? 'visible' : 'hidden' },
											tabIndex: p === a ? 0 : -1,
											children: S.jsx(Yy, {}),
										}),
								],
							},
							p,
						),
					),
				}),
			}),
		)
	},
	An = (n) => {
		var e = n.onClick,
			t = n.className,
			i = n.children,
			r = Pe()
		return S.jsx('button', {
			className: r('button', [r('icon-standalone'), Le, It, gi, t]),
			onClick: e,
			type: 'button',
			children: i,
		})
	},
	LS = R({ position: 'absolute', bottom: '$space$2', right: '$space$2', paddingRight: '$space$3' }),
	Ed = (n) => {
		n.className
		var e = n.onClick,
			t = $e(n, ['className', 'onClick']),
			i = ye().sandpack
		return S.jsxs(
			An,
			k(
				{
					className: LS.toString(),
					onClick: (r) => {
						i.runSandpack(), e?.(r)
					},
				},
				t,
				{ children: [S.jsx(zy, {}), S.jsx('span', { children: 'Run' })] },
			),
		)
	},
	no,
	_d = R(
		((no = {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			position: 'relative',
			backgroundColor: '$colors$surface1',
			gap: 1,
		}),
		(no['&:has(.'.concat(ie, '-stack)')] = { backgroundColor: '$colors$surface2' }),
		no),
	),
	fs = (n) => {
		var e = n.className,
			t = $e(n, ['className']),
			i = Pe()
		return S.jsx('div', k({ className: i('stack', [_d, e]) }, t))
	},
	DS = () => {
		var n = C.useContext(Ua),
			e = n.theme,
			t = n.id,
			i = n.mode
		return { theme: e, themeId: t, themeMode: i }
	},
	bh = (n, e) => {
		if (n.length !== e.length) return !1
		for (var t = !0, i = 0; i < n.length; i++)
			if (n[i] !== e[i]) {
				t = !1
				break
			}
		return t
	},
	la = (n, e) => {
		var t = e.line,
			i = e.column
		return n.line(t).from + (i ?? 0) - 1
	},
	WS = () =>
		Y.theme({
			'&': {
				backgroundColor: 'var(--'.concat(ie, '-colors-surface1)'),
				color: 'var(--'.concat(ie, '-syntax-color-plain)'),
				height: '100%',
			},
			'.cm-matchingBracket, .cm-nonmatchingBracket, &.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket':
				{ color: 'inherit', backgroundColor: 'rgba(128,128,128,.25)', backgroundBlendMode: 'difference' },
			'&.cm-editor.cm-focused': { outline: 'none' },
			'& .cm-activeLine': { backgroundColor: 'transparent' },
			'&.cm-editor.cm-focused .cm-activeLine': {
				backgroundColor: 'var(--'.concat(ie, '-colors-surface3)'),
				borderRadius: 'var(--'.concat(ie, '-border-radius)'),
			},
			'.cm-errorLine': {
				backgroundColor: 'var(--'.concat(ie, '-colors-errorSurface)'),
				borderRadius: 'var(--'.concat(ie, '-border-radius)'),
			},
			'.cm-content': {
				caretColor: 'var(--'.concat(ie, '-colors-accent)'),
				padding: '0 var(--'.concat(ie, '-space-4)'),
			},
			'.cm-scroller': {
				fontFamily: 'var(--'.concat(ie, '-font-mono)'),
				lineHeight: 'var(--'.concat(ie, '-font-lineHeight)'),
			},
			'.cm-gutters': {
				backgroundColor: 'var(--'.concat(ie, '-colors-surface1)'),
				color: 'var(--'.concat(ie, '-colors-disabled)'),
				border: 'none',
				paddingLeft: 'var(--'.concat(ie, '-space-1)'),
			},
			'.cm-gutter.cm-lineNumbers': { fontSize: '.6em' },
			'.cm-lineNumbers .cm-gutterElement': {
				lineHeight: 'var(--'.concat(ie, '-font-lineHeight)'),
				minWidth: 'var(--'.concat(ie, '-space-5)'),
			},
			'.cm-content .cm-line': { paddingLeft: 'var(--'.concat(ie, '-space-1)') },
			'.cm-content.cm-readonly .cm-line': { paddingLeft: 0 },
		}),
	St = (n) => ''.concat(ie, '-syntax-').concat(n),
	YS = () => {
		var n = ['string', 'plain', 'comment', 'keyword', 'definition', 'punctuation', 'property', 'tag', 'static']
		return n.reduce((e, t) => {
			var i
			return k(
				k({}, e),
				((i = {}),
				(i['.'.concat(St(t))] = { color: '$syntax$color$'.concat(t), fontStyle: '$syntax$fontStyle$'.concat(t) }),
				i),
			)
		}, {})
	},
	NS = (n) =>
		ss.define([
			{ tag: w.link, textDecoration: 'underline' },
			{ tag: w.emphasis, fontStyle: 'italic' },
			{ tag: w.strong, fontWeight: 'bold' },
			{ tag: w.keyword, class: St('keyword') },
			{ tag: [w.atom, w.number, w.bool], class: St('static') },
			{ tag: w.variableName, class: St('plain') },
			{ tag: w.standard(w.tagName), class: St('tag') },
			{
				tag: [w.function(w.variableName), w.definition(w.function(w.variableName)), w.tagName],
				class: St('definition'),
			},
			{ tag: w.propertyName, class: St('property') },
			{ tag: [w.literal, w.inserted], class: St(n.syntax.string ? 'string' : 'static') },
			{ tag: w.punctuation, class: St('punctuation') },
			{ tag: [w.comment, w.quote], class: St('comment') },
		]),
	VS = (n, e, t) => {
		if (!n && !e) return 'javascript'
		var i = e
		if (!i && n) {
			var r = n.lastIndexOf('.')
			i = n.slice(r + 1)
		}
		for (var s = 0, o = t; s < o.length; s++) {
			var a = o[s]
			if (i === a.name || a.extensions.includes(i || '')) return a.name
		}
		switch (i) {
			case 'ts':
			case 'tsx':
				return 'typescript'
			case 'html':
			case 'svelte':
			case 'vue':
			case 'astro':
				return 'html'
			case 'css':
			case 'less':
			case 'scss':
				return 'css'
			default:
				return 'javascript'
		}
	},
	BS = (n, e) => {
		for (
			var t = {
					javascript: ra({ jsx: !0, typescript: !1 }),
					typescript: ra({ jsx: !0, typescript: !0 }),
					html: ky(),
					css: Jf(),
				},
				i = 0,
				r = e;
			i < r.length;
			i++
		) {
			var s = r[i]
			if (n === s.name) return s.language
		}
		return t[n]
	},
	zd = function () {
		for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]
		return C.useCallback(
			(t) =>
				n.forEach((i) => {
					if (i) {
						if (typeof i == 'function') return i(t)
						i.current = t
					}
				}),
			n,
		)
	}
function qS(n) {
	return Ke.fromClass(
		(() => {
			function e(t) {
				this.decorations = this.getDecoration(t)
			}
			return (
				(e.prototype.update = (t) => {}),
				(e.prototype.getDecoration = (t) => {
					if (!n) return U.none
					var i = n.map((r) => {
						var s,
							o,
							a,
							l = U.line({ attributes: { class: (s = r.className) !== null && s !== void 0 ? s : '' } }),
							c = U.mark({
								class: (o = r.className) !== null && o !== void 0 ? o : '',
								attributes: (a = r.elementAttributes) !== null && a !== void 0 ? a : void 0,
							}),
							h = la(t.state.doc, { line: r.line, column: r.startColumn }) + 1
						if (r.startColumn && r.endColumn) {
							var u = la(t.state.doc, { line: r.line, column: r.endColumn }) + 1
							return c.range(h, u)
						}
						return l.range(h)
					})
					return U.set(i)
				}),
				e
			)
		})(),
		{ decorations: (e) => e.decorations },
	)
}
function GS() {
	return FS
}
var US = U.line({ attributes: { class: 'cm-errorLine' } }),
	FS = Ke.fromClass(
		(() => {
			function n() {
				this.decorations = U.none
			}
			return (
				(n.prototype.update = function (e) {
					e.transactions.forEach((i) => {
						var r = i.annotation('show-error')
						if (r !== void 0) {
							var s = la(e.view.state.doc, { line: r }) + 1
							this.decorations = U.set([US.range(s)])
						} else i.annotation('remove-errors') && (this.decorations = U.none)
					})
				}),
				n
			)
		})(),
		{ decorations: (n) => n.decorations },
	),
	rr,
	ro,
	ca = R({
		margin: '0',
		display: 'block',
		fontFamily: '$font$mono',
		fontSize: '$font$size',
		color: '$syntax$color$plain',
		lineHeight: '$font$lineHeight',
	}),
	yh = R(YS()),
	Id = R(
		((rr = {
			flex: 1,
			position: 'relative',
			overflow: 'auto',
			background: '$colors$surface1',
			'.cm-scroller': { padding: '$space$4 0' },
		}),
		(rr['.'.concat(ca)] = { padding: '$space$4 0' }),
		(rr['@media screen and (max-width: 768px)'] = {
			'@supports (-webkit-overflow-scrolling: touch)': { '.cm-content': { fontSize: '16px' } },
		}),
		rr),
	),
	Sh = R({ margin: '0', outline: 'none', height: '100%' }),
	HS = R(
		((ro = {
			fontFamily: '$font$mono',
			fontSize: '0.8em',
			position: 'absolute',
			right: '$space$2',
			bottom: '$space$2',
			zIndex: '$top',
			color: '$colors$clickable',
			backgroundColor: '$colors$surface2',
			borderRadius: '99999px',
			padding: 'calc($space$1 / 2) $space$2',
		}),
		(ro['& + .'.concat(Le)] = { right: 'calc($space$11 * 2)' }),
		ro),
	),
	KS = (n) => {
		var e = n.langSupport,
			t = n.highlightTheme,
			i = n.code,
			r = i === void 0 ? '' : i,
			s = e.language.parser.parse(r),
			o = 0,
			a = [],
			l = (c, h) => {
				if (c > o) {
					var u = r.slice(o, c)
					a.push(h ? C.createElement('span', { children: u, className: h, key: ''.concat(c).concat(o) }) : u), (o = c)
				}
			}
		return (
			Hu(s, t, (c, h, u) => {
				l(c, ''), l(h, u)
			}),
			o < r.length &&
				r?.includes(`
`) &&
				a.push(`

`),
			a
		)
	},
	Ka = C.forwardRef((n, e) => {
		var t = n.code,
			i = t === void 0 ? '' : t,
			r = n.filePath,
			s = n.fileType,
			o = n.onCodeUpdate,
			a = n.showLineNumbers,
			l = a === void 0 ? !1 : a,
			c = n.showInlineErrors,
			h = c === void 0 ? !1 : c,
			u = n.wrapContent,
			f = u === void 0 ? !1 : u,
			d = n.editorState,
			O = d === void 0 ? 'pristine' : d,
			p = n.readOnly,
			v = p === void 0 ? !1 : p,
			m = n.showReadOnly,
			g = m === void 0 ? !0 : m,
			b = n.decorators,
			x = n.initMode,
			$ = x === void 0 ? 'lazy' : x,
			y = n.extensions,
			Q = y === void 0 ? [] : y,
			P = n.extensionsKeymap,
			X = P === void 0 ? [] : P,
			M = n.additionalLanguages,
			E = M === void 0 ? [] : M,
			j = C.useRef(null),
			N = zd(j, e),
			I = C.useRef(),
			q = DS(),
			K = q.theme,
			oe = q.themeId,
			J = C.useState(i),
			me = J[0],
			Ge = J[1],
			L = C.useState($ === 'immediate'),
			Z = L[0],
			V = L[1],
			B = Pe(),
			de = ye(),
			Oe = de.listen,
			ae = de.sandpack.autoReload,
			We = C.useRef([]),
			xe = C.useRef([]),
			At = s1(j, { rootMargin: '600px 0px', threshold: 0.2 }).isIntersecting
		C.useImperativeHandle(e, () => ({ getCodemirror: () => I.current })),
			C.useEffect(() => {
				var he = $ === 'lazy' || $ === 'user-visible'
				he && At && V(!0)
			}, [$, At])
		var Wt = VS(r, s, E),
			bi = BS(Wt, E),
			yi = NS(K),
			Si = KS({ langSupport: bi, highlightTheme: yi, code: i }),
			ii = C.useMemo(() => b && b.sort((he, pe) => he.line - pe.line), [b]),
			Te = v && (b?.length === 0 || b === void 0)
		C.useEffect(() => {
			if (!(!j.current || !Z || Te)) {
				var he = j.current,
					pe = he.querySelector('.sp-pre-placeholder')
				pe && he.removeChild(pe)
				var le = new Y({ doc: i, extensions: [], parent: he })
				return (
					le.contentDOM.setAttribute('data-gramm', 'false'),
					le.contentDOM.setAttribute('data-lt-active', 'false'),
					le.contentDOM.setAttribute('aria-label', r ? 'Code Editor for '.concat(Vr(r)) : 'Code Editor'),
					le.contentDOM.setAttribute('tabIndex', '-1'),
					(I.current = le),
					() => {
						var ue
						;(ue = I.current) === null || ue === void 0 || ue.destroy()
					}
				)
			}
		}, [Z, v, Te]),
			C.useEffect(() => {
				if (!Te && I.current) {
					var he = [
							{
								key: 'Tab',
								run: (le) => {
									var ue, jt
									Nf(le)
									var lt = X.find((Os) => {
										var ps = Os.key
										return ps === 'Tab'
									})
									return (jt = (ue = lt?.run) === null || ue === void 0 ? void 0 : ue.call(lt, le)) !== null &&
										jt !== void 0
										? jt
										: !0
								},
							},
							{
								key: 'Shift-Tab',
								run: (le) => {
									var ue, jt
									Vf({ state: le.state, dispatch: le.dispatch })
									var lt = X.find((Os) => {
										var ps = Os.key
										return ps === 'Shift-Tab'
									})
									return (jt = (ue = lt?.run) === null || ue === void 0 ? void 0 : ue.call(lt, le)) !== null &&
										jt !== void 0
										? jt
										: !0
								},
							},
							{ key: 'Escape', run: () => (v || (j.current && j.current.focus()), !0) },
							{ key: 'mod-Backspace', run: Wa },
						],
						pe = Re(
							Re([om(), ev(), X0()], Q, !0),
							[
								Ar.of(Re(Re(Re(Re(Re([], z0, !0), i1, !0), cv, !0), he, !0), X, !0)),
								bi,
								WS(),
								n0(yi),
								Y.updateListener.of((le) => {
									if (le.docChanged) {
										var ue = le.state.doc.toString()
										Ge(ue), o?.(ue)
									}
								}),
							],
							!1,
						)
					v ? (pe.push(ee.readOnly.of(!0)), pe.push(Y.editable.of(!1))) : (pe.push(f0()), pe.push(fm())),
						ii && pe.push(qS(ii)),
						f && pe.push(Y.lineWrapping),
						l && pe.push(wm()),
						h && pe.push(GS()),
						I.current.dispatch({ effects: re.reconfigure.of(pe) })
				}
			}, [Z, ii, l, f, oe, v, Te, ae]),
			C.useEffect(() => {
				var pe = I.current,
					le = !bh(Q, We.current) || !bh(X, xe.current)
				pe &&
					le &&
					(pe.dispatch({ effects: re.appendConfig.of(Q) }),
					pe.dispatch({ effects: re.appendConfig.of(Ar.of(Re([], X, !0))) }),
					(We.current = Q),
					(xe.current = X))
			}, [Q, X]),
			C.useEffect(() => {
				I.current && O === 'dirty' && window.matchMedia('(min-width: 768px)').matches && I.current.contentDOM.focus()
			}, []),
			C.useEffect(() => {
				if (I.current && typeof i == 'string' && i !== me) {
					var he = I.current,
						pe = he.state.selection.ranges.some((ue) => {
							var jt = ue.to,
								lt = ue.from
							return jt > i.length || lt > i.length
						})
							? T.cursor(i.length)
							: he.state.selection,
						le = { from: 0, to: he.state.doc.length, insert: i }
					he.dispatch({ changes: le, selection: pe })
				}
			}, [i]),
			C.useEffect(() => {
				if (h) {
					var pe = Oe((le) => {
						var ue = I.current
						le.type === 'success'
							? ue?.dispatch({ annotations: [new ft('remove-errors', !0)] })
							: le.type === 'action' &&
								le.action === 'show-error' &&
								le.path === r &&
								le.line &&
								ue?.dispatch({ annotations: [new ft('show-error', le.line)] })
					})
					return () => pe()
				}
			}, [Oe, h])
		var ot = (he) => {
				he.key === 'Enter' && I.current && (he.preventDefault(), I.current.contentDOM.focus())
			},
			at = () => {
				var he = 4
				return l && (he += 6), v || (he += 1), 'var(--'.concat(ie, '-space-').concat(he, ')')
			}
		return Te
			? S.jsxs(S.Fragment, {
					children: [
						S.jsx('pre', {
							ref: N,
							className: B('cm', [B(O), B(Wt), Sh, yh]),
							translate: 'no',
							children: S.jsx('code', {
								className: B('pre-placeholder', [ca]),
								style: { marginLeft: at() },
								children: Si,
							}),
						}),
						v && g && S.jsx('span', k({ className: B('read-only', [HS]) }, {}, { children: 'Read-only' })),
					],
				})
			: S.jsx('div', {
					ref: N,
					'aria-autocomplete': 'list',
					'aria-label': r ? 'Code Editor for '.concat(Vr(r)) : 'Code Editor',
					'aria-multiline': 'true',
					className: B('cm', [B(O), B(Wt), Sh, yh]),
					onKeyDown: ot,
					role: 'textbox',
					tabIndex: 0,
					translate: 'no',
					suppressHydrationWarning: !0,
					children: S.jsx('pre', { className: B('pre-placeholder', [ca]), style: { marginLeft: at() }, children: Si }),
				})
	}),
	JS = C.forwardRef((n, e) => {
		var t = n.showTabs,
			i = n.showLineNumbers,
			r = i === void 0 ? !1 : i,
			s = n.showInlineErrors,
			o = s === void 0 ? !1 : s,
			a = n.showRunButton,
			l = a === void 0 ? !0 : a,
			c = n.wrapContent,
			h = c === void 0 ? !1 : c,
			u = n.closableTabs,
			f = u === void 0 ? !1 : u,
			d = n.initMode,
			O = n.extensions,
			p = n.extensionsKeymap,
			v = n.readOnly,
			m = n.showReadOnly,
			g = n.additionalLanguages,
			b = n.className,
			x = $e(n, [
				'showTabs',
				'showLineNumbers',
				'showInlineErrors',
				'showRunButton',
				'wrapContent',
				'closableTabs',
				'initMode',
				'extensions',
				'extensionsKeymap',
				'readOnly',
				'showReadOnly',
				'additionalLanguages',
				'className',
			]),
			$ = ye().sandpack,
			y = Ad(),
			Q = y.code,
			P = y.updateCode,
			X = y.readOnly,
			M = $.activeFile,
			E = $.status,
			j = $.editorState,
			N = t ?? $.visibleFiles.length > 1,
			I = Pe(),
			q = (oe, J) => {
				J === void 0 && (J = !0), P(oe, J)
			},
			K = Rd()
		return S.jsxs(
			fs,
			k({ className: I('editor', [b]) }, x, {
				children: [
					N && S.jsx(Md, { activeFileUniqueId: K, closableTabs: f }),
					S.jsxs('div', {
						'aria-labelledby': ''.concat(M, '-').concat(K, '-tab'),
						className: I('code-editor', [Id]),
						id: ''.concat(M, '-').concat(K, '-tab-panel'),
						role: 'tabpanel',
						children: [
							S.jsx(
								Ka,
								{
									ref: e,
									additionalLanguages: g,
									code: Q,
									editorState: j,
									extensions: O,
									extensionsKeymap: p,
									filePath: M,
									initMode: d || $.initMode,
									onCodeUpdate: (oe) => {
										var J
										return q(oe, (J = $.autoReload) !== null && J !== void 0 ? J : !0)
									},
									readOnly: v || X,
									showInlineErrors: o,
									showLineNumbers: r,
									showReadOnly: m,
									wrapContent: h,
								},
								M,
							),
							l && (!$.autoReload || E === 'idle') ? S.jsx(Ed, {}) : null,
						],
					}),
				],
			}),
		)
	})
C.forwardRef((n, e) => {
	var t = n.showTabs,
		i = n.showLineNumbers,
		r = n.decorators,
		s = n.code,
		o = n.initMode,
		a = n.wrapContent,
		l = n.additionalLanguages,
		c = $e(n, ['showTabs', 'showLineNumbers', 'decorators', 'code', 'initMode', 'wrapContent', 'additionalLanguages']),
		h = ye().sandpack,
		u = Ad().code,
		f = Pe(),
		d = t ?? h.visibleFiles.length > 1,
		O = Rd()
	return S.jsxs(
		fs,
		k({ className: f('editor-viewer') }, c, {
			children: [
				d ? S.jsx(Md, { activeFileUniqueId: O }) : null,
				S.jsx('div', {
					'aria-labelledby': ''.concat(h.activeFile, '-').concat(O, '-tab'),
					className: f('code-editor', [Id]),
					id: ''.concat(h.activeFile, '-').concat(O, '-tab-panel'),
					role: 'tabpanel',
					children: S.jsx(Ka, {
						ref: e,
						additionalLanguages: l,
						code: s ?? u,
						decorators: r,
						filePath: h.activeFile,
						initMode: o || h.initMode,
						showLineNumbers: i,
						showReadOnly: !1,
						wrapContent: a,
						readOnly: !0,
					}),
				}),
				h.status === 'idle' ? S.jsx(Ed, {}) : null,
			],
		}),
	)
})
var sr,
	or,
	ex = R(
		((sr = {
			border: '1px solid $colors$surface2',
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'stretch',
			borderRadius: '$border$radius',
			overflow: 'hidden',
			position: 'relative',
			backgroundColor: '$colors$surface2',
			gap: 1,
		}),
		(sr['> .'.concat(_d)] = {
			flexGrow: 1,
			flexShrink: 1,
			flexBasis: '0',
			height: '$layout$height',
			overflow: 'hidden',
			'@media print': { height: 'auto', display: 'block' },
			'@media screen and (max-width: 768px)':
				((or = {}),
				(or['&:not(.'.concat(ie, '-preview, .').concat(ie, '-editor, .').concat(ie, '-preset-column)')] = {
					height: 'calc($layout$height / 2)',
				}),
				(or.minWidth = '100%;'),
				or),
		}),
		(sr['> .'.concat(ie, '-file-explorer')] = {
			flex: 0.2,
			minWidth: 200,
			'@media screen and (max-width: 768px)': { flex: 1 },
		}),
		sr),
	),
	tx = C.forwardRef((n, e) => {
		var t = n.children,
			i = n.className,
			r = $e(n, ['children', 'className']),
			s = ye().sandpack,
			o = Pe(),
			a = zd(s.lazyAnchorRef, e)
		return S.jsx('div', k({ ref: a, className: o('layout', [ex, i]) }, r, { children: t }))
	}),
	ix = () => {
		var n,
			e = ye().sandpack,
			t = e.error
		return (n = t?.message) !== null && n !== void 0 ? n : null
	},
	Ld = 200,
	nx = (n, e) => {
		var t = ye(),
			i = t.sandpack,
			r = t.listen,
			s = C.useState('LOADING'),
			o = s[0],
			a = s[1]
		return (
			C.useEffect(() => {
				var l = r((c) => {
					c.type === 'start' && c.firstLoad === !0 && a('LOADING'),
						c.type === 'done' && a((h) => (h === 'LOADING' ? 'PRE_FADING' : 'HIDDEN'))
				}, n)
				return () => {
					l()
				}
			}, [n, i.status === 'idle']),
			C.useEffect(() => {
				var l
				return (
					o === 'PRE_FADING' && !e ? a('FADING') : o === 'FADING' && (l = setTimeout(() => a('HIDDEN'), Ld)),
					() => {
						clearTimeout(l)
					}
				)
			}, [o, e]),
			i.status === 'timeout' ? 'TIMEOUT' : i.status !== 'running' ? 'HIDDEN' : o
		)
	},
	rx = (n) => {
		var e = ye().dispatch
		return {
			refresh: () => e({ type: 'refresh' }, n),
			back: () => e({ type: 'urlback' }, n),
			forward: () => e({ type: 'urlforward' }, n),
		}
	},
	Dd = (n) => {
		var e = ye(),
			t = e.sandpack,
			i = e.listen,
			r = e.dispatch,
			s = C.useRef(null),
			o = C.useRef(qi())
		C.useEffect(() => {
			var l = s.current,
				c = o.current
			return l !== null && t.registerBundler(l, c, n), () => t.unregisterBundler(c)
		}, [])
		var a = () => t.clients[o.current] || null
		return {
			sandpack: t,
			getClient: a,
			clientId: o.current,
			iframe: s,
			listen: (l) => i(l, o.current),
			dispatch: (l) => r(l, o.current),
		}
	},
	Ja = (n) => {
		var e = ye().dispatch
		return { restart: () => e({ type: 'shell/restart' }, n), openPreview: () => e({ type: 'shell/openPreview' }, n) }
	},
	sx = (n, e) => {
		var t
		switch (n.state) {
			case 'downloading_manifest':
				return '[1/3] Downloading manifest'
			case 'downloaded_module':
				return '[2/3] Downloaded '
					.concat(n.name, ' (')
					.concat(e - n.totalPending, '/')
					.concat(e, ')')
			case 'starting_command':
				return '[3/3] Starting command'
			case 'command_running':
				return '[3/3] Running "'.concat((t = n.command) === null || t === void 0 ? void 0 : t.trim(), '"')
		}
	},
	Wd = (n) => {
		var e = C.useState(!1),
			t = e[0],
			i = e[1],
			r = C.useState(),
			s = r[0],
			o = r[1],
			a = C.useState(null),
			l = a[0],
			c = a[1],
			h = n?.timeout,
			u = n?.clientId,
			f = ye().listen
		return (
			C.useEffect(() => {
				var d,
					O = f((p) => {
						p.type === 'start' && p.firstLoad && i(!1),
							h &&
								(d = setTimeout(() => {
									c(null)
								}, h)),
							p.type === 'dependencies'
								? c(() => {
										switch (p.data.state) {
											case 'downloading_manifest':
												return '[1/3] Downloading manifest'
											case 'downloaded_module':
												return '[2/3] Downloaded '
													.concat(p.data.name, ' (')
													.concat(p.data.progress, '/')
													.concat(p.data.total, ')')
											case 'starting':
												return '[3/3] Starting'
										}
										return null
									})
								: p.type === 'shell/progress' &&
									!t &&
									(!s && p.data.state === 'downloaded_module' && o(p.data.totalPending),
									s !== void 0 && c(sx(p.data, s))),
							p.type === 'done' && p.compilatonError === !1 && (c(null), i(!0), clearTimeout(d))
					}, u)
				return () => {
					d && clearTimeout(d), O()
				}
			}, [u, t, s, h]),
			l
		)
	},
	ox = 400 * 2,
	Yd = (n) => {
		var e = n.clientId,
			t = n.maxMessageCount,
			i = t === void 0 ? ox : t
		n.resetOnPreviewRestart
		var r = C.useState([]),
			s = r[0],
			o = r[1],
			a = ye().listen
		return (
			C.useEffect(() => {
				var l = a((c) => {
					c.type === 'start'
						? o([])
						: c.type === 'stdout' &&
							c.payload.data &&
							c.payload.data.trim() &&
							o((h) => {
								for (var u = Re(Re([], h, !0), [{ data: c.payload.data, id: qi() }], !1); u.length > i; ) u.shift()
								return u
							})
				}, e)
				return l
			}, [i, e]),
			{ logs: s, reset: () => o([]) }
		)
	},
	ax = (n) => {
		var e = n.replace('[sandpack-client]: ', '')
		if (/process.exit/.test(e)) {
			var t = e.match(/process.exit\((\d+)\)/)
			return t
				? Number(t[1]) === 0
					? 'Server is not running, would you like to start it again?'
					: 'Server has crashed with status code '.concat(t[1], ', would you like to restart the server?')
				: e
		}
		return e
	},
	lx = (n) => {
		var e = n.children,
			t = n.className,
			i = $e(n, ['children', 'className']),
			r = ix(),
			s = Ja().restart,
			o = Pe(),
			a = ye().sandpack,
			l = a.runSandpack,
			c = a.teamId,
			h = ye().dispatch
		if (!r && !e) return null
		var u = r?.startsWith('[sandpack-client]'),
			f = r?.includes('NPM_REGISTRY_UNAUTHENTICATED_REQUEST'),
			d = () => {
				c && h({ type: 'sign-in', teamId: c })
			}
		return f
			? S.jsxs(
					'div',
					k({ className: o('overlay', [o('error'), vn, aa, t]) }, n, {
						children: [
							S.jsx('p', {
								className: o('error-message', [Gt]),
								children: S.jsx('strong', { children: 'Unable to fetch required dependency.' }),
							}),
							S.jsx('div', {
								className: o('error-message', [Gt]),
								children: S.jsxs('p', {
									children: [
										'Authentication required. Please sign in to your account (make sure to allow pop-ups to this page) and try again. If the issue persists, contact',
										' ',
										S.jsx('a', {
											href: 'mailto:hello@codesandbox.io?subject=Sandpack Timeout Error',
											children: 'support',
										}),
										' ',
										'for further assistance.',
									],
								}),
							}),
							S.jsx('div', {
								children: S.jsxs('button', {
									className: o('button', [Le, It, gi]),
									onClick: d,
									children: [S.jsx(Ey, {}), S.jsx('span', { children: 'Sign in' })],
								}),
							}),
						],
					}),
				)
			: u && r
				? S.jsx(
						'div',
						k({ className: o('overlay', [o('error'), vn, aa, t]) }, i, {
							children: S.jsxs('div', {
								className: o('error-message', [Gt]),
								children: [
									S.jsx('p', {
										className: o('error-title', [R({ fontWeight: 'bold' })]),
										children: "Couldn't connect to server",
									}),
									S.jsx('p', { children: ax(r) }),
									S.jsx('div', {
										children: S.jsxs('button', {
											className: o('button', [o('icon-standalone'), Le, It, gi]),
											onClick: () => {
												s(), l()
											},
											title: 'Restart script',
											type: 'button',
											children: [S.jsx(us, {}), ' ', S.jsx('span', { children: 'Restart' })],
										}),
									}),
								],
							}),
						}),
					)
				: S.jsxs(
						'div',
						k({ className: o('overlay', [o('error'), vn, jd({ solidBg: !0 }), t]), translate: 'no' }, i, {
							children: [
								S.jsx('p', {
									className: o('error-message', [Gt]),
									children: S.jsx('strong', { children: 'Something went wrong' }),
								}),
								S.jsx('p', { className: o('error-message', [Gt({ errorCode: !0 })]), children: r || e }),
							],
						}),
					)
	}
function cx(n, e) {
	return (
		e === void 0 && (e = !1),
		(n = Ay.escapeCarriageReturn(Ox(n))),
		Zy.ansiToJson(n, { json: !0, remove_empty: !0, use_classes: e })
	)
}
function hx(n) {
	var e = ''
	return (
		n.bg && (e += ''.concat(n.bg, '-bg ')),
		n.fg && (e += ''.concat(n.fg, '-fg ')),
		n.decoration && (e += 'ansi-'.concat(n.decoration, ' ')),
		e === '' ? null : ((e = e.substring(0, e.length - 1)), e)
	)
}
function ux(n) {
	var e = {}
	switch (
		(n.bg && (e.backgroundColor = 'rgb('.concat(n.bg, ')')), n.fg && (e.color = 'rgb('.concat(n.fg, ')')), n.decoration)
	) {
		case 'bold':
			e.fontWeight = 'bold'
			break
		case 'dim':
			e.opacity = '0.5'
			break
		case 'italic':
			e.fontStyle = 'italic'
			break
		case 'hidden':
			e.visibility = 'hidden'
			break
		case 'strikethrough':
			e.textDecoration = 'line-through'
			break
		case 'underline':
			e.textDecoration = 'underline'
			break
		case 'blink':
			e.textDecoration = 'blink'
			break
	}
	return e
}
function fx(n, e, t, i) {
	var r = e ? null : ux(t),
		s = e ? hx(t) : null
	if (!n) return C.createElement('span', { style: r, key: i, className: s }, t.content)
	for (
		var o = [], a = /(\s|^)(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g, l = 0, c;
		(c = a.exec(t.content)) !== null;
	) {
		var h = c[1],
			u = c[2],
			f = c.index + h.length
		f > l && o.push(t.content.substring(l, f))
		var d = u.startsWith('www.') ? 'http://'.concat(u) : u
		o.push(C.createElement('a', { key: l, href: d, target: '_blank' }, ''.concat(u))), (l = a.lastIndex)
	}
	return (
		l < t.content.length && o.push(t.content.substring(l)),
		C.createElement('span', { style: r, key: i, className: s }, o)
	)
}
function dx(n) {
	var e = n.className,
		t = n.useClasses,
		i = n.children,
		r = n.linkify
	return C.createElement('code', { className: e }, cx(i ?? '', t ?? !1).map(fx.bind(null, r ?? !1, t ?? !1)))
}
function Ox(n) {
	var e = n
	do (n = e), (e = n.replace(/[^\n]\x08/gm, ''))
	while (e.length < n.length)
	return n
}
var Nd = (n) => {
		var e = n.data,
			t = Pe()
		return S.jsx(S.Fragment, {
			children: e.map((i) => {
				var r = i.data,
					s = i.id
				return S.jsx('div', { className: t('console-item', [px]), children: S.jsx(dx, { children: r }) }, s)
			}),
		})
	},
	px = R({
		width: '100%',
		padding: '$space$3 $space$2',
		fontSize: '.85em',
		position: 'relative',
		whiteSpace: 'pre',
		'&:not(:first-child):after': {
			content: '',
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			height: 1,
			background: '$colors$surface3',
		},
	}),
	gx = (n) => My.compressToBase64(JSON.stringify(n)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
	xh = 'https://codesandbox.io/api/v1/sandboxes/define',
	mx = (n, e) => {
		var t = Object.keys(n).reduce((i, r) => {
			var s,
				o = r.replace('/', ''),
				a = { content: n[r].code, isBinary: !1 }
			return k(k({}, i), ((s = {}), (s[o] = a), s))
		}, {})
		return gx(k({ files: t }, e ? { template: e } : null))
	},
	vx = (n) => {
		var e = ye().sandpack
		return e.exportOptions ? S.jsx(bx, k({ state: e }, n)) : S.jsx(yx, k({ state: e }, n))
	},
	bx = (n) => {
		var e = n.children,
			t = n.state,
			i = $e(n, ['children', 'state']),
			r = () =>
				Bt(void 0, void 0, void 0, function () {
					var s, o, a, l
					return qt(this, (c) => {
						switch (c.label) {
							case 0:
								if (!(!((l = t.exportOptions) === null || l === void 0) && l.apiToken))
									throw new Error('Missing `apiToken` property')
								return (
									(s = Object.keys(t.files).reduce((h, u) => {
										var f,
											d = u.replace('/', '')
										return k(k({}, h), ((f = {}), (f[d] = t.files[u]), f))
									}, {})),
									[
										4,
										fetch('https://api.codesandbox.io/sandbox', {
											method: 'POST',
											body: JSON.stringify({
												template: t.environment,
												files: s,
												privacy: t.exportOptions.privacy === 'public' ? 0 : 2,
											}),
											headers: {
												Authorization: 'Bearer '.concat(t.exportOptions.apiToken),
												'Content-Type': 'application/json',
												'X-CSB-API-Version': '2023-07-01',
											},
										}),
									]
								)
							case 1:
								return (o = c.sent()), [4, o.json()]
							case 2:
								return (
									(a = c.sent()),
									window.open(
										'https://codesandbox.io/p/sandbox/'
											.concat(a.data.alias, '?file=/')
											.concat(t.activeFile, '&utm-source=storybook-addon'),
										'_blank',
									),
									[2]
								)
						}
					})
				})
		return S.jsx(
			'button',
			k({ onClick: r, title: 'Export to workspace in CodeSandbox', type: 'button' }, i, { children: e }),
		)
	},
	yx = (n) => {
		var e,
			t,
			i,
			r = n.children,
			s = n.state,
			o = $e(n, ['children', 'state']),
			a = C.useRef(null),
			l = C.useState(),
			c = l[0],
			h = l[1]
		return (
			C.useEffect(() => {
				var f = setTimeout(() => {
					var d = mx(s.files, s.environment),
						O = new URLSearchParams({
							parameters: d,
							query: new URLSearchParams({ file: s.activeFile, utm_medium: 'sandpack' }).toString(),
						})
					h(O)
				}, 600)
				return () => {
					clearTimeout(f)
				}
			}, [s.activeFile, s.environment, s.files]),
			((i =
				(t = (e = c?.get) === null || e === void 0 ? void 0 : e.call(c, 'parameters')) === null || t === void 0
					? void 0
					: t.length) !== null && i !== void 0
				? i
				: 0) > 1500
				? S.jsxs(
						'button',
						k(
							{
								onClick: () => {
									var u
									return (u = a.current) === null || u === void 0 ? void 0 : u.submit()
								},
								title: 'Open in CodeSandbox',
								type: 'button',
							},
							o,
							{
								children: [
									S.jsxs('form', {
										ref: a,
										action: xh,
										method: 'POST',
										style: { visibility: 'hidden' },
										target: '_blank',
										children: [
											S.jsx('input', {
												name: 'environment',
												type: 'hidden',
												value: s.environment === 'node' ? 'server' : s.environment,
											}),
											Array.from(c, (u) => {
												var f = u[0],
													d = u[1]
												return S.jsx('input', { name: f, type: 'hidden', value: d }, f)
											}),
										],
									}),
									r,
								],
							},
						),
					)
				: S.jsx(
						'a',
						k(
							{
								href: ''
									.concat(xh, '?')
									.concat(c?.toString(), '&environment=')
									.concat(s.environment === 'node' ? 'server' : s.environment),
								rel: 'noreferrer noopener',
								target: '_blank',
								title: 'Open in CodeSandbox',
							},
							o,
							{ children: r },
						),
					)
		)
	},
	Vd = () => {
		var n = Pe()
		return S.jsxs(vx, {
			className: n('button', [n('icon-standalone'), Le, It, gi]),
			children: [S.jsx(Wy, {}), S.jsx('span', { children: 'Open Sandbox' })],
		})
	},
	ri,
	ha = R({
		transform: 'translate(-4px, 9px) scale(0.13, 0.13)',
		'*': { position: 'absolute', width: '96px', height: '96px' },
	}),
	Sx = R(
		((ri = {
			position: 'absolute',
			right: '$space$2',
			bottom: '$space$2',
			zIndex: '$top',
			width: '32px',
			height: '32px',
			borderRadius: '$border$radius',
		}),
		(ri['.'.concat(ha)] = { display: 'flex' }),
		(ri['.sp-button.'.concat(Le)] = { display: 'none' }),
		(ri['&:hover .sp-button.'.concat(Le)] = { display: 'flex' }),
		(ri['&:hover .sp-button.'.concat(Le, ' > span')] = { display: 'none' }),
		(ri['&:hover .'.concat(ha)] = { display: 'none' }),
		ri),
	),
	xx = Cd({
		'0%': { transform: 'rotateX(-25.5deg) rotateY(45deg)' },
		'100%': { transform: 'rotateX(-25.5deg) rotateY(405deg)' },
	}),
	wx = R({
		animation: ''.concat(xx, ' 1s linear infinite'),
		animationFillMode: 'forwards',
		transformStyle: 'preserve-3d',
		transform: 'rotateX(-25.5deg) rotateY(45deg)',
		'*': { border: '10px solid $colors$clickable', borderRadius: '8px', background: '$colors$surface1' },
		'.top': { transform: 'rotateX(90deg) translateZ(44px)', transformOrigin: '50% 50%' },
		'.bottom': { transform: 'rotateX(-90deg) translateZ(44px)', transformOrigin: '50% 50%' },
		'.front': { transform: 'rotateY(0deg) translateZ(44px)', transformOrigin: '50% 50%' },
		'.back': { transform: 'rotateY(-180deg) translateZ(44px)', transformOrigin: '50% 50%' },
		'.left': { transform: 'rotateY(-90deg) translateZ(44px)', transformOrigin: '50% 50%' },
		'.right': { transform: 'rotateY(90deg) translateZ(44px)', transformOrigin: '50% 50%' },
	}),
	$x = (n) => {
		var e = n.className,
			t = n.showOpenInCodeSandbox,
			i = $e(n, ['className', 'showOpenInCodeSandbox']),
			r = Pe()
		return S.jsxs(
			'div',
			k({ className: r('cube-wrapper', [Sx, e]), title: 'Open in CodeSandbox' }, i, {
				children: [
					t && S.jsx(Vd, {}),
					S.jsx('div', {
						className: r('cube', [ha]),
						children: S.jsxs('div', {
							className: r('sides', [wx]),
							children: [
								S.jsx('div', { className: 'top' }),
								S.jsx('div', { className: 'right' }),
								S.jsx('div', { className: 'bottom' }),
								S.jsx('div', { className: 'left' }),
								S.jsx('div', { className: 'front' }),
								S.jsx('div', { className: 'back' }),
							],
						}),
					}),
				],
			}),
		)
	},
	Qx = R({ backgroundColor: '$colors$surface1' }),
	kx = (n) => {
		var e = n.clientId,
			t = n.loading,
			i = n.className,
			r = n.style,
			s = n.showOpenInCodeSandbox,
			o = $e(n, ['clientId', 'loading', 'className', 'style', 'showOpenInCodeSandbox']),
			a = Pe(),
			l = ye().sandpack,
			c = l.runSandpack,
			h = l.environment,
			u = C.useState(!1),
			f = u[0],
			d = u[1],
			O = nx(e, t),
			p = Wd({ clientId: e }),
			v = Yd({ clientId: e }).logs
		if (
			(C.useEffect(() => {
				var g
				return (
					p?.includes('Running') &&
						(g = setTimeout(() => {
							d(!0)
						}, 3e3)),
					() => {
						g && clearTimeout(g)
					}
				)
			}, [p]),
			O === 'HIDDEN')
		)
			return null
		if (O === 'TIMEOUT')
			return S.jsx(
				'div',
				k({ className: a('overlay', [a('error'), vn, jd, aa, i]) }, o, {
					children: S.jsxs('div', {
						className: a('error-message', [Gt]),
						children: [
							S.jsx('p', {
								className: a('error-title', [R({ fontWeight: 'bold' })]),
								children: "Couldn't connect to server",
							}),
							S.jsx('div', {
								className: a('error-message', [Gt]),
								children: S.jsxs('p', {
									children: [
										'This means sandpack cannot connect to the runtime or your network is having some issues. Please check the network tab in your browser and try again. If the problem persists, report it via',
										' ',
										S.jsx('a', {
											href: 'mailto:hello@codesandbox.io?subject=Sandpack Timeout Error',
											children: 'email',
										}),
										' ',
										'or submit an issue on',
										' ',
										S.jsx('a', {
											href: 'https://github.com/codesandbox/sandpack/issues',
											rel: 'noreferrer noopener',
											target: '_blank',
											children: 'GitHub.',
										}),
									],
								}),
							}),
							S.jsxs('p', {
								className: a('error-message', [Gt({ errorCode: !0 })]),
								children: ['ENV: ', h, S.jsx('br', {}), 'ERROR: TIME_OUT'],
							}),
							S.jsx('div', {
								children: S.jsxs('button', {
									className: a('button', [a('icon-standalone'), Le, It, gi]),
									onClick: c,
									title: 'Restart script',
									type: 'button',
									children: [S.jsx(us, {}), ' ', S.jsx('span', { children: 'Try again' })],
								}),
							}),
						],
					}),
				}),
			)
		var m = O === 'LOADING' || O === 'PRE_FADING'
		return S.jsxs(S.Fragment, {
			children: [
				S.jsxs(
					'div',
					k(
						{
							className: a('overlay', [a('loading'), vn, Qx, i]),
							style: k(k({}, r), { opacity: m ? 1 : 0, transition: 'opacity '.concat(Ld, 'ms ease-out') }),
						},
						o,
						{
							children: [
								f && S.jsx('div', { className: Px.toString(), children: S.jsx(Nd, { data: v }) }),
								S.jsx($x, { showOpenInCodeSandbox: s }),
							],
						},
					),
				),
				p && S.jsx('div', { className: Tx.toString(), children: S.jsx('p', { children: p }) }),
			],
		})
	},
	Px = R({
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: '$space$8',
		overflow: 'auto',
		opacity: 0.5,
		overflowX: 'hidden',
	}),
	Tx = R({
		position: 'absolute',
		left: '$space$5',
		bottom: '$space$4',
		zIndex: '$top',
		color: '$colors$clickable',
		animation: ''.concat(Ha, ' 150ms ease'),
		fontFamily: '$font$mono',
		fontSize: '.8em',
		width: '75%',
		p: { whiteSpace: 'nowrap', margin: 0, textOverflow: 'ellipsis', overflow: 'hidden' },
	}),
	Cx = (n) => {
		var e = n.clientId,
			t = Wd({ timeout: 3e3, clientId: e })
		return t ? S.jsx('div', { className: Zx.toString(), children: S.jsx('p', { children: t }) }) : null
	},
	Zx = R({
		position: 'absolute',
		left: '$space$5',
		bottom: '$space$4',
		zIndex: '$top',
		color: '$colors$clickable',
		animation: ''.concat(Ha, ' 150ms ease'),
		fontFamily: '$font$mono',
		fontSize: '.8em',
		width: '75%',
		p: { whiteSpace: 'nowrap', margin: 0, textOverflow: 'ellipsis', overflow: 'hidden' },
	})
R({
	borderRadius: '0',
	width: '100%',
	padding: 0,
	marginBottom: '$space$2',
	span: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' },
	svg: { marginRight: '$space$1' },
})
R({ padding: '$space$3', overflow: 'auto', height: '100%' })
var Rx = (n) => {
		var e = n.match(/(https?:\/\/.*?)\//)
		return e && e[1] ? [e[1], n.replace(e[1], '')] : [n, '/']
	},
	Ax = R({
		display: 'flex',
		alignItems: 'center',
		height: '$layout$headerHeight',
		borderBottom: '1px solid $colors$surface2',
		padding: '$space$3 $space$2',
		background: '$colors$surface1',
	}),
	jx = R({
		backgroundColor: '$colors$surface2',
		color: '$colors$clickable',
		padding: '$space$1 $space$3',
		borderRadius: '99999px',
		border: '1px solid $colors$surface2',
		height: '24px',
		lineHeight: '24px',
		fontSize: 'inherit',
		outline: 'none',
		flex: 1,
		marginLeft: '$space$4',
		width: '0',
		transition: 'background $transitions$default',
		'&:hover': { backgroundColor: '$colors$surface3' },
		'&:focus': { backgroundColor: '$surface1', border: '1px solid $colors$accent', color: '$colors$base' },
	}),
	Xx = (n) => {
		var e,
			t = n.clientId,
			i = n.onURLChange,
			r = n.className,
			s = n.startRoute,
			o = $e(n, ['clientId', 'onURLChange', 'className', 'startRoute']),
			a = C.useState(''),
			l = a[0],
			c = a[1],
			h = ye(),
			u = h.sandpack,
			f = h.dispatch,
			d = h.listen,
			O = C.useState((e = s ?? u.startRoute) !== null && e !== void 0 ? e : '/'),
			p = O[0],
			v = O[1],
			m = C.useState(!1),
			g = m[0],
			b = m[1],
			x = C.useState(!1),
			$ = x[0],
			y = x[1],
			Q = Pe()
		C.useEffect(() => {
			var I = d((q) => {
				if (q.type === 'urlchange') {
					var K = q.url,
						oe = q.back,
						J = q.forward,
						me = Rx(K),
						Ge = me[0],
						L = me[1]
					c(Ge), v(L), b(oe), y(J)
				}
			}, t)
			return () => I()
		}, [])
		var P = (I) => {
				var q = I.target.value.startsWith('/') ? I.target.value : '/'.concat(I.target.value)
				v(q)
			},
			X = (I) => {
				I.code === 'Enter' &&
					(I.preventDefault(), I.stopPropagation(), typeof i == 'function' && i(l + I.currentTarget.value))
			},
			M = () => {
				f({ type: 'refresh' })
			},
			E = () => {
				f({ type: 'urlback' })
			},
			j = () => {
				f({ type: 'urlforward' })
			},
			N = Q('button', [Q('icon'), Le, MS, R({ minWidth: '$space$6', justifyContent: 'center' })])
		return S.jsxs(
			'div',
			k({ className: Q('navigator', [Ax, r]) }, o, {
				children: [
					S.jsx('button', {
						'aria-label': 'Go back one page',
						className: N,
						disabled: !g,
						onClick: E,
						type: 'button',
						children: S.jsx(Iy, {}),
					}),
					S.jsx('button', {
						'aria-label': 'Go forward one page',
						className: N,
						disabled: !$,
						onClick: j,
						type: 'button',
						children: S.jsx(Ly, {}),
					}),
					S.jsx('button', {
						'aria-label': 'Refresh page',
						className: N,
						onClick: M,
						type: 'button',
						children: S.jsx(Td, {}),
					}),
					S.jsx('input', {
						'aria-label': 'Current Sandpack URL',
						className: Q('input', [jx]),
						name: 'Current Sandpack URL',
						onChange: P,
						onKeyDown: X,
						type: 'text',
						value: p,
					}),
				],
			}),
		)
	},
	so,
	Mx = R(
		((so = {
			flex: 1,
			display: 'flex',
			flexDirection: 'column',
			background: 'white',
			overflow: 'auto',
			position: 'relative',
		}),
		(so['.'.concat(ie, '-bridge-frame')] = {
			border: 0,
			position: 'absolute',
			left: '$space$2',
			bottom: '$space$2',
			zIndex: '$top',
			height: 12,
			width: '30%',
			mixBlendMode: 'multiply',
			pointerEvents: 'none',
		}),
		so),
	),
	Ex = R({
		border: '0',
		outline: '0',
		width: '100%',
		height: '100%',
		minHeight: '160px',
		maxHeight: '2000px',
		flex: 1,
	}),
	_x = R({
		display: 'flex',
		position: 'absolute',
		bottom: '$space$2',
		right: '$space$2',
		zIndex: '$overlay',
		gap: '$space$2',
	}),
	zx = C.forwardRef((n, e) => {
		var t = n.showNavigator,
			i = t === void 0 ? !1 : t,
			r = n.showRefreshButton,
			s = r === void 0 ? !0 : r,
			o = n.showOpenInCodeSandbox,
			a = o === void 0 ? !0 : o,
			l = n.showSandpackErrorOverlay,
			c = l === void 0 ? !0 : l
		n.showOpenNewtab
		var h = n.showRestartButton,
			u = h === void 0 ? !0 : h,
			f = n.actionsChildren,
			d = f === void 0 ? S.jsx(S.Fragment, {}) : f,
			O = n.children,
			p = n.className,
			v = n.startRoute,
			m = v === void 0 ? '/' : v,
			g = $e(n, [
				'showNavigator',
				'showRefreshButton',
				'showOpenInCodeSandbox',
				'showSandpackErrorOverlay',
				'showOpenNewtab',
				'showRestartButton',
				'actionsChildren',
				'children',
				'className',
				'startRoute',
			]),
			b = Dd({ startRoute: m }),
			x = b.sandpack,
			$ = b.listen,
			y = b.iframe,
			Q = b.getClient,
			P = b.clientId,
			X = b.dispatch,
			M = C.useState(null),
			E = M[0],
			j = M[1],
			N = x.status,
			I = rx(P).refresh,
			q = Ja(P).restart,
			K = Pe()
		C.useEffect(() => {
			var J = $((me) => {
				me.type === 'resize' && j(me.height)
			})
			return J
		}, []),
			C.useImperativeHandle(e, () => ({ clientId: P, getClient: Q }), [Q, P])
		var oe = (J) => {
			y.current && (y.current.src = J)
		}
		return S.jsxs(
			fs,
			k({ className: K('preview', [p]) }, g, {
				children: [
					i && S.jsx(Xx, { clientId: P, onURLChange: oe, startRoute: m }),
					S.jsxs('div', {
						className: K('preview-container', [Mx]),
						children: [
							S.jsx('iframe', {
								ref: y,
								className: K('preview-iframe', [Ex]),
								style: { height: E || void 0 },
								title: 'Sandpack Preview',
							}),
							S.jsxs('div', {
								className: K('preview-actions', [_x]),
								children: [
									d,
									u && x.environment === 'node' && S.jsx(An, { onClick: q, children: S.jsx(us, {}) }),
									!i && s && N === 'running' && S.jsx(An, { onClick: I, children: S.jsx(Td, {}) }),
									x.teamId &&
										S.jsx('button', {
											className: K('button', [K('icon-standalone'), Le, It, gi]),
											onClick: () => X({ type: 'sign-out' }),
											title: 'Sign out',
											type: 'button',
											children: S.jsx(_y, {}),
										}),
									a && S.jsx(Vd, {}),
								],
							}),
							S.jsx(kx, { clientId: P, showOpenInCodeSandbox: a }),
							c && S.jsx(lx, {}),
							O,
						],
					}),
				],
			}),
		)
	}),
	oo
R(
	((oo = {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		position: 'relative',
		overflow: 'auto',
		minHeight: '160px',
		flex: 1,
	}),
	(oo['.'.concat(ie, '-stack')] = { height: '100%' }),
	oo),
)
R({
	justifyContent: 'space-between',
	borderBottom: '1px solid $colors$surface2',
	padding: '0 $space$2',
	fontFamily: '$font$mono',
	height: '$layout$headerHeight',
	minHeight: '$layout$headerHeight',
	overflowX: 'auto',
	whiteSpace: 'nowrap',
})
R({ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '$space$2' })
var ds = R({
	variants: {
		status: {
			pass: { color: 'var(--test-pass)' },
			fail: { color: 'var(--test-fail)' },
			skip: { color: 'var(--test-skip)' },
			title: { color: 'var(--test-title)' },
		},
	},
})
ds({ status: 'pass' })
ds({ status: 'fail' })
ds({ status: 'skip' })
ds({ status: 'title' })
var el = R({
	variants: {
		status: {
			pass: { background: 'var(--test-pass)', color: '$colors$surface1' },
			fail: { background: 'var(--test-fail)', color: '$colors$surface1' },
			run: { background: 'var(--test-run)', color: '$colors$surface1' },
		},
	},
})
el({ status: 'run' })
el({ status: 'pass' })
el({ status: 'fail' })
R({ marginLeft: '$space$4' })
R({ marginBottom: '$space$2', color: '$colors$clickable' })
R({ marginBottom: '$space$2', color: '$colors$hover' })
R({ marginLeft: '$space$2' })
R({ marginRight: '$space$2' })
R({ color: '$colors$hover', marginBottom: '$space$2' })
R({ marginLeft: '$space$4' })
R({ color: '$colors$hover', fontSize: '$font$size', padding: '$space$2', whiteSpace: 'pre-wrap' })
R({ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '$space$2' })
R({ marginBottom: '$space$2' })
R({ fontWeight: 'bold' })
R({ borderRadius: 'calc($border$radius / 2)' })
R({ padding: '$space$1 $space$2', fontFamily: '$font$mono', textTransform: 'uppercase', marginRight: '$space$2' })
R({ fontFamily: '$font$mono', cursor: 'pointer', display: 'inline-block' })
R({ color: '$colors$clickable', textDecorationStyle: 'dotted', textDecorationLine: 'underline' })
R({ color: '$colors$hover', fontWeight: 'bold', textDecorationStyle: 'dotted', textDecorationLine: 'underline' })
R({ marginBottom: '$space$2' })
R({ fontWeight: 'bold', color: '$colors$hover', whiteSpace: 'pre-wrap' })
R({ fontWeight: 'bold', color: '$colors$clickable' })
R({
	display: 'flex',
	position: 'absolute',
	bottom: '$space$2',
	right: '$space$2',
	zIndex: '$overlay',
	'> *': { marginLeft: '$space$2' },
})
R({
	padding: '$space$4',
	height: '100%',
	overflow: 'auto',
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',
	fontFamily: '$font$mono',
})
R({ fontWeight: 'bold', color: '$colors$base' })
var Ix = ['SyntaxError: ', 'Error in sandbox:'],
	Lx = { id: 'random', method: 'clear', data: ['Console was cleared'] },
	wh = '@t',
	$h = '#@t',
	Qh = '@r',
	kh = 1e4,
	Bd = 2,
	ua = 400,
	Dx = ua * 2,
	ao = (() => {
		if (typeof globalThis < 'u') return globalThis
		if (typeof window < 'u') return window
		if (typeof global < 'u') return global
		if (typeof self < 'u') return self
		throw Error('Unable to locate global object')
	})(),
	Wx = typeof ArrayBuffer == 'function',
	Yx = typeof Map == 'function',
	Nx = typeof Set == 'function',
	bn
;((n) => {
	;(n[(n.infinity = 0)] = 'infinity'),
		(n[(n.minusInfinity = 1)] = 'minusInfinity'),
		(n[(n.minusZero = 2)] = 'minusZero')
})(bn || (bn = {}))
var Ph = {
		Arithmetic: (n) => (n === bn.infinity ? 1 / 0 : n === bn.minusInfinity ? -1 / 0 : n === bn.minusZero ? -0 : n),
		HTMLElement: (n) => {
			var e = document.implementation.createHTMLDocument('sandbox')
			try {
				var t = e.createElement(n.tagName)
				t.innerHTML = n.innerHTML
				for (var i = 0, r = Object.keys(n.attributes); i < r.length; i++) {
					var s = r[i]
					try {
						t.setAttribute(s, n.attributes[s])
					} catch {}
				}
				return t
			} catch {
				return n
			}
		},
		Function: (n) => {
			var e = () => {}
			return (
				Object.defineProperty(e, 'toString', { value: () => 'function '.concat(n.name, '() {').concat(n.body, '}') }), e
			)
		},
		'[[NaN]]': () => Number.NaN,
		'[[undefined]]': () => {},
		'[[Date]]': (n) => {
			var e = new Date()
			return e.setTime(n), e
		},
		'[[RegExp]]': (n) => new RegExp(n.src, n.flags),
		'[[Error]]': (n) => {
			var e = ao[n.name] || Error,
				t = new e(n.message)
			return (t.stack = n.stack), t
		},
		'[[ArrayBuffer]]': (n) => {
			if (Wx) {
				var e = new ArrayBuffer(n.length),
					t = new Int8Array(e)
				return t.set(n), e
			}
			return n
		},
		'[[TypedArray]]': (n) => (typeof ao[n.ctorName] == 'function' ? new ao[n.ctorName](n.arr) : n.arr),
		'[[Map]]': (n) => {
			if (Yx) {
				for (var e = new Map(), t = 0; t < n.length; t += 2) e.set(n[t], n[t + 1])
				return e
			}
			for (var i = [], r = 0; r < n.length; r += 2) i.push([n[t], n[t + 1]])
			return i
		},
		'[[Set]]': (n) => {
			if (Nx) {
				for (var e = new Set(), t = 0; t < n.length; t++) e.add(n[t])
				return e
			}
			return n
		},
	},
	fa = (n) => {
		var e
		if (typeof n == 'string' || typeof n == 'number' || n === null) return n
		if (Array.isArray(n)) return n.map(fa)
		if (typeof n == 'object' && wh in n) {
			var t = n[wh],
				i = Ph[t]
			return i(n.data)
		}
		if (typeof n == 'object' && $h in n) {
			var t = n[$h],
				i = Ph[t]
			return i(n.data)
		}
		if (typeof n == 'object' && ((e = n.constructor) === null || e === void 0 ? void 0 : e.name) === 'NodeList') {
			var r = {}
			return (
				Object.entries(n).forEach((s) => {
					var o = s[0],
						a = s[1]
					r[o] = fa(a)
				}),
				r
			)
		}
		return n
	},
	Vx = (n, e, t) => {
		var i = n.reduce(
			(r, s, o) =>
				''
					.concat(r)
					.concat(o ? ', ' : '')
					.concat(jn(s, e, t)),
			'',
		)
		return '['.concat(i, ']')
	},
	Bx = (n, e, t) => {
		var i = n.constructor.name !== 'Object' ? ''.concat(n.constructor.name, ' ') : ''
		if (t > Bd) return i
		var r = Object.entries(n),
			s = Object.entries(n).reduce((o, a, l) => {
				var c = a[0],
					h = a[1],
					u = l === 0 ? '' : ', ',
					f =
						r.length > 10
							? `
  `
							: '',
					d = jn(h, e, t)
				return l === ua ? o + f + '...' : l > ua ? o : o + ''.concat(u).concat(f).concat(c, ': ') + d
			}, '')
		return ''
			.concat(i, '{ ')
			.concat(s)
			.concat(
				r.length > 10
					? `
`
					: ' ',
				'}',
			)
	},
	jn = (n, e, t) => {
		var i
		t === void 0 && (t = 0)
		try {
			var r = fa(n)
			if (Array.isArray(r)) return Vx(r, e, t + 1)
			switch (typeof r) {
				case 'string':
					return '"'.concat(r, '"').slice(0, kh)
				case 'number':
				case 'function':
				case 'symbol':
					return r.toString()
				case 'boolean':
					return String(r)
				case 'undefined':
					return 'undefined'
				default:
					if (r instanceof RegExp || r instanceof Error || r instanceof Date) return r.toString()
					if (r === null) return String(null)
					if (r instanceof HTMLElement) return r.outerHTML.slice(0, kh)
					if (Object.entries(r).length === 0) return '{}'
					if (Qh in r) {
						if (t > Bd) return 'Unable to print information'
						var s = e[r[Qh]]
						return jn(s, e, t + 1)
					}
					if (((i = r.constructor) === null || i === void 0 ? void 0 : i.name) === 'NodeList') {
						var o = r.length,
							a = new Array(o).fill(null).map((l, c) => jn(r[c], e))
						return 'NodeList('.concat(r.length, ')[').concat(a, ']')
					}
					return Bx(r, e, t + 1)
			}
		} catch {
			return 'Unable to print information'
		}
	},
	qx = (n) => {
		switch (n) {
			case 'warn':
				return 'warning'
			case 'clear':
				return 'clear'
			case 'error':
				return 'error'
			default:
				return 'info'
		}
	},
	ar,
	Gx = (n) => {
		var e = n.data,
			t = Pe()
		return S.jsx(S.Fragment, {
			children: e.map((i, r, s) => {
				var o = i.data,
					a = i.id,
					l = i.method
				return o && Array.isArray(o)
					? S.jsx(
							C.Fragment,
							{
								children: o.map((c, h) => {
									var u = s.slice(r, s.length)
									return S.jsx(
										'div',
										{
											className: t('console-item', [Ux({ variant: qx(l) })]),
											children: S.jsx(Ka, {
												code: l === 'clear' ? c : jn(c, u),
												fileType: 'js',
												initMode: 'user-visible',
												showReadOnly: !1,
												readOnly: !0,
												wrapContent: !0,
											}),
										},
										''.concat(a, '-').concat(h),
									)
								}),
							},
							a,
						)
					: null
			}),
		})
	},
	Ux = R(
		((ar = {
			width: '100%',
			padding: '$space$3 $space$2',
			fontSize: '.8em',
			position: 'relative',
			'&:not(:first-child):after': {
				content: '',
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				height: 1,
				background: '$colors$surface3',
			},
			'.sp-cm': { padding: 0 },
			'.cm-editor': { background: 'none' },
			'.cm-content': { padding: 0 },
		}),
		(ar['.'.concat(ie, '-pre-placeholder')] = { margin: '0 !important', fontSize: '1em' }),
		(ar.variants = {
			variant: {
				error: {
					color: '$colors$error',
					background: '$colors$errorSurface',
					'&:not(:first-child):after': { background: '$colors$error', opacity: 0.07 },
				},
				warning: {
					color: '$colors$warning',
					background: '$colors$warningSurface',
					'&:not(:first-child):after': { background: '$colors$warning', opacity: 0.07 },
				},
				clear: { fontStyle: 'italic' },
				info: {},
			},
		}),
		ar),
	),
	Fx = R({
		justifyContent: 'space-between',
		borderBottom: '1px solid $colors$surface2',
		padding: '0 $space$2',
		fontFamily: '$font$mono',
		height: '$layout$headerHeight',
		minHeight: '$layout$headerHeight',
		overflowX: 'auto',
		whiteSpace: 'nowrap',
	}),
	Th = R({ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '$space$2' }),
	Hx = (n) => {
		var e = n.currentTab,
			t = n.setCurrentTab,
			i = n.node,
			r = Pe(),
			s = r('console-header-button', [Le, gi, R({ padding: '$space$1 $space$3' })])
		return S.jsxs('div', {
			className: r('console-header', [Fx, Th]),
			children: [
				S.jsxs('p', {
					className: r('console-header-title', [
						R({
							lineHeight: 1,
							margin: 0,
							color: '$colors$base',
							fontSize: '$font$size',
							display: 'flex',
							alignItems: 'center',
							gap: '$space$2',
						}),
					]),
					children: [S.jsx(Ny, {}), S.jsx('span', { children: 'Terminal' })],
				}),
				i &&
					S.jsxs('div', {
						className: r('console-header-actions', [Th]),
						children: [
							S.jsx('button', {
								className: s,
								'data-active': e === 'server',
								onClick: () => t('server'),
								type: 'button',
								children: 'Server',
							}),
							S.jsx('button', {
								className: s,
								'data-active': e === 'client',
								onClick: () => t('client'),
								type: 'button',
								children: 'Client',
							}),
						],
					}),
			],
		})
	},
	Kx = (n) => {
		var e = n.clientId,
			t = n.maxMessageCount,
			i = t === void 0 ? Dx : t,
			r = n.showSyntaxError,
			s = r === void 0 ? !1 : r,
			o = n.resetOnPreviewRestart,
			a = o === void 0 ? !1 : o,
			l = C.useState([]),
			c = l[0],
			h = l[1],
			u = ye().listen
		return (
			C.useEffect(() => {
				var f = u((d) => {
					if (a && d.type === 'start') h([])
					else if (d.type === 'console' && d.codesandbox) {
						var O = Array.isArray(d.log) ? d.log : [d.log]
						if (
							O.find((v) => {
								var m = v.method
								return m === 'clear'
							})
						)
							return h([Lx])
						var p = s
							? O
							: O.filter((v) => {
									var m,
										g,
										b,
										x =
											(b =
												(g = (m = v?.data) === null || m === void 0 ? void 0 : m.filter) === null || g === void 0
													? void 0
													: g.call(m, ($) => {
															if (typeof $ != 'string') return !0
															var y = Ix.filter((Q) => $.startsWith(Q))
															return y.length === 0
														})) !== null && b !== void 0
												? b
												: []
									return x.length > 0
								})
						if (!p) return
						h((v) => {
							for (
								var m = Re(Re([], v, !0), p, !0).filter((g, b, x) => b === x.findIndex(($) => $.id === g.id));
								m.length > i;
							)
								m.shift()
							return m
						})
					}
				}, e)
				return f
			}, [s, i, e, a]),
			{ logs: c, reset: () => h([]) }
		)
	}
C.forwardRef((n, e) => {
	var t,
		i = n.showHeader,
		r = i === void 0 ? !0 : i,
		s = n.showSyntaxError,
		o = s === void 0 ? !1 : s,
		a = n.maxMessageCount,
		l = n.onLogsChange,
		c = n.className
	n.showSetupProgress
	var h = n.showResetConsoleButton,
		u = h === void 0 ? !0 : h,
		f = n.showRestartButton,
		d = f === void 0 ? !0 : f,
		O = n.resetOnPreviewRestart,
		p = O === void 0 ? !1 : O,
		v = n.actionsChildren,
		m = v === void 0 ? S.jsx(S.Fragment, {}) : v,
		g = n.standalone,
		b = g === void 0 ? !1 : g,
		x = $e(n, [
			'showHeader',
			'showSyntaxError',
			'maxMessageCount',
			'onLogsChange',
			'className',
			'showSetupProgress',
			'showResetConsoleButton',
			'showRestartButton',
			'resetOnPreviewRestart',
			'actionsChildren',
			'standalone',
		]),
		$ = ye().sandpack.environment,
		y = Dd(),
		Q = y.iframe,
		P = y.clientId,
		X = Ja().restart,
		M = C.useState($ === 'node' ? 'server' : 'client'),
		E = M[0],
		j = M[1],
		N = b ? P : void 0,
		I = Kx({ maxMessageCount: a, showSyntaxError: o, resetOnPreviewRestart: p, clientId: N }),
		q = I.logs,
		K = I.reset,
		oe = Yd({ maxMessageCount: a, resetOnPreviewRestart: p, clientId: N }),
		J = oe.logs,
		me = oe.reset,
		Ge = C.useRef(null)
	C.useEffect(() => {
		l?.(q), Ge.current && (Ge.current.scrollTop = Ge.current.scrollHeight)
	}, [l, q, J, E])
	var L = E === 'server',
		Z = $ === 'node'
	C.useImperativeHandle(e, () => ({
		reset: () => {
			K(), me()
		},
	}))
	var V = Pe()
	return S.jsxs(
		fs,
		k(
			{
				className: V('console', [
					R(
						((t = { height: '100%', background: '$surface1', iframe: { display: 'none' } }),
						(t['.'.concat(ie, '-bridge-frame')] = {
							display: 'block',
							border: 0,
							position: 'absolute',
							left: '$space$2',
							bottom: '$space$2',
							zIndex: '$top',
							height: 12,
							width: '30%',
							mixBlendMode: 'multiply',
							pointerEvents: 'none',
						}),
						t),
					),
					c,
				]),
			},
			x,
			{
				children: [
					r && Z && S.jsx(Hx, { currentTab: E, node: Z, setCurrentTab: j }),
					S.jsx('div', {
						ref: Ge,
						className: V('console-list', [R({ overflow: 'auto', scrollBehavior: 'smooth' })]),
						children: L ? S.jsx(Nd, { data: J }) : S.jsx(Gx, { data: q }),
					}),
					S.jsxs('div', {
						className: V('console-actions', [
							R({ position: 'absolute', bottom: '$space$2', right: '$space$2', display: 'flex', gap: '$space$2' }),
						]),
						children: [
							m,
							d &&
								L &&
								S.jsx(An, {
									onClick: () => {
										X(), K(), me()
									},
									children: S.jsx(us, {}),
								}),
							u &&
								S.jsx(An, {
									onClick: () => {
										E === 'client' ? K() : me()
									},
									children: S.jsx(Dy, {}),
								}),
						],
					}),
					b && S.jsxs(S.Fragment, { children: [S.jsx(Cx, { clientId: N }), S.jsx('iframe', { ref: Q })] }),
				],
			},
		),
	)
})
R({
	position: 'absolute',
	zIndex: '$top',
	variants: {
		direction: {
			vertical: { right: 0, left: 0, height: 10, cursor: 'ns-resize' },
			horizontal: { top: 0, bottom: 0, width: 10, cursor: 'ew-resize' },
		},
	},
	'@media screen and (max-width: 768px)': { display: 'none' },
})
R({
	position: 'relative',
	strong: {
		background: '$colors$clickable',
		color: '$colors$surface1',
		minWidth: 12,
		height: 12,
		padding: '0 2px',
		borderRadius: 12,
		fontSize: 8,
		lineHeight: '12px',
		position: 'absolute',
		top: 0,
		right: 0,
		fontWeight: 'normal',
	},
})
R({ width: '100%', overflow: 'hidden' })
R({
	flexDirection: 'row-reverse',
	'@media screen and (max-width: 768px)': { flexFlow: 'wrap-reverse !important', flexDirection: 'initial' },
})
function ow({ file: n = '/index.ts', template: e = 'vanilla-ts', files: t }) {
	return S.jsx('div', {
		className: 'not-prose my-6 w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700',
		children: S.jsx(XS, {
			template: e,
			files: t,
			options: { activeFile: n },
			children: S.jsxs(tx, { children: [S.jsx(JS, { showTabs: Object.keys(t).length > 1 }), S.jsx(zx, {})] }),
		}),
	})
}
export {
	bs as n,
	CO as a,
	fn as d,
	hl as S,
	iw as h,
	jO as f,
	MO as j,
	ow as k,
	Qi as e,
	Rh as i,
	RO as c,
	tw as _,
	XO as g,
	ZO as b,
}
