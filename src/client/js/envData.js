/**
 * @description Get global variables
 * @param none
 */
const getEnvData = async () => {
  const request = await fetch('/all');

  try {
    const allData = await request.json();

    return allData;
  } catch (error) {
    console.error('error', error);
  }
};

export { getEnvData };
