"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.2.0",
    "engineVersion": "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum UserRole {\n  ADMIN\n  USER\n}\n\nmodel User {\n  id          Int          @id @default(autoincrement()) // Primary key with auto-increment\n  displayName String?      @map(\"display_name\") // Optional field, mapped to \"display_name\"\n  username    String       @unique\n  createdAt   DateTime     @default(now()) @map(\"created_at\") // Defaults to the current timestamp\n  createdBy   Int?         @map(\"created_by\") // Optional foreign key reference\n  updatedAt   DateTime     @default(now()) @map(\"updated_at\") // Defaults to the current timestamp\n  updatedBy   Int?         @map(\"updated_by\") // Optional foreign key reference\n  deletedAt   DateTime?    @map(\"deleted_at\") // Optional field\n  deletedBy   Int?         @map(\"deleted_by\") // Optional foreign key reference\n  role        UserRole     @default(USER) @map(\"role\")\n  isActive    Boolean      @default(true) @map(\"is_active\")\n  UserSecret  UserSecret[]\n\n  @@map(\"user\")\n}\n\nmodel UserSecret {\n  id        Int    @id @default(autoincrement()) // Primary key with auto-increment\n  userId    Int?   @unique @map(\"user_id\") // Optional foreign key referencing the \"user\" table\n  hPassword String @map(\"h_password\") // Hashed password, non-nullable\n\n  // Relationships\n  user User? @relation(fields: [userId], references: [id]) // References the \"User\" table\n\n  @@map(\"user_secret\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"displayName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"display_name\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"created_by\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"updatedBy\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"updated_by\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"deleted_at\"},{\"name\":\"deletedBy\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"deleted_by\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"UserRole\",\"dbName\":\"role\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\",\"dbName\":\"is_active\"},{\"name\":\"UserSecret\",\"kind\":\"object\",\"type\":\"UserSecret\",\"relationName\":\"UserToUserSecret\"}],\"dbName\":\"user\"},\"UserSecret\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"user_id\"},{\"name\":\"hPassword\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"h_password\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToUserSecret\"}],\"dbName\":\"user_secret\"}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map