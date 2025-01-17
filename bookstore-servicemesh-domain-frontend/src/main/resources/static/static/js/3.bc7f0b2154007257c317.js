webpackJsonp([3], {
    "2Lpz": function (e, t) {
    }, Cp5v: function (e, t) {
    }, P7ry: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = a("Xxa5"), n = a.n(r), o = a("exGp"), s = a.n(o), i = a("Dd8w"), l = a.n(i), c = a("NYxO"),
            u = a("gyMJ"), p = {
                render: function () {
                    var e = this, t = e.$createElement, r = e._self._c || t;
                    return r("div", [r("img", {
                        staticClass: "logo",
                        attrs: {src: a("lgL1")}
                    }), e._v(" "), r("span", {staticClass: "title"}, [e._v("CPS's Bookstore Demo")]), e._v(" "), r("el-form", {
                        ref: "login-form",
                        staticClass: "login-form",
                        attrs: {model: e.authorization, rules: e.rules}
                    }, [r("el-form-item", {attrs: {prop: "name"}}, [r("el-input", {
                        attrs: {placeholder: "请输入用户"},
                        model: {
                            value: e.authorization.name, callback: function (t) {
                                e.$set(e.authorization, "name", t)
                            }, expression: "authorization.name"
                        }
                    }, [r("template", {slot: "prepend"}, [r("i", {staticClass: "el-icon-user"})])], 2)], 1), e._v(" "), r("el-form-item", {attrs: {prop: "password"}}, [r("el-input", {
                        attrs: {
                            placeholder: "请输入密码",
                            "show-password": ""
                        }, model: {
                            value: e.authorization.password, callback: function (t) {
                                e.$set(e.authorization, "password", t)
                            }, expression: "authorization.password"
                        }
                    }, [r("template", {slot: "prepend"}, [r("i", {staticClass: "el-icon-unlock"})])], 2)], 1), e._v(" "), r("el-select", {
                        staticStyle: {width: "370px"},
                        attrs: {placeholder: "请选择语言"},
                        model: {
                            value: e.authorization.language, callback: function (t) {
                                e.$set(e.authorization, "language", t)
                            }, expression: "authorization.language"
                        }
                    }, [r("el-option", {
                        attrs: {
                            label: "          中文",
                            value: "zhCN"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "          英文（无效，国际化预留）",
                            value: "enUS"
                        }
                    }), e._v(" "), r("template", {slot: "prefix"}, [r("div", {staticClass: "select-prefix"}, [r("i", {staticClass: "el-icon-map-location"})])])], 2), e._v(" "), r("template", {slot: "prepend"}, [r("i", {staticClass: "el-icon-map-location"})]), e._v(" "), r("div", {staticClass: "actions"}, [r("el-checkbox", {
                        staticClass: "check",
                        model: {
                            value: e.authorization.rememberMe, callback: function (t) {
                                e.$set(e.authorization, "rememberMe", t)
                            }, expression: "authorization.rememberMe"
                        }
                    }, [e._v("\n        自动登录\n      ")]), e._v(" "), r("el-button", {
                        staticStyle: {
                            float: "right",
                            display: "inline-block",
                            padding: "0 10px 0 0"
                        }, attrs: {type: "text"}, on: {
                            click: function (t) {
                                return e.$emit("changeMode")
                            }
                        }
                    }, [e._v("注册新用户\n      ")]), e._v(" "), r("el-button", {
                        staticStyle: {
                            width: "100%",
                            display: "block",
                            margin: "50px 0 0 0"
                        }, attrs: {type: "primary"}, on: {click: e.login}
                    }, [e._v("登录")])], 1), e._v(" "), r("hr"), e._v(" "), r("div", {staticStyle: {"text-align": "center"}}, [e._v("\n      登录代表你已同意\n      "), r("el-tooltip", {
                        attrs: {
                            effect: "dark",
                            content: "演示用途，并没有写",
                            placement: "bottom"
                        }
                    }, [r("el-button", {attrs: {type: "text"}}, [e._v("用户协议")])], 1), e._v("\n      和\n      "), r("el-tooltip", {
                        attrs: {
                            effect: "dark",
                            content: "也是没有写",
                            placement: "bottom"
                        }
                    }, [r("el-button", {
                        staticStyle: {"margin-left": "0"},
                        attrs: {type: "text"}
                    }, [e._v("隐私政策")])], 1)], 1)], 2)], 1)
                }, staticRenderFns: []
            };
        var m = a("VU/8")({
            name: "LoginForm", data: function () {
                return {
                    authorization: {name: "", password: "", language: "zhCN", rememberMe: !1},
                    rules: {
                        name: [{required: !0, message: "请输入用户名称", trigger: "blur"}],
                        password: [{required: !0, message: "请输入密码", trigger: "blur"}]
                    }
                }
            }, methods: {
                login: function () {
                    var e = this;
                    this.$refs["login-form"].validate(function (t) {
                        if (!t) return !1;
                        e.$emit("login", e.authorization)
                    })
                }
            }
        }, p, !1, function (e) {
            a("Cp5v")
        }, "data-v-73f7116f", null).exports, d = {
            name: "RegistrationForm", data: function () {
                return {
                    account: {username: "", email: "", password: "", telephone: ""},
                    rules: {
                        username: [{required: !0, message: "请填写用户名", trigger: "blur"}],
                        name: [{required: !0, message: "请填写真实姓名", trigger: "blur"}],
                        password: [{required: !0, message: "请填写密码", trigger: "blur"}],
                        email: [{required: !0, message: "请填写邮箱", trigger: "blur"}, {
                            type: "email",
                            message: "不符合邮箱格式",
                            trigger: "blur"
                        }],
                        telephone: [{required: !0, message: "请填写手机", trigger: "blur"}]
                    }
                }
            }, methods: l()({}, Object(c.d)("user", ["setupSession"]), {
                registerAccount: function () {
                    var e = this;
                    this.$refs.account_form.validate(function (t) {
                        if (!t) return !1;
                        e.submitRegistration()
                    })
                }, submitRegistration: function () {
                    var e = this;
                    return s()(n.a.mark(function t() {
                        var a, r;
                        return n.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, u.a.account.registerAccount(e.account);
                                case 3:
                                    if (a = t.sent, (r = a.data).code !== u.a.constants.REMOTE_OPERATION_SUCCESS) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 8, u.a.auth.login(e.account.username, e.account.password);
                                case 8:
                                    return (r = t.sent.data).rememberMe = !1, r.language = "zhCN", e.setupSession(r), e.$router.push("/"), t.abrupt("return");
                                case 14:
                                    t.next = 20;
                                    break;
                                case 16:
                                    t.prev = 16, t.t0 = t.catch(0), console.error(t.t0), e.$alert(t.t0.message, "出现异常");
                                case 20:
                                case"end":
                                    return t.stop()
                            }
                        }, t, e, [[0, 16]])
                    }))()
                }
            })
        }, g = {
            render: function () {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("div", [r("img", {
                    staticClass: "logo",
                    attrs: {src: a("lgL1")}
                }), e._v(" "), r("span", {staticClass: "title"}, [e._v("新用户注册")]), e._v(" "), r("el-form", {
                    ref: "account_form",
                    staticClass: "account_form",
                    attrs: {model: e.account, rules: e.rules, "label-position": "left"}
                }, [r("el-form-item", {attrs: {prop: "user"}}, [r("el-input", {
                    attrs: {placeholder: "请输入用户名"},
                    model: {
                        value: e.account.username, callback: function (t) {
                            e.$set(e.account, "username", t)
                        }, expression: "account.username"
                    }
                }, [r("template", {slot: "prepend"}, [r("i", {staticClass: "el-icon-user"})])], 2)], 1), e._v(" "), r("el-form-item", {attrs: {prop: "password"}}, [r("el-input", {
                    attrs: {
                        placeholder: "请输入密码",
                        "show-password": ""
                    }, model: {
                        value: e.account.password, callback: function (t) {
                            e.$set(e.account, "password", t)
                        }, expression: "account.password"
                    }
                }, [r("template", {slot: "prepend"}, [r("i", {staticClass: "el-icon-unlock"})])], 2)], 1), e._v(" "), r("el-form-item", {attrs: {prop: "name"}}, [r("el-input", {
                    attrs: {placeholder: "请输入真实姓名"},
                    model: {
                        value: e.account.name, callback: function (t) {
                            e.$set(e.account, "name", t)
                        }, expression: "account.name"
                    }
                }, [r("template", {slot: "prepend"}, [r("i", {staticClass: "el-icon-user"})])], 2)], 1), e._v(" "), r("el-form-item", {attrs: {prop: "email"}}, [r("el-input", {
                    attrs: {placeholder: "请输入邮箱"},
                    model: {
                        value: e.account.email, callback: function (t) {
                            e.$set(e.account, "email", t)
                        }, expression: "account.email"
                    }
                }, [r("template", {slot: "prepend"}, [r("i", {staticClass: "el-icon-receiving"})])], 2)], 1), e._v(" "), r("el-form-item", {attrs: {prop: "telephone"}}, [r("el-input", {
                    attrs: {placeholder: "请输入手机"},
                    model: {
                        value: e.account.telephone, callback: function (t) {
                            e.$set(e.account, "telephone", t)
                        }, expression: "account.telephone"
                    }
                }, [r("template", {slot: "prepend"}, [r("i", {staticClass: "el-icon-phone-outline"})])], 2)], 1), e._v(" "), r("div", {staticClass: "actions"}, [r("el-button", {
                    staticClass: "action_button",
                    attrs: {type: "primary"},
                    on: {click: e.registerAccount}
                }, [e._v("注册")]), e._v(" "), r("el-button", {
                    staticClass: "action_button", on: {
                        click: function (t) {
                            return e.$emit("changeMode")
                        }
                    }
                }, [e._v("返回\n      ")])], 1)], 1)], 1)
            }, staticRenderFns: []
        };
        var f = {
            name: "Login", components: {
                LoginForm: m, RegistrationForm: a("VU/8")(d, g, !1, function (e) {
                    a("2Lpz")
                }, "data-v-48aa8087", null).exports
            }, data: function () {
                return {registrationMode: !1}
            }, computed: {
                nextPath: function () {
                    return this.$route.query.redirect ? this.$route.query.redirect : "/"
                }
            }, methods: l()({}, Object(c.d)("user", ["setupSession"]), {
                login: function (e) {
                    var t = this;
                    return s()(n.a.mark(function a() {
                        var r, o;
                        return n.a.wrap(function (a) {
                            for (; ;) switch (a.prev = a.next) {
                                case 0:
                                    return a.prev = 0, a.next = 3, u.a.auth.login(e.name, e.password);
                                case 3:
                                    r = a.sent, (o = r.data).rememberMe = e.rememberMe, o.language = e.language, t.setupSession(o), t.$router.push(t.nextPath), a.next = 14;
                                    break;
                                case 11:
                                    a.prev = 11, a.t0 = a.catch(0), t.$alert(a.t0.message, "出现异常");
                                case 14:
                                case"end":
                                    return a.stop()
                            }
                        }, a, t, [[0, 11]])
                    }))()
                }
            })
        }, v = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "bg"}, [a("div", {staticClass: "dialog dialog-shadow"}, [e.registrationMode ? e._e() : a("LoginForm", {
                    on: {
                        changeMode: function (t) {
                            e.registrationMode = !e.registrationMode
                        }, login: e.login
                    }
                }), e._v(" "), e.registrationMode ? a("RegistrationForm", {
                    on: {
                        changeMode: function (t) {
                            e.registrationMode = !e.registrationMode
                        }
                    }
                }) : e._e()], 1)])
            }, staticRenderFns: []
        };
        var h = a("VU/8")(f, v, !1, function (e) {
            a("bl2P")
        }, "data-v-350afc81", null);
        t.default = h.exports
    }, bl2P: function (e, t) {
    }, lgL1: function (e, t, a) {
        e.exports = a.p + "static/img/logo-color.5500ec5.png"
    }
});