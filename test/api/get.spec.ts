import { endpoints } from "../../utils/api/endpoints";
import { getResponseBody } from "../../fixtures/api/getResponseBody";
import superagent from "superagent";
import dotenv from "dotenv";
dotenv.config();

describe("GET method", () => {
  it("Should return status 200", async () => {
    const res = await superagent.get(process.env.BASE_API_URL + endpoints.get);

    expect(res.statusCode).toBe(200);
  });
  it("Should recive id with valid number value", async () => {
    const res = await superagent.get(process.env.BASE_API_URL + endpoints.get);

    expect(typeof res.body.id).toEqual("number");
    expect(res.body.id).toEqual(getResponseBody.id);
  });
  it("Should recive title with valid string value", async () => {
    const res = await superagent.get(process.env.BASE_API_URL + endpoints.get);

    expect(typeof res.body.title).toEqual("string");
    expect(res.body.title).toEqual(getResponseBody.title);
  });
  it("Should recive body property with valid string value", async () => {
    const res = await superagent.get(process.env.BASE_API_URL + endpoints.get);

    expect(typeof res.body.body).toEqual("string");
    expect(res.body.body).toEqual(getResponseBody.body);
  });
  it("Should recive userId with valid number value", async () => {
    const res = await superagent.get(process.env.BASE_API_URL + endpoints.get);

    expect(typeof res.body.userId).toEqual("number");
    expect(res.body.userId).toEqual(getResponseBody.userId);
  });
});
