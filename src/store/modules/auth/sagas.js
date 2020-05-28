import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from "../../../services/history";
import api from '../../../services/api'
import { signInSuccess } from "./actions";

export function* Login({ payload }) {
    const { username, password } = payload;

    const response = yield call(api.post, '/authenticate', {
        username,
        password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
}
export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', Login)
]);