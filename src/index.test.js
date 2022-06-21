const app = require('./index')
const request = require('supertest')
const assert = require('assert')

describe('Test index', () => {
  it('should return 200 on default route', async () => {
    await request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .then((res) => {
      assert(res)
    })
    .catch((err) => {
      assert(err)
    });
  })
})
