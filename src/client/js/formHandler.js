/* Function to get global variables */
const getEnvData = async () => {
  const request = await fetch('/all');

  try {
    const allData = await request.json();

    return allData;
  } catch (error) {
    console.error('error', error);
  }
};

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

const handleSubmit = async (event) => {
  event.preventDefault();

  // check what url was put into the form field
  let formUrl = document.getElementById('name').value;
  checkUrl(formUrl);

  console.log('::: Form Submitted :::');

  const { apiKey, apiUrl, apiSentiment } = await getEnvData();

  // MeaningCloud API
  const meaningData = await callMeaningApi(apiKey, apiUrl, formUrl);

  if (meaningData.status.code === '0') {
    document.getElementById('results').innerHTML =
      apiSentiment[meaningData.score_tag];
  } else {
    document.getElementById('results').innerHTML = meaningData.status.msg;
  }
};

export { handleSubmit };
