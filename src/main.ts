import init from './init';

let PORT:number;

if(process.env.PORT != null) PORT = parseInt(process.env.PORT);
else PORT = 64100;

async function initServer()
{
  let app:any = await init();
  let server = app.listen(PORT, () => { console.log(`App is running at http://localhost:${PORT}`); });

  return server;
}

export default async function main(program:any)
{
  await initServer();
}
