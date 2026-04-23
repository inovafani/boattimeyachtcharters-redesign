(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Shared.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "Divider",
    ()=>Divider,
    "Eyebrow",
    ()=>Eyebrow,
    "Icon",
    ()=>Icon,
    "ItalicEm",
    ()=>ItalicEm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Eyebrow({ children, light, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `section-eyebrow ${className}`,
        style: light ? {
            color: 'var(--navy)'
        } : undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Shared.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Eyebrow;
function ItalicEm({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
        style: {
            fontStyle: 'italic',
            color: 'var(--gold-light)',
            fontWeight: 400
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Shared.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c1 = ItalicEm;
function Button({ variant = 'primary', children, onClick, href, small, type = 'button', className = '' }) {
    const cls = `btn btn-${variant}${small ? ' btn-sm' : ''} ${className}`;
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: cls,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/Shared.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: cls,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Shared.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c2 = Button;
function Icon({ name, size = 16, color = 'currentColor' }) {
    const paths = {
        anchor: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "5",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "22",
                    x2: "12",
                    y2: "8"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5 12H2a10 10 0 0 0 20 0h-3"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        chevron: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "9 18 15 12 9 6"
        }, void 0, false, {
            fileName: "[project]/components/Shared.tsx",
            lineNumber: 94,
            columnNumber: 14
        }, this),
        chevronDown: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "6 9 12 15 18 9"
        }, void 0, false, {
            fileName: "[project]/components/Shared.tsx",
            lineNumber: 95,
            columnNumber: 18
        }, this),
        arrow: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5 12h14"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 5l7 7-7 7"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        pin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        clock: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 6 12 12 16 14"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        users: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        instagram: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "2",
                    width: "20",
                    height: "20",
                    rx: "0"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17.5",
                    y1: "6.5",
                    x2: "17.5",
                    y2: "6.5"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        facebook: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        }, void 0, false, {
            fileName: "[project]/components/Shared.tsx",
            lineNumber: 130,
            columnNumber: 7
        }, this),
        mail: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "4",
                    width: "20",
                    height: "16",
                    rx: "0"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "2 6 12 13 22 6"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        phone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }, void 0, false, {
            fileName: "[project]/components/Shared.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this),
        plus: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        minus: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12"
        }, void 0, false, {
            fileName: "[project]/components/Shared.tsx",
            lineNumber: 147,
            columnNumber: 12
        }, this),
        waves: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 6c.6-.5 1.2-1 2.5-1C7 5 7 7 9.5 7s2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 12c.6-.5 1.2-1 2.5-1C7 11 7 13 9.5 13s2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 18c.6-.5 1.2-1 2.5-1C7 17 7 19 9.5 19s2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1"
                }, void 0, false, {
                    fileName: "[project]/components/Shared.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        sparkle: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
        }, void 0, false, {
            fileName: "[project]/components/Shared.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this),
        star: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "12 2 15.1 8.6 22 9.3 17 14.1 18.2 21 12 17.7 5.8 21 7 14.1 2 9.3 8.9 8.6"
        }, void 0, false, {
            fileName: "[project]/components/Shared.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: paths[name]
    }, void 0, false, {
        fileName: "[project]/components/Shared.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_c3 = Icon;
function Divider({ width = 60 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width,
            height: 1,
            background: 'var(--gold)',
            opacity: 0.6
        }
    }, void 0, false, {
        fileName: "[project]/components/Shared.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_c4 = Divider;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Eyebrow");
__turbopack_context__.k.register(_c1, "ItalicEm");
__turbopack_context__.k.register(_c2, "Button");
__turbopack_context__.k.register(_c3, "Icon");
__turbopack_context__.k.register(_c4, "Divider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const NAV_LINKS = [
    {
        label: 'Home',
        href: 'https://boattimeyachtcharters.com/'
    },
    {
        label: 'About BoatTime',
        href: 'https://boattimeyachtcharters.com/about-boat-time/'
    },
    {
        label: 'Cruise Tickets',
        href: 'https://boattimeyachtcharters.com/cruise-tickets/',
        menu: 'cruises',
        sub: [
            {
                label: 'Luxury Whale Watching',
                href: 'https://boattimeyachtcharters.com/cruise-tickets-luxury-whale-watching/'
            },
            {
                label: 'Broadwater Sunset Cruise',
                href: 'https://boattimeyachtcharters.com/luxury-broadwater-cruise/'
            },
            {
                label: 'NYE 2026',
                href: 'https://boattimeyachtcharters.com/nye-2026/'
            },
            {
                label: 'Luxury Valentines Cruise',
                href: 'https://boattimeyachtcharters.com/valentines-day/'
            },
            {
                label: 'Riverfire 2026',
                href: 'https://boattimeyachtcharters.com/riverfire-2026/'
            },
            {
                label: 'Relaxed Lunch Cruise',
                href: 'https://boattimeyachtcharters.com/relaxed-lunch-cruise-flavours-of-australia-aboard-the-mermaid-spirit/'
            },
            {
                label: 'Sunset Twilight Buffet',
                href: 'https://boattimeyachtcharters.com/sunset-twilight-buffet-flavours-of-australia-aboard-the-mermaid-spirit/'
            }
        ]
    },
    {
        label: 'Yacht Charters',
        href: 'https://boattimeyachtcharters.com/yacht-charters/',
        menu: 'charters',
        sub: [
            {
                label: 'Private Charter',
                href: 'https://boattimeyachtcharters.com/private-yacht-charter/'
            },
            {
                label: 'Corporate Yacht Charter',
                href: 'https://boattimeyachtcharters.com/corporate-yacht-charter/'
            },
            {
                label: 'Wedding Yacht Charter',
                href: 'https://boattimeyachtcharters.com/wedding-yacht-charter/'
            },
            {
                label: 'Catering',
                href: 'https://boattimeyachtcharters.com/yacht-charter-menus/'
            }
        ]
    },
    {
        label: 'Our Yachts',
        href: 'https://boattimeyachtcharters.com/our-yachts/',
        menu: 'yachts',
        alignRight: true,
        sub: [
            {
                label: 'Sun Goddess',
                href: 'https://boattimeyachtcharters.com/sun-goddess-gold-coast/'
            },
            {
                label: 'Mermaid Spirit',
                href: 'https://boattimeyachtcharters.com/mermaid-spirit-gold-coast/'
            }
        ]
    },
    {
        label: 'Boattime News',
        href: 'https://boattimeyachtcharters.com/boattime-news/'
    }
];
const CRUISE_META = [
    {
        desc: 'June – October · 4 hrs',
        img: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=60&q=80'
    },
    {
        desc: 'Year-round · 2.5 hrs',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=60&q=80'
    },
    {
        desc: 'Special event · 4 hrs',
        img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=60&q=80'
    },
    {
        desc: 'February · 3 hrs',
        img: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=60&q=80'
    },
    {
        desc: 'Special event · 4 hrs',
        img: 'https://images.unsplash.com/photo-1498354178607-a79df2916198?w=60&q=80'
    },
    {
        desc: 'Year-round · 3 hrs',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=60&q=80'
    },
    {
        desc: 'Year-round · 3.5 hrs',
        img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=60&q=80'
    }
];
const CHARTER_META = [
    {
        desc: 'Up to 135 guests on the Broadwater. Your afternoon, your brief.'
    },
    {
        desc: 'Client events, launches, team offsites. Dual bars throughout.'
    },
    {
        desc: 'Ceremony on the foredeck at golden hour. Three decks of celebration.'
    },
    {
        desc: 'Private Chefs of Brisbane. From grazing boards to fine dining.'
    }
];
// ── Mega menu: Cruise Tickets ─────────────────────────────────────────────────
function CruisesMenu({ sub }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            minWidth: 640
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 210,
                    flexShrink: 0,
                    position: 'relative',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=420&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.3) 60%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: 28,
                            left: 24,
                            right: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 8,
                                    letterSpacing: '0.38em',
                                    textTransform: 'uppercase',
                                    color: 'var(--gold)',
                                    marginBottom: 12
                                },
                                children: "Cruise Tickets"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'var(--font-display)',
                                    fontStyle: 'italic',
                                    fontSize: 22,
                                    color: 'var(--cream)',
                                    lineHeight: 1.15,
                                    marginBottom: 14
                                },
                                children: [
                                    "Seven routes.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 125,
                                        columnNumber: 26
                                    }, this),
                                    "One coastline."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://boattimeyachtcharters.com/cruise-tickets/",
                                style: {
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 9,
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    color: 'var(--gold)',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6
                                },
                                children: [
                                    "View all ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "arrow",
                                        size: 10,
                                        color: "var(--gold)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 142,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    padding: '6px 0'
                },
                children: sub.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: s.href,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 14,
                            padding: '9px 20px',
                            textDecoration: 'none'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = 'rgba(201,168,76,0.06)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = 'transparent';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 40,
                                    flexShrink: 0,
                                    backgroundImage: `url(${CRUISE_META[i]?.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    border: '1px solid rgba(201,168,76,0.2)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-body)',
                                            fontSize: 10.5,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: 'var(--cream)',
                                            fontWeight: 500,
                                            lineHeight: 1,
                                            marginBottom: 4
                                        },
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-body)',
                                            fontSize: 10,
                                            color: 'var(--text-muted)',
                                            letterSpacing: '0.06em'
                                        },
                                        children: CRUISE_META[i]?.desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c = CruisesMenu;
// ── Mega menu: Yacht Charters ─────────────────────────────────────────────────
function ChartersMenu({ sub }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minWidth: 500,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
            background: 'rgba(201,168,76,0.08)',
            padding: 1
        },
        children: sub.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: s.href,
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    padding: '22px 24px',
                    textDecoration: 'none',
                    background: 'var(--navy)',
                    transition: 'background 0.2s'
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.background = 'rgba(201,168,76,0.06)';
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.background = 'var(--navy)';
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 10,
                            letterSpacing: '0.28em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            fontWeight: 600
                        },
                        children: s.label
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 12,
                            color: 'rgba(245,240,232,0.6)',
                            lineHeight: 1.6
                        },
                        children: CHARTER_META[i]?.desc
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            fontFamily: 'var(--font-body)',
                            fontSize: 9,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            marginTop: 4
                        },
                        children: [
                            "Learn more ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "arrow",
                                size: 9,
                                color: "var(--gold)"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 274,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this)
                ]
            }, s.label, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_c1 = ChartersMenu;
// ── Mega menu: Our Yachts ─────────────────────────────────────────────────────
const YACHT_DATA = [
    {
        img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=500&q=80',
        spec: '34m · 135 guests',
        detail: 'Two decks · Dual bars · Sound throughout'
    },
    {
        img: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=500&q=80',
        spec: '30m · 100 guests',
        detail: "Tri-deck · Chef's kitchen · Sun lounge"
    }
];
function YachtsMenu({ sub }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minWidth: 540,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 2
        },
        children: sub.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: s.href,
                style: {
                    position: 'relative',
                    height: 230,
                    display: 'block',
                    textDecoration: 'none',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "will-change-transform",
                        style: {
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${YACHT_DATA[i].img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.55s ease'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.transform = 'scale(1.05)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.transform = 'scale(1)';
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.2) 55%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: 22,
                            left: 22,
                            right: 22
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'var(--font-display)',
                                    fontSize: 24,
                                    fontStyle: 'italic',
                                    color: 'var(--cream)',
                                    marginBottom: 6
                                },
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 9,
                                    letterSpacing: '0.22em',
                                    textTransform: 'uppercase',
                                    color: 'var(--gold)',
                                    marginBottom: 4
                                },
                                children: YACHT_DATA[i].spec
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 10,
                                    color: 'rgba(245,240,232,0.5)',
                                    letterSpacing: '0.05em'
                                },
                                children: YACHT_DATA[i].detail
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this)
                ]
            }, s.label, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 301,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
_c2 = YachtsMenu;
// ── NavItem ───────────────────────────────────────────────────────────────────
function NavItem({ label, href, sub, menu, alignRight }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasSub = !!sub;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavItem.useEffect": ()=>{
            if (!dropRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dropRef.current, {
                opacity: open ? 1 : 0,
                y: open ? 0 : 8,
                pointerEvents: open ? 'auto' : 'none',
                duration: 0.25,
                ease: 'power2.out'
            });
        }
    }["NavItem.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        onMouseEnter: ()=>setOpen(true),
        onMouseLeave: ()=>setOpen(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href ?? '#',
                className: "relative flex items-center gap-1.5 select-none",
                style: {
                    fontFamily: 'var(--font-body)',
                    fontSize: 10.5,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--cream)',
                    fontWeight: 500,
                    padding: '8px 0',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                },
                onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--gold)',
                onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--cream)',
                children: [
                    label,
                    hasSub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            opacity: 0.55
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "chevronDown",
                            size: 10
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 434,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            hasSub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dropRef,
                className: "absolute top-full",
                style: {
                    ...alignRight ? {
                        right: 0
                    } : {
                        left: 0
                    },
                    background: 'rgba(10,22,40,0.97)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(201,168,76,0.18)',
                    marginTop: 0,
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: 100,
                    overflow: 'hidden'
                },
                children: [
                    menu === 'cruises' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CruisesMenu, {
                        sub: sub
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 456,
                        columnNumber: 34
                    }, this),
                    menu === 'charters' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartersMenu, {
                        sub: sub
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 457,
                        columnNumber: 35
                    }, this),
                    menu === 'yachts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YachtsMenu, {
                        sub: sub
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 458,
                        columnNumber: 33
                    }, this),
                    !menu && sub.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: s.href,
                            className: "block",
                            style: {
                                padding: '10px 24px',
                                fontFamily: 'var(--font-body)',
                                fontSize: 11,
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: 'var(--cream)',
                                textDecoration: 'none',
                                fontWeight: 400,
                                minWidth: 240
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.color = 'var(--gold)';
                                e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.color = 'var(--cream)';
                                e.currentTarget.style.background = 'transparent';
                            },
                            children: s.label
                        }, s.label, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 461,
                            columnNumber: 15
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 440,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 409,
        columnNumber: 5
    }, this);
}
_s(NavItem, "fn/1FHRUa7O+vtPFBjoPQp/Plhc=");
_c3 = NavItem;
function Nav() {
    _s1();
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const onScroll = {
                "Nav.useEffect.onScroll": ()=>{
                    const isScrolled = window.scrollY > 40;
                    if (isScrolled !== scrolled) setScrolled(isScrolled);
                }
            }["Nav.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Nav.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], [
        scrolled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Nav.useGSAP": ()=>{
            if (!navRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(navRef.current, {
                background: scrolled ? 'rgba(10,22,40,0.97)' : 'transparent',
                backdropFilter: scrolled ? 'blur(14px)' : 'blur(0px)',
                borderBottomColor: scrolled ? 'rgba(201,168,76,0.14)' : 'transparent',
                paddingTop: scrolled ? 14 : 22,
                paddingBottom: scrolled ? 14 : 22,
                duration: 0.4,
                ease: 'power2.out'
            });
        }
    }["Nav.useGSAP"], {
        dependencies: [
            scrolled
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        className: "fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-transparent nav-bar",
        style: {
            paddingTop: 22,
            paddingBottom: 22,
            paddingLeft: 48,
            paddingRight: 48
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "flex items-center gap-3.5 no-underline",
                href: "https://boattimeyachtcharters.com/",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center",
                        style: {
                            width: 36,
                            height: 36,
                            border: '1px solid var(--gold)',
                            fontFamily: 'var(--font-display)',
                            fontStyle: 'italic',
                            fontSize: 18,
                            color: 'var(--gold)'
                        },
                        children: "B"
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 542,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 600,
                                    fontSize: 22,
                                    letterSpacing: '0.02em',
                                    lineHeight: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--gold)'
                                        },
                                        children: "Boat"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 566,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--cream)'
                                        },
                                        children: "Time"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 567,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 557,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 8,
                                    letterSpacing: '0.32em',
                                    textTransform: 'uppercase',
                                    color: 'var(--text-muted)',
                                    marginTop: 3,
                                    fontWeight: 500
                                },
                                children: "Yacht Charters"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 569,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex items-center gap-8",
                children: NAV_LINKS.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        label: n.label,
                        href: n.href,
                        sub: n.sub,
                        menu: n.menu,
                        alignRight: n.alignRight
                    }, n.label, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 588,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        small: true,
                        href: "https://boattimeyachtcharters.com/contact/",
                        className: "hidden md:inline-flex",
                        children: "Booking Enquiry"
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 601,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer",
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        "aria-label": "Toggle menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block w-6 h-px transition-all duration-300",
                                style: {
                                    background: 'var(--cream)',
                                    transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 615,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block w-6 h-px transition-all duration-300",
                                style: {
                                    background: 'var(--cream)',
                                    opacity: mobileOpen ? 0 : 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 622,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block w-6 h-px transition-all duration-300",
                                style: {
                                    background: 'var(--cream)',
                                    transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 626,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 610,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 600,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-0 right-0 md:hidden",
                style: {
                    background: 'rgba(10,22,40,0.98)',
                    backdropFilter: 'blur(14px)',
                    borderBottom: '1px solid rgba(201,168,76,0.14)',
                    padding: '24px',
                    maxHeight: '80vh',
                    overflowY: 'auto'
                },
                children: [
                    NAV_LINKS.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: n.href ?? '#',
                                    className: "block py-3 border-b",
                                    style: {
                                        fontFamily: 'var(--font-body)',
                                        fontSize: 12,
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                        color: 'var(--cream)',
                                        textDecoration: 'none',
                                        borderBottomColor: 'rgba(201,168,76,0.1)'
                                    },
                                    children: n.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 651,
                                    columnNumber: 15
                                }, this),
                                n.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        paddingLeft: 16,
                                        paddingBottom: 8
                                    },
                                    children: n.sub.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: s.href,
                                            className: "block py-2",
                                            style: {
                                                fontFamily: 'var(--font-body)',
                                                fontSize: 11,
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                color: 'var(--text-muted)',
                                                textDecoration: 'none'
                                            },
                                            children: s.label
                                        }, s.label, false, {
                                            fileName: "[project]/components/Nav.tsx",
                                            lineNumber: 669,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 667,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, n.label, true, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 650,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "primary",
                            href: "https://boattimeyachtcharters.com/contact/",
                            small: true,
                            children: "Booking Enquiry"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 690,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 689,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 638,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 527,
        columnNumber: 5
    }, this);
}
_s1(Nav, "QxDDTPqSJYvMroeOs5hDfw3fPX8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c4 = Nav;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CruisesMenu");
__turbopack_context__.k.register(_c1, "ChartersMenu");
__turbopack_context__.k.register(_c2, "YachtsMenu");
__turbopack_context__.k.register(_c3, "NavItem");
__turbopack_context__.k.register(_c4, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
function Hero() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eyebrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subtitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const btnsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const badgeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollCueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollLineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Hero.useGSAP": ()=>{
            // 1. Ken Burns on background
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(bgRef.current, {
                scale: 1.08
            }, {
                scale: 1,
                duration: 14,
                ease: 'none'
            });
            // 2. Orchestrated load sequence
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                delay: 0.15
            });
            tl.from(eyebrowRef.current, {
                y: 18,
                opacity: 0,
                duration: 0.7,
                ease: 'power2.out'
            }).from([
                line1Ref.current,
                line2Ref.current,
                line3Ref.current
            ], {
                y: '105%',
                opacity: 0,
                duration: 1,
                stagger: 0.12,
                ease: 'power3.out'
            }, '-=0.35').from(subtitleRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.5').from(btnsRef.current, {
                y: 18,
                opacity: 0,
                duration: 0.7,
                ease: 'power2.out'
            }, '-=0.45').from(badgeRef.current, {
                x: 30,
                opacity: 0,
                duration: 0.7,
                ease: 'power2.out'
            }, '-=0.6').from(scrollCueRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.3');
            // 3. Scroll cue line pulse loop
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(scrollLineRef.current, {
                scaleY: 0.4,
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut',
                yoyo: true,
                repeat: -1,
                delay: 2
            });
            // 4. Parallax on scroll
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(bgRef.current, {
                yPercent: 28,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
            // 5. Subtle content lift on scroll
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to([
                eyebrowRef.current,
                line1Ref.current,
                line2Ref.current,
                line3Ref.current,
                subtitleRef.current,
                btnsRef.current
            ], {
                yPercent: -18,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    }["Hero.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative overflow-hidden flex items-center",
        style: {
            height: '100vh',
            minHeight: 720,
            background: 'var(--navy)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bgRef,
                className: "absolute inset-0 will-change-transform",
                style: {
                    backgroundImage: 'url(https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=2000&q=85)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 40%'
                }
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'linear-gradient(to right, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.45) 55%, rgba(10,22,40,0.25) 100%), linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.1) 45%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 bottom-0",
                style: {
                    height: 100,
                    background: 'linear-gradient(to top, var(--navy), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: badgeRef,
                className: "absolute z-10 hero-rating-badge",
                style: {
                    top: 120,
                    right: 48,
                    padding: '14px 22px',
                    border: '1px solid rgba(201,168,76,0.4)',
                    background: 'rgba(10,22,40,0.55)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 500
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "star",
                        size: 11,
                        color: "var(--gold)"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    "4.9 · 3,900+ guest reviews"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full hero-content",
                style: {
                    paddingLeft: 48,
                    paddingRight: 48,
                    paddingTop: 80,
                    maxWidth: 1200
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: eyebrowRef,
                        className: "section-eyebrow",
                        style: {
                            marginBottom: 28
                        },
                        children: "Superyacht Charters — Gold Coast & Brisbane"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: 'var(--font-display)',
                            fontWeight: 300,
                            fontSize: 'clamp(56px, 8vw, 120px)',
                            lineHeight: 0.96,
                            letterSpacing: '-0.02em',
                            color: 'var(--cream)',
                            margin: '0 0 28px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    ref: line1Ref,
                                    style: {
                                        display: 'block'
                                    },
                                    children: "Luxury"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    ref: line2Ref,
                                    style: {
                                        display: 'block',
                                        fontStyle: 'italic',
                                        color: 'var(--gold-light)'
                                    },
                                    children: "on the water,"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    ref: line3Ref,
                                    style: {
                                        display: 'block'
                                    },
                                    children: "unforgettable."
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: subtitleRef,
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 15,
                            fontWeight: 300,
                            color: 'rgba(245,240,232,0.82)',
                            maxWidth: 500,
                            lineHeight: 1.75,
                            margin: '0 0 44px'
                        },
                        children: "Yacht Hire, Luxury Sunset and Whale Watching Cruises Gold Coast"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: btnsRef,
                        className: "flex gap-4 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                href: "#cruises",
                                children: "Sunset Cruises"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                href: "#inquiry",
                                children: "Whale Watching"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 hidden md:block",
                style: {
                    bottom: 40,
                    right: 48,
                    border: '1px solid rgba(201,168,76,0.3)',
                    background: 'rgba(10,22,40,0.65)',
                    backdropFilter: 'blur(8px)',
                    padding: '20px 28px',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: 'var(--gold)',
                            fontSize: 15,
                            letterSpacing: 3,
                            marginBottom: 4
                        },
                        children: "★★★★★"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-display)',
                            fontSize: 24,
                            fontWeight: 600,
                            color: 'var(--cream)'
                        },
                        children: "3,900+"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 9,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                            marginTop: 2
                        },
                        children: "5-Star Reviews"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(Hero, "g0B9y1HGTp9NqbT5TT6nui4mPjc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StatsBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const STATS = [
    {
        eyebrow: 'Est. 2014',
        value: 12,
        suffix: 'yr',
        label: 'On the water',
        isFloat: false
    },
    {
        eyebrow: 'The fleet',
        value: 2,
        suffix: null,
        label: 'Luxury superyachts',
        isFloat: false
    },
    {
        eyebrow: 'Guest capacity',
        value: 135,
        suffix: null,
        label: 'Maximum pax',
        isFloat: false
    },
    {
        eyebrow: 'Rating',
        value: 4.9,
        suffix: null,
        label: 'From 3,900 reviews',
        isFloat: true
    }
];
function StatsBar() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "StatsBar.useGSAP": ()=>{
            const numbers = sectionRef.current.querySelectorAll('.stat-number');
            numbers.forEach({
                "StatsBar.useGSAP": (el, i)=>{
                    const target = STATS[i].value;
                    const isFloat = STATS[i].isFloat;
                    const obj = {
                        val: 0
                    };
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(obj, {
                        val: target,
                        duration: 2.2,
                        ease: 'power2.out',
                        onUpdate () {
                            el.textContent = isFloat ? obj.val.toFixed(1) : Math.round(obj.val).toString();
                        },
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 90%',
                            once: true
                        }
                    });
                }
            }["StatsBar.useGSAP"]);
            // Stagger items in
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(sectionRef.current.querySelectorAll('.stat-item'), {
                y: 30,
                opacity: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 90%',
                    once: true
                }
            });
        }
    }["StatsBar.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        style: {
            background: 'var(--gold)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid stats-grid",
            style: {
                gridTemplateColumns: 'repeat(4, 1fr)',
                maxWidth: 1200,
                margin: '0 auto'
            },
            children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stat-item",
                    style: {
                        padding: '52px 40px',
                        borderRight: i < 3 ? '1px solid rgba(10,22,40,0.15)' : 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: 'var(--font-body)',
                                fontSize: 13,
                                letterSpacing: '0.22em',
                                textTransform: 'uppercase',
                                color: 'var(--navy)',
                                opacity: 0.75,
                                fontWeight: 600
                            },
                            children: s.eyebrow
                        }, void 0, false, {
                            fileName: "[project]/components/StatsBar.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: 'var(--font-display)',
                                fontWeight: 300,
                                fontSize: 'clamp(52px, 5vw, 76px)',
                                color: 'var(--navy)',
                                lineHeight: 1,
                                letterSpacing: '-0.02em',
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: 3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "stat-number",
                                    children: s.value
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsBar.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                s.suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontStyle: 'italic',
                                        fontSize: '0.52em',
                                        color: 'var(--navy)',
                                        opacity: 0.8
                                    },
                                    children: s.suffix
                                }, void 0, false, {
                                    fileName: "[project]/components/StatsBar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StatsBar.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: 'var(--font-body)',
                                fontSize: 10,
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                color: 'var(--navy)',
                                opacity: 0.65,
                                fontWeight: 500
                            },
                            children: s.label
                        }, void 0, false, {
                            fileName: "[project]/components/StatsBar.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/StatsBar.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/StatsBar.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/StatsBar.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(StatsBar, "mpOs1qQcCKpcFvuTT9MC8POvKRs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = StatsBar;
var _c;
__turbopack_context__.k.register(_c, "StatsBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Cruises.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cruises
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const CRUISES = [
    {
        cat: 'Whale Season',
        title: 'Luxury whale',
        em: 'watching',
        body: 'Meet the humpbacks from the foredeck of Sun Goddess. Breach season June through October.',
        dur: '4 hrs',
        vessel: 'Sun Goddess',
        lg: true,
        col: 'span 7',
        row: 'span 2',
        img: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1400&q=80'
    },
    {
        cat: 'Sunset',
        title: 'Broadwater',
        em: 'sunset cruise',
        body: null,
        dur: '2.5 hrs',
        vessel: 'Sun Goddess',
        col: 'span 5',
        row: 'span 2',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80'
    },
    {
        cat: 'Galley',
        title: 'Relaxed',
        em: 'lunch cruise',
        body: null,
        dur: '3 hrs',
        vessel: 'Mermaid Spirit',
        col: 'span 4',
        row: 'span 2',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80'
    },
    {
        cat: 'Event',
        title: 'Riverfire',
        em: '2026',
        body: null,
        dur: '4 hrs',
        vessel: 'Mermaid Spirit',
        col: 'span 5',
        row: 'span 2',
        img: 'https://images.unsplash.com/photo-1498354178607-a79df2916198?w=1200&q=80'
    },
    {
        cat: 'Celebration',
        title: "New Year's",
        em: 'Eve 2026',
        body: null,
        dur: '5 hrs',
        vessel: 'Mermaid Spirit',
        col: 'span 3',
        row: 'span 2',
        img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1000&q=80'
    },
    {
        cat: 'Romance',
        title: "Valentine's",
        em: 'evening',
        body: null,
        dur: '3 hrs',
        vessel: 'Mermaid Spirit',
        col: 'span 4',
        row: 'span 2',
        img: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&q=80'
    },
    {
        cat: 'Dining',
        title: 'Sunset twilight',
        em: 'buffet',
        body: null,
        dur: '3.5 hrs',
        vessel: 'Mermaid Spirit',
        col: 'span 8',
        row: 'span 2',
        img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80'
    }
];
function CruiseCard({ c }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const descRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const linkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "CruiseCard.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imgRef.current, {
                scale: hovered ? 1.06 : 1,
                duration: 0.75,
                ease: 'power2.out'
            });
            if (descRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(descRef.current, {
                    opacity: hovered ? 1 : 0,
                    y: hovered ? 0 : 8,
                    duration: 0.35,
                    ease: 'power2.out'
                });
            }
            if (linkRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(linkRef.current, {
                    opacity: hovered ? 1 : 0,
                    y: hovered ? 0 : 6,
                    duration: 0.35,
                    delay: hovered ? 0.05 : 0,
                    ease: 'power2.out'
                });
            }
        }
    }["CruiseCard.useGSAP"], {
        dependencies: [
            hovered
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden cursor-pointer cruise-card-inner",
        style: {
            gridColumn: c.col,
            gridRow: c.row,
            background: 'var(--ocean)',
            minHeight: c.lg ? 480 : 'auto'
        },
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: imgRef,
                className: "absolute inset-0 will-change-transform",
                style: {
                    backgroundImage: `url(${c.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }
            }, void 0, false, {
                fileName: "[project]/components/Cruises.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.2) 55%, rgba(10,22,40,0.05) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/Cruises.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    left: c.lg ? 40 : 28,
                    right: c.lg ? 40 : 28,
                    bottom: c.lg ? 36 : 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 9,
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            fontWeight: 500,
                            marginBottom: 12
                        },
                        children: c.cat
                    }, void 0, false, {
                        fileName: "[project]/components/Cruises.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-display)',
                            fontWeight: 400,
                            fontSize: c.lg ? 42 : 26,
                            color: 'var(--cream)',
                            lineHeight: 1.1,
                            marginBottom: 10,
                            letterSpacing: '-0.01em'
                        },
                        children: [
                            c.title,
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontStyle: 'italic',
                                    color: 'var(--gold-light)'
                                },
                                children: c.em
                            }, void 0, false, {
                                fileName: "[project]/components/Cruises.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Cruises.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    c.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: descRef,
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 13,
                            color: 'rgba(245,240,232,0.78)',
                            lineHeight: 1.65,
                            marginBottom: 14,
                            maxWidth: 380,
                            opacity: 0
                        },
                        children: c.body
                    }, void 0, false, {
                        fileName: "[project]/components/Cruises.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 16,
                            flexWrap: 'wrap',
                            fontFamily: 'var(--font-body)',
                            fontSize: 9,
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            fontWeight: 500,
                            marginBottom: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "clock",
                                        size: 10,
                                        color: "var(--gold)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Cruises.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    c.dur
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Cruises.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "anchor",
                                        size: 10,
                                        color: "var(--gold)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Cruises.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    c.vessel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Cruises.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Cruises.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        ref: linkRef,
                        href: "#",
                        className: "flex items-center gap-2",
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 10,
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            fontWeight: 600,
                            textDecoration: 'none',
                            opacity: 0
                        },
                        children: [
                            "View Experience ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "arrow",
                                size: 11,
                                color: "var(--gold)"
                            }, void 0, false, {
                                fileName: "[project]/components/Cruises.tsx",
                                lineNumber: 256,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Cruises.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Cruises.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Cruises.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(CruiseCard, "NJxqtNeLvyAWwFWCW1curQL9TFI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = CruiseCard;
function Cruises() {
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Cruises.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(headerRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 85%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(sectionRef.current.querySelectorAll('.cruise-card-wrap'), {
                y: 60,
                opacity: 0,
                duration: 0.85,
                stagger: 0.08,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true
                }
            });
        }
    }["Cruises.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        id: "cruises",
        className: "cruises-section",
        style: {
            padding: '110px 0',
            background: 'var(--navy)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                style: {
                    textAlign: 'center',
                    maxWidth: 780,
                    margin: '0 auto 72px',
                    padding: '0 48px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                        children: "Cruise Tickets"
                    }, void 0, false, {
                        fileName: "[project]/components/Cruises.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'var(--font-display)',
                            fontWeight: 300,
                            fontSize: 'clamp(40px, 5vw, 64px)',
                            lineHeight: 1.05,
                            letterSpacing: '-0.015em'
                        },
                        children: [
                            "Choose your ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                                children: "afternoon"
                            }, void 0, false, {
                                fileName: "[project]/components/Cruises.tsx",
                                lineNumber: 323,
                                columnNumber: 23
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Cruises.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 15,
                            color: 'var(--text-muted)',
                            marginTop: 22,
                            lineHeight: 1.75
                        },
                        children: "Seven scheduled cruises running year-round from Marina Mirage — from whale season mornings to New Year’s Eve across three decks."
                    }, void 0, false, {
                        fileName: "[project]/components/Cruises.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Cruises.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cruise-mosaic",
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gridAutoRows: '200px',
                    gap: 2,
                    maxWidth: 1440,
                    margin: '0 auto',
                    padding: '0 48px'
                },
                children: CRUISES.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cruise-card-wrap",
                        style: {
                            gridColumn: c.col,
                            gridRow: c.row
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CruiseCard, {
                            c: c
                        }, void 0, false, {
                            fileName: "[project]/components/Cruises.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/Cruises.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Cruises.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Cruises.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s1(Cruises, "fzP6b8L1xiA4BT9dqqAeVLIVjcc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = Cruises;
var _c, _c1;
__turbopack_context__.k.register(_c, "CruiseCard");
__turbopack_context__.k.register(_c1, "Cruises");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Fleet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fleet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const YACHTS = [
    {
        eyebrow: '34m · 110ft Superyacht',
        name: 'Sun Goddess',
        emWord: 'Goddess',
        body: 'Sleek, stylish, unmistakable on the Broadwater. Dual bars, two decks, a dual-level galley, and sound throughout — room to breathe without giving up a thing.',
        specs: [
            [
                'Guests',
                '135'
            ],
            [
                'Length',
                '34m'
            ],
            [
                'Decks',
                'Two'
            ]
        ],
        img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1400&q=80'
    },
    {
        eyebrow: '30m · 100ft Tri-Deck',
        name: 'Mermaid Spirit',
        emWord: 'Spirit',
        body: 'A tri-deck catamaran built for functions and celebrations. Three decks, a chef\'s kitchen, sun lounge, dual bars — the ultimate entertaining venue on the coast.',
        specs: [
            [
                'Guests',
                '100'
            ],
            [
                'Length',
                '30m'
            ],
            [
                'Decks',
                'Three'
            ]
        ],
        img: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=1400&q=80'
    }
];
function YachtCard({ y, index }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "YachtCard.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imgRef.current, {
                scale: hovered ? 1.05 : 1,
                duration: 0.8,
                ease: 'power2.out'
            });
        }
    }["YachtCard.useGSAP"], {
        dependencies: [
            hovered
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "relative overflow-hidden cursor-pointer",
        style: {
            aspectRatio: '4/5',
            background: 'var(--ocean)'
        },
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: imgRef,
                className: "absolute inset-0 will-change-transform",
                style: {
                    backgroundImage: `url(${y.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }
            }, void 0, false, {
                fileName: "[project]/components/Fleet.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'linear-gradient(to top, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.5) 45%, rgba(10,22,40,0.15) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/Fleet.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    top: 40,
                    right: 44,
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 100,
                    fontWeight: 300,
                    color: 'rgba(201,168,76,0.12)',
                    lineHeight: 1,
                    userSelect: 'none'
                },
                children: [
                    "0",
                    index + 1
                ]
            }, void 0, true, {
                fileName: "[project]/components/Fleet.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    left: 44,
                    right: 44,
                    bottom: 44
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 10,
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            fontWeight: 500,
                            marginBottom: 14
                        },
                        children: y.eyebrow
                    }, void 0, false, {
                        fileName: "[project]/components/Fleet.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-display)',
                            fontWeight: 400,
                            fontSize: 'clamp(38px, 4vw, 54px)',
                            color: 'var(--cream)',
                            lineHeight: 1,
                            marginBottom: 18,
                            letterSpacing: '-0.015em'
                        },
                        children: [
                            y.name.replace(y.emWord, '').trim(),
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontStyle: 'italic',
                                    color: 'var(--gold-light)'
                                },
                                children: y.emWord
                            }, void 0, false, {
                                fileName: "[project]/components/Fleet.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Fleet.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 13.5,
                            color: 'rgba(245,240,232,0.78)',
                            lineHeight: 1.7,
                            marginBottom: 24,
                            maxWidth: 400
                        },
                        children: y.body
                    }, void 0, false, {
                        fileName: "[project]/components/Fleet.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, auto)',
                            gap: 32,
                            paddingTop: 20,
                            borderTop: '1px solid rgba(201,168,76,0.28)',
                            marginBottom: 28
                        },
                        children: y.specs.map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-body)',
                                            fontSize: 9,
                                            letterSpacing: '0.28em',
                                            textTransform: 'uppercase',
                                            color: 'var(--gold)',
                                            fontWeight: 500
                                        },
                                        children: k
                                    }, void 0, false, {
                                        fileName: "[project]/components/Fleet.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-display)',
                                            fontSize: 24,
                                            color: 'var(--cream)',
                                            fontWeight: 400
                                        },
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/components/Fleet.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, k, true, {
                                fileName: "[project]/components/Fleet.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Fleet.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "inline-flex items-center gap-3",
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 10,
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            fontWeight: 600,
                            textDecoration: 'none'
                        },
                        children: [
                            "Step aboard ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "arrow",
                                size: 12,
                                color: "var(--gold)"
                            }, void 0, false, {
                                fileName: "[project]/components/Fleet.tsx",
                                lineNumber: 192,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Fleet.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Fleet.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Fleet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(YachtCard, "iMWz2h5QM+IVOspp+j4CxqhYsf0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = YachtCard;
function Fleet() {
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const card1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const card2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Fleet.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(headerRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 85%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(card1Ref.current, {
                x: -60,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card1Ref.current,
                    start: 'top 85%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(card2Ref.current, {
                x: 60,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card2Ref.current,
                    start: 'top 85%',
                    once: true
                }
            });
        }
    }["Fleet.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        id: "fleet",
        className: "fleet-section",
        style: {
            padding: '110px 48px',
            background: 'var(--navy-mid)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1440,
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: headerRef,
                    style: {
                        textAlign: 'center',
                        maxWidth: 780,
                        margin: '0 auto 64px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                            children: "Our Yachts"
                        }, void 0, false, {
                            fileName: "[project]/components/Fleet.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: 'var(--font-display)',
                                fontWeight: 300,
                                fontSize: 'clamp(40px, 5vw, 64px)',
                                lineHeight: 1.05,
                                letterSpacing: '-0.015em'
                            },
                            children: [
                                "Two superyachts. ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                                    children: "One"
                                }, void 0, false, {
                                    fileName: "[project]/components/Fleet.tsx",
                                    lineNumber: 265,
                                    columnNumber: 30
                                }, this),
                                " unhurried coastline."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Fleet.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: 'var(--font-body)',
                                fontSize: 15,
                                color: 'var(--text-muted)',
                                marginTop: 22,
                                lineHeight: 1.75
                            },
                            children: "Sun Goddess for head-turning arrivals. Mermaid Spirit for three decks of celebration. Both berthed at Marina Mirage, ready for your afternoon."
                        }, void 0, false, {
                            fileName: "[project]/components/Fleet.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Fleet.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid fleet-grid",
                    style: {
                        gridTemplateColumns: '1fr 1fr',
                        gap: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: card1Ref,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YachtCard, {
                                y: YACHTS[0],
                                index: 0
                            }, void 0, false, {
                                fileName: "[project]/components/Fleet.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Fleet.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: card2Ref,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YachtCard, {
                                y: YACHTS[1],
                                index: 1
                            }, void 0, false, {
                                fileName: "[project]/components/Fleet.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Fleet.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Fleet.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Fleet.tsx",
            lineNumber: 253,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Fleet.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_s1(Fleet, "8EDGzDspKqxGqewUtRXQxE1h55U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = Fleet;
var _c, _c1;
__turbopack_context__.k.register(_c, "YachtCard");
__turbopack_context__.k.register(_c1, "Fleet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Charters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Charters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const CHARTERS = [
    {
        index: '01',
        eyebrow: 'Private',
        title: 'Your',
        em: 'afternoon',
        body: 'Up to 135 guests. Half-day or full-day on the Broadwater. BBQ, watersports, a swim stop at Wavebreak.',
        img: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80'
    },
    {
        index: '02',
        eyebrow: 'Corporate',
        title: 'Your',
        em: 'function',
        body: 'Client events, team offsites, product launches. Dual bars, sound throughout, curated catering.',
        img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80'
    },
    {
        index: '03',
        eyebrow: 'Weddings',
        title: 'Your',
        em: 'ceremony',
        body: 'Ceremony on the foredeck, reception across three decks. Florals, celebrant, and the line the captain reads.',
        img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80'
    },
    {
        index: '04',
        eyebrow: 'Galley',
        title: 'Your',
        em: 'menu',
        body: 'Grazing boards, canapés, gourmet BBQ, fine dining. Curated with Private Chefs of Brisbane.',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80'
    }
];
function CharterCard({ c }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "CharterCard.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imgRef.current, {
                scale: hovered ? 1.06 : 1,
                duration: 0.75,
                ease: 'power2.out'
            });
        }
    }["CharterCard.useGSAP"], {
        dependencies: [
            hovered
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden cursor-pointer",
        style: {
            minHeight: 440,
            aspectRatio: '3/4',
            background: 'var(--ocean)'
        },
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: imgRef,
                className: "absolute inset-0 will-change-transform",
                style: {
                    backgroundImage: `url(${c.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }
            }, void 0, false, {
                fileName: "[project]/components/Charters.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.4) 55%, rgba(10,22,40,0.15) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/Charters.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    top: 22,
                    right: 26,
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 18,
                    color: 'var(--gold)',
                    fontWeight: 300,
                    letterSpacing: '0.08em',
                    opacity: 0.9
                },
                children: c.index
            }, void 0, false, {
                fileName: "[project]/components/Charters.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    left: 28,
                    right: 28,
                    bottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 9,
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            fontWeight: 500,
                            marginBottom: 14
                        },
                        children: c.eyebrow
                    }, void 0, false, {
                        fileName: "[project]/components/Charters.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-display)',
                            fontWeight: 400,
                            fontSize: 30,
                            color: 'var(--cream)',
                            lineHeight: 1.1,
                            marginBottom: 14,
                            letterSpacing: '-0.01em'
                        },
                        children: [
                            c.title,
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontStyle: 'italic',
                                    color: 'var(--gold-light)'
                                },
                                children: c.em
                            }, void 0, false, {
                                fileName: "[project]/components/Charters.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Charters.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 13,
                            color: 'rgba(245,240,232,0.78)',
                            lineHeight: 1.65,
                            marginBottom: 22
                        },
                        children: c.body
                    }, void 0, false, {
                        fileName: "[project]/components/Charters.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#inquiry",
                        className: "inline-flex items-center gap-2.5",
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 10,
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            fontWeight: 600,
                            textDecoration: 'none'
                        },
                        children: [
                            "Enquire ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "arrow",
                                size: 11,
                                color: "var(--gold)"
                            }, void 0, false, {
                                fileName: "[project]/components/Charters.tsx",
                                lineNumber: 164,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Charters.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Charters.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Charters.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(CharterCard, "X3sZ34lna/3MKrFuANLws5AiMNc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = CharterCard;
function Charters() {
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Charters.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(headerRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 85%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(sectionRef.current.querySelectorAll('.charter-card-wrap'), {
                y: 60,
                opacity: 0,
                duration: 0.85,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true
                }
            });
        }
    }["Charters.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "charters-section",
        style: {
            padding: '110px 48px',
            maxWidth: 1440,
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                style: {
                    textAlign: 'center',
                    maxWidth: 780,
                    margin: '0 auto 64px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                        children: "Yacht Charters"
                    }, void 0, false, {
                        fileName: "[project]/components/Charters.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'var(--font-display)',
                            fontWeight: 300,
                            fontSize: 'clamp(40px, 5vw, 64px)',
                            lineHeight: 1.05,
                            letterSpacing: '-0.015em'
                        },
                        children: [
                            "Tailored for ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                                children: "every occasion"
                            }, void 0, false, {
                                fileName: "[project]/components/Charters.tsx",
                                lineNumber: 222,
                                columnNumber: 24
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Charters.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 15,
                            color: 'var(--text-muted)',
                            marginTop: 22,
                            lineHeight: 1.75
                        },
                        children: "From intimate sunset proposals to full-vessel corporate events — every charter is bespoke, every afternoon written to your brief."
                    }, void 0, false, {
                        fileName: "[project]/components/Charters.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Charters.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid",
                style: {
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 2
                },
                children: CHARTERS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "charter-card-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharterCard, {
                            c: c
                        }, void 0, false, {
                            fileName: "[project]/components/Charters.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    }, c.index, false, {
                        fileName: "[project]/components/Charters.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Charters.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Charters.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s1(Charters, "fzP6b8L1xiA4BT9dqqAeVLIVjcc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = Charters;
var _c, _c1;
__turbopack_context__.k.register(_c, "CharterCard");
__turbopack_context__.k.register(_c1, "Charters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const REVIEWS = [
    {
        quote: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Hands down the best whale watching in south east Queensland. Informative without overwhelming — we watched them ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                    children: "breach"
                }, void 0, false, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 16,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0)),
                " several times. Unforgettable."
            ]
        }, void 0, true),
        name: 'Gleyn Hernandez',
        source: 'Google · Whale Watching',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80'
    },
    {
        quote: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "An amazing experience visiting from England. Never imagined I’d see so many whales and a pod of ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                    children: "dolphins"
                }, void 0, false, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 28,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0)),
                ". The crew made us feel genuinely welcome."
            ]
        }, void 0, true),
        name: 'Alex',
        source: 'Google · Whale Watching',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80'
    },
    {
        quote: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "My grandchildren were so excited. The crew were incredibly knowledgeable. Five stars all round — a ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                    children: "perfect day"
                }, void 0, false, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 40,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0)),
                " out for the whole family."
            ]
        }, void 0, true),
        name: 'Linda Bernhardt',
        source: 'Google · Family Charter',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80'
    },
    {
        quote: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Booked for my wife’s birthday and it exceeded every expectation. The",
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                    children: "sunset over the Broadwater"
                }, void 0, false, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                " was otherworldly. Worth every cent."
            ]
        }, void 0, true),
        name: 'James Nguyen',
        source: 'Google · Sunset Cruise',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80'
    },
    {
        quote: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "We used Sun Goddess for our company Christmas party — 80 guests, three decks,",
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                    children: "completely seamless"
                }, void 0, false, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                ". The catering team were exceptional."
            ]
        }, void 0, true),
        name: 'Sarah Mitchell',
        source: 'Google · Corporate Charter',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80'
    },
    {
        quote: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Got married on the foredeck at golden hour. The crew made the whole day feel",
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                    children: "completely effortless"
                }, void 0, false, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                ". Every single guest still talks about it."
            ]
        }, void 0, true),
        name: 'Emily & Tom Barker',
        source: 'Google · Wedding Charter',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80'
    },
    {
        quote: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "We saw over 20 humpbacks including a full breach ten metres from the bow.",
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                    children: "Absolutely breathtaking."
                }, void 0, false, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                "Best day on the water I’ve had."
            ]
        }, void 0, true),
        name: 'Robert Svensson',
        source: 'Google · Whale Watching',
        photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=120&q=80'
    },
    {
        quote: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Hired for grandfather’s 80th — three generations on deck. The crew treated everyone like ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                    children: "absolute royalty"
                }, void 0, false, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 95,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0)),
                ". A perfect afternoon."
            ]
        }, void 0, true),
        name: 'Diane Kowalski',
        source: 'Google · Private Charter',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=80'
    },
    {
        quote: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Visiting from the UK and chose this on a whim — best decision of the trip. The",
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                    children: "Broadwater at sunset"
                }, void 0, false, {
                    fileName: "[project]/components/Reviews.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                " is something I will never forget."
            ]
        }, void 0, true),
        name: 'Marcus Webb',
        source: 'Google · Sunset Cruise',
        photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&q=80'
    }
];
const RATINGS = [
    {
        score: '5.0',
        label: 'Facebook · 2,047 reviews'
    },
    {
        score: '4.7',
        label: 'Google · 1,863 reviews'
    },
    {
        score: '12yr',
        label: 'On the water'
    }
];
const PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(REVIEWS.length / PER_PAGE);
function Stars() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-1 mb-6",
        children: [
            0,
            1,
            2,
            3,
            4
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: "star",
                size: 12,
                color: "var(--gold)"
            }, i, false, {
                fileName: "[project]/components/Reviews.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Reviews.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c = Stars;
const navBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: 'var(--font-body)',
    fontSize: 10,
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'var(--gold)',
    fontWeight: 600,
    background: 'transparent',
    border: '1px solid rgba(201,168,76,0.3)',
    padding: '12px 22px',
    cursor: 'pointer',
    transition: 'border-color 0.2s'
};
function Reviews() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ratingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isFirstRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [locked, setLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const goToPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Reviews.useCallback[goToPage]": (target)=>{
            if (locked || target === page) return;
            setLocked(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cardsRef.current, {
                opacity: 0,
                y: 16,
                duration: 0.2,
                ease: 'power2.in',
                onComplete: {
                    "Reviews.useCallback[goToPage]": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(cardsRef.current, {
                            opacity: 0,
                            y: -20
                        });
                        setPage(target);
                    }
                }["Reviews.useCallback[goToPage]"]
            });
        }
    }["Reviews.useCallback[goToPage]"], [
        locked,
        page
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Reviews.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(headerRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 85%',
                    once: true
                }
            });
            const ratingEls = ratingsRef.current.querySelectorAll('.rating-number');
            ratingEls.forEach({
                "Reviews.useGSAP": (el)=>{
                    const text = el.dataset.value ?? '';
                    const numericPart = parseFloat(text);
                    if (isNaN(numericPart)) return;
                    const isYr = text.includes('yr');
                    const obj = {
                        val: 0
                    };
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(obj, {
                        val: numericPart,
                        duration: 2,
                        ease: 'power2.out',
                        onUpdate () {
                            el.textContent = isYr ? `${Math.round(obj.val)}yr` : obj.val.toFixed(1);
                        },
                        scrollTrigger: {
                            trigger: ratingsRef.current,
                            start: 'top 85%',
                            once: true
                        }
                    });
                }
            }["Reviews.useGSAP"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(ratingsRef.current.querySelectorAll('.rating-item'), {
                y: 20,
                opacity: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: ratingsRef.current,
                    start: 'top 85%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(cardsRef.current, {
                y: 60,
                opacity: 0,
                duration: 0.85,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 78%',
                    once: true
                }
            });
        }
    }["Reviews.useGSAP"], {
        scope: sectionRef
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Reviews.useGSAP": ()=>{
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(cardsRef.current, {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: 'power2.out',
                onComplete: {
                    "Reviews.useGSAP": ()=>setLocked(false)
                }["Reviews.useGSAP"]
            });
        }
    }["Reviews.useGSAP"], {
        dependencies: [
            page
        ]
    });
    const visible = REVIEWS.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "relative overflow-hidden reviews-section",
        style: {
            padding: '110px 48px',
            background: 'var(--navy-mid)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'radial-gradient(ellipse at 90% 20%, rgba(201,168,76,0.07), transparent 55%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/Reviews.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: '0 auto',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headerRef,
                        style: {
                            textAlign: 'center',
                            maxWidth: 720,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                children: "Guest Book"
                            }, void 0, false, {
                                fileName: "[project]/components/Reviews.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 300,
                                    fontSize: 'clamp(36px, 5vw, 60px)',
                                    lineHeight: 1.05,
                                    letterSpacing: '-0.015em'
                                },
                                children: [
                                    "What our guests ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                                        children: "say about us"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Reviews.tsx",
                                        lineNumber: 278,
                                        columnNumber: 29
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Reviews.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Reviews.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ratingsRef,
                        className: "flex justify-center ratings-row",
                        style: {
                            gap: 64,
                            marginTop: 36,
                            marginBottom: 72,
                            paddingTop: 36,
                            borderTop: '1px solid rgba(201,168,76,0.18)'
                        },
                        children: RATINGS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rating-item text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rating-number",
                                        "data-value": r.score,
                                        style: {
                                            fontFamily: 'var(--font-display)',
                                            fontSize: 40,
                                            fontWeight: 300,
                                            color: 'var(--gold)',
                                            lineHeight: 1
                                        },
                                        children: r.score
                                    }, void 0, false, {
                                        fileName: "[project]/components/Reviews.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-body)',
                                            fontSize: 10,
                                            letterSpacing: '0.28em',
                                            textTransform: 'uppercase',
                                            color: 'var(--text-muted)',
                                            fontWeight: 500,
                                            marginTop: 8
                                        },
                                        children: r.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Reviews.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, r.label, true, {
                                fileName: "[project]/components/Reviews.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Reviews.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: cardsRef,
                        className: "grid reviews-grid",
                        style: {
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 2,
                            background: 'rgba(201,168,76,0.1)',
                            border: '1px solid rgba(201,168,76,0.1)'
                        },
                        children: visible.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                style: {
                                    padding: '48px 36px',
                                    background: 'var(--navy-mid)',
                                    minHeight: 320
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stars, {}, void 0, false, {
                                        fileName: "[project]/components/Reviews.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-display)',
                                            fontSize: 19,
                                            fontWeight: 300,
                                            color: 'var(--cream)',
                                            lineHeight: 1.5,
                                            letterSpacing: '-0.005em',
                                            marginBottom: 28,
                                            flex: 1
                                        },
                                        children: [
                                            "“",
                                            r.quote,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Reviews.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3.5",
                                        style: {
                                            paddingTop: 24,
                                            borderTop: '1px solid rgba(201,168,76,0.15)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                style: {
                                                    width: 44,
                                                    height: 44,
                                                    border: '1px solid rgba(201,168,76,0.3)',
                                                    backgroundImage: `url(${r.photo})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reviews.tsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: 'var(--font-body)',
                                                            fontSize: 12,
                                                            color: 'var(--cream)',
                                                            fontWeight: 500,
                                                            letterSpacing: '0.04em'
                                                        },
                                                        children: r.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Reviews.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: 'var(--font-body)',
                                                            fontSize: 9,
                                                            letterSpacing: '0.25em',
                                                            textTransform: 'uppercase',
                                                            color: 'var(--text-muted)',
                                                            marginTop: 2,
                                                            fontWeight: 500
                                                        },
                                                        children: r.source
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Reviews.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Reviews.tsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Reviews.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `${page}-${i}`, true, {
                                fileName: "[project]/components/Reviews.tsx",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Reviews.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        style: {
                            marginTop: 40
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: navBtnStyle,
                                onClick: ()=>goToPage((page - 1 + TOTAL_PAGES) % TOTAL_PAGES),
                                onMouseEnter: (e)=>e.currentTarget.style.borderColor = 'var(--gold)',
                                onMouseLeave: (e)=>e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            transform: 'rotate(180deg)',
                                            display: 'inline-flex'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "arrow",
                                            size: 11,
                                            color: "var(--gold)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Reviews.tsx",
                                            lineNumber: 423,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Reviews.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this),
                                    "Previous"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Reviews.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: Array.from({
                                    length: TOTAL_PAGES
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>goToPage(i),
                                        style: {
                                            width: i === page ? 32 : 8,
                                            height: 2,
                                            background: i === page ? 'var(--gold)' : 'rgba(201,168,76,0.3)',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: 0,
                                            transition: 'all 0.35s ease'
                                        }
                                    }, i, false, {
                                        fileName: "[project]/components/Reviews.tsx",
                                        lineNumber: 430,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Reviews.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: navBtnStyle,
                                onClick: ()=>goToPage((page + 1) % TOTAL_PAGES),
                                onMouseEnter: (e)=>e.currentTarget.style.borderColor = 'var(--gold)',
                                onMouseLeave: (e)=>e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)',
                                children: [
                                    "Next",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "arrow",
                                        size: 11,
                                        color: "var(--gold)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Reviews.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Reviews.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Reviews.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Reviews.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Reviews.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
_s(Reviews, "3GNwE/ISP3FkyeV59IT2ZtoAV/4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = Reviews;
var _c, _c1;
__turbopack_context__.k.register(_c, "Stars");
__turbopack_context__.k.register(_c1, "Reviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CtaBand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CtaBand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
function CtaBand() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "CtaBand.useGSAP": ()=>{
            // Parallax on the background image
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(bgRef.current, {
                yPercent: 22,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
            // Content reveal
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(contentRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(sectionRef.current.querySelectorAll('.cta-line'), {
                y: '110%',
                opacity: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 82%',
                    once: true
                }
            });
        }
    }["CtaBand.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "relative overflow-hidden flex items-center justify-center cta-band",
        style: {
            minHeight: 560,
            padding: '120px 48px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bgRef,
                className: "absolute inset-0 will-change-transform",
                style: {
                    backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=2000&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }
            }, void 0, false, {
                fileName: "[project]/components/CtaBand.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'linear-gradient(to bottom, rgba(10,22,40,0.72) 0%, rgba(10,22,40,0.58) 50%, rgba(10,22,40,0.88) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/CtaBand.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                className: "relative z-10 text-center",
                style: {
                    maxWidth: 760
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                        children: "Ready when you are"
                    }, void 0, false, {
                        fileName: "[project]/components/CtaBand.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'var(--font-display)',
                            fontWeight: 300,
                            fontSize: 'clamp(44px, 6vw, 88px)',
                            lineHeight: 0.98,
                            letterSpacing: '-0.02em',
                            color: 'var(--cream)',
                            margin: '20px 0 28px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cta-line block",
                                    children: "Ready to"
                                }, void 0, false, {
                                    fileName: "[project]/components/CtaBand.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CtaBand.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cta-line block",
                                    style: {
                                        fontStyle: 'italic',
                                        color: 'var(--gold-light)'
                                    },
                                    children: "set sail?"
                                }, void 0, false, {
                                    fileName: "[project]/components/CtaBand.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CtaBand.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CtaBand.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 16,
                            color: 'rgba(245,240,232,0.82)',
                            lineHeight: 1.75,
                            marginBottom: 44,
                            maxWidth: 520,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        },
                        children: "Every charter begins with a conversation. Share the afternoon you have in mind — our concierge replies within the hour."
                    }, void 0, false, {
                        fileName: "[project]/components/CtaBand.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 justify-center flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                href: "#inquiry",
                                children: "Booking Enquiry"
                            }, void 0, false, {
                                fileName: "[project]/components/CtaBand.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                href: "#cruises",
                                children: "Browse Cruise Tickets"
                            }, void 0, false, {
                                fileName: "[project]/components/CtaBand.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CtaBand.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CtaBand.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CtaBand.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(CtaBand, "2m/zn9/XaBXkohwxBav53Q2d6pY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = CtaBand;
var _c;
__turbopack_context__.k.register(_c, "CtaBand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Destinations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Destinations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const DESTS = {
    gc: [
        'Wave Break Island',
        'Sanctuary Cove',
        'Jumpinpin',
        'Scottish Prince Wreck',
        'Sovereign Islands'
    ],
    mb: [
        'Brisbane River',
        'Tangalooma',
        'Moreton Island',
        'Stradbroke Island'
    ]
};
function Destinations() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Destinations.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(leftRef.current, {
                x: -40,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 82%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(rightRef.current.querySelectorAll('.dest-col'), {
                x: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: 'top 82%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(sectionRef.current.querySelectorAll('.dest-place'), {
                x: -20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.07,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: 'top 75%',
                    once: true
                }
            });
        }
    }["Destinations.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "relative overflow-hidden destinations-section",
        style: {
            padding: '110px 48px',
            background: 'var(--navy)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'radial-gradient(ellipse at 15% 30%, rgba(201,168,76,0.06), transparent 50%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/Destinations.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative grid dest-outer-grid",
                style: {
                    maxWidth: 1200,
                    margin: '0 auto',
                    gridTemplateColumns: '1fr 1.2fr',
                    gap: 80,
                    alignItems: 'start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: leftRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                children: "Destinations"
                            }, void 0, false, {
                                fileName: "[project]/components/Destinations.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 300,
                                    fontSize: 'clamp(38px, 4.5vw, 60px)',
                                    lineHeight: 1.02,
                                    letterSpacing: '-0.015em',
                                    marginBottom: 28
                                },
                                children: [
                                    "Where we",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                                        children: "anchor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Destinations.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Destinations.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 15,
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.75,
                                    marginBottom: 36,
                                    maxWidth: 400
                                },
                                children: "We run the calm, protected waters of the Gold Coast Broadwater — and when conditions invite, we push north into Moreton Bay. Your skipper reads the day and writes the line."
                            }, void 0, false, {
                                fileName: "[project]/components/Destinations.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                href: "#inquiry",
                                children: "Plan a Route"
                            }, void 0, false, {
                                fileName: "[project]/components/Destinations.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Destinations.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: rightRef,
                        className: "grid dest-inner-cols",
                        style: {
                            gridTemplateColumns: '1fr 1fr',
                            gap: 48
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dest-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        style: {
                                            marginBottom: 24,
                                            paddingBottom: 16,
                                            borderBottom: '1px solid rgba(201,168,76,0.2)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'var(--font-display)',
                                                    fontStyle: 'italic',
                                                    fontSize: 18,
                                                    color: 'var(--gold)'
                                                },
                                                children: "i."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Destinations.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'var(--font-body)',
                                                    fontSize: 10,
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    color: 'var(--gold)',
                                                    fontWeight: 500
                                                },
                                                children: "Gold Coast"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Destinations.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Destinations.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    DESTS.gc.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "dest-place flex items-center gap-3.5",
                                            style: {
                                                padding: '13px 0',
                                                borderBottom: '1px solid rgba(245,240,232,0.06)',
                                                fontFamily: 'var(--font-display)',
                                                fontSize: 20,
                                                color: 'var(--cream)',
                                                fontWeight: 400,
                                                letterSpacing: '-0.01em',
                                                cursor: 'default'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'var(--font-body)',
                                                        fontSize: 10,
                                                        color: 'var(--text-muted)',
                                                        letterSpacing: '0.15em',
                                                        fontWeight: 400,
                                                        minWidth: 26
                                                    },
                                                    children: [
                                                        "0",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Destinations.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this),
                                                p
                                            ]
                                        }, p, true, {
                                            fileName: "[project]/components/Destinations.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Destinations.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dest-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        style: {
                                            marginBottom: 24,
                                            paddingBottom: 16,
                                            borderBottom: '1px solid rgba(201,168,76,0.2)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'var(--font-display)',
                                                    fontStyle: 'italic',
                                                    fontSize: 18,
                                                    color: 'var(--gold)'
                                                },
                                                children: "ii."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Destinations.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'var(--font-body)',
                                                    fontSize: 10,
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    color: 'var(--gold)',
                                                    fontWeight: 500
                                                },
                                                children: "Moreton Bay"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Destinations.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Destinations.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    DESTS.mb.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "dest-place flex items-center gap-3.5",
                                            style: {
                                                padding: '13px 0',
                                                borderBottom: '1px solid rgba(245,240,232,0.06)',
                                                fontFamily: 'var(--font-display)',
                                                fontSize: 20,
                                                color: 'var(--cream)',
                                                fontWeight: 400,
                                                letterSpacing: '-0.01em',
                                                cursor: 'default'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'var(--font-body)',
                                                        fontSize: 10,
                                                        color: 'var(--text-muted)',
                                                        letterSpacing: '0.15em',
                                                        fontWeight: 400,
                                                        minWidth: 26
                                                    },
                                                    children: [
                                                        "0",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Destinations.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this),
                                                p
                                            ]
                                        }, p, true, {
                                            fileName: "[project]/components/Destinations.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Destinations.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Destinations.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Destinations.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Destinations.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Destinations, "Ld3AlfWGoGvEHJfgPm04N0sgiJM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Destinations;
var _c;
__turbopack_context__.k.register(_c, "Destinations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Faq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Faq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const FAQS = [
    {
        q: 'Where do your boats depart from?',
        a: 'Our boats are berthed at Muriel Henchman Public Pontoon on the Gold Coast — about ten minutes from Surfers Paradise and fifteen from Broadbeach. Look for our signage next to the Heli Tours at Marina Mirage.'
    },
    {
        q: 'Do you offer pre-made charter packages?',
        a: "Three starting points: Beaches and BBQs — a midday run to the islands, watersports, and buffet. Sunset cocktails and canapés — five o'clock out of Marina Mirage into golden hour. Or a fully custom charter — tell us the occasion and we write the afternoon."
    },
    {
        q: 'What about food and drinks?',
        a: "Each vessel has two bars with bar-tab or consumption options. Our culinary partners — Private Chefs of Brisbane — handle everything from grazing boards and canapés to gourmet BBQ, buffet, and fine dining."
    },
    {
        q: 'What destinations can we visit?',
        a: 'Most charters run the calm Broadwater — Wave Break Island, Sanctuary Cove, Jumpinpin, the Scottish Prince wreck, the mansions at Sovereign Islands. When conditions invite, we push north into Moreton Bay for Tangalooma, Moreton Island and Stradbroke.'
    },
    {
        q: 'Will I get seasick?',
        a: 'We operate in the protected waters of the Gold Coast Broadwater, where swell is minimal. If we head offshore into open ocean there is a possibility of larger waves — your skipper reads the day and the route accordingly.'
    },
    {
        q: 'Are your charters accessible for guests with limited mobility?',
        a: 'We have welcomed many guests with limited mobility. Boarding requires a step up from the marina pontoon, and each guest is different — our team will walk you through the layout and accommodations before booking to make sure it is the right fit.'
    }
];
function FaqItem({ f, open, onToggle }) {
    _s();
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "FaqItem.useGSAP": ()=>{
            const body = bodyRef.current;
            const inner = innerRef.current;
            if (!body || !inner) return;
            if (open) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(body, {
                    height: 0
                }, {
                    height: inner.scrollHeight,
                    duration: 0.45,
                    ease: 'power2.out'
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                    background: 'var(--gold)',
                    borderColor: 'var(--gold)',
                    duration: 0.3
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(body, {
                    height: 0,
                    duration: 0.35,
                    ease: 'power2.in'
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                    background: 'transparent',
                    borderColor: 'rgba(201,168,76,0.35)',
                    duration: 0.3
                });
            }
        }
    }["FaqItem.useGSAP"], {
        dependencies: [
            open
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderBottom: '1px solid rgba(201,168,76,0.14)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center gap-6 cursor-pointer select-none",
                style: {
                    padding: '26px 0'
                },
                onClick: onToggle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-display)',
                            fontSize: 22,
                            color: 'var(--cream)',
                            lineHeight: 1.3,
                            letterSpacing: '-0.005em',
                            fontWeight: 400,
                            flex: 1,
                            transition: 'color 0.2s'
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--gold)',
                        onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--cream)',
                        children: f.q
                    }, void 0, false, {
                        fileName: "[project]/components/Faq.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: btnRef,
                        className: "flex-shrink-0 flex items-center justify-center",
                        style: {
                            width: 36,
                            height: 36,
                            border: '1px solid rgba(201,168,76,0.35)',
                            background: 'transparent'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: open ? 'minus' : 'plus',
                            size: 14,
                            color: open ? 'var(--navy)' : 'var(--gold)'
                        }, void 0, false, {
                            fileName: "[project]/components/Faq.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Faq.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Faq.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bodyRef,
                style: {
                    overflow: 'hidden',
                    height: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: innerRef,
                    style: {
                        paddingBottom: 28
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-body)',
                            fontSize: 14,
                            color: 'var(--text-muted)',
                            lineHeight: 1.85,
                            maxWidth: 600
                        },
                        children: f.a
                    }, void 0, false, {
                        fileName: "[project]/components/Faq.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Faq.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Faq.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Faq.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(FaqItem, "5N3yFeljs6wut5ItT8T8pQIVDNo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = FaqItem;
function Faq() {
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Faq.useCallback[toggle]": (i)=>setOpenIndex({
                "Faq.useCallback[toggle]": (prev)=>prev === i ? -1 : i
            }["Faq.useCallback[toggle]"])
    }["Faq.useCallback[toggle]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Faq.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(leftRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 82%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(listRef.current.querySelectorAll('.faq-item-wrap'), {
                x: 30,
                opacity: 0,
                duration: 0.7,
                stagger: 0.07,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: listRef.current,
                    start: 'top 82%',
                    once: true
                }
            });
        }
    }["Faq.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "faq-section",
        style: {
            padding: '110px 48px',
            background: 'var(--navy)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid faq-layout",
            style: {
                maxWidth: 1100,
                margin: '0 auto',
                gridTemplateColumns: '0.9fr 1.3fr',
                gap: 80,
                alignItems: 'start'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: leftRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                            children: "Frequently Asked"
                        }, void 0, false, {
                            fileName: "[project]/components/Faq.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: 'var(--font-display)',
                                fontWeight: 300,
                                fontSize: 'clamp(36px, 4.5vw, 58px)',
                                lineHeight: 1.02,
                                letterSpacing: '-0.015em',
                                marginBottom: 24
                            },
                            children: [
                                "Before you ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                                    children: "board"
                                }, void 0, false, {
                                    fileName: "[project]/components/Faq.tsx",
                                    lineNumber: 195,
                                    columnNumber: 24
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Faq.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: 'var(--font-body)',
                                fontSize: 15,
                                color: 'var(--text-muted)',
                                lineHeight: 1.75,
                                marginBottom: 36,
                                maxWidth: 340
                            },
                            children: "Everything you need to know before a charter — parking, catering, destinations, mobility. Anything else, our concierge is at the other end of a phone."
                        }, void 0, false, {
                            fileName: "[project]/components/Faq.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            href: "#inquiry",
                            children: "Contact Concierge"
                        }, void 0, false, {
                            fileName: "[project]/components/Faq.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Faq.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: listRef,
                    style: {
                        borderTop: '1px solid rgba(201,168,76,0.2)'
                    },
                    children: FAQS.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-item-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                                f: f,
                                open: openIndex === i,
                                onToggle: ()=>toggle(i)
                            }, void 0, false, {
                                fileName: "[project]/components/Faq.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/Faq.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Faq.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Faq.tsx",
            lineNumber: 178,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Faq.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s1(Faq, "Liyn70D1vUdga72UYFqt6YYkdgA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = Faq;
var _c, _c1;
__turbopack_context__.k.register(_c, "FaqItem");
__turbopack_context__.k.register(_c1, "Faq");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Inquiry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Inquiry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const initialForm = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    vessel: 'Either — concierge to recommend',
    charter: 'Private Charter',
    note: ''
};
function Field({ label, name, value, onChange, type = 'text', placeholder, multi, select, options }) {
    const inputStyle = {
        background: 'transparent',
        border: 0,
        borderBottom: '1px solid rgba(245,240,232,0.22)',
        padding: '10px 0',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        color: 'var(--cream)',
        borderRadius: 0,
        outline: 'none',
        width: '100%',
        transition: 'border-color 0.3s'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginBottom: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontFamily: 'var(--font-body)',
                    fontSize: 9,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 500
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/Inquiry.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            multi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: value,
                onChange: (e)=>onChange(name, e.target.value),
                placeholder: placeholder,
                rows: 4,
                style: {
                    ...inputStyle,
                    resize: 'none'
                },
                onFocus: (e)=>e.target.style.borderBottomColor = 'var(--gold)',
                onBlur: (e)=>e.target.style.borderBottomColor = 'rgba(245,240,232,0.22)'
            }, void 0, false, {
                fileName: "[project]/components/Inquiry.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this) : select ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: (e)=>onChange(name, e.target.value),
                style: {
                    ...inputStyle,
                    appearance: 'none',
                    cursor: 'pointer'
                },
                onFocus: (e)=>e.target.style.borderBottomColor = 'var(--gold)',
                onBlur: (e)=>e.target.style.borderBottomColor = 'rgba(245,240,232,0.22)',
                children: options?.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: o,
                        style: {
                            background: 'var(--navy)'
                        },
                        children: o
                    }, o, false, {
                        fileName: "[project]/components/Inquiry.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Inquiry.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                onChange: (e)=>onChange(name, e.target.value),
                placeholder: placeholder,
                style: inputStyle,
                onFocus: (e)=>e.target.style.borderBottomColor = 'var(--gold)',
                onBlur: (e)=>e.target.style.borderBottomColor = 'rgba(245,240,232,0.22)'
            }, void 0, false, {
                fileName: "[project]/components/Inquiry.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Inquiry.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = Field;
function Inquiry() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialForm);
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const update = (name, val)=>setForm((prev)=>({
                ...prev,
                [name]: val
            }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Inquiry.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(leftRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 82%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(formRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 85%',
                    once: true
                }
            });
        }
    }["Inquiry.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        id: "inquiry",
        className: "relative overflow-hidden inquiry-section",
        style: {
            padding: '110px 48px',
            background: 'linear-gradient(to bottom, var(--navy-mid) 0%, var(--navy) 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'radial-gradient(ellipse at 85% 100%, rgba(201,168,76,0.12), transparent 50%), radial-gradient(ellipse at 10% 20%, rgba(26,58,92,0.5), transparent 50%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/Inquiry.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative grid inquiry-layout",
                style: {
                    maxWidth: 1200,
                    margin: '0 auto',
                    gridTemplateColumns: '1fr 1.1fr',
                    gap: 80,
                    alignItems: 'start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: leftRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eyebrow"], {
                                children: "Booking Enquiry"
                            }, void 0, false, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 300,
                                    fontSize: 'clamp(40px, 5vw, 70px)',
                                    lineHeight: 0.98,
                                    letterSpacing: '-0.02em',
                                    marginBottom: 28
                                },
                                children: [
                                    "Tell us the",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItalicEm"], {
                                        children: "occasion"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Inquiry.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 15,
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.75,
                                    marginBottom: 44,
                                    maxWidth: 420
                                },
                                children: "Every charter begins with a conversation. Share the afternoon you have in mind — the date, the guests, the reason — and our concierge replies within the hour."
                            }, void 0, false, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    borderTop: '1px solid rgba(201,168,76,0.2)',
                                    paddingTop: 32,
                                    display: 'grid',
                                    gap: 18
                                },
                                children: [
                                    {
                                        key: 'Dock',
                                        icon: 'pin',
                                        val: 'Muriel Henchman Pontoon, Marina Mirage'
                                    },
                                    {
                                        key: 'Hours',
                                        icon: 'clock',
                                        val: '08:00 — 20:00 daily'
                                    },
                                    {
                                        key: 'Direct',
                                        icon: 'phone',
                                        val: '+61 7 5528 0400'
                                    },
                                    {
                                        key: 'Email',
                                        icon: 'mail',
                                        val: 'info@boattimeyachtcharters.com.au'
                                    }
                                ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        style: {
                                            fontFamily: 'var(--font-body)',
                                            fontSize: 13,
                                            color: 'var(--cream)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'var(--gold)',
                                                    fontSize: 9,
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 500,
                                                    minWidth: 72
                                                },
                                                children: d.key
                                            }, void 0, false, {
                                                fileName: "[project]/components/Inquiry.tsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: d.icon,
                                                size: 14,
                                                color: "var(--gold)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Inquiry.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'var(--text-muted)'
                                                },
                                                children: d.val
                                            }, void 0, false, {
                                                fileName: "[project]/components/Inquiry.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, d.key, true, {
                                        fileName: "[project]/components/Inquiry.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Inquiry.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: formRef,
                        className: "inquiry-form",
                        style: {
                            background: 'rgba(10,22,40,0.5)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(201,168,76,0.18)',
                            padding: 48
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid form-row-2",
                                style: {
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: 28
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Full Name",
                                        name: "name",
                                        value: form.name,
                                        onChange: update,
                                        placeholder: "Eleanor Vance"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Inquiry.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Email",
                                        name: "email",
                                        value: form.email,
                                        onChange: update,
                                        type: "email",
                                        placeholder: "eleanor@vance.co"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Inquiry.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid form-row-2",
                                style: {
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: 28
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Phone",
                                        name: "phone",
                                        value: form.phone,
                                        onChange: update,
                                        placeholder: "+61"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Inquiry.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Preferred Date",
                                        name: "date",
                                        value: form.date,
                                        onChange: update,
                                        placeholder: "Saturday, 3 May"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Inquiry.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid form-row-2",
                                style: {
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: 28
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Charter Type",
                                        name: "charter",
                                        value: form.charter,
                                        onChange: update,
                                        select: true,
                                        options: [
                                            'Private Charter',
                                            'Corporate Charter',
                                            'Wedding Charter',
                                            'Sunset Cruise',
                                            'Whale Watching',
                                            'Custom'
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/components/Inquiry.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Guests",
                                        name: "guests",
                                        value: form.guests,
                                        onChange: update,
                                        placeholder: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Inquiry.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Preferred Vessel",
                                name: "vessel",
                                value: form.vessel,
                                onChange: update,
                                select: true,
                                options: [
                                    'Either — concierge to recommend',
                                    'Sun Goddess',
                                    'Mermaid Spirit'
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Anything else",
                                name: "note",
                                value: form.note,
                                onChange: update,
                                multi: true,
                                placeholder: "A quiet afternoon, champagne on the foredeck."
                            }, void 0, false, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 8
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "primary",
                                    onClick: ()=>setSent(true),
                                    children: "Send Enquiry"
                                }, void 0, false, {
                                    fileName: "[project]/components/Inquiry.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            sent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 24,
                                    padding: '16px 20px',
                                    border: '1px solid var(--gold)',
                                    background: 'rgba(201,168,76,0.08)',
                                    color: 'var(--gold)',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 10,
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    fontWeight: 500
                                },
                                children: "Received — our concierge replies within the hour."
                            }, void 0, false, {
                                fileName: "[project]/components/Inquiry.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Inquiry.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Inquiry.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Inquiry.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(Inquiry, "JGRgfBL/alGGyb2y0vvvIN2oxAY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = Inquiry;
var _c, _c1;
__turbopack_context__.k.register(_c, "Field");
__turbopack_context__.k.register(_c1, "Inquiry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
function FootLink({ children, href = '#' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        style: {
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--text-muted)',
            textDecoration: 'none',
            padding: '7px 0',
            transition: 'color 0.2s'
        },
        onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--cream)',
        onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--text-muted)',
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = FootLink;
function ColHead({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: 'var(--font-body)',
            fontSize: 9,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 500,
            marginBottom: 20
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = ColHead;
function Footer() {
    _s();
    const footRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Footer.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(footRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footRef.current,
                    start: 'top 92%',
                    once: true
                }
            });
        }
    }["Footer.useGSAP"], {
        scope: footRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: footRef,
        className: "footer-section",
        style: {
            padding: '80px 48px 36px',
            background: '#060f1a',
            borderTop: '1px solid rgba(201,168,76,0.12)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid footer-top-grid",
                    style: {
                        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
                        gap: 56,
                        marginBottom: 64,
                        paddingBottom: 52,
                        borderBottom: '1px solid rgba(201,168,76,0.12)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3.5",
                                    style: {
                                        marginBottom: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center",
                                            style: {
                                                width: 40,
                                                height: 40,
                                                border: '1px solid var(--gold)',
                                                fontFamily: 'var(--font-display)',
                                                fontStyle: 'italic',
                                                fontSize: 20,
                                                color: 'var(--gold)'
                                            },
                                            children: "B"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: 'var(--font-display)',
                                                        fontWeight: 600,
                                                        fontSize: 26,
                                                        letterSpacing: '0.02em'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: 'var(--gold)'
                                                            },
                                                            children: "Boat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: 'var(--cream)'
                                                            },
                                                            children: "Time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: 'var(--font-body)',
                                                        fontSize: 8,
                                                        letterSpacing: '0.32em',
                                                        textTransform: 'uppercase',
                                                        color: 'var(--text-muted)',
                                                        marginTop: 3,
                                                        fontWeight: 500
                                                    },
                                                    children: "Yacht Charters"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'var(--font-body)',
                                        fontSize: 13,
                                        color: 'var(--text-muted)',
                                        lineHeight: 1.75,
                                        maxWidth: 300,
                                        marginBottom: 28
                                    },
                                    children: "Superyacht charters on the Gold Coast and Brisbane. Two vessels, one unhurried coastline — since 2014."
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2.5",
                                    children: [
                                        'instagram',
                                        'facebook',
                                        'mail'
                                    ].map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "flex items-center justify-center transition-colors duration-300",
                                            style: {
                                                width: 38,
                                                height: 38,
                                                border: '1px solid rgba(201,168,76,0.28)',
                                                color: 'var(--gold)'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = 'var(--gold)';
                                                e.currentTarget.style.borderColor = 'var(--gold)';
                                                e.currentTarget.style.color = 'var(--navy)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.28)';
                                                e.currentTarget.style.color = 'var(--gold)';
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: icon,
                                                size: 14,
                                                color: "inherit"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this)
                                        }, icon, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColHead, {
                                    children: "Cruise Tickets"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Luxury Whale Watching"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Broadwater Sunset"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "New Year’s Eve 2026"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Valentine’s Cruise"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Riverfire 2026"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Relaxed Lunch"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Twilight Buffet"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColHead, {
                                    children: "Yacht Charters"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Private Charter"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Corporate Charter"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Wedding Charter"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Catering & Menus"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 28
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColHead, {
                                        children: "Our Yachts"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Sun Goddess"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Mermaid Spirit"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColHead, {
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Muriel Henchman Pontoon"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Marina Mirage, Southport QLD"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    href: "tel:+61755280400",
                                    children: "+61 7 5528 0400"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    href: "mailto:info@boattimeyachtcharters.com.au",
                                    children: "info@boattimeyachtcharters.com.au"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 28
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColHead, {
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "About BoatTime"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Boattime News"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    href: "#inquiry",
                                    children: "Booking Enquiry"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center footer-bottom-bar",
                    style: {
                        fontFamily: 'var(--font-body)',
                        fontSize: 10,
                        color: 'rgba(245,240,232,0.3)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "© 2026 Boattime Yacht Charters · All rights reserved"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Terms"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FootLink, {
                                    children: "Cookies"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Footer, "R4fTAYt+Pgs1ScMyYJsG/nAkBgg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c2 = Footer;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FootLink");
__turbopack_context__.k.register(_c1, "ColHead");
__turbopack_context__.k.register(_c2, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_0ui82vz._.js.map