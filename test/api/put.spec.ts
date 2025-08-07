import { endpoints } from "../../utils/api/endpoints";
import { putRequestBody } from "../../fixtures/api/putRequestBody";
import superagent from "superagent";
import dotenv from "dotenv";
dotenv.config();

describe("PUT method", () => {
  it("Should return status 200", async () => {
    const res = await superagent.put(process.env.BASE_API_URL + endpoints.put).send(putRequestBody[0]);

    expect(res.statusCode).toBe(200);
  });

  for (let i = 0; i < 3; i++) {
    it(`Should update resource with data from object ${i + 1}`, async () => {
      const res = await superagent.put(process.env.BASE_API_URL + endpoints.put).send(putRequestBody[i]);

      expect(res.body).toMatchObject(putRequestBody[i]);
    });
  }

  it("Should leave only id if update resource with unexpected properties", async () => {
    const res = await superagent.put(process.env.BASE_API_URL + endpoints.put).send({ test: test });

    expect(res.body).toEqual({ id: 1 });
  });
});
