(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    45: function (e, t, c) {},
    62: function (e, t, c) {
      e.exports = c(95);
    },
    71: function (e, t, c) {},
    73: function (e, t, c) {},
    74: function (e, t, c) {},
    77: function (e, t, c) {},
    78: function (e, t, c) {},
    79: function (e, t, c) {},
    80: function (e, t, c) {},
    81: function (e, t, c) {},
    82: function (e, t, c) {},
    83: function (e, t, c) {},
    84: function (e, t, c) {},
    85: function (e, t, c) {},
    87: function (e, t, c) {},
    88: function (e, t, c) {},
    89: function (e, t, c) {},
    91: function (e, t, c) {},
    95: function (e, t, c) {
      "use strict";
      c.r(t);
      var a = c(0),
        n = c.n(a),
        r = c(19),
        l = c(3),
        s = c(24),
        u = Object(s.b)({
          searchQuery: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            return "SEARCH_QUERY" === t.type ? t.payload : e;
          },
          filmResult: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            return "FILM_RESULT" === t.type ? t.payload : e;
          },
          albumResults: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0;
            return "ALBUM_RESULTS" === t.type ? t.payload : e;
          },
          sessionExpired: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments.length > 1 ? arguments[1] : void 0;
            return "SESSION_EXPIRED" === t.type ? t.payload : e;
          },
          currentUser: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            return "CURRENT_USER" === t.type ? t.payload : e;
          },
          firstTime: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments.length > 1 ? arguments[1] : void 0;
            return "FIRST_TIME" === t.type ? t.payload : e;
          },
          savedFilms: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0;
            return "SAVED_FILMS" === t.type ? t.payload : e;
          },
          blacklist: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0;
            return "BLACK_LIST" === t.type ? t.payload : e;
          },
          resultSaved: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments.length > 1 ? arguments[1] : void 0;
            return "RESULT_SAVED" === t.type ? t.payload : e;
          },
        }),
        i = (c(71), c(6)),
        o = c.n(i),
        m = c(10),
        f = c(9),
        v = c(56),
        d = new (c.n(v).a)();
      function p(e, t) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = Object(m.a)(
          o.a.mark(function e(t, c) {
            var a;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      fetch(
                        "//www.omdbapi.com/?t=".concat(t, "&apikey=").concat(c)
                      )
                    );
                  case 2:
                    return (a = e.sent), (e.next = 5), a.json();
                  case 5:
                    return e.abrupt("return", e.sent);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function E(e) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = Object(m.a)(
          o.a.mark(function e(t) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      d.getAlbumTracks(t).then(function (e) {
                        var t = e.items,
                          c = [];
                        return (
                          t.map(function (e) {
                            return e.artists.map(function (e) {
                              var t = e.external_urls,
                                a = e.name,
                                n = !1;
                              return (
                                c.forEach(function (e) {
                                  e.name === a && (n = !0);
                                }),
                                n ? null : c.push({ url: t.spotify, name: a })
                              );
                            });
                          }),
                          c
                        );
                      })
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function y() {
        return (y = Object(m.a)(
          o.a.mark(function e(t) {
            var c;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (c = t.map(
                        (function () {
                          var e = Object(m.a)(
                            o.a.mark(function e(t) {
                              return o.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), E(t.id);
                                    case 2:
                                      return (
                                        (t.related = e.sent),
                                        e.abrupt("return", t)
                                      );
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      )),
                      e.abrupt(
                        "return",
                        Promise.all(c).then(function (e) {
                          return e;
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function g(e, t) {
        return d
          .searchAlbums(e, { limit: 15 })
          .then(function (e) {
            return (function (e) {
              return e.map(function (e) {
                var t = e.name,
                  c = e.id,
                  a = e.external_urls,
                  n = e.images,
                  r = e.release_date;
                return {
                  name: t,
                  id: c,
                  url: a.spotify,
                  images: n,
                  release_date: r,
                };
              });
            })(e.albums.items);
          })
          .then(function (c) {
            return (function (e, t, c) {
              var a = [];
              return (
                c &&
                  e.forEach(function (e) {
                    c.forEach(function (c) {
                      var n = c.searchTerm,
                        r = c.albumId;
                      n === t && r === e.id && a.push(r);
                    });
                  }),
                e.filter(function (e) {
                  return -1 === a.indexOf(e.id);
                })
              );
            })(c, e, t);
          })
          .then(function (e) {
            return (function (e) {
              return y.apply(this, arguments);
            })(e);
          })
          .then(
            function (e) {
              return e ? { data: e, expired: !1 } : { data: [], expired: !1 };
            },
            function () {
              return { data: [], expired: !0 };
            }
          );
      }
      var N = "https://www.movietun.es";
      function k(e, t) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = Object(m.a)(
          o.a.mark(function e(t, c) {
            var a, n, r;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(c),
                      }),
                      (e.next = 3),
                      fetch("".concat(N, "/").concat(t), a)
                    );
                  case 3:
                    return (n = e.sent), (e.next = 6), n.json();
                  case 6:
                    return (r = e.sent), e.abrupt("return", r);
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function L(e, t) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = Object(m.a)(
          o.a.mark(function e(t, c) {
            var a, n;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch("".concat(N, "/").concat(t, "/").concat(c), {
                          method: "DELETE",
                        })
                      );
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
                    case 6:
                      return (n = e.sent), e.abrupt("return", n);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function j(e, t) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = Object(m.a)(
          o.a.mark(function e(t, c) {
            var a, n;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      fetch("".concat(N, "/").concat(t, "/").concat(c))
                    );
                  case 2:
                    return (a = e.sent), (e.next = 5), a.json();
                  case 5:
                    return (n = e.sent), e.abrupt("return", n);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function z(e, t, c) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = Object(m.a)(
          o.a.mark(function e(t, c, a) {
            var n, r, l;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = new Headers()).append(
                        "Content-Type",
                        "application/json"
                      ),
                      n.append("Authorization", "Basic " + btoa(c + ":" + a)),
                      (e.next = 5),
                      fetch("".concat(N, "/").concat(t), { headers: n })
                    );
                  case 5:
                    return (r = e.sent), (e.next = 8), r.json();
                  case 8:
                    return (l = e.sent), e.abrupt("return", l);
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function w(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
        return e && e.length > t && ((e = e.slice(0, t)), (e += "...")), e;
      }
      function M(e, t) {
        var c = !1;
        return (
          e.length &&
            e.forEach(function (e) {
              e.searchTerm === t && (c = !0);
            }),
          c
        );
      }
      function _(e, t) {
        return e ? t : "";
      }
      function R(e) {
        return e || "";
      }
      function U(e, t) {
        return e ? "".concat(t, "-").concat(e) : "";
      }
      var T = function (e) {
          return { type: "SEARCH_QUERY", payload: e };
        },
        F = function (e) {
          return { type: "ALBUM_RESULTS", payload: e };
        },
        H = function (e) {
          return { type: "CURRENT_USER", payload: e };
        },
        V = function (e) {
          return { type: "FIRST_TIME", payload: e };
        },
        I = function (e) {
          return { type: "SAVED_FILMS", payload: e };
        },
        Q = function (e) {
          return { type: "BLACK_LIST", payload: e };
        },
        A = function (e) {
          return { type: "RESULT_SAVED", payload: e };
        },
        B = (c(73), c(97)),
        D = c(105);
      function P() {
        return n.a.createElement(
          B.a,
          { className: "search-cta__container" },
          n.a.createElement(
            D.a,
            { variant: "primary", className: "not-found" },
            n.a.createElement(
              D.a.Item,
              null,
              "Search for your favourite movies! You can edit results and save them for later."
            )
          )
        );
      }
      var G = c(21),
        K = c(102),
        Y = c(98);
      c(74);
      var J = Object(l.b)(
          function (e) {
            return e;
          },
          { searchQuery: T, resultSaved: A }
        )(function (e) {
          var t = e.doSearch,
            c = e.resultSaved,
            r = e.searchQuery,
            s = Object(a.useState)(null),
            u = Object(G.a)(s, 2),
            i = u[0],
            o = u[1],
            m = Object(a.useRef)(null),
            f = {
              searchQuery: Object(l.c)(function (e) {
                return e.searchQuery;
              }),
              currentUser: Object(l.c)(function (e) {
                return e.currentUser;
              }),
              filmsSaved: Object(l.c)(function (e) {
                return e.savedFilms;
              }),
            };
          return n.a.createElement(
            B.a,
            { className: "search-form" },
            n.a.createElement(
              K.a,
              {
                className: "search-form",
                onSubmit: function (e) {
                  e.preventDefault(),
                    r(i),
                    t(i),
                    f.currentUser && M(f.filmsSaved, i) ? c(!0) : c(!1);
                },
              },
              n.a.createElement(
                K.a.Group,
                null,
                n.a.createElement(K.a.Control, {
                  className: "search-input",
                  type: "search",
                  name: "search",
                  onChange: function (e) {
                    o(e.target.value);
                  },
                })
              ),
              n.a.createElement(
                Y.a,
                { ref: m, block: !0, size: "lg", type: "submit" },
                "Search"
              )
            )
          );
        }),
        X = c(100),
        q = c(106),
        Z = c(7);
      function W() {
        return n.a.createElement(
          Z.a,
          { to: "/about", className: "about-link" },
          n.a.createElement(Y.a, { variant: "link", size: "lg" }, "About")
        );
      }
      var $ = c(31),
        ee = 3,
        te = 39;
      function ce(e, t, c) {
        var a = $.a.timeline({ defaults: { duration: 0.3 } });
        t <= (c -= ee) && a.to(e, { y: -t * te });
      }
      c(77);
      function ae(e) {
        var t = e.resultSaved;
        return n.a.createElement(
          "svg",
          {
            version: "1.1",
            className: "icon-save ".concat(_(t, "saved")),
            width: "36",
            height: "32.4",
            viewBox: "0 0 36 32.4",
          },
          n.a.createElement("path", {
            className: "fill",
            d:
              "M36,9.7c0,6.7-6.1,12.1-15.4,20.4L18,32.4l-2.6-2.3C6.1,21.9,0,16.4,0,9.7\tC0,4.3,4.4,0,9.9,0C13,0,16,1.4,18,3.7C20,1.4,23,0,26.1,0C31.6,0,36,4.3,36,9.7z",
            fill: "#FCFCFC",
          }),
          n.a.createElement("path", {
            className: "outline",
            d:
              "M18.2,27.5L18,27.7l-0.2-0.2C9.3,19.9,3.6,14.8,3.6,9.7c0-3.5,2.7-6.2,6.3-6.2\tc2.8,0,5.5,1.8,6.4,4.2h3.4c0.9-2.4,3.6-4.2,6.4-4.2c3.6,0,6.3,2.7,6.3,6.2C32.4,14.8,26.7,19.9,18.2,27.5z M26.1,0\tC23,0,20,1.4,18,3.7C16,1.4,13,0,9.9,0C4.4,0,0,4.3,0,9.7c0,6.7,6.1,12.1,15.4,20.4l2.6,2.3l2.6-2.3C29.9,21.9,36,16.4,36,9.7\tC36,4.3,31.6,0,26.1,0z",
            fill: "#404040",
          })
        );
      }
      function ne(e) {
        var t = e.variant,
          c = e.size;
        return n.a.createElement(
          "svg",
          {
            version: "1.1",
            className: "icon-remove "
              .concat(U(t, "icon"), " ")
              .concat(U(c, "size")),
            viewBox: "0 0 36 36",
          },
          n.a.createElement("path", {
            className: "fill",
            d:
              "M35.1,18c0,9.5-7.6,17.1-17.1,17.1S0.9,27.5,0.9,18S8.5,0.9,18,0.9S35.1,8.5,35.1,18z",
            fill: "#FCFCFC",
          }),
          n.a.createElement("path", {
            className: "outline",
            d:
              "M18,32.4c-7.9,0-14.4-6.5-14.4-14.4S10.1,3.6,18,3.6S32.4,10.1,32.4,18\tS25.9,32.4,18,32.4z M18,0C8,0,0,8,0,18s8,18,18,18s18-8,18-18S28,0,18,0z M22.7,10.8L18,15.5l-4.7-4.7l-2.5,2.5l4.7,4.7l-4.7,4.7\tl2.5,2.5l4.7-4.7l4.7,4.7l2.5-2.5L20.5,18l4.7-4.7L22.7,10.8z",
            fill: "#404040",
          })
        );
      }
      function re() {
        return n.a.createElement(
          "svg",
          {
            version: "1.1",
            className: "icon-x-link",
            width: "19.8",
            height: "19.8",
            viewBox: "0 0 19.8 19.8",
          },
          n.a.createElement("path", {
            className: "outline",
            d:
              "M17.6,0H2.2C1,0,0,1,0,2.2v4.4h2.2V2.2h15.4v15.4H2.2v-4.4H0v4.4c0,1.2,1,2.2,2.2,2.2\th15.4c1.2,0,2.2-1,2.2-2.2V2.2C19.8,1,18.8,0,17.6,0z M7.8,13.8l1.6,1.6l5.5-5.5L9.4,4.4L7.8,6l2.8,2.8H0V11h10.6L7.8,13.8z",
            fill: "#404040",
          })
        );
      }
      function le(e) {
        var t = e.limit,
          c = e.nextClicks,
          r = e.setNextClicks,
          l = Object(a.useRef)(null);
        return n.a.createElement(
          "svg",
          {
            ref: l,
            onClick: function () {
              (c += 1),
                (function (e, t, c) {
                  ce((e = e.parentNode.previousSibling.children[0]), t, c);
                })(l.current, c, t),
                r(c);
            },
            version: "1.1",
            className: "icon-next",
            width: "42.6",
            height: "42.6",
            viewBox: "0 0 42.6 42.6",
          },
          n.a.createElement("path", {
            className: "fill",
            d:
              "M21.3,42.6C9.6,42.6,0,33,0,21.3C0,9.6,9.6,0,21.3,0C33,0,42.6,9.6,42.6,21.3\tC42.6,33,33,42.6,21.3,42.6z",
          }),
          n.a.createElement("path", {
            className: "outline",
            d:
              "M21.3,42.6C9.6,42.6,0,33,0,21.3C0,9.6,9.6,0,21.3,0C33,0,42.6,9.6,42.6,21.3\tC42.6,33,33,42.6,21.3,42.6z M21.3,3C11.2,3,3,11.2,3,21.3c0,10.1,8.2,18.3,18.3,18.3c10.1,0,18.3-8.2,18.3-18.3\tC39.6,11.2,31.4,3,21.3,3z",
          }),
          n.a.createElement("path", {
            className: "arrow",
            d:
              "M30.1,17.9l-8.8,8.8l-8.8-8.8l2.1-2.1l6.7,6.7l6.7-6.7L30.1,17.9z",
          })
        );
      }
      function se(e) {
        var t = e.limit,
          c = e.nextClicks,
          r = e.setNextClicks,
          l = Object(a.useRef)(null);
        return n.a.createElement(
          "svg",
          {
            ref: l,
            onClick: function () {
              (c -= 1),
                (function (e, t, c) {
                  ce((e = e.parentNode.nextSibling.children[0]), t, c);
                })(l.current, c, t),
                r(c);
            },
            version: "1.1",
            className: "icon-prev",
            width: "42.6",
            height: "42.6",
            viewBox: "0 0 42.6 42.6",
          },
          n.a.createElement("path", {
            className: "fill",
            d:
              "M21.3,0C33,0,42.6,9.6,42.6,21.3S33,42.6,21.3,42.6S0,33,0,21.3S9.6,0,21.3,0z",
          }),
          n.a.createElement("path", {
            className: "outline",
            d:
              "M21.3,0C33,0,42.6,9.6,42.6,21.3S33,42.6,21.3,42.6S0,33,0,21.3S9.6,0,21.3,0z M21.3,39.6c10.1,0,18.3-8.2,18.3-18.3S31.4,3,21.3,3S3,11.2,3,21.3S11.2,39.6,21.3,39.6z",
          }),
          n.a.createElement("path", {
            className: "arrow",
            d:
              "M12.5,24.7l8.8-8.8l8.8,8.8L28,26.8l-6.7-6.7l-6.7,6.7L12.5,24.7z",
          })
        );
      }
      function ue() {
        return n.a.createElement(
          "svg",
          { version: "1.1", className: "icon-avatar", viewBox: "0 0 75 75" },
          n.a.createElement("path", {
            className: "face",
            d:
              "M37.5,67.5c-16.5,0-30-13.5-30-30c0-1.1,0.1-2.2,0.2-3.2c8.9-3.9,15.9-11.2,19.5-20.1C34,23.7,45.2,30,57.8,30\tc2.9,0,5.7-0.3,8.4-1c0.8,2.7,1.2,5.5,1.2,8.5C67.5,54,54,67.5,37.5,67.5z M37.5,0C16.8,0,0,16.8,0,37.5S16.8,75,37.5,75\tS75,58.2,75,37.5S58.2,0,37.5,0z M48.8,36.6c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7s4.7-2.1,4.7-4.7S51.3,36.6,48.8,36.6z M26.2,36.6c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7s4.7-2.1,4.7-4.7S28.8,36.6,26.2,36.6z",
          })
        );
      }
      function ie(e) {
        var t = e.variant,
          c = e.size;
        return n.a.createElement(
          "svg",
          {
            version: "1.1",
            className: "icon-search "
              .concat(U(t, "icon"), " ")
              .concat(U(c, "size")),
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
          },
          n.a.createElement("path", {
            className: "magnify",
            d:
              "M10.1,17.1c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C17.1,14,14,17.1,10.1,17.1z M18.3,16c1.2-1.7,1.9-3.7,1.9-5.9\tC20.2,4.5,15.7,0,10.1,0S0,4.5,0,10.1s4.5,10.1,10.1,10.1c2.2,0,4.2-0.7,5.9-1.9c3,3,5.2,5.2,6.7,6.7l2.3-2.3\tC23.5,21.2,21.3,19,18.3,16z",
          })
        );
      }
      function oe() {
        return n.a.createElement(
          "svg",
          {
            version: "1.1",
            className: "icon-burger",
            width: "30",
            height: "20",
            viewBox: "0 0 30 20",
          },
          n.a.createElement("path", {
            d: "M0,0v3.3h30V0H0z M0,11.7h30V8.3H0V11.7z M0,20h30v-3.3H0V20z",
          })
        );
      }
      function me() {
        return n.a.createElement(
          "svg",
          {
            version: "1.1",
            className: "icon-help",
            width: "40.5",
            height: "40.5",
            viewBox: "0 0 40.5 40.5",
          },
          n.a.createElement("path", {
            d:
              "M20.2,8.1c-4.5,0-8.1,3.6-8.1,8.1h4.1c0-2.2,1.8-4.1,4-4.1s4,1.8,4,4.1c0,4-6.1,3.5-6.1,10.1h4c0-4.6,6.1-5.1,6.1-10.1\tC28.3,11.7,24.7,8.1,20.2,8.1z M20.2,36.5c-8.9,0-16.2-7.3-16.2-16.2S11.3,4,20.2,4s16.2,7.3,16.2,16.2S29.2,36.5,20.2,36.5z M20.2,0C9.1,0,0,9.1,0,20.2s9.1,20.2,20.2,20.2s20.2-9.1,20.2-20.2S31.4,0,20.2,0z M18.2,32.4h4v-4.1h-4V32.4z",
          })
        );
      }
      function fe() {
        return n.a.createElement(
          "div",
          { className: "btn btn-inline" },
          n.a.createElement(Z.a, { to: "/menu" }, n.a.createElement(oe, null))
        );
      }
      function ve(e) {
        var t = e.className;
        return n.a.createElement(
          "div",
          { className: "overlay__exit-icon ".concat(R(t)) },
          n.a.createElement(
            Z.a,
            { to: "/" },
            n.a.createElement(ne, { variant: "secondary" })
          )
        );
      }
      function de() {
        return n.a.createElement(
          Z.a,
          { to: "/" },
          n.a.createElement("div", { className: "overlay__exit" })
        );
      }
      function pe() {
        return n.a.createElement(
          "div",
          { className: "btn btn-inline" },
          n.a.createElement(Z.a, { to: "/about" }, n.a.createElement(me, null))
        );
      }
      var he = Object(l.b)(function (e) {
        return e;
      })(function () {
        var e = Object(l.c)(function (e) {
          return e.currentUser;
        });
        return e
          ? n.a.createElement(
              Z.a,
              { to: "/account", className: "account-link" },
              n.a.createElement(
                Y.a,
                { variant: "link", size: "lg" },
                "Hey, ".concat(e.firstName, "!")
              )
            )
          : n.a.createElement(
              Z.a,
              { to: "/login", className: "login-link" },
              n.a.createElement(Y.a, { variant: "link", size: "lg" }, "Log in")
            );
      });
      var Ee = Object(l.b)(
        function (e) {
          return e;
        },
        { currentUser: H, savedFilms: I, blacklist: Q, resultSaved: A }
      )(function (e) {
        var t = e.emailAddress,
          c = e.password,
          r = e.doSearch,
          s = e.currentUser,
          u = e.savedFilms,
          i = e.blacklist,
          v = e.resultSaved,
          d = e.setUserDenied,
          p = Object(f.f)(),
          h = Object(a.useCallback)(
            function () {
              return p.push("/");
            },
            [p]
          ),
          E = {
            searchQuery: Object(l.c)(function (e) {
              return e.searchQuery;
            }),
          };
        function b() {
          return (b = Object(m.a)(
            o.a.mark(function e(a) {
              var n, l, m;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        a.preventDefault(),
                        (e.next = 3),
                        z("users", t.current.value, c.current.value)
                      );
                    case 3:
                      if (!(n = e.sent).message) {
                        e.next = 8;
                        break;
                      }
                      d(n.message), (e.next = 20);
                      break;
                    case 8:
                      return (e.next = 10), j("blacklist", n.id);
                    case 10:
                      return (l = e.sent), (e.next = 13), j("saved", n.id);
                    case 13:
                      (m = e.sent),
                        s(n),
                        u(m),
                        i(l),
                        M(m, E.searchQuery) ? v(!0) : v(!1),
                        h(),
                        r(E.searchQuery, l);
                    case 20:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return n.a.createElement(
          Y.a,
          {
            block: !0,
            size: "md",
            variant: "primary",
            type: "submit",
            onClick: function (e) {
              !(function (e) {
                b.apply(this, arguments);
              })(e);
            },
          },
          "Log in"
        );
      });
      var be = Object(l.b)(function (e) {
        return e;
      })(function () {
        var e = Object(l.c)(function (e) {
          return e.currentUser;
        });
        return e
          ? n.a.createElement(
              Z.a,
              { to: "/account", className: "account-link" },
              n.a.createElement(Y.a, { variant: "link", size: "lg" }, "Account")
            )
          : n.a.createElement(
              Z.a,
              { to: "/login", className: "login-link" },
              n.a.createElement(Y.a, { variant: "link", size: "lg" }, "Log in")
            );
      });
      var ye = Object(l.b)(
        function (e) {
          return e;
        },
        {
          firstTime: V,
          resultSaved: A,
          currentUser: H,
          savedFilms: I,
          blacklist: Q,
        }
      )(function (e) {
        var t = e.firstTime,
          c = e.resultSaved,
          a = e.currentUser,
          r = e.savedFilms,
          s = e.blacklist,
          u = e.doSearch,
          i = {
            searchQuery: Object(l.c)(function (e) {
              return e.searchQuery;
            }),
          };
        return n.a.createElement(
          Z.a,
          { to: "/" },
          n.a.createElement(
            Y.a,
            {
              variant: "outline-primary",
              size: "md",
              onClick: function () {
                t(!1), c(!1), a(null), r([]), s([]), u(i.searchQuery, null);
              },
            },
            "Log Out"
          )
        );
      });
      var ge = Object(l.b)(
        function (e) {
          return e;
        },
        { savedFilms: I, albumResults: F, blacklist: Q, resultSaved: A }
      )(function (e) {
        var t = e.id,
          c = e.albumResults,
          r = e.savedFilms,
          s = e.blacklist,
          u = e.resultSaved,
          i = Object(f.f)(),
          v = Object(a.useCallback)(
            function () {
              return i.push("/login");
            },
            [i]
          ),
          d = {
            searchQuery: Object(l.c)(function (e) {
              return e.searchQuery;
            }),
            currentUser: Object(l.c)(function (e) {
              return e.currentUser;
            }),
            filmsSaved: Object(l.c)(function (e) {
              return e.savedFilms;
            }),
            albumResults: Object(l.c)(function (e) {
              return e.albumResults;
            }),
          };
        function p(e) {
          return d.albumResults.filter(function (t) {
            return t.id !== e && t;
          });
        }
        function h() {
          return (h = Object(m.a)(
            o.a.mark(function e() {
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!d.currentUser) {
                        e.next = 18;
                        break;
                      }
                      if (M(d.filmsSaved, d.searchQuery)) {
                        e.next = 9;
                        break;
                      }
                      return (
                        k("saved", {
                          userId: d.currentUser.id,
                          searchTerm: d.searchQuery,
                        }),
                        (e.t0 = r),
                        (e.next = 6),
                        j("saved", d.currentUser.id)
                      );
                    case 6:
                      (e.t1 = e.sent), (0, e.t0)(e.t1), u(!0);
                    case 9:
                      return (
                        k("blacklist", {
                          userId: d.currentUser.id,
                          searchTerm: d.searchQuery,
                          albumId: t,
                        }),
                        (e.t2 = s),
                        (e.next = 13),
                        j("blacklist", d.currentUser.id)
                      );
                    case 13:
                      (e.t3 = e.sent), (0, e.t2)(e.t3), c(p(t)), (e.next = 19);
                      break;
                    case 18:
                      v();
                    case 19:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return n.a.createElement(
          Y.a,
          {
            variant: "link",
            className: "remove-album",
            onClick: function () {
              return h.apply(this, arguments);
            },
            inline: "true",
          },
          n.a.createElement(ne, null)
        );
      });
      var Ne = Object(l.b)(
        function (e) {
          return e;
        },
        { savedFilms: I, blacklist: Q, resultSaved: A }
      )(function (e) {
        var t = e.id,
          c = e.savedFilms,
          a = e.searchTerm,
          r = e.resultSaved,
          s = e.blacklist,
          u = e.doSearch,
          i = {
            savedFilms: Object(l.c)(function (e) {
              return e.savedFilms;
            }),
            blacklist: Object(l.c)(function (e) {
              return e.blacklist;
            }),
          };
        return n.a.createElement(
          Y.a,
          {
            variant: "inline",
            onClick: function () {
              L("saved", t),
                r(!1),
                i.blacklist &&
                  (i.blacklist.forEach(function (e) {
                    e.searchTerm === a && L("blacklist", e.albumId);
                  }),
                  s(
                    i.blacklist.filter(function (e) {
                      return e.searchTerm !== a;
                    })
                  )),
                c(
                  i.savedFilms.filter(function (e) {
                    return e.id !== t;
                  })
                ),
                u(a, null);
            },
          },
          n.a.createElement(ne, { variant: "secondary", size: "sm" })
        );
      });
      var ke = Object(l.b)(
        function (e) {
          return e;
        },
        { savedFilms: I, blacklist: Q, resultSaved: A }
      )(function (e) {
        var t = e.savedFilms,
          c = e.resultSaved,
          r = e.blacklist,
          s = Object(f.f)(),
          u = Object(a.useCallback)(
            function () {
              return s.push("/login");
            },
            [s]
          ),
          i = {
            blacklist: Object(l.c)(function (e) {
              return e.blacklist;
            }),
            resultSaved: Object(l.c)(function (e) {
              return e.resultSaved;
            }),
            searchQuery: Object(l.c)(function (e) {
              return e.searchQuery;
            }),
            currentUser: Object(l.c)(function (e) {
              return e.currentUser;
            }),
            savedFilms: Object(l.c)(function (e) {
              return e.savedFilms;
            }),
          };
        function v() {
          return (v = Object(m.a)(
            o.a.mark(function e() {
              var a,
                n = arguments;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = n.length > 0 && void 0 !== n[0] ? n[0] : ""),
                        !i.currentUser)
                      ) {
                        e.next = 18;
                        break;
                      }
                      if (!i.resultSaved) {
                        e.next = 9;
                        break;
                      }
                      i.savedFilms.forEach(function (e) {
                        e.searchTerm === i.searchQuery &&
                          (L("saved", e.id), (a = e.id));
                      }),
                        i.blacklist &&
                          (i.blacklist.forEach(function (e) {
                            e.searchTerm === i.searchQuery &&
                              L("blacklist", e.albumId);
                          }),
                          r(
                            i.blacklist.filter(function (e) {
                              return e.searchTerm !== i.searchQuery;
                            })
                          )),
                        t(
                          i.savedFilms.filter(function (e) {
                            return e.id !== a;
                          })
                        ),
                        c(!1),
                        (e.next = 16);
                      break;
                    case 9:
                      return (
                        k("saved", {
                          userId: i.currentUser.id,
                          searchTerm: i.searchQuery,
                        }),
                        (e.t0 = t),
                        (e.next = 13),
                        j("saved", i.currentUser.id)
                      );
                    case 13:
                      (e.t1 = e.sent), (0, e.t0)(e.t1), c(!0);
                    case 16:
                      e.next = 19;
                      break;
                    case 18:
                      u();
                    case 19:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return n.a.createElement(
          Y.a,
          {
            variant: "link",
            className: "save-film",
            onClick: function () {
              return v.apply(this, arguments);
            },
          },
          n.a.createElement(ae, { resultSaved: i.resultSaved })
        );
      });
      var Se = Object(l.b)(
        function (e) {
          return e;
        },
        { resultSaved: A, searchQuery: T }
      )(function (e) {
        var t = e.savedTitle,
          c = e.doSearch,
          a = e.resultSaved,
          r = e.searchQuery;
        return n.a.createElement(
          Z.a,
          { to: "/", className: "search-saved__link" },
          n.a.createElement(
            Y.a,
            {
              variant: "inline",
              onClick: function () {
                r(t), c(t), a(!0);
              },
            },
            n.a.createElement(ie, { variant: "secondary", size: "sm" })
          )
        );
      });
      var Le = Object(l.b)(function (e) {
        return e;
      })(function () {
        return Object(l.c)(function (e) {
          return e.currentUser;
        })
          ? null
          : n.a.createElement(
              Z.a,
              { to: "/signup", className: "signup-link" },
              n.a.createElement(
                Y.a,
                { variant: "outline-primary", size: "lg" },
                "Sign up"
              )
            );
      });
      var xe = Object(l.b)(
        function (e) {
          return e;
        },
        { currentUser: H, firstTime: V }
      )(function (e) {
        var t = e.firstName,
          c = e.lastName,
          r = e.emailAddress,
          l = e.password,
          s = e.currentUser,
          u = e.firstTime,
          i = e.setErrorMsgs,
          v = Object(f.f)(),
          d = Object(a.useCallback)(
            function () {
              return v.push("/");
            },
            [v]
          );
        function p() {
          return (p = Object(m.a)(
            o.a.mark(function e(a) {
              var n;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        a.preventDefault(),
                        (e.next = 3),
                        k("users", {
                          firstName: t.current.value,
                          lastName: c.current.value,
                          emailAddress: r.current.value,
                          password: l.current.value,
                          level: "free",
                        })
                      );
                    case 3:
                      (n = e.sent).errors ? i(n.errors) : (s(n), u(!0), d());
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return n.a.createElement(
          Y.a,
          {
            block: !0,
            size: "md",
            variant: "primary",
            type: "submit",
            onClick: function (e) {
              return p.apply(this, arguments);
            },
          },
          "Sign up"
        );
      });
      var je = Object(l.b)(
          function (e) {
            return e;
          },
          { firstTime: V, currentUser: H, savedFilms: I, blacklist: Q }
        )(function (e) {
          var t = e.currentUser,
            c = e.savedFilms,
            a = e.blacklist,
            r = e.firstTime;
          return (function (e) {
            return e
              ? n.a.createElement(
                  Z.a,
                  { to: "/", className: "signup-link" },
                  n.a.createElement(
                    Y.a,
                    {
                      variant: "outline-primary",
                      size: "lg",
                      onClick: function () {
                        r(!1), e(null), c([]), a([]);
                      },
                    },
                    "Log out"
                  )
                )
              : n.a.createElement(
                  Z.a,
                  { to: "/signup", className: "signup-link" },
                  n.a.createElement(
                    Y.a,
                    { variant: "outline-primary", size: "lg" },
                    "Sign up"
                  )
                );
          })(t);
        }),
        Ce = c(99);
      c(78);
      function ze(e) {
        var t = e.related,
          c = { total: t.length, minimum: 3 },
          r = Object(a.useState)(0),
          l = Object(G.a)(r, 2),
          s = l[0],
          u = l[1];
        return (
          (c.excess = c.total - 4),
          n.a.createElement(
            "div",
            { className: "related-artists container" },
            s > 0
              ? n.a.createElement(
                  "div",
                  { className: "related-artists prev" },
                  n.a.createElement(se, {
                    limit: c.total,
                    nextClicks: s,
                    setNextClicks: function (e) {
                      u(e);
                    },
                  })
                )
              : null,
            n.a.createElement(
              "div",
              { className: "related-artists wrap" },
              n.a.createElement(
                Ce.a,
                { striped: !0, className: "related-artists" },
                n.a.createElement(
                  "tbody",
                  null,
                  t.map(function (e, t) {
                    var c = e.name,
                      a = e.url;
                    return n.a.createElement(
                      "tr",
                      { key: t },
                      n.a.createElement(
                        "td",
                        null,
                        n.a.createElement(
                          Y.a,
                          {
                            href: a,
                            className: "related-artists",
                            target: "_blank",
                            variant: "link",
                          },
                          w(c, 20)
                        )
                      ),
                      n.a.createElement(
                        "td",
                        { style: { width: "4.6rem" } },
                        n.a.createElement(
                          Y.a,
                          {
                            href: a,
                            className: "related-artists",
                            target: "_blank",
                            variant: "link",
                          },
                          n.a.createElement(re, null)
                        )
                      )
                    );
                  })
                )
              )
            ),
            (function () {
              if (c.total > c.minimum && s <= c.excess)
                return n.a.createElement(
                  "div",
                  { className: "related-artists next" },
                  n.a.createElement(le, {
                    limit: c.total,
                    nextClicks: s,
                    setNextClicks: function (e) {
                      u(e);
                    },
                  })
                );
            })()
          )
        );
      }
      c(79);
      var Oe = Object(l.b)(
        function (e) {
          return e;
        },
        { albumResults: F }
      )(function (e) {
        e.albumResults;
        var t = {
          albumResults: Object(l.c)(function (e) {
            return e.albumResults;
          }),
          searchQuery: Object(l.c)(function (e) {
            return e.searchQuery;
          }),
          currentUser: Object(l.c)(function (e) {
            return e.currentUser;
          }),
          blacklist: Object(l.c)(function (e) {
            return e.blacklist;
          }),
        };
        return n.a.createElement(
          "div",
          { className: "album-results container" },
          n.a.createElement(
            X.a,
            { className: "album-results" },
            t.albumResults.slice(0, 6).map(function (e, t) {
              var c = e.id,
                a = e.name,
                r = e.url,
                l = e.images,
                s = e.release_date,
                u = e.related;
              return n.a.createElement(
                q.a,
                { className: "album-results", key: t },
                n.a.createElement(ge, { id: c }),
                n.a.createElement(
                  q.a.Header,
                  { className: "album-results" },
                  n.a.createElement("img", {
                    className: "album-results",
                    alt: w(a),
                    src: l[0].url,
                  })
                ),
                n.a.createElement(
                  q.a.Body,
                  null,
                  n.a.createElement(
                    q.a.Title,
                    { className: "album-results" },
                    n.a.createElement("h2", null, w(a))
                  ),
                  n.a.createElement(
                    q.a.Subtitle,
                    { className: "album-results text-muted" },
                    n.a.createElement("h2", null, s)
                  ),
                  n.a.createElement(
                    Y.a,
                    {
                      size: "sm",
                      target: "_blank",
                      className: "find-album",
                      href: r,
                      block: !0,
                    },
                    "Find on Spotify"
                  ),
                  u ? n.a.createElement(ze, { related: u }) : null
                )
              );
            })
          )
        );
      });
      c(80);
      var we = Object(l.b)(function (e) {
        return e;
      })(function () {
        var e = {
          filmResult: Object(l.c)(function (e) {
            return e.filmResult;
          }),
          resultSaved: Object(l.c)(function (e) {
            return e.resultSaved;
          }),
        };
        return n.a.createElement(
          q.a,
          { className: "film-result ".concat(_(e.resultSaved, "saved")) },
          n.a.createElement(ke, null),
          n.a.createElement(
            q.a.Header,
            { className: "film-result" },
            n.a.createElement(
              "h1",
              { className: "film-result title" },
              e.filmResult.Title
            ),
            n.a.createElement(
              "p",
              { className: "film-result year" },
              e.filmResult.Year
            )
          ),
          n.a.createElement(
            q.a.Body,
            { className: "film-result" },
            n.a.createElement(
              "div",
              { className: "film-result plot" },
              e.filmResult.Plot
            )
          )
        );
      });
      c(81);
      var Me = Object(l.b)(function (e) {
          return e;
        })(function () {
          var e = {
            filmResult: Object(l.c)(function (e) {
              return e.filmResult;
            }),
            albumResults: Object(l.c)(function (e) {
              return e.albumResults;
            }),
          };
          return n.a.createElement(
            B.a,
            { className: "search-results" },
            e.filmResult
              ? e.filmResult.Error
                ? n.a.createElement(
                    D.a,
                    { variant: "primary", className: "not-found" },
                    n.a.createElement(D.a.Item, null, e.filmResult.Error)
                  )
                : e.albumResults.length > 0
                ? n.a.createElement(
                    "div",
                    null,
                    n.a.createElement(we, null),
                    n.a.createElement(Oe, null)
                  )
                : n.a.createElement(
                    "div",
                    null,
                    n.a.createElement(we, null),
                    n.a.createElement(
                      D.a,
                      { variant: "primary", className: "not-found" },
                      n.a.createElement(D.a.Item, null, "No Albums Found ?!")
                    )
                  )
              : "no film result"
          );
        }),
        _e = c(103);
      c(45);
      function Re(e) {
        var t = e.className;
        return n.a.createElement(
          "svg",
          {
            "data-testid": "blockButton",
            className: "logo__block ".concat(t),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 325 170",
          },
          n.a.createElement(
            "g",
            null,
            n.a.createElement("path", {
              d:
                "M267.5,116.7c0,0-2.2-2.2-8.4-6.8c0,0-0.6-0.5-0.9-0.6c0,0-1-0.5-1.9,0.5c-0.5,0.5-3.6,4.3-7.1,8.5c0,0-4.7,5.4-9.9,11.4 l-11.3,13.3l-4.8,5.7c-2.3,2.1-6.4,5.7-10.2,8.8c0,0-6.3,4.7-9.3,4.5c0,0-3.7-0.5-3.4-7c0.2-1.3,0.5-2.6,0.8-3.7 c0.6-2,1.3-3.9,2.2-5.6c0,0,2.3-4.7,5.1-8.2c0,0,3.4,4,6.3,4.5c0,0,5.3,0.6,12.4-7.3c0,0,4.3-4.3,5.9-8.4c0,0,0.8-2-0.3-3 c0,0-0.5-0.8-0.9-0.9c0,0-0.2-0.3-0.5-0.6c0,0-2.5-5.3-7.3-8.5c0,0-1-0.8-1.4-0.6c-16.3,6.4-23.8,19.5-25.4,22.3 c0,0-1.1,1.8-2.3,4.6c-6.8,8.1-18.2,20.9-21.6,20.8c0,0-0.9,0.5-0.9-0.2c0,0,2.3-11.1,23.2-36.4c0,0,1.6-2.3,0-3.6c0,0-1.1-1.9-6-6 c0,0-1.3-1.1-2-0.9c0,0-1,0-2.3,2l-5.7,6.4c0,0-7.3,8.7-18.1,19c0,0-0.5,0.3-0.6-0.3c0,0,2-2.7,11-17.4c0,0,1.3-2.5-0.5-4 c0,0-0.9-1.3-3.3-2.8c0,0-2.6-1.6-4.2-2.6c0,0-1.1-0.8-1.9,0.5c-7.6,8.8-10.7,12.8-22.9,28.1c-3.8,4.3-8.8,9.8-15.5,16.3l-0.2-0.1 c0,0-1.9-7.1,10-22.9c0,0,2.7-3.9,6.4-8.5c0,0,2.2-2,2.5-4.2c0,0,0.3-1.6-0.8-2.6c0,0-2.3-2.6-6.4-5.4c0,0-0.8-0.6-1.1-0.5 c0,0-0.6,0-0.8,1.1c0,0-1,1.4-36.8,43.9c0,0-0.5,0.5-0.5,0.2c0,0-0.5-2.6,1.4-8.5c0,0,4.7-14.2,17.5-26.6c0,0,2-2.3,1.7-4.8 c0,0-0.5-3.9-5-7.1c0,0-2.2-1.6-3-1c0,0-0.9,0.3-0.6,1c0,0,0,1.3-0.6,2.2l-6.4,8.5c0,0-3.2,4.2-6.5,9.6l-10.5,12.2 c0,0-10.8,12.2-17.7,15.9c0,0-1.4,0.8-2.2,0.5c0,0-1.1-1.1-1-3.3c0,0,0.9-12.4,22.1-38.1c0,0,4.2,0,11.1-2c0,0,2-0.6,1.6-1.6 c0,0,0-0.8-1.7-0.9c0,0-1.4-0.3-6.8-0.5l5-6.2c0,0,3-3.6,2.5-7c0,0-1.3-5.6-8-8.5c0,0-1.3-0.6-1.7-0.6c0,0-0.8,0.2-0.6,0.8 c0,0,0.2,0.2,0.2,0.5c0,0,0.1,2.3-2.2,5.7c0,0-1.4,2.6-11,16.2c0,0-8.2,0.8-10.5,1.6c0,0-1.3,0.3-1.1,0.6c0,0-0.2,0.8,0.5,0.9 c0,0,3.1,1.4,8.2,1.6l-0.2,0.2c0,0-7.1,10.4-10.4,16.6c-2.7,5.1-4,9.1-4.5,12.2c0,0-0.6,5.3,1,7.7c1,2.5,2.6,4.3,4.2,5.7 c0,0,2.5,2.2,4.6,3c0,0,2.8,1.1,3.7,1c0,0,1.9,0.2,3.9-1.3c0,0,3-1.7,9.6-11.4c0,0,2.4-3.8,6.9-10.5c-0.7,2-1.1,3.9-1.3,5.7 c0,0-0.9,7,3.3,11.9l1.1,1.6c0,0,1.7,2.8,4.8,3.9c0,0,2.2,0.6,3.6-1c0,0,3.9-4.6,16.3-24.7l0.3,0.2c0,0-2.3,5.3-3,10.1 c-0.3,2.2-0.5,4-0.1,5.3c1.7,10,9.7,10.1,9.7,10.1s2.3,0.2,4.2-2.6c0,0,4.6-7.3,18.7-27.3c0.7-0.8,1.4-1.6,2.3-2.6l7.1-8l0.1,0.2 c0,0-4.5,7.9-16.2,28.9c0,0-2.2,4-0.6,7.4c0,0,0.6,1.6,2.8,3.9c0,0,0.8,0.9,1.7,0.9c0,0,0.8,0,0.8-0.9c0,0,0-0.8,0.3-1.1 c0,0,0-0.8,3.4-5.1c0,0,5.6-7.1,27.7-30l0.3,0.3c0,0-5.9,9.3-8.7,15.1c0,0-3.1,5.9-3,9.9c0,0-0.1,4.3,3.1,6.7l3.3,2.3 c0,0,2.8,2.5,4.5,2.5c0,0,2,0.3,4.5-2.6c0,0,2.7-3.2,12.2-16.6c-0.2,1.2-0.3,2.5-0.2,3.7c0,0-0.2,5.1,3.3,8c0,0,1.6,1.7,5.1,4.3 c0,0,3.9,3,8.2,3.3c0,0,2.3,0,3.9-1.1c2.7-2,6.5-6,10.4-10.5c1-1.2,2.1-2.5,3-3.8c2.2-2.5,5.2-5.9,9.5-10.8 c2.5-2.7,6.8-7.4,10.5-11.4c0,0,3.9-4,7.1-7.4l0.2,0.2c-1.9,3.7-3.7,7.9-5.3,11.6c0,0-2.3,5.9-4.5,10.4c0,0-1.7,5.3-4.7,10.1 c0,0-3.3,4.6-6.5,4.3c0,0-2.6,0-5.3-1.6c0,0-1-0.6-1.9,0.1c0,0-0.8,0.6-0.2,1.4c0,0,6,7.7,12.1,8c0,0,10,0.8,14.5-14.8 c1.1-4,2.8-8,4.6-12.5c4.6-10.7,11.4-17.7,11.4-17.7s1.1-1,1.1-1.9C269.3,119.4,269.3,118,267.5,116.7z M226.9,124.4 c-4.8,8-10,11.4-10,11.4c-5.6,3.4-7.7,0.9-7.7,0.9C215.2,127.9,226.9,124.4,226.9,124.4z",
            }),
            n.a.createElement("path", {
              d:
                "M1.8,67V3.7h23.4l12,9.6L42.8,33l9.6-29.4h23.4l9.8,9.3v63.4H70.4L61,67V50.2l-8.9,26.1H39.7L32.3,67l-6.8-19.4v28.7H11.1 L1.8,67z M23.9,74.8V43.1l-6-17.1l-0.7-2.5v43.9H4.5l7.2,7.2L23.9,74.8L23.9,74.8z M41.9,35.8l-6.1-21.6l-9.2-7.4l12.4,38 L41.9,35.8z M50.9,74.8L61,45.3V23.2L60.1,26l0,0L45.4,67.5H34.7l5.8,7.2C40.5,74.8,50.9,74.8,50.9,74.8z M83.8,74.8v-61l-7.6-7.3 v61.2H63.8l7.3,7.2L83.8,74.8L83.8,74.8z M107.4,65.8l-5.9-5.8c-6.3-6.2-10.4-14.5-10.4-24.2c0-18.5,14.9-33.3,33.3-33.3 c9.6,0,18.1,4.2,24.3,10.4l7.3,7.3c6.8,6.8,10.1,14.8,10.1,24.3c0,18.1-15,32.9-33.3,32.9C122.8,77.4,115.9,74.3,107.4,65.8z M113.4,43.2c0-11,8.4-19.7,19-19.7c2.4,0,4.5,0.5,6.3,1.5c-3.3-4.7-8.4-7.3-14.3-7.4c-9.8,0-17.4,7.8-17.4,18 c0.1,6.6,2.7,12,7.8,15.4C113.9,48.8,113.4,46.5,113.4,43.2z M164.6,44.6c0-9.9-3.5-17.3-10.9-24.5c2.8,4.9,3.9,9.7,4.1,15.7 c0,18.4-14.9,33.3-33.3,33.3c-5.7,0-11.2-1.6-16-4.3c7.9,8.1,15,11,24.4,11C150.3,75.8,164.6,61.8,164.6,44.6z M141.9,35.7 c0-3-0.6-5.6-1.7-7.9c-2.3-1.8-4.7-2.6-7.8-2.6c-9.8,0-17.4,7.9-17.4,18.1c0,4.3,0.8,6.9,2.6,9.3c2.1,0.9,4.5,1.4,6.9,1.4 C134.2,53.9,141.9,45.9,141.9,35.7z M183.6,67.2L159.6,3.7h17.5l12.4,9.2l7.7,21.8l9.9-31h17l8.4,8.6l-24.1,64.1h-15.6L183.6,67.2z M196.4,37.2l-8.2-23.4l-9.7-7.1l14.5,41.1L196.4,37.2z M207.3,74.8l23.4-62.1L224.1,6l-23.3,61.6h-14.6l7.2,7.2L207.3,74.8 L207.3,74.8z M236.6,67V3.7h15.2l9.8,9.3v63.4h-15.7L236.6,67z M260.1,74.8v-61l-7.7-7.3v61.2h-13.1l7.2,7.2L260.1,74.8L260.1,74.8 z M270.5,67V3.7h42.2l9.3,9.3v11.6h-27.2v3.2h13.7l9.3,9.3v12.9h-23.1v3.2h19.1l9.3,9.3v14h-43.4L270.5,67z M321.8,74.8V63.1 l-7.2-7.2v11.7h-41.3l7.2,7.2C280.5,74.8,321.8,74.8,321.8,74.8z M293.3,27.8V23h27.2v-9.4l-7.2-7.2v11.5h-27.2v9.9H293.3z M293.3,53.2v-4.7h23.1V37.7l-7.2-7.2v11.9h-23.1v10.8C286.1,53.2,293.3,53.2,293.3,53.2z",
            })
          )
        );
      }
      function Ue(e) {
        var t = e.className;
        return n.a.createElement(
          "svg",
          {
            className: "logo__inline ".concat(t),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 565 75",
          },
          n.a.createElement(
            "g",
            null,
            n.a.createElement("path", {
              d:
                "M561.8,24.1c0,0-2.2-2.2-8.5-6.9c0,0-0.6-0.4-0.9-0.6c0,0-1-0.4-1.9,0.4c-0.4,0.4-3.6,4.3-7.2,8.6c0,0-4.7,5.5-9.9,11.5 l-11.4,13.4l-4.9,5.8c-2.3,2.1-6.4,5.8-10.3,8.9c0,0-6.3,4.7-9.3,4.5c0,0-3.7-0.4-3.4-7c0.1-1.3,0.4-2.6,0.7-3.7 c0.6-2,1.3-3.9,2.2-5.6c0,0,2.3-4.7,5.2-8.2c0,0,3.4,4,6.3,4.5c0,0,5.3,0.6,12.5-7.3c0,0,4.3-4.3,5.9-8.5c0,0,0.7-2-0.3-3 c0,0-0.4-0.7-0.9-0.9c0,0-0.1-0.3-0.4-0.6c0,0-2.4-5.3-7.3-8.6c0,0-1-0.7-1.4-0.6c-16.4,6.5-24,19.7-25.6,22.4c0,0-1.1,1.8-2.3,4.5 c-6.9,8.1-18.3,21-21.7,20.9c0,0-0.9,0.4-0.9-0.1c0,0,2.3-11.2,23.4-36.6c0,0,1.6-2.3,0-3.6c0,0-1.1-1.9-6-6c0,0-1.3-1.1-2-0.9 c0,0-1,0-2.3,2l-5.7,6.5c0,0-7.3,8.8-18.2,19.1c0,0-0.4,0.3-0.6-0.3c0,0,2-2.7,11.1-17.5c0,0,1.3-2.4-0.4-4c0,0-0.9-1.3-3.3-2.9 c0,0-2.6-1.6-4.2-2.6c0,0-1.1-0.7-1.9,0.4c-7.6,8.9-10.8,12.9-23.1,28.3c-3.8,4.3-8.9,9.8-15.5,16.4l-0.1-0.1c0,0-1.9-7.2,10.1-23 c0,0,2.7-3.9,6.5-8.6c0,0,2.2-2,2.4-4.2c0,0,0.3-1.6-0.7-2.6c0,0-2.3-2.6-6.5-5.5c0,0-0.7-0.6-1.1-0.4c0,0-0.6,0-0.7,1.1 c0,0-1,1.4-37.1,44.3c0,0-0.4,0.4-0.4,0.1c0,0-0.4-2.6,1.4-8.6c0,0,4.7-14.4,17.7-26.9c0,0,2-2.3,1.7-4.9c0,0-0.4-3.9-5-7.2 c0,0-2.2-1.6-3-1c0,0-0.9,0.3-0.6,1c0,0,0,1.3-0.6,2.2l-6.5,8.6c0,0-3.3,4.2-6.6,9.7l-10.6,12.3c0,0-10.9,12.4-17.8,16.1 c0,0-1.4,0.7-2.2,0.4c0,0-1.1-1.1-1-3.3c0,0,0.9-12.5,22.3-38.4c0,0,4.2,0,11.2-2c0,0,2-0.6,1.6-1.6c0,0,0-0.7-1.7-0.9 c0,0-1.4-0.3-6.9-0.4l5-6.2c0,0,3-3.6,2.4-7c0,0-1.3-5.6-8-8.6c0,0-1.3-0.6-1.7-0.6c0,0-0.7,0.1-0.6,0.7c0,0,0.1,0.1,0.1,0.4 c0,0,0.1,2.3-2.2,5.7c0,0-1.4,2.6-11.1,16.4c0,0-8.2,0.7-10.6,1.6c0,0-1.3,0.3-1.1,0.6c0,0-0.1,0.7,0.4,0.9c0,0,3.2,1.4,8.2,1.6 l-0.1,0.1c0,0-7.2,10.5-10.5,16.7c-2.7,5.2-4,9.2-4.5,12.4c0,0-0.6,5.3,1,7.8c1,2.4,2.6,4.3,4.2,5.7c0,0,2.4,2.2,4.6,3 c0,0,2.9,1.1,3.7,1c0,0,1.9,0.1,3.9-1.3c0,0,3-1.7,9.6-11.5c0,0,2.4-3.8,6.9-10.6c-0.7,2-1.2,3.9-1.3,5.7c0,0-0.9,7,3.3,11.9 l1.1,1.6c0,0,1.7,2.9,4.9,3.9c0,0,2.2,0.6,3.6-1c0,0,3.9-4.6,16.4-24.9l0.3,0.1c0,0-2.3,5.3-3,10.2c-0.3,2.2-0.4,4-0.1,5.3 c1.7,10.1,9.8,10.2,9.8,10.2s2.3,0.1,4.2-2.6c0,0,4.6-7.4,18.8-27.5c0.7-0.8,1.4-1.7,2.3-2.6l7.2-8l0.1,0.1c0,0-4.5,7.9-16.4,29.2 c0,0-2.2,4-0.6,7.5c0,0,0.6,1.6,2.9,3.9c0,0,0.7,0.9,1.7,0.9c0,0,0.7,0,0.7-0.9c0,0,0-0.7,0.3-1.1c0,0,0-0.7,3.4-5.2 c0,0,5.6-7.2,27.9-30.2l0.3,0.3c0,0-5.9,9.3-8.8,15.2c0,0-3.2,5.9-3,9.9c0,0-0.1,4.3,3.2,6.8l3.3,2.3c0,0,2.9,2.4,4.5,2.4 c0,0,2,0.3,4.5-2.6c0,0,2.8-3.2,12.3-16.7c-0.2,1.2-0.3,2.5-0.2,3.8c0,0-0.1,5.2,3.3,8c0,0,1.6,1.7,5.2,4.3c0,0,3.9,3,8.3,3.3 c0,0,2.3,0,3.9-1.1c2.7-2,6.6-6,10.5-10.6c1-1.2,2.1-2.5,3.1-3.8c2.2-2.5,5.2-6,9.6-10.9c2.4-2.7,6.9-7.5,10.6-11.5 c0,0,3.9-4,7.2-7.5l0.1,0.1c-1.9,3.7-3.7,7.9-5.3,11.6c0,0-2.3,5.9-4.5,10.5c0,0-1.7,5.3-4.7,10.2c0,0-3.3,4.6-6.6,4.3 c0,0-2.6,0-5.3-1.6c0,0-1-0.6-1.9,0.1c0,0-0.7,0.6-0.1,1.4c0,0,6,7.8,12.2,8c0,0,10.1,0.7,14.7-14.9c1.1-4,2.9-8,4.6-12.6 c4.6-10.8,11.5-17.8,11.5-17.8s1.1-1,1.1-1.9C563.6,26.9,563.7,25.4,561.8,24.1z M520.9,31.9c-4.9,8-10.1,11.5-10.1,11.5 c-5.6,3.4-7.8,0.9-7.8,0.9C509.1,35.5,520.9,31.9,520.9,31.9z",
            }),
            n.a.createElement("path", {
              d:
                "M1.4,64.6V1.2h23.4l12,9.6l5.6,19.7L52,1.2h23.3l9.8,9.3v63.4H70l-9.4-9.3V47.8l-8.9,26.1H39.3l-7.4-9.3L25,45.3v28.7H10.8 L1.4,64.6z M23.4,72.3V40.7l-6-17.1l-0.7-2.4v43.9H4.1l7.2,7.2H23.4z M41.5,33.3l-6.1-21.6l-9.2-7.4l12.4,38L41.5,33.3z M50.5,72.3 l10-29.5V20.8l-0.8,2.8v0L45,65.1H34.3l5.8,7.2H50.5z M83.5,72.3V11.2l-7.7-7.3v61.2H63.3l7.3,7.2H83.5z M106.9,63.4l-5.9-5.9 c-6.3-6.2-10.4-14.6-10.4-24.3C90.7,14.8,105.6,0,124,0c9.6,0,18,4.1,24.3,10.4l7.3,7.3c6.8,6.8,10.1,14.8,10.1,24.4 c0,18.1-15,32.9-33.3,32.9C122.4,75,115.4,71.8,106.9,63.4z M112.9,40.8c0-11,8.4-19.7,19-19.7c2.4,0,4.4,0.5,6.4,1.5 c-3.2-4.7-8.4-7.3-14.3-7.4c-9.8,0-17.4,7.8-17.4,18c0.1,6.6,2.7,12,7.8,15.4C113.5,46.4,112.9,44,112.9,40.8z M164.1,42.1 c0-9.9-3.4-17.3-10.8-24.5c2.8,5,3.9,9.7,4,15.7c0,18.4-14.9,33.3-33.3,33.3c-5.7,0-11.2-1.6-16-4.2c7.9,8.1,15,11,24.5,11 C149.8,73.4,164.1,59.3,164.1,42.1z M141.4,33.3c0-2.9-0.6-5.6-1.6-8c-2.3-1.8-4.8-2.6-7.8-2.6c-9.8,0-17.4,7.9-17.4,18.1 c0,4.2,0.8,6.9,2.5,9.2c2.1,0.9,4.4,1.4,6.9,1.4C133.7,51.4,141.4,43.4,141.4,33.3z M183.1,64.7l-24-63.5h17.5l12.4,9.2l7.7,21.8 l9.9-30.9h17l8.4,8.6l-24.1,64.1h-15.5L183.1,64.7z M195.9,34.7l-8.2-23.3l-9.6-7.2l14.5,41.1L195.9,34.7z M206.8,72.3l23.3-62.2 l-6.5-6.7l-23.3,61.6h-14.6l7.2,7.2H206.8z M236.1,64.6V1.2h15.2l9.8,9.3v63.4h-15.7L236.1,64.6z M259.5,72.3V11.2l-7.7-7.3v61.2 h-13l7.2,7.2H259.5z M270,64.6V1.2h42.2l9.3,9.3v11.6h-27.2v3.2h13.7l9.3,9.3v12.8h-23v3.2h19.1l9.3,9.3v13.9h-43.4L270,64.6z M321.2,72.3V60.6l-7.2-7.2v11.7h-41.2l7.2,7.2H321.2z M292.8,25.3v-4.8H320v-9.4L312.7,4v11.5h-27.2v9.9H292.8z M292.8,50.7v-4.8 h23V35.3l-7.2-7.2v11.9h-23v10.8H292.8z",
            })
          )
        );
      }
      function Te(e) {
        var t = e.className;
        return n.a.createElement(
          "svg",
          {
            className: "logo__mobile ".concat(t),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 48",
          },
          n.a.createElement("path", {
            d:
              "M53.8,46.7V6.6l-5.1-4.8V42h-8.1l4.8,4.7H53.8z M32.2,46.7l6.6-19.3V12.9l-0.6,1.8\tL28.6,42h-7.1l3.8,4.7H32.2z M26.3,21.2L22.2,7l-6-4.9L24.3,27L26.3,21.2z M14.5,46.7V26l-4-11.2l-0.5-1.6v28.8H1.8l4.7,4.7\tL14.5,46.7L14.5,46.7z M0,41.7V0.1h15.3l7.8,6.4l3.7,12.9l6.3-19.3h15.3l6.4,6.1v41.6H45l-6.2-6.1v-11L33,47.8h-8.1L20,41.7L15.5,29\tv18.8H6.1L0,41.7z M91.7,22.9c-0.9,1.4-1.8,2.1-1.8,2.1c-1,0.6-1.4,0.1-1.4,0.1C89.5,23.6,91.7,22.9,91.7,22.9z M99.1,21.5\tc0,0-0.4-0.4-1.6-1.2c0,0-0.1-0.1-0.1-0.1c0,0-0.2-0.1-0.3,0.1c-0.1,0.1-0.6,0.8-1.3,1.6c0,0-0.8,1-1.8,2.1l-2.1,2.4l-0.9,1\tc-0.4,0.4-1.2,1-1.9,1.6c0,0-1.2,0.8-1.7,0.8c0,0-0.6-0.1-0.6-1.3c0-0.3,0.1-0.5,0.1-0.6c0.1-0.4,0.3-0.7,0.4-1c0,0,0.4-0.8,0.9-1.5\tc0,0,0.6,0.7,1.2,0.8c0,0,1,0.1,2.3-1.3c0,0,0.8-0.8,1-1.6c0,0,0.1-0.4-0.1-0.5c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1\tc0,0-0.5-1-1.3-1.6c0,0-0.2-0.1-0.3-0.1c-3,1.2-4.3,3.6-4.6,4.1c0,0-0.2,0.3-0.4,0.8c-1.2,1.5-3.3,3.8-4,3.8c0,0-0.1,0.1-0.1,0\tc0,0,0.4-2,4.2-6.6c0,0,0.3-0.4,0-0.6c0,0-0.2-0.3-1.1-1.1c0,0-0.3-0.2-0.4-0.1c0,0-0.2,0-0.4,0.4l-1,1.2c0,0-1.3,1.6-3.3,3.4\tc0,0-0.1,0.1-0.1-0.1c0,0,0.4-0.5,2-3.2c0,0,0.3-0.5-0.1-0.7c0,0-0.1-0.3-0.6-0.5c0,0-0.5-0.3-0.8-0.5c0,0-0.2-0.1-0.3,0.1\tc-1.4,1.6-1.9,2.3-4.2,5.1c-0.7,0.8-1.6,1.8-2.8,3c0,0-0.3-1.3,1.8-4.2c0,0,0.5-0.7,1.2-1.6c0,0,0.4-0.4,0.5-0.8\tc0,0,0.1-0.3-0.1-0.5c0,0-0.4-0.5-1.2-1c0,0-0.1-0.1-0.2-0.1c0,0-0.1,0-0.1,0.2c0,0-0.2,0.3-6.7,8c0,0-0.1,0.1-0.1,0\tc0,0-0.1-0.5,0.3-1.6c0,0,0.8-2.6,3.2-4.9c0,0,0.4-0.4,0.3-0.9c0,0-0.1-0.7-0.9-1.3c0,0-0.4-0.3-0.5-0.2c0,0-0.1,0.1-0.1,0.2\tc0,0,0,0.3-0.1,0.4l-1.2,1.6c0,0-0.6,0.8-1.2,1.8l-1.9,2.2c0,0-2,2.3-3.2,2.9c0,0-0.3,0.1-0.4,0.1c0,0-0.2-0.2-0.2-0.6\tc0,0,0.1-2.3,4-6.9c0,0,0.8,0,2-0.4c0,0,0.4-0.1,0.3-0.3c0,0,0-0.1-0.3-0.1c0,0-0.3-0.1-1.2-0.1l0.9-1.1c0,0,0.5-0.6,0.5-1.3\tc0,0-0.3-1-1.4-1.6c0,0-0.3-0.1-0.3-0.1c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0.4-0.4,1c0,0-0.3,0.5-2,3c0,0-1.5,0.1-1.9,0.3\tc0,0-0.3,0.1-0.2,0.1c0,0,0,0.1,0.1,0.1c0,0,0.6,0.3,1.5,0.3c0,0-1.3,1.9-1.9,3c-0.5,0.9-0.7,1.7-0.8,2.3c0,0-0.1,1,0.2,1.4\tc0.2,0.5,0.5,0.8,0.8,1c0,0,0.5,0.4,0.8,0.5c0,0,0.5,0.2,0.6,0.2c0,0,0.3,0,0.7-0.3c0,0,0.5-0.3,1.8-2.1c0,0,0.5-0.7,1.2-1.9\tc-0.1,0.4-0.2,0.7-0.3,1c0,0-0.1,1.3,0.6,2.1l0.2,0.3c0,0,0.3,0.5,0.9,0.7c0,0,0.4,0.1,0.6-0.2c0,0,0.7-0.8,3-4.5h0.1\tc0,0-0.4,1-0.5,1.9c-0.1,0.4-0.1,0.7,0,1c0.3,1.8,1.8,1.9,1.8,1.9s0.4,0,0.8-0.5c0,0,0.8-1.4,3.4-5c0.1-0.1,0.3-0.3,0.4-0.5l1.3-1.4\tc0,0-0.8,1.4-3,5.3c0,0-0.4,0.7-0.1,1.4c0,0,0.1,0.3,0.5,0.7c0,0,0.1,0.1,0.3,0.1c0,0,0.1,0,0.1-0.1c0,0,0-0.1,0.1-0.2\tc0,0,0-0.1,0.6-0.9c0,0,1-1.3,5.1-5.4l0.1,0.1c0,0-1,1.7-1.6,2.8c0,0-0.6,1-0.5,1.8c0,0,0,0.8,0.6,1.2l0.6,0.4c0,0,0.5,0.5,0.8,0.5\tc0,0,0.4,0.1,0.8-0.5c0,0,0.5-0.6,2.2-3c-0.1,0.2-0.1,0.5-0.1,0.6c0,0,0,0.9,0.6,1.4c0,0,0.3,0.3,0.9,0.8c0,0,0.7,0.5,1.5,0.6\tc0,0,0.4,0,0.7-0.2c0.5-0.4,1.2-1.1,1.9-1.9c0.2-0.2,0.4-0.5,0.6-0.7c0.4-0.5,1-1.1,1.8-1.9c0.5-0.5,1.2-1.4,1.9-2.1\tc0,0,0.7-0.7,1.3-1.4c-0.3,0.6-0.6,1.4-1,2.1c0,0-0.4,1-0.8,1.9c0,0-0.3,1-0.8,1.9c0,0-0.6,0.8-1.2,0.8c0,0-0.5,0-1-0.3\tc0,0-0.2-0.1-0.3,0c0,0-0.1,0.1,0,0.3c0,0,1.1,1.4,2.2,1.4c0,0,1.8,0.1,2.7-2.7c0.2-0.7,0.5-1.4,0.8-2.3c0.8-1.9,2.1-3.2,2.1-3.2\ts0.2-0.2,0.2-0.3C99.4,22,99.4,21.8,99.1,21.5z M91.7,40c-0.9,1.4-1.8,2.1-1.8,2.1c-1,0.6-1.4,0.1-1.4,0.1\tC89.5,40.6,91.7,40,91.7,40z M99.1,38.6c0,0-0.4-0.4-1.6-1.2c0,0-0.1-0.1-0.1-0.1c0,0-0.2-0.1-0.3,0.1c-0.1,0.1-0.6,0.8-1.3,1.6\tc0,0-0.8,1-1.8,2.1l-2.1,2.4l-0.9,1c-0.4,0.4-1.2,1-1.9,1.6c0,0-1.2,0.8-1.7,0.8c0,0-0.6-0.1-0.6-1.3c0-0.3,0.1-0.5,0.1-0.6\tc0.1-0.4,0.3-0.7,0.4-1c0,0,0.4-0.8,0.9-1.5c0,0,0.6,0.7,1.2,0.8c0,0,1,0.1,2.3-1.3c0,0,0.8-0.8,1-1.6c0,0,0.1-0.4-0.1-0.5\tc0,0-0.1-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1c0,0-0.5-1-1.3-1.6c0,0-0.2-0.1-0.3-0.1c-3,1.2-4.3,3.6-4.6,4.1c0,0-0.2,0.3-0.4,0.8\tc-1.2,1.5-3.3,3.8-4,3.8c0,0-0.1,0.1-0.1,0c0,0,0.4-2,4.2-6.6c0,0,0.3-0.4,0-0.6c0,0-0.2-0.3-1.1-1.1c0,0-0.3-0.2-0.4-0.1\tc0,0-0.2,0-0.4,0.4l-1,1.2c0,0-1.3,1.6-3.3,3.4c0,0-0.1,0.1-0.1-0.1c0,0,0.4-0.5,2-3.2c0,0,0.3-0.5-0.1-0.7c0,0-0.1-0.3-0.6-0.5\tc0,0-0.5-0.3-0.8-0.5c0,0-0.2-0.1-0.3,0.1c-1.4,1.6-1.9,2.3-4.2,5.1c-0.7,0.8-1.6,1.8-2.8,3c0,0-0.3-1.3,1.8-4.2\tc0,0,0.5-0.7,1.2-1.6c0,0,0.4-0.4,0.5-0.8c0,0,0.1-0.3-0.1-0.5c0,0-0.4-0.5-1.2-1c0,0-0.1-0.1-0.2-0.1c0,0-0.1,0-0.1,0.2\tc0,0-0.2,0.3-6.7,8c0,0-0.1,0.1-0.1,0c0,0-0.1-0.5,0.3-1.6c0,0,0.8-2.6,3.2-4.9c0,0,0.4-0.4,0.3-0.9c0,0-0.1-0.7-0.9-1.3\tc0,0-0.4-0.3-0.5-0.2c0,0-0.1,0.1-0.1,0.2c0,0,0,0.3-0.1,0.4l-1.2,1.6c0,0-0.6,0.8-1.2,1.8l-1.9,2.2c0,0-2,2.3-3.2,2.9\tc0,0-0.3,0.1-0.4,0.1c0,0-0.2-0.2-0.2-0.6c0,0,0.1-2.3,4-6.9c0,0,0.8,0,2-0.4c0,0,0.4-0.1,0.3-0.3c0,0,0-0.1-0.3-0.1\tc0,0-0.3-0.1-1.2-0.1l0.9-1.1c0,0,0.5-0.6,0.5-1.3c0,0-0.3-1-1.4-1.6c0,0-0.3-0.1-0.3-0.1c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0.1\tc0,0,0,0.4-0.4,1c0,0-0.3,0.5-2,3c0,0-1.5,0.1-1.9,0.3c0,0-0.3,0.1-0.2,0.1c0,0,0,0.1,0.1,0.1c0,0,0.6,0.3,1.5,0.3\tc0,0-1.3,1.9-1.9,3c-0.5,0.9-0.7,1.7-0.8,2.3c0,0-0.1,1,0.2,1.4c0.2,0.5,0.5,0.8,0.8,1c0,0,0.5,0.4,0.8,0.5c0,0,0.5,0.2,0.6,0.2\tc0,0,0.3,0,0.7-0.3c0,0,0.5-0.3,1.8-2.1c0,0,0.5-0.7,1.2-1.9c-0.1,0.4-0.2,0.7-0.3,1c0,0-0.1,1.3,0.6,2.1l0.2,0.3\tc0,0,0.3,0.5,0.9,0.7c0,0,0.4,0.1,0.6-0.2c0,0,0.7-0.8,3-4.5h0.1c0,0-0.4,1-0.5,1.9c-0.1,0.4-0.1,0.7,0,1c0.3,1.8,1.8,1.9,1.8,1.9\ts0.4,0,0.8-0.5c0,0,0.8-1.4,3.4-5c0.1-0.1,0.3-0.3,0.4-0.5l1.3-1.4c0,0-0.8,1.4-3,5.3c0,0-0.4,0.7-0.1,1.4c0,0,0.1,0.3,0.5,0.7\tc0,0,0.1,0.1,0.3,0.1c0,0,0.1,0,0.1-0.1c0,0,0-0.1,0.1-0.2c0,0,0-0.1,0.6-0.9c0,0,1-1.3,5.1-5.4l0.1,0.1c0,0-1,1.7-1.6,2.8\tc0,0-0.6,1-0.5,1.8c0,0,0,0.8,0.6,1.2l0.6,0.4c0,0,0.5,0.5,0.8,0.5c0,0,0.4,0.1,0.8-0.5c0,0,0.5-0.6,2.2-3c-0.1,0.2-0.1,0.5-0.1,0.6\tc0,0,0,0.9,0.6,1.4c0,0,0.3,0.3,0.9,0.8c0,0,0.7,0.5,1.5,0.6c0,0,0.4,0,0.7-0.2c0.5-0.4,1.2-1.1,1.9-1.9c0.2-0.2,0.4-0.5,0.6-0.7\tc0.4-0.5,1-1.1,1.8-1.9c0.5-0.5,1.2-1.4,1.9-2.1c0,0,0.7-0.7,1.3-1.4c-0.3,0.6-0.6,1.4-1,2.1c0,0-0.4,1-0.8,1.9c0,0-0.3,1-0.8,1.9\tc0,0-0.6,0.8-1.2,0.8c0,0-0.5,0-1-0.3c0,0-0.2-0.1-0.3,0c0,0-0.1,0.1,0,0.3c0,0,1.1,1.4,2.2,1.4c0,0,1.8,0.1,2.7-2.7\tc0.2-0.7,0.5-1.4,0.8-2.3c0.8-1.9,2.1-3.2,2.1-3.2s0.2-0.2,0.2-0.3C99.4,39.1,99.4,38.8,99.1,38.6z M91.7,5.9\tc-0.9,1.4-1.8,2.1-1.8,2.1c-1,0.6-1.4,0.1-1.4,0.1C89.5,6.5,91.7,5.9,91.7,5.9z M99.1,4.4c0,0-0.4-0.4-1.6-1.2c0,0-0.1-0.1-0.1-0.1\tc0,0-0.2-0.1-0.3,0.1c-0.1,0.1-0.6,0.8-1.3,1.6c0,0-0.8,1-1.8,2.1l-2.1,2.4l-0.9,1c-0.4,0.4-1.2,1-1.9,1.6c0,0-1.2,0.8-1.7,0.8\tc0,0-0.6-0.1-0.6-1.3c0-0.3,0.1-0.5,0.1-0.6c0.1-0.4,0.3-0.7,0.4-1c0,0,0.4-0.8,0.9-1.5c0,0,0.6,0.7,1.2,0.8c0,0,1,0.1,2.3-1.3\tc0,0,0.8-0.8,1-1.6c0,0,0.1-0.4-0.1-0.5c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1c0,0-0.5-1-1.3-1.6c0,0-0.2-0.1-0.3-0.1\tc-3,1.2-4.3,3.6-4.6,4.1c0,0-0.2,0.3-0.4,0.8c-1.2,1.5-3.3,3.8-4,3.8c0,0-0.1,0.1-0.1,0c0,0,0.4-2,4.2-6.6c0,0,0.3-0.4,0-0.6\tc0,0-0.2-0.3-1.1-1.1c0,0-0.3-0.2-0.4-0.1c0,0-0.2,0-0.4,0.4l-1,1.2c0,0-1.3,1.6-3.3,3.4c0,0-0.1,0.1-0.1-0.1c0,0,0.4-0.5,2-3.2\tc0,0,0.3-0.5-0.1-0.7c0,0-0.1-0.3-0.6-0.5c0,0-0.5-0.3-0.8-0.5c0,0-0.2-0.1-0.3,0.1C78.6,5.5,78,6.3,75.7,9c-0.7,0.8-1.6,1.8-2.8,3\tc0,0-0.3-1.3,1.8-4.2c0,0,0.5-0.7,1.2-1.6c0,0,0.4-0.4,0.5-0.8c0,0,0.1-0.3-0.1-0.5c0,0-0.4-0.5-1.2-1c0,0-0.1-0.1-0.2-0.1\tc0,0-0.1,0-0.1,0.2c0,0-0.2,0.3-6.7,8c0,0-0.1,0.1-0.1,0c0,0-0.1-0.5,0.3-1.6c0,0,0.8-2.6,3.2-4.9c0,0,0.4-0.4,0.3-0.9\tc0,0-0.1-0.7-0.9-1.3c0,0-0.4-0.3-0.5-0.2c0,0-0.1,0.1-0.1,0.2c0,0,0,0.3-0.1,0.4l-1.2,1.6c0,0-0.6,0.8-1.2,1.8l-1.9,2.2\tc0,0-2,2.3-3.2,2.9c0,0-0.3,0.1-0.4,0.1c0,0-0.2-0.2-0.2-0.6c0,0,0.1-2.3,4-6.9c0,0,0.8,0,2-0.4c0,0,0.4-0.1,0.3-0.3\tc0,0,0-0.1-0.3-0.1c0,0-0.3-0.1-1.2-0.1l0.9-1.1c0,0,0.5-0.6,0.5-1.3c0,0-0.3-1-1.4-1.6c0,0-0.3-0.1-0.3-0.1c0,0-0.1,0-0.1,0.1\tc0,0,0,0,0,0.1c0,0,0,0.4-0.4,1c0,0-0.3,0.5-2,3c0,0-1.5,0.1-1.9,0.3c0,0-0.3,0.1-0.2,0.1c0,0,0,0.1,0.1,0.1c0,0,0.6,0.3,1.5,0.3\tc0,0-1.3,1.9-1.9,3c-0.5,0.9-0.7,1.7-0.8,2.3c0,0-0.1,1,0.2,1.4c0.2,0.5,0.5,0.8,0.8,1c0,0,0.5,0.4,0.8,0.5c0,0,0.5,0.2,0.6,0.2\tc0,0,0.3,0,0.7-0.3c0,0,0.5-0.3,1.8-2.1c0,0,0.5-0.7,1.2-1.9c-0.1,0.4-0.2,0.7-0.3,1c0,0-0.1,1.3,0.6,2.1l0.2,0.3\tc0,0,0.3,0.5,0.9,0.7c0,0,0.4,0.1,0.6-0.2c0,0,0.7-0.8,3-4.5h0.1c0,0-0.4,1-0.5,1.9c-0.1,0.4-0.1,0.7,0,1c0.3,1.8,1.8,1.9,1.8,1.9\ts0.4,0,0.8-0.5c0,0,0.8-1.4,3.4-5c0.1-0.1,0.3-0.3,0.4-0.5l1.3-1.4c0,0-0.8,1.4-3,5.3c0,0-0.4,0.7-0.1,1.4c0,0,0.1,0.3,0.5,0.7\tc0,0,0.1,0.1,0.3,0.1c0,0,0.1,0,0.1-0.1c0,0,0-0.1,0.1-0.2c0,0,0-0.1,0.6-0.9c0,0,1-1.3,5.1-5.4l0.1,0.1c0,0-1,1.7-1.6,2.8\tc0,0-0.6,1-0.5,1.8c0,0,0,0.8,0.6,1.2l0.6,0.4c0,0,0.5,0.5,0.8,0.5c0,0,0.4,0.1,0.8-0.5c0,0,0.5-0.6,2.2-3c-0.1,0.2-0.1,0.5-0.1,0.6\tc0,0,0,0.9,0.6,1.4c0,0,0.3,0.3,0.9,0.8c0,0,0.7,0.5,1.5,0.6c0,0,0.4,0,0.7-0.2c0.5-0.4,1.2-1.1,1.9-1.9c0.2-0.2,0.4-0.5,0.6-0.7\tc0.4-0.5,1-1.1,1.8-1.9c0.5-0.5,1.2-1.4,1.9-2.1c0,0,0.7-0.7,1.3-1.4c-0.3,0.6-0.6,1.4-1,2.1c0,0-0.4,1-0.8,1.9c0,0-0.3,1-0.8,1.9\tc0,0-0.6,0.8-1.2,0.8c0,0-0.5,0-1-0.3c0,0-0.2-0.1-0.3,0c0,0-0.1,0.1,0,0.3c0,0,1.1,1.4,2.2,1.4c0,0,1.8,0.1,2.7-2.7\tc0.2-0.7,0.5-1.4,0.8-2.3c0.8-1.9,2.1-3.2,2.1-3.2s0.2-0.2,0.2-0.3C99.4,5,99.4,4.7,99.1,4.4z",
            fill: "#5551FF",
          })
        );
      }
      c(82);
      function Fe() {
        return n.a.createElement(
          _e.a,
          { className: "movie-tunes", expand: "md" },
          n.a.createElement(
            _e.a.Brand,
            { href: "/" },
            n.a.createElement(Ue, { className: "md-up" }),
            n.a.createElement(Te, { className: "md-down" })
          ),
          n.a.createElement(
            "div",
            { className: "mobile-buttons md-down" },
            n.a.createElement(je, null),
            n.a.createElement(fe, null)
          ),
          n.a.createElement(
            "div",
            { className: "desktop-buttons md-up" },
            n.a.createElement(W, null),
            n.a.createElement(he, null),
            n.a.createElement(Le, null)
          )
        );
      }
      c(83);
      function He() {
        Object(a.useEffect)(function () {
          var e;
          (e = "svg.icon-help"),
            $.a.to(e, {
              rotateZ: "+=360",
              ease: "none",
              duration: 2,
              repeat: -1,
            });
        });
        var e = "".concat("https://www.movietun.es", "/login");
        return n.a.createElement(
          B.a,
          { className: "start" },
          n.a.createElement(
            "div",
            { className: "start wrap" },
            n.a.createElement(pe, null),
            n.a.createElement(Re, null),
            n.a.createElement(
              Y.a,
              { variant: "light", size: "md", href: e },
              "Start"
            )
          )
        );
      }
      c(84);
      function Ve() {
        return n.a.createElement(
          "div",
          { className: "overlay__container" },
          n.a.createElement(ve, null),
          n.a.createElement(
            "div",
            { className: "overlay__wrap" },
            n.a.createElement(
              D.a,
              { variant: "secondary", className: "about-overlay" },
              n.a.createElement(
                D.a.Item,
                null,
                n.a.createElement(
                  "p",
                  null,
                  "Use ",
                  n.a.createElement("strong", null, "MovieTunes"),
                  " to filter and save your favourite soundtracks. It\u2019s free to use, so have fun!"
                ),
                n.a.createElement(
                  "p",
                  { className: "terms" },
                  n.a.createElement("strong", null, "Terms"),
                  n.a.createElement("br", null),
                  " Requires a spotify account. MovieTunes is a personal project of Paul Heading."
                )
              )
            )
          ),
          n.a.createElement(de, null)
        );
      }
      var Ie = c(104),
        Qe = c(101);
      var Ae = Object(l.b)(function (e) {
        return e;
      })(function (e) {
        var t = e.doSearch,
          c = {
            savedFilms: Object(l.c)(function (e) {
              return e.savedFilms;
            }),
          };
        return c.savedFilms.length > 0
          ? n.a.createElement(
              Ce.a,
              { striped: !0, className: "saved-table" },
              n.a.createElement(
                "tbody",
                null,
                c.savedFilms.map(function (e, c) {
                  var a = e.id,
                    r = e.searchTerm;
                  return n.a.createElement(
                    "tr",
                    { key: c },
                    n.a.createElement(
                      "td",
                      null,
                      n.a.createElement(
                        "div",
                        { className: "saved-table__term" },
                        w(r, 12)
                      )
                    ),
                    n.a.createElement(
                      "td",
                      { width: "78" },
                      n.a.createElement(Se, { savedTitle: r, doSearch: t }),
                      n.a.createElement(Ne, {
                        id: a,
                        searchTerm: r,
                        doSearch: t,
                      })
                    )
                  );
                })
              )
            )
          : n.a.createElement(
              D.a,
              { variant: "secondary" },
              n.a.createElement(
                D.a.Item,
                null,
                "Use ",
                n.a.createElement("strong", null, "MovieTunes"),
                " to save your favourite soundtracks. It\u2019s free to use, so have fun!"
              )
            );
      });
      c(85);
      var Be = Object(l.b)(function (e) {
          return e;
        })(function (e) {
          var t = e.doSearch,
            c = {
              currentUser: Object(l.c)(function (e) {
                return e.currentUser;
              }),
            };
          if (c.currentUser) {
            return n.a.createElement(
              "div",
              { className: "overlay__container account" },
              n.a.createElement(ve, null),
              n.a.createElement(
                "div",
                { className: "overlay__wrap" },
                n.a.createElement(
                  Ie.a,
                  { defaultActiveKey: "profile", transition: !1 },
                  n.a.createElement(
                    Qe.a,
                    {
                      eventKey: "profile",
                      title: "Profile",
                      className: "profile",
                    },
                    n.a.createElement(
                      "div",
                      { className: "profile-tab__avatar" },
                      n.a.createElement(ue, null)
                    ),
                    n.a.createElement(
                      "div",
                      { className: "profile-tab__name" },
                      c.currentUser.firstName,
                      "\xa0",
                      c.currentUser.lastName
                    ),
                    (function (e) {
                      if (e)
                        return n.a.createElement(
                          "div",
                          { className: "profile-tab__since" },
                          "Member since",
                          n.a.createElement("br", null),
                          (function (e) {
                            var t = new Date(e);
                            return (
                              (t = t.toDateString().split(" ")),
                              ""
                                .concat(t[0], " ")
                                .concat(t[2], " ")
                                .concat(t[1], ", ")
                                .concat(t[3])
                            );
                          })(c.currentUser.createdAt)
                        );
                    })(c.currentUser.createdAt),
                    n.a.createElement(
                      "div",
                      { className: "profile-tab__log-out" },
                      n.a.createElement(ye, { doSearch: t })
                    )
                  ),
                  n.a.createElement(
                    Qe.a,
                    { eventKey: "saved", title: "Saved" },
                    n.a.createElement(Ae, { doSearch: t })
                  )
                )
              ),
              n.a.createElement(de, null)
            );
          }
        }),
        De = c(107);
      c(87);
      var Pe = Object(l.b)(function (e) {
        return e;
      })(function (e) {
        var t = e.doSearch,
          c = Object(a.useState)(null),
          r = Object(G.a)(c, 2),
          l = r[0],
          s = r[1],
          u = Object(a.useRef)(null),
          i = Object(a.useRef)(null);
        return n.a.createElement(
          "div",
          { className: "overlay__container form" },
          n.a.createElement(ve, null),
          n.a.createElement(
            "div",
            { className: "overlay__wrap" },
            n.a.createElement(
              K.a,
              { className: "overlay__form" },
              n.a.createElement(
                K.a.Group,
                { controlId: "formBasicEmail" },
                n.a.createElement(K.a.Label, null, "Email address"),
                n.a.createElement(K.a.Control, {
                  ref: u,
                  type: "email",
                  placeholder: "Enter email",
                })
              ),
              n.a.createElement(
                K.a.Group,
                { controlId: "formBasicPassword" },
                n.a.createElement(K.a.Label, null, "Password"),
                n.a.createElement(K.a.Control, {
                  ref: i,
                  type: "password",
                  placeholder: "Password",
                })
              ),
              l
                ? n.a.createElement(
                    De.a,
                    { variant: "danger", className: "user-denied" },
                    l
                  )
                : null,
              n.a.createElement(Ee, {
                emailAddress: u,
                password: i,
                doSearch: t,
                setUserDenied: function (e) {
                  s(e);
                },
              })
            ),
            n.a.createElement(
              "p",
              { className: "has-account" },
              "Don't have an account?",
              n.a.createElement(
                Z.a,
                { to: "/signup" },
                n.a.createElement(Y.a, { variant: "link" }, "Sign up")
              )
            )
          ),
          n.a.createElement(de, null)
        );
      });
      c(88);
      function Ge() {
        return n.a.createElement(
          "div",
          { className: "overlay__container menu" },
          n.a.createElement(ve, null),
          n.a.createElement(
            "div",
            { className: "overlay__wrap" },
            n.a.createElement(W, null),
            n.a.createElement(be, null),
            n.a.createElement(je, null)
          ),
          n.a.createElement(de, null)
        );
      }
      c(89);
      function Ke() {
        var e = Object(a.useRef)(null),
          t = Object(a.useRef)(null),
          c = Object(a.useRef)(null),
          r = Object(a.useRef)(null),
          l = Object(a.useState)([]),
          s = Object(G.a)(l, 2),
          u = s[0],
          i = s[1];
        return n.a.createElement(
          "div",
          { className: "overlay__container signup" },
          n.a.createElement(ve, null),
          n.a.createElement(
            "div",
            { className: "overlay__wrap" },
            n.a.createElement(
              K.a,
              { className: "overlay__form" },
              n.a.createElement(
                K.a.Group,
                null,
                n.a.createElement(K.a.Label, null, "First name"),
                n.a.createElement(K.a.Control, {
                  ref: e,
                  type: "text",
                  placeholder: "First name",
                })
              ),
              n.a.createElement(
                K.a.Group,
                null,
                n.a.createElement(K.a.Label, null, "Last name"),
                n.a.createElement(K.a.Control, {
                  ref: t,
                  type: "text",
                  placeholder: "Last name",
                })
              ),
              n.a.createElement(
                K.a.Group,
                null,
                n.a.createElement(K.a.Label, null, "Email address"),
                n.a.createElement(K.a.Control, {
                  ref: c,
                  type: "email",
                  placeholder: "Enter email",
                })
              ),
              n.a.createElement(
                K.a.Group,
                null,
                n.a.createElement(K.a.Label, null, "Password"),
                n.a.createElement(K.a.Control, {
                  ref: r,
                  type: "password",
                  placeholder: "Password",
                })
              ),
              u.length > 0
                ? n.a.createElement(
                    K.a.Group,
                    null,
                    n.a.createElement(
                      K.a.Text,
                      null,
                      u.map(function (e, t) {
                        return n.a.createElement(
                          De.a,
                          { variant: "danger", key: t },
                          e
                        );
                      })
                    )
                  )
                : null,
              n.a.createElement(xe, {
                firstName: e,
                lastName: t,
                emailAddress: c,
                password: r,
                setErrorMsgs: function (e) {
                  i(e);
                },
              })
            ),
            n.a.createElement(
              "p",
              { className: "has-account" },
              "Already have an account?",
              n.a.createElement(
                Z.a,
                { to: "/login" },
                n.a.createElement(Y.a, { variant: "link" }, "Log in")
              )
            )
          ),
          n.a.createElement(de, null)
        );
      }
      c(90), c(91);
      var Ye = Object(l.b)(
        function (e) {
          return console.log(e), e;
        },
        {
          filmResult: function (e) {
            return { type: "FILM_RESULT", payload: e };
          },
          albumResults: F,
          sessionExpired: function (e) {
            return { type: "SESSION_EXPIRED", payload: e };
          },
        }
      )(function (e) {
        var t = e.filmResult,
          r = e.albumResults,
          s = e.sessionExpired;
        c(92).config();
        var u = (function () {
            for (
              var e,
                t = {},
                c = /([^&;=]+)=?([^&;]*)/g,
                a = window.location.hash.substring(1);
              (e = c.exec(a));

            )
              t[e[1]] = decodeURIComponent(e[2]);
            return t;
          })().access_token,
          i = {
            searchQuery: Object(l.c)(function (e) {
              return e.searchQuery;
            }),
            sessionExpired: Object(l.c)(function (e) {
              return e.sessionExpired;
            }),
            blacklist: Object(l.c)(function (e) {
              return e.blacklist;
            }),
          };
        u && d.setAccessToken(u);
        var v = Object(a.useState)(!!u);
        function h(e) {
          return E.apply(this, arguments);
        }
        function E() {
          return (E = Object(m.a)(
            o.a.mark(function e(t) {
              var c,
                a,
                n = arguments;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((c =
                          n.length > 1 && void 0 !== n[1] ? n[1] : i.blacklist),
                        !t)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 4), g(t, c);
                    case 4:
                      (a = e.sent), s(a.expired), r(a.data);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function b(e) {
          return y.apply(this, arguments);
        }
        function y() {
          return (y = Object(m.a)(
            o.a.mark(function e(c) {
              var a;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!c) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 3), p(c, "34720659");
                    case 3:
                      (a = e.sent), t(a);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (
          Object(a.useEffect)(function () {
            document.title = "MovieTunes | Homepage";
          }, []),
          n.a.createElement(
            "div",
            { className: "App ".concat(_(v[0], "loggedIn")) },
            v[0] && !i.sessionExpired
              ? n.a.createElement(
                  "div",
                  { className: "dashboard-screen" },
                  n.a.createElement(
                    f.a,
                    null,
                    n.a.createElement(f.b, {
                      path: "/about",
                      exact: !0,
                      component: Ve,
                    }),
                    n.a.createElement(f.b, {
                      path: "/login",
                      exact: !0,
                      component: function () {
                        return n.a.createElement(Pe, {
                          doSearch: function (e, t) {
                            h(e, t), b(e);
                          },
                        });
                      },
                    }),
                    n.a.createElement(f.b, {
                      path: "/signup",
                      exact: !0,
                      component: Ke,
                    }),
                    n.a.createElement(f.b, {
                      path: "/menu",
                      exact: !0,
                      component: Ge,
                    }),
                    n.a.createElement(f.b, {
                      path: "/account",
                      exact: !0,
                      component: function () {
                        return n.a.createElement(Be, {
                          doSearch: function (e, t) {
                            h(e, t), b(e);
                          },
                        });
                      },
                    }),
                    n.a.createElement(f.b, {
                      path: "/",
                      exact: !0,
                      component: function () {
                        return n.a.createElement(
                          "div",
                          null,
                          n.a.createElement(Fe, null),
                          n.a.createElement(J, {
                            doSearch: function (e) {
                              h(e), b(e);
                            },
                          }),
                          i.searchQuery
                            ? n.a.createElement(Me, null)
                            : n.a.createElement(P, null)
                        );
                      },
                    })
                  )
                )
              : n.a.createElement(
                  "div",
                  { className: "home-screen" },
                  n.a.createElement(
                    f.a,
                    null,
                    n.a.createElement(f.b, {
                      path: "/about",
                      exact: !0,
                      component: Ve,
                    }),
                    n.a.createElement(f.b, {
                      path: "/",
                      exact: !0,
                      component: He,
                    })
                  )
                )
          )
        );
      });
      Object(r.render)(
        n.a.createElement(
          l.a,
          { store: Object(s.c)(u) },
          n.a.createElement(Ye, null)
        ),
        document.getElementById("root")
      );
    },
  },
  [[62, 1, 2]],
]);
//# sourceMappingURL=main.ebb0aff4.chunk.js.map
