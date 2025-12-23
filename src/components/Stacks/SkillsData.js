import algo from "../../assets/Stacks/algo.png"
import ds from "../../assets/Stacks/ds.png"
import mongodb from "../../assets/Stacks/mongodb.png"
import bootstrap from "../../assets/Stacks/bootstrap.png"
import cpp from "../../assets/Stacks/cpp.png"
import css from "../../assets/Stacks/css.png"
import django from "../../assets/Stacks/django.png"
import docker from "../../assets/Stacks/docker.png"
import express from "../../assets/Stacks/express.png"
import firebase from "../../assets/Stacks/firebase.png"
import postman from "../../assets/Stacks/postman.png"
import vscode from "../../assets/Stacks/vscode.png"
import github from "../../assets/github.png"
import react from "../../assets/Stacks/react.png"
import tailwind from "../../assets/Stacks/tailwind.png"
import postgres from "../../assets/Stacks/postgres.png"
import mysql from "../../assets/Stacks/mysql.png"
import jwt from "../../assets/Stacks/jwt.png"
import node from "../../assets/Stacks/node.png"
import js from "../../assets/Stacks/js.png"
import python from "../../assets/Stacks/python.png"
import html from "../../assets/Stacks/html.png"
import c from "../../assets/Stacks/c.png"
import api from "../../assets/Stacks/api.png"
import varcel from "../../assets/Stacks/varcel.png"
import netlify from "../../assets/Stacks/netlify.png"
import oop from "../../assets/Stacks/oop.png"

export const skillCategories = [
    {
        category: "Frontend",
        description: "User interface & styling",
        color: "from-blue-500 to-cyan-500",
        skills: [
            { name: "React", icon: react, proficiency: 95 },
            { name: "JavaScript", icon: js, proficiency: 90 },
            { name: "Tailwind CSS", icon: tailwind, proficiency: 95 },
            { name: "HTML", icon: html, proficiency: 95 },
            { name: "CSS", icon: css, proficiency: 90 },
            { name: "Bootstrap", icon: bootstrap, proficiency: 85 },
        ]
    },
    {
        category: "Backend",
        description: "Server & API development",
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "Node.js", icon: node, proficiency: 90 },
            { name: "Express.js", icon: express, proficiency: 90 },
            { name: "Python", icon: python, proficiency: 85 },
            { name: "Django", icon: django, proficiency: 85 },
            { name: "REST API", icon: api, proficiency: 95 },
            { name: "JWT Auth", icon: jwt, proficiency: 90 },
        ]
    },
    {
        category: "Databases",
        description: "Data storage & queries",
        color: "from-green-500 to-emerald-500",
        skills: [
            { name: "PostgreSQL", icon: postgres, proficiency: 90 },
            { name: "MongoDB", icon: mongodb, proficiency: 85 },
            { name: "MySQL", icon: mysql, proficiency: 85 },
            { name: "Firebase", icon: firebase, proficiency: 80 },
        ]
    },
    {
        category: "Tools & Deployment",
        description: "Development & production tools",
        color: "from-orange-500 to-red-500",
        skills: [
            { name: "Docker", icon: docker, proficiency: 80 },
            { name: "VS Code", icon: vscode, proficiency: 95 },
            { name: "GitHub", icon: github, proficiency: 95 },
            { name: "Postman", icon: postman, proficiency: 90 },
            { name: "Vercel", icon: varcel, proficiency: 90 },
            { name: "Netlify", icon: netlify, proficiency: 85 },
        ]
    },
    {
        category: "Foundations",
        description: "Core programming concepts",
        color: "from-indigo-500 to-blue-500",
        skills: [
            { name: "C", icon: c, proficiency: 85 },
            { name: "C++", icon: cpp, proficiency: 85 },
            { name: "DSA", icon: ds, proficiency: 90 },
            { name: "Algorithms", icon: algo, proficiency: 90 },
            { name: "OOP", icon: oop, proficiency: 90 },
        ]
    },
];
