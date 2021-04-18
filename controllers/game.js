const  Games = require('../models/game');

exports.index = async (request, response, next) => {
  try {

    const games = await Games.find().populate('genre');

    response.status(200).json(games);
  } catch (error) {
    next(error);
  }
}; 

exports.show = async (request, response, next) => {
  try {
    const { id } = request.params;

    const game = await Games.findById(id).populate('genre');

    response.status(200).json(game);
  } catch (error) {
    next(error);
  }
}; 

exports.create = async (request, response, next) => {
  try {
    const {
      name,
      title,
      yearReleased,
      price
    } = request.body;

    const game = await Games.create({
      name,
      title,
      yearReleased,
      price
    });

    response.status(200).json({
      message: "Game was created successfully",
      status: "success",
      game
    });
  } catch (error) {
    next(error);
  }
}; 

exports.update = async (request, response, next) => {
  try {
    const {
      id,
      name,
      title,
      yearReleased,
      price
    } = request.body;

    await Games.findOneAndUpdate({ _id: id }, {
      id,
      name,
      title,
      yearReleased,
      price
    });

    const game= await Games.findById(id);

    response.status(200).json({
      message: "Game was updated successfully",
      status: "success",
      game
    });
  } catch (error) {
    next(error);
  }
}; 

exports.destroy = async (request, response, next) => {
  try {
    const { id } = request.body;

    await Games.findOneAndDelete({ _id: id });

    response.status(200).json({
      message: "Game was deleted successfully",
      status: "success"
    });
  } catch (error) {
    next(error);
  }
};
