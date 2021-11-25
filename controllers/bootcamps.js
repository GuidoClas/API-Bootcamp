const Bootcamp = require('../models/Bootcamp');

// @desc    Gets all the bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req,res, next) => {
    res.status(200).json({ success: true });
}

// @desc    Gets a single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req,res, next) => {
    res.status(200).json({ success: true });
}

// @desc    Creates a bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req,res, next) => {
    console.log(req.body);
    res.status(201).json({ success: true });
}

// @desc    Updates a bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req,res, next) => {
    res.status(200).json({ success: true });
}

// @desc    Deletes a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req,res, next) => {
    res.status(200).json({ success: true });
}