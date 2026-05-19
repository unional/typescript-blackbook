import { S as Q } from './base-80a1f760.EHupSAwf.js'
import { a as $, b as ee, r as F, c as re, E as te, g as W, w as x, f as Z } from './consoleHook-59e792cb.BIRrJHnj.js'
import { a as _, n as D, b as E, c as H, e as k, _ as X } from './SandpackSnippet.DQkj9R0A.js'
var ne = Object.create,
	T = Object.defineProperty,
	ie = Object.getOwnPropertyDescriptor,
	V = Object.getOwnPropertyNames,
	se = Object.getPrototypeOf,
	oe = Object.prototype.hasOwnProperty,
	ae = (t, n, e) => (n in t ? T(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (t[n] = e)),
	P = (t, n) => () => (n || (0, t[V(t)[0]])((n = { exports: {} }).exports, n), n.exports),
	ce = (t, n, e, r) => {
		if ((n && typeof n == 'object') || typeof n == 'function')
			for (const s of V(n))
				!oe.call(t, s) && s !== e && T(t, s, { get: () => n[s], enumerable: !(r = ie(n, s)) || r.enumerable })
		return t
	},
	j = (t, n, e) => (
		(e = t != null ? ne(se(t)) : {}), ce(!t || !t.__esModule ? T(e, 'default', { value: t, enumerable: !0 }) : e, t)
	),
	de = (t, n, e) => (ae(t, n + '', e), e),
	R = (t, n, e) => {
		if (!n.has(t)) throw TypeError('Cannot ' + e)
	},
	g = (t, n, e) => (R(t, n, 'read from private field'), e ? e.call(t) : n.get(t)),
	M = (t, n, e) => {
		if (n.has(t)) throw TypeError('Cannot add the same private member more than once')
		n instanceof WeakSet ? n.add(t) : n.set(t, e)
	},
	O = (t, n, e, r) => (R(t, n, 'write to private field'), n.set(t, e), e),
	y = (t, n, e) => (R(t, n, 'access private method'), e),
	z = P({
		'../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js'(t, n) {
			n.exports = (r, s) => {
				var i = '000000000' + r
				return i.substr(i.length - s)
			}
		},
	}),
	le = P({
		'../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js'(t, n) {
			var e = z(),
				r = typeof window == 'object' ? window : self,
				s = Object.keys(r).length,
				i = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
				o = e((i + navigator.userAgent.length).toString(36) + s.toString(36), 4)
			n.exports = () => o
		},
	}),
	ue = P({
		'../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js'(t, n) {
			var e,
				r = (typeof window < 'u' && (window.crypto || window.msCrypto)) || (typeof self < 'u' && self.crypto)
			r ? ((s = 2 ** 32 - 1), (e = () => Math.abs(r.getRandomValues(new Uint32Array(1))[0] / s))) : (e = Math.random)
			var s
			n.exports = e
		},
	}),
	G = P({
		'../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js'(t, n) {
			var e = le(),
				r = z(),
				s = ue(),
				i = 0,
				o = 4,
				a = 36,
				d = a ** o
			function l() {
				return r(((s() * d) << 0).toString(a), o)
			}
			function h() {
				return (i = i < d ? i : 0), i++, i - 1
			}
			function p() {
				var m = 'c',
					v = new Date().getTime().toString(a),
					b = r(h().toString(a), o),
					c = e(),
					u = l() + l()
				return m + v + b + c + u
			}
			;(p.slug = () => {
				var v = new Date().getTime().toString(36),
					b = h().toString(36).slice(-4),
					c = e().slice(0, 1) + e().slice(-1),
					u = l().slice(-2)
				return v.slice(-2) + b + c + u
			}),
				(p.isCuid = (v) => (typeof v != 'string' ? !1 : !!v.startsWith('c'))),
				(p.isSlug = (v) => {
					if (typeof v != 'string') return !1
					var b = v.length
					return b >= 7 && b <= 10
				}),
				(p.fingerprint = e),
				(n.exports = p)
		},
	}),
	J = P({
		'../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js'(
			t,
		) {
			Object.defineProperty(t, '__esModule', { value: !0 }), (t.createDeferredExecutor = void 0)
			function n() {
				const e = (r, s) => {
					;(e.state = 'pending'),
						(e.resolve = (i) => {
							if (e.state !== 'pending') return
							e.result = i
							const o = (a) => ((e.state = 'fulfilled'), a)
							return r(i instanceof Promise ? i : Promise.resolve(i).then(o))
						}),
						(e.reject = (i) => {
							if (e.state === 'pending')
								return (
									queueMicrotask(() => {
										e.state = 'rejected'
									}),
									s((e.rejectionReason = i))
								)
						})
				}
				return e
			}
			t.createDeferredExecutor = n
		},
	}),
	he = P({
		'../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js'(
			t,
		) {
			Object.defineProperty(t, '__esModule', { value: !0 }), (t.DeferredPromise = void 0)
			var n = J(),
				e = class extends Promise {
					#e
					resolve
					reject
					constructor(r = null) {
						const s = (0, n.createDeferredExecutor)()
						super((i, o) => {
							s(i, o), r?.(s.resolve, s.reject)
						}),
							(this.#e = s),
							(this.resolve = this.#e.resolve),
							(this.reject = this.#e.reject)
					}
					get state() {
						return this.#e.state
					}
					get rejectionReason() {
						return this.#e.rejectionReason
					}
					then(r, s) {
						return this.#t(super.then(r, s))
					}
					catch(r) {
						return this.#t(super.catch(r))
					}
					finally(r) {
						return this.#t(super.finally(r))
					}
					#t(r) {
						return Object.defineProperties(r, {
							resolve: { configurable: !0, value: this.resolve },
							reject: { configurable: !0, value: this.reject },
						})
					}
				}
			t.DeferredPromise = e
		},
	}),
	U = P({
		'../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js'(
			t,
		) {
			var n =
					(t && t.__createBinding) ||
					(Object.create
						? (r, s, i, o) => {
								o === void 0 && (o = i)
								var a = Object.getOwnPropertyDescriptor(s, i)
								;(!a || ('get' in a ? !s.__esModule : a.writable || a.configurable)) &&
									(a = { enumerable: !0, get: () => s[i] }),
									Object.defineProperty(r, o, a)
							}
						: (r, s, i, o) => {
								o === void 0 && (o = i), (r[o] = s[i])
							}),
				e =
					(t && t.__exportStar) ||
					((r, s) => {
						for (var i in r) i !== 'default' && !Object.hasOwn(s, i) && n(s, r, i)
					})
			Object.defineProperty(t, '__esModule', { value: !0 }), e(J(), t), e(he(), t)
		},
	}),
	Y = P({
		'../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js'(t) {
			Object.defineProperty(t, '__esModule', { value: !0 }), (t.MemoryLeakError = void 0)
			var n = class extends Error {
				emitter
				type
				count
				constructor(e, r, s) {
					super(
						`Possible EventEmitter memory leak detected. ${s} ${r.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`,
					),
						(this.emitter = e),
						(this.type = r),
						(this.count = s),
						(this.name = 'MaxListenersExceededWarning')
				}
			}
			t.MemoryLeakError = n
		},
	}),
	fe = P({
		'../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js'(t) {
			Object.defineProperty(t, '__esModule', { value: !0 }), (t.Emitter = void 0)
			var n = Y(),
				e,
				r,
				s,
				i,
				o,
				a,
				d,
				l,
				h,
				p,
				m,
				v = class {
					constructor() {
						M(this, i),
							M(this, a),
							M(this, l),
							M(this, p),
							M(this, e, void 0),
							M(this, r, void 0),
							M(this, s, void 0),
							O(this, e, new Map()),
							O(this, r, v.defaultMaxListeners),
							O(this, s, !1)
					}
					static listenerCount(c, u) {
						return c.listenerCount(u)
					}
					setMaxListeners(c) {
						return O(this, r, c), this
					}
					getMaxListeners() {
						return g(this, r)
					}
					eventNames() {
						return Array.from(g(this, e).keys())
					}
					emit(c, ...u) {
						const f = y(this, i, o).call(this, c)
						return (
							f.forEach((I) => {
								I.apply(this, u)
							}),
							f.length > 0
						)
					}
					addListener(c, u) {
						y(this, p, m).call(this, 'newListener', c, u)
						const f = y(this, i, o).call(this, c).concat(u)
						if ((g(this, e).set(c, f), g(this, r) > 0 && this.listenerCount(c) > g(this, r) && !g(this, s))) {
							O(this, s, !0)
							const I = new n.MemoryLeakError(this, c, this.listenerCount(c))
							console.warn(I)
						}
						return this
					}
					on(c, u) {
						return this.addListener(c, u)
					}
					once(c, u) {
						return this.addListener(c, y(this, l, h).call(this, c, u))
					}
					prependListener(c, u) {
						const f = y(this, i, o).call(this, c)
						if (f.length > 0) {
							const I = [u].concat(f)
							g(this, e).set(c, I)
						} else g(this, e).set(c, f.concat(u))
						return this
					}
					prependOnceListener(c, u) {
						return this.prependListener(c, y(this, l, h).call(this, c, u))
					}
					removeListener(c, u) {
						const f = y(this, i, o).call(this, c)
						return (
							f.length > 0 &&
								(y(this, a, d).call(this, f, u),
								g(this, e).set(c, f),
								y(this, p, m).call(this, 'removeListener', c, u)),
							this
						)
					}
					off(c, u) {
						return this.removeListener(c, u)
					}
					removeAllListeners(c) {
						return c ? g(this, e).delete(c) : g(this, e).clear(), this
					}
					listeners(c) {
						return Array.from(y(this, i, o).call(this, c))
					}
					listenerCount(c) {
						return y(this, i, o).call(this, c).length
					}
					rawListeners(c) {
						return this.listeners(c)
					}
				},
				b = v
			;(e = new WeakMap()),
				(r = new WeakMap()),
				(s = new WeakMap()),
				(i = new WeakSet()),
				(o = function (c) {
					return g(this, e).get(c) || []
				}),
				(a = new WeakSet()),
				(d = (c, u) => {
					const f = c.indexOf(u)
					return f > -1 && c.splice(f, 1), []
				}),
				(l = new WeakSet()),
				(h = function (c, u) {
					const f = (...I) => {
						this.removeListener(c, f), u.apply(this, I)
					}
					return f
				}),
				(p = new WeakSet()),
				(m = function (c, u, f) {
					this.emit(c, u, f)
				}),
				de(b, 'defaultMaxListeners', 10),
				(t.Emitter = b)
		},
	}),
	pe = P({
		'../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js'(t) {
			var n =
					(t && t.__createBinding) ||
					(Object.create
						? (r, s, i, o) => {
								o === void 0 && (o = i)
								var a = Object.getOwnPropertyDescriptor(s, i)
								;(!a || ('get' in a ? !s.__esModule : a.writable || a.configurable)) &&
									(a = { enumerable: !0, get: () => s[i] }),
									Object.defineProperty(r, o, a)
							}
						: (r, s, i, o) => {
								o === void 0 && (o = i), (r[o] = s[i])
							}),
				e =
					(t && t.__exportStar) ||
					((r, s) => {
						for (var i in r) i !== 'default' && !Object.hasOwn(s, i) && n(s, r, i)
					})
			Object.defineProperty(t, '__esModule', { value: !0 }), e(fe(), t), e(Y(), t)
		},
	}),
	me = j(G()),
	ve = /(%?)(%([sdjo]))/g
function we(t, n) {
	switch (n) {
		case 's':
			return t
		case 'd':
		case 'i':
			return Number(t)
		case 'j':
			return JSON.stringify(t)
		case 'o': {
			if (typeof t == 'string') return t
			const e = JSON.stringify(t)
			return e === '{}' || e === '[]' || /^\[object .+?\]$/.test(e) ? t : e
		}
	}
}
function w(t, ...n) {
	if (n.length === 0) return t
	let e = 0,
		r = t.replace(ve, (s, i, o, a) => {
			const d = n[e],
				l = we(d, a)
			return i ? s : (e++, l)
		})
	return e < n.length && (r += ` ${n.slice(e).join(' ')}`), (r = r.replace(/%{2,2}/g, '%')), r
}
var ge = 2
function ye(t) {
	if (!t.stack) return
	const n = t.stack.split(`
`)
	n.splice(1, ge),
		(t.stack = n.join(`
`))
}
var _e = class extends Error {
		constructor(t, ...n) {
			super(t), (this.message = t), (this.name = 'Invariant Violation'), (this.message = w(t, ...n)), ye(this)
		}
	},
	S = (t, n, ...e) => {
		if (!t) throw new _e(n, ...e)
	}
S.as = (t, n, e, ...r) => {
	if (!n) throw t.prototype.name != null ? new t(w(e, r)) : t(w(e, r))
}
var A = j(U()),
	Ee = window.localStorage.CSB_EMULATOR_DEBUG,
	Pe = '\x1B[0m',
	be = '\x1B[32;1m',
	Se = '\x1B[31m',
	Le = '\x1B[34m',
	Ie = '\x1B[33;1m',
	Me = '\x1B[35;1m',
	B = '\x1B[36;1m',
	je = { preview: Ie, emulator: Me, runtime: B, bridge: Le, 'runtime:worker': B }
function K(t) {
	return (e, ...r) => {
		if (Ee === 'true') {
			const s = () => (e.includes('sender') ? `${be}sender` : e.includes('receiver') ? `${Se}receiver` : ''),
				i = e.replace(/\[.+\]:/, '')
			console.debug(`${je[t]}${t}:${s()}${Pe}:${i}`, ...r)
		}
	}
}
var L = K('emulator'),
	Oe = class {
		constructor(t) {
			;(this.target = t),
				(this.emitter = new EventTarget()),
				(this.channel = new MessageChannel()),
				(this.receiverPort = this.channel.port1)
			const n = new A.DeferredPromise(),
				e = (r) => {
					r.data.type === 'internal/ready' && (L('[message-sender]: runtime is ready'), n.resolve())
				}
			window.addEventListener('message', e),
				n.then(() => {
					window.removeEventListener('message', e)
				}),
				(this.receiverReadyPromise = n),
				(this.receiverPort.onmessage = (r) => {
					const s = r.data
					s.type != null &&
						(L('[message-sender]: emitting "%s" event...', s.type, s.payload),
						this.emitter.dispatchEvent(new MessageEvent(s.type, { data: s.payload })))
				})
		}
		emitter
		channel
		receiverPort
		receiverReadyPromise
		async handshake() {
			const t = new A.DeferredPromise()
			await this.receiverReadyPromise,
				L('[message-sender]: sending handshake'),
				this.target.postMessage({ type: 'internal/handshake' }, '*', [this.channel.port2]),
				this.on('internal/handshake/done', () => {
					t.resolve(), clearTimeout(n)
				})
			const n = setTimeout(() => {
				t.reject(new Error('MessageSender: Handshake timeout'))
			}, 5e3)
			return t
		}
		on(t, n, e) {
			L('[message-sender]: add listener "%s"', t),
				this.emitter.addEventListener(
					t,
					(r) => {
						r instanceof MessageEvent && n(r)
					},
					e,
				)
		}
		off(t, n, e) {
			this.emitter.removeEventListener(t, n, e)
		}
		async send(t, ...n) {
			const e = new A.DeferredPromise(),
				r = (0, me.default)(),
				s = n[0] || {}
			L('[message-sender]: send "%s" (%s)', t, r, s),
				this.receiverPort.postMessage({ type: t, payload: { operationId: r, payload: s } }),
				L('[message-sender]: adding done listener for "%s" (%s)', t, r)
			const i = (a) => {
					const { data: d } = a
					if (d.operationId === r) {
						const l = d.listenerPayload || {}
						L('[message-sender]: resolving "%s (%s) promise!', t, r), e.resolve({ ...l, operationId: d.operationId })
					}
				},
				o = (a) => {
					const { data: d } = a
					d.operationId === r && (L('[message-sender]: rejecting "%s (%s) promise!', t, r), e.reject(d.error))
				}
			return (
				this.on('internal/operation/done', i),
				this.on('internal/operation/failed', o),
				e.finally(() => {
					this.emitter.removeEventListener('internal/operation/done', i),
						this.emitter.removeEventListener('internal/operation/failed', o)
				})
			)
		}
	},
	N = j(U()),
	ke = j(G()),
	Ce = class {
		constructor(t) {
			this.channel = t
		}
		async init(t) {
			await this.channel.send('fs/init', { files: t })
		}
		async readFile(t, n) {
			const e = await this.channel.send('fs/readFile', { path: t, encoding: n }).catch((r) => {
				throw new Error(w('Failed to read file at path "%s"', t), { cause: r })
			})
			if (!e) throw new Error('File not found')
			return e.data
		}
		async writeFile(t, n, e) {
			let r,
				s = !1
			typeof e == 'object' ? ((r = e.encoding), (s = !!e.recursive)) : typeof e == 'string' && (r = e),
				await this.channel.send('fs/writeFile', { path: t, content: n, encoding: r, recursive: s }).catch((i) => {
					throw new Error(w('Failed to write file at path "%s"', t), { cause: i })
				})
		}
		async readdir(t) {
			const n = await this.channel.send('fs/readdir', { path: t }).catch((e) => {
				throw new Error(w('Failed to read directory at path "%s"', t), { cause: e })
			})
			if (!n) throw new Error('Directory not found')
			return n.data
		}
		async mkdir(t, n) {
			const e = !!n?.recursive
			await this.channel.send('fs/mkdir', { path: t, recursive: e }).catch((r) => {
				throw new Error(w('Failed to make directory at path "%s"', t), { cause: r })
			})
		}
		async stat(t) {
			const n = await this.channel.send('fs/stat', { path: t }).catch((e) => {
				throw new Error(w('Failed to stat file at path "%s"', t), { cause: e })
			})
			if (!n) throw new Error('File not found')
			return n.data
		}
		async rm(t, n) {
			const { force: e, recursive: r } = n || {}
			await this.channel.send('fs/rm', { path: t, force: e, recursive: r }).catch((s) => {
				throw new Error(w('Failed to remove file at path "%s"', t), { cause: s })
			})
		}
		async watch(t, n, e) {
			const r = (0, ke.default)()
			return (
				await this.channel.send('fs/watch', { watcherId: r, includes: t, excludes: n }),
				this.channel.on('fs/watch-event', ({ data: s }) => {
					if (s.watcherId === r && e) {
						const i = { ...s }
						delete i.watcherId, e(i)
					}
				}),
				{ dispose: () => this.channel.send('fs/unwatch', { watcherId: r }) }
			)
		}
	},
	q = j(pe()),
	Fe = class {
		constructor(t) {
			this.channel = t
		}
		create() {
			return new xe(this.channel)
		}
	},
	xe = class {
		constructor(t) {
			;(this.channel = t),
				(this.state = 'running'),
				(this.stdout = new q.Emitter()),
				(this.stderr = new q.Emitter()),
				(this.stdin = {
					write: (n) => {
						if (!this.id) throw new Error('Failed to write to stdin, no process is currently running')
						return this.channel.send('shell/stdin', { data: n, workerId: this.id })
					},
				}),
				this.forwardStdEvents()
		}
		id
		state
		stdout
		stderr
		stdin
		forwardStdEvents() {
			this.channel.on('worker/tty', (t) => {
				const { data: n } = t
				if (n.workerId === this.id)
					switch (n.payload.type) {
						case 'out': {
							this.stdout.emit('data', n.payload.data)
							break
						}
						case 'err': {
							this.stderr.emit('data', n.payload.data)
							break
						}
					}
			})
		}
		async runCommand(t, n, e = {}) {
			S(!this.id, 'Failed to run "runCommand" on a ShellProcess: there is already a process running.')
			const r = await this.channel.send('shell/runCommand', { command: t, args: n, options: e })
			return (
				S(r, 'Failed to run "runCommand" on a ShellProcess: was not able to retrieve a running process.'),
				(this.id = r.id),
				(this.state = 'running'),
				r
			)
		}
		async on(t, n) {
			switch (t) {
				case 'progress': {
					this.channel.on('worker/progress', ({ data: e }) => {
						n(e.status)
					})
					return
				}
				case 'exit': {
					this.channel.on('worker/exit', ({ data: e }) => {
						e.workerId === this.id && n(e.exitCode, e.error)
					})
					return
				}
			}
		}
		async kill() {
			S(this.id, 'Failed to run "kill" on a ShellProcess: there is no process running. Did you forget to run it?'),
				(this.state = 'idle'),
				await this.channel.send('shell/exit', { id: this.id }).catch((t) => {
					throw new Error(w('Failed to kill shell with ID "%s"', this.id), { cause: t })
				}),
				(this.id = void 0)
		}
	},
	Ae = j(U()),
	De = 2e4,
	Te = class {
		constructor(t) {
			this.channel = t
		}
		async waitFor(t, n, e = De) {
			const r = new Ae.DeferredPromise(),
				s = setTimeout(() => {
					r.reject()
				}, e),
				i = await this.channel.send('preview/get/info', t).catch((a) => {
					r.reject(
						new Error(w('Failed to look up preview information for shell ID "%s" (port: %d)', t.sourceShellId, t.port)),
					)
				}),
				o = i && n(i)
			return (
				o && r.resolve({ url: i.url, port: i.port, sourceShellId: i.sourceShellId }),
				this.channel.on('preview/port/ready', ({ data: a }) => {
					!o && n(a) && r.resolve({ url: a.url, port: a.port, sourceShellId: a.sourceShellId })
				}),
				r.finally(() => {
					clearTimeout(s)
				})
			)
		}
		async getByShellId(t, n) {
			return this.waitFor({ sourceShellId: t }, (e) => e.sourceShellId === t, n).catch((e) => {
				throw new Error(w('Failed to get shell by ID "%s"', t), { cause: e })
			})
		}
		async waitForPort(t, n) {
			return this.waitFor({ port: t }, (e) => e.port === t, n).catch((e) => {
				throw new Error(w('Failed to await port %d', t), { cause: e })
			})
		}
	},
	Re = 'https://nodebox-runtime.codesandbox.io',
	C = K('emulator'),
	Ue = class {
		constructor(t) {
			;(this.options = t),
				S(
					this.options.iframe,
					'Failed to create a Nodebox: expected "iframe" argument to be a reference to an <iframe> element but got %j',
					this.options.iframe,
				),
				(this.url = this.options.runtimeUrl || Re),
				(this.isConnected = !1)
		}
		channel = null
		isConnected
		url
		fileSystemApi = null
		shellApi = null
		previewApi = null
		async connect() {
			const { iframe: t, cdnUrl: n } = this.options
			C('[message-sender]: Connecting to node emulator...')
			const e = new N.DeferredPromise()
			this.url ||
				e.reject(
					new Error('Nodebox URL is missing. Did you forget to provide it when creating this Nodebox instance?'),
				),
				S(t.contentWindow, 'Failed to create a MessageChannel with the Nodebox iframe: no content window found'),
				(this.channel = new Oe(t.contentWindow))
			const r = new N.DeferredPromise()
			return (
				t.setAttribute('src', this.url),
				t.addEventListener(
					'load',
					() => {
						r.resolve()
					},
					{ once: !0 },
				),
				t.addEventListener(
					'error',
					(s) => {
						r.reject(s.error)
					},
					{ once: !0 },
				),
				await r,
				C('[message-sender]: IFrame loaded...'),
				await this.channel.handshake(),
				C('[message-sender]: Handshake completed...'),
				this.channel.send('connect', { cdnUrl: n }),
				this.channel.on('runtime/ready', () => {
					e.resolve()
				}),
				e.then(() => {
					C('[message-sender]: Connected to runtime...'), (this.isConnected = !0)
				})
			)
		}
		get fs() {
			return (
				S(
					this.isConnected,
					'Failed to access the File System API: consumer is not connected. Did you forget to run "connect()"?',
				),
				this.fileSystemApi ? this.fileSystemApi : ((this.fileSystemApi = new Ce(this.channel)), this.fileSystemApi)
			)
		}
		get shell() {
			return (
				S(
					this.isConnected,
					'Failed to access the Shell API: consumer is not connected. Did you forget to run "connect()"?',
				),
				this.shellApi ? this.shellApi : ((this.shellApi = new Fe(this.channel)), this.shellApi)
			)
		}
		get preview() {
			return (
				S(
					this.isConnected,
					'Failed to access the Preview API: consumer is not connected. Did you forget to run "connect()"?',
				),
				this.previewApi ? this.previewApi : ((this.previewApi = new Te(this.channel)), this.previewApi)
			)
		}
	},
	We = 'INJECT_AND_INVOKE',
	Be = 'PREVIEW_LOADED'
function Ne(t, n) {
	return _(this, void 0, void 0, function () {
		var e, r, s, i, o
		return E(
			this,
			(a) => (
				(e = t.contentWindow),
				D(e, 'Failed to await preview iframe: no content window found'),
				(r = 9e4),
				(s = 20),
				(i = 0),
				[
					2,
					new Promise((d, l) => {
						var h = () => {
							var p = () => {
								clearTimeout(o), (i = s), d(), t.removeEventListener('load', p)
							}
							if (i >= s) {
								l(H('Could not able to connect to preview.'))
								return
							}
							t.setAttribute('src', n),
								(o = setTimeout(() => {
									h(), t.removeEventListener('load', p)
								}, r)),
								(i = i + 1),
								t.addEventListener('load', p)
						}
						t.addEventListener('error', () => l(new Error('Iframe error'))),
							t.addEventListener('abort', () => l(new Error('Aborted'))),
							h()
					}),
				]
			),
		)
	})
}
var qe = (t, n) => {
	;(t.style.border = '0'),
		(t.style.width = n.width || '100%'),
		(t.style.height = n.height || '100%'),
		(t.style.overflow = 'hidden'),
		(t.allow = 'cross-origin-isolated')
}
function He(t) {
	var n = t.scope,
		e = window.history.__proto__,
		r = [],
		s = 0,
		i = (d) => {
			parent.postMessage(
				{ type: 'urlchange', url: d, back: s > 0, forward: s < r.length - 1, channelId: n.channelId },
				'*',
			)
		}
	function o(d, l) {
		r.splice(s + 1), r.push({ url: d, state: l }), (s = r.length - 1)
	}
	Object.assign(window.history, {
		go: (d) => {
			var l = s + d
			if (l >= 0 && l <= r.length - 1) {
				s = l
				var h = r[s],
					p = h.url,
					m = h.state
				e.replaceState.call(window.history, m, '', p)
				var v = document.location.href
				i(v), window.dispatchEvent(new PopStateEvent('popstate', { state: m }))
			}
		},
		back: () => {
			window.history.go(-1)
		},
		forward: () => {
			window.history.go(1)
		},
		pushState: (d, l, h) => {
			e.replaceState.call(window.history, d, l, h), o(h, d), i(document.location.href)
		},
		replaceState: (d, l, h) => {
			e.replaceState.call(window.history, d, l, h), (r[s] = { state: d, url: h }), i(document.location.href)
		},
	})
	function a(d) {
		var l = d.data
		l.type === 'urlback'
			? history.back()
			: l.type === 'urlforward'
				? history.forward()
				: l.type === 'refresh' && document.location.reload()
	}
	window.addEventListener('message', a)
}
function Ve(t) {
	var n = t.scope,
		e = 0
	function r() {
		if (typeof window > 'u') return 0
		var a = document.body,
			d = document.documentElement
		return Math.max(a.scrollHeight, a.offsetHeight, d.offsetHeight)
	}
	function s() {
		var a = r()
		e !== a && window.parent.postMessage({ type: 'resize', height: a, codesandbox: !0, channelId: n.channelId }, '*'),
			(e = a)
	}
	s()
	var i,
		o = new MutationObserver(() => {
			i === void 0 &&
				(s(),
				(i = setTimeout(() => {
					i = void 0
				}, 300)))
		})
	o.observe(document, { attributes: !0, childList: !0, subtree: !0 }), setInterval(s, 300)
}
var ze = [
		{ code: He.toString(), id: 'historyListener' },
		{
			code:
				'function consoleHook({ scope }) {' +
				re +
				`
};`,
			id: 'consoleHook',
		},
		{ code: Ve.toString(), id: 'watchResize' },
	],
	Ge = (t, n) => {
		ze.forEach((e) => {
			var r,
				s = e.code,
				i = e.id,
				o = { uid: i, type: We, code: 'exports.activate = '.concat(s), scope: { channelId: n } }
			;(r = t.contentWindow) === null || r === void 0 || r.postMessage(o, '*')
		})
	},
	Xe = ((t) => {
		X(n, t)
		function n(e, r, s) {
			s === void 0 && (s = {})
			var i = t.call(this, e, r, k(k({}, s), { bundlerURL: s.bundlerURL })) || this
			return (
				(i._modulesCache = new Map()),
				(i.messageChannelId = ee()),
				(i._initPromise = null),
				(i.emitter = new te()),
				i.manageIframes(e),
				(i.emulator = new Ue({ iframe: i.emulatorIframe, runtimeUrl: i.options.bundlerURL })),
				i.updateSandbox(r),
				i
			)
		}
		return (
			(n.prototype._init = function (e) {
				return _(this, void 0, void 0, function () {
					return E(this, function (r) {
						switch (r.label) {
							case 0:
								return [4, this.emulator.connect()]
							case 1:
								return r.sent(), [4, this.emulator.fs.init(e)]
							case 2:
								return r.sent(), [4, this.globalListeners()]
							case 3:
								return r.sent(), [2]
						}
					})
				})
			}),
			(n.prototype.compile = function (e) {
				return _(this, void 0, void 0, function () {
					var r, s
					return E(this, function (i) {
						switch (i.label) {
							case 0:
								return (
									i.trys.push([0, 5, , 6]),
									(this.status = 'initializing'),
									this.dispatch({ type: 'start', firstLoad: !0 }),
									this._initPromise || (this._initPromise = this._init(e)),
									[4, this._initPromise]
								)
							case 1:
								return i.sent(), this.dispatch({ type: 'connected' }), [4, this.createShellProcessFromTask(e)]
							case 2:
								return (r = i.sent().id), [4, this.createPreviewURLFromId(r)]
							case 3:
								return i.sent(), [4, this.setLocationURLIntoIFrame()]
							case 4:
								return i.sent(), this.dispatchDoneMessage(), [3, 6]
							case 5:
								return (
									(s = i.sent()),
									this.dispatch({ type: 'action', action: 'notification', notificationType: 'error', title: W(s) }),
									this.dispatch({ type: 'done', compilatonError: !0 }),
									[3, 6]
								)
							case 6:
								return [2]
						}
					})
				})
			}),
			(n.prototype.createShellProcessFromTask = function (e) {
				return _(this, void 0, void 0, function () {
					var r,
						s,
						i = this
					return E(this, function (o) {
						switch (o.label) {
							case 0:
								return (
									(r = F(e['/package.json'])),
									(this.emulatorCommand = Z(r)),
									(this.emulatorShellProcess = this.emulator.shell.create()),
									[
										4,
										this.emulatorShellProcess.on('exit', (a) => {
											i.dispatch({
												type: 'action',
												action: 'notification',
												notificationType: 'error',
												title: H('Error: process.exit('.concat(a, ') called.')),
											})
										}),
									]
								)
							case 1:
								return (
									o.sent(),
									[
										4,
										this.emulatorShellProcess.on('progress', (a) => {
											var d, l
											if (a.state === 'command_running' || a.state === 'starting_command') {
												i.dispatch({
													type: 'shell/progress',
													data: k(k({}, a), {
														command: [
															(d = i.emulatorCommand) === null || d === void 0 ? void 0 : d[0],
															(l = i.emulatorCommand) === null || l === void 0 ? void 0 : l[1].join(' '),
														].join(' '),
													}),
												}),
													(i.status = 'installing-dependencies')
												return
											}
											i.dispatch({ type: 'shell/progress', data: a })
										}),
									]
								)
							case 2:
								return (
									o.sent(),
									this.emulatorShellProcess.stdout.on('data', (a) => {
										i.dispatch({ type: 'stdout', payload: { data: a, type: 'out' } })
									}),
									this.emulatorShellProcess.stderr.on('data', (a) => {
										i.dispatch({ type: 'stdout', payload: { data: a, type: 'err' } })
									}),
									[4, (s = this.emulatorShellProcess).runCommand.apply(s, this.emulatorCommand)]
								)
							case 3:
								return [2, o.sent()]
						}
					})
				})
			}),
			(n.prototype.createPreviewURLFromId = function (e) {
				var r
				return _(this, void 0, void 0, function () {
					var s
					return E(this, function (i) {
						switch (i.label) {
							case 0:
								return (this.iframePreviewUrl = void 0), [4, this.emulator.preview.getByShellId(e)]
							case 1:
								return (
									(s = i.sent().url),
									(this.iframePreviewUrl = s + ((r = this.options.startRoute) !== null && r !== void 0 ? r : '')),
									[2]
								)
						}
					})
				})
			}),
			(n.prototype.manageIframes = function (e) {
				var r
				if (typeof e == 'string') {
					var s = document.querySelector(e)
					D(s, "The element '".concat(e, "' was not found")),
						(this.iframe = document.createElement('iframe')),
						s?.appendChild(this.iframe)
				} else this.iframe = e
				qe(this.iframe, this.options),
					D(this.iframe.parentNode, 'The given iframe does not have a parent.'),
					(this.emulatorIframe = document.createElement('iframe')),
					this.emulatorIframe.classList.add('sp-bridge-frame'),
					(r = this.iframe.parentNode) === null || r === void 0 || r.appendChild(this.emulatorIframe)
			}),
			(n.prototype.setLocationURLIntoIFrame = function () {
				return _(this, void 0, void 0, function () {
					return E(this, function (e) {
						switch (e.label) {
							case 0:
								return this.iframePreviewUrl ? [4, Ne(this.iframe, this.iframePreviewUrl)] : [3, 2]
							case 1:
								e.sent(), (e.label = 2)
							case 2:
								return [2]
						}
					})
				})
			}),
			(n.prototype.dispatchDoneMessage = function () {
				;(this.status = 'done'),
					this.dispatch({ type: 'done', compilatonError: !1 }),
					this.iframePreviewUrl &&
						this.dispatch({ type: 'urlchange', url: this.iframePreviewUrl, back: !1, forward: !1 })
			}),
			(n.prototype.globalListeners = function () {
				return _(this, void 0, void 0, function () {
					var e = this
					return E(this, function (r) {
						switch (r.label) {
							case 0:
								return (
									window.addEventListener('message', (s) => {
										s.data.type === Be && Ge(e.iframe, e.messageChannelId),
											s.data.type === 'urlchange' && s.data.channelId === e.messageChannelId
												? e.dispatch({ type: 'urlchange', url: s.data.url, back: s.data.back, forward: s.data.forward })
												: s.data.channelId === e.messageChannelId && e.dispatch(s.data)
									}),
									[
										4,
										this.emulator.fs.watch(
											['*'],
											['.next', 'node_modules', 'build', 'dist', 'vendor', '.config', '.vuepress'],
											(s) =>
												_(e, void 0, void 0, function () {
													var i, o, a, d, l, h, p
													return E(this, function (m) {
														switch (m.label) {
															case 0:
																return s
																	? ((i = s),
																		(o = 'newPath' in i ? i.newPath : 'path' in i ? i.path : ''),
																		[4, this.emulator.fs.stat(o)])
																	: [2]
															case 1:
																if (((a = m.sent().type), a !== 'file')) return [2, null]
																m.label = 2
															case 2:
																switch ((m.trys.push([2, 10, , 11]), (d = i.type), d)) {
																	case 'change':
																		return [3, 3]
																	case 'create':
																		return [3, 3]
																	case 'remove':
																		return [3, 5]
																	case 'rename':
																		return [3, 6]
																	case 'close':
																		return [3, 8]
																}
																return [3, 9]
															case 3:
																return [4, this.emulator.fs.readFile(i.path, 'utf8')]
															case 4:
																return (
																	(l = m.sent()),
																	this.dispatch({ type: 'fs/change', path: i.path, content: l }),
																	this._modulesCache.set(i.path, x(l)),
																	[3, 9]
																)
															case 5:
																return (
																	this.dispatch({ type: 'fs/remove', path: i.path }),
																	this._modulesCache.delete(i.path),
																	[3, 9]
																)
															case 6:
																return (
																	this.dispatch({ type: 'fs/remove', path: i.oldPath }),
																	this._modulesCache.delete(i.oldPath),
																	[4, this.emulator.fs.readFile(i.newPath, 'utf8')]
																)
															case 7:
																return (
																	(h = m.sent()),
																	this.dispatch({ type: 'fs/change', path: i.newPath, content: h }),
																	this._modulesCache.set(i.newPath, x(h)),
																	[3, 9]
																)
															case 8:
																return [3, 9]
															case 9:
																return [3, 11]
															case 10:
																return (
																	(p = m.sent()),
																	this.dispatch({
																		type: 'action',
																		action: 'notification',
																		notificationType: 'error',
																		title: W(p),
																	}),
																	[3, 11]
																)
															case 11:
																return [2]
														}
													})
												}),
										),
									]
								)
							case 1:
								return r.sent(), [2]
						}
					})
				})
			}),
			(n.prototype.restartShellProcess = function () {
				var e
				return _(this, void 0, void 0, function () {
					return E(this, function (r) {
						switch (r.label) {
							case 0:
								return this.emulatorShellProcess && this.emulatorCommand
									? (this.dispatch({ type: 'start', firstLoad: !0 }),
										(this.status = 'initializing'),
										[4, this.emulatorShellProcess.kill()])
									: [3, 3]
							case 1:
								return (
									r.sent(),
									(e = this.iframe) === null || e === void 0 || e.removeAttribute('attr'),
									this.emulator.fs.rm('/node_modules/.vite', { recursive: !0, force: !0 }),
									[4, this.compile(Object.fromEntries(this._modulesCache))]
								)
							case 2:
								r.sent(), (r.label = 3)
							case 3:
								return [2]
						}
					})
				})
			}),
			(n.prototype.updateSandbox = function (e) {
				var s,
					i = $(e.files)
				if (((s = this.emulatorShellProcess) === null || s === void 0 ? void 0 : s.state) === 'running') {
					Object.entries(i).forEach((o) => {
						var a = o[0],
							d = o[1]
						;(!this._modulesCache.get(a) || F(d) !== F(this._modulesCache.get(a))) &&
							this.emulator.fs.writeFile(a, d, { recursive: !0 })
					})
					return
				}
				this.dispatch({ codesandbox: !0, modules: i, template: e.template, type: 'compile' }),
					Object.entries(i).forEach((o) => {
						var a = o[0],
							d = o[1]
						this._modulesCache.set(a, x(d))
					})
			}),
			(n.prototype.dispatch = function (e) {
				var r, s
				return _(this, void 0, void 0, function () {
					var i
					return E(this, function (o) {
						switch (o.label) {
							case 0:
								switch (((i = e.type), i)) {
									case 'compile':
										return [3, 1]
									case 'refresh':
										return [3, 2]
									case 'urlback':
										return [3, 4]
									case 'urlforward':
										return [3, 4]
									case 'shell/restart':
										return [3, 5]
									case 'shell/openPreview':
										return [3, 6]
								}
								return [3, 7]
							case 1:
								return this.compile(e.modules), [3, 8]
							case 2:
								return [4, this.setLocationURLIntoIFrame()]
							case 3:
								return o.sent(), [3, 8]
							case 4:
								return (
									(s = (r = this.iframe) === null || r === void 0 ? void 0 : r.contentWindow) === null ||
										s === void 0 ||
										s.postMessage(e, '*'),
									[3, 8]
								)
							case 5:
								return this.restartShellProcess(), [3, 8]
							case 6:
								return window.open(this.iframePreviewUrl, '_blank'), [3, 8]
							case 7:
								this.emitter.dispatch(e), (o.label = 8)
							case 8:
								return [2]
						}
					})
				})
			}),
			(n.prototype.listen = function (e) {
				return this.emitter.listener(e)
			}),
			(n.prototype.destroy = function () {
				this.emulatorIframe.remove(), this.emitter.cleanup()
			}),
			n
		)
	})(Q)
export { Xe as SandpackNode }
