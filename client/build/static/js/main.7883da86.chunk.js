(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    102: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        o = n.n(a),
        r = n(20),
        c = n.n(r),
        l = n(37),
        i = n(7),
        u = n(28),
        s = n(10),
        m = n(63),
        p = n(21),
        d = n(6),
        h = n(9);
      var E = function (e) {
        var t = Object(a.useState)({}),
          n = Object(h.a)(t, 2),
          r = n[0],
          c = n[1];
        function l(e) {
          c(
            Object(d.a)(
              Object(d.a)({}, r),
              {},
              Object(p.a)({}, e.target.name, e.target.value)
            )
          );
        }
        return o.a.createElement(
          "div",
          null,
          o.a.createElement("h1", null, "Registration Page"),
          o.a.createElement("input", {
            type: "text",
            placeholder: "Username",
            name: "username",
            onChange: l,
            required: !0,
          }),
          o.a.createElement("input", {
            type: "password",
            placeholder: "Password",
            name: "password",
            onChange: l,
            required: !0,
          }),
          o.a.createElement(
            "button",
            {
              onClick: function () {
                fetch(
                  "https://react-redux-bookstore-server.herokuapp.com/register",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(r),
                  }
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (t) {
                    console.log(t), alert(t.message), e.history.push("/Login");
                  });
              },
            },
            "Register User"
          )
        );
      };
      var b = function (e) {
          var t = Object(a.useState)({}),
            n = Object(h.a)(t, 2),
            r = n[0],
            c = n[1];
          function l(e) {
            c(
              Object(d.a)(
                Object(d.a)({}, r),
                {},
                Object(p.a)({}, e.target.name, e.target.value)
              )
            );
          }
          return o.a.createElement(
            "div",
            null,
            o.a.createElement("input", {
              type: "text",
              placeholder: "imageURL",
              name: "imageURLTextBox",
              onChange: l,
            }),
            o.a.createElement("input", {
              type: "text",
              placeholder: "Title",
              name: "titleTextBox",
              onChange: l,
            }),
            o.a.createElement("input", {
              type: "text",
              placeholder: "Genre",
              name: "genreTextBox",
              onChange: l,
            }),
            o.a.createElement("input", {
              type: "text",
              placeholder: "Publisher",
              name: "publisherTextBox",
              onChange: l,
            }),
            o.a.createElement("input", {
              type: "text",
              placeholder: "Year",
              name: "yearTextBox",
              onChange: l,
            }),
            o.a.createElement(
              "button",
              {
                onClick: function () {
                  fetch(
                    "https://react-redux-bookstore-server.herokuapp.com/add-book",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(r),
                    }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (t) {
                      alert(t.message), e.history.push("/Home");
                    });
                },
              },
              "Add Book"
            )
          );
        },
        g = n(14),
        f = n(17),
        k = function (e) {
          return { type: "REMOVECARTBOOKS", payload: e };
        },
        O = function (e) {
          return { type: "AUTHENTICATED", value: e };
        },
        v = n(18),
        j = Object(s.b)(
          function (e) {
            return { isLoggedIn: e.loginRed.isLoggedIn };
          },
          function (e) {
            return {
              onIncrement: function () {
                return e({ type: "ADD" });
              },
              onDecrement: function () {
                return e({ type: "REMOVE" });
              },
              onAddCartBooks: function (t) {
                return e(
                  (function (e) {
                    return { type: "ADDCARTBOOKS", payload: e };
                  })(t)
                );
              },
              onRemoveCartBooks: function (t) {
                return e(k(t));
              },
            };
          }
        )(function (e) {
          var t = "/Edit/" + e.books.id;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                g.a,
                { id: e.books.id },
                o.a.createElement(g.a.Img, {
                  style: { width: 200 },
                  variant: "top",
                  src: e.books.imageURL,
                  alt: "image",
                }),
                o.a.createElement(
                  g.a.Body,
                  null,
                  o.a.createElement(g.a.Title, null, e.books.title),
                  o.a.createElement(
                    g.a.Text,
                    null,
                    e.books.genre,
                    o.a.createElement("br", null),
                    e.books.publisher,
                    o.a.createElement("br", null),
                    e.books.year
                  )
                ),
                e.isLoggedIn
                  ? o.a.createElement(
                      g.a.Footer,
                      null,
                      o.a.createElement(
                        "small",
                        { className: "text-muted" },
                        o.a.createElement(
                          f.a.Link,
                          null,
                          o.a.createElement(
                            "button",
                            {
                              onClick: function () {
                                var t = e.books;
                                e.onIncrement(), e.onAddCartBooks(t);
                              },
                            },
                            "Add To Cart"
                          )
                        ),
                        o.a.createElement(
                          v.LinkContainer,
                          { to: t },
                          o.a.createElement(
                            f.a.Link,
                            null,
                            o.a.createElement("button", null, "Edit Book")
                          )
                        ),
                        o.a.createElement(
                          f.a.Link,
                          null,
                          o.a.createElement(
                            "button",
                            {
                              onClick: function () {
                                var t = e.books.id;
                                fetch(
                                  "https://react-redux-bookstore-server.herokuapp.com/delete",
                                  {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({ id: t }),
                                  }
                                )
                                  .then(function (e) {
                                    return e.json();
                                  })
                                  .then(function (t) {
                                    alert(t.message), e.fetchBooks();
                                  });
                              },
                            },
                            "Delete"
                          )
                        )
                      )
                    )
                  : null
              )
            )
          );
        }),
        y = n(23);
      var C = function (e) {
        var t = Object(a.useState)([]),
          n = Object(h.a)(t, 2),
          r = n[0],
          c = n[1],
          l = function () {
            fetch("https://react-redux-bookstore-server.herokuapp.com/fiction")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                c(e);
              });
          };
        return (
          Object(a.useEffect)(function () {
            l();
          }, []),
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: "App container" },
              o.a.createElement(
                y.a,
                null,
                r.map(function (e, t) {
                  return o.a.createElement(j, {
                    key: t,
                    books: e,
                    fetchBooks: l,
                  });
                })
              )
            )
          )
        );
      };
      var L = function (e) {
        var t = Object(a.useState)([]),
          n = Object(h.a)(t, 2),
          r = n[0],
          c = n[1],
          l = function () {
            fetch(
              "https://react-redux-bookstore-server.herokuapp.com/nonfiction"
            )
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                c(e);
              });
          };
        return (
          Object(a.useEffect)(function () {
            l();
          }, []),
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: "App container" },
              o.a.createElement(
                y.a,
                null,
                r.map(function (e, t) {
                  return o.a.createElement(j, {
                    key: t,
                    books: e,
                    fetchBooks: l,
                  });
                })
              )
            )
          )
        );
      };
      var B = function () {
          var e = Object(a.useState)([]),
            t = Object(h.a)(e, 2),
            n = t[0],
            r = t[1],
            c = function () {
              fetch("https://react-redux-bookstore-server.herokuapp.com/")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  r(e);
                });
            };
          return (
            Object(a.useEffect)(function () {
              c();
            }, []),
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                "div",
                { className: "App container" },
                o.a.createElement(
                  y.a,
                  null,
                  n.map(function (e, t) {
                    return o.a.createElement(j, {
                      key: t,
                      books: e,
                      fetchBooks: c,
                    });
                  })
                )
              )
            )
          );
        },
        x = n(50),
        A = n(43),
        R = n(66),
        S = n(35),
        T = n(65),
        I = n.n(T),
        w = Object(s.b)(function (e) {
          return {
            isLoggedIn: e.loginRed.isLoggedIn,
            counter: e.counterRed.counter,
          };
        }, null)(function (e) {
          return o.a.createElement(
            x.a,
            { bg: "dark", variant: "dark" },
            o.a.createElement(
              v.LinkContainer,
              { to: "/" },
              o.a.createElement(
                x.a.Brand,
                null,
                o.a.createElement("img", {
                  src: I.a,
                  width: "30",
                  height: "30",
                  className: "d-inline-block align-top",
                  alt: "React Bootstrap logo",
                })
              )
            ),
            o.a.createElement(
              f.a,
              { className: "mr-auto" },
              e.isLoggedIn
                ? o.a.createElement(
                    S.a,
                    { title: "Filter By Genre", id: "basic-nav-dropdown" },
                    o.a.createElement(
                      v.LinkContainer,
                      { to: "/Fiction" },
                      o.a.createElement(S.a.Item, null, "Fiction")
                    ),
                    o.a.createElement(
                      v.LinkContainer,
                      { to: "/Nonfiction" },
                      o.a.createElement(S.a.Item, null, "Nonfiction")
                    ),
                    o.a.createElement(
                      v.LinkContainer,
                      { to: "/AllGenres" },
                      o.a.createElement(S.a.Item, null, "View All Genres")
                    )
                  )
                : null,
              o.a.createElement(
                v.LinkContainer,
                { to: "/" },
                o.a.createElement(f.a.Link, null, "Home")
              ),
              e.isLoggedIn
                ? o.a.createElement(
                    v.LinkContainer,
                    { to: "/AddBook" },
                    o.a.createElement(f.a.Link, null, "Add Book")
                  )
                : null,
              e.isLoggedIn
                ? null
                : o.a.createElement(
                    v.LinkContainer,
                    { to: "/Login" },
                    o.a.createElement(f.a.Link, null, "Login")
                  ),
              e.isLoggedIn
                ? null
                : o.a.createElement(
                    v.LinkContainer,
                    { to: "/Register" },
                    o.a.createElement(f.a.Link, null, "Add User")
                  ),
              e.isLoggedIn
                ? o.a.createElement(
                    v.LinkContainer,
                    { to: "/Signout" },
                    o.a.createElement(f.a.Link, null, "Signout")
                  )
                : null
            ),
            e.isLoggedIn
              ? o.a.createElement(
                  v.LinkContainer,
                  { to: "/Cart" },
                  o.a.createElement(
                    A.a,
                    { variant: "outline-info" },
                    "Cart",
                    o.a.createElement(R.a, null, e.counter),
                    o.a.createElement(
                      "span",
                      { className: "sr-only" },
                      "items in cart"
                    )
                  )
                )
              : null
          );
        }),
        N = function () {
          return o.a.createElement(o.a.Fragment, null);
        },
        D = function (e) {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(w, null),
            e.children,
            o.a.createElement(N, null)
          );
        };
      var F = function (e) {
          var t = Object(a.useState)({}),
            n = Object(h.a)(t, 2),
            r = n[0],
            c = n[1];
          function l(e) {
            c(
              Object(d.a)(
                Object(d.a)({}, r),
                {},
                Object(p.a)({}, e.target.name, e.target.value)
              )
            );
          }
          return (
            Object(a.useEffect)(
              function () {
                fetch(
                  "https://react-redux-bookstore-server.herokuapp.com/edit/" +
                    e.match.params.id
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    c(e);
                  });
              },
              [e.match.params.id]
            ),
            o.a.createElement(
              "div",
              null,
              o.a.createElement("input", {
                type: "text",
                value: r.imageURL,
                name: "imageURL",
                onChange: l,
              }),
              o.a.createElement("input", {
                type: "text",
                value: r.title,
                name: "title",
                onChange: l,
              }),
              o.a.createElement("input", {
                type: "text",
                value: r.genre,
                name: "genre",
                onChange: l,
              }),
              o.a.createElement("input", {
                type: "text",
                value: r.publisher,
                name: "publisher",
                onChange: l,
              }),
              o.a.createElement("input", {
                type: "text",
                value: r.year,
                name: "year",
                onChange: l,
              }),
              o.a.createElement(
                "button",
                {
                  onClick: function () {
                    fetch(
                      "https://react-redux-bookstore-server.herokuapp.com/edit",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(r),
                      }
                    )
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (t) {
                        alert(t.message), e.history.push("/Home");
                      });
                  },
                },
                "Update Book"
              )
            )
          );
        },
        U = Object(s.b)(
          function (e) {
            return { isLoggedIn: e.loginRed.isLoggedIn };
          },
          function (e) {
            return {
              onDecrement: function () {
                return e({ type: "REMOVE" });
              },
              onRemoveCartBooks: function (t) {
                return e(k(t));
              },
            };
          }
        )(function (e) {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                g.a,
                { id: e.books.id },
                o.a.createElement(g.a.Img, {
                  style: { width: 200 },
                  variant: "top",
                  src: e.books.imageURL,
                  alt: "image",
                }),
                o.a.createElement(
                  g.a.Body,
                  null,
                  o.a.createElement(g.a.Title, null, e.books.title),
                  o.a.createElement(
                    g.a.Text,
                    null,
                    e.books.genre,
                    o.a.createElement("br", null),
                    e.books.publisher,
                    o.a.createElement("br", null),
                    e.books.year
                  )
                ),
                e.isLoggedIn
                  ? o.a.createElement(
                      g.a.Footer,
                      null,
                      o.a.createElement(
                        "small",
                        { className: "text-muted" },
                        o.a.createElement(
                          f.a.Link,
                          null,
                          o.a.createElement(
                            "button",
                            {
                              onClick: function () {
                                var t = e.books;
                                console.log(e),
                                  e.onDecrement(),
                                  e.onRemoveCartBooks(t);
                              },
                            },
                            "Remove From Cart"
                          )
                        )
                      )
                    )
                  : null
              )
            )
          );
        });
      var P = Object(s.b)(function (e) {
          return { cartBooks: e.cartRed.cartBooks };
        }, null)(function (e) {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: "App container" },
              o.a.createElement(
                y.a,
                null,
                e.cartBooks.map(function (e, t) {
                  return o.a.createElement(U, { key: t, books: e });
                })
              )
            )
          );
        }),
        G = n(34),
        J = n.n(G);
      function M(e) {
        e
          ? (J.a.defaults.headers.common.Authorization = "Bearer ".concat(e))
          : delete J.a.defaults.headers.common.Authorization;
      }
      var V = Object(s.b)(null, function (e) {
        return {
          onAuthenticated: function () {
            return e(O(!0));
          },
        };
      })(function (e) {
        var t = Object(a.useState)({}),
          n = Object(h.a)(t, 2),
          r = n[0],
          c = n[1],
          l = Object(a.useState)({ username: "David", password: "1234" }),
          i = Object(h.a)(l, 1)[0];
        function u(e) {
          c(
            Object(d.a)(
              Object(d.a)({}, r),
              {},
              Object(p.a)({}, e.target.name, e.target.value)
            )
          );
        }
        return o.a.createElement(
          "div",
          null,
          o.a.createElement(
            "div",
            null,
            o.a.createElement("h1", null, "Login Page"),
            o.a.createElement("input", {
              type: "text",
              placeholder: "Username",
              name: "username",
              onChange: u,
              required: !0,
            }),
            o.a.createElement("input", {
              type: "password",
              placeholder: "Password",
              name: "password",
              onChange: u,
              required: !0,
            }),
            o.a.createElement(
              "button",
              {
                onClick: function () {
                  J.a
                    .post(
                      "https://react-redux-bookstore-server.herokuapp.com/api/login",
                      { username: r.username, password: r.password }
                    )
                    .then(function (t) {
                      if (t.data.success) {
                        var n = t.data.token;
                        localStorage.setItem("jsonwebtoken", n),
                          M(n),
                          console.log(n),
                          e.onAuthenticated(!0),
                          alert(t.data.message),
                          e.history.push("/");
                      } else alert(t.data.message), alert("response failed"), c(Object(d.a)(Object(d.a)({}, r), {}, { password: "" }));
                    });
                },
              },
              "Login"
            )
          ),
          o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "button",
              {
                onClick: function () {
                  fetch(
                    "https://react-redux-bookstore-server.herokuapp.com/login",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(i),
                    }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (t) {
                      t.success
                        ? (e.onAuthenticated(!0),
                          alert(t.message),
                          e.history.push("/"))
                        : (alert(t.message),
                          c(
                            Object(d.a)(
                              Object(d.a)({}, r),
                              {},
                              { password: "" }
                            )
                          ));
                    });
                },
              },
              "Guest Login"
            )
          )
        );
      });
      var _ = function () {
        var e = Object(a.useState)([]),
          t = Object(h.a)(e, 2),
          n = t[0],
          r = t[1],
          c = function () {
            fetch("https://react-redux-bookstore-server.herokuapp.com/")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                r(e);
              });
          };
        return (
          Object(a.useEffect)(function () {
            c();
          }, []),
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: "App container" },
              o.a.createElement(
                y.a,
                null,
                n.map(function (e, t) {
                  return o.a.createElement(j, {
                    key: t,
                    books: e,
                    fetchBooks: c,
                  });
                })
              )
            )
          )
        );
      };
      var H = Object(s.b)(null, function (e) {
          return {
            onAuthenticated: function () {
              return e(O(!1));
            },
          };
        })(function (e) {
          return (
            e.onAuthenticated(!1),
            o.a.createElement(
              "div",
              null,
              o.a.createElement("h1", null, "You are signed out!")
            )
          );
        }),
        K = n(67),
        q = n(68),
        z = n(70),
        X = n(69),
        Y = function (e) {
          var t = (function (t) {
            Object(z.a)(a, t);
            var n = Object(X.a)(a);
            function a(e) {
              var t;
              return (
                Object(K.a)(this, a),
                !1 === (t = n.call(this, e)).props.isLoggedIn &&
                  t.props.history.push("/"),
                t
              );
            }
            return (
              Object(q.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return o.a.createElement(e, this.props);
                  },
                },
              ]),
              a
            );
          })(a.Component);
          return Object(s.b)(function (e) {
            return { isLoggedIn: e.isLoggedIn };
          })(t);
        },
        Q = { cartBooks: [] },
        W = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Q,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "ADDCARTBOOKS":
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                { cartBooks: e.cartBooks.concat(t.payload) }
              );
            case "REMOVECARTBOOKS":
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                {
                  cartBooks: e.cartBooks.filter(function (e) {
                    return e.id !== t.payload.id;
                  }),
                }
              );
            default:
              return e;
          }
        },
        Z = { isLoggedIn: !1 },
        $ = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Z,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "AUTHENTICATED":
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                { isLoggedIn: t.value }
              );
            default:
              return e;
          }
        },
        ee = { books: [] },
        te = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ee,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "ADDGLOBALBOOKS":
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                { books: e.books.concat(t.payload) }
              );
            default:
              return e;
          }
        },
        ne = { counter: 0 },
        ae = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ne,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "ADD":
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                { counter: e.counter + 1 }
              );
            case "REMOVE":
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                { counter: e.counter - 1 }
              );
            default:
              return e;
          }
        },
        oe = Object(u.c)({
          cartRed: W,
          loginRed: $,
          booksRed: te,
          counterRed: ae,
        }),
        re = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || u.d,
        ce = Object(u.e)(oe, re(Object(u.a)(m.a)));
      M(localStorage.getItem("jsonwebtoken")),
        c.a.render(
          o.a.createElement(
            o.a.StrictMode,
            null,
            o.a.createElement(
              l.BrowserRouter,
              null,
              o.a.createElement(
                s.a,
                { store: ce },
                o.a.createElement(
                  D,
                  null,
                  o.a.createElement(
                    i.g,
                    null,
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/",
                      component: _,
                    }),
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/AddBook",
                      component: Y(b),
                    }),
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/Edit/:id",
                      component: Y(F),
                    }),
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/Register",
                      component: E,
                    }),
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/Fiction",
                      component: C,
                    }),
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/Nonfiction",
                      component: L,
                    }),
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/AllGenres",
                      component: B,
                    }),
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/Cart",
                      component: Y(P),
                    }),
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/Login",
                      component: V,
                    }),
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/Home",
                      component: _,
                    }),
                    o.a.createElement(i.d, {
                      exact: !0,
                      path: "/Signout",
                      component: H,
                    })
                  )
                )
              )
            )
          ),
          document.getElementById("root")
        );
    },
    65: function (e, t, n) {
      e.exports = n.p + "static/media/logo-bootstrap.83fe61b0.svg";
    },
    71: function (e, t, n) {
      e.exports = n(102);
    },
  },
  [[71, 1, 2]],
]);
//# sourceMappingURL=main.7883da86.chunk.js.map
