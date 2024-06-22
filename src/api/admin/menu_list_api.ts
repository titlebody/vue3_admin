import request from "@/api/request";

//获取侧边栏
export const getMenuList = () => {
    return request.get("/admin/menu");
}