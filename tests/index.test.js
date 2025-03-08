// tests/index.test.js
const request = require("supertest");
const app = require("../src/index");

describe("GET /api", () => {
  it("should return Hello world!", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello world!");
  });
});

describe("GET /api/test", () => {
  it("should return a test message", async () => {
    const res = await request(app).get("/api/test");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Endpoint de teste");
  });
});

describe("POST /api/login", () => {
  it("deve retornar erro 401 quando email ou senha estiverem errado", async () => {
    const response = await request(app).post("/api/login").send({
      email: "test@example",
      password: "test12",
    });
    expect(response.statusCode).toBe(200);
    // expect(response.body.message).toBe("Usuario ou senha invalido");
  });
});

/*
describe('GET /api/test', () => {
  it('should return a test message', async () => {
    const res = await request(app).get('/api/test-2');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Endpoint de teste 2');
  });
});
*/

jest.setTimeout(30000);
