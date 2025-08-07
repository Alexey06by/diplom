import { endpoints } from "../../utils/api/endpoints";
import { patchRequestBody } from "../../fixtures/api/patchRequestBody";
import superagent from "superagent";
import dotenv from "dotenv";
import { getResponseBody } from "../../fixtures/api/getResponseBody";
dotenv.config();

describe("PATCH method", () => {
  it("Should return status 200", async () => {
    const res = await superagent.patch(process.env.BASE_API_URL + endpoints.patch).send(patchRequestBody.titleObj);

    expect(res.statusCode).toBe(200);
  });
  it("Should update id with valid number value", async () => {
    const res = await superagent.patch(process.env.BASE_API_URL + endpoints.patch).send(patchRequestBody.idObj);

    expect(typeof res.body.id).toEqual("number");
    expect(res.body.id).toEqual(patchRequestBody.idObj.id);
  });
  it("Should update title with valid string value", async () => {
    const res = await superagent.patch(process.env.BASE_API_URL + endpoints.patch).send(patchRequestBody.titleObj);

    expect(typeof res.body.title).toEqual("string");
    expect(res.body.title).toEqual(patchRequestBody.titleObj.title);
  });
  it("Should update body property with valid string value", async () => {
    const res = await superagent.patch(process.env.BASE_API_URL + endpoints.patch).send(patchRequestBody.bodyObj);

    expect(typeof res.body.body).toEqual("string");
    expect(res.body.body).toEqual(patchRequestBody.bodyObj.body);
  });
  it("Should update userId with valid number value", async () => {
    const res = await superagent.patch(process.env.BASE_API_URL + endpoints.patch).send(patchRequestBody.userIdObj);

    expect(typeof res.body.userId).toEqual("number");
    expect(res.body.userId).toEqual(patchRequestBody.userIdObj.userId);
  });
  it("Should leave resource without changes if patch with empty body", async () => {
    const res = await superagent.patch(process.env.BASE_API_URL + endpoints.patch).send({});

    expect(res.body).toEqual(getResponseBody);
  });
});
