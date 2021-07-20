'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert('Projects', [{
            projectName: 'Golfers Plus',
            image: '../client/src/assets/img/portfolio/grid/websites/Golfers-Plus.png',
            summary: 'An app for golfers to keep track of scores hole by hole and per course. The dev team decided to create an app that would address both total score and quota scores for the user. There are two ways to find the score through the total score and quota. players to compete against each other no matter the skill level. Additional stretchfeatures are mapping and range estimation',
            github: 'https://github.com/',
            url: "www.golferplud.com",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         */
        await queryInterface.bulkDelete('Projects', null, {});
    }
};
