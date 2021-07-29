function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);

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
    const { apiKey, apiUrl } = projectData;

    const data = {
      key: apiKey,
      model: 'general',
      lang: 'en',
      txt: formText,
    };

    console.log('Data: ', data);

    const apiRes = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      redirect: 'follow',
    })
      .then((response) => ({
        status: response.status,
        body: response.json(),
      }))
      .then(({ status, body }) => {
        console.log(status, body);
        document.getElementById('results').innerHTML = body;
      })
      .catch((error) => console.log('error', error));

    //   try {
    //   const meaningData = await apiRes.json();

    //   document.getElementById('results').innerHTML = res.message;

    //   return meaningData;
    // } catch (error) {
    //   console.error('error', error);
    // }
  };

  //   fetch('http://localhost:8082/test')
  //     .then((res) => res.json())
  //     .then(function (res) {
  //       document.getElementById('results').innerHTML = res.message;
  //     });
}

export { handleSubmit };
