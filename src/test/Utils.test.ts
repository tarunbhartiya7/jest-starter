import { toUpperCase, getStringInfo, StringUtils } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils tests", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log("Setup");
    });

    afterEach(() => {
      // clearing mocks
      console.log("Teardown");
    });

    it("Should return correct upperCase", () => {
      const actual = sut.toUpperCase("abc");

      expect(actual).toBe("ABC");
      console.log("Actual test");
    });

    it("Should throw error on invalid argument", () => {
      expect(() => sut.toUpperCase("")).toThrow();
      expect(() => sut.toUpperCase("")).toThrow("Invalid argument!");
    });

    it("Should throw error on invalid argument with try catch block", () => {
      try {
        sut.toUpperCase(null);
      } catch (error) {
        console.log("error", error);

        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument!");
      }
    });
  });

  it("should reuturn uppercase of valid string", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  it("should return info for valid string", () => {
    const actual = getStringInfo("My-String");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
    expect(actual.characters).toContain<string>("M");
    expect(actual.characters).toEqual(
      expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
    );

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});

describe("getStringInfo for arg My-String should", () => {
  test("return right length", () => {
    const actual = getStringInfo("My-String");
    expect(actual.characters).toHaveLength(9);
  });

  test("return right lower case", () => {
    const actual = getStringInfo("My-String");
    expect(actual.lowerCase).toBe("my-string");
  });

  test("return right upper case", () => {
    const actual = getStringInfo("My-String");
    expect(actual.upperCase).toBe("MY-STRING");
  });

  test("return right characters", () => {
    const actual = getStringInfo("My-String");
    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
    expect(actual.characters).toContain<string>("M");
    expect(actual.characters).toEqual(
      expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
    );
  });

  test("return defined extra info", () => {
    const actual = getStringInfo("My-String");
    expect(actual.extraInfo).toBeDefined();
  });

  test("return right extra info", () => {
    const actual = getStringInfo("My-String");
    expect(actual.extraInfo).toEqual({});
  });
});
