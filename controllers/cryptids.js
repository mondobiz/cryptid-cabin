const Cryptid = require('../models/cryptid');


async function getCryptids(req, res) {
    const cryptids = await Cryptid.find({})

    res.json(cryptids);
}

async function getCryptid(req, res) {
    const cryptidId = req.params.cryptidId
    const cryptid = await Cryptid.findById(cryptidId)

    res.json(cryptid);
}

async function createCryptid(req, res) {
    const cryptids = await Cryptid.create(req.body)
    .then((cryptid) => {
        cryptid.save()
        res.send(cryptid)
        })

        res.json(cryptids)
}

async function updateCryptid(req, res) {
    const cryptids = await Cryptid.findByIdAndUpdate(req.params.cryptidId, req.body, { new: true })
    .then((updatedCryptid) => {
        updatedCryptid.save()
        res.send(updatedCryptid)
    })

    res.json(cryptids);
}

async function deleteCryptid(req, res) {
    await Cryptid.findByIdAndDelete(req.params.cryptidId)

    res.send(200)
}



module.exports = {
    getCryptids,
    getCryptid,
    createCryptid,
    updateCryptid,
    deleteCryptid
};