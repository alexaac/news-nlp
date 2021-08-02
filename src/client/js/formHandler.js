function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  checkForName(formText);

  console.log('::: Form Submitted :::');

  // MeaningCloud API
  // Setup empty JS object to act as endpoint for all routes
  let projectData = {};

  /* Function to get global variables */
  const getEnvData = async () => {
    const request = await fetch('/all');

    try {
      const allData = await request.json();

      projectData = allData;

      setActions();
    } catch (error) {
      console.error('error', error);
    }
  };

  getEnvData();

  const setActions = async () => {
    const { apiKey, apiUrl, apiSentiment } = projectData;

    const formdata = new FormData();
    formdata.append('key', apiKey);
    formdata.append('txt', formText);
    formdata.append('lang', 'en');

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    const apiRes = await fetch(apiUrl, requestOptions);

    try {
      const meaningData = await apiRes.json();

      document.getElementById('results').innerHTML =
        apiSentiment[meaningData.score_tag];

      return meaningData;
    } catch (error) {
      console.error('error', error);
    }
  };

  //   fetch('http://localhost:8082/test')
  //     .then((res) => res.json())
  //     .then(function (res) {
  //       document.getElementById('results').innerHTML = res.message;
  //     });
}

export { handleSubmit };
