const fetch = require('node-fetch');

if (!process.env.DFDA_CLIENT_ID || !process.env.DFDA_CLIENT_SECRET) {
  throw new Error('Missing DFDA_CLIENT_ID or DFDA_CLIENT_SECRET. Please get them at https://builder.dfda.earth/app/public/#/app/configuration');
}

const measurementsService = {
  /**
   * Get measurements for the specified user
   * @param {Object} params - Query parameters 
   * @param {string} params.variableName - Name of the variable you want measurements for
   * @param {string} params.sort - Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
   * @param {number} params.limit - The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
   * @param {number} params.offset - OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
   * @param {string} params.variableCategoryName - Ex: Emotions, Treatments, Symptoms...
   * @param {string} params.updatedAt - When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
   * @param {number} params.userId - User's id
   * @param {string} params.sourceName - ID of the source you want measurements for (supports exact name match only)
   * @param {string} params.connectorName - Ex: facebook
   * @param {string} params.value - Value of measurement
   * @param {string} params.unitName - Ex: Milligrams
   * @param {string} params.earliestMeasurementTime - Excluded records with measurement times earlier than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
   * @param {string} params.latestMeasurementTime - Excluded records with measurement times later than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
   * @param {string} params.createdAt - When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
   * @param {number} params.id - Measurement id
   * @param {number} params.groupingWidth - The time (in seconds) over which measurements are grouped together
   * @param {string} params.groupingTimezone - The time (in seconds) over which measurements are grouped together
   * @param {boolean} params.doNotProcess - Ex: true
   * @param {string} params.clientId - Your client id can be obtained by creating an app at https://builder.quantimo.do
   * @param {boolean} params.doNotConvert - Ex: 1 
   * @param {boolean} params.minMaxFilter - Ex: 1
   * @returns {Promise<Object>} - Measurements response object
   */
  async getMeasurements(params) {
    const url = new URL('https://safe.dfda.earth/api/v3/measurements');
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': process.env.DFDA_CLIENT_ID,
        'X-Client-Secret': process.env.DFDA_CLIENT_SECRET,
      },
    });

    return await response.json();
  },

  /**
   * Post a new set or update existing measurements to the database
   * @param {Object} body - An array of measurement sets containing measurement items you want to insert.
   * @returns {Promise<Object>} - Posted measurements response object
   */
  async postMeasurements(body) {
    const response = await fetch(`https://safe.dfda.earth/api/v3/measurements/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': process.env.DFDA_CLIENT_ID,
        'X-Client-Secret': process.env.DFDA_CLIENT_SECRET,
      },
      body: JSON.stringify(body),
    });

    return await response.json();
  },

  /**  
   * Update a measurement
   * @param {Object} body - The id as well as the new startTime, note, and/or value of the measurement to be updated
   * @returns {Promise<Object>} - Updated measurement response object
   */
  async updateMeasurement(body) {
    const response = await fetch(`https://safe.dfda.earth/api/v3/measurements/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': process.env.DFDA_CLIENT_ID,
        'X-Client-Secret': process.env.DFDA_CLIENT_SECRET,
      },
      body: JSON.stringify(body),
    });

    return await response.json();
  },

  /**
   * Delete a measurement  
   * @returns {Promise<Object>} - Deleted measurement response object
   */
  async deleteMeasurement() {
    const response = await fetch(`https://safe.dfda.earth/api/v3/measurements/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': process.env.DFDA_CLIENT_ID,
        'X-Client-Secret': process.env.DFDA_CLIENT_SECRET,
      },
    });

    return await response.json();
  },
};

module.exports = measurementsService;
