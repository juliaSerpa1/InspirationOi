'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Planos', [{
      nome:'200 Mega',
      preco: 100,
      discricao: 'Qualidade e estabilidade pra ver vídeos, jogar online e trabalhar de casa.',
      ativo:true,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    {
      nome:'400 Mega',
      preco: 120,
      discricao: 'Muita velocidade, qualidade e estabilidade pra ver vídeos, jogar online e trabalhar de casa.',
      ativo:true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome:'500 Mega',
      preco: 130,
      discricao: 'Ainda mais velocidade pra ver vídeos, jogar online e trabalhar de casa.',
      ativo:true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome:'1 Giga',
      preco: 280,
      discricao: 'Supervelocidade pra baixar arquivos pesados muito mais rapido com qualidade e estabilidade',
      ativo:true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Planos', null, {});
  }
};
