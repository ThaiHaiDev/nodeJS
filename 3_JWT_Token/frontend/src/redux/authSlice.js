import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,  // user hiện tại
            isFetching: false, // Chức năng login
            error: false   // Xem nó có lỗi hay không
        },
        register: {
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers: {
        loginStart: (state) => {  // Bắt đầu login
            state.login.isFetching = true;  // Đang login
        },
        loginSuccess: (state, action) => {  // Login thành công
            state.login.isFetching = false;  // Hết đang login
            state.login.currentUser = action.payload;  // Trả lại tất cả thông tin người dùng payload
            state.login.error = false;  // Không có lỗi gì
        },
        loginFailed: (state) => {  // Login thất lại
            state.login.isFetching = false;
            state.login.error = true;
        },

        registerStart: (state) => {  // Bắt đầu register.
            state.register.isFetching = true;  // Đang register.
        },
        registerSuccess: (state) => {  // register thành công
            state.register.isFetching = false;  // Hết đang register.
            state.register.error = false;  // Không có lỗi gì
            state.register.success = true;
        },
        registerFailed: (state) => {  // register thất lại
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        }
    }
})

export const { loginStart, loginFailed, loginSuccess, registerStart, registerFailed, registerSuccess } = authSlice.actions;

export default authSlice.reducer;