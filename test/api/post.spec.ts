import { endpoints } from "../../utils/api/endpoints";
import { postRequestBody } from "../../fixtures/api/postRequestBody";
import superagent from "superagent";
import dotenv from "dotenv";
dotenv.config();

describe("POST method", () => {
  it("Should return status 201", async () => {
    const res = await superagent.post(process.env.BASE_API_URL + endpoints.post).send(postRequestBody);

    expect(res.statusCode).toBe(201);
  });
  it("Should create resource with id that has number value", async () => {
    const res = await superagent.post(process.env.BASE_API_URL + endpoints.post).send(postRequestBody);

    expect(typeof res.body.id).toEqual("number");
  });
  it("Should create resource with data corresponding to request", async () => {
    const res = await superagent.post(process.env.BASE_API_URL + endpoints.post).send(postRequestBody);

    expect(res.body).toMatchObject(postRequestBody);
  });
  it("Should create resource with id only if request body contains unexpected property", async () => {
    const res = await superagent.post(process.env.BASE_API_URL + endpoints.post).send({ test: test });

    expect(res.body).toEqual({ id: 101 });
  });
  it("Should create resource with id and userId only", async () => {
    const res = await superagent.post(process.env.BASE_API_URL + endpoints.post).send({ userId: 24 });

    expect(res.body).toEqual({ id: 101, userId: 24 });
  });
});
