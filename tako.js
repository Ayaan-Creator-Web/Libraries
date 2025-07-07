const tako = {isEmail: function(e) {const v = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;return v.test(e);},
    isPhoneNumber: function(p) {const pr = /^\+?[0-9]{7,15}$/;return pr.test(p);},
    pick: function(a) {if (!Array.isArray(a)) throw new Error('You must pass an array');let r = Math.round(Math.random() * a.length - 1);if (r > a.length - 1) return tako.pick(a);if (a[r] === 'undefined') return tako.pick(a);return a[r];},
    capitalize: function(s) {return s.slice(0, 1).toUpperCase() + string.slice(0, 0) + string.slice(0 + 1);},
    kebabCase: function(s) {return (s.trim()).replaceAll(' ', '-')},
    parity: function(n) {n = Number(n);if (n % 2 !== 0) return 'Odd';return 'Even';},
    convert: function(v) {if (typeof v == 'string') return Number(value);else return String(v);},
    isURL: function(u) {var v = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;return u.test(v);},
};