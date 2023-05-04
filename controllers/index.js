const models = require("../database/models");

const createFutbolista = async (req, res) => {
	try{
		const futbolista = await models.Futbolista.create(req.body);
		return res.status(201).json({
			futbolista
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
const getAllFutbolistas = async (req, res) => {
	console.log('getting futbolistas');
	try {
		const futbolistas = await models.Futbolista.findAll({
			include: [
			]
		});
		return res.status(200).json({ futbolistas });
	}catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	createFutbolista,
	getAllFutbolistas
};
