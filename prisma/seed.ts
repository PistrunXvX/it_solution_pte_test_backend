// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    await prisma.userProfile.deleteMany();
    await prisma.skill.deleteMany();
    await prisma.experience.deleteMany();
    await prisma.project.deleteMany();


    const userProfile = await prisma.userProfile.create({
        data: {
            firstName: 'Евгений',
            lastName: 'Горячкин',
            shortDescription: 'Fullstack разработчик',
            githubLink: 'https://github.com/PistrunXvX',
            linkedinLink: 'https://www.linkedin.com/in/cyberhande-evgeny-us/',
            itchioLink: 'https://pistrunxvx.itch.io/',
            skills: {
                create: [
                    { name: 'JavaScript' },
                    { name: 'TypeScript' },
                    { name: 'Node.js' },
                    { name: 'NestJS' },
                    { name: 'Svelte' },
                    { name: 'Vue.js' },
                    { name: 'Docker' },
                    { name: 'PostgreSQL' },
                    { name: 'GraphQL' },
                ],
            },
            experiences: {
                create: [
                    {
                        companyName: 'Ростелеком',
                        title: 'Junior Fullstack разработчик',
                        startDate: new Date('2021-09-01'),
                        endDate: new Date('2022-06-31'),
                        description: 'Работал над внутренней корпоративной системой. - Разработка модулей на PHP/Yii2 - Интеграция/миграция в БД PostgreSQL - Верстка модулей Bootstrap/CSS/JS/Jquery',
                    },
                    {
                        companyName: 'ICORE-Integration',
                        title: 'Fullstack разработчик',
                        startDate: new Date('2022-10-01'),
                        endDate: new Date('2023-01-31'),
                        description: 'Внештатный работник в Bereke Bank - Разработка бизнес-процессов - Планирование архитектуры процессов - Создание расширений для внутренней системы low-code платформы',
                    },
                    {
                        companyName: 'Государственная Третьяковская Галерея',
                        title: 'Fullstack разработчик',
                        startDate: new Date('2023-02-01'),
                        endDate: new Date('2025-06-31'),
                        description: 'Работа над внутренними цифровыми проектами Третьяковской галереи - Проект Моя Третьяковка (my.tretyakov.ru) - PHP/BitrixCMS/Vue3/Router/Composition API - Проект "Games.Tretyakov" (games.tretyakov.ru) - NestJS/Typescript/SvelteJS - Разработка и сопровождение выставочных интерактивных систем PWA/SvelteJS - Разработка интеграции эквайринга ВТБ для сервиса Tilda',
                    },
                    {
                        companyName: 'НПО Алмаз',
                        title: 'Инженер-программист',
                        startDate: new Date('2026-01-01'),
                        endDate: new Date('2026-06-31'),
                        description: 'Разработка пользовательского интерфейса для комплекса тренажеров авиадиспетчеров ТОПАЗ "КИТ" - Ведение и составление проектной документации в Notion - Прототипирование компонентов интерфейса в Figma - Интеграция и оптимизация интерфейсов на движке Godot 4.x'
                    }
                ],
            },
            projects: {
                create: [
                    {
                        title: 'My.Tretyakov',
                        link: 'https://my.tretyakov.ru/',
                    },
                    {
                        title: 'Games.Tretyakov',
                        link: 'https://games.tretyakov.ru/',
                    },
                    {
                        title: 'SpaceIsLimited',
                        link: 'https://sil.literallytheteam.com/',
                    },
                    {
                        title: 'CutItDown(game)',
                        link: 'https://pistrunxvx.itch.io/cut-it-down',
                    }
                ],
            },
        },
        include: {
            skills: true,
            experiences: true,
            projects: true,
        },
    });
}

main()
    .catch((e) => {
        console.error('Ошибка сидирования:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });