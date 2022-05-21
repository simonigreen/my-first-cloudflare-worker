import flag from 'country-code-emoji';

const template = (cf) => {
  const emoji = flag(cf.country) || '👋';

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="A simple Cloudflare worker test">
    <title>Hello</title>

    <style>
      body {
        margin: 0 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: hsl(0 0% 93%);
        font-family: sans-serif;
      }
      .container {
        background: hsl(0 0% 100%);
        border-radius: 16px;
        padding: 32px;
      }
    </style>
</head>
<body>
  <div class="container">
    <h1>Hello there! You're connecting from ${cf.city} in ${cf.country} ${emoji}</h1>
  </div>
</body>
</html>
`;
};

export default template;
