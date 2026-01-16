module.exports = [
"[project]/src/configs/env.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Env",
    ()=>Env
]);
const env = process.env;
(function(Env) {
    Env.NODE_ENV = ("TURBOPACK compile-time value", "development") ?? "production";
    Env.PORT = env.PORT ?? "4200";
    Env.BASE_URL = env.BASE_URL ?? "http://localhost:4200";
    Env.API_URL = env.API_URL ?? "http://localhost:3000/api";
    Env.API_TIMEOUT = parseInt(env.API_TIMEOUT ?? "5000");
    Env.API_MAX_RETRIES = parseInt(env.API_MAX_RETRIES ?? "3");
    Env.API_RETRY_DELAY = parseInt(env.API_RETRY_DELAY ?? "1000");
    Env.GEOSERVER_URL = env.GEOSERVER_URL ?? "http://localhost:8080/geoserver";
})(Env || (Env = {}));
var Env;
}),
"[project]/src/services/login.service.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "login",
    ()=>login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$env$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/configs/env.ts [ssr] (ecmascript)");
"use server";
;
async function login(username, password) {
    const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$env$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["Env"].API_URL}/v1/auth/login`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });
    if (response.status === 401) {
        return {
            authorized: false
        };
    }
    if (!response.ok) {
        throw new Error(await response.text());
    }
    const body = await response.json();
    if (!body.access_token) return {
        authorized: false
    };
    const user = JSON.parse(atob(body.access_token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    localStorage.setItem("token", body.access_token);
    localStorage.setItem("user", JSON.stringify(user));
    return {
        authorized: true,
        user
    };
}
}),
"[project]/src/Modules/Auth/login.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$snackbar$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/snackbar/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$login$2e$service$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/login.service.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [ssr] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [ssr] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$mui$2f$lab$2f$LoadingButton__$5b$external$5d$__$2840$mui$2f$lab$2f$LoadingButton$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$mui$2f$lab$29$__ = __turbopack_context__.i("[externals]/@mui/lab/LoadingButton [external] (@mui/lab/LoadingButton, esm_import, [project]/node_modules/@mui/lab)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$usehooks$2d$ts__$5b$external$5d$__$28$usehooks$2d$ts$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$29$__ = __turbopack_context__.i("[externals]/usehooks-ts [external] (usehooks-ts, esm_import, [project]/node_modules/usehooks-ts)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$mui$2f$lab$2f$LoadingButton__$5b$external$5d$__$2840$mui$2f$lab$2f$LoadingButton$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$mui$2f$lab$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$usehooks$2d$ts__$5b$external$5d$__$28$usehooks$2d$ts$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$mui$2f$lab$2f$LoadingButton__$5b$external$5d$__$2840$mui$2f$lab$2f$LoadingButton$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$mui$2f$lab$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$usehooks$2d$ts__$5b$external$5d$__$28$usehooks$2d$ts$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
function LoginPage() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loggingIn, setLoggingIn] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [_, setUserStore] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$usehooks$2d$ts__$5b$external$5d$__$28$usehooks$2d$ts$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$29$__["useLocalStorage"])('user', null);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const afterLogin = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        const redirect = searchParams?.get('redirect');
        if (redirect) {
            router.replace(redirect);
            return;
        }
        // redirect ตาม role
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (user.role === 'ADMIN') {
            router.replace('/admin');
        } else {
            router.replace('/dashboard');
        }
    }, [
        searchParams,
        router
    ]);
    const { success, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$snackbar$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useSnackbar"])();
    const onSubmit = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        try {
            setLoggingIn(true);
            const loginResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$login$2e$service$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["login"])(username, password);
            if (!loginResult.authorized) {
                error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
                return;
            }
            setUserStore(loginResult.user);
            success('เข้าสู่ระบบสำเร็จ');
            afterLogin();
        } catch (e) {
            error(e.message || 'ไม่สามารถเข้าสู่ระบบได้');
        } finally{
            setLoggingIn(false);
        }
    }, [
        username,
        password,
        afterLogin,
        setUserStore,
        success,
        error
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            maxWidth: 420,
            mx: 'auto',
            mt: 10
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
            elevation: 3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                sx: {
                    p: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h5",
                        align: "center",
                        gutterBottom: true,
                        children: "เข้าสู่ระบบ"
                    }, void 0, false, {
                        fileName: "[project]/src/Modules/Auth/login.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                        fullWidth: true,
                        label: "อีเมล",
                        margin: "normal",
                        value: username,
                        onChange: (e)=>setUsername(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/Modules/Auth/login.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                        fullWidth: true,
                        type: "password",
                        label: "รหัสผ่าน",
                        margin: "normal",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/Modules/Auth/login.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                        direction: "row",
                        justifyContent: "flex-end",
                        spacing: 1,
                        mt: 3,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "outlined",
                                onClick: ()=>history.back(),
                                children: "ย้อนกลับ"
                            }, void 0, false, {
                                fileName: "[project]/src/Modules/Auth/login.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$mui$2f$lab$2f$LoadingButton__$5b$external$5d$__$2840$mui$2f$lab$2f$LoadingButton$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$mui$2f$lab$29$__["default"], {
                                variant: "contained",
                                loading: loggingIn,
                                onClick: onSubmit,
                                children: "เข้าสู่ระบบ"
                            }, void 0, false, {
                                fileName: "[project]/src/Modules/Auth/login.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Modules/Auth/login.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Modules/Auth/login.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/Modules/Auth/login.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/Modules/Auth/login.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/login/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Modules$2f$Auth$2f$login$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Modules/Auth/login.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Modules$2f$Auth$2f$login$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Modules$2f$Auth$2f$login$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Modules$2f$Auth$2f$login$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/pages/login/index.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
Page.guestOnly = true;
const __TURBOPACK__default__export__ = Page;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__248295dd._.js.map