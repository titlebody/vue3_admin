import request from "../request";

// 获取配置
export const getSettings = (name) =>{
    return request.get("settings/"+name);
}
// 更新配置
export const updateSettings = (name,data) =>{
    return request.put("settings/"+name,data);
}