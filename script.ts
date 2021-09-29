import fs from 'fs'
import fsPromises from 'fs/promises';

async function main() {

  let qePath = "./query_engine-windows.dll.node"
  let NodeAPIQueryEngineLibrary = require(qePath)

  const datamodel = fs.readFileSync('schema.prisma', 'utf-8')

  let getConfig = await NodeAPIQueryEngineLibrary.getConfig({
    datamodel: datamodel,
    datasourceOverrides: {},
    ignoreEnvVarErrors: false,
    env: process.env,
  })    
  console.log('getConfig result:', getConfig)

  try {
    await fsPromises.unlink(qePath)
  } catch (e) {
    console.log(e)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
  })