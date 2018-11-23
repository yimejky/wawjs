/*

Paged request for sonar urls
sonar supports pageSize and pageIndex as params in URL,
this can get all results (sequential, not to kill sonar)

IN:     uri
OUT:    concatenated paged result

node sonar/_sonar_rules/cli.js \
    'https://gazelle.ihe.net/sonar/api/rules/search?languages=js&' \
    | jsontool -a name
*/

const [, , URL] = process.argv

const async = require('async')
const request = require('request').defaults({ json: true })

request(`${URL}&pageIndex=${1}`, (err, { statusCode }, result) => {
    if (err || statusCode !== 200) return
    const { ps, total } = result

    const pageCounts = Math.ceil(total / ps)
    const urls = Array.from(Array(pageCounts), (_, x) => x)
      .map(num => num + 1)
      .map(index => `${URL}&pageIndex=${index}`)

  async.concatLimit(
    urls, 4,
    (url, callback) => request(url, (err, { statusCode }, result) =>
          (err || statusCode !== 200)
            ? callback(err)
            : callback(err, result.rules)),
      (err, results) => console.log(JSON.stringify(results, null, 2))
    )
  }
)
