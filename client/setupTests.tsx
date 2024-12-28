import "@testing-library/jest-dom";
import "jest-location-mock";

jest.mock("providers/auth/authProvider", () => ({
    AuthProvider: jest.requireActual("providers/auth/authProvider"),
    useAuth: jest.fn()
}));
