import WebIM from './webim/WebIM'

const apiurl = WebIM.config.apiURL
const org_name = WebIM.config.appkey.split('#')[0]
const app_name = WebIM.config.appkey.split('#')[1]

export const getUser = (username) => `${apiurl}/${org_name}/${app_name}/users/${username}` 