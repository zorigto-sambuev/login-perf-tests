import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

export let options = {
    stages: [
        {duration: '30s', target: 25},
        {duration: '90s', target: 25}
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],
        http_req_failed: ['rate<0.05']
    }
}

let responseTime = new Trend('response_time');

export default function () {
    const res = http.get('https://jsonplaceholder.typicode.com/posts')
    check(res, {'status is 200': (r) => r.status === 200 });
    responseTime.add(res.timings.duration);
    sleep(1)
}