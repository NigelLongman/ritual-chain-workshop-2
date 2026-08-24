import { expect } from "chai";

import {
  successfulResponse,
  lowerPriceResponse,
  emptyResponse,
  serverErrorResponse,
  malformedResponse,
  responseValue,
  isSuccessful,
} from "./fixtures/oracle-responses";

describe("oracle fixtures", function () {
  it("contains a successful response", function () {
    expect(
      isSuccessful(
        successfulResponse,
      ),
    ).to.equal(true);
  });

  it("reads a price value", function () {
    expect(
      responseValue(
        successfulResponse,
        "price",
      ),
    ).to.equal(2500);
  });

  it("contains a lower price case", function () {
    expect(
      responseValue(
        lowerPriceResponse,
        "price",
      ),
    ).to.equal(1800);
  });

  it("returns undefined for missing values", function () {
    expect(
      responseValue(
        emptyResponse,
        "price",
      ),
    ).to.equal(undefined);
  });

  it("recognizes a server error", function () {
    expect(
      isSuccessful(
        serverErrorResponse,
      ),
    ).to.equal(false);
  });

  it("recognizes malformed response data", function () {
    expect(
      responseValue(
        malformedResponse,
        "price",
      ),
    ).to.equal(undefined);
  });

  it("can compare two fixture values", function () {
    const first =
      responseValue(
        successfulResponse,
        "price",
      ) as number;

    const second =
      responseValue(
        lowerPriceResponse,
        "price",
      ) as number;

    expect(first).to.be.greaterThan(second);
  });
});
