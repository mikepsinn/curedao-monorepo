/**
 * Contains functions for extracting and saving Amazon order data.
 * Parses order details from the Amazon order history page and saves them as measurements.
 */

/**
 * Shows a Chrome notification with the given title and message.
 * @param {string} title - The title text for the notification.
 * @param {string} message - The message body for the notification. 
 */
function showNotification(title, message) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon.png', // Path to the icon for the notification
    title: title,
    message: message
  });
}

/**
 * Extracts Amazon order data from the given HTML and saves it as measurements.
 * @param {HTMLElement} [html=document] - The HTML element containing the Amazon order history. Defaults to the entire document.
 * @returns {Promise<Array>} A promise that resolves to the array of extracted measurements.
 */
export async function extractAndSaveAmazon(html) {
  debugger

  html = html || document;

  const orderCards = html.querySelectorAll('.order-card');
  let measurements = JSON.parse(localStorage.getItem('measurements')) || [];
  for (const orderCard of orderCards) {
    console.log('Order card:', orderCard);
    debugger
    let startAt = orderCard.querySelector('.delivery-box__primary-text').textContent.trim();
    if(startAt === 'Order received') {
      continue;
    }
    if(startAt.includes('Arriving')) {
      continue;
    }
    startAt = startAt.replace('Delivered ', '').trim();
    startAt = startAt + ', ' + new Date().getFullYear();
    startAt = parseDate(startAt);
    const productBoxes = orderCard.querySelectorAll('.a-fixed-left-grid.item-box.a-spacing-small, .a-fixed-left-grid.item-box.a-spacing-none');
    for (const box of productBoxes) {
      const image = box.querySelector('.product-image a img').src;
      const variableName = "Purchase of " + box.querySelector('.yohtmlc-product-title').textContent.trim();
      const url = box.querySelector('.product-image a').href;

      showNotification('Saving Purchase Data', `Saving ${variableName} from Amazon`);


      // Check if the product is already in localStorage
      const isMeasurementStored = measurements.some(measurement => measurement.url === url && measurement.startAt === startAt);

      if (!isMeasurementStored) {

        // Add the product details to the array
        measurements.push({
          startAt,
          variableName,
          unitName: "Count",
          value: 1,
          variableCategoryName: "Treatments",
          sourceName: "Amazon",
          url,
          image
        });
      }
    }
    console.log(`Processed ${orderCards.length} products. Measurements:`, measurements);
  }

  if(typeof global.apiOrigin === 'undefined') {
    global.apiOrigin = 'https://safe.dfda.earth';
  }

  if(measurements.length > 0) {
    console.log('Saving measurements:', measurements);
    const quantimodoAccessToken = await getQuantimodoAccessToken();
    let input = global.apiOrigin + '/api/v1/measurements?XDEBUG_SESSION_START=PHPSTORM';
    const response = await fetch(input, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${quantimodoAccessToken}`,
        'X-CLIENT-ID': 'digital-twin-safe',
      },
      body: JSON.stringify(measurements)
    });
    // const response = await fetch('https://local.quantimo.do/api/v1/measurements', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer demo`,
    //   },
    //   body: JSON.stringify([])
    // });
    if (!response.ok) {
      const text = await response.text();
      console.error('Error response:', text);
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
      console.log('Post Measurement Response from API:', data);
      localStorage.setItem('measurements', JSON.stringify(measurements));
    }
  }
  return measurements;

}

/**
 * Parses a delivery date string into ISO format.
 * @param {string} deliveryDate - The delivery date string to parse.
 * @returns {string} The parsed date in ISO format.
 */
function parseDate(deliveryDate) {
  deliveryDate = deliveryDate.replace(/[^0-9]/g, "Delivered ");
  deliveryDate += ", " + new Date().getFullYear();
  // convert to ISO date
  return new Date(deliveryDate).toISOString();
}

//module.exports = extractAndSaveAmazon;
