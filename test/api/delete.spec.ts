import { endpoints } from "../../utils/api/endpoints";
import superagent from "superagent";
import dotenv from "dotenv";
dotenv.config();

describe("DELETE method", () => {
  it("Should return status 200", async () => {
    const res = await superagent.delete(
      process.env.BASE_URL + endpoints.delete + 1
    );

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({});
  });

  for (let i = 0; i < 4; i++) {
    it(`Should delete resource #${i + 1}`, async () => {
      const res = await superagent.delete(
        process.env.BASE_URL + endpoints.delete + `${i + 1}`
      );

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({});
    });
  }
});
