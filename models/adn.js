const mongoose = require('mongoose');
const adnSchema = new mongoose.Schema(
    {
        ADN : {
            helice1 : { type: String, required: true },
            helice2 : { type: String, required: true }
        },
        ARN : { type: String, required: true },
        codones : [{ type: String, required: true }]
    }
)
const ADN = mongoose.model('ADN', adnSchema);
module.exports = ADN;