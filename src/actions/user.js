import { getInfo, editName, modifyPassword, uploadAvatar } from '../api'

export const FETCH_INFO_REQUEST = 'FETCH_INFO_REQUEST';
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS';
export const FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE';

const fetchInfoRequest = () => ({
    type: FETCH_INFO_REQUEST
})
const fetchInfoSuccess = data => ({
    type: FETCH_INFO_SUCCESS,
    data
})
const fetchInfoFailure = error => ({
    type: FETCH_INFO_FAILURE,
    error
})
export const fetchInfo = () => dispatch => {
    dispatch(fetchInfoRequest())
    return getInfo().then(res => {
        dispatch(fetchInfoSuccess(res.data))
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchInfoFailure(error))
        return {...error, status: false}
    })
}

export const FETCH_EDIT_NAME_REQUEST = 'FETCH_EDIT_NAME_REQUEST';
export const FETCH_EDIT_NAME_SUCCESS = 'FETCH_EDIT_NAME_SUCCESS';
export const FETCH_EDIT_NAME_FAILURE = 'FETCH_EDIT_NAME_FAILURE';

const fetchEditNameRequest = name => ({
    type: FETCH_EDIT_NAME_REQUEST,
    name
})
const fetchEditNameSuccess = () => ({
    type: FETCH_EDIT_NAME_SUCCESS
})
const fetchEditNameFailure = error => ({
    type: FETCH_EDIT_NAME_FAILURE,
    error
})
export const fetchEditName = (name) => dispatch => {
    dispatch(fetchEditNameRequest(name))
    return editName(name).then(res => {
        dispatch(fetchEditNameSuccess())
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchEditNameFailure(error))
        return {...error, status: false}
    })
}

export const FETCH_MODIFY_PASSWORD_REQUEST = 'FETCH_MODIFY_PASSWORD_REQUEST';
export const FETCH_MODIFY_PASSWORD_SUCCESS = 'FETCH_MODIFY_PASSWORD_SUCCESS';
export const FETCH_MODIFY_PASSWORD_FAILURE = 'FETCH_MODIFY_PASSWORD_FAILURE';

const fetchModifyPasswordRequest = (oldPassword, newPassword, newPassword2) => ({
    type: FETCH_MODIFY_PASSWORD_REQUEST,
    oldPassword, newPassword, newPassword2
})
const fetchModifyPasswordSuccess = () => ({
    type: FETCH_MODIFY_PASSWORD_SUCCESS
})
const fetchModifyPasswordFailure = error => ({
    type: FETCH_MODIFY_PASSWORD_FAILURE,
    error
})
export const fetchModifyPassword = (oldPassword, newPassword, newPassword2) => dispatch => {
    dispatch(fetchModifyPasswordRequest())
    return modifyPassword(oldPassword, newPassword, newPassword2).then(res => {
        dispatch(fetchModifyPasswordSuccess())
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchModifyPasswordFailure(error))
        return {...error, status: false}
    })
}

export const FETCH_UPLOAD_AVATAR_REQUEST = 'FETCH_UPLOAD_AVATAR_REQUEST';
export const FETCH_UPLOAD_AVATAR_SUCCESS = 'FETCH_UPLOAD_AVATAR_SUCCESS';
export const FETCH_UPLOAD_AVATAR_FAILURE = 'FETCH_UPLOAD_AVATAR_FAILURE';

const fetchUploadAvatarRequest = () => ({
    type: FETCH_UPLOAD_AVATAR_REQUEST
})
const fetchUploadAvatarSuccess = data => ({
    type: FETCH_UPLOAD_AVATAR_SUCCESS,
    data
})
const fetchUploadAvatarFailure = error => ({
    type: FETCH_UPLOAD_AVATAR_FAILURE,
    error
})
export const fetchUploadAvatar = file => dispatch => {
    dispatch(fetchUploadAvatarRequest())
    return uploadAvatar(file).then(res => {
        dispatch(fetchUploadAvatarSuccess(res.user))
        return {...res, status: true}
    }).catch(error => {
        dispatch(fetchUploadAvatarFailure(error))
        return {...error, status: false}
    })
}
