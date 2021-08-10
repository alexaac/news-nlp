/**
 * @description Get data from Meaning API
 * @param {string} apiKey - API key
 * @param {string} apiUrl - API url
 * @param {string} formUrl - url to analyze
 */
const callMeaningApi = async (apiKey, apiUrl, formUrl) => {
  const formdata = new FormData();
  formdata.append('key', apiKey);
  formdata.append('url', formUrl);
  formdata.append('lang', 'en');

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  const apiRes = await fetch(apiUrl, requestOptions);

  try {
    const meaningData = await apiRes.json();

    return meaningData;
  } catch (error) {
    console.error('error', error);
  }
};

/**
 * @description Display result from Meaning API on the page
 * @param {object} event - submit
 * @param {string} formUrl - url to analyze
 */
const handleSubmit = async (event, formUrl) => {
  event.preventDefault();

  // check what url was put into the form field
  const checked = checkUrl(formUrl);

  if (checked !== 'Ok') {
    document.getElementById('results').innerHTML = 'Invalid URL';
    return;
  }

  console.log('::: Form Submitted :::');

  const { apiKey, apiSentiment } = await getEnvData();

  // MeaningCloud API
  const meaningData = await callMeaningApi(
    apiKey,
    'https://api.meaningcloud.com/sentiment-2.1',
    formUrl,
  );

  const msg = `General feeling: ${
    meaningData.score_tag ? apiSentiment[meaningData.score_tag] : ''
  } <br/>
  Score_tag: ${meaningData.score_tag} <br/>
  Subjectivity: ${meaningData.subjectivity} <br/>
  Confidence: ${meaningData.confidence} <br/>
  Agreement: ${meaningData.agreement} <br/>
  Irony: ${meaningData.irony}`;

  document.getElementById('results').innerHTML = msg;
};

export { handleSubmit, callMeaningApi };
