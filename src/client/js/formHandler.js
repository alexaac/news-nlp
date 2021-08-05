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
    console.log('Api res ', meaningData);

    return meaningData;
  } catch (error) {
    console.error('error', error);
  }
};

const handleSubmit = async (event, formUrl) => {
  event.preventDefault();

  console.log(formUrl);
  // const checked = checkUrl(formUrl);
  // console.log(checked);
  // if (checked !== 'Ok') {
  //   document.getElementById('results').innerHTML = 'Invalid URL';
  //   return;
  // }

  console.log('::: Form Submitted :::');

  const { apiKey, apiUrl, apiSentiment } = await getEnvData();

  // MeaningCloud API
  const meaningData = await callMeaningApi(apiKey, apiUrl, formUrl);

  const msg =
    meaningData.status.code === '0'
      ? apiSentiment[meaningData.score_tag]
      : meaningData.status.msg;

  document.getElementById('results').innerHTML = msg;
};

export { handleSubmit, callMeaningApi };
