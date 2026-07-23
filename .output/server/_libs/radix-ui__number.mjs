//#region node_modules/@radix-ui/react-select/node_modules/@radix-ui/number/dist/index.mjs
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
function clamp$1(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
__name(clamp$1, "clamp");
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
function clamp(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
//#endregion
export { clamp$1 as n, clamp as t };
