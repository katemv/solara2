import { AuthContext } from "../../providers/auth/authProvider";
import { FC, ReactNode } from "react";

interface MockState {
    user: {
        token: string;
        id: string;
    } | null;
    setUser: jest.Mock;
    isAuthorized: boolean;
    setIsAuthorized: jest.Mock;
}

const createMockState = (): MockState => ({
    user: null,
    setUser: jest.fn(),
    isAuthorized: false,
    setIsAuthorized: jest.fn()
});

class AuthMockState {
    private static instance: AuthMockState;
    private mockState: MockState;

    private constructor() {
        this.mockState = createMockState();
    }

    public static getInstance(): AuthMockState {
        if (!AuthMockState.instance) {
            AuthMockState.instance = new AuthMockState();
        }
        return AuthMockState.instance;
    }

    public getMockState(): MockState {
        return this.mockState;
    }

    public updateMockState(newState: Partial<MockState>): void {
        this.mockState = {
            ...this.mockState,
            ...newState
        };
    }

    public resetMockState(): void {
        this.mockState = createMockState();
        this.mockState.setUser.mockClear();
        this.mockState.setIsAuthorized.mockClear();
    }
}

export const MockAuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const mockState = AuthMockState.getInstance().getMockState();

    return (
        <AuthContext.Provider value={mockState}>
            {children}
        </AuthContext.Provider>
    );
};

export const getAuthState = () => AuthMockState.getInstance().getMockState();
export const updateAuthState = (newState: Partial<MockState>) => AuthMockState.getInstance().updateMockState(newState);
export const resetAuthState = () => AuthMockState.getInstance().resetMockState();

