const obj: Record<string, string[]> = {}

/* Add noUncheckedIndexedAccess to true in tsconfig.ts */
if (!obj.foo) {
    obj.foo = []
}

obj.foo.push('bar')