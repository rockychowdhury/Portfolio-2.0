import algo from "../assets/Stacks/algo.png"
import ds from "../assets/Stacks/ds.png"
import mongodb from "../assets/Stacks/mongodb.png"
import bootstrap from "../assets/Stacks/bootstrap.png"
import cpp from "../assets/Stacks/cpp.png"
import css from "../assets/Stacks/css.png"
import django from "../assets/Stacks/django.png"
import docker from "../assets/Stacks/docker.png"
import express from "../assets/Stacks/express.png"
import firebase from "../assets/Stacks/firebase.png"
import postman from "../assets/Stacks/postman.png"
import vscode from "../assets/Stacks/vscode.png"
import github from "../assets/github.png"
import react from "../assets/Stacks/react.png"
import tailwind from "../assets/Stacks/tailwind.png"
import postgres from "../assets/Stacks/postgres.png"
import mysql from "../assets/Stacks/mysql.png"
import jwt from "../assets/Stacks/jwt.png"
import node from "../assets/Stacks/node.png"
import js from "../assets/Stacks/js.png"
import python from "../assets/Stacks/python.png"
import html from "../assets/Stacks/html.png"
import c from "../assets/Stacks/c.png"
import api from "../assets/Stacks/api.png"
import varcel from "../assets/Stacks/varcel.png"
import netlify from "../assets/Stacks/netlify.png"
import oop from "../assets/Stacks/oop.png"
import cf from '../assets/codeforces.png'
import cc from '../assets/codechef.png'
import lc from '../assets/lettcode.png'
const icons = [
    algo, ds, c, cpp, js, python, django, api, jwt, postgres, mongodb, mysql, react, tailwind, bootstrap, html, css, node, express, firebase, github, vscode, postman, docker, varcel, netlify
];
const fullStackIcons = [js, api, jwt, mongodb, react, tailwind, bootstrap, html, css, node, express, firebase, varcel, netlify];
const backendIcons = [
    python, django, api, jwt, mysql, postman
];
const exploredIcons = [
    postgres, docker
];
const foundationIcons = [
    c, cpp, oop, algo, ds, github, vscode
];
const cpIcons = [
    c, cpp, oop, algo, ds, cf, cc, lc
];
export const useIcons = () => {
    return icons;
};
export const useFullStackIcons = () => {
    return fullStackIcons;
};
export const useBackendIcons = () => {
    return backendIcons;
};
export const useFoundationIcons = () => {
    return foundationIcons;
};
export const useExploreIcons = () => {
    return exploredIcons;
};
export const useCPIcons = () => {
    return cpIcons;
};

