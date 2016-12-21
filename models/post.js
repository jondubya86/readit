'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
   classMethods: {
     associate: function(models) {
       // associations can be defined here
       Post.belongsToMany(models.Comment, {through: 'postComment'})
       Post.belongsToMany(models.Vote, {through: 'postVote'})
     }
   }
 });
  return Post;
};
