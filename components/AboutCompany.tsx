"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutCompany() {
    // Auto-changing motivational quotes
    const quotes = [
        "“Success begins with the courage to take the first step.”",
        "“Consistency builds empires — one small action at a time.”",
        "“Great things never come from comfort zones.”",
        "“If your dreams don’t scare you, they aren’t big enough.”",
        "“Growth happens when vision meets execution.”",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length);
        }, 3500); // Auto change after 3.5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 text-center px-6 bg-white">

            {/* ------------------ HEADING ------------------ */}
            <h3 className="text-[#9d03c4] text-sm font-semibold uppercase tracking-wider">
                About Company
            </h3>

            {/* ------------------ AUTO CHANGING QUOTE ------------------ */}
            <div className="mt-6 h-[80px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.6 }}
                        className="text-[26px] italic font-medium text-[#000000] leading-snug max-w-3xl"
                    >
                        {quotes[index]}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* ------------------ COMPANY DESCRIPTION ------------------ */}
            <p className="max-w-4xl mx-auto mt-10 text-[20px] leading-relaxed text-[#4220d6] opacity-90">
                At Adverza Solutions, the ‘spark’ isn’t just in our name—it’s in every strategy,
                design, and campaign we craft. We blend innovation with insights to build
                brands that stand out. No templates. No shortcuts. Just real, measurable
                results for businesses that want to grow with intention.
            </p>

            {/* ------------------ TECHNOLOGY LOGO MARQUEE ------------------ */}
            <div className="mt-20 overflow-hidden relative w-full">

                <div className="flex whitespace-nowrap animate-marquee">

                    {/* ------- First row ------- */}
                    <div className="flex items-center gap-16 px-8">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="h-14 bg-black rounded-lg p-2" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" className="h-14" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="h-14 bg-white p-2 rounded-lg" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="h-14" />

                        {/* ===== FRONTEND ===== */}
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="h-14" />

                        {/* ===== BACKEND ===== */}
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" className="h-14 bg-white p-2 rounded" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" className="h-14" />

                        {/* GraphQL */}
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" className="h-14" />

                        {/* ===== DATABASES ===== */}
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" className="h-14" />

                        {/* ===== DEVOPS ===== */}
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" className="h-14" />

                        {/* CICD & Cloud */}
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" className="h-14" />

                        {/* ===== TOOLS ===== */}
                        <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="h-14" />
                        <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" className="h-14 rounded-xl" />
                        <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="h-14" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" className="h-14" />

                    </div>

                    {/* ------- Duplicate row for infinite loop ------- */}
                    {/* <div className="flex items-center gap-16 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-14" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="h-14 bg-black rounded-lg p-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-14" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="h-14" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="h-14 bg-white p-2 rounded-lg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-14" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg" className="h-14" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-14" />
          </div> */}

                </div>
            </div>

        </section>
    );
}
