import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login/Check',
    method: 'get',
    params: data
  })
}

export function getInfo(token) {
  console.log('getinfo')
  return request({
    url: '/home/GetUserEntity',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
