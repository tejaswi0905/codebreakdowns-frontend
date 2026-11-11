import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "./@floating-ui/react-dom+[...].mjs";
//#region node_modules/@radix-ui/react-tooltip/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
	const Slottable2 = (props) => "child" in props ? props.children(props.child) : props.children;
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
	return Slottable2;
}
import_react[" use ".trim().toString()];
//#endregion
export { createSlottable as t };
