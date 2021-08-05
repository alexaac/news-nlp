function checkUrl(inputUrl) {
  console.log('::: Running checkUrl :::', inputUrl);

  const expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression);

  if (!inputUrl.match(regex)) {
    return 'Invalid URL';
  } else {
    return 'Ok';
  }
}

export { checkUrl };
