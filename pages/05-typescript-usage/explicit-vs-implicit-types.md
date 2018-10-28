# Explicit vs Implicit Types

One of the main benefit of TypeScript over vanilla JavaScript is its type system.
Does it mean you should type your argument, variables, and return value as much as possible?

While the TypeScript compiler option has flags such as `noImplicitAny` to encourage you to add more types,
I would suggest you to keep your explicit typings to a minimal.

We all know that there are pros and cons between statically typed language and dynamically typed language.

Statically typed language such as Java, C# and C++ provides better communication between API,
and better tooling support,
but they are typically takes more time to write program on it (compare to dynamically typed language).

Dynamically typed language such as Ruby, Python, and JavaScript are easy to use, quick to code,
but have to pay for the price of relying more on implicit communication of API and less support on tooling.
They have to rely on comments such as JSDoc or testing to communicate its API and behavior to the user.

The power of TypeScript is that its type system is a gradual type system.
You can omit it if you want, and you can add it in if you desire.
This place TypeScript in between statically typed and dynamically typed language and is able to benefit from both sides.

You should be using its type system as a communication tool to clarify your API,
and since TypeScript 2.0,
the control flow analysis is getting very good that many times it infers the right type for you.

Another way to use its type system is to help the TypeScript compiler when it cannot...
