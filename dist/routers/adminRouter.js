"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');
const AdminBroExpress = require('@admin-bro/express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './.env' });
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin'
});
const ADMIN = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
};
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        if (ADMIN.email === email && ADMIN.password === password) {
            return ADMIN;
        }
        return null;
    }),
    cookiePassword: process.env.COOKIE_PASSWORD,
    cookieName: process.env.COOKIE_NAME
});
exports.default = router;
