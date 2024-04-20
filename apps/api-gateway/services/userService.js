export async function getUser(req, res) {
    res.send({
        message: 'This is the mockup controller for getUser'
    });
}

module.exports.getUser = getUser;

/**
 * Get or create a DFDA user
 * @param {string} yourSystemUserId - The unique identifier for the user in the client's system.
 * @returns {Promise<string>} The DFDA user ID
 */
export async function getOrCreateDfdaUser(yourSystemUserId) {
  const response = await fetch(`https://safe.dfda.earth/api/v1/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Client-Id': process.env.DFDA_CLIENT_ID, // Get at https://builder.dfda.earth/app/public/#/app/configuration
      'X-Client-Secret': process.env.DFDA_CLIENT_SECRET,  // Get at https://builder.dfda.earth/app/public/#/app/configuration
    },
    body: JSON.stringify({
      clientUserId: yourSystemUserId
    }),
  });
  const responseData = await response.json();
  return responseData.user;
}

module.exports.createDfdaUser = getOrCreateDfdaUser;
