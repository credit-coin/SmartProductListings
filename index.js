const moment = require('moment');
const Campaign = require('./entity-verification');

/**
 *  This lambda function shall act as middleware allowing participants in the credit coin network to verify 
 *  that an entity is considered trusted. An entity is trusted once they are vetted and issued a TrustedEntity "BadgeForce Credential"
 *  for their role in the network. ( i.e: trusted{brand, seller, content creator, etc} )
 *
 *  Use the "BadgeForce Verifier" to and return 200 or 403 response code to API Gateway. 
 *
 *
 * @param {*} args expected request arguments are 'state_address (state address of credential)', 'signature (signature of message signed with credential holders private key)'
 * @param {*} res
 * @param {*} next
 * @returns status code 200 if verification succeeds or 403 if verification fails
 */
const verificationMiddleWare = async (args, res, next) => {
    //TODO: install and use new badgeforce js lib

    try {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');

        //TODO: define response data object
        res.status(200).send(JSON.stringify({message: 'success'}));
    } catch (error) {
        res.status(400).send(error);
    }
}


exports.verifyEntityCredential = verificationMiddleWare; 