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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var qmLog = __importStar(require("../ts/qm.log"));
var qmTests = __importStar(require("./cypress-functions"));
// loadEnv("local")
if (!process.env.ELECTRON_ENABLE_LOGGING) {
    console.log("set env ELECTRON_ENABLE_LOGGING=\"1\" if you want to log to CI.  Disabled by default to avoid leaking secrets on Travis");
}
var specName = process.env.SPEC_NAME;
var PARALLEL = false; // Doesn't work for some reason
if (specName) {
    console.log("Only running process.env.SPEC_NAME " + specName);
    qmTests.runOneCypressSpec(specName, function () {
        qmLog.logEndOfProcess(specName);
    });
}
else if (PARALLEL) {
    console.log("runCypressTestsInParallel");
    qmTests.runCypressTestsInParallel();
}
else {
    console.log("runLastFailedCypressTest and then run runCypressTests");
    qmTests.runLastFailedCypressTest(function (err) {
        qmLog.logEndOfProcess("runLastFailedCypressTest");
        if (err) {
            throw err;
        }
        console.log("Done with runLastFailedCypressTest. Going to run all now...");
        qmTests.runCypressTests();
    });
}
