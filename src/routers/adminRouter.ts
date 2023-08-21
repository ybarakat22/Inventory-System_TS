const express = require('express');
const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');
const AdminBroExpress= require('@admin-bro/express');
import * as mongoose from 'mongoose'
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

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
    authenticate: async (email: string, password: string) => {
        if (ADMIN.email === email && ADMIN.password === password) {
            return ADMIN;
        }
        return null;
    },
    cookiePassword: process.env.COOKIE_PASSWORD,
    cookieName: process.env.COOKIE_NAME
});

export default router;