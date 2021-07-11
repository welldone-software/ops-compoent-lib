import { jsx, jsxs } from 'react/jsx-runtime';
import React from 'react';
import Switch from '@material-ui/core/Switch';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Button = function (_a) {
    var children = _a.children, _b = _a.primary, primary = _b === void 0 ? false : _b, onClick = _a.onClick, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? '#D1D5DB' : _c, _d = _a.color, color = _d === void 0 ? '#1F2937' : _d;
    var buttonStyles = {
        fontWeight: 700,
        padding: '10px 20px',
        border: 0,
        cursor: 'pointer',
        display: 'inline-block',
        lineHeight: 1,
        backgroundColor: primary ? '#2563EB' : backgroundColor,
        color: primary ? '#F3F4F6' : color,
    };
    return (jsx("button", __assign({ type: "button", onClick: onClick, style: buttonStyles }, { children: children }), void 0));
};

function Switches() {
    var _a = React.useState({
        checkedA: true,
        checkedB: true,
    }), state = _a[0], setState = _a[1];
    var handleChange = function (event) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[event.target.name] = event.target.checked, _a)));
    };
    return (jsxs("div", { children: [jsx(Switch, { checked: state.checkedA, onChange: handleChange, name: "checkedA", inputProps: { 'aria-label': 'secondary checkbox' } }, void 0), jsx(Switch, { checked: state.checkedB, onChange: handleChange, color: "primary", name: "checkedB", inputProps: { 'aria-label': 'primary checkbox' } }, void 0), jsx(Switch, { inputProps: { 'aria-label': 'primary checkbox' } }, void 0), jsx(Switch, { disabled: true, inputProps: { 'aria-label': 'disabled checkbox' } }, void 0), jsx(Switch, { disabled: true, checked: true, inputProps: { 'aria-label': 'primary checkbox' } }, void 0), jsx(Switch, { defaultChecked: true, color: "default", inputProps: { 'aria-label': 'checkbox with default color' } }, void 0)] }, void 0));
}

export { Button, Switches as Switch };
//# sourceMappingURL=index.esm.js.map
