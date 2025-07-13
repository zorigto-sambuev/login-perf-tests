const http = require('k6/http');
const { check, sleep } = require('k6');
const { Trend } = require('k6/metrics');

const responseTime = new Trend('response_time');

const options = {
    stages: [
        {duration: '30s', target: 25},
        {duration: '90s', target: 25}
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],
        http_req_failed: ['rate<0.05']
    }
}

function defaultFunction () {
    const res = http.get('https://jsonplaceholder.typicode.com/posts')
    check(res, {'status is 200': (r) => r.status === 200 });
    responseTime.add(res.timings.duration);
    sleep(1)
}

module.exports = {
    default: defaultFunction,
    options,
};