import axios from 'axios';

interface LoginResponse {
    success: boolean;
    message: string;
}

interface OTPResponse {
    success: boolean;
    message: string;
}

async function loginWithOTP(email: string, password: string, otp: string): Promise<LoginResponse> {
    try {
        // Send OTP to user's email
        const otpResponse = await sendOTP(email);
        if (!otpResponse.success) {
            return { success: false, message: otpResponse.message };
        }

        // Verify OTP with API
        const otpVerificationResponse = await verifyOTP(email, otp);
        if (!otpVerificationResponse.success) {
            return { success: false, message: otpVerificationResponse.message };
        }

        // Log user in
        const loginResponse = await login(email, password);
        return loginResponse;
    } catch (error) {
        console.error(error);
        return { success: false, message: 'An error occurred while logging in.' };
    }
}

async function sendOTP(email: string): Promise<OTPResponse> {
    try {
        // Send OTP to user's email using an API
        const response = await axios.post('https://example.com/send-otp', { email });
        return { success: true, message: 'OTP sent successfully.' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to send OTP.' };
    }
}

async function verifyOTP(email: string, otp: string): Promise<OTPResponse> {
    try {
        // Verify OTP with an API
        const response = await axios.post('https://example.com/verify-otp', { email, otp });
        return { success: true, message: 'OTP verified successfully.' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to verify OTP.' };
    }
}

async function login(email: string, password: string): Promise<LoginResponse> {
    try {
        // Log user in using an API
        const response = await axios.post('https://example.com/login', { email, password });
        return { success: true, message: 'Logged in successfully.' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to log in.' };
    }
}
