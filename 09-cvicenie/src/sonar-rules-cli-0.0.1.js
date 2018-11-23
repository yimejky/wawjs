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

const { parallelLimit } = require('async')
const request = require('request').defaults({ json: true })

request(`${URL}&pageIndex=${1}`, (err, { statusCode }, result) => {
    if (err || statusCode !== 200)
      return

    const { ps, total, rules } = result
    const pageCounts = total / ps

    const tasks = []

    for (let i = 2; i < pageCounts; i++) {
      tasks.push((callback) => {
        request(`${URL}&pageIndex=${i}`, (err, { statusCode }, result) => {
          if (err || statusCode !== 200)
            callback(err)
          else
            callback(err, result.rules)
        })
      })
    }

    parallelLimit(tasks, 4, (err, results) => {
      results.push(rules)
      results = results.reduce((acc, rulesArray) => {
        return !rulesArray ? acc : [...acc, ...rulesArray]
      }, [])
      console.log(JSON.stringify(results, null, 2))
    })
  }
)
