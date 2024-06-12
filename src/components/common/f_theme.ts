import {ref} from "vue";
import {useRoute} from "vue-router";
//操控主题颜色icon显示隐藏
export const theme=ref("")
loadTheme()
//操控主题颜色
export function setTheme(val: string): void {
    if (val === 'dark') {
        // 设置为暗黑主题
        document.body.setAttribute('arco-theme', 'dark')
    }else {
        // 恢复亮色主题
        document.body.removeAttribute('arco-theme');
    }
    theme.value=val
    localStorage.setItem("theme", theme.value)

}

//主题颜色持久化
export function loadTheme(): void {
    const val=localStorage.getItem("theme")
    //判断本地存储有没有theme,
    if (val) {
        //判断theme的值是什么
        if (val=="dark"){
            theme.value=val
            setTheme(val)
        }
    }
}

export function xx(){
    console.log("aaaa")
}

